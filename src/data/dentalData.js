import { CLINIC_WHATSAPP } from '../utils/whatsapp';

export const clinicInfo = {
  name: "NovaSmile",
  fullName: "NovaSmile - Clínica Odontológica & Estética Dental",
  tagline: "Clínica Odontológica & Estética Dental",
  whatsapp: CLINIC_WHATSAPP,
  whatsappDisplay: "+52 662 420 5643",
  phone: "662 420 5643",
  location: "Hermosillo, Sonora, México",
  address: "Blvd. Kino #310, Zona Médica, Hermosillo, Sonora",
  hours: {
    weekdays: "Lunes a Viernes: 9:00 AM – 8:00 PM",
    saturday: "Sábados: 9:00 AM – 3:00 PM",
    emergency: "Línea de Urgencias 24/7 disponible"
  }
};

export const heroData = {
  badge: "Atención Médica Digital & Presencial",
  title: "La ciencia de tu salud bucal. El arte de tu mejor sonrisa.",
  subtitle: "Odontología integral y estética de alta precisión sin dolor ni sorpresas. Obtén un diagnóstico visual preliminar en línea o agenda directamente con nuestros especialistas.",
  ctaPrimary: "Iniciar Diagnóstico en Línea",
  ctaSecondary: "Agendar Cita en Consultorio",
  urgencyText: "¿Molestia activa o dolor agudo?",
  urgencyLinkText: "Atención prioritaria inmediata",
  metrics: [
    { value: "99.4%", label: "Procedimientos libres de dolor", detail: "Protocolos guiados por escáner 3D" },
    { value: "+3,800", label: "Sonrisas transformadas", detail: "Tratamientos conservadores y estéticos" },
    { value: "100%", label: "Presupuestos claros", detail: "Sin cargos ocultos ni costos sorpresa" }
  ]
};

export const specialtiesData = [
  {
    id: "estetica-avanzada",
    number: "01",
    title: "Estética Dental Avanzada & Diseño de Sonrisa",
    shortTitle: "Diseño de Sonrisa",
    promise: "Armonización facial y perfeccionamiento dental conservador con tecnología mínimamente invasiva.",
    microCopy: "¿Te frena el color o la forma de tus dientes? Simula tu diseño de sonrisa con nuestra valoración en línea.",
    icon: "Sparkles",
    treatments: [
      {
        name: "Carillas de Porcelana & Resina de Alta Densidad",
        desc: "Corrección milimétrica de forma, tono y microfracturas sin desgaste agresivo del esmalte natural."
      },
      {
        name: "Blanqueamiento Clínico Led Nova",
        desc: "Aclaramiento de 3 a 5 tonos en una sola sesión, formulado especialmente para evitar sensibilidad post-tratamiento."
      },
      {
        name: "Gingivoplastia Láser",
        desc: "Recontorneado estético de encías para sonrisas armónicas y simétricas con recuperación y cicatrización inmediata."
      }
    ],
    highlight: "Simulación digital 3D previa a cualquier intervención."
  },
  {
    id: "ortodoncia-invisible",
    number: "02",
    title: "Ortodoncia Invisible & Corrección Funcional",
    shortTitle: "Ortodoncia Invisible",
    promise: "Alineación dental discreta, cómoda y predecible sin alambres metálicos ni urgencias por brackets caídos.",
    microCopy: "Alinea tu sonrisa a tu propio ritmo y sin alterar tu vida social. Revisa si eres candidato en 3 clics.",
    icon: "Smile",
    treatments: [
      {
        name: "Alineadores Transparentes Personalizados",
        desc: "Férulas removibles, casi imperceptibles y fabricadas milimétricamente mediante escaneo digital tridimensional."
      },
      {
        name: "Ortodoncia de Autoligado Pasivo",
        desc: "Fuerzas biológicas suaves que reducen los tiempos de tratamiento en casos de mayor complejidad oclusal."
      },
      {
        name: "Microtornillos y Anclaje Esquelético",
        desc: "Biomecánica avanzada para corregir casos ortodóncicos sin necesidad de extracciones dentales."
      }
    ],
    highlight: "Retira tus férulas para comer y cepillarte con total libertad."
  },
  {
    id: "rehabilitacion-oral",
    number: "03",
    title: "Rehabilitación Oral e Implantología Digital",
    shortTitle: "Implantes & Rehabilitación",
    promise: "Recuperación integral de la fuerza masticatoria y la estética natural mediante materiales biocompatibles de larga duración.",
    microCopy: "Vuelve a comer y sonreír con total seguridad. Cotiza la reposición de tus piezas sin compromiso.",
    icon: "ShieldCheck",
    treatments: [
      {
        name: "Implantes de Titanio con Cirugía Guiada por Computadora",
        desc: "Fijación ósea exacta con incisiones microscópicas, menor tiempo quirúrgico y recuperación ultrarrápida."
      },
      {
        name: "Coronas y Prótesis Libres de Metal (Zirconio & Disilicato)",
        desc: "Brillo, textura y translucidez idénticos a los de una pieza biológica natural."
      },
      {
        name: "Endodoncia Mecanizada Indolora",
        desc: "Tratamiento de conductos en una sola cita para salvar y rehabilitar piezas dañadas de forma confortable."
      }
    ],
    highlight: "Prótesis fijas atornilladas con garantía clínica de biocompatibilidad."
  },
  {
    id: "prevencion-3d",
    number: "04",
    title: "Prevención, Diagnóstico 3D & Periodoncia",
    shortTitle: "Prevención & Limpieza 3D",
    promise: "Mantenimiento preventivo de alto estándar para proteger la estructura ósea y prevenir patologías futuras.",
    microCopy: "Una consulta preventiva a tiempo evita procedimientos invasivos mañana. Selecciona tu horario ideal.",
    icon: "ScanFace",
    treatments: [
      {
        name: "Profilaxis Ultrasónica & Sistema Air-Flow",
        desc: "Eliminación profunda de biopelícula, sarro subgingival y manchas de café/té sin desgastar el esmalte."
      },
      {
        name: "Mapeo Periodontal y Terapia de Encías",
        desc: "Detención oportuna de la gingivitis, periodontitis y sangrado gingival con láser terapéutico."
      },
      {
        name: "Radiología Digital Cone-Beam 3D",
        desc: "Detección temprana de lesiones interdentales con hasta un 80% menos de exposición radiológica."
      }
    ],
    highlight: "Protocolo guiado de limpieza profunda cada 6 meses."
  }
];

export const trustPoints = [
  {
    icon: "Cpu",
    title: "Tecnología Mínimamente Invasiva",
    description: "Diagnósticos guiados por escaneo intraoral 3D que eliminan el dolor, las pastas incómodas en la boca y la incertidumbre del resultado."
  },
  {
    icon: "ReceiptText",
    title: "Presupuestos 100% Transparentes",
    description: "Sin costos ocultos ni letras pequeñas; cada etapa de tu plan de tratamiento se desglosa y aprueba contigo antes de iniciar."
  },
  {
    icon: "HeartHandshake",
    title: "Atención Continua por WhatsApp",
    description: "Acompañamiento directo con el equipo médico tras tu consulta para responder dudas inmediatas sobre tu evolución o cuidados."
  }
];

export const comparatorCategories = [
  {
    id: "ortodoncia",
    label: "Ortodoncia & Alineación",
    title: "Alineadores Invisibles vs. Brackets Autoligado",
    subtitle: "¿Cuál es la opción adecuada para tu estilo de vida?",
    optionA: {
      name: "Alineadores Invisibles Nova",
      badge: "Más Discreto & Cómodo",
      features: [
        { label: "Visibilidad", value: "Prácticamente invisible a distancia de conversación" },
        { label: "Alimentación", value: "Sin restricciones (se retiran para comer)" },
        { label: "Higiene bucal", value: "Cepillado e hilo dental tradicional sin trabas" },
        { label: "Urgencias por alambres", value: "Cero emergencias por brackets caídos" },
        { label: "Visitas de control", value: "Revisiones cada 6 a 8 semanas o seguimiento digital" },
        { label: "Ideal para", value: "Profesionistas, jóvenes y adultos que valoran discreción" }
      ]
    },
    optionB: {
      name: "Ortodoncia Autoligado",
      badge: "Mayor Fuerza Biológica",
      features: [
        { label: "Visibilidad", value: "Brackets estéticos cerámicos o metálicos de perfil bajo" },
        { label: "Alimentación", value: "Cuidado con alimentos duros o muy pegajosos" },
        { label: "Higiene bucal", value: "Requiere cepillos interdentales especiales" },
        { label: "Urgencias por alambres", value: "Ocasionales ajustes de arco" },
        { label: "Visitas de control", value: "Citas mensuales en consultorio" },
        { label: "Ideal para", value: "Maloclusiones severas y giros radiculares complejos" }
      ]
    }
  },
  {
    id: "estetica",
    label: "Diseño de Sonrisa",
    title: "Carillas de Porcelana vs. Resina Inyectada",
    subtitle: "Compara durabilidad, tiempo y conservación del esmalte",
    optionA: {
      name: "Carillas de Porcelana / Disilicato",
      badge: "Máxima Durabilidad",
      features: [
        { label: "Longevidad", value: "15 a 20+ años con brillo inalterable" },
        { label: "Resistencia a manchas", value: "100% inmune a café, vino tinto o tabaco" },
        { label: "Acabado óptico", value: "Translucidez idéntica al esmalte biológico de alta gama" },
        { label: "Desgaste dental", value: "Mínimo o nulo según anatomía previa (técnica lente de contacto)" },
        { label: "Citas necesarias", value: "2 a 3 citas con prueba mock-up digital" },
        { label: "Inversión", value: "Inversión prémium de máxima duración" }
      ]
    },
    optionB: {
      name: "Carillas de Resina de Alta Densidad",
      badge: "Económico & Rápido",
      features: [
        { label: "Longevidad", value: "5 a 8 años con pulido periódico anual" },
        { label: "Resistencia a manchas", value: "Moderada (requiere mantenimiento de brillo)" },
        { label: "Acabado óptico", value: "Excelente estética con microhíbridos modernos" },
        { label: "Desgaste dental", value: "Cero desgaste en la mayoría de los casos" },
        { label: "Citas necesarias", value: "1 a 2 citas (a menudo en una sola sesión)" },
        { label: "Inversión", value: "Inversión accesible para cambios inmediatos" }
      ]
    }
  }
];

export const triageSteps = [
  {
    step: 1,
    id: "treatment",
    title: "¿Qué te gustaría mejorar o resolver?",
    subtitle: "Selecciona el área principal de tu interés para orientar tu diagnóstico:",
    options: [
      {
        id: "Diseño de Sonrisa & Estética",
        title: "Diseño de Sonrisa & Estética",
        desc: "Carillas, blanqueamiento Led Nova o contorneado estético",
        badge: "Popular",
        icon: "Sparkles"
      },
      {
        id: "Ortodoncia Invisible",
        title: "Ortodoncia Invisible",
        desc: "Alineación sin brackets metálicos ni alambres incómodos",
        badge: "Recomendado",
        icon: "Smile"
      },
      {
        id: "Implantes & Reposición",
        title: "Implantes & Reposición Dental",
        desc: "Recuperar piezas ausentes con fijación fija de titanio o coronas",
        badge: "Funcional",
        icon: "ShieldCheck"
      },
      {
        id: "Limpieza Profunda & Mantenimiento",
        title: "Limpieza Profunda & Profilaxis 3D",
        desc: "Eliminación de sarro, manchas y evaluación preventiva periódica",
        badge: "Básico",
        icon: "ScanFace"
      },
      {
        id: "Molestia o Dolor Activo",
        title: "Molestia o Dolor Activo",
        desc: "Atención prioritaria por dolor, inflamación, caries o rotura",
        badge: "Prioridad",
        icon: "AlertCircle"
      }
    ]
  },
  {
    step: 2,
    id: "condition",
    title: "¿Cuál es tu condición actual percibida?",
    subtitle: "Esto nos ayuda a calcular un presupuesto preliminar más preciso:",
    options: [
      {
        id: "Manchas superficiales y tono apagado",
        title: "Dientes sanos pero con manchas o tono apagado",
        desc: "Busco recuperar blancura o corregir pequeñas asimetrías estéticas"
      },
      {
        id: "Apiñamiento o separación dental",
        title: "Dientes desalineados, chuecos o separados",
        desc: "Quiero mejorar mi oclusión y estética sin brackets metálicos"
      },
      {
        id: "Una o varias piezas ausentes",
        title: "Una o varias piezas dentales faltantes",
        desc: "Deseo recuperar la fuerza al masticar y la integridad de mi arco dental"
      },
      {
        id: "Sangrado de encías o acumulación de sarro",
        title: "Sensibilidad o sangrado ocasional de encías",
        desc: "Hace más de 6 meses no realizo una limpieza profesional"
      },
      {
        id: "Dolor punzante o molestia con lo frío/caliente",
        title: "Dolor punzante o molestia con frío/calor",
        desc: "Siento dolor agudo al comer o masticar en una zona puntual"
      }
    ]
  },
  {
    step: 3,
    id: "urgency",
    title: "¿En qué plazo te gustaría iniciar?",
    subtitle: "Indícanos tu disponibilidad para programar tu tiempo de valoración:",
    options: [
      {
        id: "Esta misma semana",
        title: "Esta misma semana",
        desc: "Deseo agendar la fecha más próxima disponible en consultorio",
        badge: "Prioritario"
      },
      {
        id: "Durante este mes",
        title: "Durante este mes",
        desc: "Estoy planificando mi agenda y presupuesto para este mes",
        badge: "Planificado"
      },
      {
        id: "Solo estoy cotizando y comparando",
        title: "Solo estoy cotizando y evaluando opciones",
        desc: "Quiero conocer costos preliminares antes de tomar una decisión",
        badge: "Informativo"
      }
    ]
  },
  {
    step: 4,
    id: "contact",
    title: "¿A qué nombre preparamos tu valoración?",
    subtitle: "Generaremos un reporte personalizado directo con nuestros especialistas:",
    fields: [
      {
        id: "name",
        label: "Nombre y Apellido",
        placeholder: "Ej. Ana Lucía Morales",
        required: true
      }
    ]
  }
];
