import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BarChart3,
  Bot,
  CheckCircle2,
  Globe,
  Megaphone,
  Search,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";

import {
  DeferredContactForm,
  DeferredPortfolioPreview,
} from "@/components/shared/DeferredHomeSections";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SplitTextReveal } from "@/components/sections/SplitTextReveal";
import { Button } from "@/components/ui/button";
import ShinyText from "@/components/ui/ShinyText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Desarrollo web para negocios que quieren vender mas",
  description:
    "Desarrollo web, SEO, analitica y soluciones en WordPress, Astro y Next.js para negocios que necesitan mas leads, mejor medicion y mejor conversión.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Desarrollo web para negocios que quieren vender más",
    description:
      "Desarrollo web, SEO, analítica, marketing digital, ia, y soluciones en WordPress, Astro y Next.js para negocios que necesitan mas leads, mejor medicion y mejor conversión.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Desarrollo web y marketing digital para negocios que quieren vender más",
    description:
      "Desarrollo web, SEO, analítica, ia, marketing digital y soluciones en WordPress, Astro y Next.js para negocios que necesitan más leads, mejor medicion y mejor conversión.",
  },
};

const serviceCards = [
  {
    title: "SEO",
    description:
      "Optimizo tu sitio para que Google entienda mejor tu oferta y obtengamos trafico con intención.",
    href: "/servicios/seo",
    icon: Search,
  },
  {
    title: "Google Ads",
    description:
      "Campañas enfocadas en leads y ventas, con medición clara desde el primer clic.",
    href: "/servicios/ads",
    icon: Megaphone,
  },
  {
    title: "Analitica",
    description:
      "GA4, GTM y dashboards para saber que canal funciona y donde se pierden las oportunidades.",
    href: "/servicios/analitica",
    icon: BarChart3,
  },
  {
    title: "Automatizacion",
    description:
      "Flujos, CRM e integraciones para responder más rápido y no perder seguimiento comercial.",
    href: "/servicios/automatizacion",
    icon: Bot,
  },
  {
    title: "Infraestructura",
    description:
      "DNS, correo, SSL, migraciones y configuración técnica para que el sitio no falle en lo básico.",
    href: "/servicios/infraestructura",
    icon: Wrench,
  },
  {
    title: "Ciberseguridad",
    description:
      "Hardening, monitoreo y buenas practicas para reducir caidas, abuso y riesgos evitables.",
    href: "/servicios/ciberseguridad",
    icon: Shield,
  },
  {
    title: "WordPress",
    description:
      "Sitios administrables con blog, landings o WooCommerce cuando necesitas editar sin fricción.",
    href: "/soluciones/wordpress",
    icon: Globe,
  },
  {
    title: "Astro",
    description:
      "Sitios rápidos, ligeros y con base tácnica fuerte para marketing, SEO y conversión.",
    href: "/soluciones/astro",
    icon: Zap,
  },
  {
    title: "Next.js",
    description:
      "Webs premium, dashboards y productos a medida cuando el proyecto necesita más lógica.",
    href: "/soluciones/nextjs",
    icon: CheckCircle2,
  },
] as const;

const workSteps = [
  {
    step: "01",
    title: "Entender tú negocio",
    description:
      "Conocer tu buyer person, servicios y definir solución realmente útil.",
  },
  {
    step: "02",
    title: "Estrategia",
    description:
      "Propuesta que puede integrar desarrollo web, SEO, marketing digital, IA o campañas digitales.",
  },
  {
    step: "03",
    title: "Implementación",
    description:
      "Desarrollo de la solución acordada con comunicación constante, avances claros y atención a los detalles que impactan tu imagen y resultados.",
  },
  {
    step: "04",
    title: "Medición y optimización",
    description:
      "Reviso el desempeño, identifico oportunidades y hago ajustes para que tu presencia digital siga creciendo con el tiempo.",
  },
] as const;

const reasons = [
  "Atención personalizada y reuniones virtuales para mantener tu proyecto claro, ágil y en movimiento.",
  "Elijo WordPress, Astro o Next.js segun el problema real, no por moda.",
  "Pienso en SEO, conversión y medición desde el inicio, no como extras.",
  "Puedo apoyar desde la web hasta la infraestructura y el seguimiento comercial.",
] as const;

const testimonials = [
  {
    quote:
      "El proceso se sintio claro de principio a fin. Hubo orden, seguimiento y una propuesta enfocada en negocio, no solo en diseño.",
    name: "Cliente en desarrollo",
    role: "Negocio de servicios",
  },
  {
    quote:
      "La diferencia estuvo en la claridad: que medir, que lanzar primero y como convertir el sitio en una herramienta de ventas.",
    name: "Cliente en desarrollo",
    role: "Marca en crecimiento",
  },
  {
    quote:
      "Se noto el enfoque practico. No hubo relleno: se priorizo lo que mas impacto podia tener para el proyecto.",
    name: "Cliente en desarrollo",
    role: "PyME",
  },
] as const;

const faqs = [
  {
    question: "¿Qué tipo de proyecto te conviene más?",
    answer:
      "Depende del objetivo. Si necesitas editar facilmente y crecer con contenido, WordPress suele ser buena base. Si quieres velocidad y una web comercial muy ligera, Astro encaja mejor. Si el proyecto requiere lógica, integraciones o área privada, Next.js suele ser el camino correcto.",
  },
  {
    question: "¿Solo trabajas desarrollo web?",
    answer:
      "No. Tambien puedo ayudarte con SEO, analítica, Google Ads, Meta Ads, automatización, migración de hosting, infraestructura y ciberseguridad para que la web no quede aislada del negocio.",
  },
  {
    question: "¿Trabajas solo en Tijuana?",
    answer:
      "No. Trabajo de forma remota con clientes en CDMX, Cuernavaca, Tijuana, Veracruz, Chiapas y otros puntos de Mexico.",
  },
  {
    question: "¿Cúanto tarda un proyecto?",
    answer:
      "Cambia según alcance. Una landing puede salir mucho más rapido que un sitio completo o una solucion a medida. Lo importante es definir primero objetivo, contenidos y dependencias.",
  },
  {
    question: "¿También puedes mejorar un sitio ya existente?",
    answer:
      "Si. No todo requiere rehacerse. A veces conviene optimizar estructura, velocidad, tracking o conversión antes de pensar en un rediseño completo.",
  },
] as const;

export default function HomeV2Page() {
  const heroLeadWords = [
    "Desarrollo",
    "web",
    "para",
    "negocios",
    "que",
    "quieren",
  ] as const;
  const methodologyLeadWords = [
    "Así",
    "trabajo",
    "para",
    "convertir",
    "ideas",
    "en",
  ] as const;

  return (
    <main className="bg-background text-foreground">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="home-v2-surface absolute inset-0"
        />
        <div
          aria-hidden="true"
          className="home-v2-surface-fade absolute inset-x-0 bottom-0 h-24"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <ScrollReveal className="fade-in-left">
            <div className="hero-portrait-group group relative mx-auto max-w-md overflow-hidden rounded-[2rem] border bg-card p-3 shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted">
                <Image
                  src="/images/rickyramsmiledos.webp"
                  alt="Ricardo Ramirez, desarrollo web y marketing"
                  fill
                  priority
                  sizes="(min-width: 1024px) 35vw, (min-width: 768px) 50vw, 100vw"
                  className="hero-portrait-base object-cover"
                />
                <div className="hero-portrait-hover" aria-hidden="true" />
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            <p className="fade-up-immediate text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Desarrollo web, SEO y marketing digital
            </p>
            <ScrollReveal className="fade-up">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                {heroLeadWords.map((word, index) => (
                  <span
                    key={word}
                    className="inline-block animate-[fade-up_.55s_ease-out_forwards] opacity-0"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    {word}
                    {"\u00A0"}
                  </span>
                ))}
                <span
                  className="inline-block animate-[fade-up_.55s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: `${heroLeadWords.length * 70}ms` }}
                >
                  <ShinyText
                    text="vender mas"
                    color="#0b1220"
                    shineColor="#1881ff"
                    speed={3}
                  />
                </span>
              </h1>
            </ScrollReveal>
            <SplitTextReveal
              as="h2"
              text="Con presencia en Tijuana y Veracruz, y atencion remota para clientes en todo México."
              className="text-xl font-semibold text-muted-foreground md:text-2xl"
            />
            <ScrollReveal className="fade-up text-base text-muted-foreground md:text-lg">
              <p>
                Creo sitios web, estrategias de SEO, marketing digital y campañas en Google Ads y Meta Ads para ayudarte a atraer clientes, comunicar mejor tu oferta y generar oportunidades de venta.
              </p>
            </ScrollReveal>
            <ScrollReveal className="fade-up flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={siteConfig.whatsapp}>Contactame por WhatsApp</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/servicios">Ver servicios</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <SplitTextReveal
            text="Servicios y soluciones digitales para crecer tu negocio."
            className="text-3xl font-semibold md:text-5xl"
          />
          <ScrollReveal className="fade-up mt-4 text-sm text-muted-foreground md:text-base">
            <p>
              No todo negocio necesita la misma solucion. Este es un mapa rapido
              para elegir la combinacion de desarrollo web, marketing digital,
              IA y SEO que mejor impulse tu crecimiento, desde atraer clientes
              hasta medir y optimizar resultados.
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <ScrollReveal
                key={card.title}
                className="fade-up h-full"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-[1.75rem] border bg-card p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground md:text-base">
                    {card.description}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-primary">
                    Ver mas
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="home-v2-surface bg-muted/40 py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 m-16">
          <div className="max-w-3xl">
            <ScrollReveal className="fade-up">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                {methodologyLeadWords.map((word, index) => (
                  <span
                    key={word}
                    className="inline-block animate-[fade-up_.55s_ease-out_forwards] opacity-0"
                    style={{ animationDelay: `${index * 70}ms` }}
                  >
                    {word}
                    {"\u00A0"}
                  </span>
                ))}
                <span
                  className="inline-block animate-[fade-up_.55s_ease-out_forwards] opacity-0"
                  style={{ animationDelay: `${methodologyLeadWords.length * 70}ms` }}
                >
                  <ShinyText
                    text="resultados."
                    color="#0b1220"
                    shineColor="#1881ff"
                    speed={3}
                  />
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal className="fade-up mt-4 text-sm text-muted-foreground md:text-base">
              <p>
                Cada proyecto comienza entendiendo lo que tu negocio necesita
                hoy y hacia donde quiere crecer. Con una metodologia clara,
                combinó estrategia, creatividad y tecnología para crear
                soluciones digitales útiles, medibles y enfocadas en generar
                oportunidades reales.
              </p>
            </ScrollReveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {workSteps.map((item, index) => (
              <ScrollReveal
                key={item.step}
                className="fade-up rounded-[1.75rem] border bg-background p-6"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <p className="text-sm font-semibold text-primary">{item.step}</p>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 rounded-[2rem] border bg-card p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SplitTextReveal
              text="¿Por qué elegirme para tu próximo proyecto digital?"
              className="text-3xl font-semibold md:text-5xl"
            />
            <ScrollReveal className="fade-up mt-5 text-sm text-muted-foreground md:text-base">
              <p>
                Si solo necesitas una web bonita, hay muchas opciones. Pero si buscas una solución que conecte desarrollo web, marketing digital, SEO, inteligencia artificial, chatbots y tecnología con los objetivos reales de tu negocio, ahí es donde puedo aportar más valor.
              </p>
            </ScrollReveal>
          </div>
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <ScrollReveal
                key={reason}
                className="fade-up flex items-start gap-3 rounded-2xl border bg-background/80 p-4"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground md:text-base">
                  {reason}
                </p>
              </ScrollReveal>
            ))}
            <ScrollReveal className="fade-up pt-2">
              <Button asChild size="lg">
                <Link href={siteConfig.agendaUrl}>Agendar meet</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* <section className="bg-primary py-16 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="max-w-3xl">
            <SplitTextReveal
              text="Resenas y percepcion de trabajo"
              className="text-3xl font-semibold md:text-5xl"
            />
            <ScrollReveal className="fade-up mt-4 text-sm text-white/75 md:text-base">
              <p>
                Mientras cerramos testimonios finales, dejo la estructura de la
                experiencia que busco entregar en cada proyecto.
              </p>
            </ScrollReveal>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <ScrollReveal
                key={`${item.name}-${index}`}
                className="fade-up rounded-[1.75rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <p className="text-base leading-relaxed text-white/90">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-white/70">{item.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:pr-8">
          <SplitTextReveal
            text="Preguntas frecuentes antes de arrancar"
            className="text-3xl font-semibold md:text-5xl"
          />
          <ScrollReveal className="fade-up mt-5">
            <h3 className="text-xl font-semibold md:text-2xl">
              Si quieres claridad antes de invertir, empecemos por aqui.
            </h3>
          </ScrollReveal>
          <ScrollReveal className="fade-up mt-4">
            <h4 className="text-lg font-semibold text-primary md:text-xl">
              Te ayudo a elegir stack, alcance y el primer paso con más sentido.
            </h4>
          </ScrollReveal>
          <ScrollReveal className="fade-up mt-5">
            <p className="text-sm text-muted-foreground md:text-base">
              La llamada sirve para aterrizar objetivo, urgencia, tipo de
              sitio, integraciones y si conviene empezar por desarrollo, SEO,
              tracking o una mejora puntual sobre lo que ya tienes.
            </p>
          </ScrollReveal>
          <ScrollReveal className="fade-up mt-6">
            <Button asChild size="lg">
              <Link href={siteConfig.agendaUrl}>Agendar llamada</Link>
            </Button>
          </ScrollReveal>
        </div>

        <div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`home-v2-faq-${index}`}
                className="rounded-[1.5rem] border bg-card px-5"
              >
                <AccordionTrigger className="text-left text-base font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground md:text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section>
        <DeferredPortfolioPreview />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-10 rounded-[2rem] border bg-card p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SplitTextReveal
              text="Hablemos de tu proyecto y definamos cómo hacerlo crecer."
              className="text-3xl font-semibold md:text-5xl"
            />
            <ScrollReveal className="fade-up mt-5 text-sm text-muted-foreground md:text-base">
              <p>
                Si ya tienes claro el objetivo, mejor. Si no, tambien. Puedo
                ayudarte a bajar la idea a una landing, sitio completo, mejora
                de conversiÓn o una ruta de crecimiento mÁs ordenada.
              </p>
            </ScrollReveal>
            <ScrollReveal className="fade-up mt-6 rounded-2xl border bg-background p-5">
              <ul className="space-y-3 text-sm text-muted-foreground md:text-base">
                <li>
                  Cuanto más contexto me compartas, mejor aterrizada sale la
                  propuesta.
                </li>
                <li>
                  Puedes escribir para desarrollo, SEO, tracking,
                  automatizacion o soporte técnico.
                </li>
                <li>Si prefieres algo rápido, tambien esta WhatsApp.</li>
              </ul>
            </ScrollReveal>
          </div>

          <div>
            <DeferredContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
