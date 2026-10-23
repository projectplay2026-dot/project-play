import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { allLessons, modules, totalLessons } from '../data/modules.js';

const STORAGE_KEY = 'projectplay:progress:v1';

const emptyProgress = () => ({
  completed: {}, // { lessonId: timestamp }
  quizzes: {}, // { quizId: { best, last, total, attempts, lastAt } }
  lastLessonId: null,
});

function load() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyProgress();
    const parsed = JSON.parse(raw);
    return { ...emptyProgress(), ...parsed };
  } catch {
    return emptyProgress();
  }
}

function save(progress) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // Almacenamiento no disponible (modo privado): el progreso vive solo en esta sesión.
  }
}

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(load);

  useEffect(() => save(progress), [progress]);

  const toggleLesson = useCallback((lessonId) => {
    setProgress((p) => {
      const completed = { ...p.completed };
      if (completed[lessonId]) delete completed[lessonId];
      else completed[lessonId] = Date.now();
      return { ...p, completed };
    });
  }, []);

  const completeLesson = useCallback((lessonId) => {
    setProgress((p) =>
      p.completed[lessonId] ? p : { ...p, completed: { ...p.completed, [lessonId]: Date.now() } }
    );
  }, []);

  const visitLesson = useCallback((lessonId) => {
    setProgress((p) => (p.lastLessonId === lessonId ? p : { ...p, lastLessonId: lessonId }));
  }, []);

  const recordQuiz = useCallback((quizId, score, total) => {
    setProgress((p) => {
      const prev = p.quizzes[quizId];
      return {
        ...p,
        quizzes: {
          ...p.quizzes,
          [quizId]: {
            best: Math.max(prev?.best ?? 0, score),
            last: score,
            total,
            attempts: (prev?.attempts ?? 0) + 1,
            lastAt: Date.now(),
          },
        },
      };
    });
  }, []);

  const reset = useCallback(() => setProgress(emptyProgress()), []);

  const stats = useMemo(() => {
    const completedCount = allLessons.filter((l) => progress.completed[l.id]).length;
    const percent = Math.round((completedCount / totalLessons) * 100);
    const byModule = Object.fromEntries(
      modules.map((m) => {
        const done = m.lessons.filter((l) => progress.completed[l.id]).length;
        return [m.id, { done, total: m.lessons.length, percent: Math.round((done / m.lessons.length) * 100) }];
      })
    );
    const nextLesson =
      (progress.lastLessonId && !progress.completed[progress.lastLessonId]
        ? allLessons.find((l) => l.id === progress.lastLessonId)
        : null) || allLessons.find((l) => !progress.completed[l.id]) || null;
    return { completedCount, totalLessons, percent, byModule, nextLesson };
  }, [progress]);

  const value = { progress, stats, toggleLesson, completeLesson, visitLesson, recordQuiz, reset };
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress debe usarse dentro de ProgressProvider');
  return ctx;
}
