import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BadgeCheck,
  CheckCircle2,
  FileCheck,
  FileText,
  Globe,
  LifeBuoy,
  Search,
  Server,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitios WordPress administrables en Mexico | Webs a medida, blog y WooCommerce",
  description:
    "Desarrollo de sitios WordPress rapidos, administrables y listos para crecer. Incluye hosting administrado + SSL el primer año. Paquetes desde $450/mes o $5,000/año.",
  openGraph: {
    title: "WordPress administrable + hosting incluido 1er año",
    description:
      "Sitios WordPress con diseño profesional, SEO base y opcion a tienda WooCommerce. Hosting administrado + SSL el primer año.",
  },
};

const trustItems = [
  { icon: Server, label: "Hosting + SSL 1er año" },
  { icon: Globe, label: "Responsive" },
  { icon: Search, label: "SEO base" },
  { icon: LifeBuoy, label: "Soporte / guia de uso" },
];

const benefits = [
  {
    title: "Panel autoadministrable",
    text: "Tu equipo edita textos e imagenes sin tocar codigo.",
  },
  {
    title: "Publicacion facil",
    text: "Ideal para campañas, blog y contenido constante.",
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
];

const includeList = [
  "Diseño profesional (a medida o plantilla premium optimizada)",
  "WordPress + configuracion base",
  "Responsive (movil / tablet / escritorio)",
  "Integracion WhatsApp + Maps (cuando aplique)",
  "Formularios (segun plan)",
  "Hosting administrado + SSL el primer año",
  "Correo profesional (segun plan)",
  "SEO base (titles/metas, estructura Hs, sitemap/robots, OG basico)",
];

const notIncluded = [
  "Tracking avanzado (GA4 + GTM + conversiones/eventos)",
  "SEO avanzado (auditoria profunda, estrategia, contenido mensual)",
  "Automatizaciones, CRM e integraciones complejas",
  "Hardening avanzado / monitoreo",
];
const pricingPlans = [
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
    price: "$5,000 / año",
    description: "Landing anual con SEO base.",
    bullets: [
      "One-page",
      "WordPress + SSL",
      "1 formulario",
      "1 cuenta de correo",
      "SEO base + seguridad esencial",
      "Hosting incluido 1er año",
    ],
    cta: "Quiero mi Landing",
    href: "/soluciones/wordpress?plan=landing#cotizar",
  },
  {
    title: "Sitio Profesional",
    price: "$8,000 / año",
    badge: "Mas elegido",
    description: "El balance ideal para negocios.",
    bullets: [
      "Hasta 6 paginas",
      "WhatsApp + Maps",
      "2 formularios",
      "3 cuentas de correo",
      "SEO base + seguridad esencial",
      "Hosting incluido 1er año",
    ],
    cta: "Elegir Sitio Profesional",
    href: "/soluciones/wordpress?plan=profesional#cotizar",
  },
  {
    title: "Presencia Online",
    price: "$10,500 / año",
    badge: "Para medir resultados",
    description: "Presencia con analitica basica.",
    bullets: [
      "Sitio WordPress completo",
      "SEO basico + optimizacion",
      "GA basico (sin eventos avanzados)",
      "OG basico para redes",
      "4 cuentas de correo",
      "Hosting incluido 1er año",
    ],
    cta: "Quiero Presencia Online",
    href: "/soluciones/wordpress?plan=presencia#cotizar",
  },
];

const sitePlans = [
  {
    label: "Precio",
    values: ["$450/mes", "$5,000/año", "$8,000/año", "$10,500/año"],
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
    label: "Diseño",
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
      "Campañas / leads",
      "Negocios 5-6 secciones",
      "Medicion y presencia",
    ],
  },
  {
    label: "Hosting + SSL 1er año",
    values: ["Incluido", "Incluido", "Incluido", "Incluido"],
  },
];

const storePlans = [
  {
    label: "Precio",
    values: ["$19,900/año", "$37,700/año"],
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
    label: "Diseño",
    values: ["Tienda optimizada", "Diseño personalizado"],
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
    label: "Hosting + SSL 1er año",
    values: ["Incluido", "Incluido"],
  },
];

const processSteps = [
  "Brief (objetivo, audiencia, oferta)",
  "Arquitectura del sitio (paginas, navegacion, prioridades)",
  "Diseño (a medida o plantilla optimizada)",
  "Desarrollo + QA (responsive, performance, SEO base)",
  "Publicacion + guia de uso",
];

const addOns = [
  "Tracking Lite (GA4 sin GTM, 1 conversion): $1,500 - $3,000",
  "Tracking Standard (GA4 + GTM + 3-5 conversiones): $3,500 - $7,900",
  "Ecommerce Tracking: $12,900 - $29,000+",
  "Auditoria SEO: Emprendedor $4,900 | PyME $12,900 | Empresa $29,900",
  "Google Ads Setup: $6,900 - $19,900",
  "Meta Ads Setup: $4,900 - $14,900",
  "TikTok Ads Setup: $4,900 - $14,900",
  "Hardening inicial WordPress: $6,900 - $24,900",
];

const recurring = [
  "Mantenimiento (updates + backups + uptime): desde $1,490 / mes",
  "Monitoreo + hardening: $1,900 - $7,900 / mes",
  "SEO mensual: $6,900 - $29,900 / mes",
  "Manejo de Ads: 15% del gasto (min. $6,900 / mes)",
  "Analitica + reporting: $2,900 - $12,900 / mes",
];

export default function WordpressSolutionPage() {
  return (
    <main className="bg-background text-foreground">
      <section id="overview" className="mx-auto max-w-6xl px-4 pb-10 pt-12 md:px-6 md:pt-16">
        <nav className="text-xs text-muted-foreground">
          <Link href="/">Inicio</Link> / <Link href="/soluciones">Soluciones</Link> / WordPress
        </nav>
        <div className="mt-6 grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Sitios WordPress administrables
            </h1>
            <p className="text-base text-muted-foreground md:text-lg">
              Si necesitas editar contenido facil, publicar en blog y operar tu sitio sin
              depender de un dev para cada cambio, WordPress es la opcion ideal.
            </p>
            <p className="text-base text-muted-foreground md:text-lg">
              Incluye hosting administrado + SSL el primer año para que tu negocio no
              batalle con lo tecnico.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Panel editable
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Hosting + SSL 1er año
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Listo para blog y WooCommerce
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="#paquetes-y-precios">Ver paquetes</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#cotizar">Cotizar</Link>
              </Button>
              <Link
                href="#agendar"
                className="text-sm font-semibold text-muted-foreground hover:text-primary"
              >
                Agendar llamada
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              Ya tienes hosting o dominio? Me adapto a lo que ya tienes y sugiero
              optimizaciones de velocidad y seguridad.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl border bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase text-muted-foreground">
                  WordPress Dashboard
                </span>
                <BadgeCheck className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl border bg-muted/40 p-4">
                  <div className="text-sm font-semibold">Pagina publicada</div>
                  <div className="mt-2 h-24 rounded-xl bg-gradient-to-br from-primary/15 to-cyan-400/10" />
                </div>
                <div className="rounded-2xl border bg-muted/40 p-4">
                  <div className="text-sm font-semibold">Editor visual</div>
                  <div className="mt-2 h-20 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
                </div>
              </div>
              <Image
                src="/images/wordpress-logo.webp"
                alt="WordPress"
                width={56}
                height={56}
                className="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-white p-2 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-sm md:grid-cols-4 md:px-6">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-muted-foreground">{item.label}</span>
              </div>
            );
          })}
        </div>
      </section>

      <div className="sticky top-4 z-40 hidden lg:block">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <div className="mt-6 flex items-center justify-center gap-6 rounded-full border bg-white/90 px-6 py-3 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
            <Link href="#overview" className="hover:text-primary">
              Overview
            </Link>
            <Link href="#paquetes-y-precios" className="hover:text-primary">
              Precios
            </Link>
            <Link href="#hosting" className="hover:text-primary">
              Hosting
            </Link>
            <Link href="#tiendas" className="hover:text-primary">
              Tiendas
            </Link>
            <Link href="#add-ons" className="hover:text-primary">
              Add-ons
            </Link>
            <Link href="#faq" className="hover:text-primary">
              FAQ
            </Link>
            <Link href="#cotizar" className="hover:text-primary">
              Cotizar
            </Link>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Para quien es WordPress?
            </h2>
            <div className="space-y-2 text-sm text-muted-foreground md:text-base">
              <p className="font-semibold text-foreground">WordPress te conviene si:</p>
              <ul className="space-y-2">
                <li>Publicas contenido seguido (blog, noticias, servicios).</li>
                <li>Quieres que tu equipo edite textos e imagenes sin tocar codigo.</li>
                <li>Necesitas integraciones tipicas (WhatsApp, Maps, formularios).</li>
                <li>Quieres crecer a tienda en linea con WooCommerce.</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground md:text-base">
              <p className="font-semibold text-foreground">WordPress no es ideal si:</p>
              <ul className="space-y-2">
                <li>
                  Necesitas funcionalidades tipo app (dashboard complejo, roles avanzados).
                  En ese caso te conviene{" "}
                  <Link href="/soluciones/nextjs" className="font-semibold text-primary">
                    Next.js
                  </Link>.
                </li>
                <li>
                  Buscas performance extrema sin panel; considera{" "}
                  <Link href="/soluciones/astro" className="font-semibold text-primary">
                    Astro
                  </Link>.
                </li>
              </ul>
            </div>
            <Link href="/soluciones" className="text-sm font-semibold text-primary">
              Ayudame a elegir
            </Link>
          </div>
          <div className="rounded-3xl border bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border bg-muted/30 p-4 text-center">
                <FileText className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-2 text-sm font-semibold">Editar</div>
              </div>
              <div className="rounded-2xl border bg-muted/30 p-4 text-center">
                <Sparkles className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-2 text-sm font-semibold">Publicar</div>
              </div>
              <div className="rounded-2xl border bg-muted/30 p-4 text-center">
                <ShoppingCart className="mx-auto h-6 w-6 text-primary" />
                <div className="mt-2 text-sm font-semibold">Vender</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ventajas reales (sin tecnicismos)
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            WordPress puede ser rapido y seguro si se construye con criterio.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border bg-card p-5 text-sm text-muted-foreground"
            >
              <div className="text-base font-semibold text-foreground">
                {benefit.title}
              </div>
              <p className="mt-2">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="incluye" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="grid gap-8 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Que incluye (base en planes anuales)
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground md:text-base">
              {includeList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">No incluido (add-ons)</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground md:text-base">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FileCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">
              Nota honesta: WordPress puede volverse pesado si se abusa de plugins.
              Aqui trabajamos con lo necesario y performance cuidado.
            </p>
            <Link href="#add-ons" className="mt-4 inline-flex text-sm font-semibold text-primary">
              Ver add-ons
            </Link>
          </div>
        </div>
      </section>
      <section id="paquetes-y-precios" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Paquetes y precios
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Precios en MXN. La propuesta final depende de paginas, integraciones y contenido.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className="rounded-2xl border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">{plan.title}</h3>
                {plan.badge ? (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-3 text-2xl font-semibold text-foreground">
                {plan.price}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-5 w-full" asChild>
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl border bg-white">
          <div className="border-b px-6 py-4 text-sm font-semibold text-muted-foreground">
            Tabla comparativa de planes WordPress (sitio)
          </div>
          <div className="grid grid-cols-5 border-b bg-muted/40 text-sm font-semibold text-muted-foreground">
            <div className="p-4">Caracteristica</div>
            <div className="p-4 text-center">Express</div>
            <div className="p-4 text-center">Landing</div>
            <div className="p-4 text-center">Profesional</div>
            <div className="p-4 text-center">Presencia</div>
          </div>
          {sitePlans.map((row) => (
            <div key={row.label} className="grid grid-cols-5 border-b text-sm">
              <div className="p-4 font-medium">{row.label}</div>
              {row.values.map((value, idx) => (
                <div key={`${row.label}-${idx}`} className="p-4 text-center">
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border bg-white">
          <div className="border-b px-6 py-4 text-sm font-semibold text-muted-foreground">
            Planes de tienda (WooCommerce)
          </div>
          <div className="grid grid-cols-3 border-b bg-muted/40 text-sm font-semibold text-muted-foreground">
            <div className="p-4">Caracteristica</div>
            <div className="p-4 text-center">Mi Tienda Online</div>
            <div className="p-4 text-center">Corporativo Elite</div>
          </div>
          {storePlans.map((row) => (
            <div key={row.label} className="grid grid-cols-3 border-b text-sm">
              <div className="p-4 font-medium">{row.label}</div>
              {row.values.map((value, idx) => (
                <div key={`${row.label}-${idx}`} className="p-4 text-center">
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="hosting" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl border bg-primary/10 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Hosting administrado + SSL incluidos el primer año
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Si ya tienes hosting o dominio, me adapto y te propongo optimizaciones de
            performance, cache y seguridad.
          </p>
          <Button className="mt-6" asChild>
            <Link href="#cotizar">Cotizar sin complicaciones</Link>
          </Button>
        </div>
      </section>

      <section id="tiendas" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tiendas en linea con WooCommerce
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Para vender con base solida y sin friccion.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Mi Tienda Online</h3>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Popular
              </span>
            </div>
            <div className="mt-3 text-2xl font-semibold">$19,900 / año</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Incluye Presencia Online +</li>
              <li>Tienda WooCommerce</li>
              <li>Hasta 15 productos (carga inicial)</li>
              <li>SEO avanzado (base)</li>
              <li>GA avanzado con eventos (segun alcance)</li>
              <li>Hosting incluido 1er año</li>
            </ul>
            <Button className="mt-6" asChild>
              <Link href="#cotizar">Cotizar mi tienda</Link>
            </Button>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Corporativo Elite</h3>
            </div>
            <div className="mt-3 text-2xl font-semibold">$37,700 / año</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Diseño personalizado</li>
              <li>GA avanzado con eventos</li>
              <li>Branding + diseño grafico (segun alcance)</li>
              <li>Publicidad digital (segun acuerdo)</li>
              <li>Hosting incluido 1er año</li>
            </ul>
            <Button className="mt-6" variant="secondary" asChild>
              <Link href="#agendar">Armar propuesta corporativa</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Proceso de trabajo
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Asi trabajamos para entregar rapido y sin friccion.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-2xl border bg-card p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Paso {index + 1}
              </div>
              <div className="mt-3 text-sm font-medium text-foreground">{step}</div>
            </div>
          ))}
        </div>
        <Link href="#agendar" className="mt-6 inline-flex text-sm font-semibold text-primary">
          Agendar llamada
        </Link>
      </section>

      <section id="add-ons" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Add-ons y servicios recurrentes
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Personaliza el plan con tracking, SEO o mantenimiento mensual.
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <details className="rounded-2xl border bg-card p-5" open>
            <summary className="cursor-pointer text-base font-semibold">Add-ons (pago unico)</summary>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {addOns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
          <details className="rounded-2xl border bg-card p-5">
            <summary className="cursor-pointer text-base font-semibold">Recurrentes (mensual)</summary>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {recurring.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <Button className="mt-6" asChild>
          <Link href="#cotizar">Armar paquete a medida</Link>
        </Button>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <FAQAccordion />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl border bg-card p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Dime que necesitas y te propongo el plan ideal
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Cotiza en minutos y recibe una propuesta clara.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="#cotizar">Solicitar cotizacion</Link>
            </Button>
            <Button
              variant="secondary"
              className="border border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <Link href="#agendar">Agendar llamada</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="cotizar" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="grid gap-8 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Cotizar</h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              Cuentame que quieres construir y te propongo el paquete ideal.
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
              />
              <textarea
                name="project"
                rows={4}
                placeholder="Tipo de sitio, secciones, objetivo..."
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit">Solicitar cotizacion</Button>
                <Button variant="secondary" asChild>
                  <Link href={siteConfig.whatsapp}>Cotizar por WhatsApp</Link>
                </Button>
              </div>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">
              Respuesta en 24-48h habiles. Si ya tienes hosting, lo reviso contigo.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Datos para cotizar</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Tipo: landing / sitio / blog / tienda</li>
              <li>Secciones aproximadas</li>
              <li>Objetivo: leads / ventas / agenda / contenido</li>
              <li>Necesitas blog o productos?</li>
              <li>Ya tienes dominio/hosting?</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="agendar" className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="rounded-3xl border bg-primary/10 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Lo vemos en 15 minutos?
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Te digo cual plan te conviene y que add-ons valen la pena para tu objetivo.
          </p>
          <Button className="mt-6" asChild>
            <Link href={siteConfig.agendaUrl}>Agendar llamada</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

