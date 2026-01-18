import type { ServiceContent } from "./types";

export const seoServiceContent: ServiceContent = {
  hero: {
    kicker: "SEO",
    title:
      "Servicio de SEO (M\u00e9xico): m\u00e1s visibilidad, m\u00e1s leads, mejor conversi\u00f3n",
    lead:
      "El SEO no es magia; es ingenier\u00eda + contenido + medici\u00f3n. La meta es simple: que tu negocio aparezca cuando tu cliente te busca, y que tu sitio convierta cuando llegan.",
    ctas: [
      { label: "Agendar diagn\u00f3stico", href: "#agendar" },
      { label: "Solicitar auditor\u00eda SEO", href: "#auditoria" },
      { label: "Ver planes mensuales", href: "#planes" },
    ],
  },
  forWho: {
    title: "\u00bfPara qui\u00e9n es este servicio?",
    bullets: [
      "Tu producto/servicio tiene b\u00fasquedas claras (\"abogado laboral\", \"cl\u00ednica dental\", \"agencia\", \"tienda\").",
      "Ya recibes visitas pero no convierten (falta estructura y mensajes).",
      "Depend\u00edas solo de Ads y quieres bajar costo por adquisici\u00f3n a mediano plazo.",
      "Tienes sitio en WordPress, Astro o Next.js y quieres que Google lo entienda y lo priorice.",
    ],
    notFor: [
      "Tu oferta cambia cada semana y no tienes claridad comercial.",
      "Necesitas ventas inmediatas y no puedes esperar: ah\u00ed conviene Ads como canal inicial (y SEO en paralelo).",
    ],
  },
  labels: {
    notForTitle: "SEO NO es lo mejor si:",
    layersTitle: "Qu\u00e9 incluye (enfoque por capas)",
    layersNote:
      "Nota: No prometemos \"primer lugar garantizado\". Prometemos m\u00e9todo, ejecuci\u00f3n y mejora continua, con foco en resultados de negocio.",
    deliverablesTitle: "Entregables",
    auditPricesTitle: "Precios gu\u00eda (MXN)",
    auditIncludesTitle: "Incluye",
    requirementsTitle: "\u00bfQu\u00e9 necesito para empezar?",
    requirementsNote:
      "Si todav\u00eda no tienes GA4/GTM bien puestos, te recomiendo arrancar con tracking para medir conversiones (ver add-ons).",
    addOnsTitle: "Add-ons recomendados (para potenciar SEO)",
    processTitle: "Proceso de trabajo",
    contactTitle: "Agendar",
    internalLinksTitle: "Enlaces internos sugeridos (SEO + UX)",
  },
  layers: [
    {
      title: "1) SEO t\u00e9cnico (la base)",
      bullets: [
        "Indexaci\u00f3n (Search Console), sitemap/robots.",
        "Salud del sitio (errores, redirecciones, can\u00f3nicos).",
        "Performance/Core Web Vitals (lo que frena conversiones).",
        "Estructura sem\u00e1ntica (H1/H2/H3) y arquitectura interna.",
        "Datos estructurados (schema) cuando aplica.",
      ],
    },
    {
      title: "2) SEO on-page (lo que ve Google y el usuario)",
      bullets: [
        "Titles/metas orientados a intenci\u00f3n de b\u00fasqueda.",
        "Optimizaci\u00f3n de p\u00e1ginas clave (servicios/productos).",
        "Enlazado interno para distribuir autoridad.",
        "Optimizaci\u00f3n de CTR (snippet y estructura de resultados).",
      ],
    },
    {
      title: "3) Contenido (lo que gana a largo plazo)",
      bullets: [
        "Mapa de keywords por intenci\u00f3n (informativa, comercial, local).",
        "Plan editorial (temas que atraen leads, no solo visitas).",
        "Gu\u00edas/p\u00e1ginas pilar + clusters (estructura que escala).",
      ],
    },
    {
      title: "4) SEO local (si vendes por ciudad/estado)",
      bullets: [
        "Optimizaci\u00f3n de Google Business Profile (si aplica).",
        "NAP (nombre/direcci\u00f3n/tel\u00e9fono) consistente.",
        "P\u00e1ginas por servicio/ubicaci\u00f3n y se\u00f1ales locales.",
      ],
    },
  ],
  deliverables: [
    "Checklist de hallazgos + prioridades (impacto vs esfuerzo).",
    "Plan de acci\u00f3n por semanas.",
    "Cambios t\u00e9cnicos (cuando est\u00e9n en alcance) o gu\u00eda para tu equipo.",
    "Optimizaci\u00f3n de p\u00e1ginas objetivo (las que generan dinero).",
    "Reporte mensual + siguientes pasos.",
  ],
  audit: {
    id: "auditoria",
    title: "Auditor\u00eda SEO (pago \u00fanico)",
    lead:
      "Una auditor\u00eda es el punto de partida ideal si no sabes por d\u00f3nde empezar.",
    prices: [
      "Emprendedor: $6,900",
      "PyME: $12,900",
      "Empresa: $29,900",
    ],
    includes: [
      "Diagn\u00f3stico t\u00e9cnico + indexaci\u00f3n.",
      "Revisi\u00f3n on-page (t\u00edtulos, headings, estructura).",
      "Revisi\u00f3n de contenido y oportunidades.",
      "Lista priorizada de acciones (quick wins + roadmap).",
      "Recomendaciones de medici\u00f3n (GA4/GTM si hace falta).",
    ],
    cta: { label: "Solicitar auditor\u00eda", href: "/cotizar?tab=servicios&tech=seo&plan=auditoria-seo-pago-unico" },
  },
  plans: {
    id: "planes",
    title: "Planes mensuales de SEO",
    lead:
      "Pensados para construir tracci\u00f3n real: contenido + mejoras t\u00e9cnicas + optimizaci\u00f3n continua.",
    cards: [
      {
        title: "SEO Starter (mensual)",
        subtitle:
          "Para negocios que quieren empezar y avanzar sin complicarse.",
        bullets: [
          "Optimizaci\u00f3n de p\u00e1ginas clave (las que venden).",
          "Mejoras t\u00e9cnicas prioritarias.",
          "1 bloque de contenido/mes (o ajustes equivalentes).",
          "Reporte mensual + pr\u00f3ximos pasos.",
        ],
        price: "Desde $6,900 / mes",
      },
      {
        title: "SEO Growth (mensual)",
        subtitle: "Para PyME con competencia real en Google.",
        bullets: [
          "Optimizaci\u00f3n continua (t\u00e9cnico + on-page).",
          "Contenido con intenci\u00f3n comercial (clusters).",
          "Enlazado interno y mejora de conversi\u00f3n (CRO ligero).",
          "Reporte + tablero de m\u00e9tricas.",
        ],
        price: "Desde $12,900 / mes (seg\u00fan alcance)",
      },
      {
        title: "SEO Pro (mensual)",
        subtitle:
          "Para marcas con m\u00faltiples servicios, ubicaciones o alto tr\u00e1fico.",
        bullets: [
          "Estrategia + ejecuci\u00f3n m\u00e1s intensa.",
          "Contenido escalable (pilares + clusters).",
          "Auditor\u00edas peri\u00f3dicas + optimizaci\u00f3n de performance.",
          "Coordinaci\u00f3n con Ads/landing para bajar CPA.",
        ],
        price: "Desde $29,900 / mes (Enterprise: a cotizar)",
      },
    ],
  },
  requirements: [
    "URL del sitio + acceso a Search Console (si existe).",
    "Lista de servicios/productos que te dejan margen.",
    "Ciudades/zonas donde vendes (si aplica).",
    "Competidores (2-5 referencias).",
    "Objetivo claro: leads, llamadas, WhatsApp, ventas, etc.",
  ],
  addOns: [
    {
      title: "Medici\u00f3n (Analytics)",
      items: [
        "Tracking Lite (GA4 sin GTM, 1 conversi\u00f3n simple): $1,500 - $3,000",
        "Tracking Standard (GA4 + GTM + 3-5 conversiones + QA): $3,500 - $7,900",
      ],
    },
    {
      title: "Ads (cuando ya hay oferta clara y landing que convierte)",
      items: [
        "Setup Google Ads / Meta Ads (ideal para acelerar mientras SEO madura).",
      ],
    },
    {
      title: "CRO ligero (mejora de conversi\u00f3n)",
      items: [
        "Ajustes de copy/CTA, estructura de landing, pruebas r\u00e1pidas (seg\u00fan proyecto).",
      ],
    },
  ],
  processSteps: [
    "Diagn\u00f3stico (objetivo + estado actual + quick wins).",
    "Estrategia (keywords, arquitectura, prioridades).",
    "Implementaci\u00f3n (t\u00e9cnico + on-page + contenido).",
    "Optimizaci\u00f3n (mejoras continuas por impacto).",
    "Reporte (qu\u00e9 subi\u00f3, qu\u00e9 convirti\u00f3 y qu\u00e9 sigue).",
  ],
  faqs: [
    {
      question: "\u00bfCu\u00e1ndo ver\u00e9 resultados con SEO?",
      answer:
        "Depende de tu industria, competencia y estado actual del sitio. Lo normal es ver avances por etapas: primero salud/indexaci\u00f3n, luego mejoras en p\u00e1ginas clave, despu\u00e9s crecimiento por contenido.",
    },
    {
      question: "\u00bfEl SEO incluye escribir contenido?",
      answer:
        "En planes mensuales s\u00ed puede incluirse contenido (o equivalentes en optimizaci\u00f3n). Si necesitas volumen alto, se cotiza como add-on.",
    },
    {
      question: "\u00bfPuedo hacer SEO si mi web es WordPress/Astro/Next?",
      answer:
        "S\u00ed. Ajustamos la estrategia seg\u00fan el stack. Lo importante es: estructura, velocidad, contenido y medici\u00f3n.",
    },
    {
      question: "\u00bfIncluye linkbuilding?",
      answer:
        "Podemos sugerir estrategias y oportunidades. La construcci\u00f3n de enlaces (si se hace) debe ser \u00e9tica y con enfoque de calidad; se cotiza aparte seg\u00fan alcance.",
    },
    {
      question: "\u00bfGarantizas primer lugar?",
      answer:
        "No. Nadie serio lo garantiza. S\u00ed garantizamos metodolog\u00eda, ejecuci\u00f3n y mejoras medibles con foco en negocio.",
    },
  ],
  finalCta: {
    id: "cotizar",
    title: "\u00bfQuieres saber qu\u00e9 tan lejos est\u00e1s de rankear (y por qu\u00e9)?",
    bullets: [
      "Qu\u00e9 est\u00e1 frenando tu SEO.",
      "Qu\u00e9 p\u00e1ginas conviene priorizar.",
      "Un plan claro para 30 d\u00edas.",
    ],
    primary: "Agendar diagn\u00f3stico",
    secondary: "Solicitar auditor\u00eda",
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
    { label: "Anal\u00edtica (GA4/GTM)", href: "/servicios/analitica" },
    { label: "Ads", href: "/servicios/ads" },
    { label: "Soluciones Astro", href: "/soluciones/astro" },
    { label: "Soluciones WordPress", href: "/soluciones/wordpress" },
    { label: "Soluciones Next.js", href: "/soluciones/nextjs" },
    { label: "Precios", href: "/precios" },
    { label: "Portafolio", href: "/portafolio" },
  ],
};

