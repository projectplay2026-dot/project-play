import { useCallback, useEffect, useRef, useState } from 'react';
import { BookOpen, Info, Mic, MicOff, SendHorizontal, Sparkles, Square, Trash2, Volume2, VolumeX } from 'lucide-react';
import { askTutor, answerToText, tutorMode } from '../services/tutor/tutorService.js';
import { suggestedQuestions } from '../services/tutor/knowledgeBase.js';
import { useSpeechRecognition, useSpeechSynthesis } from '../hooks/useSpeech.js';
import { Modal } from '../components/ui.jsx';

const CHAT_KEY = 'projectplay:chat:v1';

const welcomeMessage = () => ({
  id: 'welcome',
  role: 'bot',
  answer: {
    title: '¡Hola! Soy Project Play AI',
    paragraphs: [
      'Tu tutor de Scrum, PMBOK, XP y gestión de proyectos. Pregúntame un concepto y te lo explico con un ejemplo. También puedo leerte las respuestas en voz alta.',
    ],
  },
  mode: 'intro',
});

function loadChat() {
  try {
    const raw = window.localStorage.getItem(CHAT_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return Array.isArray(parsed) && parsed.length ? parsed : [welcomeMessage()];
  } catch {
    return [welcomeMessage()];
  }
}

export default function Tutor({ navigate }) {
  const [messages, setMessages] = useState(loadChat);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [autoRead, setAutoRead] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  const tts = useSpeechSynthesis();
  const stt = useSpeechRecognition({
    onResult: (text) => setInput(text),
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(CHAT_KEY, JSON.stringify(messages.slice(-40)));
    } catch {
      /* sin almacenamiento disponible */
    }
  }, [messages]);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  useEffect(() => () => tts.stop(), []); // eslint-disable-line react-hooks/exhaustive-deps

  const send = useCallback(
    async (raw) => {
      const text = (raw ?? input).trim();
      if (!text || typing) return;
      if (stt.listening) stt.stop();
      setInput('');
      const userMsg = { id: `u${Date.now()}`, role: 'user', text };
      setMessages((m) => [...m, userMsg]);
      setTyping(true);

      const history = messages
        .filter((m) => m.mode !== 'intro')
        .map((m) => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text ?? answerToText(m.answer) }));

      const started = Date.now();
      const answer = await askTutor(text, history);
      // Pausa breve para que el indicador de escritura se perciba con naturalidad.
      const wait = Math.max(0, 650 + Math.min(700, text.length * 12) - (Date.now() - started));
      await new Promise((r) => setTimeout(r, wait));

      const botMsg = { id: `b${Date.now()}`, role: 'bot', answer, mode: answer.mode };
      setTyping(false);
      setMessages((m) => [...m, botMsg]);
      if (autoRead && tts.supported) tts.speak(answerToText(answer), botMsg.id);
    },
    [input, typing, messages, autoRead, tts, stt]
  );

  const clear = () => {
    tts.stop();
    setMessages([welcomeMessage()]);
    setConfirmClear(false);
    inputRef.current?.focus();
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const toggleMic = () => {
    if (stt.listening) stt.stop();
    else {
      tts.stop();
      stt.start();
    }
  };

  const onlyIntro = messages.length === 1;

  return (
    <section className="tutor" aria-label="Project Play AI">
      <header className="tutor-head">
        <span className="avatar">
          <Sparkles size={20} />
        </span>
        <div style={{ minWidth: 0 }}>
          <h1>PROJECT PLAY AI</h1>
          <div className="sub">
            <span className="hide-sm">Tutor de gestión de proyectos</span>
            {tutorMode === 'demo' ? (
              <span className="pill demo" title="Respuestas educativas predefinidas. La IA del equipo se conectará después.">
                Modo demostración
              </span>
            ) : (
              <span className="pill done">Conectado</span>
            )}
          </div>
        </div>
        <div className="actions">
          <button
            className="icon-btn"
            onClick={() => {
              if (autoRead) tts.stop();
              setAutoRead((v) => !v);
            }}
            disabled={!tts.supported}
            aria-pressed={autoRead}
            title={
              !tts.supported
                ? 'Tu navegador no admite lectura en voz alta'
                : autoRead
                  ? 'Desactivar lectura automática'
                  : 'Leer respuestas automáticamente'
            }
            aria-label="Lectura automática de respuestas"
            style={autoRead ? { background: 'var(--blue)', color: '#fff' } : undefined}
          >
            {autoRead ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button
            className="icon-btn"
            onClick={() => setConfirmClear(true)}
            disabled={onlyIntro}
            title="Limpiar conversación"
            aria-label="Limpiar conversación"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </header>

      <div className="messages" ref={listRef} aria-live="polite">
        {messages.map((m) =>
          m.role === 'user' ? (
            <div key={m.id} className="msg user">
              <div className="bubble">{m.text}</div>
            </div>
          ) : (
            <BotMessage
              key={m.id}
              msg={m}
              tts={tts}
              onAsk={send}
              onOpenLesson={(id) => navigate('leccion', id)}
              disabled={typing}
            />
          )
        )}

        {onlyIntro && !typing && (
          <div className="suggestions" aria-label="Preguntas sugeridas">
            {suggestedQuestions.map((q) => (
              <button key={q} className="chip" onClick={() => send(q)}>
                {q}
              </button>
            ))}
          </div>
        )}

        {typing && (
          <div className="msg bot">
            <span className="avatar">
              <Sparkles size={16} />
            </span>
            <div className="bubble typing" aria-label="El tutor está escribiendo">
              <i />
              <i />
              <i />
            </div>
          </div>
        )}
      </div>

      <div className="composer">
        <div className="composer-row">
          <button
            className={`icon-btn mic ${stt.listening ? 'on' : ''}`}
            onClick={toggleMic}
            disabled={!stt.supported}
            title={
              stt.supported
                ? stt.listening
                  ? 'Detener dictado'
                  : 'Dictar pregunta con el micrófono'
                : 'Tu navegador no admite reconocimiento de voz'
            }
            aria-label={stt.listening ? 'Detener dictado' : 'Dictar pregunta'}
            style={{ width: 44, height: 44 }}
          >
            {stt.supported ? <Mic size={19} /> : <MicOff size={19} />}
          </button>
          <label htmlFor="tutor-input" className="sr-only">
            Escribe tu pregunta
          </label>
          <textarea
            id="tutor-input"
            ref={inputRef}
            rows={1}
            value={input}
            placeholder={stt.listening ? 'Escuchando…' : 'Escribe tu pregunta…'}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button
            className="icon-btn send"
            onClick={() => send()}
            disabled={!input.trim() || typing}
            aria-label="Enviar pregunta"
            title="Enviar"
            style={{ width: 44, height: 44 }}
          >
            <SendHorizontal size={19} />
          </button>
        </div>
        {stt.error ? (
          <p className="composer-note err">
            <Info size={14} /> {stt.error}
          </p>
        ) : !stt.supported ? (
          <p className="composer-note">
            <Info size={14} /> El dictado por voz no está disponible en este navegador. Prueba con Chrome o Edge; puedes seguir
            escribiendo.
          </p>
        ) : stt.listening ? (
          <p className="composer-note">
            <Mic size={14} /> Escuchando… habla en español y toca el micrófono para terminar.
          </p>
        ) : null}
      </div>

      {confirmClear && (
        <Modal
          title="¿Limpiar la conversación?"
          onClose={() => setConfirmClear(false)}
          actions={
            <>
              <button className="btn btn-secondary btn-sm" onClick={() => setConfirmClear(false)}>
                Cancelar
              </button>
              <button className="btn btn-danger btn-sm" onClick={clear}>
                Limpiar
              </button>
            </>
          }
        >
          Se borrarán los mensajes de esta conversación. Tu progreso de aprendizaje no se modifica.
        </Modal>
      )}
    </section>
  );
}

function BotMessage({ msg, tts, onAsk, onOpenLesson, disabled }) {
  const a = msg.answer;
  const speaking = tts.speakingId === msg.id;
  return (
    <div className="msg bot">
      <span className="avatar">
        <Sparkles size={16} />
      </span>
      <div className="bubble">
        {a.title && <h4>{a.title}</h4>}
        {a.paragraphs?.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {a.bullets && (
          <ul>
            {a.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        )}
        {a.example && (
          <div className="ex">
            <b>Ejemplo</b>
            {a.example}
          </div>
        )}

        <div className="bubble-tools">
          <button
            className={`chip small ${speaking ? 'speaking' : ''}`}
            onClick={() => (speaking ? tts.stop() : tts.speak(answerToText(a), msg.id))}
            disabled={!tts.supported}
            title={tts.supported ? undefined : 'Tu navegador no admite lectura en voz alta'}
          >
            {speaking ? <Square size={13} /> : <Volume2 size={14} />}
            {speaking ? 'Detener' : 'Escuchar'}
          </button>
          {a.lessonId && (
            <button className="chip small" onClick={() => onOpenLesson(a.lessonId)}>
              <BookOpen size={14} /> Ir a la lección
            </button>
          )}
        </div>

        {a.related?.length > 0 && (
          <div className="bubble-tools">
            {a.related.map((q) => (
              <button key={q} className="chip small" onClick={() => onAsk(q)} disabled={disabled}>
                {q}
              </button>
            ))}
          </div>
        )}

        {msg.mode === 'demo' && (
          <span className="demo-note">
            <Info size={12} /> Modo demostración · respuesta educativa predefinida
            {a.fallbackReason ? ' (el servidor del tutor no respondió)' : ''}
          </span>
        )}
      </div>
    </div>
  );
}
