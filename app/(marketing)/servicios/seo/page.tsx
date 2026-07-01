import { ServiceDetailTemplate } from "@/components/sections/service-detail-template";
import { seoServiceContent } from "@/content/services/seo";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: seoServiceContent.hero.title,
  description: seoServiceContent.hero.lead,
  alternates: {
    canonical: "/servicios/seo",
  },
  openGraph: {
    title: seoServiceContent.hero.title,
    description: seoServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/seo`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoServiceContent.hero.title,
    description: seoServiceContent.hero.lead,
  },
};

export default function SeoServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: seoServiceContent.hero.title,
    serviceType: "SEO",
    description: seoServiceContent.hero.lead,
    url: `${siteConfig.siteUrl}/servicios/seo`,
    areaServed: "Mexico",
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      email: siteConfig.email,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Planes de SEO",
      itemListElement: seoServiceContent.plans.cards.map((card) => ({
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
    mainEntity: seoServiceContent.faqs.map((faq) => ({
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
      <ServiceDetailTemplate content={seoServiceContent} />
    </>
  );
}
