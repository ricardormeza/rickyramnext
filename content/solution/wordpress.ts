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
    "Desarrollo de sitios WordPress rapidos, administrables y listos para crecer. Incluye hosting administrado + SSL el primer a¤o. Paquetes desde $450/mes o $5,000/a¤o.",
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
      "Hosting + SSL 1er a¤o",
      "Listo para blog y WooCommerce",
    ],
    ctas: [
      { label: "Ver paquetes", href: "#paquetes-y-precios" },
      { label: "Cotizar", href: "#cotizar", variant: "secondary" },
    ],
    textLink: { label: "Agendar llamada", href: "#agendar" },
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
    { label: "Cotizar", href: "#cotizar" },
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
      "Dise¤o profesional (a medida o plantilla premium optimizada)",
      "WordPress + configuracion base",
      "Responsive (movil / tablet / escritorio)",
      "Integracion WhatsApp + Maps (cuando aplique)",
      "Formularios (segun plan)",
      "Hosting administrado + SSL el primer a¤o",
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
          "Ideal para salir rapido",
        ],
        cta: "Empezar con Express",
        href: "/soluciones/wordpress?plan=express#cotizar",
      },
      {
        title: "Landing Start",
        price: "$5,000 / a¤o",
        description: "Landing anual con SEO base.",
        bullets: [
          "One-page",
          "WordPress + SSL",
          "1 formulario",
          "1 cuenta de correo",
          "SEO base + seguridad esencial",
          "Hosting incluido 1er a¤o",
        ],
        cta: "Quiero mi Landing",
        href: "/soluciones/wordpress?plan=landing#cotizar",
      },
      {
        title: "Sitio Profesional",
        price: "$8,000 / a¤o",
        badge: "Mas elegido",
        description: "El balance ideal para negocios.",
        bullets: [
          "Hasta 6 paginas",
          "WhatsApp + Maps",
          "2 formularios",
          "3 cuentas de correo",
          "SEO base + seguridad esencial",
          "Hosting incluido 1er a¤o",
        ],
        cta: "Elegir Sitio Profesional",
        href: "/soluciones/wordpress?plan=profesional#cotizar",
      },
      {
        title: "Presencia Online",
        price: "$10,500 / a¤o",
        badge: "Para medir resultados",
        description: "Presencia con analitica basica.",
        bullets: [
          "Sitio WordPress completo",
          "SEO basico + optimizacion",
          "GA basico (sin eventos avanzados)",
          "OG basico para redes",
          "4 cuentas de correo",
          "Hosting incluido 1er a¤o",
        ],
        cta: "Quiero Presencia Online",
        href: "/soluciones/wordpress?plan=presencia#cotizar",
      },
    ],
  },
  sitePlans: [
    {
      label: "Precio",
      values: ["$450/mes", "$5,000/a¤o", "$8,000/a¤o", "$10,500/a¤o"],
    },
    {
      label: "Tipo",
      values: ["1 pagina", "One-page", "Sitio", "Sitio + analitica"],
    },
    {
      label: "Paginas / Secciones",
      values: [
        "Hasta 4 secciones",
        "One-page",
        "Hasta 6 paginas",
        "Segun estructura",
      ],
    },
    {
      label: "Dise¤o",
      values: [
        "Plantilla optimizada",
        "Plantilla optimizada",
        "Plantilla / semi custom",
        "Plantilla / semi custom",
      ],
    },
    {
      label: "Formularios",
      values: ["Basico", "1", "2", "Segun necesidad"],
    },
    {
      label: "Integraciones",
      values: ["Maps + redes", "Base", "WhatsApp + Maps", "WhatsApp/Maps + social"],
    },
    {
      label: "Correos profesionales",
      values: ["-", "1", "3", "4"],
    },
    {
      label: "SEO",
      values: ["Base", "Base", "Base", "SEO basico + optimizacion"],
    },
    {
      label: "Analitica",
      values: ["-", "-", "-", "GA basico"],
    },
    {
      label: "Ideal para",
      values: [
        "Validar oferta",
        "Campa¤as / leads",
        "Negocios 5-6 secciones",
        "Medicion y presencia",
      ],
    },
    {
      label: "Hosting + SSL 1er a¤o",
      values: ["Incluido", "Incluido", "Incluido", "Incluido"],
    },
  ],
  storePlans: [
    {
      label: "Precio",
      values: ["$19,900/a¤o", "$37,700/a¤o"],
    },
    {
      label: "Tipo",
      values: ["WooCommerce + marketing", "Ecommerce premium"],
    },
    {
      label: "Productos (carga inicial)",
      values: ["Hasta 15 productos", "Definido por alcance"],
    },
    {
      label: "Dise¤o",
      values: ["Tienda optimizada", "Dise¤o personalizado"],
    },
    {
      label: "SEO",
      values: ["SEO avanzado (base)", "SEO + enfoque brand"],
    },
    {
      label: "Analitica",
      values: ["GA avanzado con eventos", "GA avanzado con eventos"],
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
      label: "Hosting + SSL 1er a¤o",
      values: ["Incluido", "Incluido"],
    },
  ],
  hosting: {
    title: "Hosting administrado + SSL incluidos el primer a¤o",
    description:
      "Si ya tienes hosting o dominio, me adapto y te propongo optimizaciones de performance, cache y seguridad.",
    cta: { label: "Cotizar sin complicaciones", href: "#cotizar" },
  },
  stores: {
    title: "Tiendas en linea con WooCommerce",
    description: "Para vender con base solida y sin friccion.",
    cards: [
      {
        title: "Mi Tienda Online",
        badge: "Popular",
        price: "$19,900 / a¤o",
        bullets: [
          "Incluye Presencia Online +",
          "Tienda WooCommerce",
          "Hasta 15 productos (carga inicial)",
          "SEO avanzado (base)",
          "GA avanzado con eventos (segun alcance)",
          "Hosting incluido 1er a¤o",
        ],
        cta: { label: "Cotizar mi tienda", href: "#cotizar" },
      },
      {
        title: "Corporativo Elite",
        price: "$37,700 / a¤o",
        bullets: [
          "Dise¤o personalizado",
          "GA avanzado con eventos",
          "Branding + dise¤o grafico (segun alcance)",
          "Publicidad digital (segun acuerdo)",
          "Hosting incluido 1er a¤o",
        ],
        cta: { label: "Armar propuesta corporativa", href: "#agendar", variant: "secondary" },
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
    cta: { label: "Armar paquete a medida", href: "#cotizar" },
  },
  finalCta: {
    title: "Dime que necesitas y te propongo el plan ideal",
    description: "Cotiza en minutos y recibe una propuesta clara.",
    primaryCta: { label: "Solicitar cotizacion", href: "#cotizar" },
    secondaryCta: { label: "Agendar llamada", href: "#agendar" },
  },
  quote: {
    title: "Cotizar",
    description: "Cuentame que quieres construir y te propongo el paquete ideal.",
    fields: {
      name: "Nombre",
      email: "Email",
      project: "Tipo de sitio, secciones, objetivo...",
    },
    submitLabel: "Solicitar cotizacion",
    whatsappLabel: "Cotizar por WhatsApp",
    note: "Respuesta en 24-48h habiles. Si ya tienes hosting, lo reviso contigo.",
    sidebarTitle: "Datos para cotizar",
    sidebarList: [
      "Tipo: landing / sitio / blog / tienda",
      "Secciones aproximadas",
      "Objetivo: leads / ventas / agenda / contenido",
      "Necesitas blog o productos?",
      "Ya tienes dominio/hosting?",
    ],
  },
  agendar: {
    title: "Lo vemos en 15 minutos?",
    description:
      "Te digo cual plan te conviene y que add-ons valen la pena para tu objetivo.",
    cta: { label: "Agendar llamada", href: "https://cal.com/" },
  },
};
