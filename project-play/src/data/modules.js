// Contenido educativo de Project Play.
// Cada lección tiene: explicación breve, ejemplo práctico, puntos clave
// y una comprobación rápida. Algunas incluyen una actividad interactiva (widget).

export const modules = [
  {
    id: 'm1',
    number: 1,
    title: 'Introducción a la gestión de proyectos',
    short: 'Fundamentos',
    icon: 'Compass',
    description:
      'Qué es un proyecto, cómo se administra y por qué planificar marca la diferencia.',
    lessons: [
      {
        id: 'm1-l1',
        title: '¿Qué es un proyecto?',
        minutes: 3,
        summary: 'Un esfuerzo temporal para crear algo único.',
        body: [
          'Un proyecto es un esfuerzo temporal que se realiza para crear un producto, servicio o resultado único. Es temporal porque tiene un inicio y un fin definidos, y es único porque su resultado no es idéntico a otro existente.',
          'Esto lo distingue de las operaciones, que son trabajo continuo y repetitivo. Atender la mesa de ayuda de una empresa todos los días es una operación; desarrollar la nueva app de la mesa de ayuda es un proyecto.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Desarrollar Project Play es un proyecto: tiene fecha de entrega al final del semestre, un equipo definido y produce una plataforma que antes no existía.',
        },
        keyPoints: [
          'Temporal: tiene inicio y fin.',
          'Único: su resultado es nuevo.',
          'Se elabora progresivamente: el detalle aumenta conforme avanza.',
        ],
        check: {
          question: '¿Cuál de estas actividades es un proyecto?',
          options: [
            'Responder correos de clientes todos los días',
            'Lanzar una nueva versión de una aplicación móvil',
            'Hacer el respaldo nocturno de la base de datos',
          ],
          answer: 1,
          explanation:
            'Lanzar una nueva versión tiene inicio, fin y un resultado único. Las otras dos son operaciones continuas.',
        },
      },
      {
        id: 'm1-l2',
        title: '¿Qué es la administración de proyectos?',
        minutes: 3,
        summary: 'Aplicar conocimientos y técnicas para cumplir los objetivos.',
        body: [
          'La administración de proyectos es la aplicación de conocimientos, habilidades, herramientas y técnicas a las actividades del proyecto para cumplir con sus requisitos.',
          'Implica equilibrar restricciones que compiten entre sí: alcance, tiempo, costo, calidad, recursos y riesgos. Si se amplía el alcance, normalmente se necesita más tiempo o más presupuesto.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Si la profesora pide agregar un módulo extra a Project Play una semana antes de la entrega, el equipo debe negociar: reducir otra funcionalidad, pedir más tiempo o aceptar un riesgo en la calidad.',
        },
        keyPoints: [
          'Integra personas, procesos y herramientas.',
          'Equilibra alcance, tiempo, costo y calidad.',
          'Busca entregar valor, no solo terminar tareas.',
        ],
        check: {
          question: 'Si aumenta el alcance de un proyecto y nada más cambia, ¿qué suele ocurrir?',
          options: [
            'El proyecto termina antes',
            'Se requiere más tiempo o más costo',
            'La calidad mejora automáticamente',
          ],
          answer: 1,
          explanation:
            'Las restricciones están relacionadas: más trabajo normalmente exige más tiempo, más recursos o ambos.',
        },
      },
      {
        id: 'm1-l3',
        title: 'Ciclo de vida de un proyecto',
        minutes: 4,
        summary: 'Las fases por las que pasa un proyecto de inicio a cierre.',
        widget: 'lifecycle',
        body: [
          'El ciclo de vida es la serie de fases que atraviesa un proyecto desde su inicio hasta su cierre. Una forma común de describirlo es: inicio, planificación, ejecución, monitoreo y control, y cierre.',
          'El ciclo puede ser predictivo (todo se planifica al principio, como en cascada), iterativo, incremental o adaptativo (ágil), como Scrum, donde se entrega valor en ciclos cortos.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'En Project Play: el inicio fue definir la idea del llavero con QR; la planificación, crear el Product Backlog; la ejecución, desarrollar en Sprints; el control, revisar el avance en cada Sprint Review; y el cierre, la presentación final.',
        },
        keyPoints: [
          'Inicio → Planificación → Ejecución → Monitoreo y control → Cierre.',
          'El monitoreo ocurre durante todo el proyecto.',
          'Los enfoques ágiles repiten ciclos cortos.',
        ],
        check: {
          question: '¿En qué fase se formaliza la entrega y se documentan las lecciones aprendidas?',
          options: ['Inicio', 'Ejecución', 'Cierre'],
          answer: 2,
          explanation:
            'En el cierre se entrega el resultado, se liberan recursos y se registran las lecciones aprendidas.',
        },
      },
      {
        id: 'm1-l4',
        title: 'Objetivos, alcance y entregables',
        minutes: 4,
        summary: 'Qué se quiere lograr, qué incluye el trabajo y qué se entrega.',
        body: [
          'Los objetivos describen lo que el proyecto busca lograr. Un buen objetivo es específico, medible, alcanzable, relevante y con tiempo definido (SMART).',
          'El alcance define qué trabajo se incluye y, muy importante, qué queda fuera. Los entregables son los productos, resultados o capacidades verificables que se producen, como un prototipo, un manual o una aplicación desplegada.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Objetivo: "Publicar la versión 1 de Project Play antes de la presentación final, con 4 módulos y 2 actividades". Fuera del alcance: registro de usuarios y pagos. Entregables: la aplicación web y el llavero con QR.',
        },
        keyPoints: [
          'Objetivo SMART = claro y medible.',
          'El alcance también dice qué NO se hará.',
          'Un entregable debe poder verificarse.',
        ],
        check: {
          question: '¿Cuál es un objetivo mejor redactado?',
          options: [
            'Hacer una app bonita',
            'Mejorar el aprendizaje',
            'Lograr que 30 estudiantes completen un módulo antes del 30 de noviembre',
          ],
          answer: 2,
          explanation: 'Es específico, medible y tiene una fecha límite.',
        },
      },
      {
        id: 'm1-l5',
        title: 'La importancia de planificar',
        minutes: 3,
        summary: 'Planificar reduce la incertidumbre y alinea al equipo.',
        body: [
          'Planificar permite anticipar el trabajo, estimar tiempos y costos, asignar responsabilidades e identificar riesgos antes de que se conviertan en problemas.',
          'En los enfoques ágiles también se planifica, pero de manera continua: se planifica a alto nivel el producto y con detalle solo el siguiente Sprint, ajustando el plan con lo que se aprende.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Sin plan, dos integrantes podrían programar la misma pantalla mientras nadie prepara el contenido. Con un backlog priorizado, cada quien sabe qué hacer y en qué orden.',
        },
        keyPoints: [
          'Planificar no es adivinar: es reducir incertidumbre.',
          'El plan se ajusta con nueva información.',
          'Un plan compartido alinea al equipo.',
        ],
        check: {
          question: 'En un enfoque ágil, ¿cómo se planifica?',
          options: [
            'Solo una vez al inicio y no se modifica',
            'De forma continua, con más detalle para el trabajo cercano',
            'No se planifica nada',
          ],
          answer: 1,
          explanation:
            'Ágil no significa sin plan: se replanifica en cada Sprint con lo aprendido.',
        },
      },
    ],
  },
  {
    id: 'm2',
    number: 2,
    title: 'Scrum',
    short: 'Marco ágil',
    icon: 'RefreshCcw',
    description:
      'Roles, eventos y artefactos del marco de trabajo ágil más usado en software.',
    lessons: [
      {
        id: 'm2-l1',
        title: '¿Qué es Scrum?',
        minutes: 4,
        summary: 'Un marco de trabajo ligero para generar valor en ciclos cortos.',
        widget: 'sprintCycle',
        body: [
          'Scrum es un marco de trabajo ligero que ayuda a personas, equipos y organizaciones a generar valor mediante soluciones adaptativas para problemas complejos. Fue creado por Ken Schwaber y Jeff Sutherland, y se describe en la Guía de Scrum.',
          'Se basa en el empirismo: el conocimiento viene de la experiencia. Sus tres pilares son transparencia, inspección y adaptación. Sus valores son compromiso, foco, apertura, respeto y coraje.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'El equipo de Project Play trabaja en Sprints de dos semanas. Al final de cada uno muestra a la profesora una versión funcional y ajusta el plan con sus comentarios.',
        },
        keyPoints: [
          'Es un marco de trabajo, no una metodología detallada.',
          'Pilares: transparencia, inspección y adaptación.',
          'Entrega valor de forma iterativa e incremental.',
        ],
        check: {
          question: '¿Cuáles son los tres pilares del empirismo en Scrum?',
          options: [
            'Planificación, ejecución y cierre',
            'Transparencia, inspección y adaptación',
            'Alcance, tiempo y costo',
          ],
          answer: 1,
          explanation:
            'Scrum hace visible el trabajo (transparencia), lo revisa con frecuencia (inspección) y ajusta (adaptación).',
        },
      },
      {
        id: 'm2-l2',
        title: '¿Qué es un Sprint?',
        minutes: 3,
        summary: 'El ciclo de duración fija donde ocurre todo el trabajo.',
        body: [
          'Un Sprint es un evento de duración fija, de un mes o menos, donde se crea un Incremento útil del producto. Un nuevo Sprint comienza inmediatamente después de que termina el anterior.',
          'Todos los demás eventos (Sprint Planning, Daily Scrum, Sprint Review y Sprint Retrospective) ocurren dentro del Sprint. Cada Sprint tiene un Objetivo del Sprint que da foco al equipo.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Sprint 3 de Project Play, dos semanas. Objetivo del Sprint: "Un estudiante puede responder el cuestionario de Scrum y ver su resultado".',
        },
        keyPoints: [
          'Duración fija de un mes o menos.',
          'Tiene un Objetivo del Sprint.',
          'Durante el Sprint no se hacen cambios que pongan en riesgo ese objetivo.',
        ],
        check: {
          question: '¿Cuál es la duración máxima de un Sprint según la Guía de Scrum?',
          options: ['Una semana', 'Un mes', 'Tres meses'],
          answer: 1,
          explanation: 'Los Sprints duran un mes o menos para mantener ciclos cortos de retroalimentación.',
        },
      },
      {
        id: 'm2-l3',
        title: 'Scrum Master',
        minutes: 3,
        summary: 'Responsable de establecer Scrum y de la efectividad del equipo.',
        body: [
          'El Scrum Master es responsable de establecer Scrum tal como se define en la Guía de Scrum, ayudando a todos a comprender la teoría y la práctica. También es responsable de la efectividad del Scrum Team.',
          'Es un líder que sirve al equipo: facilita eventos cuando hace falta, ayuda a eliminar impedimentos y apoya al Product Owner con técnicas para gestionar el backlog. No es un jefe que asigna tareas.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Si el equipo no puede desplegar porque nadie tiene acceso a Vercel, el Scrum Master ayuda a resolver ese impedimento para que los Developers sigan avanzando.',
        },
        keyPoints: [
          'Enseña y establece Scrum.',
          'Elimina impedimentos.',
          'Sirve al equipo; no lo dirige como un jefe.',
        ],
        check: {
          question: '¿Qué NO es una responsabilidad del Scrum Master?',
          options: [
            'Ayudar a eliminar impedimentos',
            'Asignar tareas a cada developer',
            'Ayudar al equipo a entender Scrum',
          ],
          answer: 1,
          explanation: 'Los Developers se organizan solos; el Scrum Master no reparte tareas.',
        },
      },
      {
        id: 'm2-l4',
        title: 'Product Owner',
        minutes: 3,
        summary: 'Maximiza el valor del producto y gestiona el Product Backlog.',
        body: [
          'El Product Owner es responsable de maximizar el valor del producto resultante del trabajo del Scrum Team. Es una sola persona, no un comité, aunque puede representar las necesidades de muchas partes interesadas.',
          'Gestiona el Product Backlog: define el Objetivo del Producto, crea y comunica los elementos del backlog, los ordena y se asegura de que sea transparente y entendido.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'La Product Owner de Project Play decide que el tutor IA es más valioso que un modo oscuro, así que lo coloca más arriba en el Product Backlog.',
        },
        keyPoints: [
          'Una sola persona.',
          'Ordena el Product Backlog según el valor.',
          'Define el Objetivo del Producto.',
        ],
        check: {
          question: '¿Quién decide el orden del Product Backlog?',
          options: ['El Scrum Master', 'El Product Owner', 'El cliente directamente'],
          answer: 1,
          explanation: 'El Product Owner es quien rinde cuentas por la gestión y el orden del Product Backlog.',
        },
      },
      {
        id: 'm2-l5',
        title: 'Developers',
        minutes: 3,
        summary: 'Las personas que crean el Incremento en cada Sprint.',
        body: [
          'Los Developers son las personas del Scrum Team comprometidas a crear cualquier aspecto de un Incremento útil en cada Sprint. No significa solo programadores: incluye diseño, pruebas, contenido y cualquier habilidad necesaria.',
          'Son responsables de crear el plan del Sprint (Sprint Backlog), de cumplir con la Definición de Terminado y de adaptar su plan cada día hacia el Objetivo del Sprint.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'En Project Play, quien diseña las pantallas, quien escribe las lecciones y quien programa el tutor son todos Developers.',
        },
        keyPoints: [
          'Equipo multifuncional.',
          'Se autogestionan.',
          'Respetan la Definición de Terminado.',
        ],
        check: {
          question: '¿Quién crea el Sprint Backlog?',
          options: ['Los Developers', 'El Product Owner', 'El Scrum Master'],
          answer: 0,
          explanation: 'Los Developers crean su plan para el Sprint, con apoyo del resto del equipo.',
        },
      },
      {
        id: 'm2-l6',
        title: 'Product Backlog',
        minutes: 3,
        summary: 'La lista ordenada de todo lo que podría necesitar el producto.',
        body: [
          'El Product Backlog es una lista emergente y ordenada de lo que se necesita para mejorar el producto. Es la única fuente del trabajo que realiza el Scrum Team. Su compromiso es el Objetivo del Producto.',
          'Los elementos de arriba están más detallados y listos para un Sprint; los de abajo pueden ser más generales. El refinamiento consiste en dividir, detallar y estimar esos elementos.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: '1. Ver módulos de aprendizaje. 2. Marcar lección como completada. 3. Cuestionario de Scrum. 4. Tutor IA. 5. Modo oscuro. El orden refleja el valor para el estudiante.',
        },
        keyPoints: [
          'Lista ordenada y viva.',
          'Única fuente de trabajo del equipo.',
          'Se refina continuamente.',
        ],
        check: {
          question: '¿Qué compromiso está asociado al Product Backlog?',
          options: ['La Definición de Terminado', 'El Objetivo del Producto', 'El Objetivo del Sprint'],
          answer: 1,
          explanation: 'Cada artefacto tiene un compromiso; el del Product Backlog es el Objetivo del Producto.',
        },
      },
      {
        id: 'm2-l7',
        title: 'Sprint Backlog',
        minutes: 3,
        summary: 'El plan de los Developers para el Sprint actual.',
        body: [
          'El Sprint Backlog se compone del Objetivo del Sprint (el porqué), los elementos del Product Backlog seleccionados (el qué) y un plan para entregar el Incremento (el cómo).',
          'Pertenece a los Developers y se actualiza a lo largo del Sprint conforme aprenden más. Muchas veces se visualiza en un tablero con columnas como Por hacer, En progreso y Terminado.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Tarea "Pantalla de resultados del cuestionario": pasa de Por hacer a En progreso el lunes y a Terminado el miércoles, visible para todo el equipo en el tablero.',
        },
        keyPoints: [
          'Porqué + qué + cómo.',
          'Lo gestionan los Developers.',
          'Compromiso: Objetivo del Sprint.',
        ],
        check: {
          question: '¿Qué tres partes forman el Sprint Backlog?',
          options: [
            'Objetivo del Sprint, elementos seleccionados y plan',
            'Roles, eventos y artefactos',
            'Presupuesto, calendario y riesgos',
          ],
          answer: 0,
          explanation: 'El Sprint Backlog contiene el porqué, el qué y el cómo del Sprint.',
        },
      },
      {
        id: 'm2-l8',
        title: 'Incremento',
        minutes: 3,
        summary: 'Un paso concreto y utilizable hacia el Objetivo del Producto.',
        body: [
          'Un Incremento es un paso concreto hacia el Objetivo del Producto. Cada Incremento se suma a los anteriores y se verifica para que todos funcionen juntos. Debe ser utilizable.',
          'El trabajo solo forma parte de un Incremento cuando cumple la Definición de Terminado: la descripción formal de la calidad requerida. Se pueden crear varios Incrementos dentro de un Sprint.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Definición de Terminado de Project Play: funciona en celular, el texto está revisado, no hay errores en consola y está desplegado. Si falta algo, no está terminado.',
        },
        keyPoints: [
          'Debe ser utilizable.',
          'Compromiso: Definición de Terminado.',
          'Se presenta en la Sprint Review.',
        ],
        check: {
          question: '¿Cuándo forma parte del Incremento un elemento del backlog?',
          options: [
            'Cuando el código está escrito',
            'Cuando cumple la Definición de Terminado',
            'Cuando el Scrum Master lo aprueba',
          ],
          answer: 1,
          explanation: 'Sin cumplir la Definición de Terminado, el trabajo no se considera parte del Incremento.',
        },
      },
      {
        id: 'm2-l9',
        title: 'Sprint Planning',
        minutes: 3,
        summary: 'El evento que inicia el Sprint y define su plan.',
        body: [
          'La Sprint Planning inicia el Sprint. Todo el Scrum Team responde tres preguntas: ¿por qué es valioso este Sprint?, ¿qué se puede terminar? y ¿cómo se hará el trabajo?',
          'Tiene una duración máxima de ocho horas para un Sprint de un mes; en Sprints más cortos suele ser menor. El resultado es el Sprint Backlog.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'El equipo revisa su capacidad: dos integrantes tienen exámenes esta semana, así que seleccionan menos historias para no comprometerse de más.',
        },
        keyPoints: [
          'Define el Objetivo del Sprint.',
          'Máximo 8 horas para un Sprint de un mes.',
          'Participa todo el Scrum Team.',
        ],
        check: {
          question: '¿Qué se produce en la Sprint Planning?',
          options: ['El Incremento', 'El Sprint Backlog', 'La retrospectiva'],
          answer: 1,
          explanation: 'El Objetivo del Sprint, los elementos seleccionados y el plan forman el Sprint Backlog.',
        },
      },
      {
        id: 'm2-l10',
        title: 'Daily Scrum',
        minutes: 2,
        summary: '15 minutos diarios para inspeccionar el avance.',
        body: [
          'El Daily Scrum es un evento de 15 minutos para los Developers, a la misma hora y en el mismo lugar cada día hábil del Sprint. Su propósito es inspeccionar el progreso hacia el Objetivo del Sprint y adaptar el plan.',
          'Los Developers pueden elegir el formato. Muchos equipos usan tres preguntas (qué hice, qué haré, qué me bloquea), pero no es obligatorio.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: '"Ayer terminé la pantalla del tutor. Hoy conecto la voz. Me bloquea que el micrófono no funciona en Firefox." El Scrum Master toma nota del impedimento.',
        },
        keyPoints: [
          'Dura 15 minutos.',
          'Es para los Developers.',
          'Enfocado en el Objetivo del Sprint.',
        ],
        check: {
          question: '¿Cuánto dura el Daily Scrum?',
          options: ['5 minutos', '15 minutos', '1 hora'],
          answer: 1,
          explanation: 'Es un evento corto de 15 minutos para mantener el foco.',
        },
      },
      {
        id: 'm2-l11',
        title: 'Sprint Review',
        minutes: 3,
        summary: 'Inspeccionar el resultado con las partes interesadas.',
        body: [
          'La Sprint Review sirve para inspeccionar el resultado del Sprint y decidir adaptaciones futuras. El Scrum Team presenta su trabajo a las partes interesadas clave y se discute el progreso hacia el Objetivo del Producto.',
          'Es una sesión de trabajo, no solo una presentación. Su duración máxima es de cuatro horas para un Sprint de un mes. Puede resultar en ajustes al Product Backlog.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'El equipo muestra el cuestionario funcionando. La profesora sugiere explicar cada respuesta; el Product Owner agrega esa mejora al backlog.',
        },
        keyPoints: [
          'Se muestra trabajo terminado.',
          'Participan las partes interesadas.',
          'Puede cambiar el Product Backlog.',
        ],
        check: {
          question: '¿Qué se inspecciona en la Sprint Review?',
          options: [
            'El proceso y las relaciones del equipo',
            'El resultado del Sprint, con las partes interesadas',
            'Solo los errores de código',
          ],
          answer: 1,
          explanation: 'La Review mira el producto; la Retrospective mira cómo trabajó el equipo.',
        },
      },
      {
        id: 'm2-l12',
        title: 'Sprint Retrospective',
        minutes: 3,
        summary: 'Mejorar la forma de trabajar del equipo.',
        body: [
          'La Sprint Retrospective planifica formas de aumentar la calidad y la efectividad. El Scrum Team revisa cómo fue el Sprint en cuanto a personas, interacciones, procesos, herramientas y su Definición de Terminado.',
          'Cierra el Sprint y dura como máximo tres horas para un Sprint de un mes. Las mejoras más útiles se atienden lo antes posible, incluso pueden agregarse al siguiente Sprint Backlog.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: '"Perdimos tiempo porque los textos llegaron tarde." Acción de mejora: el contenido de cada lección se entrega antes de iniciar su desarrollo.',
        },
        keyPoints: [
          'Mira el cómo, no el qué.',
          'Es el último evento del Sprint.',
          'Produce mejoras concretas.',
        ],
        check: {
          question: '¿Cuál es el foco de la Sprint Retrospective?',
          options: [
            'Mejorar la forma de trabajar del equipo',
            'Presentar el producto al cliente',
            'Estimar el Product Backlog',
          ],
          answer: 0,
          explanation: 'La Retrospective busca mejorar la calidad y efectividad del equipo.',
        },
      },
      {
        id: 'm2-l13',
        title: 'Historias de usuario',
        minutes: 4,
        summary: 'Requisitos escritos desde la perspectiva de quien los usa.',
        body: [
          'Una historia de usuario describe una necesidad desde el punto de vista del usuario. La plantilla más usada es: "Como [tipo de usuario], quiero [acción] para [beneficio]". No es parte obligatoria de Scrum, pero es una técnica muy común para los elementos del backlog.',
          'Se acompaña de criterios de aceptación que indican cuándo está completa. El acrónimo INVEST describe una buena historia: Independiente, Negociable, Valiosa, Estimable, Pequeña y Testeable.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: '"Como estudiante, quiero escuchar la respuesta del tutor para repasar mientras camino". Criterio: al tocar "Escuchar", el navegador lee la respuesta en español y puedo detenerla.',
        },
        keyPoints: [
          'Como… quiero… para…',
          'Incluye criterios de aceptación.',
          'Buena historia = INVEST.',
        ],
        check: {
          question: '¿Qué parte de la historia explica el beneficio?',
          options: ['"Como…"', '"Quiero…"', '"Para…"'],
          answer: 2,
          explanation: 'El "para" expresa el valor o beneficio que busca el usuario.',
        },
      },
      {
        id: 'm2-l14',
        title: 'Planning Poker',
        minutes: 4,
        summary: 'Estimar en equipo con cartas y sin influencias.',
        widget: 'poker',
        body: [
          'Planning Poker es una técnica de estimación en consenso. Cada persona elige en secreto una carta con su estimación, generalmente con valores parecidos a Fibonacci (1, 2, 3, 5, 8, 13, 20…). Luego todas se revelan al mismo tiempo.',
          'Si hay diferencias grandes, quienes eligieron el valor más alto y el más bajo explican sus razones, se conversa y se vuelve a votar. Así se evita que la opinión de una persona influya en las demás y aparecen riesgos ocultos.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Para "Entrada por micrófono", Ana vota 3 y Luis vota 13. Luis explica que no todos los navegadores lo soportan. Tras discutirlo, el equipo acuerda 8.',
        },
        keyPoints: [
          'Votación secreta y revelación simultánea.',
          'Se discuten los extremos.',
          'Busca consenso, no promedios.',
        ],
        check: {
          question: '¿Por qué se revelan las cartas al mismo tiempo?',
          options: [
            'Para ahorrar tiempo',
            'Para evitar que unos influyan en otros (efecto ancla)',
            'Porque lo exige la Guía de Scrum',
          ],
          answer: 1,
          explanation: 'La revelación simultánea evita el anclaje en la primera opinión expresada.',
        },
      },
      {
        id: 'm2-l15',
        title: 'Puntos de historia',
        minutes: 3,
        summary: 'Una medida relativa del esfuerzo, la complejidad y la incertidumbre.',
        body: [
          'Los puntos de historia son una unidad relativa: no representan horas, sino el tamaño de una historia comparada con otras. Consideran esfuerzo, complejidad e incertidumbre.',
          'La suma de puntos terminados por Sprint se conoce como velocidad. Ayuda al equipo a pronosticar cuánto puede incluir en Sprints futuros, pero no sirve para comparar equipos distintos.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Si "Mostrar módulos" vale 2 puntos y "Tutor con voz" parece cuatro veces más grande, recibe 8. Si el equipo termina 20 puntos por Sprint, su velocidad es aproximadamente 20.',
        },
        keyPoints: [
          'Medida relativa, no horas.',
          'Velocidad = puntos terminados por Sprint.',
          'Solo es útil dentro del mismo equipo.',
        ],
        check: {
          question: '¿Qué miden los puntos de historia?',
          options: [
            'Horas exactas de trabajo',
            'Tamaño relativo: esfuerzo, complejidad e incertidumbre',
            'El costo en pesos',
          ],
          answer: 1,
          explanation: 'Son una estimación relativa que compara historias entre sí.',
        },
      },
      {
        id: 'm2-l16',
        title: 'Burndown Chart',
        minutes: 4,
        summary: 'Una gráfica del trabajo que falta a lo largo del tiempo.',
        widget: 'burndown',
        body: [
          'Un Burndown Chart muestra el trabajo restante (en puntos o tareas) en el eje vertical y el tiempo del Sprint en el eje horizontal. Una línea ideal baja de forma constante hasta cero.',
          'Si la línea real queda por encima de la ideal, el equipo va atrasado; si queda por debajo, va adelantado. No es obligatorio en Scrum, pero es una herramienta muy útil para la transparencia.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'El día 6 quedan 22 puntos cuando la línea ideal indica 16. En el Daily Scrum el equipo decide pedir ayuda al Product Owner para reducir el alcance de una historia.',
        },
        keyPoints: [
          'Eje Y: trabajo restante. Eje X: días.',
          'Arriba de la ideal = atraso.',
          'Ayuda a detectar problemas temprano.',
        ],
        check: {
          question: 'Si la línea real está por encima de la ideal, el equipo…',
          options: ['Va adelantado', 'Va atrasado', 'Ya terminó'],
          answer: 1,
          explanation: 'Queda más trabajo del que debería según el ritmo ideal.',
        },
      },
    ],
  },
  {
    id: 'm3',
    number: 3,
    title: 'PMBOK',
    short: 'Estándar PMI',
    icon: 'BookOpen',
    description:
      'La guía de conocimientos del PMI: principios, áreas de gestión y ruta crítica.',
    lessons: [
      {
        id: 'm3-l1',
        title: '¿Qué es el PMBOK?',
        minutes: 4,
        summary: 'Una guía de conocimientos y principios, no un software.',
        body: [
          'PMBOK significa Project Management Body of Knowledge (Cuerpo de Conocimientos de la Dirección de Proyectos). La Guía del PMBOK es publicada por el PMI y reúne buenas prácticas, principios y conceptos reconocidos para dirigir proyectos.',
          'Importante: el PMBOK es una guía de conocimientos y principios, no un software ni una herramienta. Tampoco es una metodología paso a paso: describe qué conviene considerar y cada organización lo adapta a su contexto.',
          'La guía ha evolucionado. La 6.ª edición se organizaba en 10 áreas de conocimiento y 49 procesos; la 7.ª (2021) se centró en 12 principios y 8 dominios de desempeño; y la 8.ª edición, publicada a finales de 2025, combina principios, dominios de desempeño y procesos adaptables.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Usar Jira o Trello no es "usar PMBOK". En cambio, aplicar una gestión de riesgos como describe la guía, con cualquier herramienta o incluso en papel, sí es aplicar sus conocimientos.',
        },
        keyPoints: [
          'Guía de conocimientos, no software.',
          'Publicada por el PMI.',
          'Se adapta a cada proyecto.',
        ],
        check: {
          question: '¿Qué es el PMBOK?',
          options: [
            'Un programa para hacer diagramas de Gantt',
            'Una guía de conocimientos y principios de gestión de proyectos',
            'Un rol dentro de Scrum',
          ],
          answer: 1,
          explanation: 'El PMBOK es un estándar de conocimientos; no es una aplicación ni un rol.',
        },
      },
      {
        id: 'm3-l2',
        title: '¿Qué es el PMI?',
        minutes: 2,
        summary: 'La organización profesional detrás del PMBOK.',
        body: [
          'El PMI (Project Management Institute) es una organización profesional sin fines de lucro fundada en 1969 en Estados Unidos. Desarrolla estándares de gestión de proyectos, entre ellos la Guía del PMBOK.',
          'También otorga certificaciones reconocidas internacionalmente, como PMP (Project Management Professional), CAPM, para quienes inician, y PMI-ACP, enfocada en prácticas ágiles.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Un estudiante de sistemas que quiere dedicarse a la gestión de proyectos puede empezar por la certificación CAPM y, con experiencia, aspirar a la PMP.',
        },
        keyPoints: [
          'Fundado en 1969.',
          'Publica la Guía del PMBOK.',
          'Certificaciones: CAPM, PMP, PMI-ACP.',
        ],
        check: {
          question: '¿Qué organización publica la Guía del PMBOK?',
          options: ['Scrum.org', 'PMI', 'ISO'],
          answer: 1,
          explanation: 'El Project Management Institute (PMI) desarrolla y publica la Guía del PMBOK.',
        },
      },
      {
        id: 'm3-l3',
        title: 'Principios de gestión de proyectos',
        minutes: 4,
        summary: 'Normas de conducta que guían las decisiones del equipo.',
        body: [
          'Los principios son guías amplias para el comportamiento y la toma de decisiones. A diferencia de los procesos, no dicen cómo hacer algo paso a paso, sino qué debe orientar al equipo.',
          'La 7.ª edición propuso 12 principios, como ser un administrador diligente, crear un ambiente colaborativo, enfocarse en el valor, incorporar la calidad, adaptarse según el contexto y abordar los riesgos. La 8.ª edición los condensa en seis: adoptar una visión holística, enfocarse en el valor, incorporar la calidad, liderar con responsabilidad, integrar la sostenibilidad y construir una cultura empoderada.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: '"Enfocarse en el valor": antes de agregar animaciones extra, el equipo se pregunta si ayudan al estudiante a aprender. Si no, se priorizan otras funciones.',
        },
        keyPoints: [
          'Guían decisiones, no son pasos.',
          'El valor y la calidad aparecen en ambas ediciones.',
          'Aplican a enfoques predictivos y ágiles.',
        ],
        check: {
          question: '¿En qué se diferencian los principios de los procesos?',
          options: [
            'Los principios orientan decisiones; los procesos describen cómo hacer el trabajo',
            'Son exactamente lo mismo',
            'Los principios solo aplican a proyectos de construcción',
          ],
          answer: 0,
          explanation: 'Un principio es una guía de conducta; un proceso es una forma estructurada de trabajar.',
        },
      },
      {
        id: 'm3-l4',
        title: 'Gestión del alcance',
        minutes: 3,
        summary: 'Asegurar que se haga todo el trabajo requerido y solo ese.',
        body: [
          'La gestión del alcance asegura que el proyecto incluya todo el trabajo requerido, y únicamente ese trabajo, para completarse con éxito. Incluye recopilar requisitos, definir el alcance, crear la EDT y validar los entregables.',
          'La EDT (Estructura de Desglose del Trabajo, o WBS en inglés) divide el trabajo en partes más pequeñas y manejables. Un riesgo frecuente es el "scope creep": cambios que se agregan sin control.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'EDT de Project Play: 1. Contenido (4 módulos) · 2. Actividades (cuestionario, identifica el concepto) · 3. Tutor IA · 4. Llavero con QR · 5. Presentación.',
        },
        keyPoints: [
          'Todo el trabajo y solo ese trabajo.',
          'La EDT desglosa los entregables.',
          'Controlar cambios evita el scope creep.',
        ],
        check: {
          question: '¿Qué es el "scope creep"?',
          options: [
            'Reducir el presupuesto',
            'Crecimiento no controlado del alcance',
            'Una técnica de estimación',
          ],
          answer: 1,
          explanation: 'Es agregar trabajo sin ajustar tiempo, costo ni recursos.',
        },
      },
      {
        id: 'm3-l5',
        title: 'Gestión del cronograma',
        minutes: 3,
        summary: 'Planificar y controlar el tiempo del proyecto.',
        body: [
          'La gestión del cronograma busca terminar el proyecto a tiempo. Incluye definir y secuenciar actividades, estimar su duración, desarrollar el cronograma y controlarlo.',
          'Herramientas comunes son el diagrama de Gantt, que muestra actividades en barras sobre una línea de tiempo, y el método de la ruta crítica para identificar las actividades que no pueden retrasarse.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Las lecciones deben escribirse antes de poder revisarlas. Esa dependencia (fin a inicio) se refleja en el cronograma.',
        },
        keyPoints: [
          'Actividades, secuencia y duración.',
          'Gantt para visualizar.',
          'Las dependencias determinan el orden.',
        ],
        check: {
          question: '¿Qué herramienta muestra actividades como barras en una línea de tiempo?',
          options: ['Diagrama de Gantt', 'Burndown Chart', 'Matriz de riesgos'],
          answer: 0,
          explanation: 'El diagrama de Gantt representa la duración y el orden de las actividades.',
        },
      },
      {
        id: 'm3-l6',
        title: 'Gestión de costos',
        minutes: 3,
        summary: 'Estimar, presupuestar y controlar el dinero del proyecto.',
        body: [
          'La gestión de costos busca completar el proyecto dentro del presupuesto aprobado. Incluye estimar costos, determinar el presupuesto y controlar los costos durante la ejecución.',
          'Una técnica de control es el Valor Ganado (EVM), que compara lo planificado, lo realmente gastado y el valor del trabajo terminado para saber si el proyecto va bien en costo y tiempo.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Costos de Project Play: impresión de llaveros con QR, dominio web opcional y horas del equipo. El hosting en el plan gratuito de Vercel puede tener costo cero.',
        },
        keyPoints: [
          'Estimar → presupuestar → controlar.',
          'Incluye reservas para imprevistos.',
          'El Valor Ganado mide desempeño.',
        ],
        check: {
          question: '¿Cuál es el objetivo de la gestión de costos?',
          options: [
            'Gastar todo el presupuesto',
            'Completar el proyecto dentro del presupuesto aprobado',
            'Eliminar la necesidad de presupuesto',
          ],
          answer: 1,
          explanation: 'Se busca cumplir el proyecto sin exceder el presupuesto aprobado.',
        },
      },
      {
        id: 'm3-l7',
        title: 'Gestión de riesgos',
        minutes: 4,
        summary: 'Identificar y responder a lo que podría pasar.',
        body: [
          'Un riesgo es un evento incierto que, si ocurre, afecta al proyecto de forma negativa (amenaza) o positiva (oportunidad). Se analiza por su probabilidad y su impacto.',
          'Respuestas comunes a amenazas: evitar, mitigar, transferir o aceptar. Para oportunidades: explotar, mejorar, compartir o aceptar. Los riesgos se registran en un registro de riesgos y se revisan periódicamente.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Riesgo: "La IA del compañero no está lista para la presentación". Respuesta (mitigar): construir un modo demostración con respuestas predefinidas, como el de Project Play AI.',
        },
        keyPoints: [
          'Probabilidad × impacto.',
          'Hay riesgos negativos y positivos.',
          'Se gestionan durante todo el proyecto.',
        ],
        check: {
          question: 'Crear un modo demostración por si la IA no está lista es una respuesta de…',
          options: ['Mitigación', 'Explotación', 'Ignorar el riesgo'],
          answer: 0,
          explanation: 'Reduce el impacto de la amenaza si llega a ocurrir.',
        },
      },
      {
        id: 'm3-l8',
        title: 'Gestión de calidad',
        minutes: 3,
        summary: 'Cumplir los requisitos y prevenir defectos.',
        body: [
          'La gestión de calidad asegura que el proyecto y sus entregables cumplan con los requisitos. Distingue entre aseguramiento de la calidad, enfocado en los procesos para prevenir defectos, y control de calidad, enfocado en inspeccionar los resultados.',
          'Un principio clave es que la prevención cuesta menos que la corrección: un error detectado en diseño es más barato que uno encontrado por el usuario final.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Aseguramiento: revisar en pareja cada lección antes de publicarla. Control: probar el cuestionario en tres celulares distintos antes de la demo.',
        },
        keyPoints: [
          'Aseguramiento = procesos.',
          'Control = resultados.',
          'Prevenir es más barato que corregir.',
        ],
        check: {
          question: 'Probar el cuestionario en varios celulares es un ejemplo de…',
          options: ['Control de calidad', 'Gestión de costos', 'Gestión de interesados'],
          answer: 0,
          explanation: 'Se inspecciona el resultado para encontrar defectos.',
        },
      },
      {
        id: 'm3-l9',
        title: 'Gestión de interesados',
        minutes: 3,
        summary: 'Identificar y comprometer a quienes afectan o son afectados por el proyecto.',
        body: [
          'Los interesados (stakeholders) son personas, grupos u organizaciones que pueden afectar o verse afectados por el proyecto. La gestión de interesados busca identificarlos, entender sus expectativas y lograr su participación adecuada.',
          'Una herramienta común es la matriz poder/interés: a quienes tienen mucho poder y mucho interés se les gestiona de cerca; a quienes tienen poco de ambos, basta con monitorearlos.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Interesados de Project Play: la profesora (alto poder, alto interés), los estudiantes usuarios (alto interés) y la universidad (alto poder, interés moderado).',
        },
        keyPoints: [
          'Afectan o son afectados por el proyecto.',
          'Matriz poder/interés.',
          'La comunicación es clave.',
        ],
        check: {
          question: 'A un interesado con alto poder y alto interés se le debe…',
          options: ['Ignorar', 'Gestionar de cerca', 'Solo informar al final'],
          answer: 1,
          explanation: 'Tiene gran influencia y le importa el proyecto, así que requiere atención constante.',
        },
      },
      {
        id: 'm3-l10',
        title: 'Ruta crítica',
        minutes: 5,
        summary: 'La secuencia más larga que determina la duración del proyecto.',
        widget: 'criticalPath',
        body: [
          'El Método de la Ruta Crítica (CPM) identifica la secuencia más larga de actividades dependientes. Esa secuencia determina la duración mínima del proyecto.',
          'Las actividades de la ruta crítica tienen holgura cero: si una se retrasa, todo el proyecto se retrasa. Las actividades fuera de ella tienen holgura y pueden retrasarse un poco sin afectar la fecha final.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Si diseñar (3 días) → programar (5) → probar (2) suma 10 días, y escribir contenido (4) → revisarlo (2) suma 6 días, la ruta crítica es la de 10 días. El contenido tiene 4 días de holgura.',
        },
        keyPoints: [
          'Es la ruta más larga.',
          'Holgura cero en sus actividades.',
          'Define la duración mínima.',
        ],
        check: {
          question: '¿Qué pasa si se retrasa una actividad de la ruta crítica?',
          options: [
            'Nada, tiene holgura',
            'Se retrasa todo el proyecto',
            'El costo baja',
          ],
          answer: 1,
          explanation: 'Las actividades críticas no tienen holgura; su retraso mueve la fecha final.',
        },
      },
    ],
  },
  {
    id: 'm4',
    number: 4,
    title: 'Scrum y XP',
    short: 'Prácticas técnicas',
    icon: 'Code2',
    description:
      'Cómo Extreme Programming complementa a Scrum con prácticas de ingeniería.',
    lessons: [
      {
        id: 'm4-l1',
        title: '¿Qué es Extreme Programming?',
        minutes: 3,
        summary: 'Una metodología ágil centrada en la excelencia técnica.',
        body: [
          'Extreme Programming (XP) es una metodología ágil creada por Kent Beck a finales de los años noventa. Lleva buenas prácticas de ingeniería "al extremo": si revisar código es bueno, se revisa todo el tiempo (programación en parejas); si probar es bueno, se prueba constantemente.',
          'Sus valores son comunicación, simplicidad, retroalimentación, coraje y respeto. Entre sus prácticas destacan la programación en parejas, el desarrollo guiado por pruebas, la integración continua, la refactorización y las entregas pequeñas.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Simplicidad en Project Play: guardar el progreso en LocalStorage en la versión 1, en lugar de construir una base de datos que todavía nadie necesita.',
        },
        keyPoints: [
          'Creada por Kent Beck.',
          'Valores: comunicación, simplicidad, retroalimentación, coraje, respeto.',
          'Enfocada en prácticas de programación.',
        ],
        check: {
          question: '¿Cuál es un valor de XP?',
          options: ['Jerarquía', 'Simplicidad', 'Documentación exhaustiva'],
          answer: 1,
          explanation: 'XP busca hacer lo más simple que funcione.',
        },
      },
      {
        id: 'm4-l2',
        title: 'Relación entre Scrum y XP',
        minutes: 4,
        summary: 'Scrum organiza el trabajo; XP mejora cómo se programa.',
        body: [
          'Scrum se centra en cómo se organiza y gestiona el trabajo: roles, eventos y artefactos. XP se centra en las prácticas técnicas de programación. Por eso se complementan muy bien.',
          'Esta combinación es el tema central de "Scrum y XP desde las trincheras", de Henrik Kniberg, libro de referencia de nuestro equipo. Kniberg describe cómo su equipo usaba Scrum para gestionar el trabajo y lo combinaba con prácticas de XP como la programación en parejas, el desarrollo guiado por pruebas y la integración continua.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'El equipo de Project Play usa Sprints, Daily Scrum y Product Backlog (Scrum), y además programa en parejas las partes difíciles del tutor y hace integración continua con Vercel (XP).',
        },
        keyPoints: [
          'Scrum = gestión del trabajo.',
          'XP = prácticas de ingeniería.',
          'Juntos cubren el qué y el cómo técnico.',
        ],
        check: {
          question: '¿En qué se enfoca principalmente XP en comparación con Scrum?',
          options: [
            'En roles y eventos',
            'En prácticas técnicas de programación',
            'En contratos con clientes',
          ],
          answer: 1,
          explanation: 'Scrum organiza el trabajo; XP aporta prácticas técnicas como TDD o la programación en parejas.',
        },
      },
      {
        id: 'm4-l3',
        title: 'Programación en parejas',
        minutes: 3,
        summary: 'Dos personas, una computadora y mejor código.',
        body: [
          'En la programación en parejas dos personas trabajan juntas en la misma tarea. Una es el "conductor", que escribe el código, y la otra el "navegador", que revisa, piensa en el diseño y detecta errores. Los roles se intercambian con frecuencia.',
          'Mejora la calidad, comparte el conocimiento del sistema y reduce la dependencia de una sola persona. Puede ser cansada, por eso conviene alternar parejas y tomar descansos.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Dos integrantes programan juntos el reconocimiento de voz: uno escribe y el otro investiga la compatibilidad de navegadores. Al final ambos entienden cómo funciona.',
        },
        keyPoints: [
          'Conductor y navegador.',
          'Revisión de código continua.',
          'Conocimiento compartido.',
        ],
        check: {
          question: '¿Qué hace el "navegador" en la programación en parejas?',
          options: [
            'Escribe todo el código',
            'Revisa, piensa en el diseño y detecta errores',
            'Se dedica a otra tarea distinta',
          ],
          answer: 1,
          explanation: 'El navegador observa el panorama general mientras el conductor teclea.',
        },
      },
      {
        id: 'm4-l4',
        title: 'Integración continua',
        minutes: 3,
        summary: 'Integrar cambios con frecuencia y verificarlos automáticamente.',
        body: [
          'La integración continua consiste en integrar los cambios de cada integrante al repositorio principal con frecuencia, idealmente varias veces al día. Cada integración se verifica con una compilación y pruebas automatizadas.',
          'Así los errores aparecen pronto, cuando son pequeños y fáciles de corregir, y se evita el "infierno de integración" de unir semanas de trabajo al final.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Cada vez que alguien sube cambios a GitHub, Vercel compila Project Play y genera una vista previa. Si la compilación falla, el equipo lo sabe de inmediato.',
        },
        keyPoints: [
          'Integrar seguido.',
          'Compilación y pruebas automáticas.',
          'Errores detectados temprano.',
        ],
        check: {
          question: '¿Cuál es el beneficio principal de la integración continua?',
          options: [
            'Detectar errores de integración pronto',
            'Evitar escribir pruebas',
            'Trabajar sin control de versiones',
          ],
          answer: 0,
          explanation: 'Integrar con frecuencia hace que los conflictos sean pequeños y fáciles de resolver.',
        },
      },
      {
        id: 'm4-l5',
        title: 'Refactorización',
        minutes: 3,
        summary: 'Mejorar el código sin cambiar lo que hace.',
        body: [
          'Refactorizar es mejorar la estructura interna del código sin cambiar su comportamiento externo. Por ejemplo: renombrar variables, dividir funciones largas o eliminar código duplicado.',
          'Se hace en pasos pequeños y con pruebas que confirmen que todo sigue funcionando. Evita la deuda técnica, es decir, el costo futuro de mantener código desordenado.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'El cuestionario y "Identifica el concepto" repetían la misma barra de progreso. Se extrajo un componente reutilizable; para el usuario nada cambió, pero el código es más limpio.',
        },
        keyPoints: [
          'Mismo comportamiento, mejor estructura.',
          'Pasos pequeños con pruebas.',
          'Reduce la deuda técnica.',
        ],
        check: {
          question: 'Después de refactorizar, el comportamiento del programa…',
          options: ['Cambia por completo', 'Se mantiene igual', 'Se vuelve más lento'],
          answer: 1,
          explanation: 'La refactorización cambia la estructura interna, no lo que el usuario ve.',
        },
      },
      {
        id: 'm4-l6',
        title: 'Pruebas de software',
        minutes: 4,
        summary: 'Verificar que el software funciona y seguirá funcionando.',
        body: [
          'Las pruebas verifican que el software cumple lo esperado. Las pruebas unitarias revisan piezas pequeñas de código; las de integración, que varias piezas funcionen juntas; y las de aceptación, que se cumplan los criterios del usuario.',
          'XP promueve el Desarrollo Guiado por Pruebas (TDD): primero se escribe una prueba que falla (rojo), luego el código mínimo para que pase (verde) y después se refactoriza.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Prueba unitaria: "Si respondo 8 de 10 preguntas bien, el resultado es 80%". Se escribe primero, falla, y luego se programa el cálculo hasta que pase.',
        },
        keyPoints: [
          'Unitarias, integración y aceptación.',
          'TDD: rojo → verde → refactorizar.',
          'Las pruebas automatizadas dan confianza.',
        ],
        check: {
          question: '¿Cuál es el primer paso en TDD?',
          options: [
            'Escribir todo el código',
            'Escribir una prueba que falla',
            'Desplegar a producción',
          ],
          answer: 1,
          explanation: 'En TDD la prueba se escribe antes que el código que la satisface.',
        },
      },
      {
        id: 'm4-l7',
        title: 'Entregas incrementales',
        minutes: 3,
        summary: 'Entregar valor en partes pequeñas y frecuentes.',
        body: [
          'Las entregas incrementales consisten en liberar el producto en partes pequeñas y funcionales, en lugar de esperar a tenerlo todo terminado. Cada entrega agrega valor y permite recibir retroalimentación real.',
          'Esto reduce el riesgo, porque los problemas aparecen antes, y permite cambiar de rumbo con poco costo. Tanto Scrum (Incrementos) como XP (entregas pequeñas) comparten esta idea.',
        ],
        example: {
          title: 'Ejemplo práctico',
          text: 'Versión 1 de Project Play: módulos, actividades y tutor en modo demostración. Versión 2: conexión con la IA real. Versión 3: más actividades según la retroalimentación.',
        },
        keyPoints: [
          'Partes pequeñas y funcionales.',
          'Retroalimentación temprana.',
          'Menor riesgo.',
        ],
        check: {
          question: '¿Por qué las entregas incrementales reducen el riesgo?',
          options: [
            'Porque se entrega todo al final',
            'Porque los problemas se detectan antes con retroalimentación real',
            'Porque eliminan las pruebas',
          ],
          answer: 1,
          explanation: 'Entregar pronto permite aprender y corregir antes de invertir demasiado.',
        },
      },
    ],
  },
];

export const allLessons = modules.flatMap((m) =>
  m.lessons.map((l) => ({ ...l, moduleId: m.id, moduleNumber: m.number, moduleTitle: m.title }))
);

export const totalLessons = allLessons.length;

export function findLesson(id) {
  return allLessons.find((l) => l.id === id);
}

export function findModule(id) {
  return modules.find((m) => m.id === id);
}
