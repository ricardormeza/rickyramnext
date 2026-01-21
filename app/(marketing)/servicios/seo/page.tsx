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
  return <ServiceDetailTemplate content={seoServiceContent} />;
}
