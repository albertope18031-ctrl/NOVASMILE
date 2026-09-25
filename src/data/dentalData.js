import { CLINIC_WHATSAPP } from '../utils/whatsapp';

export const clinicInfo = {
  name: "NovaSmile",
  fullName: "NovaSmile - Estética Dental & Bienestar",
  tagline: "Estética Dental & Bienestar",
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

export const beforeAfterCases = [
  {
    id: "carillas-diseno",
    title: "Diseño de Sonrisa & Carillas de Porcelana",
    category: "Estética & Armonización Facial",
    patient: "Mariana R., 29 años",
    concern: "Desgaste en bordes incisales, color desigual y diastema central.",
    solution: "6 carillas de disilicato de litio ultrafinas (técnica lente de contacto) sin tallado agresivo.",
    duration: "2 citas (10 días)",
    doctor: "Dra. Andrea Celaya Morales",
    tag: "Caso Clínico Destacado",
    beforeImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    highlight: "Cierre milimétrico de espacios preservando el 100% del esmalte natural."
  },
  {
    id: "ortodoncia-invisible",
    title: "Ortodoncia Invisible 3D",
    category: "Alineación sin Brackets Metálicos",
    patient: "Alejandro V., 34 años",
    concern: "Apiñamiento anteroinferior severo y rotación de caninos.",
    solution: "Set de 18 alineadores transparentes con escaneo intraoral 3D.",
    duration: "7 meses",
    doctor: "Dra. Sofía Valenzuela Romero",
    tag: "100% Discreto",
    beforeImage: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    highlight: "Sin alambres metálicos, sin dolor y sin urgencias por brackets caídos."
  },
  {
    id: "implante-zirconio",
    title: "Implante Guiado & Corona Libre de Metal",
    category: "Rehabilitación Digital Integral",
    patient: "Héctor G., 48 años",
    concern: "Pérdida de premolar superior con dificultad masticatoria y pérdida de soporte.",
    solution: "Implante de titanio grado quirúrgico con cirugía guiada 3D + corona de zirconio multicapa.",
    duration: "1 sesión quirúrgica (recuperación en 48 hrs)",
    doctor: "Dr. Carlos Mendoza Vélez",
    tag: "Cirugía Guiada 3D",
    beforeImage: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80",
    highlight: "Fuerza masticatoria recuperada con estética idéntica al diente biológico."
  }
];

export const patientGoalsData = [
  {
    id: "diseno-sonrisa",
    tabLabel: "Diseño de Sonrisa",
    badge: "Diseño de Sonrisa",
    icon: "Sparkles",
    title: "Armonización estética con carillas de porcelana y resina inyectada",
    whatYouFeel: "¿Tienes bordes desgastados, dientes desproporcionados o manchas que no salen con cepillado?",
    solution: "Diseñamos tu sonrisa analizando las proporciones doradas de tu rostro. Las carillas cerámicas ultrafinas recubren el frente dental corrigiendo tono, tamaño y simetría sin desgaste agresivo.",
    benefits: [
      "Simulación digital 3D (mock-up): ves el resultado final en tu cara antes de comenzar",
      "Material cerámico de alta densidad inmune a manchas de café, vino o tabaco",
      "Brillo y translucidez idénticos al esmalte biológico de máxima gama"
    ],
    comfort: "Protocolo libre de dolor y mínimamente invasivo",
    timeEstimate: "2 a 3 citas en 10 días",
    ctaLabel: "Diseñar Mi Sonrisa 3D"
  },
  {
    id: "alinear",
    tabLabel: "Quiero Alinear",
    badge: "Ortodoncia Invisible",
    icon: "Smile",
    title: "Alineación predecible y discreta sin brackets ni alambres metálicos",
    whatYouFeel: "¿Te frenan los brackets tradicionales, las llagas en la boca y la comida atrapada entre alambres?",
    solution: "Fabricamos una serie de férulas termoplásticas transparentes que mueven tus dientes milimétricamente mediante fuerzas biológicas suaves calculadas por escáner 3D.",
    benefits: [
      "100% removibles para comer todo lo que te gusta y cepillarte con hilo normal",
      "Prácticamente imperceptibles a distancia de conversación social y laboral",
      "Cero emergencias por brackets rotos o alambres punzantes"
    ],
    comfort: "Presión biológica confortable sin dolor agudo",
    timeEstimate: "Seguimiento cada 6 a 8 semanas",
    ctaLabel: "Cotizar Alineadores Invisibles"
  },
  {
    id: "perdi-diente",
    tabLabel: "Perdí un Diente",
    badge: "Implantes Digitales",
    icon: "ShieldCheck",
    title: "Recuperación fija permanente con cirugía guiada por computadora",
    whatYouFeel: "¿Masticas solo de un lado, evitas ciertos alimentos o sientes inseguridad al sonreír por un espacio vacío?",
    solution: "Fijación milimétrica de titanio biocompatible guiada por tomografía 3D con micro-incisión (sin bisturí tosco). Se corona con disilicato o zirconio que iguala la fuerza y tono de tus dientes vecinos.",
    benefits: [
      "Cirugía guiada por computadora: menor tiempo quirúrgico y recuperación ultrarrápida",
      "Recupera la fuerza masticatoria total sin tocar los dientes sanos contiguos",
      "Garantía clínica de biocompatibilidad y larga duración"
    ],
    comfort: "Anestesia computarizada indolora sin entumecimiento facial excesivo",
    timeEstimate: "Procedimiento guiado en 1 sesión",
    ctaLabel: "Consultar Implante Dental"
  },
  {
    id: "blanquear",
    tabLabel: "Quiero Blanquear",
    badge: "Blanqueamiento Led & Air-Flow",
    icon: "Sparkles",
    title: "Aclaramiento de 3 a 5 tonos en una sola sesión clínica",
    whatYouFeel: "¿Tus dientes lucen opacos o amarillentos y temes que el blanqueamiento te cause dolor o sensibilidad?",
    solution: "Protocolo clínico Led Nova con gel bio-compatible enriquecido con desensibilizante activo y limpieza profunda Air-Flow con microesferas de bicarbonato para pulir sin abrasión.",
    benefits: [
      "Aclaramiento inmediato visible en una sesión de 60 minutos",
      "Eliminación total de sarro interdental y manchas de café, té o vino",
      "Formulado con tecnología anti-sensibilidad para confort inmediato"
    ],
    comfort: "100% indoloro, suave y no abrasivo",
    timeEstimate: "1 sesión clínica de 60 minutos",
    ctaLabel: "Agendar Blanqueamiento Led"
  },
  {
    id: "dolor-urgencia",
    tabLabel: "Tengo Dolor",
    badge: "Urgencia Prioritaria",
    icon: "AlertCircle",
    title: "Alivio inmediato del dolor y diagnóstico prioritario en el día",
    whatYouFeel: "¿Dolor punzante que no te deja dormir, inflamación en la encía, diente quebrado o corona caída?",
    solution: "Canal prioritario sin esperas prolongadas. Diagnosticamos la causa exacta con radiovisiografía digital 3D y aplicamos anestesia computarizada indolora para erradicar el dolor en minutos.",
    benefits: [
      "Cita garantizada en el mismo día para casos de molestia aguda",
      "Endodoncia mecanizada confortable en 1 sola cita para salvar tu diente",
      "Seguimiento directo con el equipo médico vía WhatsApp"
    ],
    comfort: "Alivio de la molestia desde los primeros minutos",
    timeEstimate: "Atención prioritaria inmediata",
    ctaLabel: "Solicitar Guardia de Dolor"
  }
];

export const anxietyFreeFeatures = [
  {
    icon: "Camera",
    badge: "Cero Náuseas",
    title: "Escáner Intraoral 3D de Alta Definición",
    description: "Despídete para siempre de las cubetas con pastas frías de yeso o alginato de sabor amargo que causan náuseas y sensación de ahogo. Nuestra cámara óptica 3D captura 6,000 imágenes por segundo creando un gemelo digital exacto de tu boca en 3 minutos.",
    highlight: "100% digital, limpio, higiénico y cómodo"
  },
  {
    icon: "Syringe",
    badge: "Imperceptible",
    title: "Anestesia Digital Guiada por Computadora",
    description: "El dolor de una inyección tradicional no proviene de la aguja, sino de la presión descontrolada con la que el líquido ingresa al tejido. Nuestro sistema administra la dosis gota a gota a velocidad biológica, haciendo que el adormecimiento sea imperceptible.",
    highlight: "Sin pinchazo doloroso ni rostro hinchado por horas"
  },
  {
    icon: "Coffee",
    badge: "Confort Sensorial",
    title: "Ambiente Zen & Relajación Clínica",
    description: "Salas climatizadas con insonorización, aromaterapia sutil, música relajante y pantallas en el techo para disfrutar de tus contenidos preferidos mientras te atienden. En NovaSmile eliminamos el olor a hospital y los ruidos estridentes.",
    highlight: "Trato médico pausado, humano y explicativo"
  }
];

export const firstVisitJourneySteps = [
  {
    step: "01",
    time: "15 min",
    title: "Escaneo 3D y Diagnóstico Visual en Pantalla",
    description: "Mapeamos cada milímetro de tus dientes con nuestro escáner óptico tridimensional. Proyectamos tu dentadura en una pantalla HD para que veas con tus propios ojos lo mismo que el especialista.",
    detail: "Sin pastas incómodas en la boca y con mínima exposición radiológica digital."
  },
  {
    step: "02",
    time: "15 min",
    title: "Simulación Digital de Sonrisa (Mock-Up)",
    description: "Mediante software de diseño facial y biomimética, te mostramos en pantalla cómo quedará tu sonrisa terminada ANTES de tocar o intervenir cualquier pieza dental.",
    detail: "Tú apruebas la forma, el tono y las proporciones en conjunto con el doctor."
  },
  {
    step: "03",
    time: "10 min",
    title: "Presupuesto Cerrado 100% Transparente",
    description: "Recibes tu plan de tratamiento por escrito con costos claros, tiempos de tratamiento y opciones de financiamiento con mensualidades sin intereses.",
    detail: "Sin cargos ocultos, sin presiones comerciales y con total libertad de decisión."
  }
];

export const specialistsData = [
  {
    name: "Dra. Andrea Celaya Morales",
    role: "Directora Clínica & Odontología Estética",
    license: "Céd. Prof. 8492011 • Céd. Esp. 1102934",
    experience: "12+ años de experiencia clínica",
    education: "Máster en Odontología Estética Avanzada y Rehabilitación, Universidad de Barcelona.",
    bio: "Especialista en técnicas mínimamente invasivas y carillas de porcelana. Su enfoque combina la armonización de las facciones con la preservación máxima del esmalte dental natural.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=80",
    specialties: ["Diseño de Sonrisa 3D", "Carillas de Disilicato", "Gingivoplastia Láser"]
  },
  {
    name: "Dr. Carlos Mendoza Vélez",
    role: "Cirujano Maxilofacial e Implantología Guiada",
    license: "Céd. Prof. 7531982 • Céd. Esp. 9832104",
    experience: "14+ años en cirugía reconstructiva",
    education: "Especialidad en Cirugía Bucal y Maxilofacial, UNAM. Certificación Internacional en Cirugía Guiada 3D.",
    bio: "Pionero en regeneración ósea y cirugía guiada por computadora sin dolor. Ha colocado más de 2,500 implantes exitosos con protocolos de carga inmediata y recuperación ultrarrápida.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=700&q=80",
    specialties: ["Cirugía Guiada 3D", "Implantes de Titanio", "Regeneración Ósea"]
  },
  {
    name: "Dra. Sofía Valenzuela Romero",
    role: "Ortodoncia & Ortopedia Dentofacial",
    license: "Céd. Prof. 9214753 • Céd. Esp. 1245890",
    experience: "10+ años transformando oclusiones",
    education: "Especialidad en Ortodoncia, Universidad Autónoma de Guadalajara. Proveedora Certificada Invisalign Diamond.",
    bio: "Experta en alineación invisible para jóvenes y adultos. Planifica cada micro-movimiento dentario con biomecánica 3D para lograr sonrisas amplias, estables y saludables.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80",
    specialties: ["Alineadores Invisibles", "Ortodoncia Autoligado", "Armonización Oclusal"]
  }
];

export const bookingMotives = [
  { id: "diseno-sonrisa", label: "✨ Diseño de Sonrisa / Carillas", badge: "Estética" },
  { id: "ortodoncia-invisible", label: "😁 Alineación con Alineadores 3D", badge: "Invisible" },
  { id: "implantes", label: "🦷 Reposición de Diente / Implantes", badge: "Funcional" },
  { id: "blanqueamiento", label: "🌟 Blanqueamiento Led & Limpieza 3D", badge: "Brillo" },
  { id: "urgencia", label: "⚠️ Molestia o Dolor Activo", badge: "Prioridad Hoy" }
];

