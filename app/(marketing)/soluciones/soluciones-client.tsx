"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { BlogPreview, type BlogPreviewPost } from "@/components/sections/blog-preview";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FinalCta } from "@/components/sections/final-cta";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { ProcessSteps } from "@/components/sections/process-steps";
import { QuickCompare } from "@/components/sections/quick-compare";
import { ServicesPreviewGrid } from "@/components/sections/services-preview-grid";
import RickyTechCards from "@/components/sections/RickyTechCards";
import { OrganicDivider } from "@/components/sections/organic-divider";
import { StarterIncludes } from "@/components/sections/starter-includes";
import { StarterPricingPreview } from "@/components/sections/starter-pricing-preview";
import ShinyText from "@/components/ui/ShinyText";

type SolucionesClientProps = {
  blogPosts: BlogPreviewPost[];
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export default function SolucionesClient({ blogPosts }: SolucionesClientProps) {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "view_service_page",
      page_type: "service",
      service_category: "web",
      service_name: "desarrollo web",
      service_slug: "soluciones",
    });
  }, []);

  return (
    <>
      <section
        className="mx-auto max-w-6xl px-4 pb-6 pt-12 text-center md:px-6 md:pt-16"
        data-page-type="service"
        data-service-category="web"
        data-service-name="desarrollo-web"
        data-service-slug="soluciones"
        data-section="hero"
      >
        <nav className="text-left text-xs text-muted-foreground">
          <Link href="/">Inicio</Link> / <Link href="/soluciones">Soluciones</Link>
        </nav>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Desarrollo web, landing pages y sitios web
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-[90%] text-2xl font-black tracking-tight text-foreground md:text-5xl"
        >
          Desarrollo web y creacion de sitios web que convierten
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
          className="mx-auto mt-4 max-w-[90%] text-lg font-semibold tracking-tight text-foreground md:text-3xl"
        >
          <ShinyText
            text="Desarrollo e implementación de páginas web, landing pages y sitios web para negocios que buscan atraer clientes, comunicar mejor su oferta y vender más.."
            color="#1881ff"
            shineColor="#000000"
          />
        </motion.h2>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-muted-foreground md:text-xl">
          Si buscas desarrollo web, diseño web o creación de sitios web, aquí encontrarás una solución pensada para la etapa y las metas de tu negocio.
          
        </p>
      </section>
      {/* <section className="mx-auto max-w-6xl px-4 py-12 text-center md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          <TextType
            text={[
              "Tres formas de construir tu web.",
              "Elige la que mejor se adapte a ti.",
              "NEXT.JS",
              "ASTRO",
              "WORDPRESS",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h2>
        
      </section> */}
      <OrganicDivider className="my-10 md:my-14" />
      <p
        className="mx-auto m-4 max-w-2xl text-center text-muted-foreground md:text-2xl"
        data-section="stack-summary"
      >
                Trabajo con WordPress, Astro y Next.js, eligiendo la tecnología adecuada según tus necesidades de contenido, velocidad, SEO, rendimiento y objetivos de conversión.
              </p>
      <RickyTechCards />
      <QuickCompare />
      <StarterPricingPreview />
      <StarterIncludes />
      <ServicesPreviewGrid />
      <PortfolioPreview />
      <BlogPreview posts={blogPosts} />
      <ProcessSteps />
      <FAQAccordion />
      <FinalCta />
    </>
  );
}
