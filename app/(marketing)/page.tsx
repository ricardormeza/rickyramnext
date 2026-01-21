import RickyRamHero from "@/components/sections/RickyRamHero";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sitios web que convierten",
  description:
    "Diseño y desarrollo en Astro, WordPress y Next.js para negocios que buscan performance y conversion.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sitios web que convierten",
    description:
      "Diseño y desarrollo en Astro, WordPress y Next.js para negocios que buscan performance y conversion.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitios web que convierten",
    description:
      "Diseño y desarrollo en Astro, WordPress y Next.js para negocios que buscan performance y conversion.",
  },
};

export default function HomePage() {
  return (
    <>
      <RickyRamHero
        headlineTop="Web Developer"
        headlineBottom="& Marketing Specialist"
        portraitSrc="/images/rickyramsmile.png"
        maskSrc="/images/rickyramsmile.png"
        primaryColor="#1881FF"
      />
    </>
  );
}
