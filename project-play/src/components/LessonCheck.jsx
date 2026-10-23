import { useState } from 'react';
import { CheckCircle2, HelpCircle, RotateCcw, XCircle } from 'lucide-react';

const KEYS = ['A', 'B', 'C', 'D'];

export default function LessonCheck({ check, onCorrect }) {
  const [picked, setPicked] = useState(null);
  const answered = picked !== null;
  const correct = picked === check.answer;

  const pick = (i) => {
    if (answered) return;
    setPicked(i);
    if (i === check.answer) onCorrect?.();
  };

  return (
    <section className="card check" aria-labelledby="check-title">
      <div className="check-head">
        <HelpCircle size={20} color="var(--blue)" />
        <h3 id="check-title">Comprobación rápida</h3>
      </div>
      <p style={{ fontWeight: 600, fontSize: 17 }}>{check.question}</p>
      <div className="choice-list">
        {check.options.map((opt, i) => {
          let cls = '';
          if (answered) {
            if (i === check.answer) cls = 'correct';
            else if (i === picked) cls = 'wrong';
            else cls = 'dim';
          }
          return (
            <button key={i} className={`choice ${cls}`} onClick={() => pick(i)} disabled={answered}>
              <span className="key">{KEYS[i]}</span>
              {opt}
              {answered && i === check.answer && <CheckCircle2 className="mark" size={20} color="var(--success)" />}
              {answered && i === picked && i !== check.answer && (
                <XCircle className="mark" size={20} color="var(--danger)" />
              )}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className={`feedback ${correct ? 'ok' : 'no'}`} role="status">
          {correct ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
          <div>
            <b>{correct ? '¡Correcto!' : 'Casi. Revisa la explicación.'}</b>
            {check.explanation}
          </div>
        </div>
      )}
      {answered && !correct && (
        <div>
          <button className="btn btn-ghost btn-sm" onClick={() => setPicked(null)}>
            <RotateCcw size={15} /> Intentar de nuevo
          </button>
        </div>
      )}
    </section>
  );
}
