export const infraestructuraServiceContent = {
  hero: {
    kicker: "Infraestructura",
  title:
      "Servicio de Infraestructura Web: dominio, DNS y correo corporativo (Google Workspace / Microsoft 365)",
    lead:
      "Que tu dominio y correo estén bien configurados evita rebotes, spam, caídas y pérdida de acceso. Configuro DNS, creo correos corporativos, migro bandejas si es necesario y dejo tu infraestructura documentada para operar sin dolores de cabeza.",
    ctas: [
      { label: "Agendar diagnóstico", href: "#agendar" },
      { label: "Auditar mi dominio/DNS", href: "#auditoria" },
      { label: "Ver paquetes", href: "#planes" },
    ],
  },

  forWho: {
    title: "¿Para quién es este servicio?",
    bullets: [
      "Quieres correos corporativos (tu@tudominio.com) y que lleguen a inbox (no a spam).",
      "Necesitas configurar o corregir DNS (A, CNAME, MX, TXT, SPF/DKIM/DMARC).",
      "Vas a migrar correos a Google Workspace o Microsoft 365 sin perder información.",
      "Tu dominio está “disperso” (registrador por un lado, DNS por otro, hosting aparte) y quieres orden.",
      "Vas a lanzar sitio/campañas y necesitas base sólida: SSL, subdominios, redirecciones, registros limpios.",
    ],
    notFor: [
      "Quieres correos corporativos sin pagar licencias cuando el proveedor lo requiere (Workspace/M365).",
      "No tienes acceso al registrador/DNS (o no puedes recuperarlo). Primero hay que recuperar control.",
      "Buscas “una cuenta más” sin definir estructura (usuarios, alias, grupos, roles).",
    ],
  },

  labels: {
    notForTitle: "Infraestructura NO es lo mejor si:",
    layersTitle: "Qué incluye (enfoque por capas)",
    layersNote:
      "Nota: una infraestructura bien hecha no se nota… porque no falla. El objetivo es estabilidad, entregabilidad de correo y control de accesos.",
    deliverablesTitle: "Entregables",
    auditPricesTitle: "Precios guía (MXN)",
    auditIncludesTitle: "Incluye",
    requirementsTitle: "¿Qué necesito para empezar?",
    requirementsNote:
      "Si ya cuentas con dominio/hosting/correos, me adapto a lo que tienes y sugiero optimizaciones. Si no, te recomiendo opciones costo-beneficio.",
    addOnsTitle: "Add-ons recomendados (para potenciar infraestructura)",
    processTitle: "Proceso de trabajo",
    contactTitle: "Agendar",
    internalLinksTitle: "Enlaces internos sugeridos (SEO + UX)",
  },

  layers: [
    {
      title: "1) Dominio y DNS (base de todo)",
      bullets: [
        "Revisión de control del dominio (registrador, DNS, accesos).",
        "Configuración/corrección de registros DNS: A, CNAME, MX, TXT, AAAA (según caso).",
        "Estandarización de subdominios (www, mail, app, etc.) y redirecciones básicas.",
        "Checklist de continuidad: quién tiene accesos y cómo recuperarlos si se pierden.",
      ],
    },
    {
      title: "2) Correo corporativo (Workspace / Microsoft 365 / proveedor actual)",
      bullets: [
        "Alta y configuración de cuentas de correo (usuarios, alias, grupos si aplica).",
        "Configuración de MX y verificación del dominio en el proveedor.",
        "Buenas prácticas de seguridad: contraseñas, MFA/2FA recomendado, roles.",
        "Configuración de clientes (web, móvil, Outlook) si se requiere (según paquete).",
      ],
    },
    {
      title: "3) Entregabilidad (SPF / DKIM / DMARC) para evitar spam",
      bullets: [
        "SPF: autorizar servidores que pueden enviar correo por tu dominio.",
        "DKIM: firma para validar que el correo no fue alterado.",
        "DMARC: política y reportes para reducir suplantación (phishing).",
        "Pruebas básicas de deliverability y recomendaciones de mejora.",
      ],
    },
    {
      title: "4) Migración y continuidad (si ya hay correos en uso)",
      bullets: [
        "Plan de migración (corte, ventanas, riesgos, comunicación).",
        "Migración de bandejas (según proveedor y volumen).",
        "Validación post-migración: envío/recepción, alias, firmas, reenvíos (si aplica).",
        "Documentación final: mapa de DNS + accesos + configuración.",
      ],
    },
  ],

  deliverables: [
    "Mapa de infraestructura (dominio, DNS, proveedor de correo, subdominios principales).",
    "DNS configurado/corregido con registros limpios y documentados.",
    "Cuentas de correo corporativo creadas (usuarios/alias según alcance).",
    "SPF + DKIM + DMARC configurados (cuando aplica) y verificados.",
    "Documento de handoff: accesos, roles, recomendaciones y guía rápida.",
  ],

  audit: {
    id: "auditoria",
    title: "Auditoría de Dominio/DNS/Correo (pago único)",
    lead:
      "Ideal si tus correos caen en spam, hay errores de DNS o no tienes claro quién controla tu dominio/infraestructura.",
    prices: [
      "Emprendedor: $1,900",
      "PyME: $3,900",
      "Empresa: $7,900",
    ],
    includes: [
      "Revisión de control del dominio (registrador/DNS) y accesos.",
      "Revisión de DNS actual (A/CNAME/MX/TXT) y conflictos comunes.",
      "Revisión de correo: MX, autenticación SPF/DKIM/DMARC (si existe).",
      "Hallazgos y riesgos (secuestro de dominio, suplantación, mala entregabilidad).",
      "Lista priorizada: quick wins (1–7 días) + plan de mejora (30 días).",
    ],
    cta: { label: "Solicitar auditoría", href: "#cotizar" },
  },

  plans: {
    id: "planes",
    title: "Paquetes de Infraestructura",
    lead:
      "Paquetes pensados para dejar dominio, DNS y correo corporativo funcionando y documentado. Las licencias de Google Workspace/Microsoft 365 se pagan directo al proveedor (si aplica).",
    cards: [
      {
        title: "Infra Starter (setup)",
        subtitle:
          "Para empezar con correos corporativos y DNS correcto (sin complicaciones).",
        bullets: [
          "1 dominio (DNS base) + registros esenciales.",
          "Creación de hasta 5 correos corporativos (usuarios o alias).",
          "Configuración MX + verificación del dominio.",
          "SPF/DKIM básico (según proveedor) + QA de envío/recepción.",
        ],
        price: "Desde $2,900 (pago único) ",
      },
      {
        title: "Infra Growth (setup + entregabilidad)",
        subtitle:
          "Para PyME: estructura más sólida, entregabilidad y documentación completa.",
        bullets: [
          "Hasta 10 correos corporativos + alias/grupos básicos.",
          "SPF + DKIM + DMARC (base) con validación.",
          "Estandarización de subdominios y redirecciones básicas.",
          "Documento de handoff + checklist de continuidad.",
        ],
        price: "Desde $6,900 (pago único) ",
      },
      {
        title: "Infra Pro (migración / multi-equipo)",
        subtitle:
          "Para empresas o migraciones: continuidad, corte controlado y soporte más cercano.",
        bullets: [
          "Migración de correos (según proveedor/volumen) con plan de corte.",
          "Estructura de usuarios/roles más completa + MFA recomendado.",
          "DMARC con política y reportes (base) + endurecimiento de configuraciones.",
          "Soporte post-migración y QA extendido.",
        ],
        price: "Desde $12,900 (pago único) + (Enterprise: a cotizar)",
      },
    ],
  },

  requirements: [
    "Nombre del dominio y quién lo administra (GoDaddy, Namecheap, Cloudflare, etc.).",
    "Acceso al registrador y/o DNS (o ayuda para recuperar acceso).",
    "Proveedor de correo deseado: Google Workspace / Microsoft 365 / actual.",
    "Lista de cuentas a crear (usuarios, alias, grupos) y convención de nombres.",
    "Si hay migración: tamaño aproximado de buzones y fecha objetivo de cambio.",
  ],

  addOns: [
    {
      title: "Migración y operación",
      items: [
        "Migración de correos (por usuario/volumen): a cotizar",
        "Configuración en dispositivos (PC/Mac/móvil/Outlook) por usuario: a cotizar",
        "Firmas corporativas estandarizadas (por equipo): a cotizar",
      ],
    },
    {
      title: "Entregabilidad avanzada",
      items: [
        "DMARC con reportes y ajustes iterativos (política gradual): a cotizar",
        "Revisión de reputación/dominios y recomendaciones anti-spoofing: a cotizar",
      ],
    },
    {
      title: "Infra web complementaria (si aplica)",
      items: [
        "SSL y redirecciones avanzadas (www/no-www, http→https): a cotizar",
        "Subdominios para apps/landing (app., go., lp.): a cotizar",
        "WAF/CDN básico (si quieres protección extra): ver /servicios/ciberseguridad",
      ],
    },
  ],

  processSteps: [
    "Diagnóstico (dominio, DNS, proveedor de correo, riesgos y objetivo).",
    "Diseño de estructura (usuarios, alias, grupos, convención y seguridad).",
    "Implementación DNS + verificación (MX/TXT/otros) y pruebas.",
    "Configuración de autenticación (SPF/DKIM/DMARC) y validación.",
    "Handoff (documentación, accesos, checklist de continuidad).",
  ],

  faqs: [
    {
      question: "¿Qué diferencia hay entre correo del hosting vs Google Workspace/Microsoft 365?",
      answer:
        "El correo del hosting suele ser más básico y puede tener limitaciones de seguridad/entregabilidad. Workspace/M365 normalmente ofrecen mejor experiencia, colaboración, seguridad y soporte (pero requieren licencias).",
    },
    {
      question: "¿Incluyes las licencias de Google Workspace o Microsoft 365?",
      answer:
        "No. Las licencias se pagan directo al proveedor. Yo me encargo de la configuración, migración (si aplica) y dejarlo funcionando correctamente.",
    },
    {
      question: "¿Voy a perder correos si migramos?",
      answer:
        "No debería. Se hace con un plan de migración y validaciones. El riesgo baja mucho cuando hay accesos correctos y una ventana de cambio bien definida.",
    },
    {
      question: "¿Qué son SPF, DKIM y DMARC?",
      answer:
        "Son configuraciones de autenticación que ayudan a que tus correos lleguen al inbox y reduzcan suplantación (phishing). Son clave para entregabilidad y seguridad.",
    },
    {
      question: "¿Puedes trabajar con mi proveedor actual?",
      answer:
        "Sí. Si ya tienes dominio/hosting/correo, me adapto y propongo optimizaciones sin obligarte a cambiar (a menos que haya un motivo real).",
    },
    {
      question: "¿Cuánto tarda el setup o una migración?",
      answer:
        "Un setup básico puede quedar rápido si hay accesos listos. Migraciones dependen del volumen de correos, número de usuarios y el proveedor de origen.",
    },
  ],

  finalCta: {
    id: "cotizar",
    title: "¿Listo para un correo corporativo que sí llegue y un DNS que no dé sorpresas?",
    bullets: [
      "Ordenamos dominio y accesos (control real de tu infraestructura).",
      "Configuramos correos corporativos con autenticación (SPF/DKIM/DMARC).",
      "Documentamos todo para que tu negocio no dependa de “a ver quién lo tiene”.",
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
    { label: "Ciberseguridad", href: "/servicios/ciberseguridad" },
    { label: "Analítica (GA4/GTM)", href: "/servicios/analitica" },
    { label: "Google Ads", href: "/servicios/ads" },
    { label: "SEO", href: "/servicios/seo" },
    { label: "Automatización", href: "/servicios/automatizacion" },
    { label: "Soluciones WordPress", href: "/soluciones/wordpress" },
    { label: "Soluciones Astro", href: "/soluciones/astro" },
    { label: "Soluciones Next.js", href: "/soluciones/nextjs" },
    { label: "Precios", href: "/precios" },
    { label: "Portafolio", href: "/portafolio" },
  ],
} as const;

export type ServiceContent = typeof infraestructuraServiceContent;
