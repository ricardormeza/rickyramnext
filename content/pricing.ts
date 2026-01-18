export const preciosContent = {
  seo: {
    title:
      "Precios de sitios web en México: Landing, Sitio Básico, PyME y Tienda | Astro, WordPress y Next.js",
    description:
      "Elige el tipo de proyecto y compara precios por tecnología (Astro, WordPress, Next.js). Rangos claros, qué incluye cada plan y add-ons opcionales: SEO, GA4/GTM, Ads, automatización y seguridad.",
  },

  hero: {
    kicker: "Precios",
    title: "Encuentra el plan ideal según tu objetivo y presupuesto",
    lead:
      "Selecciona tu tipo de sitio (Landing, Básico, PyME o Tienda) y verás rangos por tecnología. Paquetes listos para lanzar: elige tu proyecto y compara por tecnología.",
    ctas: [
      { label: "Cotizar", href: "#recomendador" },
      { label: "Agendar videollamada", href: "#agendar" },
    ],
    note:
      "Rangos guía en MXN. El precio final depende de alcance, contenido, integraciones y tiempos. precios con IVA.*",
  },

  tabs: {
    title: "Selecciona tu tipo de proyecto",
    note:
      "Cada pestaña muestra 3 opciones (Astro, WordPress, Next.js) para el mismo tipo de sitio.",
    items: [
      {
        id: "landing",
        label: "Landing",
        subtitle: "Una página enfocada a conversión",
        description:
          "Ideal para campañas, captación de leads y un mensaje claro. Diseño + copy base + CTA + formulario.",
        cards: [
          {
            tech: "Astro",
            badge: "Rendimiento + SEO",
            plan: "landing-starter",
            title: "Landing Starter (Astro)",
            price: "$6,900",
            idealFor: "Campañas, servicios, portafolio, oferta directa.",
            includes: [
              "1 página (6 secciones)",
              "Dsieño en base a plantilla personalizable",
              "Diseño responsive",
              "SEO básico on-page",
              "Formulario (o WhatsApp)",
              "Vinculos a 3 redes sociales",
            ],
            timeline: "7 a 12 días hábiles",
            cta: { label: "Ver Astro", href: "/soluciones/astro" },
          },
          {
            tech: "WordPress",
            badge: "Editable + flexible",
            plan: "landing-starter",
            title: "Landing Starter (WordPress)",
            price: "$5,900 ",
            idealFor: "Landing que tu equipo quiere editar fácil.",
            includes: [
              "1 página (6 a 7 secciones)",
              "Diseño en base a plantilla personalizable + responsive",
              "SEO básico on-page",
              "Formulario + whatsapp",
              "Vinculos a 3 redes sociales",
              "Panel autoadministrable",
            ],
            timeline: "10 a 15 días hábiles",
            cta: { label: "Ver WordPress", href: "/soluciones/wordpress" },
          },
          {
            tech: "Next.js",
            badge: "Custom + escalable",
            plan: "landing-starter",
            title: "Landing Starter (Next.js)",
            price: "$12,900",
            idealFor: "Marca premium, animaciones finas, performance top.",
            includes: [
              "1 landing custom (diseño en base a plantilla personalizable)",
              "Responsive + performance",
              "SEO técnico base + OG",
              "Componentes reutilizables",
              "Formulario + whatsapp",
              "vinculos a 3 redes sociales",
              "Base lista para crecer",
            ],
            timeline: "15 a 20 días hábiles",
            cta: { label: "Ver Next.js", href: "/soluciones/nextjs" },
          },
        ],
      },

      {
        id: "sitio-basico",
        label: "Sitio Básico",
        subtitle: "Presencia sólida para vender servicios",
        description:
          "Sitio multipágina simple para presentar servicios, confianza y captación de leads.",
        cards: [
          {
            tech: "Astro",
            badge: "Rápido + ligero",
            plan: "sitio-basico",
            title: "Sitio Básico Starter (Astro)",
            price: "$8,900",
            idealFor: "Servicios, portafolio, negocio local, captación.",
            includes: [
              "5 a 6 Páginas (Inicio, Servicios, Sobre mí, Promoción, Contacto)",
              "Diseño en base a plantilla personalizable + responsive",
              "SEO básico (estructura + metas)",
              "Performance optimizado",
              "2 Formularios + WhatsApp",
              "Ubicación con mapa integrado",
              "Vínculos a redes sociales",
              "2 Cuentas de correo electrónico de 3 GB.",
            ],
            timeline: "3 a 4 semanas",
            cta: { label: "Ver Astro", href: "/soluciones/astro" },
          },
          {
            tech: "WordPress",
            badge: "Panel para editar",
            plan: "sitio-basico",
            title: "Sitio Básico Starter (WordPress)",
            price: "$7,900",
            idealFor: "Negocio que actualiza contenido sin depender de dev.",
            includes: [
              "5 a 6 páginas (Inicio, Servicios, Sobre mí, Blog, Contacto)",
              "Diseño moderno + responsive",
              "SEO básico on-page",
              "Panel autoadministrable",
              "Ubicación con mapa integrado",
              "Vínculos a redes sociales",
              "2 Formularios + WhatsApp",
              "2 Cuentas de correo electrónico de 3 GB.",
            ],
            timeline: "2 a 3 semanas",
            cta: { label: "Ver WordPress", href: "/soluciones/wordpress" },
          },
          {
            tech: "Next.js",
            badge: "UX premium",
            plan: "sitio-basico",
            title: "Sitio Básico (Next.js)",
            price: "$16,900",
            idealFor: "Experiencia premium y base lista para integraciones.",
            includes: [
              "6 a 7 Páginas (Inicio, Servicios, Sobre mí, FAQS, Portafolio, Contacto)",
              "Responsive + performance top",
              "SEO técnico + OG",
              "Componentes prediseñados reutilizables",
              "Animaciones más Pro",
              "2 Formularios + WhatsApp",
              "Vínculos a redes sociales",
              "Base escalable (features futuras)",
              "2 Cuentas de correo electrónico de 3 GB.",
            ],
            timeline: "4 a 6 semanas",
            cta: { label: "Ver Next.js", href: "/soluciones/nextjs" },
          },
        ],
      },

      {
        id: "sitio-pyme",
        label: "Sitio PyME",
        subtitle: "Estructura robusta para crecer",
        description:
          "Para empresas en crecimiento que necesitan más páginas, estructura clara y escalabilidad.",
        cards: [
          {
            tech: "Astro",
            badge: "Velocidad + claridad",
            plan: "pyme-starter",
            title: "PyME Starter (Astro)",
            price: "$14,900",
            idealFor: "Empresa con varias líneas de servicio y foco en performance.",
            includes: [
              "10 a 12 Páginas",
              "Diseño en base a plantilla + responsive",
              "Estructura de navegación robusta",
              "SEO básico + schema base",
              "Optimización de performance",
              "4 Formularios + WhatsApp",
              "Secciones listas para expansión",
              "4 Vinculos a redes sociales",
              "Ubicación con mapa integrado",
              "5 Cuentas de correo electrónico de 3 GB. C/U.",
            ],
            timeline: "4 a 6 semanas",
            cta: { label: "Ver Astro", href: "/soluciones/astro" },
          },
          {
            tech: "WordPress",
            badge: "Contenido + operación",
            plan: "pyme-starter",
            title: "PyME Starter (WordPress)",
            price: "$12,900",
            idealFor: "PyME con blog, casos, equipo y contenido frecuente.",
            includes: [
              "10 a 12 páginas",
              "Diseño en base a plantilla + responsive",
              "SEO básico + estructura",
              "Panel autoadministrable",
              "Base preparada para blog/crecimiento",
              "4 Formularios + WhatsApp",
              "4 Vinculos a redes sociales",
              "Ubicación con mapa integrado",
              "5 Cuentas de correo electrónico de 3 GB. C/U.",
            ],
            timeline: "4 a 6 semanas",
            cta: { label: "Ver WordPress", href: "/soluciones/wordpress" },
          },
          {
            tech: "Next.js",
            badge: "Producto/escala",
            plan: "pyme-starter",
            title: "PyME (Next.js custom)",
            price: "$22,900",
            idealFor: "Marca seria con necesidades técnicas y crecimiento.",
            includes: [
              "8 a 10 Páginas",
              "Diseño en base a plantilla + responsive",
              "Estructura custom avanzada",
              "Performance + SEO técnico",
              "Componentes reutilizables",
              "3 Formularios + WhatsApp",
              "2 Vinculos a redes sociales",
              "Ubicación con mapa integrado",
              "4 Cuentas de correo electrónico de 3 GB. C/U.",
            ],
            timeline: "6 a 8 semanas",
            cta: { label: "Ver Next.js", href: "/soluciones/nextjs" },
          },
        ],
      },

      {
        id: "tienda-basica",
        label: "Tienda Básica",
        subtitle: "Vender online con base sólida",
        description:
          "Catálogo + carrito/checkout + pagos/envíos básicos. La opción ideal depende de tu catálogo, logística y crecimiento.",
        cards: [
          {
            tech: "Astro",
            badge: "Catálogo rápido",
            plan: "tienda-basica",
            title: "Tienda Básica (Astro + plataforma)",
            price: "A cotizar",
            idealFor:
              "Catálogo + checkout externo (Shopify/Stripe links) con performance top.",
            includes: [
              "Catálogo / páginas de producto (según plataforma)",
              "Diseño moderno + responsive",
              "SEO básico para categorías/páginas",
              "Integración de checkout externo",
              "Performance optimizado",
            ],
            timeline: "48 semanas",
            cta: { label: "Ver Astro", href: "/soluciones/astro" },
            note:
              "Astro es ideal si quieres velocidad y un catálogo hermoso; el checkout suele ir en plataforma externa.",
          },
          {
            tech: "WordPress",
            badge: "WooCommerce",
            plan: "tienda-basica",
            title: "Tienda Básica (WooCommerce)",
            price: "Desde $22,900",
            idealFor:
              "Tienda operable por equipo (productos, inventario, pedidos) con panel.",
            includes: [
              "Hasta 12 Páginas (Inicio, Catálogo, Producto, Sobre mí, FAQS, Contacto)",
              "WooCommerce configurado",
              "Diseño en base a plantilla + responsive",
              "Catálogo base + categorías",
              "Hasta 15 productos*",
              "Checkout básico + 1 método de pago (según proveedor)",
              "Responsive + SEO básico",
              "Panel para administrar productos y pedidos",
              "GA4 + GTM básico",
              "reCAPTCHA en formularios",
              "2 Cuentas de correo electrónico de 3 GB. C/U.",
            ],
            timeline: "6 a 8 semanas",
            cta: { label: "Ver WooCommerce", href: "/soluciones/wordpress" },
            note:
              "Si ya tienes hosting/dominio, me adapto y sugiero optimizaciones.",
          },
          {
            tech: "Next.js",
            badge: "E-commerce escalable",
            plan: "tienda-basica",
            title: "E-commerce (Next.js / headless)",
            price: "Desde $36,900",
            idealFor:
              "Tienda seria: performance, integraciones, crecimiento tipo producto.",
            includes: [
              "Hasta 12 Páginas (Inicio, Catálogo, Producto, Sobre mí, FAQS, Contacto)",
              "10 productos iniciales*",
              "Catálogo + checkout con validaciones",
              "Integración con 1 pasarela de pagos",
              "SEO técnico + performance",
              "Base escalable (roles, paneles, automatización)",
              "QA y despliegue profesional",
              "GA4 + GTM básico",
              "reCAPTCHA en formularios",
              "2 Cuentas de correo electrónico de 3 GB. C/U.",
            ],
            timeline: "8 a 14 semanas",
            cta: { label: "Ver Next.js", href: "/soluciones/nextjs" },
            note:
              "Ideal si tu tienda crecerá fuerte o necesitas integraciones y control avanzado.",
          },
        ],
      },
    ],
  },

  includes: {
    title: "Qué incluye (base) en todos los proyectos",
    bullets: [
      "Diseño en base a plantilla personalizable.",
      "Diseño responsive (móvil, tablet, desktop).",
      "Estructura accesible y buenas prácticas front-end.",
      "SEO básico (titles/metas, headings, sitemap/robots, OG básico).",
      "Optimización básica de performance (imágenes y carga).",
      "Mantenimiento por 3 meses**.",
    ],
    hostingNote:
      "Hosting 1er año: puede incluirse en planes WordPress/Astro (administrado). Si ya tienes hosting/dominio, me adapto y sugiero optimizaciones. En Next.js se cotiza segun alcance.",
  },

  recomendador: {
    id: "recomendador",
    title: "¿No sabes qué elegir? Te recomiendo la mejor ruta",
    lead:
      "Respóndeme esto en una llamada corta y te digo qué stack conviene y por qué (sin tecnicismos):",
    bullets: [
      "¿Tu objetivo es leads (servicios) o ventas (e-commerce)?",
      "¿Tu equipo necesita editar contenido en un panel?",
      "¿Planeas crecer a integraciones, dashboard o app?",
    ],
    cta: { label: "Agendar diagnóstico", href: "#agendar" },
  },

  addOns: {
    id: "add-ons",
    title: "Add-ons (opcionales) para potenciar resultados",
    groups: [
      {
        title: "Medición (GA4 / GTM)",
        items: [
          "Tracking Lite (GA4 sin GTM, 1 conversión): $1,500  $3,000",
          "Tracking Standard (GA4 + GTM + 35 conversiones + QA): $3,500  $7,900",
          "Tracking Ecommerce (GA4 ecommerce + dataLayer): $12,900  $29,000+",
        ],
      },
      {
        title: "SEO (más allá del básico)",
        items: [
          "Auditoría SEO: Emprendedor $6,900  PyME $12,900  Empresa $29,900",
          "SEO mensual: desde $6,900 / mes",
        ],
      },
      {
        title: "Ads (setup / management)",
        items: [
          "Setup Google Ads: $6,900  $19,900",
          "Manejo Google Ads: 15% del gasto (mín. $6,900 / mes)",
          "Setup Meta Ads / TikTok Ads: $4,900  $14,900",
        ],
      },
      {
        title: "Automatización / CRM",
        items: [
          "ManyChat (flows + integración): $7,900  $29,900",
          "Integración CRM (HubSpot/Zoho/etc.): $19,900  $79,900+",
        ],
      },
      {
        title: "Ciberseguridad",
        items: [
          "Hardening WordPress: $6,900  $24,900",
          "Anti-bots (reCAPTCHA + reglas): $1,900  $6,900",
          "WAF/CDN (mitigación DDoS): $3,900  $14,900",
        ],
      },
    ],
  },

  faqs: [
    {
      question: "¿Por qué hay rangos y no un solo precio?",
      answer:
        "Porque el costo real depende de alcance (número de secciones/páginas), contenido, integraciones (pagos, CRM), y tiempos. El rango te da claridad sin forzar un one size fits all.",
    },
    {
      question: "¿Los precios incluyen IVA?",
      answer:
        "Los rangos se muestran como guía. En la propuesta final se aclara si es +IVA o IVA incluido, según tu facturación y requerimientos.",
    },
    {
      question: "¿Incluyes hosting y dominio?",
      answer:
        "En planes WordPress/Astro puede incluirse hosting el primer año (compartido). Si ya cuentas con hosting/dominio, me adapto a lo que tienes y sugiero optimizaciones.",
    },
    {
      question: "¿Qué pasa si necesito algo fuera del plan?",
      answer:
        "Se puede cotizar como add-on o una bolsa de horas. Siempre se define antes para evitar sorpresas.",
    },
    {
      question: "¿Cuánto tarda un proyecto?",
      answer:
        "Depende del tipo (Landing vs Tienda) y de qué tan listo esté el contenido. Por eso cada plan incluye un rango de tiempo estimado.",
    },
  ],

  finalCta: {
    id: "cotizar",
    title: "¿Quieres una cotización exacta en 2448h?",
    bullets: [
      "Definimos tu tipo de proyecto y el stack ideal.",
      "Aterrizamos alcance (secciones, integraciones, contenido).",
      "Te envío propuesta con timeline y entregables claros.",
    ],
    primary: { label: "Agendar diagnóstico", href: "#agendar" },
    secondary: { label: "Ver servicios", href: "/servicios" },
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
    { label: "Soluciones Astro", href: "/soluciones/astro" },
    { label: "Soluciones WordPress", href: "/soluciones/wordpress" },
    { label: "Soluciones Next.js", href: "/soluciones/nextjs" },
    { label: "Portafolio", href: "/portafolio" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;
