// Actividad 1 — Cuestionario Scrum (4 opciones, una correcta, con explicación)
export const scrumQuiz = [
  {
    id: 'q1',
    question: '¿Cuál es la duración máxima de un Sprint?',
    options: ['Una semana', 'Dos semanas', 'Un mes', 'Tres meses'],
    answer: 2,
    explanation:
      'Según la Guía de Scrum, los Sprints duran un mes o menos. Muchos equipos usan dos semanas, pero el máximo es un mes.',
  },
  {
    id: 'q2',
    question: '¿Quién es responsable de ordenar el Product Backlog?',
    options: ['El Scrum Master', 'Los Developers', 'El Product Owner', 'Las partes interesadas'],
    answer: 2,
    explanation:
      'El Product Owner rinde cuentas por la gestión del Product Backlog, incluido su orden según el valor.',
  },
  {
    id: 'q3',
    question: '¿Cuánto dura el Daily Scrum?',
    options: ['5 minutos', '15 minutos', '30 minutos', '1 hora'],
    answer: 1,
    explanation: 'El Daily Scrum es un evento de 15 minutos para los Developers.',
  },
  {
    id: 'q4',
    question: '¿Cuáles son los tres pilares del empirismo en Scrum?',
    options: [
      'Compromiso, foco y respeto',
      'Transparencia, inspección y adaptación',
      'Planificación, ejecución y control',
      'Alcance, tiempo y costo',
    ],
    answer: 1,
    explanation:
      'Scrum se basa en hacer visible el trabajo, revisarlo con frecuencia y ajustar. Compromiso, foco y respeto son valores, no pilares.',
  },
  {
    id: 'q5',
    question: '¿Qué evento sirve para mejorar la forma de trabajar del equipo?',
    options: ['Sprint Review', 'Sprint Planning', 'Sprint Retrospective', 'Daily Scrum'],
    answer: 2,
    explanation:
      'La Sprint Retrospective revisa personas, interacciones, procesos y herramientas para mejorar la calidad y la efectividad.',
  },
  {
    id: 'q6',
    question: '¿Cuál es el compromiso asociado al Incremento?',
    options: [
      'El Objetivo del Producto',
      'El Objetivo del Sprint',
      'La Definición de Terminado',
      'La velocidad del equipo',
    ],
    answer: 2,
    explanation:
      'El trabajo solo forma parte del Incremento cuando cumple la Definición de Terminado.',
  },
  {
    id: 'q7',
    question: 'En Planning Poker, ¿por qué se revelan las cartas al mismo tiempo?',
    options: [
      'Para terminar más rápido',
      'Para evitar que la primera opinión influya en las demás',
      'Porque así lo exige la Guía de Scrum',
      'Para calcular el promedio exacto',
    ],
    answer: 1,
    explanation:
      'La revelación simultánea evita el efecto ancla. Además, Planning Poker es una técnica complementaria, no parte obligatoria de Scrum.',
  },
  {
    id: 'q8',
    question: '¿Qué representan los puntos de historia?',
    options: [
      'Horas exactas de trabajo',
      'El costo en dinero de la historia',
      'El tamaño relativo: esfuerzo, complejidad e incertidumbre',
      'La prioridad de la historia',
    ],
    answer: 2,
    explanation: 'Son una medida relativa que compara historias entre sí, no una conversión a horas.',
  },
  {
    id: 'q9',
    question: 'En un Burndown Chart, la línea real está por encima de la ideal. ¿Qué significa?',
    options: [
      'El equipo va adelantado',
      'El equipo va atrasado',
      'El Sprint ya terminó',
      'El backlog está vacío',
    ],
    answer: 1,
    explanation: 'Queda más trabajo del que debería quedar según el ritmo ideal.',
  },
  {
    id: 'q10',
    question: '¿Cuál de estas es una historia de usuario bien escrita?',
    options: [
      'Hacer la base de datos',
      'Como estudiante, quiero ver mi progreso para saber cuánto me falta',
      'Arreglar los errores',
      'El sistema debe ser rápido',
    ],
    answer: 1,
    explanation:
      'Sigue la plantilla "Como… quiero… para…", y expresa quién, qué necesita y por qué.',
  },
];

// Actividad 2 — Identifica el concepto
export const identifyItems = [
  {
    id: 'c1',
    description:
      'Es la persona responsable de establecer Scrum y ayudar al equipo a comprenderlo.',
    options: ['Product Owner', 'Scrum Master', 'Developer', 'Stakeholder'],
    answer: 1,
    explanation:
      'El Scrum Master establece Scrum como se define en la Guía y es responsable de la efectividad del equipo.',
  },
  {
    id: 'c2',
    description:
      'Lista ordenada y emergente de todo lo que se necesita para mejorar el producto.',
    options: ['Sprint Backlog', 'Incremento', 'Product Backlog', 'Burndown Chart'],
    answer: 2,
    explanation: 'El Product Backlog es la única fuente de trabajo del Scrum Team.',
  },
  {
    id: 'c3',
    description:
      'Evento de duración fija, de un mes o menos, en el que se crea un Incremento utilizable.',
    options: ['Sprint', 'Daily Scrum', 'Sprint Review', 'Release'],
    answer: 0,
    explanation: 'El Sprint contiene a todos los demás eventos de Scrum.',
  },
  {
    id: 'c4',
    description:
      'Guía de conocimientos y principios para dirigir proyectos, publicada por el PMI. No es un software.',
    options: ['Scrum', 'PMBOK', 'Jira', 'ISO 9001'],
    answer: 1,
    explanation: 'La Guía del PMBOK reúne buenas prácticas y principios de dirección de proyectos.',
  },
  {
    id: 'c5',
    description:
      'Secuencia más larga de actividades dependientes; determina la duración mínima del proyecto.',
    options: ['Holgura', 'Diagrama de Gantt', 'EDT', 'Ruta crítica'],
    answer: 3,
    explanation: 'Sus actividades tienen holgura cero: si una se retrasa, se retrasa el proyecto.',
  },
  {
    id: 'c6',
    description:
      'Práctica en la que dos personas trabajan en el mismo código: una escribe y la otra revisa.',
    options: ['Refactorización', 'Programación en parejas', 'Integración continua', 'Daily Scrum'],
    answer: 1,
    explanation: 'El conductor escribe y el navegador revisa y piensa en el diseño.',
  },
  {
    id: 'c7',
    description: 'Mejorar la estructura interna del código sin cambiar su comportamiento externo.',
    options: ['Depuración', 'Refactorización', 'Despliegue', 'Prueba de aceptación'],
    answer: 1,
    explanation: 'La refactorización reduce la deuda técnica sin alterar lo que ve el usuario.',
  },
  {
    id: 'c8',
    description:
      'Técnica de estimación en la que cada persona elige una carta en secreto y luego todas se revelan.',
    options: ['Planning Poker', 'Velocidad', 'Burndown Chart', 'Matriz poder/interés'],
    answer: 0,
    explanation: 'La revelación simultánea evita que una opinión influya en las demás.',
  },
  {
    id: 'c9',
    description:
      'Gráfica que muestra el trabajo restante del Sprint a lo largo de los días.',
    options: ['Diagrama de Gantt', 'Burndown Chart', 'Diagrama de red', 'Tablero Kanban'],
    answer: 1,
    explanation: 'El Burndown Chart compara el avance real contra una línea ideal.',
  },
  {
    id: 'c10',
    description:
      'Evento incierto que, si ocurre, afecta al proyecto de forma positiva o negativa.',
    options: ['Problema', 'Riesgo', 'Requisito', 'Entregable'],
    answer: 1,
    explanation:
      'Un riesgo todavía no ha ocurrido; cuando ocurre se convierte en un problema o en una oportunidad aprovechada.',
  },
];
