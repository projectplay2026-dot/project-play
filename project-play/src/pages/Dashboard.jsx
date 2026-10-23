import { ArrowRight, CheckCircle2, ChevronRight, Gamepad2, Sparkles, Trophy, BookOpen } from 'lucide-react';
import { modules } from '../data/modules.js';
import { useProgress } from '../hooks/useProgress.jsx';
import { ProgressRing } from '../components/ui.jsx';
import ModuleCard from '../components/ModuleCard.jsx';

export default function Dashboard({ navigate }) {
  const { stats, progress } = useProgress();
  const quizzesTaken = Object.keys(progress.quizzes).length;
  const best = progress.quizzes.scrum;
  const next = stats.nextLesson;
  const started = stats.completedCount > 0;

  return (
    <>
      <section className="welcome">
        <div className="copy">
          <span className="eyebrow" style={{ color: '#5fe3d3' }}>
            Tu panel de aprendizaje
          </span>
          <h1>{started ? '¡Qué bueno verte de nuevo!' : '¡Bienvenido a Project Play!'}</h1>
          <p>
            {started
              ? `Llevas ${stats.completedCount} de ${stats.totalLessons} lecciones. Sigue a tu ritmo: cada lección toma solo unos minutos.`
              : 'Empieza por los fundamentos, practica con actividades y pregúntale al tutor cuando tengas dudas.'}
          </p>
          <div className="next-lesson">
            {next ? (
              <>
                <button className="btn btn-primary" onClick={() => navigate('leccion', next.id)}>
                  {started ? 'Continuar aprendiendo' : 'Empezar primera lección'} <ArrowRight size={18} />
                </button>
                <span className="label">
                  Siguiente
                  <b>
                    M{next.moduleNumber} · {next.title}
                  </b>
                </span>
              </>
            ) : (
              <span className="label">
                <b>¡Completaste todas las lecciones!</b>Pon a prueba lo aprendido en las actividades.
              </span>
            )}
          </div>
        </div>
        <div className="ring-wrap">
          <ProgressRing value={stats.percent} size={140} stroke={12} gradientId="ring-welcome" />
          <div className="ring-sub">progreso total</div>
        </div>
      </section>

      <div className="stats">
        <div className="card stat">
          <span className="stat-icon">
            <CheckCircle2 size={22} />
          </span>
          <div>
            <b>
              {stats.completedCount}/{stats.totalLessons}
            </b>
            <span>Lecciones completadas</span>
          </div>
        </div>
        <div className="card stat">
          <span className="stat-icon teal">
            <BookOpen size={22} />
          </span>
          <div>
            <b>{stats.percent}%</b>
            <span>Progreso de aprendizaje</span>
          </div>
        </div>
        <div className="card stat">
          <span className="stat-icon">
            <Trophy size={22} />
          </span>
          <div>
            <b>{best ? `${best.best}/${best.total}` : '—'}</b>
            <span>{best ? 'Mejor cuestionario Scrum' : `${quizzesTaken} actividades resueltas`}</span>
          </div>
        </div>
      </div>

      <div className="section-title">
        <h2>Módulos disponibles</h2>
        <button className="btn btn-ghost btn-sm" onClick={() => navigate('modulos')}>
          Ver todos <ChevronRight size={16} />
        </button>
      </div>
      <div className="module-grid">
        {modules.map((m) => (
          <ModuleCard key={m.id} module={m} onOpen={() => navigate('modulo', m.id)} />
        ))}
      </div>

      <div className="section-title">
        <h2>Practica y pregunta</h2>
      </div>
      <div className="quick">
        <button className="card card-interactive quick-card" onClick={() => navigate('actividades')}>
          <span className="q-icon">
            <Gamepad2 size={26} />
          </span>
          <div>
            <h3>Cuestionarios</h3>
            <p>Cuestionario Scrum e Identifica el concepto, con retroalimentación inmediata.</p>
          </div>
          <ChevronRight className="chev" size={20} />
        </button>
        <button className="card card-interactive quick-card" onClick={() => navigate('tutor')}>
          <span className="q-icon">
            <Sparkles size={26} />
          </span>
          <div>
            <h3>Project Play AI</h3>
            <p>Pregunta sobre Scrum, PMBOK o XP y escucha la explicación en voz alta.</p>
          </div>
          <ChevronRight className="chev" size={20} />
        </button>
      </div>
    </>
  );
}
