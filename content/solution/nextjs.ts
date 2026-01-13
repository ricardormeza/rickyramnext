import { Globe, LifeBuoy, Search, Server } from "lucide-react";

export const nextjsMetadata = {
  title:
    "Next.js a medida: webs premium, dashboards y e-commerce headless | Rickyram.dev",
  description:
    "Desarrollamos sitios y sistemas en Next.js: UX premium, performance, integraciones y escalabilidad. Ideal para dashboards, e-commerce headless y proyectos a medida. Desde $18,900 MXN o a cotizar segun alcance.",
  openGraph: {
    title: "Next.js: tu web como producto (premium + escalable) | Rickyram.dev",
    description:
      "Para proyectos serios: personalizacion total, integraciones, e-commerce avanzado y dashboards. Full responsive, SEO base y alcance claro.",
  },
} as const;

export const nextjsContent = {
  hero: {
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Soluciones", href: "/soluciones" },
      { label: "Next.js", href: "/soluciones/nextjs" },
    ],
    title: "Next.js: tu web como producto (premium + escalable)",
    descriptions: [
      "Si tu proyecto necesita funcionalidades a medida, integraciones, experiencia tipo app y una base lista para crecer, Next.js es la opcion mas potente.",
      "Next.js es ideal para: webs premium, sistemas/dashboards, portales, e-commerce avanzado (headless) e integraciones con herramientas de negocio.",
      "Desde $18,900 MXN (landing custom). Proyectos avanzados: a cotizar.",
    ],
    ctas: [
      { label: "Cotizar Next.js", href: "#cotizar" },
      { label: "Ver precios", href: "#precios", variant: "secondary" },
      { label: "Ver que incluye", href: "#que-incluye", variant: "secondary" },
    ],
    card: {
      badgeLabel: "Next.js",
      title: "Next.js",
      image: {
        src: "/images/nextjs-logo.webp",
        alt: "Next.js logo",
      },
      logo: {
        src: "/images/nextjs-logo.webp",
        alt: "Next.js",
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
    { label: "Cotizar", href: "#cotizar" },
  ],
  trustItems: [
    { icon: Server, label: "Full responsive" },
    { icon: Globe, label: "Experiencia premium" },
    { icon: Search, label: "SEO base" },
    { icon: LifeBuoy, label: "Integraciones" },
  ],
  why: {
    title: "Por que Next.js",
    bullets: [
      "Experiencia premium (UI/UX a medida, animaciones finas, accesibilidad).",
      "Performance y SEO tecnico (bien construido, carga rapido y se indexa bien).",
      "Escala sin limites tipicos (cuando el sitio se vuelve producto).",
      "Integraciones (CRM, pagos, automatizaciones, APIs, catalogos, datos).",
      "Arquitectura modular (secciones/funciones crecen sin romper lo existente).",
    ],
    note:
      "Next.js no es un sitio con plantilla. Es una base para construir una experiencia digital solida y escalable.",
  },
  whoIsItFor: {
    title: "Para quien es Next.js?",
    bullets: [
      "Tu web necesita funciones especificas (no solo paginas).",
      "Quieres un sitio que se sienta como producto, no como brochure.",
      "Vas a integrar CRM, automatizaciones, pagos, data, roles, dashboards.",
      "Estas pensando en e-commerce avanzado o flujos personalizados.",
      "Quieres una base lista para crecer 12-24 meses sin rehacer todo.",
    ],
  },
  notFor: {
    title: "Cuando NO conviene Next.js?",
    bullets: [
      {
        text: "Solo necesitas una landing o un sitio simple de servicios; suele convenir",
        link: { label: "Astro", href: "/soluciones/astro" },
        suffix: ".",
      },
      {
        text: "Tu prioridad es tener panel para editar y publicar contenido rapido; suele convenir",
        link: { label: "WordPress", href: "/soluciones/wordpress" },
        suffix: ".",
      },
      {
        text: "Tu presupuesto es ajustado y no necesitas funciones especiales (Next tiene mas ingenieria).",
      },
    ],
    cta: { label: "Agendar llamada", href: "#cotizar" },
  },
  canBuild: {
    title: "Que puedes construir con Next.js",
    bullets: [
      "Landing premium (alto impacto, animaciones finas, conversion).",
      "Sitio multipagina custom (marca fuerte + UX).",
      "Dashboard / portal (roles, data, panel interno).",
      "Sistemas tipo MVP (producto digital inicial).",
      "E-commerce headless (catalogo grande, checkout, integraciones).",
      "Integraciones (CRM, email marketing, WhatsApp, automations, APIs).",
    ],
  },
  includes: {
    title: "Que incluye (base)",
    includeLead:
      "Los proyectos Next.js se trabajan con alcance definido para entregar calidad real.",
    includeList: [
      "Full responsive (mobile-first).",
      "UI moderna y consistente (componentes reutilizables).",
      "Optimizacion base de performance (imagenes, carga, estructura).",
      "Estructura orientada a conversion (CTA, flujos, formularios / WhatsApp).",
      "Deploy y entrega (ambiente productivo + guia basica).",
    ],
    seoTitle: "SEO basico",
    seoList: [
      "Titles y metas por pagina",
      "Estructura H1/H2 correcta",
      "Sitemap.xml y robots.txt",
      "Open Graph (vista previa para redes)",
      "Schema basico (Organization / LocalBusiness)",
    ],
    notIncludedTitle: "Opcional (segun proyecto)",
    notIncluded: [
      "CMS (WordPress headless u otro) para contenido editable.",
      "Autenticacion/roles, panel admin, integraciones avanzadas.",
      "Tracking avanzado (GA4+GTM+eventos), dashboards, dataLayer.",
      "Animaciones avanzadas (Framer Motion) / microinteracciones.",
      "Copywriting completo (si no entregas textos).",
      "SEO avanzado (keyword research, contenido mensual, enlazado estrategico).",
      "Integraciones complejas no definidas en alcance.",
      "Costos de herramientas externas (CRM, email, pasarelas, etc.).",
    ],
  },
  pricing: {
    title: "Precios Next.js (MXN) - Proyectos a medida",
    description:
      "Next.js se cotiza por alcance porque puede ir desde una landing premium hasta un sistema completo.",
    table: [
      {
        name: "Landing (custom)",
        idealFor: "Marca fuerte + conversion",
        scope: "1 pagina, 6-10 secciones, CTA y formulario",
        price: "$18,900 - $39,900",
      },
      {
        name: "Sitio basico (custom)",
        idealFor: "Servicios con UX premium",
        scope: "5-7 secciones / multipagina simple",
        price: "$39,900 - $89,900",
      },
      {
        name: "PyME (custom)",
        idealFor: "Empresa en crecimiento",
        scope: "10-15 secciones/paginas + estructura robusta",
        price: "$89,900 - $179,900",
      },
      {
        name: "E-commerce headless",
        idealFor: "Tienda seria y escalable",
        scope: "Catalogo + checkout + integraciones",
        price: "$149,900 - $599,900",
      },
      {
        name: "Dashboard / App MVP",
        idealFor: "Producto / sistema",
        scope: "Roles + data + panel + flujos",
        price: "$150,000 - $500,000+",
      },
    ],
    pricingNotesTitle: "Que define el precio exacto",
    pricingNotes: [
      "Alcance real (pantallas, roles, modulos, integraciones).",
      "Reglas de negocio (permisos, estados, automatizaciones).",
      "Cantidad de componentes UI custom.",
      "Tipo de e-commerce (catalogo, variantes, envios, ERP/CRM).",
      "Multiidioma, SEO avanzado, tracking avanzado, reporting.",
    ],
  },
  scopes: {
    title: "Alcances (para evitar sorpresas)",
    description: "Cada paquete tiene limites sanos:",
    cards: [
      {
        title: "Landing custom (alcance tipico)",
        bullets: [
          "1 pagina, 6-10 secciones",
          "CTA + formulario simple / WhatsApp",
          "1 idioma",
          "1 ronda de cambios + 1 ronda de correcciones",
        ],
      },
      {
        title: "Sitio basico custom (alcance tipico)",
        bullets: [
          "5-7 secciones/paginas equivalentes",
          "1-2 formularios",
          "Estructura lista para escalar a tracking/Ads/SEO",
        ],
      },
      {
        title: "PyME custom (alcance tipico)",
        bullets: [
          "10-15 secciones/paginas",
          "Bloques de prueba social (logos/testimonios/casos)",
          "Mejor estructura de conversion y navegacion",
          "Preparado para CMS si se requiere",
        ],
      },
      {
        title: "E-commerce headless / Dashboard (alcance)",
        bullets: [
          "Se define por modulos: auth, roles, catalogo, checkout, panel, integraciones, reporting.",
          "Se entrega con roadmap (MVP + fases).",
        ],
      },
    ],
    note: "Cambios fuera de alcance se cotizan aparte (claridad = velocidad).",
  },
  addOns: {
    title: "Add-ons recomendados (para escalar)",
    sections: [
      {
        title: "Medicion (Analytics)",
        bullets: [
          "Tracking Lite (GA4 sin GTM, 1 conversion): $1,500 - $3,000",
          "Tracking Standard (GA4 + GTM + 3-5 conversiones + QA): $3,500 - $7,900",
          "Ecommerce Tracking (GA4 ecommerce + dataLayer): $12,900 - $29,000+",
        ],
      },
      {
        title: "SEO",
        bullets: [
          "Auditoria SEO: $4,900 (emprendedor) / $12,900 (PyME) / $29,900 (empresa)",
          "SEO mensual: $6,900 - $29,900 / mes",
        ],
      },
      {
        title: "Ads (cuando ya hay tracking y oferta clara)",
        bullets: [
          "Setup Google Ads: $6,900 - $19,900",
          "Setup Meta Ads: $4,900 - $14,900",
          "Manejo mensual Google Ads: 15% del gasto (min. $6,900 / mes)",
          "Manejo mensual Meta Ads: desde $5,900 / mes",
        ],
      },
      {
        title: "Automatizacion / Integraciones",
        bullets: [
          "ManyChat (flows + integracion): $7,900 - $29,900",
          "Integracion CRM (HubSpot/Zoho/etc.): $19,900 - $79,900+",
        ],
      },
      {
        title: "Seguridad / Operacion",
        bullets: [
          "Hardening / revision de seguridad (Next.js): $9,900 - $39,900",
          "Monitoreo + hardening: $1,900 - $7,900 / mes",
          "Mantenimiento (Care): desde $1,490 / mes",
        ],
      },
    ],
  },
  structure: {
    title: "Ejemplo de estructura ganadora (secciones sugeridas)",
    landingSteps: [
      "Hero (propuesta clara + CTA)",
      "Beneficios (3-6 puntos concretos)",
      "Servicios/paquetes (o solucion)",
      "Casos/portafolio (prueba social)",
      "Proceso",
      "FAQs",
      "CTA final + contacto",
    ],
    pymeIntro: "Un sitio PyME suele sumar:",
    pymeBullets: [
      "Seccion 'para quien es'",
      "Comparativa / paquetes",
      "Mas prueba social (logos, testimonios, casos)",
      "Captacion (agenda / formulario)",
      "Recursos / lead magnet",
    ],
  },
  tech: {
    title: "Tech (sin marear) - que estas comprando realmente?",
    bullets: [
      "Next.js (base moderna para performance + escalabilidad).",
      "TypeScript (menos bugs, mas mantenible).",
      "Tailwind CSS + UI consistente (ej: shadcn/ui).",
      "Accesibilidad y buenas practicas (semantica, UX).",
      "Deploy en infraestructura moderna (CDN) para velocidad global.",
      "Opcional: CMS headless (WordPress u otro) para contenido editable.",
    ],
  },
  process: {
    title: "Proceso de trabajo",
    steps: [
      "Diagnostico (objetivo, usuarios, flujos, alcance)",
      "Arquitectura (pantallas, navegacion, modulos)",
      "UI/UX (componentes, estilo, prototipo si aplica)",
      "Desarrollo (con QA y revisiones por hitos)",
      "Lanzamiento",
      "Escala (tracking, ads, SEO mensual, nuevas fases)",
    ],
  },
  faq: [
    {
      question: "Next.js sirve para SEO?",
      answer:
        "Si. Bien implementado, te da estructura, performance y control tecnico. El SEO real crece con estrategia, contenido y medicion (opcional).",
    },
    {
      question: "Puedo tener blog editable?",
      answer:
        "Si. Lo comun es usar WordPress como CMS (headless) y Next.js como front para performance premium.",
    },
    {
      question: "Incluye GA4 y GTM?",
      answer:
        "En base, no necesariamente. Se agrega como add-on segun el nivel de medicion que necesitas (conversiones, eventos, ecommerce).",
    },
    {
      question: "Cuanto tarda un proyecto Next.js?",
      answer:
        "Depende del alcance. Una landing premium puede ser rapida si ya tienes contenido. Un dashboard/e-commerce se trabaja por fases (MVP + mejoras).",
    },
    {
      question: "Que pasa con el mantenimiento?",
      answer:
        "Puedes contratar mantenimiento mensual (updates, monitoreo, performance, soporte). Es recomendable si tu proyecto tiene integraciones o campanas activas.",
    },
  ],
  cta: {
    title: "Listo para construir algo serio y escalable?",
    description:
      "Cuentame que vendes, a quien, que necesitas (web / tienda / dashboard) y cual es el objetivo.",
    primaryCta: { label: "Cotizar Next.js", href: "https://wa.me/526631016627" },
    secondaryCta: { label: "Agendar llamada", href: "https://cal.com/" },
    whatsapp: "https://wa.me/526631016627",
    email: "contacto@rickyram.dev",
  },
} as const;
