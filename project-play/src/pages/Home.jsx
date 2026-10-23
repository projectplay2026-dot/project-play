import { ArrowRight, BookOpen, Gamepad2, QrCode, Sparkles, Volume2 } from 'lucide-react';
import { Logo } from '../components/ui.jsx';
import { modules, totalLessons } from '../data/modules.js';

export default function Home({ navigate }) {
  return (
    <div className="home">
      <div className="home-top">
        <Logo />
        <span className="team-tag">EQUIPO BRASIL · EQUIPO 4</span>
      </div>

      <div className="home-body">
        <div className="home-copy">
          <h1 className="home-title reveal">
            PROJECT
            <br />
            <span className="play">PLAY</span>
          </h1>
          <p className="home-sub reveal" style={{ animationDelay: '0.08s' }}>
            Aprende a gestionar proyectos de una forma diferente.
          </p>
          <p className="home-desc reveal" style={{ animationDelay: '0.16s' }}>
            Explora Scrum, PMBOK y metodologías de gestión de proyectos mediante lecciones interactivas,
            desafíos y un tutor inteligente.
          </p>
          <div className="home-actions reveal" style={{ animationDelay: '0.24s' }}>
            <button className="btn btn-primary" onClick={() => navigate('panel')}>
              Comenzar a aprender <ArrowRight size={18} />
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('modulos')}>
              <BookOpen size={18} /> Explorar contenido
            </button>
            <button className="btn btn-tutor" onClick={() => navigate('tutor')}>
              <Sparkles size={18} /> Hablar con el tutor IA
            </button>
          </div>
          <div className="home-meta reveal" style={{ animationDelay: '0.32s' }}>
            <span>
              <BookOpen size={15} /> {modules.length} módulos · {totalLessons} lecciones
            </span>
            <span>
              <Gamepad2 size={15} /> 2 actividades
            </span>
            <span>
              <Volume2 size={15} /> Tutor con voz
            </span>
          </div>
        </div>

        <div className="scene" aria-hidden="true">
          <div className="board">
            <div className="board-head">
              <span>SPRINT 3 · DÍA 6 DE 10</span>
              <span>21 / 34 pts</span>
            </div>
            <div className="board-cols">
              <div className="board-col">
                <h5>Por hacer</h5>
                <div className="sticky">
                  Tutor con voz <small>8 pts</small>
                </div>
                <div className="sticky moving">
                  Cuestionario Scrum <small>5 pts</small>
                </div>
              </div>
              <div className="board-col">
                <h5>En curso</h5>
                <div className="sticky">
                  Burndown Chart <small>3 pts</small>
                </div>
              </div>
              <div className="board-col">
                <h5>Terminado</h5>
                <div className="sticky done">
                  Módulo Scrum <small>8 pts</small>
                </div>
                <div className="sticky done">
                  Progreso local <small>5 pts</small>
                </div>
                <div className="sticky done">
                  Pantalla de inicio <small>8 pts</small>
                </div>
              </div>
            </div>
          </div>
          <div className="poker p1">8</div>
          <div className="poker p2">5</div>
          <div className="qr-chip">
            <QrCode size={34} />
            <span>
              Escanea tu llavero
              <small>y aprende donde estés</small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
