import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, FolderTree } from "lucide-react";

import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mapa del sitio",
  description:
    "Mapa del sitio de Rickyram.dev con enlaces a páginas principales, soluciones, servicios, recursos y páginas legales.",
  alternates: {
    canonical: "/mapa-del-sitio",
  },
  openGraph: {
    title: "Mapa del sitio",
    description:
      "Encuentra rápidamente las páginas principales, soluciones, servicios, recursos y páginas legales de Rickyram.dev.",
    url: `${siteConfig.siteUrl}/mapa-del-sitio`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mapa del sitio",
    description:
      "Encuentra rápidamente las páginas principales, soluciones, servicios, recursos y páginas legales de Rickyram.dev.",
  },
};

const sitemapGroups = [
  {
    title: "Páginas principales",
    description: "Accesos base del sitio.",
    links: [
      { title: "Inicio", href: "/" },
      { title: "Soluciones", href: "/soluciones" },
      { title: "Servicios", href: "/servicios" },
      { title: "Precios", href: "/precios" },
      { title: "Portafolio", href: "/portafolio" },
      { title: "Blog", href: "/blog" },
      { title: "Contacto", href: "/contacto" },
      { title: "Cotizar", href: "/cotizar" },
      { title: "Agendar llamada", href: "/Agendar-llamada" },
    ],
  },
  {
    title: "Soluciones web",
    description: "Páginas por tecnología y tipo de solución.",
    links: [
      { title: "Soluciones WordPress", href: "/soluciones/wordpress" },
      { title: "Soluciones Astro", href: "/soluciones/astro" },
      { title: "Soluciones Next.js", href: "/soluciones/nextjs" },
      {
        title: "Páginas web para negocios",
        href: "/paginas-web-para-negocios",
      },
    ],
  },
  {
    title: "Servicios",
    description: "Servicios especializados para negocios digitales.",
    links: [
      { title: "SEO", href: "/servicios/seo" },
      { title: "Google Ads", href: "/servicios/ads" },
      { title: "Analítica GA4/GTM", href: "/servicios/analitica" },
      { title: "Automatización", href: "/servicios/automatizacion" },
      { title: "Ciberseguridad", href: "/servicios/ciberseguridad" },
      { title: "Infraestructura", href: "/servicios/infraestructura" },
    ],
  },
  {
    title: "Legal",
    description: "Información legal y de privacidad.",
    links: [
      { title: "Aviso de privacidad", href: "/legal/privacidad" },
      { title: "Política de cookies", href: "/legal/cookies" },
      { title: "Términos y condiciones", href: "/legal/terminos" },
      { title: "Mapa del sitio", href: "/mapa-del-sitio" },
    ],
  },
] as const;

export default function MapaDelSitioPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(24,129,255,0.18),transparent_70%)] blur-3xl"
      />

      <section className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <FolderTree className="h-7 w-7" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Navegación
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Mapa del sitio
          </h1>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Encuentra rápidamente las páginas principales, soluciones, servicios,
            recursos y páginas legales disponibles en {siteConfig.name}.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {sitemapGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-3xl border bg-card/80 p-6 shadow-sm backdrop-blur md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {group.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between gap-4 rounded-2xl border bg-background px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:bg-primary/5"
                  >
                    <span>{link.title}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
