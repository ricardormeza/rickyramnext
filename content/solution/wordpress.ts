import {
  FileText,
  Globe,
  LifeBuoy,
  Search,
  Server,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

export const wordpressMetadata = {
  title: "Sitios WordPress administrables en Mexico | Webs a medida, blog y WooCommerce",
  description:
    "Desarrollo de sitios WordPress rapidos, administrables y listos para crecer. Incluye hosting administrado + SSL el primer a¤o. Paquetes desde $450/mes o $5,000/año.",
  openGraph: {
    title: "WordPress administrable + hosting incluido 1er a¤o",
    description:
      "Sitios WordPress con dise¤o profesional, SEO base y opcion a tienda WooCommerce. Hosting administrado + SSL el primer a¤o.",
  },
} as const;

export const wordpressContent = {
  hero: {
    breadcrumbs: [
      { label: "Inicio", href: "/" },
      { label: "Soluciones", href: "/soluciones" },
      { label: "WordPress", href: "/soluciones/wordpress" },
    ],
    title: "Sitios WordPress administrables",
    descriptions: [
      "Si necesitas editar contenido facil, publicar en blog y operar tu sitio sin depender de un dev para cada cambio, WordPress es la opcion ideal.",
      "Incluye hosting administrado + SSL el primer a¤o para que tu negocio no batalle con lo tecnico.",
    ],
    bullets: [
      "Panel editable",
      "Hosting administrado + SSL 1er año",
      "Listo para blog y WooCommerce",
    ],
    ctas: [
      { label: "Ver paquetes", href: "#paquetes-y-precios" },
      { label: "Cotizar", href: "/cotizar", variant: "secondary" },
    ],
    note: "Ya tienes hosting o dominio? Me adapto a lo que ya tienes y sugiero optimizaciones de velocidad y seguridad.",
    card: {
      badgeLabel: "Wordpress",
      title: "Wordpress",
      image: {
        src: "/wordpress/hero2-wp.webp",
        alt: "Wordpress dashboard",
      },
      logo: {
        src: "/images/wordpress-logo.webp",
        alt: "WordPress",
      },
    },
  },
  trustItems: [
    { icon: Server, label: "Hosting + SSL 1er a¤o" },
    { icon: Globe, label: "Responsive" },
    { icon: Search, label: "SEO base" },
    { icon: LifeBuoy, label: "Soporte / guia de uso" },
  ],
  stickyNav: [
    { label: "Overview", href: "#overview" },
    { label: "Precios", href: "#paquetes-y-precios" },
    { label: "Hosting", href: "#hosting" },
    { label: "Tiendas", href: "#tiendas" },
    { label: "Add-ons", href: "#add-ons" },
    { label: "FAQ", href: "#faq" },

  ],
  whoIsItFor: {
    title: "Para quien es WordPress?",
    goodTitle: "WordPress te conviene si:",
    goodList: [
      "Publicas contenido seguido (blog, noticias, servicios).",
      "Quieres que tu equipo edite textos e imagenes sin tocar codigo.",
      "Necesitas integraciones tipicas (WhatsApp, Maps, formularios).",
      "Quieres crecer a tienda en linea con WooCommerce.",
    ],
    badTitle: "WordPress no es ideal si:",
    badList: [
      {
        text: "Necesitas funcionalidades tipo app (dashboard complejo, roles avanzados). En ese caso te conviene",
        link: { label: "Next.js", href: "/soluciones/nextjs" },
        suffix: ".",
      },
      {
        text: "Buscas performance extrema sin panel; considera",
        link: { label: "Astro", href: "/soluciones/astro" },
        suffix: ".",
      },
    ],
    helpLink: { label: "Ayudame a elegir", href: "/soluciones" },
  },
  whoIsItForCardItems: [
    { icon: FileText, label: "Editar" },
    { icon: Sparkles, label: "Publicar" },
    { icon: ShoppingCart, label: "Vender" },
  ],
  benefits: [
    {
      title: "Panel autoadministrable",
      text: "Tu equipo edita textos e imagenes sin tocar codigo.",
    },
    {
      title: "Publicacion facil",
      text: "Ideal para campa¤as, blog y contenido constante.",
    },
    {
      title: "Ecosistema enorme",
      text: "Integraciones listas para casi todo lo que necesites.",
    },
    {
      title: "WooCommerce listo",
      text: "Catalogo, carrito y pagos con base confiable.",
    },
    {
      title: "SEO solido",
      text: "Estructura, contenidos y performance bien trabajados.",
    },
    {
      title: "Escalable",
      text: "Crecimiento ordenado sin rehacer todo el sitio.",
    },
  ],
  includes: {
    title: "Que incluye (base en planes anuales)",
    includeList: [
      "Diseño profesional (a medida o plantilla premium optimizada)",
      "WordPress + configuracion base",
      "Responsive (movil / tablet / escritorio)",
      "Integracion WhatsApp + Maps (cuando aplique)",
      "Formularios (segun plan)",
      "Hosting administrado + SSL el primer año",
      "Correo profesional (segun plan)",
      "SEO base (titles/metas, estructura Hs, sitemap/robots, OG basico)",
    ],
    notIncludedTitle: "No incluido (add-ons)",
    notIncluded: [
      "Tracking avanzado (GA4 + GTM + conversiones/eventos)",
      "SEO avanzado (auditoria profunda, estrategia, contenido mensual)",
      "Automatizaciones, CRM e integraciones complejas",
      "Hardening avanzado / monitoreo",
    ],
    note: "Nota honesta: WordPress puede volverse pesado si se abusa de plugins. Aqui trabajamos con lo necesario y performance cuidado.",
    link: { label: "Ver add-ons", href: "#add-ons" },
  },
  pricing: {
    title: "Paquetes y precios",
    description:
      "Precios en MXN. La propuesta final depende de paginas, integraciones y contenido.",
    plans: [
      {
        title: "Plan Express",
        price: "$450 / mes",
        description: "Para validar oferta rapido.",
        bullets: [
          "1 pagina en subdominio",
          "Hasta 4 secciones",
          "Mapa + redes",
          "Ideal para tener presencia digital",
        ],
        cta: "Empezar con Express",
        href: "/cotizar?tab=web&tech=wordpress&plan=plan-express",
      },
      {
        title: "Landing Start",
        price: "$5,900 / año",
        description: "Landing con SEO base.",
        bullets: [
          "One-page",
          "Diseño semi custom o plantilla optimizada",
          "1 formulario",
          "1 cuenta de correo",
          "SEO base + seguridad esencial",
          "Hosting administrado incluido 1er a¤o",
        ],
        cta: "Quiero mi Landing",
        href: "/cotizar?tab=web&tech=wordpress&plan=landing-start",
      },
      {
        title: "Sitio Profesional",
        price: "$7,900 / año",
        badge: "Mas elegido",
        description: "El balance ideal para negocios.",
        bullets: [
          "Diseño semi custom o plantilla optimizada",
          "Hasta 6 paginas",
          "WhatsApp + Maps",
          "2 formularios",
          "3 cuentas de correo",
          "SEO base + seguridad esencial",
          "Hosting administrado incluido 1er año",
        ],
        cta: "Elegir Sitio Profesional",
        href: "/cotizar?tab=web&tech=wordpress&plan=sitio-profesional",
      },
      {
        title: "Presencia Online",
        price: "$10,500 / año",
        badge: "Para medir resultados",
        description: "Presencia con analitíca básica.",
        bullets: [
          "Diseño semi custom o plantilla optimizada",
          "Hasta 8 páginas",
          "SEO basico + optimizacion",
          "Hasta 3 formularios",
          "GA basico (sin eventos avanzados)",
          "Integracion para Redes Sociales",
          "4 cuentas de correo",
          "Hosting administrado incluido 1er año",
        ],
        cta: "Quiero Presencia Online",
        href: "/cotizar?tab=web&tech=wordpress&plan=presencia-online",
      },
    ],
  },
  sitePlans: [
    {
      label: "Precio",
      values: ["$450/mes", "$5,900/año", "$7,900/año", "$10,500/año"],
    },
    {
      label: "Tipo",
      values: ["1 pagina", "1 Página", "Hasta 6 Páginas", "Hasta 8 Páginas"],
    },
    {
      label: "Páginas / Secciones",
      values: [
        "Hasta 4 secciones",
        "One-page con hasta 6 secciones",
        "Hasta 6 páginas",
        "Hasta 8 páginas",
      ],
    },
    {
      label: "Diseño",
      values: [
        "Plantilla",
        "Plantilla optimizada",
        "Plantilla / semi custom",
        "Plantilla / semi custom",
      ],
    },
    {
      label: "Formularios",
      values: ["-", "1", "2", "Hasta 4"],
    },
    {
      label: "Integraciones",
      values: ["2 redes", "Maps + 2 redes sociales", "WhatsApp + Maps + Redes sociales", "WhatsApp/Maps + social"],
    },
    {
      label: "Correos profesionales con dominio y capacidad de hasta 3GB",
      values: ["-", "-", "2", "3"],
    },
    {
      label: "SEO",
      values: ["Base", "Base", "Básico", "SEO Avanzado + optimizacion"],
    },
    {
      label: "AnalÍtica",
      values: ["-", "-", "GA4 Básico", "GA4 Básico + optimización"],
    },
    {
      label: "Ideal para",
      values: [
        "Presencia digital rapida",
        "Campañas / leads",
        "Emprendimiento ó PyME",
        "Medicion, presencia y crecimiento",
      ],
    },
    {
      label: "Hosting administrado + SSL 1er año",
      values: ["Incluido", "Incluido", "Incluido", "Incluido"],
    },
  ],
  storePlans: [
    {
      label: "Precio",
      values: ["Desde $19,900/año", "Desde $37,700/año"],
    },
    {
      label: "Tipo",
      values: ["WooCommerce + marketing", "Ecommerce premium"],
    },
    {
      label: "Productos (carga inicial)",
      values: ["Hasta 12 productos", "Definido por alcance"],
    },
    {
      label: "Diseño",
      values: ["Tienda optimizada", "Diseño personalizado"],
    },
    {
      label: "SEO",
      values: ["SEO avanzado (base)", "SEO + enfoque branding"],
    },
    {
      label: "Analitica",
      values: ["GA Básico", "GA Básico con eventos"],
    },
    {
      label: "Marketing/Contenido",
      values: ["Landing + piezas", "Estrategia + publicidad"],
    },
    {
      label: "Ideal para",
      values: ["Vender online", "Escalar marca"],
    },
    {
      label: "Hosting administrado + SSL 1er año",
      values: ["Incluido", "Incluido"],
    },
  ],
  hosting: {
    title: "Hosting administrado + SSL incluidos el primer año",
    description:
      "Si ya tienes hosting o dominio, me adapto y te propongo optimizaciones de performance, cache y seguridad.",
    cta: { label: "Cotizar sin complicaciones", href: "/cotizar" },
  },
  stores: {
    title: "Tiendas en linea con WooCommerce",
    description: "Para vender con base solida y sin friccion.",
    cards: [
      {
        title: "Mi Tienda Online",
        badge: "Popular",
        price: "$19,900 / año",
        bullets: [
          "Incluye Presencia Online +",
          "Tienda WooCommerce",
          "Hasta 12 productos (carga inicial)",
          "SEO avanzado (base)",
          "GA Básico con eventos (segun alcance)",
          "Hosting incluido 1er año",
          "1 Cuenta de correo de 3GB",
        ],
        cta: {
          label: "Cotizar mi tienda",
          href: "/cotizar?tab=web&tech=wordpress&plan=mi-tienda-online",
        },
      },
      {
        title: "Corporativo Elite",
        price: "Desde $37,700 / año",
        bullets: [
          "Diseño personalizado",
          "GA avanzado con eventos",
          "Branding + diseño grafico (segun alcance)",
          "Publicidad digital (segun acuerdo)",
          "Hosting incluido 1er año",
        ],
        cta: {
          label: "Armar propuesta corporativa",
          href: "/cotizar?tab=web&tech=wordpress&plan=corporativo-elite",
          variant: "secondary",
        },
      },
    ],
  },
  process: {
    title: "Proceso de trabajo",
    description: "Asi trabajamos para entregar rapido y sin friccion.",
    steps: [
      "Brief (objetivo, audiencia, oferta)",
      "Arquitectura del sitio (paginas, navegacion, prioridades)",
      "Dise¤o (a medida o plantilla optimizada)",
      "Desarrollo + QA (responsive, performance, SEO base)",
      "Publicacion + guia de uso",
    ],
    link: { label: "Agendar llamada", href: "#agendar" },
  },
  addOns: {
    title: "Add-ons y servicios recurrentes",
    description: "Personaliza el plan con tracking, SEO o mantenimiento mensual.",
    addOns: [
      "Tracking Lite (GA4 sin GTM, 1 conversion): $1,500 - $3,000",
      "Tracking Standard (GA4 + GTM + 3-5 conversiones): $3,500 - $7,900",
      "Ecommerce Tracking: $12,900 - $29,000+",
      "Auditoria SEO: Emprendedor $4,900 | PyME $12,900 | Empresa $29,900",
      "Google Ads Setup: $6,900 - $19,900",
      "Meta Ads Setup: $4,900 - $14,900",
      "TikTok Ads Setup: $4,900 - $14,900",
      "Hardening inicial WordPress: $6,900 - $24,900",
    ],
    recurring: [
      "Mantenimiento (updates + backups + uptime): desde $1,490 / mes",
      "Monitoreo + hardening: $1,900 - $7,900 / mes",
      "SEO mensual: $6,900 - $29,900 / mes",
      "Manejo de Ads: 15% del gasto (min. $6,900 / mes)",
      "Analitica + reporting: $2,900 - $12,900 / mes",
    ],
    cta: { label: "Armar paquete a medida", href: "/cotizar" },
  },
  faqs: [
    {
      question: "Voy a poder editar mi sitio yo mismo?",
      answer:
        "Si. WordPress incluye un panel para que puedas editar textos, imagenes y secciones sin tocar codigo. Te lo entrego con una estructura facil de administrar y una guia rapida.",
    },
    {
      question: "¿Qué incluye el hosting 1er año?",
      answer:
        "Incluye hosting administrado + SSL durante el primer año para que no batalles con lo tecnico. Normalmente es un entorno compartido, ideal para la mayoria de sitios informativos, landings y PyMEs. Si el proyecto requiere mas rendimiento (tienda con tráfico alto, muchos plugins o campañas fuertes), te sugiero upgrade a un plan superior.",
    },
    {
      question: "Y si ya tengo dominio o hosting?",
      answer:
        "No hay problema. Me adapto a tu proveedor actual, reviso el entorno y te recomiendo optimizaciones (cache, seguridad, CDN si aplica) para mejorar velocidad y estabilidad.",
    },
    {
      question: "¿WordPress es lento?",
      answer:
        "Puede serlo si se usan plantillas pesadas y demasiados plugins. Por eso trabajamos con enfoque a performance: plugins minimos, optimizacion de imagenes y buenas practicas. Resultado: un sitio rapido y estable para tu negocio.",
    },
    {
      question: "¿Qué incluye el SEO basico?",
      answer:
        "Incluye configuracion esencial para posicionamiento: titles/metas, estructura H1/H2, sitemap/robots, Open Graph para redes y schema basico. El SEO avanzado (investigacion de keywords, estrategia y contenido mensual) se maneja como add-on o servicio recurrente.",
    },
    {
      question: "Incluye Google Analytics (GA4) y Tag Manager (GTM)?",
      answer:
        "Depende del plan. En planes básicos puede ir sin tracking avanzado. Si necesitas medir resultados (leads, clicks, formularios, WhatsApp), recomiendo agregar GA4 + GTM + conversiones como add-on.",
    },
    {
      question: "Puedo tener blog y que mi equipo publique contenido?",
      answer:
        "Si. Ese es uno de los puntos fuertes de WordPress: tu equipo puede publicar articulos, editar paginas y actualizar secciones con facilidad.",
    },
    {
      question: "¿Puedo vender en línea con WordPress?",
      answer:
        "Si, con WooCommerce. Podemos hacer desde una tienda basica hasta una avanzada con variaciones, cupones, envios y optimizacion de checkout segun tu operación.",
    },
    {
      question: "¿Cuántas páginas/secciones incluye cada plan?",
      answer:
        "Cada plan tiene un alcance recomendado (por ejemplo: landing, 6 páginas, etc.). Si necesitas mas páginas, idiomas, secciones especiales o funcionalidades extra, se cotiza como ampliacion para mantener tiempos y calidad.",
    },
    {
      question: "Incluye contenido (textos e imagenes)?",
      answer:
        "El plan incluye la estructura y carga del contenido que nos entregues. Si necesitas copywriting, seleccion de imagenes, fotografia o branding, se puede agregar como servicio add-on.",
    },
    {
      question: "¿Cuánto tarda en estar listo?",
      answer:
        "Depende del plan y de que tan listo este el contenido. Una landing puede ser rapida; un sitio con varias paginas o tienda toma mas. Al iniciar te doy un timeline estimado y puntos de revisión.",
    },
    {
      question: "¿Cuántas revisiones incluye?",
      answer:
        "Incluimos revisiones por ronda (por ejemplo: 1-2 rondas segun paquete). Cambios fuera de alcance o nuevas secciones se cotizan aparte para evitar retrasos.",
    },
    {
      question: "¿Qué pasa con seguridad y actualizaciones?",
      answer:
        "WordPress necesita mantenimiento (updates, plugins, respaldos). Puedes quedarte con el sitio y gestionarlo, o contratar mantenimiento mensual para actualizaciones, backups, monitoreo y soporte.",
    },
    {
      question: "¿El sitio sera 100% responsive?",
      answer:
        "Si. Se entrega full responsive: movil, tablet y desktop, con pruebas en resoluciones estandar.",
    },
    {
      question: "¿El sitio sera mio? Tendre acceso?",
      answer:
        "Si. El sitio es tuyo. Tendras accesos (admin) y, si lo deseas, te entrego una guia basica para administracion y buenas practicas.",
    },
    {
      question: "¿Pueden migrar mi WordPress actual o rediseñarlo sin perder SEO?",
      answer:
        "Si. Podemos migrar o rediseñar cuidando URLs, redirecciones y estructura para no perder posicionamiento (segun auditoria previa).",
    },
    {
      question: "¿Puedo usar WordPress solo para el blog y el sitio en Next/Astro?",
      answer:
        "Si. Es una opcion muy buena: WordPress como CMS (headless) para contenido y Next/Astro para front rapido y moderno.",
    },
  ],
  finalCta: {
    title: "Dime que necesitas y te propongo el plan ideal",
    description: "Cotiza en minutos y recibe una propuesta clara.",
    primaryCta: { label: "Solicitar cotizacion", href: "/cotizar" },
    secondaryCta: { label: "Agendar llamada", href: "#agendar" },
  },
  agendar: {
    title: "¿Lo vemos en 15 minutos?",
    description:
      "Te digo cual plan te conviene y que add-ons valen la pena para tu objetivo.",
    cta: { label: "Agendar videollamada", href: "https://cal.com/" },
  },
} as const;







