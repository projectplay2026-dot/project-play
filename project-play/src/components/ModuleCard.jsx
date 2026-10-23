import { CheckCircle2, Clock } from 'lucide-react';
import { useProgress } from '../hooks/useProgress.jsx';
import ModuleIcon from './ModuleIcon.jsx';
import { Bar } from './ui.jsx';

export default function ModuleCard({ module, onOpen }) {
  const { stats } = useProgress();
  const mp = stats.byModule[module.id];
  const minutes = module.lessons.reduce((s, l) => s + l.minutes, 0);
  return (
    <button className="card card-interactive module-card" onClick={onOpen}>
      <div className="module-top">
        <div>
          <span className="module-num">MÓDULO {String(module.number).padStart(2, '0')}</span>
          <h3>{module.title}</h3>
        </div>
        <span className="module-icon">
          <ModuleIcon name={module.icon} />
        </span>
      </div>
      <p>{module.description}</p>
      <div className="module-foot">
        <div className="row">
          <span>
            {mp.done}/{mp.total} lecciones
          </span>
          {mp.percent === 100 ? (
            <span className="pill done">
              <CheckCircle2 size={13} /> Completado
            </span>
          ) : (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <Clock size={13} /> ~{minutes} min
            </span>
          )}
        </div>
        <Bar value={mp.percent} />
      </div>
    </button>
  );
}
