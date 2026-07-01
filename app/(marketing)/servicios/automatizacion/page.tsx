import type { Metadata } from "next";

import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";
import { automatizacionServiceContent } from "@/content/services/automatizacion";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: automatizacionServiceContent.hero.title,
  description: automatizacionServiceContent.hero.lead,
  alternates: {
    canonical: "/servicios/automatizacion",
  },
  openGraph: {
    title: automatizacionServiceContent.hero.title,
    description: automatizacionServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/automatizacion`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: automatizacionServiceContent.hero.title,
    description: automatizacionServiceContent.hero.lead,
  },
};

export default function AutomatizacionServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: automatizacionServiceContent.hero.title,
    serviceType: "Automatizacion",
    description: automatizacionServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/automatizacion`,
    areaServed: "Mexico",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planes de Automatizacion",
      itemListElement: automatizacionServiceContent.plans.cards.map((card) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: card.title,
          description: card.subtitle,
        },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: automatizacionServiceContent.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceDetailTemplate content={automatizacionServiceContent} />
    </>
  );
}
