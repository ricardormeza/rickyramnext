import type { Metadata } from "next";

import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";
import { analiticaServiceContent } from "@/content/services/analitica";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: analiticaServiceContent.hero.title,
  description: analiticaServiceContent.hero.lead,
  alternates: {
    canonical: "/servicios/analitica",
  },
  openGraph: {
    title: analiticaServiceContent.hero.title,
    description: analiticaServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/analitica`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: analiticaServiceContent.hero.title,
    description: analiticaServiceContent.hero.lead,
  },
};

export default function AnaliticaServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: analiticaServiceContent.hero.title,
    serviceType: "Analitica digital",
    description: analiticaServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/analitica`,
    areaServed: "Mexico",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planes de Analitica",
      itemListElement: analiticaServiceContent.plans.cards.map((card) => ({
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
    mainEntity: analiticaServiceContent.faqs.map((faq) => ({
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
      <ServiceDetailTemplate content={analiticaServiceContent} />
    </>
  );
}
