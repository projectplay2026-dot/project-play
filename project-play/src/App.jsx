import { useRouter } from './hooks/useRouter.js';
import { ProgressProvider } from './hooks/useProgress.jsx';
import { ToastProvider } from './components/ui.jsx';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { ModuleDetail, ModulesPage, NotFound } from './pages/Modules.jsx';
import Lesson from './pages/Lesson.jsx';
import { ActivitiesHub, QuizRunner } from './pages/Activities.jsx';
import Tutor from './pages/Tutor.jsx';
import ProgressPage from './pages/Progress.jsx';

function Screen({ route, navigate }) {
  switch (route.name) {
    case 'panel':
      return <Dashboard navigate={navigate} />;
    case 'modulos':
      return <ModulesPage navigate={navigate} />;
    case 'modulo':
      return <ModuleDetail moduleId={route.param} navigate={navigate} />;
    case 'leccion':
      return <Lesson lessonId={route.param} navigate={navigate} />;
    case 'actividades':
      return <ActivitiesHub navigate={navigate} />;
    case 'cuestionario':
    case 'identifica':
      return <QuizRunner key={route.name} kind={route.name} navigate={navigate} />;
    case 'tutor':
      return <Tutor navigate={navigate} />;
    case 'progreso':
      return <ProgressPage navigate={navigate} />;
    default:
      return <NotFound navigate={navigate} />;
  }
}

export default function App() {
  const { route, navigate } = useRouter();

  return (
    <ProgressProvider>
      <ToastProvider>
        {route.name === 'inicio' ? (
          <Home navigate={navigate} />
        ) : (
          <Layout route={route} navigate={navigate}>
            <Screen route={route} navigate={navigate} />
          </Layout>
        )}
      </ToastProvider>
    </ProgressProvider>
  );
}
