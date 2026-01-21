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
  return <ServiceDetailTemplate content={automatizacionServiceContent} />;
}
