export const homeContent = {
  hero: {
    title: "Tu sitio web debe cargar rapido, verse pro y traer clientes.",
    subtitle:
      "Creamos sitios en Astro, WordPress y Next.js segun lo que realmente necesitas: vender rapido, publicar contenido, o construir algo a medida.",
    bullets: [
      "SEO basico incluido en planes Starter.",
      "Sitio full responsive (mobile-first).",
      "Estructura pensada para conversiones (WhatsApp, formularios, llamadas).",
      "Listo para escalar con Ads, analitica y mantenimiento.",
    ],
    ctas: {
      primary: "Cotizar mi sitio",
      secondary: "Ver opciones",
      tertiary: "Prefiero hablar 15 min",
    },
    trust: [
      "Proyectos entregados con performance real",
      "Soporte y mantenimiento opcional",
      "Tijuana / Remoto",
    ],
  },
  solutions: {
    title: "Tres formas de construir tu web (sin drama tecnico).",
    intro:
      "No todo negocio necesita lo mismo. Te guiamos con una analogia simple.",
    cards: [
      {
        title: "Astro",
        subtitle: "Casa ligera prefabricada de lujo",
        text: "Ideal para sitios de marketing que necesitan velocidad, SEO y conversion sin complicaciones.",
        idealFor: "Landing, servicios, portafolio, campanas.",
        priceFrom: "$7,900 MXN",
        href: "/soluciones/astro",
      },
      {
        title: "WordPress",
        subtitle: "Casa modular con cuarto de herramientas",
        text: "Perfecto si tu equipo quiere editar contenido facil y publicar seguido.",
        idealFor: "Sitios con blog, catalogos simples, operacion diaria.",
        priceFrom: "$8,900 MXN",
        href: "/soluciones/wordpress",
      },
      {
        title: "Next.js",
        subtitle: "Edificio a medida con ingenieria",
        text: "Para experiencias premium: tiendas avanzadas, dashboards y webs escalables.",
        idealFor: "Producto digital, ecommerce headless, integraciones.",
        priceFrom: "$18,900 MXN",
        href: "/soluciones/nextjs",
      },
    ],
  },
  compare: {
    title: "Cual te conviene? (version humana)",
    columns: ["Astro", "WordPress", "Next.js"],
    rows: [
      {
        label: "Velocidad de carga",
        values: ["Alta", "Media", "Alta"],
      },
      {
        label: "Panel para editar contenido",
        values: ["Limitado", "Completo", "Opcional"],
      },
      {
        label: "Ideal para",
        values: ["Marketing", "Contenido", "Sistemas/escala"],
      },
      {
        label: "Complejidad",
        values: ["Baja", "Media", "Alta"],
      },
      {
        label: "Costo inicial",
        values: ["Bajo-medio", "Medio", "Medio-alto"],
      },
      {
        label: "Escalabilidad",
        values: ["Media", "Media", "Alta"],
      },
    ],
    conclusion:
      "Si tu meta es vender rapido, Astro. Si necesitas editar todo, WordPress. Si quieres construir producto, Next.js.",
  },
  pricing: {
    title: "Paquetes listos para arrancar (Starter)",
    subtitle:
      "Precios claros, alcance definido y SEO basico incluido. Tracking se agrega cuando quieras medir en serio.",
    cards: [
      {
        title: "Astro Starter",
        bullets: [
          "Landing: $7,900 - $12,900",
          "Sitio 5-7 secciones: $14,900 - $24,900",
          "PyME 10-12 secciones: $24,900 - $39,900",
        ],
        cta: "Ver paquetes Astro",
        href: "/soluciones/astro",
      },
      {
        title: "WordPress Starter",
        bullets: [
          "Landing: $8,900 - $14,900",
          "Sitio 5-8 paginas: $19,900 - $34,900",
          "PyME 10-15 paginas: $34,900 - $59,900",
        ],
        cta: "Ver paquetes WordPress",
        href: "/soluciones/wordpress",
      },
      {
        title: "Next.js (Premium)",
        bullets: [
          "Landing: $18,900 - $39,900",
          "Sitio: $39,900 - $89,900",
          "PyME: $89,900 - $179,900",
        ],
        cta: "Ver Next.js",
        href: "/soluciones/nextjs",
      },
    ],
    notes: [
      "Pagas por resultados y claridad, no por sorpresas.",
      "Alcances definidos = entregas rapidas.",
    ],
  },
  includes: {
    title: "Starter incluye SEO basico para que Google te entienda",
    bullets: [
      "Titles y metas por pagina",
      "Estructura H1/H2 correcta",
      "Sitemap + robots",
      "Open Graph para redes",
      "Schema basico (Organization / LocalBusiness)",
      "Optimizacion base de performance",
      "Checklist de indexacion",
    ],
    note:
      "SEO avanzado, tracking y campanas se agregan cuando tu negocio esta listo para escalar.",
  },
  services: {
    title: "Cuando tu web ya esta viva, toca hacerla crecer",
    subtitle:
      "Te acompanamos con servicios mensuales y setups puntuales para escalar.",
    cards: [
      {
        title: "SEO mensual",
        description:
          "Posicionamiento, contenido y mejoras tecnicas para crecer.",
        price: "Desde $6,900/mes",
      },
      {
        title: "Google Ads",
        description:
          "Busqueda, performance y optimizacion semanal de campanas.",
        price: "15% del gasto (min. $6,900/mes)",
      },
      {
        title: "Meta Ads",
        description: "Campanas para leads, ecommerce y remarketing.",
        price: "Desde $5,900/mes",
      },
      {
        title: "TikTok Ads",
        description: "Creatividades, pruebas A/B y optimizacion.",
        price: "Setup a medida",
      },
      {
        title: "Analitica (GA4/GTM)",
        description: "Medicion real, embudos y dashboards.",
        price: "Desde $2,900/mes",
      },
      {
        title: "Mantenimiento web",
        description: "Backups, updates y cambios mensuales.",
        price: "Desde $1,490/mes",
      },
      {
        title: "Ciberseguridad",
        description: "Hardening, monitoreo y auditorias.",
        price: "Desde $1,900/mes",
      },
      {
        title: "Chatbots + Automatizacion",
        description: "Respuestas, calificacion de leads y flujos.",
        price: "Desde $2,900/mes",
      },
    ],
  },
  portfolio: {
    title: "Trabajo real. Resultados reales.",
    subtitle: "Performance, UX y estrategia. Filtra por stack.",
    filters: ["Astro", "WordPress", "Next.js", "Tienda", "Landing", "PyME"],
    items: [
      {
        title: "Proyecto GGJ Contabilidad",
        stack: "Astro",
        bullets: [
          "Objetivo: leads para servicios",
          "Rediseño + performance + SEO basico",
          "Resultado: conversiones mas claras",
        ],
      },
      {
        title: "Proyecto Unete",
        stack: "WordPress",
        bullets: [
          "Objetivo: contenido editable",
          "Arquitectura + UX + formularios",
          "Resultado: mejor navegacion",
        ],
      },
      {
        title: "Proyecto Rickyram",
        stack: "Next.js",
        bullets: [
          "Objetivo: web premium",
          "UI kit + animaciones + SEO tecnico",
          "Resultado: experiencia consistente",
        ],
      },
    ],
  },
  blog: {
    title: "Guias practicas (sin humo)",
    subtitle: "SEO, anuncios, analitica y conversiones.",
    posts: [
      "Astro vs WordPress vs Next.js: cual elegir segun tu negocio",
      "SEO basico para negocios: lo minimo que si importa",
      "GA4 y conversiones: como dejar de adivinar",
    ],
  },
  process: {
    title: "Proceso simple, entregas claras",
    steps: [
      "Diagnostico rapido (que vendes, a quien, objetivo)",
      "Estructura y contenido (sitemap + secciones + CTA)",
      "Construccion (desarrollo + performance)",
      "Revision (ajustes dentro del alcance)",
      "Lanzamiento + crecimiento opcional",
    ],
  },
  faqs: [
    {
      question: "Que tecnologia me conviene?",
      answer:
        "Si quieres vender rapido con maxima velocidad: Astro. Si necesitas editar contenido facil: WordPress. Si necesitas funciones a medida: Next.js.",
    },
    {
      question: "Que incluye el plan Starter?",
      answer:
        "Incluye estructura, construccion full responsive y SEO basico. El tracking se agrega como add-on cuando quieras medir conversiones.",
    },
    {
      question: "Puedo usar WordPress solo para el blog?",
      answer:
        "Si. Es una combinacion excelente: Next.js para performance y WordPress como CMS para publicar.",
    },
    {
      question: "El contenido esta incluido?",
      answer:
        "Puedes entregar contenido o agregar un servicio de copy/branding como add-on.",
    },
    {
      question: "Cuantas revisiones incluye?",
      answer:
        "Los paquetes incluyen revisiones limitadas y definidas para asegurar velocidad de entrega.",
    },
    {
      question: "Ofreces mantenimiento?",
      answer:
        "Si, con planes mensuales. Recomendado especialmente para WordPress.",
    },
  ],
  finalCta: {
    title: "Quieres un sitio que se vea pro y trabaje por tu negocio?",
    text:
      "Dime que necesitas y te recomiendo el stack correcto con un plan claro.",
    primary: "Cotizar ahora",
    secondary: "Agendar llamada",
  },
} as const;
