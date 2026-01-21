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
  return <ServiceDetailTemplate content={ciberseguridadServiceContent} />;
}
