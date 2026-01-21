import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import PrivacidadLegalPage from "../legal/privacidad/page";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Politica de privacidad y tratamiento de datos personales.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Aviso de privacidad",
    description: "Politica de privacidad y tratamiento de datos personales.",
    url: `${siteConfig.siteUrl}/privacidad`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviso de privacidad",
    description: "Politica de privacidad y tratamiento de datos personales.",
  },
};

export default function PrivacidadPage() {
  return <PrivacidadLegalPage />;
}
