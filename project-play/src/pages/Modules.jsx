import { ArrowLeft, CheckCircle2, ChevronRight, Clock } from 'lucide-react';
import { findModule, modules } from '../data/modules.js';
import { useProgress } from '../hooks/useProgress.jsx';
import ModuleCard from '../components/ModuleCard.jsx';
import ModuleIcon from '../components/ModuleIcon.jsx';
import { Bar } from '../components/ui.jsx';

export function ModulesPage({ navigate }) {
  return (
    <>
      <header className="page-head">
        <span className="eyebrow">Contenido</span>
        <h1>Módulos de aprendizaje</h1>
        <p>
          Cuatro módulos con lecciones breves, ejemplos prácticos y comprobaciones rápidas. Avanza en orden o
          elige el tema que necesites.
        </p>
      </header>
      <div className="module-grid">
        {modules.map((m) => (
          <ModuleCard key={m.id} module={m} onOpen={() => navigate('modulo', m.id)} />
        ))}
      </div>
    </>
  );
}

export function ModuleDetail({ moduleId, navigate }) {
  const { progress, stats } = useProgress();
  const module = findModule(moduleId);
  if (!module) return <NotFound navigate={navigate} />;
  const mp = stats.byModule[module.id];

  return (
    <>
      <button className="back" onClick={() => navigate('modulos')}>
        <ArrowLeft size={18} /> Módulos
      </button>
      <div className="module-hero">
        <span className="module-icon">
          <ModuleIcon name={module.icon} size={30} />
        </span>
        <div>
          <span className="eyebrow">Módulo {module.number} · {module.short}</span>
          <h1>{module.title}</h1>
          <div className="meta">
            <Bar value={mp.percent} />
            <span className="muted mono" style={{ fontSize: 14 }}>
              {mp.done}/{mp.total} · {mp.percent}%
            </span>
          </div>
        </div>
      </div>
      <p className="muted" style={{ maxWidth: '68ch', marginBottom: 20, fontSize: 17 }}>
        {module.description}
      </p>
      <div className="lesson-list">
        {module.lessons.map((l, i) => {
          const done = Boolean(progress.completed[l.id]);
          return (
            <button key={l.id} className="card card-interactive lesson-row" onClick={() => navigate('leccion', l.id)}>
              <span className={`lesson-index ${done ? 'done' : ''}`}>
                {done ? <CheckCircle2 size={18} /> : String(i + 1).padStart(2, '0')}
              </span>
              <div style={{ minWidth: 0 }}>
                <h3>{l.title}</h3>
                <p>{l.summary}</p>
              </div>
              <span className="min">
                <Clock size={13} /> {l.minutes} min <ChevronRight size={16} />
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}

export function NotFound({ navigate }) {
  return (
    <div className="card" style={{ textAlign: 'center', display: 'grid', gap: 12, justifyItems: 'center' }}>
      <h2>No encontramos esta página</h2>
      <p className="muted">El enlace puede estar incompleto.</p>
      <button className="btn btn-primary" onClick={() => navigate('panel')}>
        Ir al panel
      </button>
    </div>
  );
}
