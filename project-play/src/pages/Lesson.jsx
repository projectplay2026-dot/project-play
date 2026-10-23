import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Circle, Clock, Lightbulb, Sparkles } from 'lucide-react';
import { allLessons, findLesson, findModule } from '../data/modules.js';
import { useProgress } from '../hooks/useProgress.jsx';
import LessonCheck from '../components/LessonCheck.jsx';
import { widgets } from '../components/widgets.jsx';
import { Bar, useToast } from '../components/ui.jsx';
import { NotFound } from './Modules.jsx';

export default function Lesson({ lessonId, navigate }) {
  const { progress, stats, toggleLesson, completeLesson, visitLesson } = useProgress();
  const toast = useToast();
  const lesson = findLesson(lessonId);

  useEffect(() => {
    if (lesson) visitLesson(lesson.id);
  }, [lesson, visitLesson]);

  if (!lesson) return <NotFound navigate={navigate} />;

  const module = findModule(lesson.moduleId);
  const idx = allLessons.findIndex((l) => l.id === lesson.id);
  const prev = allLessons[idx - 1];
  const next = allLessons[idx + 1];
  const done = Boolean(progress.completed[lesson.id]);
  const Widget = lesson.widget ? widgets[lesson.widget] : null;
  const posInModule = module.lessons.findIndex((l) => l.id === lesson.id) + 1;
  const mp = stats.byModule[module.id];

  const onToggle = () => {
    toggleLesson(lesson.id);
    toast(done ? 'Lección marcada como pendiente' : 'Lección completada');
  };

  const completeAndNext = () => {
    if (!done) {
      completeLesson(lesson.id);
      toast('Lección completada');
    }
    if (next) navigate('leccion', next.id);
    else navigate('progreso');
  };

  return (
    <>
      <button className="back" onClick={() => navigate('modulo', module.id)}>
        <ArrowLeft size={18} /> Módulo {module.number}: {module.title}
      </button>

      <div className="lesson-layout">
        <article className="lesson-article">
          <div style={{ display: 'grid', gap: 10 }}>
            <span className="eyebrow">
              Lección {posInModule} de {module.lessons.length}
            </span>
            <h1>{lesson.title}</h1>
            <p className="lesson-lead">{lesson.summary}</p>
            <span className="muted" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14 }}>
              <Clock size={14} /> {lesson.minutes} min de lectura
              {done && (
                <span className="pill done" style={{ marginLeft: 8 }}>
                  <CheckCircle2 size={13} /> Completada
                </span>
              )}
            </span>
          </div>

          <div className="prose">
            {lesson.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="example">
            <h4>
              <Lightbulb size={15} /> {lesson.example.title}
            </h4>
            <p>{lesson.example.text}</p>
          </aside>

          <section className="card" style={{ display: 'grid', gap: 12 }}>
            <h3 style={{ fontSize: 18 }}>Puntos clave</h3>
            <ul className="keypoints">
              {lesson.keyPoints.map((k) => (
                <li key={k}>
                  <Check size={18} />
                  {k}
                </li>
              ))}
            </ul>
          </section>

          {Widget && <Widget />}

          <LessonCheck key={lesson.id} check={lesson.check} />

          <div className="lesson-nav">
            {prev ? (
              <button className="btn btn-secondary" onClick={() => navigate('leccion', prev.id)}>
                <ArrowLeft size={18} /> Anterior
              </button>
            ) : (
              <span />
            )}
            <button className="btn btn-primary" onClick={completeAndNext}>
              {done ? (next ? 'Siguiente lección' : 'Ver mi progreso') : next ? 'Completar y continuar' : 'Completar y ver progreso'}
              <ArrowRight size={18} />
            </button>
          </div>
        </article>

        <aside className="lesson-side">
          <div className="card" style={{ display: 'grid', gap: 12 }}>
            <button className={`btn complete-btn ${done ? 'is-done' : 'btn-primary'}`} onClick={onToggle} aria-pressed={done}>
              {done ? <CheckCircle2 size={18} /> : <Circle size={18} />}
              {done ? 'Completada' : 'Marcar como completada'}
            </button>
            <div style={{ display: 'grid', gap: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 600 }} className="muted">
                <span>Progreso del módulo</span>
                <span className="mono">
                  {mp.done}/{mp.total}
                </span>
              </div>
              <Bar value={mp.percent} />
            </div>
          </div>

          <div className="card">
            <h4>En este módulo</h4>
            <div className="mini-list">
              {module.lessons.map((l) => (
                <button
                  key={l.id}
                  className={`mini-item ${l.id === lesson.id ? 'current' : ''}`}
                  onClick={() => navigate('leccion', l.id)}
                >
                  {progress.completed[l.id] ? (
                    <CheckCircle2 size={16} color="var(--success)" />
                  ) : (
                    <Circle size={16} color="var(--ink-3)" />
                  )}
                  {l.title}
                </button>
              ))}
            </div>
          </div>

          <button className="card card-interactive quick-card" style={{ padding: 18 }} onClick={() => navigate('tutor')}>
            <span className="q-icon" style={{ width: 42, height: 42, borderRadius: 12 }}>
              <Sparkles size={20} />
            </span>
            <div>
              <h3 style={{ fontSize: 15 }}>¿Tienes dudas?</h3>
              <p style={{ fontSize: 13 }}>Pregúntale a Project Play AI</p>
            </div>
          </button>
        </aside>
      </div>
    </>
  );
}
