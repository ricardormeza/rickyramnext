import type { ServiceContent } from "./types";

export const adsServiceContent: ServiceContent = {
  slug: "ads",
  hero: {
    kicker: "Ads",
    title:
      "Servicio de Google Ads, Meta Ads y campañas de Facebook: leads y ventas con medición real",
    lead:
      "Google Ads, Meta Ads y campañas de Facebook no son solo “meter presupuesto y esperar resultados”. Requieren estrategia, segmentación, medición, cuenta publicitaria bien configurada y optimización continua.",
    ctas: [
      { label: "Agendar diagnóstico", href: "#agendar" },
      { label: "Auditar mi cuenta", href: "#auditoria" },
      { label: "Ver planes mensuales", href: "#planes" },
    ],
  },

  forWho: {
    title: "¿Para quién es este servicio?",
    bullets: [
      "Necesitas resultados más rápidos que SEO (leads/ventas esta semana o este mes).",
      "Tienes oferta clara (servicio/producto) y puedes atender prospectos de forma constante.",
      "Quieres medir conversiones reales (formularios, WhatsApp, llamadas, compras).",
      "Tu sitio ya existe (WordPress/Astro/Next) y quieres convertirlo en canal de adquisición.",
      "Ya inviertes en Ads pero sientes que pagas caro o no tienes claridad de qué funciona.",
      "Necesitas apoyo para ordenar cuenta publicitaria, portafolio comercial, campañas y contenidos base.",
    ],
    notFor: [
      "No tienes oferta definida, precios o diferenciador (primero conviene ordenar el funnel).",
      "No puedes dar seguimiento a leads (sin respuesta rápida, Ads se vuelve caro).",
      "Quieres “solo tráfico” sin medir conversiones (mejor primero tracking + landing).",
      "Tu presupuesto es muy bajo para tu industria (podemos empezar, pero con expectativas realistas).",
    ],
  },

  labels: {
    notForTitle: "Ads NO es lo mejor si:",
    layersTitle: "Qué incluye (enfoque por etapas)",
    layersNote:
      'Nota: no prometemos “X ventas garantizadas”. Prometemos metodología, control de medición y optimización continua para mejorar CPA/ROAS y calidad de leads.',
    deliverablesTitle: "Entregables",
    auditPricesTitle: "Precios guía (MXN)",
    auditIncludesTitle: "Incluye",
    requirementsTitle: "¿Qué necesito para empezar?",
    requirementsNote:
      "Si aún no tienes GA4/GTM y conversiones bien configuradas, lo recomendable es arrancar con tracking para que Ads se optimice a resultados reales.",
    addOnsTitle: "Add-ons recomendados (para potenciar Ads)",
    processTitle: "Proceso de trabajo",
    contactTitle: "Agendar",
    internalLinksTitle: "Enlaces internos sugeridos (SEO + UX)",
  },

  layers: [
    {
      title: "1) Medición y base de conversión (antes de escalar)",
      bullets: [
        "Definición de objetivos: lead, llamada, WhatsApp, compra, formulario.",
        "Revisión/implementación de conversiones (GA4 + GTM cuando aplica).",
        "Eventos y QA para que Google optimice con datos correctos (no clicks vacíos).",
        "Estructura de landing/CTA (recomendaciones para convertir mejor).",
        "Revisión de cuenta publicitaria, pixel y activos base antes de escalar.",
      ],
    },
    {
      title: "2) Estructura de campañas (lo que evita quemar presupuesto)",
      bullets: [
        "Arquitectura por intención: marca, servicios, competencia y remarketing (si aplica).",
        "Estrategia de keywords (match types) y negativas desde el inicio.",
        "Segmentación por ubicación/horarios/dispositivo/intereses según negocio y plataforma.",
        "Extensiones (assets), audiencias y estructura de anuncios para CTR y relevancia.",
      ],
    },
    {
      title: "3) Creatividad y mensaje (lo que sube CTR y calidad del lead)",
      bullets: [
        "Copys de anuncios enfocados a intención y dolor del cliente.",
        "Propuesta de valor clara (por qué tú vs alternativas).",
        "A/B testing de mensajes: beneficios, oferta, prueba social.",
        "Asesoría para portafolio comercial, oferta y mensajes antes de empujar presupuesto.",
        "Recomendaciones de creativos y content management si se usan formatos que lo requieran.",
      ],
    },
    {
      title: "4) Optimización continua (mejorar CPA/ROAS con control)",
      bullets: [
        "Optimización semanal: pujas, términos de búsqueda, negativas, anuncios, assets.",
        "Reasignación de presupuesto a lo que sí convierte.",
        "Mejora de calidad de leads (filtros, formularios, keywords).",
        "Reportes y plan del mes siguiente (qué funcionó y qué sigue).",
      ],
    },
  ],

  deliverables: [
    "Diagnóstico inicial de oferta, funnel y medición (qué perseguimos y cómo lo medimos).",
    "Revisión de cuenta publicitaria y activos base (Meta/Google) para operar con orden.",
    "Estructura de campañas y grupos por intención (orden para escalar).",
    "Configuración de anuncios, assets/extensiones y negativas base.",
    "Asesoría sobre portafolio comercial, mensaje y contenido mínimo para campañas.",
    "Optimización continua (términos de búsqueda, CPA, conversion rate, calidad de lead).",
    "Reporte periódico + recomendaciones accionables (no solo números).",
  ],

  audit: {
    id: "auditoria",
    title: "Auditoría de Ads (Google + Meta) - pago único",
    lead:
      "Ideal si ya tienes campañas activas y quieres saber por qué estás pagando caro, qué está roto en la cuenta publicitaria o por qué no convierten.",
    prices: [
      "Emprendedor: $4,900",
      "PyME: $9,900",
      "Empresa: $19,900",
    ],
    includes: [
        "Revisión de estructura (campañas, grupos, keywords, match types).",
        "Revisión de términos de búsqueda + negativas (fugas de presupuesto).",
        "Revisión de anuncios/RSAs + assets + estructura de cuenta publicitaria (CTR, relevancia, calidad).",
        "Revisión de campañas Meta/Facebook si aplica.",
        "Revisión de conversion tracking (GA4/GTM), atribución y calidad de datos.",
        "Lista priorizada: quick wins (1–7 días) + roadmap (30 días).",
      ],
    cta: { label: "Solicitar auditoría", href: "/cotizar?tab=servicios&tech=ads&plan=auditoria-de-google-ads-pago-unico" },
  },

  plans: {
    id: "planes",
    title: "Planes mensuales de Ads (Google + Meta)",
    lead:
      "Pensados para resultados medibles. El gasto publicitario (budget) se paga directo a la plataforma; aquí pagas estrategia, implementación y optimización.",
    cards: [
      {
        title: "Ads Starter (mensual)",
        subtitle:
          "Para empezar con control: medición correcta + campañas base + gestión mensual desde $3,500.",
        bullets: [
          "1 campañas en Google o Meta/Facebook según prioridad.",
          "Cuenta publicitaria y estructura base revisadas.",
          "Negativas base / audiencias base / términos de búsqueda (según plataforma).",
          "Optimización semanal ligera (pujas, anuncios, keywords o audiencias).",
          "Reporte mensual + próximos pasos.",
        ],
        price: "Desde $4,900 / mes (budget no incluido)",
      },
      {
        title: "Ads Growth (mensual)",
        subtitle:
          "Para PyME con competencia real: más cobertura, más pruebas y mejor eficiencia en Google + Meta.",
        bullets: [
          "2–4 campañas (Search, Remarketing, Meta Leads, Facebook/Instagram o Performance Max si aplica).",
          "Optimización semanal completa (términos, anuncios, assets, pujas y audiencias).",
          "Asesoría de portafolio comercial y mensajes de campaña.",
          "Mejora de calidad de lead (keywords y filtros).",
          "Reporte + tablero de métricas y recomendaciones.",
        ],
        price: "Desde $12,900 / mes (budget no incluido)",
      },
      {
        title: "Ads Pro (mensual)",
        subtitle:
          "Para inversión constante y foco en rendimiento: pruebas, escalamiento, contenido y medición avanzada.",
        bullets: [
          "Arquitectura por intención + expansión controlada.",
          "Experimentación (A/B de mensajes, landings, ofertas).",
          "Content management y coordinación de creativos/publicaciones según campaña.",
          "Tracking avanzado + reporting ejecutivo (cuando aplica).",
          "Estrategia mensual de crecimiento (qué escalar y qué cortar).",
        ],
        price: "Desde $24,900 / mes (Enterprise: a cotizar)",
      },
    ],
  },

  requirements: [
    "URL del sitio/landing y oferta clara (servicios, precios o rango, cobertura geográfica).",
    "Acceso a Google Ads y/o Meta Business/Ads Manager (si ya existen) y forma de pago configurada (o te guío).",
    "Acceso a GA4/GTM/Search Console si existe (para conversiones y calidad de datos).",
    "Objetivo principal: leads, llamadas, WhatsApp, compras, citas, etc.",
    "Contexto de ventas: horarios, tiempo de respuesta, capacidad de atención.",
    "Portafolio comercial, oferta o materiales base para estructurar mensajes y campañas.",
  ],

  addOns: [
    {
      title: "Tracking y conversiones (recomendado)",
      items: [
        "Tracking Lite (GA4 sin GTM, 1 conversión simple): $1,500 - $3,000",
        "Tracking Standard (GA4 + GTM + 3-5 conversiones + QA): $3,500 - $7,900",
        "Call tracking / eventos avanzados (según stack): a cotizar",
      ],
    },
    {
      title: "Landing de alta conversión (para bajar CPA)",
      items: [
        "Landing enfocada a Ads (copy + estructura + CTA): a cotizar",
        "Mejoras CRO ligeras (test rápido de CTA/mensaje): a cotizar",
      ],
    },
    {
      title: "Creativos y assets (si se requieren)",
      items: [
        "Banners/creativos para Display/Performance Max: a cotizar",
        "Paquete de copies (variantes y testing): a cotizar",
        "Content management / coordinación de contenidos para campañas: desde $3,500",
      ],
    },
    {
      title: "Integraciones y automatización (para no perder leads)",
      items: [
        "ManyChat (WhatsApp/IG) + calificación de leads: $7,900 - $29,900",
        "Integración CRM (HubSpot/Zoho/etc.): $19,900 - $79,900+",
      ],
    },
  ],

  processSteps: [
    "Diagnóstico (oferta + funnel + medición + quick wins).",
    "Estrategia (intención, estructura, presupuesto, segmentación).",
    "Implementación (campañas, anuncios, negativas, conversiones).",
    "Optimización (semanal: términos, anuncios, pujas, presupuestos).",
    "Reporte (resultados, aprendizajes y plan de escalamiento).",
  ],

  faqs: [
    {
      question: "¿El presupuesto de anuncios está incluido?",
      answer:
        "No. El budget se paga directo a Google. Mis planes cubren estrategia, implementación, optimización y reportes.",
    },
    {
      question: "¿En cuánto tiempo se ven resultados?",
      answer:
        "Ads puede generar señales rápido, pero optimizar costo y calidad lleva iteración. Lo importante es medir conversiones reales desde el inicio.",
    },
    {
      question: "¿Necesito GA4 y GTM para hacer Google Ads?",
      answer:
        "No es obligatorio, pero sí altamente recomendado. Sin conversiones bien configuradas, Google optimiza a clicks, no a resultados.",
    },
    {
      question: "¿Puedo quedarme con mi cuenta de Google Ads?",
      answer:
        "Sí. Trabajamos sobre tu cuenta (ideal). Tú eres dueño de la data, campañas e historial.",
    },
    {
      question: "¿Haces Performance Max?",
      answer:
        "Sí, cuando aplica. No siempre es lo primero; depende del tipo de negocio, presupuesto y calidad del sitio/landing.",
    },
    {
      question: "¿Qué pasa si mi sitio no convierte?",
      answer:
        "Ads solo amplifica lo que ya existe. Si el sitio/landing no convierte, proponemos mejoras (CRO/landing) para bajar CPA y mejorar la calidad del lead.",
    },
    {
      question: "¿Trabajas solo Google Ads o también Meta/TikTok?",
      answer:
        "Podemos trabajar Google Ads solo o complementar con Meta/TikTok según tu audiencia y objetivo. La medición es clave en todos los canales.",
    },
    {
      question: "¿También gestionas Meta Ads y campañas de Facebook?",
      answer:
        "Sí. Esta página cubre Google Ads, Meta Ads y campañas de Facebook/Instagram. La mezcla depende del objetivo, la oferta y el tipo de lead que buscas.",
    },
    {
      question: "¿Incluyes revisión de cuenta publicitaria y portafolio comercial?",
      answer:
        "Sí. Antes de escalar conviene revisar cuenta publicitaria, activos base, oferta, mensajes y portafolio comercial para no empujar presupuesto a una estructura floja.",
    },
  ],

  finalCta: {
    id: "cotizar",
    title: "¿Listo para campañas que se puedan medir y optimizar de verdad?",
    bullets: [
      "Definimos objetivos y conversiones reales.",
      "Estructuramos campañas y cuenta publicitaria para no quemar presupuesto.",
      "Optimizamos para bajar CPA y subir calidad de leads/ventas.",
      "Te ayudo a alinear campaña, portafolio comercial y contenido base.",
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
    { label: "SEO", href: "/servicios/seo" },
    { label: "Automatización", href: "/servicios/automatizacion" },
    { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
    { label: "Soluciones WordPress", href: "/soluciones/wordpress" },
    { label: "Soluciones Astro", href: "/soluciones/astro" },
    { label: "Soluciones Next.js", href: "/soluciones/nextjs" },
    { label: "Precios", href: "/precios" },
    { label: "Portafolio", href: "/portafolio" },
  ],
};




