import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function LogoMark({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="pp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#19C3B2" />
          <stop offset="1" stopColor="#2F6BFF" />
        </linearGradient>
      </defs>
      <path d="M7 4.5 L20 12 L7 19.5 Z" fill="url(#pp-grad)" strokeLinejoin="round" />
    </svg>
  );
}

export function Logo({ size = 'md', onClick }) {
  const Tag = onClick ? 'button' : 'div';
  return (
    <Tag className={`logo ${size === 'lg' ? 'lg' : ''}`} onClick={onClick} aria-label="Project Play, ir al inicio">
      <span className="logo-mark">
        <LogoMark size={size === 'lg' ? 28 : 18} />
      </span>
      <span className="logo-word">
        <span>PROJECT</span> <b>PLAY</b>
      </span>
    </Tag>
  );
}

export function ProgressRing({ value = 0, size = 120, stroke = 10, label, gradientId = 'ring-grad' }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (Math.min(100, Math.max(0, value)) / 100) * c;
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#19C3B2" />
            <stop offset="1" stopColor="#2F6BFF" />
          </linearGradient>
        </defs>
        <circle className="ring-track" cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={stroke} />
        <circle
          className="ring-value"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="ring-label" style={{ fontSize: size * 0.24 }}>
        {label ?? `${value}%`}
      </div>
    </div>
  );
}

export function Bar({ value }) {
  return (
    <div className="bar" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <i style={{ width: `${value}%` }} />
    </div>
  );
}

export function Modal({ title, children, onClose, actions }) {
  const ref = useRef(null);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    ref.current?.querySelector('button')?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{title}</h3>
        <div className="muted">{children}</div>
        <div className="actions">{actions}</div>
      </div>
    </div>
  );
}

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);
  const timer = useRef(null);
  const show = useCallback((text) => {
    clearTimeout(timer.current);
    setToast({ text, key: Date.now() });
    timer.current = setTimeout(() => setToast(null), 2600);
  }, []);
  return (
    <ToastContext.Provider value={show}>
      {children}
      {toast && (
        <div className="toast" role="status" key={toast.key}>
          <CheckCircle2 size={18} />
          {toast.text}
        </div>
      )}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
