import type { Metadata } from "next";

import SolucionesClient from "./soluciones-client";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soluciones web a medida",
  description:
    "WordPress, Astro y Next.js para negocios que quieren crecer con performance, SEO y conversion.",
  alternates: {
    canonical: "/soluciones",
  },
  openGraph: {
    title: "Soluciones web a medida",
    description:
      "WordPress, Astro y Next.js para negocios que quieren crecer con performance, SEO y conversion.",
    url: `${siteConfig.siteUrl}/soluciones`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones web a medida",
    description:
      "WordPress, Astro y Next.js para negocios que quieren crecer con performance, SEO y conversion.",
  },
};

export default function SolucionesPage() {
  return <SolucionesClient />;
}
