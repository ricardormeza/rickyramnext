export const automatizacionServiceContent= {
  hero: {
    kicker: "Automatizaci\u00f3n",
    title:
      "Servicio de Automatización (ManyChat + CRM + Integraciones): convierte más leads sin aumentar tu carga operativa",
    lead:
      "La automatización no es “poner un bot y ya”. Es diseñar flujos que responden rápido, califican leads, registran datos en tu CRM y activan seguimientos (WhatsApp/Instagram/Email) para que no se te vaya dinero por falta de respuesta.",
    ctas: [
      { label: "Agendar diagnóstico", href: "#agendar" },
      { label: "Auditar mi proceso", href: "#auditoria" },
      { label: "Ver planes mensuales", href: "#planes" },
    ],
  },

  forWho: {
    title: "¿Para quién es este servicio?",
    bullets: [
      "Te llegan leads por WhatsApp/Instagram/Forms y se pierden por tiempo de respuesta.",
      "Tu equipo atiende manualmente lo mismo (preguntas, precios, agenda, envío de info).",
      "Quieres calificar leads (presupuesto, ciudad, necesidad) antes de pasar a ventas.",
      "Necesitas conectar campañas (Ads/SEO) con CRM para seguimiento y cierre.",
      "Tienes procesos repetitivos (citas, recordatorios, cotizaciones, onboarding) y quieres ahorrar tiempo.",
    ],
    notFor: [
      "No tienes claro tu proceso de ventas (primero conviene ordenar oferta y etapas).",
      "No puedes dar seguimiento humano cuando el lead ya está calificado.",
      "Quieres automatizar TODO desde el día 1 (mejor hacerlo por fases: MVP → mejoras).",
    ],
  },

  labels: {
    notForTitle: "Automatización NO es lo mejor si:",
    layersTitle: "Qué incluye (enfoque por capas)",
    layersNote:
      "Nota: automatizar no es deshumanizar. La meta es responder rápido, filtrar mejor y pasar a un humano cuando ya hay intención real.",
    deliverablesTitle: "Entregables",
    auditPricesTitle: "Precios guía (MXN)",
    auditIncludesTitle: "Incluye",
    requirementsTitle: "¿Qué necesito para empezar?",
    requirementsNote:
      "Si ya tienes ManyChat/CRM, hacemos auditoría y arreglamos lo crítico. Si no existe nada, diseñamos el flujo base y lo implementamos con medición.",
    addOnsTitle: "Add-ons recomendados (para potenciar automatización)",
    processTitle: "Proceso de trabajo",
    contactTitle: "Agendar",
    internalLinksTitle: "Enlaces internos sugeridos (SEO + UX)",
  },

  layers: [
    {
      title: "1) Estrategia de flujo (antes del bot)",
      bullets: [
        "Mapa de conversación y objetivos (qué preguntar, qué entregar, cuándo escalar).",
        "Definición de etapas: nuevo lead → calificado → agendado → seguimiento → cierre.",
        "Tono de comunicación alineado a tu marca (sin sonar robótico).",
        "Reglas de handoff a humano (cuando hay intención real o casos especiales).",
      ],
    },
    {
      title: "2) ManyChat (WhatsApp/Instagram/Facebook) + automatización de respuestas",
      bullets: [
        "Flujos: bienvenida, preguntas frecuentes, calificación, captura de datos.",
        "Seguimientos automáticos: recordatorios, reactivación, “¿sigues interesado?”.",
        "Etiquetas, audiencias y rutas por intención (servicio, presupuesto, ubicación).",
        "Buenas prácticas anti-spam y control de frecuencia.",
      ],
    },
    {
      title: "3) Integración con CRM y herramientas (Make/Zapier/Webhooks/API)",
      bullets: [
        "Alta de lead en CRM (HubSpot/Zoho/otro) con campos limpios y consistentes.",
        "Asignación de responsables y creación de tareas/recordatorios.",
        "Sincronización con formularios, landing, Google Sheets o pipeline interno.",
        "Integraciones típicas: Calendly/agenda, email, notificaciones, webhooks.",
      ],
    },
    {
      title: "4) Medición y mejora continua (para convertir más)",
      bullets: [
        "Eventos clave: lead capturado, lead calificado, cita agendada, compra iniciada.",
        "Optimización de preguntas (menos fricción, mejor calidad de lead).",
        "A/B testing de mensajes (copy, CTA, secuencia, timing).",
        "Reporte con insights: dónde se caen y cómo mejorar el funnel.",
      ],
    },
  ],

  deliverables: [
    "Documento de flujo (mapa de conversación + objetivos + handoff a humano).",
    "ManyChat configurado con flujos principales y etiquetado/segmentación.",
    "Integración con CRM o herramienta destino (leads, tareas, pipeline).",
    "QA y pruebas (casos reales: respuestas, derivaciones, captura de datos).",
    "Guía rápida para operación (qué tocar y qué no, y cómo pedir cambios).",
  ],

  audit: {
    id: "auditoria",
    title: "Auditoría de Automatización (pago único)",
    lead:
      "Ideal si ya tienes bot/CRM pero no convierte, se rompe, o tu equipo sigue haciendo todo manual.",
    prices: [
      "Emprendedor: $2,900",
      "PyME: $6,900",
      "Empresa: $14,900",
    ],
    includes: [
      "Revisión del flujo actual (fricción, abandonos, preguntas inútiles).",
      "Revisión de reglas, tags y segmentación (calificación real vs ruido).",
      "Revisión de integraciones (CRM, Sheets, webhooks) y calidad de datos.",
      "Revisión de handoff a humano (cuándo y cómo se transfiere a ventas).",
      "Lista priorizada: quick wins (1–7 días) + roadmap (30 días).",
    ],
    cta: { label: "Solicitar auditoría", href: "#cotizar" },
  },

  plans: {
    id: "planes",
    title: "Planes mensuales de Automatización",
    lead:
      "Pensados para mantener flujos vivos, mejorar conversión y adaptarse a campañas/ofertas nuevas (sin que todo se rompa).",
    cards: [
      {
        title: "Automation Starter (mensual)",
        subtitle:
          "Para mantener lo esencial: mejoras puntuales + estabilidad + seguimiento básico.",
        bullets: [
          "Mantenimiento de flujos existentes (ajustes pequeños).",
          "1–2 mejoras/mes (copy, preguntas, rutas, tags).",
          "Monitoreo ligero de errores + QA básico.",
          "Reporte mensual corto + siguientes pasos.",
        ],
        price: "Desde $2,900 / mes ",
      },
      {
        title: "Automation Growth (mensual)",
        subtitle:
          "Para negocios con campañas activas: optimización real del funnel y seguimiento.",
        bullets: [
          "3–5 mejoras/mes (nuevas rutas, seguimiento, calificación).",
          "Integraciones activas (CRM/Sheets/agenda) con QA.",
          "Optimización de conversión (menos fricción, mejor lead).",
          "Reporte + tablero de métricas (si aplica).",
        ],
        price: "Desde $6,900 / mes",
      },
      {
        title: "Automation Pro (mensual)",
        subtitle:
          "Para operación tipo sistema: automatizaciones multi-canal, CRM y procesos avanzados.",
        bullets: [
          "Diseño por módulos (captura → califica → agenda → follow-up → cierre).",
          "Integraciones avanzadas (Make/Zapier/API) y reglas de negocio.",
          "Soporte prioritario + roadmap mensual de automatización.",
          "Coordinación con Ads/Analítica para medir calidad y cierre.",
        ],
        price: "Desde $12,900 / mes (Enterprise: a cotizar)",
      },
    ],
  },

  requirements: [
    "Tu objetivo principal (más leads, agendar citas, vender, soporte, reactivación).",
    "Canales: WhatsApp, Instagram, Facebook, webforms, email (cuáles aplican).",
    "Accesos a ManyChat (si existe) y a Meta Business/WhatsApp (si aplica).",
    "CRM actual (HubSpot/Zoho/otro) o destino de leads (Sheets, Notion, etc.).",
    "Tu proceso actual de ventas (quién responde, tiempos, horario, pipeline).",
  ],

  addOns: [
    {
      title: "Implementaciones (pago único) — arranque rápido",
      items: [
        "ManyChat (flows + integración): $7,900 - $29,900",
        "Integración CRM (HubSpot/Zoho/etc.): $19,900 - $79,900+",
        "Automatizaciones Make/Zapier (por flujo): a cotizar",
      ],
    },
    {
      title: "Medición (para optimizar de verdad)",
      items: [
        "Tracking Standard (GA4 + GTM + 3-5 conversiones + QA): $3,500 - $7,900",
        "Dashboard Looker (KPIs de leads/agenda/embudo): $2,900 - $9,900",
      ],
    },
    {
      title: "Operación y crecimiento",
      items: [
        "Secuencias de nurturing (email/WhatsApp) por etapa: a cotizar",
        "Playbook de ventas (respuestas rápidas + objeciones + guiones): a cotizar",
      ],
    },
    {
      title: "Seguridad y cumplimiento (según necesidad)",
      items: [
        "Hardening / protección anti-abuso de formularios y endpoints: a cotizar",
        "Consent/privacidad (si aplica a tu industria): a cotizar",
      ],
    },
  ],

  processSteps: [
    "Diagnóstico (objetivo, funnel, canales y puntos de fuga).",
    "Diseño del flujo (mapa, copy, reglas y handoff a humano).",
    "Implementación (ManyChat + integraciones + tags/audiencias).",
    "QA (pruebas reales: captura, calificación, agenda, CRM).",
    "Optimización (mejorar conversión y calidad del lead con datos).",
  ],

  faqs: [
    {
      question: "¿Esto reemplaza a mi equipo de ventas?",
      answer:
        "No. Lo potencia. Automatizamos lo repetitivo (respuesta, calificación, seguimiento) y pasamos a humano cuando el lead ya tiene intención real.",
    },
    {
      question: "¿Se puede automatizar WhatsApp e Instagram?",
      answer:
        "Sí. ManyChat permite flujos para WhatsApp/Instagram/Facebook (según configuración y reglas de la plataforma). Elegimos el canal según tu audiencia.",
    },
    {
      question: "¿Qué tipo de cosas puedo automatizar?",
      answer:
        "Captura y calificación de leads, preguntas frecuentes, agendar citas, recordatorios, seguimiento, reactivación, envío de catálogos/links, creación de leads en CRM y tareas.",
    },
    {
      question: "¿Puedo conectar esto con mi CRM?",
      answer:
        "Sí. Podemos integrar con HubSpot, Zoho u otros (directo o vía Make/Zapier/Webhooks) para registrar leads y activar seguimiento.",
    },
    {
      question: "¿Qué pasa si cambia mi oferta o campañas?",
      answer:
        "Por eso existen los planes mensuales: mantenemos flujos, mensajes y reglas actualizados para que no se rompa tu operación y para mejorar conversión.",
    },
    {
      question: "¿La automatización afecta la experiencia del usuario?",
      answer:
        "Si se hace mal, sí. Si se hace bien, mejora: respuesta rápida, claridad y escalamiento a humano cuando se necesita. Diseñamos para que se sienta natural.",
    },
  ],

  finalCta: {
    id: "cotizar",
    title: "¿Quieres dejar de perder leads por tiempo de respuesta?",
    bullets: [
      "Automatizamos respuestas y calificación con un flujo claro.",
      "Integramos con CRM para seguimiento real (no leads perdidos).",
      "Optimizamos con datos para convertir más, no solo “chatear”.",
    ],
    primary: "Agendar diagnóstico",
    secondary: "Solicitar auditoría",
  },

  contact: {
    id: "agendar",
    items: [
      { label: "WhatsApp", value: "https://wa.me/526631016627" },
      { label: "Correo", value: "contacto@rickyram.dev" },
      { label: "Formulario", value: "(insertar componente)" },
    ],
  },

  internalLinks: [
    { label: "Servicios", href: "/servicios" },
    { label: "Analítica (GA4/GTM)", href: "/servicios/analitica" },
    { label: "Google Ads", href: "/servicios/ads" },
    { label: "SEO", href: "/servicios/seo" },
    { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
    { label: "Soluciones WordPress", href: "/soluciones/wordpress" },
    { label: "Soluciones Astro", href: "/soluciones/astro" },
    { label: "Soluciones Next.js", href: "/soluciones/nextjs" },
    { label: "Precios", href: "/precios" },
    { label: "Portafolio", href: "/portafolio" },
  ],
} as const;

export type ServiceContent = typeof automatizacionServiceContent;
