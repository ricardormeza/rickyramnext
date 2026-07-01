import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto | Cotizar sitio web, SEO y Ads",
  description:
    "Contacto para cotizar sitio web, SEO, Google Ads, Meta Ads y automatizacion. Respuesta en menos de 48 horas.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto | Cotizar sitio web, SEO y Ads",
    description:
      "Contacto para cotizar sitio web, SEO, Google Ads, Meta Ads y automatizacion. Respuesta en menos de 48 horas.",
    url: `${siteConfig.siteUrl}/contacto`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Cotizar sitio web, SEO y Ads",
    description:
      "Contacto para cotizar sitio web, SEO, Google Ads, Meta Ads y automatizacion. Respuesta en menos de 48 horas.",
  },
};

export default function ContactoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: `${siteConfig.siteUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contacto",
        item: `${siteConfig.siteUrl}/contacto`,
      },
    ],
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto",
    url: `${siteConfig.siteUrl}/contacto`,
    description:
      "Contacto para cotizar sitio web, SEO, Google Ads, Meta Ads y automatizacion.",
    about: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
      telephone: siteConfig.whatsappDisplay,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <section className="relative text-muted-foreground">
        <div className="container mx-auto flex flex-wrap px-6 py-16 sm:flex-nowrap">
          <div className="relative mb-8 flex items-end justify-start overflow-hidden rounded-3xl bg-muted/60 p-8 sm:mr-10 sm:mb-0 md:w-1/2 lg:w-2/3">
            <iframe
              title="Mapa RickyRam.dev"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14980704.286144285!2d-102.62050004999999!3d23.554126900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xae6493d7e71d6001%3A0x86a4ea7aa65d1a38!2sDise%C3%B1o%20de%20sitios%20web%20%7C%20RickyRam.dev!5e0!3m2!1ses!2smx!4v1768721729321!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
            <div className="relative flex w-full flex-wrap rounded-2xl bg-card/95 p-6 shadow-lg backdrop-blur">
              <div className="w-full space-y-2 px-4 pb-6 lg:w-1/2 lg:pb-0">
                <nav className="text-xs text-muted-foreground">
                  <Link href="/">Inicio</Link> / <Link href="/contacto">Contacto</Link>
                </nav>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                  Contacto
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Cotiza tu sitio web, SEO o campañas
                </h1>
                <p className="text-sm text-muted-foreground">
                  Tijuana, Baja California, Mexico.
                </p>
              </div>
              <div className="w-full space-y-4 px-4 lg:w-1/2">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    Correo
                  </h2>
                  <a
                    href="mailto:contacto@rickyram.dev"
                    className="text-sm text-primary hover:underline"
                  >
                    contacto@rickyram.dev
                  </a>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    Teléfono
                  </h2>
                  <a href="tel:6631016627" className="text-sm text-primary hover:underline">
                    6631016627
                  </a>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    Redes
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm">
                    <a
                      href="https://web.facebook.com/rickyramweb"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/rickyram.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ricardo-ramirez-meza/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col bg-background md:ml-auto md:w-1/2 md:py-8 lg:w-1/3">
            <h2 className="mb-1 text-lg font-semibold text-foreground">Escríbeme</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Respuesta en menos de 48 horas habiles.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
