import { useState } from 'react';
import { ArrowRight, RotateCcw, Target, Trophy } from 'lucide-react';
import { modules } from '../data/modules.js';
import { useProgress } from '../hooks/useProgress.jsx';
import { Bar, Modal, ProgressRing, useToast } from '../components/ui.jsx';

const QUIZ_INFO = [
  { id: 'scrum', title: 'Cuestionario Scrum', route: 'cuestionario', icon: Trophy },
  { id: 'identify', title: 'Identifica el concepto', route: 'identifica', icon: Target },
];

function formatDate(ts) {
  try {
    return new Intl.DateTimeFormat('es-MX', { dateStyle: 'medium', timeStyle: 'short' }).format(ts);
  } catch {
    return '';
  }
}

export default function ProgressPage({ navigate }) {
  const { stats, progress, reset } = useProgress();
  const toast = useToast();
  const [confirm, setConfirm] = useState(false);

  const doReset = () => {
    reset();
    setConfirm(false);
    toast('Progreso restablecido');
  };

  return (
    <>
      <header className="page-head">
        <span className="eyebrow">Tu avance</span>
        <h1>Progreso de aprendizaje</h1>
        <p>Tu progreso se guarda en este navegador y se conserva al recargar la página.</p>
      </header>

      <section className="card progress-top">
        <div style={{ display: 'grid', justifyItems: 'center', gap: 8 }}>
          <ProgressRing value={stats.percent} size={150} stroke={12} gradientId="ring-progress" />
          <span className="muted mono" style={{ fontSize: 14 }}>
            {stats.completedCount} de {stats.totalLessons} lecciones
          </span>
        </div>
        <div className="module-progress">
          {modules.map((m) => {
            const mp = stats.byModule[m.id];
            return (
              <button
                key={m.id}
                className="mp-row"
                onClick={() => navigate('modulo', m.id)}
                style={{ border: 0, background: 'none', padding: 0, textAlign: 'left' }}
              >
                <div className="row">
                  <span>
                    {m.number}. {m.title}
                  </span>
                  <span>
                    {mp.done}/{mp.total}
                  </span>
                </div>
                <Bar value={mp.percent} />
              </button>
            );
          })}
        </div>
      </section>

      <div className="section-title">
        <h2>Resultados de actividades</h2>
      </div>
      <div className="quiz-results">
        {QUIZ_INFO.map((q) => {
          const r = progress.quizzes[q.id];
          return (
            <div key={q.id} className="card qr">
              <span className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <q.icon size={14} /> {q.title}
              </span>
              {r ? (
                <>
                  <span className="big">
                    {r.best}/{r.total}
                  </span>
                  <span className="muted" style={{ fontSize: 14 }}>
                    Mejor resultado · Último: {r.last}/{r.total} · {r.attempts} {r.attempts === 1 ? 'intento' : 'intentos'}
                    {r.lastAt ? ` · ${formatDate(r.lastAt)}` : ''}
                  </span>
                  <Bar value={Math.round((r.best / r.total) * 100)} />
                </>
              ) : (
                <span className="muted">Aún no has resuelto esta actividad.</span>
              )}
              <div>
                <button className="btn btn-secondary btn-sm" onClick={() => navigate(q.route)}>
                  {r ? 'Intentar de nuevo' : 'Empezar'} <ArrowRight size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-title">
        <h2>Restablecer</h2>
      </div>
      <div className="card danger-zone">
        <p className="muted" style={{ maxWidth: '56ch' }}>
          Borra las lecciones completadas y los resultados de las actividades guardados en este navegador.
        </p>
        <button className="btn btn-secondary" onClick={() => setConfirm(true)}>
          <RotateCcw size={18} /> Restablecer progreso
        </button>
      </div>

      {confirm && (
        <Modal
          title="¿Restablecer tu progreso?"
          onClose={() => setConfirm(false)}
          actions={
            <>
              <button className="btn btn-secondary btn-sm" onClick={() => setConfirm(false)}>
                Cancelar
              </button>
              <button className="btn btn-danger btn-sm" onClick={doReset}>
                Restablecer
              </button>
            </>
          }
        >
          Se eliminarán {stats.completedCount} lecciones completadas y los resultados de las actividades. Esta acción no se
          puede deshacer.
        </Modal>
      )}
    </>
  );
}
