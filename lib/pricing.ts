export type PriceRange = {
  min: number;
  max: number;
  currency: "MXN";
  period?: "month" | "one-time";
};

export type PricingTier = {
  name: string;
  idealFor: string;
  scope: string;
  price: PriceRange;
};

export type AddOn = {
  name: string;
  price: PriceRange;
  notes?: string;
};

export const pricing = {
  astro: [
    {
      name: "Landing Starter",
      idealFor: "Campanas, un servicio, validacion rapida",
      scope: "Hasta 6-8 bloques en 1 pagina",
      price: { min: 7900, max: 12900, currency: "MXN", period: "one-time" },
    },
    {
      name: "Sitio basico Starter",
      idealFor: "Negocio de servicios",
      scope: "5-7 secciones (home one-page o multipagina simple)",
      price: { min: 14900, max: 24900, currency: "MXN", period: "one-time" },
    },
    {
      name: "PyME Starter",
      idealFor: "Empresa con mas oferta y autoridad",
      scope: "10-12 secciones + estructura de conversion",
      price: { min: 24900, max: 39900, currency: "MXN", period: "one-time" },
    },
  ],
  wordpress: [
    {
      name: "Landing Starter",
      idealFor: "Campanas, un servicio, validacion rapida",
      scope: "Landing administrable con SEO basico",
      price: { min: 8900, max: 14900, currency: "MXN", period: "one-time" },
    },
    {
      name: "Sitio basico Starter",
      idealFor: "Sitio con blog o catalogo simple",
      scope: "5-8 paginas",
      price: { min: 19900, max: 34900, currency: "MXN", period: "one-time" },
    },
    {
      name: "PyME Starter",
      idealFor: "Equipo que publica contenido seguido",
      scope: "10-15 paginas + estructura de conversion",
      price: { min: 34900, max: 59900, currency: "MXN", period: "one-time" },
    },
  ],
  nextjs: [
    {
      name: "Landing custom",
      idealFor: "Web premium con UX a medida",
      scope: "Landing avanzada con integraciones",
      price: { min: 18900, max: 39900, currency: "MXN", period: "one-time" },
    },
    {
      name: "Sitio custom",
      idealFor: "Marca con crecimiento y stack propio",
      scope: "Sitio avanzado, performance y SEO tecnico",
      price: { min: 39900, max: 89900, currency: "MXN", period: "one-time" },
    },
    {
      name: "PyME custom",
      idealFor: "Operaciones con integraciones",
      scope: "Arquitectura y flujos a medida",
      price: { min: 89900, max: 179900, currency: "MXN", period: "one-time" },
    },
  ],
  addons: [
    {
      name: "Tracking Lite (GA4 sin GTM)",
      price: { min: 1500, max: 3000, currency: "MXN", period: "one-time" },
    },
    {
      name: "Tracking Standard (GA4 + GTM)",
      price: { min: 3500, max: 7900, currency: "MXN", period: "one-time" },
    },
    {
      name: "Auditoria SEO",
      price: { min: 4900, max: 29900, currency: "MXN", period: "one-time" },
      notes: "Rango segun tamano del negocio",
    },
    {
      name: "Setup Google Ads",
      price: { min: 6900, max: 19900, currency: "MXN", period: "one-time" },
    },
    {
      name: "Setup Meta Ads",
      price: { min: 4900, max: 14900, currency: "MXN", period: "one-time" },
    },
  ],
  carePlans: [
    {
      name: "Care Basic",
      idealFor: "Backups + uptime + updates menores",
      scope: "Soporte basico mensual",
      price: { min: 1490, max: 1490, currency: "MXN", period: "month" },
    },
    {
      name: "Care Pro",
      idealFor: "Seguridad + performance + cambios",
      scope: "1-2 cambios al mes",
      price: { min: 3490, max: 3490, currency: "MXN", period: "month" },
    },
    {
      name: "Care Business",
      idealFor: "Monitoreo serio + reportes",
      scope: "Soporte prioritario",
      price: { min: 6990, max: 6990, currency: "MXN", period: "month" },
    },
  ],
} as const;
