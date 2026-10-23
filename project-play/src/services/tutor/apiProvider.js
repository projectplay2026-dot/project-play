// Proveedor para conectar la IA real del equipo.
//
// Contrato esperado del backend (POST a VITE_TUTOR_API_URL):
//   Petición:  { "message": "¿Qué es Scrum?", "history": [{ "role": "user"|"assistant", "content": "..." }] }
//   Respuesta: { "reply": "texto de la respuesta" }
//
// Las claves de API deben vivir en ese backend, NUNCA en este código ni en
// variables VITE_*, porque todo lo que está en el frontend es público.

export async function askApi(question, history, { url, signal } = {}) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: question, history }),
    signal,
  });
  if (!res.ok) throw new Error(`El servidor del tutor respondió ${res.status}`);
  const data = await res.json();
  const reply = data.reply ?? data.answer ?? data.message;
  if (!reply || typeof reply !== 'string') throw new Error('Respuesta del tutor sin texto');
  return {
    title: null,
    paragraphs: reply.split(/\n{2,}/).map((p) => p.trim()).filter(Boolean),
  };
}
