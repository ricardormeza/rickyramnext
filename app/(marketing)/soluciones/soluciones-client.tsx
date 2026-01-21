"use client";

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
import TextType from "@/components/ui/TextType";

type SolucionesClientProps = {
  blogPosts: BlogPreviewPost[];
};

export default function SolucionesClient({ blogPosts }: SolucionesClientProps) {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-12 text-center md:px-6 md:pt-16">
        <h1 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Diseño de Landing pages y Sitios web
        </h1>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-4 max-w-[90%] text-2xl font-semibold tracking-tight text-foreground md:text-5xl font-black"
        >
          <ShinyText
            text="Branding potente y sitios web que convierten en WordPress, Astro y Next.js para negocios que quieren crecer."
            color="#1881ff"
            shineColor="#000000"
          />
        </motion.h2>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-12 text-center md:px-6">
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
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground md:text-2xl">
          No todo negocio necesita lo mismo. Te guio para elegir la mejor tecnología para ti.
        </p>
      </section>
      <OrganicDivider className="my-10 md:my-14" />
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
