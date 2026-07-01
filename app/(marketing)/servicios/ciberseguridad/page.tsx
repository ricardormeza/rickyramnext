import type { Metadata } from "next";

import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";
import { ciberseguridadServiceContent } from "@/content/services/ciberseguridad";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: ciberseguridadServiceContent.hero.title,
  description: ciberseguridadServiceContent.hero.lead,
  alternates: {
    canonical: "/servicios/ciberseguridad",
  },
  openGraph: {
    title: ciberseguridadServiceContent.hero.title,
    description: ciberseguridadServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/ciberseguridad`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ciberseguridadServiceContent.hero.title,
    description: ciberseguridadServiceContent.hero.lead,
  },
};

export default function CiberseguridadServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: ciberseguridadServiceContent.hero.title,
    serviceType: "Ciberseguridad web",
    description: ciberseguridadServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/ciberseguridad`,
    areaServed: "Mexico",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planes de Ciberseguridad",
      itemListElement: ciberseguridadServiceContent.plans.cards.map((card) => ({
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
    mainEntity: ciberseguridadServiceContent.faqs.map((faq) => ({
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
      <ServiceDetailTemplate content={ciberseguridadServiceContent} />
    </>
  );
}
