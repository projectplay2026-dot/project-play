import { BarChart3, BookOpen, Gamepad2, LayoutGrid, Sparkles } from 'lucide-react';
import { Logo } from './ui.jsx';

export const navItems = [
  { name: 'panel', label: 'Panel', icon: LayoutGrid, match: ['panel'] },
  { name: 'modulos', label: 'Módulos', icon: BookOpen, match: ['modulos', 'modulo', 'leccion'] },
  { name: 'actividades', label: 'Actividades', icon: Gamepad2, match: ['actividades', 'cuestionario', 'identifica'] },
  { name: 'tutor', label: 'Tutor IA', icon: Sparkles, match: ['tutor'] },
  { name: 'progreso', label: 'Progreso', icon: BarChart3, match: ['progreso'] },
];

export default function Layout({ route, navigate, children }) {
  const isActive = (item) => item.match.includes(route.name);
  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <Logo onClick={() => navigate('inicio')} />
          <nav className="nav" aria-label="Navegación principal">
            {navItems.map((item) => (
              <button
                key={item.name}
                className={`nav-link ${isActive(item) ? 'active' : ''}`}
                onClick={() => navigate(item.name)}
                aria-current={isActive(item) ? 'page' : undefined}
              >
                <item.icon size={17} />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="view" key={route.name + (route.param || '')}>
          {children}
        </div>
      </main>

      {route.name !== 'tutor' && (
        <footer className="footer">Project Play · Equipo Brasil — Equipo 4 · Administración de Proyectos de Software</footer>
      )}

      <nav className="tabbar" aria-label="Navegación inferior">
        {navItems.map((item) => (
          <button
            key={item.name}
            className={`tab ${isActive(item) ? 'active' : ''}`}
            onClick={() => navigate(item.name)}
            aria-current={isActive(item) ? 'page' : undefined}
          >
            <item.icon size={22} />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
