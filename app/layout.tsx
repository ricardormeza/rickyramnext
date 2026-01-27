import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { siteConfig } from "@/lib/site";
import { CookieBanner } from "@/components/legal/CookieBanner";
import { GTM } from "@/components/analytics/GTM";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Sitios web en Astro, WordPress y Next.js para negocios que buscan performance y conversion.",
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: siteConfig.name,
    description:
      "Sitios web en Astro, WordPress y Next.js para negocios que buscan performance y conversion.",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description:
      "Sitios web en Astro, WordPress y Next.js para negocios que buscan performance y conversion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* aqui va el gtm */}
          <GTM />
          {/* aca termina el gtm */}
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
