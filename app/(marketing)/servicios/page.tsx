import type { ElementType } from "react";
import Link from "next/link";
import {
  BarChart3,
  Megaphone,
  Search,
  Settings,
  Shield,
  Zap,
} from "lucide-react";

import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Button } from "@/components/ui/button";
import { ProcessSteps } from "@/components/sections/process-steps";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios para crecer tu web",
  description:
    "SEO, Ads, Analítica, Automatización y Ciberseguridad para convertir tu web en un canal real de crecimiento.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Servicios para crecer tu web",
    description:
      "SEO, Ads, Analítica, Automatización y Ciberseguridad para convertir tu web en un canal real de crecimiento.",
    url: `${siteConfig.siteUrl}/servicios`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios para crecer tu web",
    description:
      "SEO, Ads, Analítica, Automatización y Ciberseguridad para convertir tu web en un canal real de crecimiento.",
  },
};

const hero = {
  title:
    "Servicios para crecer tu web: SEO, Ads, Anal\u00edtica, Automatizaci\u00f3n y Seguridad",
  lead:
    "Tu web puede verse bien y aun asi no vender. Estos servicios convierten tu sitio en un canal real de crecimiento: trafico, leads, ventas, medicion y estabilidad.",
  ctas: [
    { label: "Agendar llamada (15 min)", href: "#agendar" },
    { label: "Solicitar cotizacion", href: "/cotizar?tab=servicios" },
    { label: "Ver paquetes mensuales", href: "#paquetes-mensuales" },
  ],
};

const servicesOverview = {
  title: "Servicios en 1 vistazo",
  description:
    "Elige uno y entra a su p\u00e1gina para ver entregables, ejemplos y paquetes.",
  cards: [
    {
      iconKey: "seo",
      title: "SEO",
      highlight: "Para atraer clientes desde Google sin depender siempre de Ads.",
      bullets: [
        "Auditor\u00eda + plan de acci\u00f3n",
        "Optimizaci\u00f3n t\u00e9cnica + contenido",
        "Seguimiento mensual y mejoras",
      ],
      href: "/servicios/seo",
      cta: "Ver SEO",
    },
    {
      iconKey: "ads",
      title: "Ads (Google / Meta / TikTok)",
      highlight: "Para generar demanda r\u00e1pida con campa\u00f1as bien medidas.",
      bullets: [
        "Configuraci\u00f3n y estructura de campa\u00f1as",
        "Creativos y landing enfocada a conversi\u00f3n",
        "Optimizaci\u00f3n semanal y reportes",
      ],
      href: "/servicios/ads",
      cta: "Ver Ads",
    },
    {
      iconKey: "analitica",
      title: "Anal\u00edtica (GA4 + GTM + Looker)",
      highlight: "Para medir lo que importa y tomar decisiones con datos.",
      bullets: [
        "GA4 + Tag Manager bien configurados",
        "Conversiones/eventos (leads, WhatsApp, llamadas, checkout)",
        "Dashboards en Looker Studio",
      ],
      href: "/servicios/analitica",
      cta: "Ver Anal\u00edtica",
    },
    {
      iconKey: "automatizacion",
      title: "Automatizaci\u00f3n (ManyChat + CRM + Integraciones)",
      highlight: "Para responder, calificar y dar seguimiento sin perder leads.",
      bullets: [
        "Flujos ManyChat (WhatsApp / Instagram / FB)",
        "Integraci\u00f3n con CRM (HubSpot/Zoho/otros)",
        "Automatizaciones con Make/Zapier (si aplica)",
      ],
      href: "/servicios/automatizacion",
      cta: "Ver Automatizaci\u00f3n",
    },
    {
      iconKey: "ciberseguridad",
      title: "Ciberseguridad (Hardening + Monitoreo)",
      highlight: "Para que tu sitio no sea una ruleta (ca\u00eddas, hacks, spam).",
      bullets: [
        "Hardening (WordPress / web)",
        "Monitoreo + alertas",
        "Revisi\u00f3n y buenas pr\u00e1cticas",
      ],
      href: "/servicios/ciberseguridad",
      cta: "Ver Ciberseguridad",
    },
    {
      iconKey: "infraestructura",
      title: "Infraestructura",
      highlight: "Configuraci\u00f3n de DNS, Correos, instalaci\u00f3n SSL, etc.",
      bullets: [
        "Configuraci\u00f3n de correo corporativo",
        "Configuraci\u00f3n de DNS",
        "Instalaci\u00f3n de Certificados SSL",
        "Migraci\u00f3n de correos y sitios web",
      ],
      href: "/servicios/ciberseguridad",
      cta: "Ver Ciberseguridad",
    },
  ],
};

const serviceIcons: Record<string, ElementType> = {
  seo: Search,
  ads: Megaphone,
  analitica: BarChart3,
  automatizacion: Zap,
  ciberseguridad: Shield,
  infraestructura: Settings,
};

const quickSelector = {
  title: "No se que elegir: dime tu objetivo (selector rapido)",
  cta: { label: "Ayudame a elegir", href: "#agendar" },
  items: [
    {
      title: "Quiero mas leads",
      recommendation:
        "SEO + Tracking (GA4/GTM) + Landing/optimizacion de conversion.",
      links: ["/servicios/seo", ],
    },
    {
      title: "Quiero ventas ya",
      recommendation:
        "Ads + Tracking + Landing enfocada a conversion.",
      links: ["/servicios/ads", ],
    },
    {
      title: "Quiero medir todo bien",
      recommendation:
        "GA4 + GTM + conversiones + Looker Studio.",
      links: ["/servicios/analitica"],
    },
    {
      title: "Me llegan leads pero no cierro / no contesto",
      recommendation:
        "Automatizacion (ManyChat) + CRM + seguimiento.",
      links: ["/servicios/automatizacion"],
    },
    {
      title: "Mi sitio es inestable o ya me hackearon",
      recommendation:
        "Hardening + monitoreo + backups + revision de plugins/config.",
      links: ["/servicios/ciberseguridad"],
    },
  ],
};

const connectionRoutes = {
  title: "¿Como se conectan estos servicios con tu sitio?",
  lead:
    "Si aun no tienes web o vas a renovarla, aqui estan las rutas tipicas.",
  bullets: [
    {
      label: "Astro",
      text: "marketing ultra rapido + SEO tecnico solido",
      href: "/soluciones/astro",
    },
    {
      label: "WordPress",
      text: "contenido editable + blog + WooCommerce",
      href: "/soluciones/wordpress",
    },
    {
      label: "Next.js",
      text: "producto/app, dashboards, integraciones, e-commerce avanzado",
      href: "/soluciones/nextjs",
    },
  ],
  note:
    "Puedes contratar servicios aunque tu sitio no lo haya hecho yo. Me adapto a tu stack y propongo mejoras reales.",
};

const monthlyPackages = {
  id: "paquetes-mensuales",
  title: "Paquetes mensuales",
  description:
    "Estos paquetes combinan implementacion + optimizacion continua + reportes. Si prefieres solo setup, revisa los add-ons.",
  cards: [
    {
      title: "Growth Starter",
      subtitle: "Para emprendedores y negocios en etapa de validacion.",
      bullets: [
        "SEO ligero o Ads ligero (uno principal)",
        "Tracking basico (si no existe)",
        "Reporte mensual + mejoras puntuales",
      ],
      price: "Desde $5,900 MXN / mes",
      cta: "Cotizar Growth Starter",
    },
    {
      title: "Growth PyME",
      subtitle: "Para negocios que ya venden y quieren crecer con constancia.",
      bullets: [
        "SEO mensual (optimizacion + contenido/plan)",
        "o Ads + optimizacion semanal (segun prioridad)",
        "GA4/GTM con conversiones clave",
        "Reporte + recomendaciones accionables",
      ],
      price: "Desde $12,900 MXN / mes",
      cta: "Cotizar Growth PyME",
    },
    {
      title: "Performance Pro",
      subtitle: "Para marcas con inversion activa y foco en rendimiento.",
      bullets: [
        "Ads + optimizacion + experimentacion",
        "Analitica avanzada + dashboards",
        "SEO tecnico + mejoras de conversion (CRO)",
        "Reportes ejecutivos",
      ],
      price: "Desde $24,900 MXN / mes",
      cta: "Agendar estrategia",
    },
    {
      title: "Ops Full Stack (Marketing + Automatizacion)",
      subtitle: "Para equipos que quieren operar como sistema.",
      bullets: [
        "ManyChat + CRM + automatizaciones",
        "Ads + analitica",
        "Mantenimiento/monitoreo (si aplica)",
        "Roadmap mensual por prioridades",
      ],
      price: "A cotizar (segun alcance)",
      cta: "Armar propuesta Ops",
    },
  ],
  note:
    "Los precios finales dependen de volumen (campanas, eventos, flujos, integraciones, industria y numero de canales).",
};

const addOns = {
  id: "add-ons",
  title: "Add-ons (pago unico) - arranques rapidos",
  sections: [
    {
      title: "Tracking / Analitica",
      items: [
        "Tracking Lite (GA4 sin GTM, 1 conversion): $1,500 - $3,000",
        "Tracking Standard (GA4 + GTM + 3-5 conversiones + QA): $3,500 - $7,900",
        "Tracking Ecommerce (GA4 ecommerce + dataLayer): $12,900 - $29,000+",
      ],
    },
    {
      title: "SEO",
      items: [
        "Auditoria SEO: Emprendedor $4,900 | PyME $12,900 | Empresa $29,900",
      ],
    },
    {
      title: "Ads Setup",
      items: [
        "Setup Google Ads: $6,900 - $19,900",
        "Setup Meta Ads: $4,900 - $14,900",
        "Setup TikTok Ads: $4,900 - $14,900",
      ],
    },
    {
      title: "Automatizacion / Integraciones",
      items: [
        "ManyChat (flows + integracion): $7,900 - $29,900",
        "Integracion CRM (HubSpot/Zoho/etc.): $19,900 - $79,900+",
      ],
    },
    {
      title: "Seguridad",
      items: [
        "Hardening inicial (WordPress): $6,900 - $24,900",
        "Hardening / revision (Next.js): $9,900 - $39,900",
      ],
    },
  ],
};

const processSteps = {
  title: "Proceso de trabajo (simple y sin humo)",
  steps: [
    "Diagnostico (objetivo, oferta, trafico, medicion actual)",
    "Plan de accion (prioridades + quick wins + roadmap)",
    "Implementacion (tracking / campanas / SEO / automatizaciones)",
    "Optimizacion (mejoras continuas por impacto)",
    "Reporte y siguientes pasos (que funciono y que sigue)",
  ],
};

const portfolio = {
  title: "Portafolio / Casos",
  bullets: [
    "Antes/despues: performance, tracking, conversiones",
    "Sitios y tiendas (Astro / WordPress / Next.js)",
    "Dashboards y automatizaciones",
  ],
  cta: { label: "Ver portafolio", href: "/portafolio" },
};

const faqs = [
  {
    question: "Puedo contratar servicios si mi sitio no lo hicieron ustedes?",
    answer:
      "Si. Me adapto a tu sitio actual (WordPress, Shopify, Next, etc.) y propongo un plan de mejora realista.",
  },
  {
    question: "Trabajas por proyecto o mensual?",
    answer:
      "Ambos. Hay add-ons de arranque (pago unico) y paquetes mensuales (optimizacion continua).",
  },
  {
    question: "En cuanto tiempo se ven resultados?",
    answer:
      "Depende del canal. Ads puede verse rapido; SEO suele ser gradual. Lo que si hacemos desde el inicio es medir bien y priorizar acciones con impacto.",
  },
  {
    question: "Incluyen reportes?",
    answer:
      "Si. En servicios mensuales hay reporte periodico y recomendaciones. Si necesitas dashboard (Looker Studio), se agrega segun alcance.",
  },
  {
    question: "Necesito GA4 y GTM?",
    answer:
      "No por obligacion, pero si quieres tomar decisiones y optimizar campanas/SEO, la medicion correcta es clave. Podemos arrancar con algo basico y escalar.",
  },
  {
    question: "Garantizas primeras posiciones en Google?",
    answer:
      "No se garantizan rankings. Lo que si garantizamos es metodologia: auditoria, optimizacion tecnica, contenido y medicion, con enfoque a resultados del negocio.",
  },
];

const finalCta = {
  id: "cotizar",
  title: "Dime tu objetivo y te recomiendo el camino mas rentable",
  bullets: [
    "Quieres leads, ventas, medicion, automatizacion o seguridad?",
    "Que stack tienes hoy? (WordPress/Shopify/otro)",
    "Tienes campanas activas o trafico organico?",
  ],
  primary: "Solicitar cotizacion",
  secondary: "Agendar llamada",
};

const contact = {
  id: "agendar",
  title: "Agendemos 15 minutos",
  lead:
    "Te digo que servicio conviene primero, que se puede medir desde ya y cual seria el plan de 30 dias.",
  items: [
    { label: "WhatsApp", value: "https://wa.me/526631016627" },
    { label: "Correo", value: "contacto@rickyram.dev" },
    { label: "Formulario", value: "(insertar componente)" },
  ],
};

export default function ServiciosPage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="mx-auto max-w-6xl px-4 pt-12 md:px-6 md:pt-16">
        <div className="rounded-3xl border bg-card p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Servicios
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            {hero.lead}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {hero.ctas.map((cta) => (
              <Button key={cta.href} asChild>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {servicesOverview.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {servicesOverview.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesOverview.cards.map((card) => (
            <div
              key={card.title}
              className="flex h-full flex-col rounded-2xl border bg-card p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                {serviceIcons[card.iconKey] ? (
                  (() => {
                    const Icon = serviceIcons[card.iconKey];
                    return <Icon className="h-6 w-6" />;
                  })()
                ) : (
                  <span className="text-xs font-semibold">
                    {card.title.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {card.highlight}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {card.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-5">
                <Button asChild>
                  <Link href={card.href}>{card.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          {connectionRoutes.title}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          {connectionRoutes.lead}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {connectionRoutes.bullets.map((item) => (
            <div key={item.label} className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {item.label}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground mb-3">{item.text}</p>
              <Button asChild>
                <Link href={item.href}>Ver {item.label}</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          {connectionRoutes.note}
        </p>
      </section>

      <section
        id={monthlyPackages.id}
        className="mx-auto max-w-6xl px-4 md:px-6"
      >
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {monthlyPackages.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {monthlyPackages.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {monthlyPackages.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {card.subtitle}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {card.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-semibold text-foreground">
                {card.price}
              </p>
              <Button className="mt-4" asChild>
                <Link href="/cotizar?tab=servicios">{card.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{monthlyPackages.note}</p>
      </section>

      <section id={addOns.id} className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {addOns.title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {addOns.sections.map((section) => (
            <div key={section.title} className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <ProcessSteps />
      </section>

      <section className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border bg-card p-8 md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {portfolio.title}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
            {portfolio.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Button className="mt-6" asChild>
            <Link href={portfolio.cta.href}>{portfolio.cta.label}</Link>
          </Button>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 md:px-6">
        <FAQAccordion faqs={faqs} />
      </section>

      <section id={finalCta.id} className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="rounded-3xl border bg-card p-8 md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {finalCta.title}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
            {finalCta.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/cotizar?tab=servicios">{finalCta.primary}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#agendar">{finalCta.secondary}</Link>
            </Button>
          </div>
        </div>
      </section>

      
    </div>
  );
}

