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
  return <ServiceDetailTemplate content={analiticaServiceContent} />;
}
