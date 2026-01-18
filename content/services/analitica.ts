export const analiticaServiceContent = {
  hero: {
    kicker: "Analítica",
    title:
      "Servicio de Analítica (GA4 + GTM + Looker): mide conversiones reales y toma decisiones con datos",
    lead:
      "Sin medición, todo es opinión (y anuncios caros). Configuro GA4 + Tag Manager para que midas leads, WhatsApp, llamadas, formularios y compras con precisión. Luego lo aterrizamos en dashboards claros para tu negocio.",
    ctas: [
      { label: "Agendar diagnóstico", href: "#agendar" },
      { label: "Solicitar auditoría de medición", href: "#auditoria" },
      { label: "Ver planes mensuales", href: "#planes" },
    ],
  },

  forWho: {
    title: "¿Para quién es este servicio?",
    bullets: [
      "Estás invirtiendo en Ads o SEO y quieres saber qué sí convierte (no solo visitas).",
      "Necesitas medir formularios, WhatsApp, llamadas, compras o reservas.",
      "Tu cuenta de GA4 existe, pero los datos no cuadran o están incompletos.",
      "Quieres un dashboard simple para ver KPIs sin meterte a GA4.",
      "Tienes e-commerce y necesitas medir eventos de compra correctamente (items, revenue, funnel).",
    ],
    notFor: [
      "Solo quieres ver “visitas” y ya (sin conversiones ni objetivos).",
      "No tendrás acceso a tu sitio/Tag Manager o no podrás implementar cambios mínimos.",
      "Buscas medición 100% perfecta sin aceptar márgenes/limitaciones (cookies, consent, navegadores).",
    ],
  },

  labels: {
    notForTitle: "Analítica NO es lo mejor si:",
    layersTitle: "Qué incluye (enfoque por etapas)",
    layersNote:
      "Nota: la medición moderna tiene limitaciones por privacidad/cookies. La meta es tener datos confiables para optimizar decisiones (y no quedarte ciego).",
    deliverablesTitle: "Entregables",
    auditPricesTitle: "Precios guía (MXN)",
    auditIncludesTitle: "Incluye",
    requirementsTitle: "¿Qué necesito para empezar?",
    requirementsNote:
      "Si ya tienes GA4/GTM, hacemos auditoría y arreglamos lo crítico. Si no existe nada, lo montamos desde cero con eventos y conversiones.",
    addOnsTitle: "Add-ons recomendados (para potenciar la medición)",
    processTitle: "Proceso de trabajo",
    contactTitle: "Agendar",
    internalLinksTitle: "Enlaces internos sugeridos (SEO + UX)",
  },

  layers: [
    {
      title: "1) Instrumentación (GA4 bien configurado)",
      bullets: [
        "Configuración correcta de GA4 (propiedad, data streams, settings clave).",
        "Estandarización de eventos (nombres, parámetros, convención).",
        "Definición de conversiones (lo que sí importa: lead, compra, llamada, WhatsApp).",
        "QA: validación para evitar datos inflados, duplicados o rotos.",
      ],
    },
    {
      title: "2) Tag Manager (GTM) y eventos confiables",
      bullets: [
        "Implementación o limpieza de GTM (contenedores, etiquetas, triggers).",
        "Eventos típicos: envío de formulario, click a WhatsApp, click a llamada, scroll, CTA.",
        "Buenas prácticas: evitar duplicación, controlar triggers y depurar con Preview.",
        "Preparación para medición escalable (cuando agregues nuevas páginas/landings).",
      ],
    },
    {
      title: "3) Atribución y calidad de datos (para optimizar Ads/SEO)",
      bullets: [
        "Revisión de UTM standards (campañas medibles sin caos).",
        "Revisión de fuentes/medium/canales (evitar “Direct” inflado).",
        "Revisión de conversiones para Ads (Google Ads import / Enhanced Conversions si aplica).",
        "Checklist de medición por funnel (visita → intención → conversión).",
      ],
    },
    {
      title: "4) Dashboards (Looker Studio) y lectura de KPIs",
      bullets: [
        "Dashboard con KPIs de negocio (leads, CPL/CPA, conversion rate, revenue si aplica).",
        "Vistas por canal: SEO, Ads, social, referidos.",
        "Segmentación por landing, campaña, ubicación o dispositivo (según necesidad).",
        "Reporte claro: qué pasó, por qué importa y qué hacemos después.",
      ],
    },
  ],

  deliverables: [
    "Documento de objetivos y conversiones (qué medimos y por qué).",
    "GA4 configurado y validado (eventos + conversiones).",
    "GTM limpio/ordenado con etiquetas y triggers necesarios.",
    "Checklist de QA + pruebas de eventos (capturas o evidencia).",
    "Dashboard en Looker Studio (si está en alcance) + guía rápida de lectura.",
  ],

  audit: {
    id: "auditoria",
    title: "Auditoría de Analítica (pago único)",
    lead:
      "Ideal si “ya tienes GA4/GTM” pero los datos no cuadran o no estás midiendo conversiones reales.",
    prices: [
      "Emprendedor: $2,900",
      "PyME: $6,900",
      "Empresa: $14,900",
    ],
    includes: [
      "Revisión de GA4 (configuración, eventos, conversiones, canales).",
      "Revisión de GTM (tags duplicadas, triggers mal configurados, orden).",
      "Revisión de medición de formularios/WhatsApp/llamadas (según tu funnel).",
      "Revisión de UTM standards y atribución básica.",
      "Lista priorizada: quick wins (1–7 días) + plan de mejora (30 días).",
    ],
    cta: { label: "Solicitar auditoría", href: "/cotizar?tab=servicios&tech=analitica&plan=auditoria-seo-pago-unico" },
  },

  plans: {
    id: "planes",
    title: "Planes mensuales de Analítica",
    lead:
      "Pensados para mantener medición sana, dashboards útiles y mejoras continuas. Ideal si corres Ads, cambias landings o tienes e-commerce.",
    cards: [
      {
        title: "Analytics Starter (mensual)",
        subtitle:
          "Para mantener control básico: salud de tracking + mejoras puntuales + reporte.",
        bullets: [
          "Revisión mensual de eventos y conversiones clave.",
          "1–2 ajustes/mes (tags/eventos simples).",
          "Dashboard base (si ya existe) + 1 mejora/mes.",
          "Reporte mensual con insights accionables.",
        ],
        price: "Desde $2,900 / mes + IVA",
      },
      {
        title: "Analytics Growth (mensual)",
        subtitle:
          "Para negocios con Ads/SEO activo: medición más completa y dashboards que sí se usan.",
        bullets: [
          "Mantenimiento de GA4 + GTM (eventos/conversiones) con QA.",
          "3–5 ajustes/mes (funnels, CTAs, formularios, WhatsApp, llamadas).",
          "Dashboard Looker con vistas por canal/campaña/landing.",
          "Reporte + recomendaciones para optimizar CPA/CVR.",
        ],
        price: "Desde $6,900 / mes + IVA",
      },
      {
        title: "Analytics Pro (mensual)",
        subtitle:
          "Para e-commerce, multi-campaña o producto digital: medición avanzada y soporte más cercano.",
        bullets: [
          "Eventos avanzados (parámetros, audiencias, funnels).",
          "E-commerce tracking (GA4 items/revenue) o eventos complejos (según stack).",
          "Dashboards ejecutivos + segmentación profunda.",
          "Soporte prioritario y roadmap mensual de medición.",
        ],
        price: "Desde $12,900 / mes + IVA (Enterprise: a cotizar)",
      },
    ],
  },

  requirements: [
    "Acceso a GA4 (propiedad) y a GTM (contenedor) si ya existen.",
    "Acceso al sitio o a quien implemente cambios (WordPress/Next/Astro) para activar eventos reales.",
    "Lista de objetivos de negocio: lead, WhatsApp, llamadas, compras, reservas, etc.",
    "Accesos a plataformas de Ads si quieres conectar conversiones (Google Ads/Meta).",
    "E-commerce: plataforma (WooCommerce/Shopify/otro) y qué eventos quieres medir (add_to_cart, begin_checkout, purchase).",
  ],

  addOns: [
    {
      title: "Setups (pago único) — arranque rápido",
      items: [
        "Tracking Lite (GA4 sin GTM, 1 conversión simple): $1,500 - $3,000",
        "Tracking Standard (GA4 + GTM + 3-5 conversiones + QA): $3,500 - $7,900",
        "Tracking Ecommerce (GA4 ecommerce + dataLayer + QA): $12,900 - $29,000+",
      ],
    },
    {
      title: "Dashboards y reporting",
      items: [
        "Looker Studio (dashboard base + KPIs): $2,900 - $9,900",
        "Dashboard Pro (segmentación por canal/campaña/landing + vistas ejecutivas): $9,900 - $24,900+",
      ],
    },
    {
      title: "Ads y atribución (para que optimice a resultados reales)",
      items: [
        "Vinculación Google Ads + importación de conversiones: a cotizar",
        "Enhanced Conversions / Conversion API (cuando aplica): a cotizar",
        "UTM standard + convención de campañas: a cotizar",
      ],
    },
    {
      title: "Privacidad / Consent (si aplica)",
      items: [
        "Consent Mode (revisión + configuración base): a cotizar",
        "Cookie banner + ajustes de medición (según herramienta): a cotizar",
      ],
    },
  ],

  processSteps: [
    "Diagnóstico (objetivos, funnel y estado actual de medición).",
    "Diseño de medición (eventos, conversiones, UTMs, naming).",
    "Implementación (GA4 + GTM + eventos) y QA con pruebas reales.",
    "Dashboards (Looker) y KPIs para lectura rápida.",
    "Optimización continua (ajustes, limpieza, mejoras por cambios del sitio/campañas).",
  ],

  faqs: [
    {
      question: "¿Qué es GA4 y por qué lo necesito?",
      answer:
        "GA4 es la herramienta de analítica de Google. Te permite medir usuarios, fuentes de tráfico y, sobre todo, conversiones (leads/ventas). Sin eso, optimizar SEO o Ads es adivinar.",
    },
    {
      question: "¿Para qué sirve Google Tag Manager (GTM)?",
      answer:
        "GTM te permite gestionar etiquetas y eventos sin tocar el sitio cada vez. Es la forma más flexible de medir clicks, formularios, WhatsApp, llamadas y conversiones con control.",
    },
    {
      question: "¿Cuántas conversiones debo medir?",
      answer:
        "Las que de verdad importan. Normalmente 1–5: envío de formulario, click a WhatsApp, llamada, compra, reserva. Medir 30 cosas suele generar ruido y malas decisiones.",
    },
    {
      question: "¿Por qué mis datos no coinciden entre GA4 y Google Ads?",
      answer:
        "Es común por atribución, ventanas de conversión, modelos, bloqueadores y consent. La meta es tener medición consistente para decisiones, no perseguir una “igualdad perfecta” imposible.",
    },
    {
      question: "¿Se puede medir WhatsApp y llamadas?",
      answer:
        "Sí. Se pueden medir clicks a WhatsApp/llamada y, según tu setup, también eventos más avanzados. Para llamadas con tracking real se puede integrar call tracking (add-on).",
    },
    {
      question: "¿Esto mejora mis ventas automáticamente?",
      answer:
        "La analítica no vende sola, pero te da el mapa para optimizar: qué canal funciona, qué landing convierte y dónde se pierde la gente. Es la base para bajar CPA y subir conversiones.",
    },
  ],

  finalCta: {
    id: "cotizar",
    title: "¿Quieres dejar de adivinar y medir lo que realmente importa?",
    bullets: [
      "Definimos objetivos y conversiones reales.",
      "Implementamos GA4 + GTM con QA para datos confiables.",
      "Te dejo dashboards claros para decisiones rápidas.",
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
    { label: "Google Ads", href: "/servicios/ads" },
    { label: "SEO", href: "/servicios/seo" },
    { label: "Automatización", href: "/servicios/automatizacion" },
    { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
    { label: "Soluciones WordPress", href: "/soluciones/wordpress" },
    { label: "Soluciones Astro", href: "/soluciones/astro" },
    { label: "Soluciones Next.js", href: "/soluciones/nextjs" },
    { label: "Precios", href: "/precios" },
    { label: "Portafolio", href: "/portafolio" },
  ],
} as const;

export type ServiceContent = typeof analiticaServiceContent;