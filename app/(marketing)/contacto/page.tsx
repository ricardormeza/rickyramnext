import type { Metadata } from "next";
import Link from "next/link";

import { ContactPageTracking } from "@/components/analytics/ContactPageTracking";
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
      <ContactPageTracking />
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
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,129,255,0.22),transparent_42%),linear-gradient(135deg,rgba(24,129,255,0.12),rgba(15,23,42,0.04))]"
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
                <a
                  href="https://www.google.com/maps/place/Dise%C3%B1o+de+sitios+web+%7C+RickyRam.dev/"
                  target="_blank"
                  rel="noreferrer"
                  data-contact-click="map"
                  data-contact-location="contacto"
                  className="inline-flex pt-2 text-sm text-primary hover:underline"
                >
                  Ver ubicacion en Google Maps
                </a>
              </div>
              <div className="w-full space-y-4 px-4 lg:w-1/2">
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    Correo
                  </h2>
                  <a
                    href="mailto:contacto@rickyram.dev"
                    data-contact-click="email"
                    data-contact-location="contacto"
                    className="text-sm text-primary hover:underline"
                  >
                    contacto@rickyram.dev
                  </a>
                </div>
                <div>
                  <h2 className="text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
                    Teléfono
                  </h2>
                  <a
                    href="tel:6631016627"
                    data-contact-click="phone"
                    data-contact-location="contacto"
                    className="text-sm text-primary hover:underline"
                  >
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
                      data-contact-click="facebook"
                      data-contact-location="contacto"
                      className="text-foreground/80 hover:text-primary"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.instagram.com/rickyram.dev/"
                      target="_blank"
                      rel="noreferrer"
                      data-contact-click="instagram"
                      data-contact-location="contacto"
                      className="text-foreground/80 hover:text-primary"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ricardo-ramirez-meza/"
                      target="_blank"
                      rel="noreferrer"
                      data-contact-click="linkedin"
                      data-contact-location="contacto"
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
