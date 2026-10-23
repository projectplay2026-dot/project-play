import { useCallback, useEffect, useRef, useState } from 'react';

// ---------- Síntesis de voz (el tutor habla) ----------
export function useSpeechSynthesis() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [speakingId, setSpeakingId] = useState(null);
  const voiceRef = useRef(null);

  useEffect(() => {
    if (!supported) return;
    const pick = () => {
      const voices = window.speechSynthesis.getVoices();
      voiceRef.current =
        voices.find((v) => v.lang === 'es-MX') ||
        voices.find((v) => v.lang === 'es-US') ||
        voices.find((v) => v.lang?.toLowerCase().startsWith('es')) ||
        null;
    };
    pick();
    window.speechSynthesis.addEventListener?.('voiceschanged', pick);
    return () => {
      window.speechSynthesis.removeEventListener?.('voiceschanged', pick);
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeakingId(null);
  }, [supported]);

  const speak = useCallback(
    (text, id) => {
      if (!supported) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = voiceRef.current?.lang || 'es-MX';
      if (voiceRef.current) u.voice = voiceRef.current;
      u.rate = 1;
      u.pitch = 1;
      u.onend = () => setSpeakingId((cur) => (cur === id ? null : cur));
      u.onerror = () => setSpeakingId((cur) => (cur === id ? null : cur));
      setSpeakingId(id);
      window.speechSynthesis.speak(u);
    },
    [supported]
  );

  return { supported, speakingId, speak, stop };
}

// ---------- Reconocimiento de voz (dictar la pregunta) ----------
export function useSpeechRecognition({ onResult } = {}) {
  const Recognition =
    typeof window !== 'undefined' ? window.SpeechRecognition || window.webkitSpeechRecognition : null;
  const supported = Boolean(Recognition);
  const [listening, setListening] = useState(false);
  const [error, setError] = useState(null);
  const recRef = useRef(null);
  const onResultRef = useRef(onResult);
  onResultRef.current = onResult;

  const stop = useCallback(() => {
    recRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    if (!supported) return;
    setError(null);
    try {
      const rec = new Recognition();
      rec.lang = 'es-MX';
      rec.interimResults = true;
      rec.continuous = false;
      rec.onresult = (e) => {
        let text = '';
        let final = false;
        for (let i = 0; i < e.results.length; i++) {
          text += e.results[i][0].transcript;
          if (e.results[i].isFinal) final = true;
        }
        onResultRef.current?.(text, final);
      };
      rec.onerror = (e) => {
        const messages = {
          'not-allowed': 'No hay permiso para usar el micrófono. Revisa los permisos del navegador.',
          'service-not-allowed': 'El navegador no permite el reconocimiento de voz en esta página.',
          'no-speech': 'No escuché nada. Intenta de nuevo.',
          'audio-capture': 'No se encontró un micrófono.',
          network: 'El reconocimiento de voz necesita conexión a internet.',
        };
        setError(messages[e.error] || 'No se pudo usar el micrófono.');
      };
      rec.onend = () => setListening(false);
      recRef.current = rec;
      rec.start();
      setListening(true);
    } catch {
      setListening(false);
      setError('No se pudo iniciar el reconocimiento de voz.');
    }
  }, [Recognition, supported]);

  useEffect(() => () => recRef.current?.abort?.(), []);

  return { supported, listening, error, start, stop, clearError: () => setError(null) };
}
