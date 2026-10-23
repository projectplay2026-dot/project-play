import { useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  RotateCcw,
  Sparkles,
  Target,
  Trophy,
  XCircle,
} from 'lucide-react';
import { identifyItems, scrumQuiz } from '../data/activities.js';
import { useProgress } from '../hooks/useProgress.jsx';
import { ProgressRing } from '../components/ui.jsx';

const ACTIVITIES = {
  cuestionario: {
    id: 'scrum',
    title: 'Cuestionario Scrum',
    eyebrow: 'Actividad 1',
    items: scrumQuiz,
    variant: 'quiz',
  },
  identifica: {
    id: 'identify',
    title: 'Identifica el concepto',
    eyebrow: 'Actividad 2',
    items: identifyItems,
    variant: 'identify',
  },
};

export function ActivitiesHub({ navigate }) {
  const { progress } = useProgress();
  const r1 = progress.quizzes.scrum;
  const r2 = progress.quizzes.identify;
  return (
    <>
      <header className="page-head">
        <span className="eyebrow">Practica</span>
        <h1>Actividades interactivas</h1>
        <p>Pon a prueba lo que aprendiste. Recibirás retroalimentación en cada respuesta y tu resultado se guarda.</p>
      </header>
      <div className="activity-grid">
        <button className="card card-interactive activity-card" onClick={() => navigate('cuestionario')}>
          <div className="art" aria-hidden="true">
            <span className="mini-opt">A</span>
            <span className="mini-opt ok">B ✓</span>
            <span className="mini-opt">C</span>
            <span className="mini-opt">D</span>
          </div>
          <div>
            <span className="eyebrow">Actividad 1</span>
            <h3>Cuestionario Scrum</h3>
          </div>
          <p className="muted">
            {scrumQuiz.length} preguntas de opción múltiple sobre roles, eventos, artefactos y técnicas de estimación.
          </p>
          <div className="meta">
            <span className="pill">
              <Gamepad2 size={13} /> {scrumQuiz.length} preguntas
            </span>
            {r1 && (
              <span className="pill done">
                <Trophy size={13} /> Mejor: {r1.best}/{r1.total}
              </span>
            )}
          </div>
        </button>
        <button className="card card-interactive activity-card" onClick={() => navigate('identifica')}>
          <div className="art" aria-hidden="true" style={{ padding: '0 18px' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, opacity: 0.9, textAlign: 'center' }}>
              "Responsable de establecer Scrum…"
            </span>
          </div>
          <div>
            <span className="eyebrow">Actividad 2</span>
            <h3>Identifica el concepto</h3>
          </div>
          <p className="muted">
            Lee una descripción y elige el concepto correcto. Incluye Scrum, PMBOK y XP.
          </p>
          <div className="meta">
            <span className="pill">
              <Target size={13} /> {identifyItems.length} conceptos
            </span>
            {r2 && (
              <span className="pill done">
                <Trophy size={13} /> Mejor: {r2.best}/{r2.total}
              </span>
            )}
          </div>
        </button>
      </div>
    </>
  );
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const KEYS = ['A', 'B', 'C', 'D'];

export function QuizRunner({ kind, navigate }) {
  const activity = ACTIVITIES[kind];
  const { recordQuiz } = useProgress();
  const [attempt, setAttempt] = useState(0);
  // La primera vez se respeta el orden; al reintentar se mezclan las preguntas.
  const items = useMemo(
    () => (attempt === 0 ? activity.items : shuffle(activity.items)),
    [attempt, activity]
  );
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // índice elegido por pregunta
  const [finished, setFinished] = useState(false);

  const item = items[index];
  const picked = answers[index];
  const answered = picked !== undefined;
  const score = answers.filter((a, i) => a === items[i].answer).length;

  const choose = (i) => {
    if (answered) return;
    const next = [...answers];
    next[index] = i;
    setAnswers(next);
  };

  const goNext = () => {
    if (index < items.length - 1) {
      setIndex(index + 1);
    } else {
      recordQuiz(activity.id, score, items.length);
      setFinished(true);
    }
  };

  const retry = () => {
    setAttempt((a) => a + 1);
    setIndex(0);
    setAnswers([]);
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / items.length) * 100);
    const msg =
      pct === 100
        ? '¡Perfecto! Dominas estos conceptos.'
        : pct >= 70
          ? '¡Muy bien! Repasa las preguntas que fallaste.'
          : pct >= 40
            ? 'Vas por buen camino. Revisa las explicaciones y vuelve a intentarlo.'
            : 'Te recomendamos repasar las lecciones y volver a intentarlo.';
    return (
      <div className="quiz">
        <button className="back" onClick={() => navigate('actividades')}>
          <ArrowLeft size={18} /> Actividades
        </button>
        <section className="card result">
          <ProgressRing value={pct} size={130} stroke={11} label={`${pct}%`} gradientId="ring-result" />
          <span className="eyebrow">{activity.title}</span>
          <div className="score">
            {score}/{items.length}
          </div>
          <h2>{msg}</h2>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={retry}>
              <RotateCcw size={18} /> Volver a intentar
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('tutor')}>
              <Sparkles size={18} /> Preguntar al tutor
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('panel')}>
              Ir al panel
            </button>
          </div>
        </section>
        <h3 style={{ fontSize: 20 }}>Explicación de las respuestas</h3>
        <div className="review-list">
          {items.map((q, i) => {
            const ok = answers[i] === q.answer;
            return (
              <div key={q.id} className={`card review-item ${ok ? 'ok' : 'no'}`}>
                <span className="ic">{ok ? <CheckCircle2 size={20} /> : <XCircle size={20} />}</span>
                <div>
                  <h4>{q.question || q.description}</h4>
                  <p className="ans">
                    {ok ? (
                      <>
                        Tu respuesta: <b>{q.options[q.answer]}</b>
                      </>
                    ) : (
                      <>
                        Elegiste <s>{q.options[answers[i]]}</s> · Correcta: <b>{q.options[q.answer]}</b>
                      </>
                    )}
                  </p>
                  <p>{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const correct = picked === item.answer;

  return (
    <div className="quiz">
      <button className="back" onClick={() => navigate('actividades')}>
        <ArrowLeft size={18} /> Actividades
      </button>
      <div className="quiz-top">
        <div className="row">
          <span>
            {activity.eyebrow} · {activity.title}
          </span>
          <span className="mono">
            {index + 1} / {items.length}
          </span>
        </div>
        <div className="dots" aria-hidden="true">
          {items.map((q, i) => (
            <i
              key={q.id}
              className={
                answers[i] !== undefined ? (answers[i] === q.answer ? 'ok' : 'no') : i === index ? 'cur' : ''
              }
            />
          ))}
        </div>
      </div>

      <section className="card question-card" key={item.id + attempt}>
        {activity.variant === 'quiz' ? (
          <>
            <h2>{item.question}</h2>
            <div className="choice-list">
              {item.options.map((opt, i) => {
                let cls = '';
                if (answered) {
                  if (i === item.answer) cls = 'correct';
                  else if (i === picked) cls = 'wrong';
                  else cls = 'dim';
                }
                return (
                  <button key={i} className={`choice ${cls}`} onClick={() => choose(i)} disabled={answered}>
                    <span className="key">{KEYS[i]}</span>
                    {opt}
                    {answered && i === item.answer && <CheckCircle2 className="mark" size={20} color="var(--success)" />}
                    {answered && i === picked && i !== item.answer && (
                      <XCircle className="mark" size={20} color="var(--danger)" />
                    )}
                  </button>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="prompt-card" style={{ marginTop: 8 }}>
              <span className="q">¿QUÉ CONCEPTO ES?</span>
              {item.description}
            </div>
            <div className="concept-grid">
              {item.options.map((opt, i) => {
                let cls = '';
                if (answered) {
                  if (i === item.answer) cls = 'correct';
                  else if (i === picked) cls = 'wrong';
                  else cls = 'dim';
                }
                return (
                  <button key={i} className={`concept ${cls}`} onClick={() => choose(i)} disabled={answered}>
                    {opt}
                  </button>
                );
              })}
            </div>
          </>
        )}

        {answered && (
          <div className={`feedback ${correct ? 'ok' : 'no'}`} role="status">
            {correct ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
            <div>
              <b>{correct ? '¡Correcto!' : `Incorrecto. La respuesta es: ${item.options[item.answer]}.`}</b>
              {item.explanation}
            </div>
          </div>
        )}

        <div className="quiz-actions">
          <button className="btn btn-primary" onClick={goNext} disabled={!answered}>
            {index < items.length - 1 ? 'Siguiente' : 'Ver resultado'} <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
