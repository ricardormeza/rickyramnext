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
  return <ServiceDetailTemplate content={infraestructuraServiceContent} />;
}
