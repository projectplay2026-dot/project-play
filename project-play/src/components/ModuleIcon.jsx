import { BookOpen, Code2, Compass, RefreshCcw } from 'lucide-react';

const icons = { Compass, RefreshCcw, BookOpen, Code2 };

export default function ModuleIcon({ name, size = 24 }) {
  const Icon = icons[name] || Compass;
  return <Icon size={size} strokeWidth={2} />;
}
