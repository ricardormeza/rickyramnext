export const mainNav = [
  { title: "Inicio", href: "/" },
  { title: "Soluciones", href: "/soluciones" },
  { title: "Servicios", href: "/servicios" },
  { title: "Precios", href: "/precios" },
  { title: "Portafolio", href: "/portafolio" },
  { title: "Blog", href: "/blog" },
  { title: "Contacto", href: "/contacto" },
] as const;

export const footerNav = {
  solutions: [
    { title: "Astro (Sitios rapidos)", href: "/soluciones/astro" },
    { title: "WordPress (Sitios administrables)", href: "/soluciones/wordpress" },
    { title: "Next.js (Web premium + dashboards)", href: "/soluciones/nextjs" },
  ],
  services: [
    { title: "SEO", href: "/servicios/seo" },
    { title: "Google Ads", href: "/servicios/ads" },
    { title: "Analitica (GA4/GTM)", href: "/servicios/analitica" },
    { title: "Ciberseguridad", href: "/servicios/ciberseguridad" },
    { title: "CRM / Automatizaciones", href: "/servicios/automatizacion" },
    { title: "Infraestructura", href: "/servicios/infraestructura" },
  ],
  resources: [
    { title: "Portafolio", href: "/portafolio" },
    { title: "Blog", href: "/blog" },
    { title: "Precios", href: "/precios" },
    { title: "Contacto", href: "/contacto" },
  ],
  legal: [
    { title: "Privacidad", href: "/legal/privacidad" },
    { title: "Cookies", href: "/legal/cookies" },
    { title: "Terminos y condiciones", href: "/legal/terminos" },
  ],
} as const;
