import type { Metadata } from "next";

import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";
import { infraestructuraServiceContent } from "@/content/services/infraestructura";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: infraestructuraServiceContent.hero.title,
  description: infraestructuraServiceContent.hero.lead,
  alternates: {
    canonical: "/servicios/infraestructura",
  },
  openGraph: {
    title: infraestructuraServiceContent.hero.title,
    description: infraestructuraServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/infraestructura`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: infraestructuraServiceContent.hero.title,
    description: infraestructuraServiceContent.hero.lead,
  },
};

export default function InfraestructuraServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: infraestructuraServiceContent.hero.title,
    serviceType: "Infraestructura web",
    description: infraestructuraServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/infraestructura`,
    areaServed: "Mexico",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Paquetes de Infraestructura",
      itemListElement: infraestructuraServiceContent.plans.cards.map((card) => ({
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
    mainEntity: infraestructuraServiceContent.faqs.map((faq) => ({
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
      <ServiceDetailTemplate content={infraestructuraServiceContent} />
    </>
  );
}
