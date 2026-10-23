import { useMemo, useState } from 'react';
import { Activity, Eye, Flag, GitBranch, Layers, RefreshCcw, RotateCcw, Spade, TrendingDown } from 'lucide-react';

/* ---------- Ciclo de vida del proyecto ---------- */
const PHASES = [
  {
    name: 'Inicio',
    text: 'Se define el proyecto, su propósito y a los interesados. Se autoriza formalmente.',
    ex: 'Project Play: idea del llavero con QR y definición del equipo.',
  },
  {
    name: 'Planificación',
    text: 'Se detallan alcance, cronograma, costos, riesgos y la forma de trabajar.',
    ex: 'Creación del Product Backlog y elección de Sprints de dos semanas.',
  },
  {
    name: 'Ejecución',
    text: 'El equipo realiza el trabajo y produce los entregables.',
    ex: 'Desarrollo de módulos, actividades y tutor en cada Sprint.',
  },
  {
    name: 'Control',
    text: 'Se mide el avance y se compara con el plan para hacer ajustes. Ocurre durante todo el proyecto.',
    ex: 'Burndown Chart y Sprint Review con la profesora.',
  },
  {
    name: 'Cierre',
    text: 'Se entrega el resultado, se liberan recursos y se documentan lecciones aprendidas.',
    ex: 'Presentación final y retrospectiva del proyecto.',
  },
];

export function LifecycleWidget() {
  const [i, setI] = useState(0);
  return (
    <section className="widget">
      <div className="widget-head">
        <h3>
          <Flag size={18} color="var(--blue)" /> Recorre el ciclo de vida
        </h3>
        <span className="muted" style={{ fontSize: 13 }}>Toca cada fase</span>
      </div>
      <div className="phase-track" role="tablist">
        {PHASES.map((p, idx) => (
          <button
            key={p.name}
            role="tab"
            aria-selected={i === idx}
            className={`phase ${i === idx ? 'on' : ''}`}
            onClick={() => setI(idx)}
          >
            <span className="mono">{idx + 1}</span>
            <span style={{ fontSize: 12 }}>{p.name}</span>
          </button>
        ))}
      </div>
      <div className="phase-detail" role="tabpanel">
        <p style={{ fontWeight: 600 }}>{PHASES[i].text}</p>
        <p className="muted" style={{ marginTop: 6, fontSize: 15 }}>
          {PHASES[i].ex}
        </p>
      </div>
    </section>
  );
}

/* ---------- Ciclo del Sprint ---------- */
const EVENTS = [
  { name: 'Sprint Planning', box: '≤ 8 h', text: 'Se define el Objetivo del Sprint y el Sprint Backlog.', icon: Layers },
  { name: 'Daily Scrum', box: '15 min', text: 'Cada día los Developers revisan el avance y ajustan el plan.', icon: Activity },
  { name: 'Sprint Review', box: '≤ 4 h', text: 'Se inspecciona el Incremento con las partes interesadas.', icon: Eye },
  { name: 'Retrospective', box: '≤ 3 h', text: 'El equipo decide cómo mejorar su forma de trabajar.', icon: RefreshCcw },
];

export function SprintCycleWidget() {
  const [i, setI] = useState(0);
  const E = EVENTS[i];
  return (
    <section className="widget">
      <div className="widget-head">
        <h3>
          <RefreshCcw size={18} color="var(--blue)" /> Los eventos dentro de un Sprint
        </h3>
        <span className="muted" style={{ fontSize: 13 }}>Duraciones máximas para un Sprint de un mes</span>
      </div>
      <div className="cycle">
        {EVENTS.map((ev, idx) => (
          <button key={ev.name} className={`cycle-step ${i === idx ? 'on' : ''}`} onClick={() => setI(idx)}>
            <small>{ev.box}</small>
            <b>{ev.name}</b>
          </button>
        ))}
      </div>
      <div className="phase-detail" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <E.icon size={22} color="var(--teal-ink)" style={{ flex: 'none' }} />
        <p>{E.text}</p>
      </div>
    </section>
  );
}

/* ---------- Planning Poker ---------- */
const DECK = [1, 2, 3, 5, 8, 13, 20];
const TEAM = [
  { name: 'Ana', first: 3, why: 'Pensé que bastaba con usar la API del navegador.' },
  { name: 'Luis', first: 13, why: 'No todos los navegadores soportan el reconocimiento de voz; hay que manejar errores y permisos.' },
  { name: 'Sofía', first: 5, why: 'Hay que diseñar el botón y los mensajes de error.' },
];
const CONSENSUS = 8;

export function PlanningPokerWidget() {
  const [mine, setMine] = useState(null);
  const [round, setRound] = useState(0); // 0 = eligiendo, 1 = revelado, 2 = segunda ronda
  const votes = round === 2 ? TEAM.map(() => CONSENSUS) : TEAM.map((t) => t.first);
  const min = Math.min(...votes, mine ?? Infinity);
  const max = Math.max(...votes, mine ?? -Infinity);
  const teamMin = Math.min(...TEAM.map((t) => t.first));
  const teamMax = Math.max(...TEAM.map((t) => t.first));

  const reset = () => {
    setMine(null);
    setRound(0);
  };

  return (
    <section className="widget">
      <div className="widget-head">
        <h3>
          <Spade size={18} color="var(--blue)" /> Juega una ronda de Planning Poker
        </h3>
        {round > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={reset}>
            <RotateCcw size={15} /> Reiniciar
          </button>
        )}
      </div>
      <div className="phase-detail">
        <span className="eyebrow">Historia a estimar</span>
        <p style={{ fontWeight: 600, marginTop: 4 }}>
          "Como estudiante, quiero dictar mi pregunta con el micrófono para no tener que escribir."
        </p>
      </div>

      {round === 0 && (
        <>
          <p className="muted" style={{ fontSize: 15 }}>
            Elige tu carta en secreto. Tus compañeros ya votaron.
          </p>
          <div className="cards-row">
            {DECK.map((v) => (
              <button
                key={v}
                className={`pcard ${mine === v ? 'sel' : ''}`}
                onClick={() => setMine(v)}
                aria-pressed={mine === v}
              >
                {v}
              </button>
            ))}
          </div>
          <div>
            <button className="btn btn-primary btn-sm" disabled={mine === null} onClick={() => setRound(1)}>
              Revelar cartas
            </button>
          </div>
        </>
      )}

      {round > 0 && (
        <>
          <div className="votes">
            {TEAM.map((t, idx) => (
              <div className="vote" key={t.name + round}>
                <span className={`face flip ${round === 1 && (votes[idx] === teamMin || votes[idx] === teamMax) ? 'extreme' : ''}`}>
                  {votes[idx]}
                </span>
                {t.name}
              </div>
            ))}
            <div className="vote" key={'yo' + round}>
              <span className="face flip" style={{ background: 'var(--blue)', color: '#fff' }}>
                {mine}
              </span>
              Tú
            </div>
          </div>

          {round === 1 && (
            <>
              <div className="phase-detail" style={{ display: 'grid', gap: 8 }}>
                <b>Votos entre {min} y {max}. Los extremos del equipo explican su razonamiento:</b>
                {TEAM.filter((t) => t.first === teamMin || t.first === teamMax).map((t) => (
                  <p key={t.name} style={{ fontSize: 15 }}>
                    <b>{t.name} ({t.first}):</b> {t.why}
                  </p>
                ))}
              </div>
              <div>
                <button className="btn btn-primary btn-sm" onClick={() => setRound(2)}>
                  Votar de nuevo
                </button>
              </div>
            </>
          )}

          {round === 2 && (
            <div className="feedback ok" role="status">
              <Spade size={20} />
              <div>
                <b>Consenso: {CONSENSUS} puntos.</b>
                {mine === CONSENSUS
                  ? 'Tu estimación coincidió con la del equipo.'
                  : `Tú votaste ${mine}. Tras escuchar los riesgos, el equipo acordó ${CONSENSUS}. Lo valioso es la conversación, no acertar.`}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

/* ---------- Burndown Chart ---------- */
const TOTAL = 40;
const DAYS = 10;
const REAL = [40, 35, 33, 30, 27, 24, 22, 17, 11, 5, 0];

export function BurndownWidget() {
  const [day, setDay] = useState(6);
  const W = 520;
  const H = 260;
  const m = { l: 40, r: 16, t: 16, b: 36 };
  const x = (d) => m.l + (d / DAYS) * (W - m.l - m.r);
  const y = (v) => m.t + (1 - v / TOTAL) * (H - m.t - m.b);
  const ideal = (d) => TOTAL - (TOTAL / DAYS) * d;
  const realPts = REAL.slice(0, day + 1)
    .map((v, d) => `${x(d)},${y(v)}`)
    .join(' ');
  const diff = REAL[day] - ideal(day);
  const status =
    Math.abs(diff) <= 1
      ? { text: 'En línea con el plan', cls: 'pill' }
      : diff > 0
        ? { text: `Atrasado por ${diff} pts`, cls: 'pill', style: { background: 'var(--danger-soft)', color: 'var(--danger)' } }
        : { text: `Adelantado por ${-diff} pts`, cls: 'pill done' };

  return (
    <section className="widget">
      <div className="widget-head">
        <h3>
          <TrendingDown size={18} color="var(--blue)" /> Explora un Burndown Chart
        </h3>
        <div className="legend">
          <span>
            <i style={{ background: 'var(--ink-3)' }} />
            Ideal
          </span>
          <span>
            <i style={{ background: 'var(--blue)' }} />
            Real
          </span>
        </div>
      </div>
      <div className="chart-wrap">
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Burndown: día ${day}, quedan ${REAL[day]} puntos`}>
          {[0, 10, 20, 30, 40].map((v) => (
            <g key={v}>
              <line x1={m.l} x2={W - m.r} y1={y(v)} y2={y(v)} style={{ stroke: 'var(--line)' }} strokeWidth="1" />
              <text x={m.l - 8} y={y(v) + 4} textAnchor="end" fontSize="11" style={{ fill: 'var(--ink-3)' }} fontFamily="var(--font-mono)">
                {v}
              </text>
            </g>
          ))}
          {Array.from({ length: DAYS + 1 }, (_, d) => (
            <text key={d} x={x(d)} y={H - m.b + 18} textAnchor="middle" fontSize="11" style={{ fill: 'var(--ink-3)' }} fontFamily="var(--font-mono)">
              {d}
            </text>
          ))}
          <text x={W - m.r} y={H - 4} textAnchor="end" fontSize="11" style={{ fill: 'var(--ink-3)' }}>
            días del Sprint
          </text>
          <line x1={x(0)} y1={y(TOTAL)} x2={x(DAYS)} y2={y(0)} style={{ stroke: 'var(--ink-3)' }} strokeWidth="2" strokeDasharray="6 6" />
          <line x1={x(day)} x2={x(day)} y1={m.t} y2={H - m.b} style={{ stroke: 'var(--teal)' }} strokeWidth="1.5" opacity="0.6" />
          <polyline points={realPts} fill="none" style={{ stroke: 'var(--blue)' }} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          <circle cx={x(day)} cy={y(REAL[day])} r="6" style={{ fill: 'var(--blue)', stroke: 'var(--surface)' }} strokeWidth="3" />
          <circle cx={x(day)} cy={y(ideal(day))} r="4" style={{ fill: 'var(--ink-3)' }} />
        </svg>
      </div>
      <label htmlFor="burndown-day" className="muted" style={{ fontSize: 14, fontWeight: 600 }}>
        Día del Sprint: <span className="mono">{day}</span>
      </label>
      <input
        id="burndown-day"
        className="slider"
        type="range"
        min="0"
        max={DAYS}
        value={day}
        onChange={(e) => setDay(Number(e.target.value))}
      />
      <div className="status-line">
        <span className="mono">
          Restante: <b>{REAL[day]}</b> pts · Ideal: <b>{ideal(day)}</b> pts
        </span>
        <span className={status.cls} style={status.style}>
          {status.text}
        </span>
      </div>
    </section>
  );
}

/* ---------- Ruta crítica ---------- */
const PATHS = [
  [
    { id: 'dis', name: 'Diseñar', d: 3 },
    { id: 'pro', name: 'Programar', d: 5 },
    { id: 'pru', name: 'Probar', d: 2 },
  ],
  [
    { id: 'esc', name: 'Escribir contenido', d: 4 },
    { id: 'rev', name: 'Revisar', d: 2 },
  ],
];

export function CriticalPathWidget() {
  const [delays, setDelays] = useState({});
  const totals = useMemo(
    () => PATHS.map((p) => p.reduce((s, a) => s + a.d + (delays[a.id] || 0), 0)),
    [delays]
  );
  const duration = Math.max(...totals);
  const base = 10;
  const addDelay = (id) => setDelays((d) => ({ ...d, [id]: (d[id] || 0) + 1 }));

  return (
    <section className="widget">
      <div className="widget-head">
        <h3>
          <GitBranch size={18} color="var(--blue)" /> Encuentra la ruta crítica
        </h3>
        {Object.keys(delays).length > 0 && (
          <button className="btn btn-ghost btn-sm" onClick={() => setDelays({})}>
            <RotateCcw size={15} /> Reiniciar
          </button>
        )}
      </div>
      <p className="muted" style={{ fontSize: 15 }}>
        Ambas rutas empiezan al mismo tiempo. Toca una actividad para retrasarla un día y observa qué pasa con la
        duración del proyecto.
      </p>
      <div className="net">
        {PATHS.map((p, idx) => {
          const crit = totals[idx] === duration;
          return (
            <div key={idx} className={`path ${crit ? 'crit' : ''}`}>
              {p.map((a, j) => (
                <span key={a.id} style={{ display: 'contents' }}>
                  <button className="node" style={{ border: 0 }} onClick={() => addDelay(a.id)}>
                    {a.name}
                    <small>
                      {a.d + (delays[a.id] || 0)}d{delays[a.id] ? ` (+${delays[a.id]})` : ''}
                    </small>
                  </button>
                  {j < p.length - 1 && <span className="muted">→</span>}
                </span>
              ))}
              <span className="total">
                {totals[idx]} días {crit ? '· crítica' : `· holgura ${duration - totals[idx]}`}
              </span>
            </div>
          );
        })}
      </div>
      <div className={`feedback ${duration > base ? 'no' : 'ok'}`} role="status">
        <GitBranch size={20} />
        <div>
          <b>Duración del proyecto: {duration} días.</b>
          {duration > base
            ? 'Un retraso en la ruta crítica movió la fecha final.'
            : 'Retrasar una actividad con holgura no cambia la fecha final, mientras no supere su holgura.'}
        </div>
      </div>
    </section>
  );
}

export const widgets = {
  lifecycle: LifecycleWidget,
  sprintCycle: SprintCycleWidget,
  poker: PlanningPokerWidget,
  burndown: BurndownWidget,
  criticalPath: CriticalPathWidget,
};
