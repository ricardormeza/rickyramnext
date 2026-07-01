import type { Metadata } from "next";

import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";
import { adsServiceContent } from "@/content/services/ads";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: adsServiceContent.hero.title,
  description: adsServiceContent.hero.lead,
  alternates: {
    canonical: "/servicios/ads",
  },
  openGraph: {
    title: adsServiceContent.hero.title,
    description: adsServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/ads`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: adsServiceContent.hero.title,
    description: adsServiceContent.hero.lead,
  },
};

export default function ServicioPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: adsServiceContent.hero.title,
    serviceType: "Google Ads y Meta Ads",
    description: adsServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/ads`,
    areaServed: "Mexico",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planes de Ads",
      itemListElement: adsServiceContent.plans.cards.map((card) => ({
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
    mainEntity: adsServiceContent.faqs.map((faq) => ({
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
      <ServiceDetailTemplate content={adsServiceContent} />
    </>
  );
}
