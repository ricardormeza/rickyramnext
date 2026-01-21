import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import AgendarLlamadaClient from "./agendar-llamada-client";

export const metadata: Metadata = {
  title: "Agendar llamada",
  description: "Agenda una videollamada corta para definir tu proyecto.",
  alternates: {
    canonical: "/Agendar-llamada",
  },
  openGraph: {
    title: "Agendar llamada",
    description: "Agenda una videollamada corta para definir tu proyecto.",
    url: `${siteConfig.siteUrl}/Agendar-llamada`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agendar llamada",
    description: "Agenda una videollamada corta para definir tu proyecto.",
  },
};

export default function AgendarLlamadaPage() {
  return <AgendarLlamadaClient />;
}
