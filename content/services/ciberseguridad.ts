export const ciberseguridadServiceContent = {
  hero: {
    kicker: "Ciberseguridad",
    title:
      "Ciberseguridad web (México): hardening, reCAPTCHA, prevención de secuestro y mitigación DDoS",
    lead:
      "La mayoría de incidentes no empiezan con un “hack épico”, empiezan con accesos débiles, bots, plugins desactualizados o DNS mal protegido. Aquí cerramos puertas, reducimos riesgo y dejamos tu sitio listo para operar con estabilidad.",
    ctas: [
      { label: "Agendar diagnóstico", href: "#agendar" },
      { label: "Solicitar auditoría de seguridad", href: "#auditoria" },
      { label: "Ver planes mensuales", href: "#planes" },
    ],
  },

  forWho: {
    title: "¿Para quién es este servicio?",
    bullets: [
      "Tienes WordPress (o una tienda) y quieres prevenir hacks, spam y caídas.",
      "Recibes spam en formularios, ataques al login o intentos de acceso sospechosos.",
      "Vas a correr campañas (Ads) y necesitas estabilidad (caerte sale caro).",
      "Ya tuviste un incidente o quieres “blindar” antes de crecer.",
      "Tienes dominio/DNS/hosting disperso y quieres reducir riesgos de secuestro de sitio.",
    ],
    notFor: [
      "Buscas “seguridad 100% garantizada” (no existe). Lo que sí existe es reducción de riesgo y respuesta rápida.",
      "No tendrás accesos a hosting/DNS o no se permite implementar cambios mínimos.",
      "Quieres resolver un incidente grave sin diagnóstico (primero hay que ver el estado real del sitio).",
    ],
  },

  labels: {
    notForTitle: "Ciberseguridad NO es lo mejor si:",
    layersTitle: "Qué incluye (enfoque por capas)",
    layersNote:
      "Nota: no existe el 0% riesgo. La meta es reducir superficie de ataque, bloquear abuso automatizado y preparar mitigación (WAF/CDN) + monitoreo para responder rápido.",
    deliverablesTitle: "Entregables",
    auditPricesTitle: "Precios guía (MXN)",
    auditIncludesTitle: "Incluye",
    requirementsTitle: "¿Qué necesito para empezar?",
    requirementsNote:
      "Si ya tuviste incidentes, lo primero es diagnóstico. Si tu sitio está “limpio”, podemos implementar hardening y monitoreo para prevenir.",
    addOnsTitle: "Add-ons recomendados (para potenciar seguridad)",
    processTitle: "Proceso de trabajo",
    contactTitle: "Agendar",
    internalLinksTitle: "Enlaces internos sugeridos (SEO + UX)",
  },

  layers: [
    {
      title: "1) Hardening (endurecimiento base del sitio)",
      bullets: [
        "Revisión de accesos: usuarios, roles, permisos y prácticas de contraseña.",
        "Reducir superficie de ataque: endpoints expuestos, configuraciones inseguras (según stack).",
        "Revisión de plugins/temas (WordPress): mínimos necesarios, actualización y riesgo.",
        "Backups y plan de recuperación (qué hacer si algo falla).",
      ],
    },
    {
      title: "2) Anti-bots y spam (reCAPTCHA + reglas)",
      bullets: [
        "Protección de formularios y puntos críticos (login/contacto/checkout si aplica).",
        "Rate limit y reglas anti-abuso para reducir intentos automatizados.",
        "QA para validar que no rompa conversiones (que siga siendo fácil convertir).",
        "Buenas prácticas para reducir spam sin fricción excesiva.",
      ],
    },
    {
      title: "3) Prevención de secuestro de sitio (control de infraestructura)",
      bullets: [
        "Revisión de accesos a hosting, FTP/SSH, paneles, y cuentas críticas.",
        "Revisión de dominio/DNS (quién controla, riesgos, recomendaciones).",
        "Recomendación de 2FA/MFA donde aplique.",
        "Checklist de continuidad: recuperación de accesos, backups y restore.",
      ],
    },
    {
      title: "4) Mitigación DDoS y firewall (WAF/CDN)",
      bullets: [
        "Setup WAF/CDN (ej. Cloudflare u opción similar) para filtrar tráfico malicioso.",
        "Reglas: challenges, rate-limits, bloqueos por patrones (según necesidad).",
        "Optimización base de caché (puede ayudar a estabilidad y performance).",
        "Monitoreo de picos y respuesta ante anomalías (según plan).",
      ],
    },
  ],

  deliverables: [
    "Diagnóstico inicial (riesgos, accesos, puntos críticos y prioridades).",
    "Checklist de hardening aplicado + recomendaciones por impacto.",
    "Protección anti-bots (reCAPTCHA/reglas) con QA para no afectar conversiones.",
    "Setup WAF/CDN (si aplica) con reglas base y validación.",
    "Guía rápida: qué monitorear, qué hacer ante señales sospechosas y cómo recuperar acceso.",
  ],

  audit: {
    id: "auditoria",
    title: "Auditoría de Ciberseguridad (pago único)",
    lead:
      "Ideal si ya tienes sospechas, spam constante, caídas o quieres saber tu nivel de riesgo antes de invertir en campañas.",
    prices: [
      "Emprendedor: $2,900",
      "PyME: $6,900",
      "Empresa: $14,900",
    ],
    includes: [
      "Revisión de accesos (usuarios/roles/credenciales) y riesgos comunes.",
      "Revisión de superficie de ataque (login, formularios, endpoints públicos).",
      "Revisión de plugins/temas (WordPress) y estado general de actualizaciones.",
      "Revisión de dominio/DNS (riesgo de secuestro y recomendaciones).",
      "Lista priorizada: quick wins (1–7 días) + roadmap (30 días).",
    ],
    cta: { label: "Solicitar auditoría", href: "/cotizar?tab=servicios&tech=ciberseguridad&plan=auditoria-seo-pago-unico" },
  },

  plans: {
    id: "planes",
    title: "Planes mensuales de Seguridad",
    lead:
      "Pensados para mantener el sitio estable, reducir riesgos y responder rápido ante anomalías. Ideal para tiendas y sitios con campañas activas.",
    cards: [
      {
        title: "Security Monitor (mensual)",
        subtitle:
          "Base de estabilidad: monitoreo + alertas + revisiones puntuales.",
        bullets: [
          "Monitoreo uptime y alertas básicas.",
          "Revisión mensual de seguridad (checks críticos).",
          "Backups/verificación (según proveedor y stack).",
          "Reporte mensual corto + recomendaciones.",
        ],
        price: "Desde $1,900 / mes + IVA",
      },
      {
        title: "Security Growth (mensual)",
        subtitle:
          "Para PyME con operación activa: hardening continuo + WAF/CDN y QA.",
        bullets: [
          "Monitoreo + revisiones más frecuentes (según alcance).",
          "Ajustes mensuales (reglas anti-bot, accesos, hardening incremental).",
          "WAF/CDN: mantenimiento de reglas (si aplica).",
          "1–2 cambios/mes + reporte con prioridades.",
        ],
        price: "Desde $3,900 / mes + IVA",
      },
      {
        title: "Security Pro (mensual)",
        subtitle:
          "Para tiendas y alto tráfico: respuesta prioritaria y control más estricto.",
        bullets: [
          "Monitoreo más estricto + soporte prioritario.",
          "Gestión activa de WAF/CDN ante picos/anomalías.",
          "Revisión de integridad y medidas adicionales (según stack).",
          "Roadmap mensual de mejoras y prevención.",
        ],
        price: "Desde $7,900 / mes + IVA (Enterprise: a cotizar)",
      },
    ],
  },

  requirements: [
    "URL del sitio y stack (WordPress/Next/Astro) + si es tienda o no.",
    "Acceso a hosting (panel) y, si aplica, acceso a DNS/dominio.",
    "Accesos a WordPress admin / repositorio / despliegue (según tecnología).",
    "Descripción de incidentes si existen (fechas, síntomas, logs si tienes).",
    "Objetivo: prevenir, estabilizar para campañas, o respuesta a incidentes.",
  ],

  addOns: [
    {
      title: "Implementaciones (pago único) — protección específica",
      items: [
        "Hardening WordPress (pago único): $6,900 - $24,900",
        "Hardening Web/Next.js (pago único): $9,900 - $39,900",
        "Protección anti-bots (reCAPTCHA + reglas + rate-limit): $1,900 - $6,900",
        "Setup WAF/CDN (mitigación DDoS + firewall reglas): $3,900 - $14,900",
      ],
    },
    {
      title: "Recuperación / incidente (si aplica)",
      items: [
        "Diagnóstico + contención + limpieza: a cotizar (según severidad)",
        "Recuperación de accesos/DNS/hosting (secuestro): a cotizar",
      ],
    },
    {
      title: "Operación y prevención",
      items: [
        "Políticas de acceso + 2FA/MFA + roles (documentación): a cotizar",
        "Plan de backups/restore + pruebas de recuperación: a cotizar",
      ],
    },
  ],

  processSteps: [
    "Diagnóstico (riesgos, accesos, stack y puntos críticos).",
    "Plan de acción (prioridades: quick wins + hardening + WAF/reCAPTCHA si aplica).",
    "Implementación (cambios + QA para no romper conversión).",
    "Monitoreo (alertas, reglas y ajustes según comportamiento).",
    "Reporte (qué se corrigió, qué se mitigó y qué sigue).",
  ],

  faqs: [
    {
      question: "¿Esto evita al 100% hacks o DDoS?",
      answer:
        "No existe el 100%. Lo que hacemos es reducir riesgo, cerrar vulnerabilidades comunes y preparar mitigación real (WAF/CDN + reglas + monitoreo) para responder rápido.",
    },
    {
      question: "¿reCAPTCHA afecta conversiones?",
      answer:
        "Si se implementa mal, sí. Por eso lo configuramos con criterio (invisible o solo donde hay abuso) y hacemos QA para reducir spam sin meter fricción innecesaria.",
    },
    {
      question: "¿Qué es “secuestro de sitio”?",
      answer:
        "Es cuando pierdes control del sitio por accesos (hosting/DNS/cuentas). Lo prevenimos revisando permisos, recomendando MFA/2FA y definiendo un plan de recuperación.",
    },
    {
      question: "¿Incluye limpieza si ya estoy hackeado?",
      answer:
        "Podemos hacerlo, pero se maneja como respuesta a incidente (se cotiza según severidad, tiempo y alcance). Primero diagnosticamos para no tapar síntomas.",
    },
    {
      question: "¿Necesito un plan mensual?",
      answer:
        "Si tienes tienda, campañas o cambios frecuentes, sí conviene. Si tu sitio es estable, puedes quedarte con hardening + revisiones puntuales.",
    },
    {
      question: "¿Puedo contratar esto aunque mi sitio no lo hayas hecho tú?",
      answer:
        "Sí. Me adapto a tu stack y proveedor. Lo importante es tener accesos para implementar medidas y validar que todo funcione.",
    },
  ],

  finalCta: {
    id: "cotizar",
    title: "¿Quieres prevenir incidentes antes de que te cuesten ventas y reputación?",
    bullets: [
      "Endurecemos accesos y reducimos superficie de ataque (hardening).",
      "Cortamos spam/abuso con reCAPTCHA + reglas anti-bot.",
      "Mitigamos DDoS con WAF/CDN y dejamos monitoreo listo.",
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

export type ServiceContent = typeof ciberseguridadServiceContent;
