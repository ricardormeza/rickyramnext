import type { Metadata } from "next";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Casos reales y resultados de proyectos web en Rickyram.dev.",
  alternates: {
    canonical: "/portafolio",
  },
  openGraph: {
    title: "Portafolio",
    description: "Casos reales y resultados de proyectos web en Rickyram.dev.",
    url: `${siteConfig.siteUrl}/portafolio`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio",
    description: "Casos reales y resultados de proyectos web en Rickyram.dev.",
  },
};

export default function PortafolioPage() {
  return <PortfolioPreview />;
}
