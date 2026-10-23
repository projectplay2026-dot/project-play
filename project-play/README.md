# PROJECT PLAY

Plataforma web educativa e interactiva para aprender administración de proyectos de software: Scrum, PMBOK y Extreme Programming.

**Equipo:** Equipo Brasil — Equipo 4
**Materia:** Administración de Proyectos de Software
**Metodología:** Scrum, con referencia a *Scrum y XP desde las trincheras* (Henrik Kniberg)

## Qué incluye la versión 1

- **Pantalla de inicio** pensada para el acceso desde el QR del llavero.
- **Panel principal** con progreso, lecciones completadas, botón "Continuar aprendiendo" y accesos directos.
- **4 módulos y 38 lecciones**: Introducción a la gestión de proyectos, Scrum, PMBOK y Scrum + XP. Cada lección tiene explicación, ejemplo práctico, puntos clave y una comprobación rápida.
- **Actividades dentro de las lecciones**: ciclo de vida del proyecto, eventos del Sprint, Planning Poker, Burndown Chart y ruta crítica.
- **Actividad 1 — Cuestionario Scrum** (10 preguntas, 4 opciones, retroalimentación inmediata, resultado final, explicación de respuestas y reintento).
- **Actividad 2 — Identifica el concepto** (10 descripciones de Scrum, PMBOK y XP).
- **Project Play AI**: tutor tipo chat con mensaje inicial, preguntas sugeridas, indicador de escritura, limpiar conversación, lectura en voz alta (SpeechSynthesis) y dictado por micrófono cuando el navegador lo permite.
- **Progreso local** con LocalStorage: lecciones completadas, porcentaje, resultados de actividades y opción para restablecer.

## Ejecutar localmente

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente `http://localhost:5173`).

Para probar desde un celular en la misma red Wi-Fi:

```bash
npm run dev -- --host
```

y abre la dirección "Network" que aparece en la terminal.

Compilación de producción:

```bash
npm run build
npm run preview
```

## Desplegar en Vercel

**Opción A — desde GitHub (recomendada)**

1. Sube esta carpeta a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) elige *Add New → Project* e importa el repositorio.
3. Vercel detecta Vite automáticamente (Build: `npm run build`, Output: `dist`). Pulsa *Deploy*.
4. Cada `git push` vuelve a desplegar la aplicación.

**Opción B — desde la terminal**

```bash
npm i -g vercel
vercel
```

Cuando tengan la URL final (por ejemplo `https://project-play.vercel.app`), generen el código QR del llavero con esa dirección.

## Conectar la IA real del equipo

El chat nunca llama directamente a un proveedor: todo pasa por `src/services/tutor/tutorService.js`.

```
src/services/tutor/
├── tutorService.js   ← punto único de entrada (askTutor)
├── demoProvider.js   ← modo demostración: busca en la base de conocimiento
├── apiProvider.js    ← conexión con el backend de la IA
└── knowledgeBase.js  ← respuestas educativas predefinidas
```

Para conectarla:

1. Su backend debe aceptar `POST` con `{ "message": "...", "history": [{ "role": "user" | "assistant", "content": "..." }] }` y responder `{ "reply": "..." }`.
2. Copien `.env.example` a `.env` (o configúrenlo en *Vercel → Settings → Environment Variables*) con `VITE_TUTOR_API_URL=https://su-backend/tutor`.
3. Vuelvan a compilar. El indicador cambia de "Modo demostración" a "Conectado". Si el backend falla, el chat responde con el modo demostración y lo indica.

**Seguridad:** las claves de API van solo en el backend. Cualquier variable `VITE_*` termina dentro del código público del sitio.

## Voz

- **Escuchar respuestas:** usa `SpeechSynthesis` del navegador con una voz en español si está disponible. Funciona en la mayoría de navegadores modernos.
- **Dictado por micrófono:** usa `SpeechRecognition`, disponible principalmente en Chrome y Edge. Si el navegador no lo soporta, el botón se desactiva y se muestra un aviso; el chat sigue funcionando por texto.

## Estructura

```
src/
├── App.jsx                 rutas de la aplicación (#/panel, #/modulos, #/leccion/m2-l3…)
├── styles.css              sistema visual (claro y oscuro)
├── data/                   contenido de módulos y actividades
├── hooks/                  progreso (LocalStorage), voz y navegación
├── services/tutor/         arquitectura modular del tutor
├── components/             componentes reutilizables y actividades de lección
└── pages/                  Inicio, Panel, Módulos, Lección, Actividades, Tutor, Progreso
```

Para agregar contenido, editen `src/data/modules.js` (lecciones) y `src/data/activities.js` (preguntas). Para ampliar el modo demostración, agreguen entradas a `knowledgeBase.js`.
