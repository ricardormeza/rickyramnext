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
  return <ServiceDetailTemplate content={adsServiceContent} />;
}
