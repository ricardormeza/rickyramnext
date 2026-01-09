"use client";

import { motion } from "framer-motion";

import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FinalCta } from "@/components/sections/final-cta";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { ProcessSteps } from "@/components/sections/process-steps";
import { QuickCompare } from "@/components/sections/quick-compare";
import { ServicesPreviewGrid } from "@/components/sections/services-preview-grid";
import { SolutionCards } from "@/components/sections/solution-cards";
import RickyTechCards from "@/components/sections/RickyTechCards";
import { StarterIncludes } from "@/components/sections/starter-includes";
import { StarterPricingPreview } from "@/components/sections/starter-pricing-preview";

export default function SolucionesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-12 text-center md:px-6 md:pt-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          DiseÃ±o de Landing page y Sitios web
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-[90%] text-2xl font-semibold tracking-tight text-foreground md:text-5xl font-black"
        >
          Branding potente y sitios web que convierten en WordPress, Astro y
          Next.js para negocios que quieren crecer.
        </motion.h2>
      </section>
      <SolutionCards />
      <RickyTechCards />
      <QuickCompare />
      <StarterPricingPreview />
      <StarterIncludes />
      <ServicesPreviewGrid />
      <PortfolioPreview />
      <BlogPreview />
      <ProcessSteps />
      <FAQAccordion />
      <FinalCta />
    </>
  );
}




