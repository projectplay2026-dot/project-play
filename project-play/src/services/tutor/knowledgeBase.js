// Base de conocimiento del MODO DEMOSTRACIÓN de Project Play AI.
// Son respuestas educativas predefinidas. Cada entrada tiene palabras clave
// (sin acentos, en minúsculas) que el buscador compara con la pregunta.
// Las frases de varias palabras pesan más que las sueltas.

export const knowledgeBase = [
  {
    id: 'scrum',
    title: '¿Qué es Scrum?',
    keywords: ['scrum', 'que es scrum', 'marco scrum', 'guia de scrum'],
    paragraphs: [
      'Scrum es un marco de trabajo ligero para desarrollar productos complejos en ciclos cortos llamados Sprints. Fue creado por Ken Schwaber y Jeff Sutherland.',
      'Se basa en el empirismo, con tres pilares: transparencia, inspección y adaptación. Tiene 3 responsabilidades (Product Owner, Scrum Master y Developers), 5 eventos y 3 artefactos.',
    ],
    example:
      'Imagina que tu equipo desarrolla una app en Sprints de 2 semanas: al final de cada uno muestran algo funcionando y ajustan el plan con la retroalimentación.',
    lessonId: 'm2-l1',
    related: ['¿Cómo funciona un Sprint?', '¿Qué hace un Scrum Master?'],
  },
  {
    id: 'sprint',
    title: 'El Sprint',
    keywords: ['sprint', 'como funciona un sprint', 'que es un sprint', 'duracion sprint', 'iteracion'],
    paragraphs: [
      'Un Sprint es un periodo de duración fija, de un mes o menos, en el que el equipo crea un Incremento utilizable del producto.',
      'Funciona así: empieza con la Sprint Planning, cada día hay un Daily Scrum de 15 minutos, al final se muestra el resultado en la Sprint Review y se cierra con la Sprint Retrospective. Luego comienza el siguiente Sprint de inmediato.',
    ],
    bullets: ['Sprint Planning', 'Daily Scrum (cada día)', 'Sprint Review', 'Sprint Retrospective'],
    example:
      'Sprint de 2 semanas con el objetivo: "El estudiante puede resolver el cuestionario de Scrum y ver su resultado".',
    lessonId: 'm2-l2',
    related: ['¿Qué es un Burndown Chart?', '¿Qué es el Daily Scrum?'],
  },
  {
    id: 'scrum-master',
    title: 'Scrum Master',
    keywords: ['scrum master', 'que hace un scrum master', 'facilitador', 'impedimento', 'impedimentos'],
    paragraphs: [
      'El Scrum Master es responsable de establecer Scrum como se define en la Guía de Scrum, ayudando a todos a entender la teoría y la práctica. También responde por la efectividad del equipo.',
      'Es un líder que sirve: ayuda a eliminar impedimentos, facilita eventos cuando hace falta, apoya al Product Owner y promueve la autogestión. No asigna tareas ni actúa como jefe.',
    ],
    example:
      'Si el equipo no puede desplegar porque falta un permiso, el Scrum Master ayuda a conseguirlo para que los Developers sigan trabajando.',
    lessonId: 'm2-l3',
    related: ['¿Qué hace el Product Owner?', '¿Quiénes son los Developers?'],
  },
  {
    id: 'product-owner',
    title: 'Product Owner',
    keywords: ['product owner', 'dueno del producto', 'po', 'que hace el product owner'],
    paragraphs: [
      'El Product Owner es responsable de maximizar el valor del producto. Es una sola persona, no un comité.',
      'Gestiona el Product Backlog: define el Objetivo del Producto, crea y explica los elementos, y los ordena según el valor que aportan.',
    ],
    example:
      'Decide que el tutor con IA es más valioso que un modo oscuro y lo coloca más arriba en el backlog.',
    lessonId: 'm2-l4',
    related: ['¿Qué es el Product Backlog?', '¿Qué hace un Scrum Master?'],
  },
  {
    id: 'developers',
    title: 'Developers',
    keywords: ['developers', 'desarrolladores', 'equipo de desarrollo', 'quienes son los developers'],
    paragraphs: [
      'Los Developers son las personas del Scrum Team que crean el Incremento en cada Sprint. No solo programan: incluyen diseño, pruebas, contenido o cualquier habilidad necesaria.',
      'Crean el Sprint Backlog, cumplen la Definición de Terminado y se autogestionan para alcanzar el Objetivo del Sprint.',
    ],
    lessonId: 'm2-l5',
    related: ['¿Qué es el Sprint Backlog?', '¿Qué es el Incremento?'],
  },
  {
    id: 'roles',
    title: 'Responsabilidades en Scrum',
    keywords: ['roles', 'roles de scrum', 'responsabilidades', 'scrum team', 'equipo scrum'],
    paragraphs: [
      'Un Scrum Team tiene tres responsabilidades: Product Owner, Scrum Master y Developers. Es un equipo pequeño, normalmente de 10 personas o menos, sin jerarquías internas.',
    ],
    bullets: [
      'Product Owner: maximiza el valor y ordena el backlog.',
      'Scrum Master: establece Scrum y elimina impedimentos.',
      'Developers: construyen el Incremento.',
    ],
    lessonId: 'm2-l3',
    related: ['¿Qué hace un Scrum Master?', '¿Qué hace el Product Owner?'],
  },
  {
    id: 'product-backlog',
    title: 'Product Backlog',
    keywords: ['product backlog', 'backlog', 'refinamiento', 'pila del producto'],
    paragraphs: [
      'El Product Backlog es una lista ordenada y viva de todo lo que se necesita para mejorar el producto. Es la única fuente de trabajo del equipo.',
      'Su compromiso es el Objetivo del Producto. Los elementos de arriba están más detallados; el refinamiento los divide, aclara y estima.',
    ],
    example: '1. Ver módulos · 2. Marcar lecciones · 3. Cuestionario · 4. Tutor IA · 5. Modo oscuro.',
    lessonId: 'm2-l6',
    related: ['¿Qué diferencia hay entre Product Backlog y Sprint Backlog?', '¿Qué es una historia de usuario?'],
  },
  {
    id: 'sprint-backlog',
    title: 'Sprint Backlog',
    keywords: ['sprint backlog', 'tablero', 'plan del sprint'],
    paragraphs: [
      'El Sprint Backlog es el plan de los Developers para el Sprint. Contiene el Objetivo del Sprint (porqué), los elementos seleccionados (qué) y el plan de trabajo (cómo).',
      'Se actualiza durante el Sprint y suele mostrarse en un tablero con columnas como Por hacer, En progreso y Terminado.',
    ],
    lessonId: 'm2-l7',
    related: ['¿Qué es el Product Backlog?', '¿Qué es la Sprint Planning?'],
  },
  {
    id: 'backlog-diff',
    title: 'Product Backlog vs. Sprint Backlog',
    keywords: ['diferencia product backlog sprint backlog', 'product backlog sprint backlog'],
    paragraphs: [
      'El Product Backlog contiene todo lo que podría necesitar el producto y lo gestiona el Product Owner. El Sprint Backlog contiene solo lo seleccionado para el Sprint actual, más el plan para lograrlo, y pertenece a los Developers.',
    ],
    bullets: [
      'Product Backlog → largo plazo, compromiso: Objetivo del Producto.',
      'Sprint Backlog → Sprint actual, compromiso: Objetivo del Sprint.',
    ],
    lessonId: 'm2-l7',
    related: ['¿Qué es el Incremento?'],
  },
  {
    id: 'increment',
    title: 'Incremento',
    keywords: ['incremento', 'definicion de terminado', 'definition of done', 'dod', 'terminado'],
    paragraphs: [
      'Un Incremento es un paso concreto y utilizable hacia el Objetivo del Producto. Se suma a los anteriores y todo debe funcionar en conjunto.',
      'Solo cuenta como Incremento el trabajo que cumple la Definición de Terminado, que describe la calidad mínima requerida.',
    ],
    example:
      'Definición de Terminado de ejemplo: funciona en celular, el texto está revisado, no hay errores y está desplegado.',
    lessonId: 'm2-l8',
    related: ['¿Qué es la Sprint Review?'],
  },
  {
    id: 'events',
    title: 'Eventos de Scrum',
    keywords: ['eventos', 'eventos de scrum', 'ceremonias', 'reuniones de scrum'],
    paragraphs: ['Scrum tiene cinco eventos. El Sprint contiene a los otros cuatro:'],
    bullets: [
      'Sprint: un mes o menos.',
      'Sprint Planning: hasta 8 horas para un Sprint de un mes.',
      'Daily Scrum: 15 minutos.',
      'Sprint Review: hasta 4 horas para un Sprint de un mes.',
      'Sprint Retrospective: hasta 3 horas para un Sprint de un mes.',
    ],
    lessonId: 'm2-l2',
    related: ['¿Qué es el Daily Scrum?', '¿Qué diferencia hay entre Review y Retrospective?'],
  },
  {
    id: 'planning',
    title: 'Sprint Planning',
    keywords: ['sprint planning', 'planeacion del sprint', 'planificacion del sprint'],
    paragraphs: [
      'La Sprint Planning inicia el Sprint. El equipo responde: ¿por qué es valioso este Sprint?, ¿qué se puede terminar? y ¿cómo se hará?',
      'Dura como máximo 8 horas para un Sprint de un mes y produce el Sprint Backlog.',
    ],
    lessonId: 'm2-l9',
    related: ['¿Qué es el Sprint Backlog?'],
  },
  {
    id: 'daily',
    title: 'Daily Scrum',
    keywords: ['daily', 'daily scrum', 'reunion diaria', 'standup', 'stand up'],
    paragraphs: [
      'El Daily Scrum es un evento de 15 minutos para los Developers, cada día del Sprint, a la misma hora y en el mismo lugar.',
      'Sirve para revisar el avance hacia el Objetivo del Sprint y ajustar el plan del día. El formato lo elige el equipo; muchos usan: qué hice, qué haré y qué me bloquea.',
    ],
    lessonId: 'm2-l10',
    related: ['¿Qué hace un Scrum Master?'],
  },
  {
    id: 'review',
    title: 'Sprint Review',
    keywords: ['sprint review', 'revision del sprint', 'review', 'demo'],
    paragraphs: [
      'En la Sprint Review el equipo muestra el resultado del Sprint a las partes interesadas y juntos deciden qué ajustar. Es una sesión de trabajo, no solo una presentación.',
    ],
    lessonId: 'm2-l11',
    related: ['¿Qué diferencia hay entre Review y Retrospective?'],
  },
  {
    id: 'retro',
    title: 'Sprint Retrospective',
    keywords: ['retrospectiva', 'retrospective', 'retro', 'sprint retrospective'],
    paragraphs: [
      'La Sprint Retrospective cierra el Sprint. El equipo analiza cómo trabajó (personas, procesos, herramientas) y define mejoras concretas para el siguiente Sprint.',
    ],
    lessonId: 'm2-l12',
    related: ['¿Qué diferencia hay entre Review y Retrospective?'],
  },
  {
    id: 'review-retro',
    title: 'Review vs. Retrospective',
    keywords: ['diferencia review retrospective', 'review retrospective', 'review retro', 'diferencia review retrospectiva'],
    paragraphs: [
      'La Sprint Review se enfoca en el producto: qué se construyó y qué sigue. La Sprint Retrospective se enfoca en el equipo: cómo se trabajó y cómo mejorar.',
      'Una forma fácil de recordarlo: la Review mira el "qué" y la Retrospective mira el "cómo".',
    ],
    lessonId: 'm2-l12',
  },
  {
    id: 'user-story',
    title: 'Historias de usuario',
    keywords: ['historia de usuario', 'historias de usuario', 'user story', 'criterios de aceptacion', 'invest'],
    paragraphs: [
      'Una historia de usuario describe una necesidad desde el punto de vista de quien usa el producto, con la plantilla: "Como [usuario], quiero [acción] para [beneficio]".',
      'Se acompaña de criterios de aceptación. Una buena historia cumple INVEST: Independiente, Negociable, Valiosa, Estimable, Pequeña y Testeable.',
    ],
    example:
      '"Como estudiante, quiero escuchar la respuesta del tutor para repasar mientras camino."',
    lessonId: 'm2-l13',
    related: ['¿Qué son los puntos de historia?', '¿Qué es Planning Poker?'],
  },
  {
    id: 'poker',
    title: 'Planning Poker',
    keywords: ['planning poker', 'poker', 'estimacion', 'estimar', 'cartas'],
    paragraphs: [
      'Planning Poker es una técnica para estimar en equipo. Cada persona elige en secreto una carta (1, 2, 3, 5, 8, 13…) y todas se revelan a la vez.',
      'Si hay mucha diferencia, quienes votaron más alto y más bajo explican sus razones y se vuelve a votar hasta llegar a un consenso.',
    ],
    example: 'Ana vota 3 y Luis 13 para "entrada por micrófono". Luis explica un riesgo técnico y acuerdan 8.',
    lessonId: 'm2-l14',
    related: ['¿Qué son los puntos de historia?'],
  },
  {
    id: 'story-points',
    title: 'Puntos de historia',
    keywords: ['puntos de historia', 'story points', 'velocidad', 'velocity'],
    paragraphs: [
      'Los puntos de historia miden el tamaño relativo de una historia: esfuerzo, complejidad e incertidumbre. No son horas.',
      'La velocidad es la cantidad de puntos que el equipo termina por Sprint y ayuda a pronosticar cuánto puede comprometer en el siguiente.',
    ],
    lessonId: 'm2-l15',
    related: ['¿Qué es Planning Poker?', '¿Qué es un Burndown Chart?'],
  },
  {
    id: 'burndown',
    title: 'Burndown Chart',
    keywords: ['burndown', 'burndown chart', 'grafica de quemado', 'trabajo restante'],
    paragraphs: [
      'Un Burndown Chart muestra cuánto trabajo falta (eje vertical) a lo largo de los días del Sprint (eje horizontal). La línea ideal baja de forma constante hasta cero.',
      'Si la línea real queda arriba de la ideal, el equipo va atrasado; si queda abajo, va adelantado.',
    ],
    example:
      'Día 6: quedan 22 puntos y la línea ideal marca 16. El equipo lo detecta en el Daily Scrum y ajusta su plan.',
    lessonId: 'm2-l16',
    related: ['¿Qué son los puntos de historia?'],
  },
  {
    id: 'pmbok',
    title: '¿Qué es el PMBOK?',
    keywords: ['pmbok', 'que es el pmbok', 'guia del pmbok', 'body of knowledge'],
    paragraphs: [
      'El PMBOK (Project Management Body of Knowledge) es una guía de conocimientos y principios para dirigir proyectos, publicada por el PMI.',
      'No es un software ni una metodología paso a paso: describe buenas prácticas que cada organización adapta. La 7.ª edición (2021) se organizó en 12 principios y 8 dominios de desempeño; la 8.ª edición, de finales de 2025, combina principios, dominios y procesos adaptables.',
    ],
    example:
      'Usar Trello no es "usar PMBOK". Gestionar riesgos como lo describe la guía, con cualquier herramienta, sí es aplicarlo.',
    lessonId: 'm3-l1',
    related: ['¿Qué es el PMI?', '¿Qué es la ruta crítica?'],
  },
  {
    id: 'pmi',
    title: 'PMI',
    keywords: ['pmi', 'project management institute', 'pmp', 'capm', 'certificacion'],
    paragraphs: [
      'El PMI (Project Management Institute) es una organización profesional sin fines de lucro fundada en 1969. Publica la Guía del PMBOK y otorga certificaciones como CAPM, PMP y PMI-ACP.',
    ],
    lessonId: 'm3-l2',
    related: ['¿Qué es el PMBOK?'],
  },
  {
    id: 'pm-areas',
    title: 'Áreas de gestión',
    keywords: ['areas de conocimiento', 'gestion del alcance', 'gestion del cronograma', 'gestion de costos', 'gestion de calidad', 'gestion de interesados', 'alcance', 'cronograma', 'costos', 'calidad', 'interesados', 'stakeholders', 'edt', 'gantt'],
    paragraphs: [
      'En la 6.ª edición del PMBOK, la gestión se organizaba en áreas de conocimiento. Algunas de las más importantes:',
    ],
    bullets: [
      'Alcance: todo el trabajo requerido y solo ese (EDT).',
      'Cronograma: actividades, dependencias y duración (Gantt).',
      'Costos: estimar, presupuestar y controlar.',
      'Calidad: cumplir requisitos y prevenir defectos.',
      'Riesgos: identificar y responder a la incertidumbre.',
      'Interesados: identificar y comprometer a quienes afectan el proyecto.',
    ],
    lessonId: 'm3-l4',
    related: ['¿Qué es la gestión de riesgos?', '¿Qué es la ruta crítica?'],
  },
  {
    id: 'risk',
    title: 'Gestión de riesgos',
    keywords: ['riesgo', 'riesgos', 'gestion de riesgos', 'mitigar', 'amenaza', 'oportunidad'],
    paragraphs: [
      'Un riesgo es un evento incierto que, si ocurre, afecta al proyecto de forma negativa (amenaza) o positiva (oportunidad). Se evalúa por probabilidad e impacto.',
      'Respuestas a amenazas: evitar, mitigar, transferir o aceptar.',
    ],
    example:
      'Riesgo: la IA real no está lista para la presentación. Mitigación: un modo demostración, como el que estás usando ahora.',
    lessonId: 'm3-l7',
  },
  {
    id: 'critical-path',
    title: 'Ruta crítica',
    keywords: ['ruta critica', 'camino critico', 'cpm', 'holgura'],
    paragraphs: [
      'La ruta crítica es la secuencia más larga de actividades dependientes. Determina la duración mínima del proyecto.',
      'Sus actividades tienen holgura cero: si una se retrasa, todo el proyecto se retrasa.',
    ],
    example:
      'Diseñar (3) → programar (5) → probar (2) = 10 días. Escribir (4) → revisar (2) = 6 días. La ruta crítica es la de 10 días.',
    lessonId: 'm3-l10',
  },
  {
    id: 'xp',
    title: 'Extreme Programming (XP)',
    keywords: ['xp', 'extreme programming', 'programacion extrema', 'kent beck'],
    paragraphs: [
      'Extreme Programming (XP) es una metodología ágil creada por Kent Beck, enfocada en la excelencia técnica.',
      'Sus valores son comunicación, simplicidad, retroalimentación, coraje y respeto. Sus prácticas incluyen programación en parejas, TDD, integración continua, refactorización y entregas pequeñas.',
    ],
    lessonId: 'm4-l1',
    related: ['¿Cuál es la diferencia entre Scrum y XP?', '¿Qué es la programación en parejas?'],
  },
  {
    id: 'scrum-xp',
    title: 'Scrum vs. XP',
    keywords: ['diferencia scrum xp', 'scrum xp', 'scrum y xp', 'scrum extreme programming', 'trincheras', 'kniberg'],
    paragraphs: [
      'Scrum se enfoca en cómo organizar y gestionar el trabajo: responsabilidades, eventos y artefactos. XP se enfoca en las prácticas técnicas de programación.',
      'Por eso se complementan. En "Scrum y XP desde las trincheras", Henrik Kniberg describe cómo su equipo combinaba Scrum para gestionar el trabajo con prácticas de XP como la programación en parejas, TDD y la integración continua.',
    ],
    bullets: [
      'Scrum → Sprints, Product Backlog, Daily Scrum.',
      'XP → parejas, TDD, integración continua, refactorización.',
    ],
    lessonId: 'm4-l2',
  },
  {
    id: 'pair',
    title: 'Programación en parejas',
    keywords: ['programacion en parejas', 'pair programming', 'parejas', 'conductor', 'navegador'],
    paragraphs: [
      'Dos personas trabajan en el mismo código: el conductor escribe y el navegador revisa, piensa en el diseño y detecta errores. Los roles se alternan con frecuencia.',
      'Mejora la calidad y reparte el conocimiento del sistema en el equipo.',
    ],
    lessonId: 'm4-l3',
  },
  {
    id: 'ci',
    title: 'Integración continua',
    keywords: ['integracion continua', 'continuous integration', 'ci', 'compilacion automatica'],
    paragraphs: [
      'La integración continua consiste en integrar los cambios al repositorio principal con frecuencia y verificarlos con compilación y pruebas automáticas.',
      'Así los errores se detectan pronto, cuando son pequeños.',
    ],
    lessonId: 'm4-l4',
  },
  {
    id: 'refactor',
    title: 'Refactorización',
    keywords: ['refactorizacion', 'refactorizar', 'refactoring', 'deuda tecnica'],
    paragraphs: [
      'Refactorizar es mejorar la estructura interna del código sin cambiar su comportamiento. Se hace en pasos pequeños y con pruebas para confirmar que todo sigue funcionando.',
    ],
    lessonId: 'm4-l5',
  },
  {
    id: 'testing',
    title: 'Pruebas y TDD',
    keywords: ['pruebas', 'tdd', 'test', 'testing', 'pruebas unitarias', 'desarrollo guiado por pruebas'],
    paragraphs: [
      'Las pruebas verifican que el software funciona. Hay pruebas unitarias, de integración y de aceptación.',
      'En TDD (Desarrollo Guiado por Pruebas) se sigue el ciclo rojo → verde → refactorizar: primero una prueba que falla, luego el código mínimo para pasarla y después se mejora el diseño.',
    ],
    lessonId: 'm4-l6',
  },
  {
    id: 'incremental',
    title: 'Entregas incrementales',
    keywords: ['entregas incrementales', 'entrega incremental', 'entregas pequenas', 'iterativo', 'incremental'],
    paragraphs: [
      'Consiste en entregar el producto en partes pequeñas y funcionales para recibir retroalimentación real pronto y reducir el riesgo.',
    ],
    lessonId: 'm4-l7',
  },
  {
    id: 'project',
    title: '¿Qué es un proyecto?',
    keywords: ['que es un proyecto', 'proyecto', 'administracion de proyectos', 'gestion de proyectos', 'ciclo de vida'],
    paragraphs: [
      'Un proyecto es un esfuerzo temporal para crear un producto, servicio o resultado único. Tiene inicio y fin definidos.',
      'La administración de proyectos aplica conocimientos, habilidades y técnicas para cumplir sus objetivos, equilibrando alcance, tiempo, costo y calidad.',
    ],
    lessonId: 'm1-l1',
    related: ['¿Qué es el PMBOK?', '¿Qué es Scrum?'],
  },
];

export const suggestedQuestions = [
  '¿Qué es Scrum?',
  '¿Qué hace un Scrum Master?',
  '¿Qué es el PMBOK?',
  '¿Cómo funciona un Sprint?',
  '¿Qué es un Burndown Chart?',
  '¿Cuál es la diferencia entre Scrum y XP?',
];
