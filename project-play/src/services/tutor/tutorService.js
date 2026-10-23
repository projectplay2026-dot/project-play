// Punto único de entrada del tutor.
// La interfaz del chat solo llama a askTutor(); no sabe qué proveedor responde.
// Para conectar la IA real basta con definir VITE_TUTOR_API_URL (ver .env.example).
import { askDemo } from './demoProvider.js';
import { askApi } from './apiProvider.js';

const API_URL = (import.meta.env?.VITE_TUTOR_API_URL || '').trim();

export const tutorMode = API_URL ? 'api' : 'demo';

export async function askTutor(question, history = []) {
  if (API_URL) {
    try {
      const answer = await askApi(question, history, { url: API_URL });
      return { ...answer, mode: 'api' };
    } catch (err) {
      // Si el backend falla, el chat sigue funcionando con el modo demostración.
      const answer = await askDemo(question);
      return { ...answer, mode: 'demo', fallbackReason: err.message };
    }
  }
  const answer = await askDemo(question);
  return { ...answer, mode: 'demo' };
}

// Convierte una respuesta estructurada a texto plano (para voz e historial).
export function answerToText(answer) {
  const parts = [];
  if (answer.title) parts.push(answer.title + '.');
  if (answer.paragraphs) parts.push(...answer.paragraphs);
  if (answer.bullets) parts.push(...answer.bullets);
  if (answer.example) parts.push('Ejemplo: ' + answer.example);
  return parts.join(' ');
}
