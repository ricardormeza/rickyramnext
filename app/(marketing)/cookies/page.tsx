import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import CookiesLegalPage from "../legal/cookies/page";

export const metadata: Metadata = {
  title: "Politica de cookies",
  description: "Informacion sobre cookies, analitica y preferencias del sitio.",
  alternates: {
    canonical: "/cookies",
  },
  openGraph: {
    title: "Politica de cookies",
    description: "Informacion sobre cookies, analitica y preferencias del sitio.",
    url: `${siteConfig.siteUrl}/cookies`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Politica de cookies",
    description: "Informacion sobre cookies, analitica y preferencias del sitio.",
  },
};

export default function CookiesPage() {
  return <CookiesLegalPage />;
}
