import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  FileText,
  Globe2,
  LayoutTemplate,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  PenLine,
  Search,
  Smartphone,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

import { LandingLeadForm } from "./landing-lead-form";
import { TrackedWhatsappLink } from "./tracked-whatsapp-link";
import heroImage from "@/imagenes/hero-soluciones-digitales-web.webp";
import solucionesImage from "@/imagenes/soluciones-web-rickyram.webp";
import projectGgjImage from "@/imagenes/project-ggjcontabilidad.png";
import projectUneteImage from "@/imagenes/project-unete.png";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diseño de páginas web para negocios | Rickyram.dev",
  description:
    "Diseño y desarrollo de páginas web para negocios, emprendedores y profesionales. Presenta tus servicios, genera confianza y recibe clientes por WhatsApp.",
  alternates: {
    canonical: "/paginas-web-para-negocios",
  },
  openGraph: {
    title: "Diseño de páginas web para negocios | Rickyram.dev",
    description:
      "Diseño y desarrollo de páginas web para negocios, emprendedores y profesionales. Presenta tus servicios, genera confianza y recibe clientes por WhatsApp.",
    url: `${siteConfig.siteUrl}/paginas-web-para-negocios`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diseño de páginas web para negocios | Rickyram.dev",
    description:
      "Diseño y desarrollo de páginas web para negocios, emprendedores y profesionales. Presenta tus servicios, genera confianza y recibe clientes por WhatsApp.",
  },
};

const whatsappMessage = encodeURIComponent(
  "Hola, visité rickyram.dev y me interesa cotizar una página web para mi negocio. ¿Podrías brindarme más información?"
);

const whatsappUrl = `${siteConfig.whatsapp}?text=${whatsappMessage}`;

const trustItems = [
  { icon: MonitorSmartphone, value: "+50", label: "Sitios profesionales entregados" },
  { icon: Smartphone, value: "100%", label: "Diseño adaptable a celulares" },
  { icon: FileText, value: "100%", label: "Formularios de contacto funcionales" },
  { icon: Globe2, value: "SEO", label: "Base técnica para aparecer en Google y Bing" },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Genera mayor confianza",
    text: "Presenta tu negocio de forma profesional y demuestra que estás preparado para atender nuevos clientes.",
  },
  {
    icon: MessageCircle,
    title: "Explica mejor tus servicios",
    text: "Organiza productos, procesos, beneficios y preguntas frecuentes sin depender de publicaciones antiguas.",
  },
  {
    icon: Users,
    title: "Recibe clientes potenciales",
    text: "Integra formularios, WhatsApp y llamadas a la acción para facilitar que te contacten.",
  },
  {
    icon: Search,
    title: "Aparece en Google",
    text: "Construye una presencia digital propia para que más personas encuentren tus servicios.",
  },
];

const idealFor = [
  "Promocionas tu negocio en Facebook o Instagram.",
  "Recibes clientes principalmente por WhatsApp.",
  "Tus clientes preguntan por precios, servicios o ubicación.",
  "Quieres proyectar una imagen más profesional.",
  "Necesitas una landing para Google Ads.",
  "Quieres dejar de depender completamente de redes sociales.",
];

const includes = [
  { icon: PenLine, title: "Diseño personalizado", text: "Una propuesta visual adaptada a tu marca." },
  { icon: MessageCircle, title: "Botón de WhatsApp", text: "Contacto directo desde la página." },
  { icon: FileText, title: "Formularios", text: "Captura solicitudes de información o cotización." },
  { icon: MapPin, title: "Mapa y ubicación", text: "Muestra dónde se encuentra tu negocio." },
  { icon: Search, title: "SEO básico", text: "Títulos, descripciones y estructura inicial." },
  { icon: BarChart3, title: "Analítica web", text: "Medición con GA4, GTM o Search Console." },
  { icon: Mail, title: "Dominio y correo", text: "Orientación para una presencia profesional." },
];

const process = [
  { icon: Users, title: "Conocemos tu negocio", text: "Entendemos tus servicios, objetivos y clientes." },
  { icon: LayoutTemplate, title: "Definimos estructura", text: "Organizamos secciones, textos e imágenes." },
  { icon: PenLine, title: "Diseñamos", text: "Creamos una propuesta visual alineada a tu marca." },
  { icon: Code2, title: "Desarrollamos", text: "Construimos un sitio rápido, responsive y seguro." },
  { icon: ClipboardCheck, title: "Revisamos", text: "Validamos contenido, enlaces y funcionamiento." },
  { icon: Sparkles, title: "Publicamos", text: "Tu página queda lista para compartir y captar clientes." },
];

const projects: Array<{
  title: string;
  description: string;
  image: StaticImageData | string;
  href: string;
}> = [
  {
    title: "GGJ Contabilidad",
    description: "Sitio web para despacho contable con presencia profesional.",
    image: projectGgjImage,
    href: "https://ggjcontabilidad.com/",
  },
  {
    title: "Unete Psic. Yeimy",
    description: "Sitio web para servicios profesionales de bienestar.",
    image: projectUneteImage,
    href: "https://bienestar-unete.com/",
  },
  {
    title: "Xanath Laboratorios",
    description: "Sitio web corporativo + presencia local en Google.",
    image: "/portafolio/1xanathlab.webp",
    href: "https://laboratoriosxanath.com/",
  },
];

const faqs = [
  {
    question: "¿Necesito dominio y hosting?",
    answer: "No necesariamente. Puedo orientarte para elegir y configurar el dominio y alojamiento adecuados.",
  },
  {
    question: "¿Funcionará en celulares?",
    answer: "Sí. La página se desarrolla para adaptarse correctamente a celulares, tablets y computadoras.",
  },
  {
    question: "¿Puedo usarla para Google Ads?",
    answer: "Sí. La estructura puede enfocarse en campañas, formularios, WhatsApp y medición de conversiones.",
  },
  {
    question: "¿Cuánto tarda el desarrollo?",
    answer: "Depende del alcance y la entrega de contenido. El calendario se define antes de comenzar.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">{text}</p> : null}
    </div>
  );
}

export default function PaginasWebParaNegociosPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Diseño de páginas web para negocios",
    serviceType: "Diseño y desarrollo web",
    description:
      "Diseño y desarrollo de páginas web para negocios, emprendedores y profesionales.",
    url: `${siteConfig.siteUrl}/paginas-web-para-negocios`,
    areaServed: "Mexico",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link href="/" className="text-xl font-black tracking-tight text-blue-600">
            rickyram.dev
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-700 md:flex">
            <a href="#beneficios" className="hover:text-blue-600">
              Beneficios
            </a>
            <a href="#incluye" className="hover:text-blue-600">
              Qué incluye
            </a>
            <a href="#portafolio" className="hover:text-blue-600">
              Portafolio
            </a>
            <a href="#preguntas" className="hover:text-blue-600">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#cotizacion"
              className="hidden rounded-xl bg-amber-600 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-amber-700 sm:inline-flex"
            >
              Cotizar
            </a>
            <Menu className="h-6 w-6 text-slate-700 md:hidden" aria-hidden="true" />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-12 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-16 lg:pt-20">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">
              Diseño y desarrollo web para negocios
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl">
              Convierte tus redes sociales en un sitio web que genere confianza y nuevos clientes
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 md:text-lg">
              Si tu negocio ya tiene presencia en Facebook, Instagram o WhatsApp, es momento
              de dar el siguiente paso con un sitio web profesional para presentar tus servicios,
              mostrar tu trabajo y recibir solicitudes de clientes potenciales.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cotizacion"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black text-white shadow-[0_16px_34px_rgba(24,129,255,0.32)] transition hover:bg-blue-700"
              >
                Cotizar mi página web
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#portafolio"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-sm font-black text-slate-900 transition hover:border-blue-300 hover:bg-blue-50"
              >
                Ver proyectos realizados
              </a>
            </div>
            <div className="mt-8 grid gap-4 text-sm font-bold text-slate-800 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <Smartphone className="h-7 w-7 text-blue-600" />
                Diseño adaptable
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-7 w-7 text-emerald-500" />
                WhatsApp integrado
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-7 w-7 text-blue-600" />
                SEO básico
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-4 top-10 hidden rounded-3xl bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.16)] md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500">Visitas web</p>
                  <p className="text-lg font-black text-blue-600">+156%</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-3 top-24 z-10 hidden rounded-3xl bg-slate-950 p-4 text-white shadow-[0_18px_60px_rgba(15,23,42,0.24)] md:block">
              <p className="text-sm font-black">Conecta con prospectos</p>
              <div className="mt-3 flex gap-2">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-bold">FB</span>
                <span className="rounded-full bg-pink-500 px-3 py-1 text-xs font-bold">IG</span>
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold">WA</span>
              </div>
            </div>
            <Image
              src={heroImage}
              alt="Mockup de soluciones digitales web para negocios"
              priority
              className="relative mx-auto h-auto w-full drop-shadow-[0_28px_50px_rgba(15,23,42,0.18)]"
              sizes="(max-width: 1024px) 100vw, 650px"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-4 border-slate-200 p-6 md:border-r last:md:border-r-0">
              <item.icon className="h-10 w-10 shrink-0 text-blue-600" />
              <div>
                <p className="text-2xl font-black text-slate-950">{item.value}</p>
                <p className="text-sm font-semibold leading-5 text-slate-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8" id="beneficios">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Más que un perfil en redes"
            title="Tu sitio web puede convertir atención en oportunidades"
            text="Facebook, Instagram y WhatsApp son buenos canales, pero un sitio web reúne tu información en un espacio profesional que pertenece a tu negocio."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="relative order-2 lg:order-1">
          <Image
            src={solucionesImage}
            alt="Soluciones web para negocios con tienda, redes sociales y WhatsApp"
            className="mx-auto h-auto w-full max-w-xl"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">
            Esta solución es ideal para ti si...
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
            Necesitas presentar mejor tu negocio y facilitar el contacto
          </h2>
          <div className="mt-8 grid gap-4">
            {idealFor.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                <p className="font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <a
            href="#cotizacion"
            className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-4 text-sm font-black text-white transition hover:bg-blue-700"
          >
            Sí, necesito una página web
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8" id="incluye">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Todo lo necesario para comenzar tu presencia profesional en internet"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map((item) => (
              <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-base font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionTitle title="De tu idea a un sitio web listo para recibir clientes" />
        <div className="mt-14 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
          {process.map((item, index) => (
            <article key={item.title} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-600 shadow-sm">
                <item.icon className="h-8 w-8" />
              </div>
              <div className="mx-auto -mt-20 mb-5 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-14 text-sm font-black text-slate-950">{item.title}</h3>
              <p className="mt-2 text-xs leading-6 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8" id="portafolio">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            title="Sitios web creados para negocios reales"
            text="Una selección de proyectos existentes. La estructura permite adjuntar más proyectos después agregándolos al arreglo de portafolio de esta landing."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-slate-950">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                  <span className="mt-4 inline-flex rounded-xl border border-slate-200 px-4 py-2 text-xs font-black text-slate-800">
                    Ver proyecto
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">
              Planes
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
              Elige el sitio web adecuado para tu negocio
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              El precio y tiempo de desarrollo dependen de la cantidad de secciones,
              contenido, funciones e integraciones requeridas.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              ["Landing page", "Para presentar un servicio, promoción o campaña específica."],
              ["Sitio web empresarial", "Para negocios que necesitan servicios, información corporativa, ubicación y contacto."],
              ["Sitio web personalizado", "Para proyectos con funciones, integraciones o estructuras especiales."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <MousePointerClick className="h-7 w-7 shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-black text-slate-950">{title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8" id="preguntas">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Preguntas frecuentes" />
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-black text-slate-950">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-blue-600">
            Siguiente paso
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">
            Tu negocio ya está en redes sociales. Ahora necesita un lugar propio en internet.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Completa el formulario y recibe una propuesta basada en las necesidades reales de tu proyecto.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              "Diseño adaptable a celulares.",
              "Integración con WhatsApp.",
              "Formularios de contacto.",
              "SEO básico y medición.",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 font-bold text-slate-700">
                <Check className="h-5 w-5 text-blue-600" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <LandingLeadForm />
      </section>

      <footer className="bg-slate-950 px-5 py-12 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Link href="/" aria-label={siteConfig.name}>
              <Image
                src="/images/RICKYRAM-DEV.png"
                alt={siteConfig.name}
                width={160}
                height={160}
                className="mb-4 h-auto w-28"
                loading="lazy"
              />
            </Link>
            <Link href="/" className="text-2xl font-black text-blue-400">
              rickyram.dev
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Diseño y desarrollo web para negocios que quieren crecer con una presencia digital profesional.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-black">Enlaces rápidos</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <a href="#beneficios">Beneficios</a>
              <a href="#incluye">Qué incluye</a>
              <a href="#portafolio">Portafolio</a>
              <a href="#cotizacion">Cotizar</a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-black">Contacto</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-300">
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <TrackedWhatsappLink
                id="landing-whatsapp-footer"
                href={whatsappUrl}
                ctaName="whatsapp_footer"
                ctaLocation="footer"
              >
                WhatsApp {siteConfig.whatsappDisplay}
              </TrackedWhatsappLink>
              <span>{siteConfig.city}</span>
              <Link href="/mapa-del-sitio">Mapa del sitio</Link>
            </div>
          </div>
        </div>
      </footer>

      <TrackedWhatsappLink
        id="landing-whatsapp-floating"
        href={whatsappUrl}
        ctaName="cotiza_por_whatsapp"
        ctaLocation="floating_button"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500 px-5 py-4 text-sm font-black text-white shadow-[0_18px_40px_rgba(16,185,129,0.35)] transition hover:bg-emerald-600"
        ariaLabel="Cotiza por WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Cotiza por WhatsApp</span>
      </TrackedWhatsappLink>
    </main>
  );
}
