export const astroMetadata = {
  title: "Sitios web en Astro ultra rapidos (SEO-ready) | Rickyram.dev",
  description:
    "Creamos landings y sitios corporativos en Astro: velocidad brutal, seguridad y SEO basico incluido. Paquetes Starter desde $7,900 MXN. Ideal para marketing, servicios y campanas.",
  openGraph: {
    title: "Astro: sitios ultra rapidos que convierten | Rickyram.dev",
    description:
      "La opcion ideal para marketing: performance, SEO básico, full responsive y alcance claro. Desde $7,900 MXN.",
  },
} as const;

import { Globe, LifeBuoy, Search, Server } from "lucide-react";

export const astroContent = {
  hero: {
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Soluciones", href: "/soluciones" },
      { label: "Astro", href: "/soluciones/astro" },
    ],
    title: "Astro: sitios ultra rapidos (y hechos para convertir)",
    descriptions: [
      "Si tu objetivo es vender servicios, captar leads o lanzar campanas con una web que cargue en un parpadeo, Astro es el camino corto y efectivo.",
      "Astro es perfecto para sitios tipo marketing: landing pages, paginas de servicios, portafolios y sitios corporativos donde la prioridad es velocidad + claridad + conversiones.",
      "Desde $7,900 MXN (paquetes Starter).",
    ],
    ctas: [
      { label: "Cotizar Astro", href: "/cotizar" },
      { label: "Ver precios", href: "#precios", variant: "secondary" },
      { label: "Ver que incluye", href: "#que-incluye", variant: "secondary" },
    ],
    card: {
      badgeLabel: "Astro",
      title: "Astro",
      image: {
        src: "/images/astro-logo.webp",
        alt: "Astro logo",
      },
      logo: {
        src: "/astro/astro-a-logo.jpg",
        alt: "Astro",
      },
    },
  },
  stickyNav: [
    { label: "Overview", href: "#overview" },
    { label: "Que incluye", href: "#que-incluye" },
    { label: "Precios", href: "#precios" },
    { label: "Alcances", href: "#alcances" },
    { label: "Add-ons", href: "#add-ons" },
    { label: "FAQ", href: "#faq" },
    { label: "Cotizar", href: "/cotizar" },
  ],
  trustItems: [
    { icon: Server, label: "Hosting + SSL 1er año" },
    { icon: Globe, label: "Responsive" },
    { icon: Search, label: "SEO base" },
    { icon: LifeBuoy, label: "Soporte / guia de uso" },
  ],
  why: {
    title: "Por que Astro",
    bullets: [
      "Carga rapidisimo (ideal para usuarios moviles).",
      "SEO-friendly desde la base (estructura clara para Google y Bing).",
      "Menos mantenimiento (menos piezas que se rompen).",
      "Mayor seguridad (sitio principalmente estatico, menos superficie de ataque).",
      "Perfecto para conversiones (CTA y flujo limpios).",
    ],
    note:
      "Astro brilla cuando necesitas una web rapida y convincente, no un panel complejo para editar todos los dias.",
  },
  whoIsItFor: {
    title: "Para quien es Astro?",
    bullets: [
      "Quieres una landing para anuncios (Google/Meta/TikTok) que cargue rapido.",
      "Tienes un negocio de servicios y necesitas un sitio claro con buen SEO base.",
      "Buscas portafolio / presentacion profesional sin complicarte con plugins.",
      "Valoras performance + UX como ventaja competitiva.",
    ],
  },
  notFor: {
    title: "Cuando NO conviene Astro?",
    bullets: [
      {
        text: "Necesitas editar contenido constantemente desde un panel (ahi suele convenir",
        link: { label: "WordPress", href: "/soluciones/wordpress" },
        suffix: ").",
      },
      {
        text: "Requieres funcionalidades tipo sistema (roles, dashboards complejos, integraciones profundas); ahi conviene",
        link: { label: "Next.js", href: "/soluciones/nextjs" },
        suffix: ".",
      },
      {
        text: "Tu e-commerce depende de plugins y administracion diaria; normalmente WooCommerce en WordPress o una tienda headless en Next.",
      },
    ],
    cta: {
      label: "Agendar llamada",
      href: "/cotizar",
    },
  },
  canBuild: {
    title: "Que puedes construir con Astro",
    bullets: [
      "Landing de campaña digital (anuncios + WhatsApp + formulario).",
      "Sitio de servicios (5-12 páginas: propuesta, servicios, proceso, testimonios, FAQ, contacto).",
      "Portafolio / marca personal.",
      "Micrositios para lanzamientos.",
      "Pagina de producto simple (sin ecommerce complejo).",
    ],
  },
  includes: {
    title: "Que incluye el Plan (Starter)",
    includeLead:
      "Los planes Starter incluyen lo necesario para lanzar bien, sin inflar el costo:",
    includeList: [
      "Sitio full responsive (mobile-first).",
      "Optimizacion base de performance (imagenes y carga).",
      "CTA y estructura orientada a conversion (WhatsApp / llamada / formulario).",
      "Publicacion (deploy) y guia básica de uso/entrega.",
    ],
    seoTitle: "SEO básico",
    seoList: [
      "Titles y metas por pagina",
      "Estructura H1/H2 correcta",
      "Sitemap.xml y robots.txt",
      "Open Graph (vista previa para redes)",
      "Schema básico (Organization / LocalBusiness)",
      "Checklist de indexacion (Search Console cuando aplique)",
    ],
    notIncludedTitle: "No incluye (pero se puede agregar)",
    notIncluded: [
      "GA4/GTM y medicion avanzada (ver add-ons).",
      "Copywriting completo (si no entregas textos).",
      "SEO avanzado (keyword research, contenido mensual, enlazado estrategico, etc.).",
      "Integraciones complejas (CRM, automatizaciones avanzadas).",
    ],
  },
  pricing: {
    title: "Precios Astro (MXN) - Paquetes Starter",
    description:
      "Pensados para ser tu web que se vende diario: rapidos, claros y con alcance definido.",
    table: [
      {
        name: "Landing Starter",
        idealFor: "Campñas, un servicio, validacion rapida",
        scope: "Hasta 6-8 bloques en 1 pagina",
        price: "Desde $7,900",
      },
      {
        name: "Sitio basico Starter",
        idealFor: "Negocio de servicios",
        scope: "4-5 Páginas (Inicio, Somos, Servicios, Contacto)",
        price: "Desde $9,900",
      },
      {
        name: "PyME Starter",
        idealFor: "Empresa con mas oferta y autoridad",
        scope: "8-10 Páginas + estructura de conversion",
        price: "Desde $14,900",
      },
    ],
    pricingNotesTitle: "Que define el precio exacto dentro del rango",
    pricingNotes: [
      "Cantidad de secciones reales y variaciones de layout.",
      "Si hay 1 idioma o multiidioma.",
      "Complejidad de formularios y captacion.",
      "Nivel de personalizacion visual (básico vs muy a medida).",
      "Integraciones (calendario, CRM, automatizaciones, etc.).",
    ],
  },
  scopes: {
    title: "Alcances (para evitar sorpresas)",
    description:
      "Para que el proyecto sea rapido y ordenado, cada paquete tiene limites sanos:",
    cards: [
      {
        title: "Landing Starter (alcance tipico)",
        bullets: [
          "1 pagina",
          "6-8 bloques (hero, beneficios, servicios, prueba social, FAQ, contacto)",
          "1 formulario simple o boton a WhatsApp",
          "1 idioma",
          "1 ronda de cambios + 1 ronda de correcciones",
        ],
      },
      {
        title: "Sitio basico Starter (alcance tipico)",
        bullets: [
          "Hasta 5 páginas",
          "1-3 páginas extra simples (ej: Aviso de privacidad / Gracias / Contacto)",
          "1 Formularios básicos",
          "1-2 rondas de cambios (segun acuerdo)",
        ],
      },
      {
        title: "PyME Starter (alcance tipico)",
        bullets: [
          "10-12 páginas",
          "Estructura de conversion mas completa (mas CTA, mas prueba social)",
          "2 Formularios básicos",
          "Preparacion para escalar a tracking/Ads/SEO mensual",
        ],
      },
    ],
    note: "Cambios fuera de alcance se cotizan aparte.",
  },
  addOns: {
    title: "Add-ons recomendados (para escalar)",
    sections: [
      {
        title: "Medicion (Analytics)",
        bullets: [
          "Tracking Lite (GA4 sin GTM, 1 conversion simple): $1,500 - $3,000",
          "Tracking Standard (GA4 + GTM + 3-5 conversiones + QA): $3,500 - $7,900",
        ],
      },
      {
        title: "SEO",
        bullets: [
          "Auditoria SEO: $4,900 (emprendedor) / $12,900 (PyME) / $29,900 (empresa)",
          "SEO mensual: desde $2,900 / mes",
        ],
      },
      {
        title: "Ads (cuando tu landing ya convierte)",
        bullets: [
          "Setup Google Ads: Desde $3,900",
          "Setup Meta Ads: Desde $2,900",
          "Manejo mensual Google Ads: cotizar segun alcance",
          "Manejo mensual Meta Ads: cotizar segun alcance",
        ],
      },
      {
        title: "Operacion y cuidado",
        bullets: [
          "Mantenimiento (Care): desde $890 / mes",
          "Seguridad / monitoreo: Desde $1,900 / mes (segun alcance)",
        ],
      },
    ],
  },
  structure: {
    title: "Ejemplo de estructura ganadora (secciones sugeridas)",
    landingSteps: [
      "Hero (propuesta clara + CTA)",
      "Beneficios (3-6 puntos concretos)",
      "Que ofreces (servicios/paquetes)",
      "Prueba social (testimonios / logos / casos)",
      "Proceso (como trabajas)",
      "FAQs",
      "CTA final + contacto",
    ],
    pymeIntro: "Un sitio PyME suele sumar:",
    pymeBullets: [
      "Diferenciadores",
      "Casos / portafolio",
      "Seccion 'para quien es'",
      "Comparativa / paquetes",
      "Captacion (agenda / formulario)",
    ],
  },
  tech: {
    title: "Tech (sin marear) - ¿Qué estas comprando realmente?",
    bullets: [
      "Sitio construido con Astro (enfocado en performance).",
      "Estilos modernos con Tailwind CSS.",
      "Componentes UI coherentes (segun el diseno final) y buenas practicas de accesibilidad.",
      "Deploy tipico en infraestructura moderna (CDN), ideal para velocidad global.",
    ],
    note:
      "Si tu sitio principal esta en Next.js y quieres mantener consistencia visual, se puede alinear el UI kit para que todo se sienta de la misma familia.",
  },
  process: {
    title: "Proceso de trabajo",
    steps: [
      "Diagnostico rapido (objetivo, oferta, CTA)",
      "Estructura (secciones + jerarquia + flujo)",
      "Construccion (performance + SEO basico)",
      "Revision (ajustes dentro del alcance)",
      "Lanzamiento",
      "Escala opcional (tracking, Ads, SEO mensual)",
    ],
  },
  faq: [
    {
      question: "Astro sirve para SEO?",
      answer:
        "Si. Astro facilita un sitio rapido y bien estructurado, y eso ayuda mucho. El SEO de verdad crece cuando agregas estrategia, contenido, enlazado y medicion (opcional).",
    },
    {
      question: "Incluye GA4 y GTM?",
      answer:
        "En Starter no (para mantener el precio de arranque). Puedes agregarlo con Tracking Lite o Tracking Standard.",
    },
    {
      question: "¿Qué es Astro y por qué lo recomiendas?",
      answer:
        "Astro es una forma moderna de construir sitios muy rápidos y con excelente base de SEO. Es ideal para **landings y sitios de marketing** donde importa que cargue en segundos, se vea premium y convierta mejor.",
    },
    {
      question: "Puedo tener blog con Astro?",
      answer:
        "Si, pero si quieres publicar facil sin tocar codigo, normalmente conviene WordPress como blog (headless) y Astro/Next para el front.",
    },
    {
      question: "Que tan rapido puede quedar?",
      answer:
        "Depende del contenido y el alcance. Lo que acelera todo es que el cliente entregue textos e imagenes a tiempo.",
    },
    {
      question: "Puedo empezar con Astro y luego migrar a Next.js?",
      answer:
        "Si. De hecho es comun: comienzas con marketing rapido (Astro) y cuando el negocio exige mas funcionalidades, creces a Next.js.",
    },
    {
      question: "¿Astro es “rápido de hacer” o lleva ingeniería real?",
      answer:
        "Lleva ingeniería real. La diferencia es que Astro está pensado para entregar velocidad, estructura y estabilidad sin cargar cosas innecesarias. Menos “peso”, más performance y menos mantenimiento.",
    },
    {
      question: "¿Voy a poder editar el contenido yo mismo?",
      answer:
        "Depende del plan: - Sin CMS/panel: tú me mandas cambios (texto/fotos) y yo los aplico rápido. - Con CMS (opcional): sí puedes editar desde un panel (headless CMS) y tu sitio sigue siendo rápido. En la propuesta te digo claramente si incluye panel o no.",
    },
    {
      question: "Si no tiene panel, ¿cada cambio me lo tienes que hacer tú?",
      answer:
        "Si eliges Astro sin CMS, sí: cambios de texto/imagen se gestionan conmigo (suele ser ideal cuando no cambias diario).  Si tu negocio publica seguido o lo maneja un equipo, recomiendo Astro + CMS o WordPress.",
    },
    {
      question: "¿Astro sirve para SEO?",
      answer:
        "Sí. Astro normalmente arranca con una base técnica excelente: estructura limpia, velocidad, y control de metadatos.  De todos modos, el SEO fuerte depende de estrategia y contenido",
    },
    {
      question: "¿Se puede hacer animación o efectos con Astro?",
      answer:
        "Sí. Astro permite animaciones y partes interactivas, pero se recomienda usarlas con criterio: bonito, moderno y rápido, sin sacrificar performance. Si quieres animaciones avanzadas, se define en alcance.",
    },
  ],
  cta: {
    title: "Listo para un sitio rapido que convierta?",
    description:
      "Cuentame que vendes, a quien y cual es tu objetivo (leads / llamadas / WhatsApp / agenda).",
    primaryCta: { label: "Cotizar Astro", href: "https://wa.me/526631016627" },
    secondaryCta: { label: "Agendar llamada", href: "https://cal.com/" },
    whatsapp: "https://wa.me/526631016627",
    email: "contacto@rickyram.dev",
  },
} as const;

