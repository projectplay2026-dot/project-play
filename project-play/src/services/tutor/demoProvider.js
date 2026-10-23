// Proveedor del MODO DEMOSTRACIÓN.
// No usa IA: busca la pregunta en una base de conocimiento local
// y devuelve una respuesta educativa predefinida.
import { knowledgeBase } from './knowledgeBase.js';

export function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9ñ\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenMatches(tokens, word) {
  // Palabras cortas (xp, ci, po) deben coincidir exactamente.
  if (word.length < 4) return tokens.includes(word);
  // Palabras largas aceptan plurales o variantes (riesgo → riesgos).
  return tokens.some((t) => t === word || (t.startsWith(word) && t.length - word.length <= 3));
}

const IGNORED = new Set(['que', 'es', 'el', 'la', 'los', 'las', 'un', 'una', 'de', 'del', 'y', 'en', 'como', 'cual', 'entre']);

export function searchKnowledge(question) {
  const tokens = normalize(question).split(' ').filter(Boolean);
  const scored = knowledgeBase
    .map((entry) => {
      let score = 0;
      for (const kw of entry.keywords) {
        const words = kw.split(' ').filter((w) => !IGNORED.has(w));
        if (words.length === 0) continue;
        if (words.every((w) => tokenMatches(tokens, w))) {
          // Las frases de varias palabras son más específicas.
          score = Math.max(score, words.length * 2 + (kw.split(' ').length > 1 ? 1 : 0));
        }
      }
      return { entry, score };
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored;
}

const GREETING = /^(hola|buenas|buenos dias|buenas tardes|buenas noches|hey|que tal)\b/;
const THANKS = /\b(gracias|muchas gracias|te agradezco)\b/;

export async function askDemo(question) {
  const n = normalize(question);

  if (THANKS.test(n)) {
    return {
      title: '¡Con gusto!',
      paragraphs: ['Me alegra ayudarte. ¿Quieres repasar otro concepto o practicar con el cuestionario de Scrum?'],
      related: ['¿Qué es Planning Poker?', '¿Qué es la ruta crítica?'],
    };
  }

  const results = searchKnowledge(question);

  if (results.length === 0) {
    if (GREETING.test(n)) {
      return {
        title: '¡Hola!',
        paragraphs: [
          'Soy Project Play AI. Puedo explicarte conceptos de Scrum, PMBOK, XP y gestión de proyectos. Escribe tu pregunta o elige una sugerencia.',
        ],
        related: ['¿Qué es Scrum?', '¿Qué es el PMBOK?'],
      };
    }
    return {
      title: 'Todavía no tengo esa respuesta',
      paragraphs: [
        'En el modo demostración solo conozco los temas de los módulos de Project Play. Intenta preguntar con el nombre de un concepto, por ejemplo "Sprint", "Product Owner", "ruta crítica" o "integración continua".',
      ],
      related: ['¿Qué es Scrum?', '¿Qué es el PMBOK?', '¿Qué es Extreme Programming?'],
      notFound: true,
    };
  }

  const best = results[0].entry;
  return {
    title: best.title,
    paragraphs: best.paragraphs,
    bullets: best.bullets,
    example: best.example,
    lessonId: best.lessonId,
    related: best.related,
  };
}
