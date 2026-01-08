import { BlogPreview } from "@/components/sections/blog-preview";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { FinalCta } from "@/components/sections/final-cta";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { ProcessSteps } from "@/components/sections/process-steps";
import { QuickCompare } from "@/components/sections/quick-compare";
import { ServicesPreviewGrid } from "@/components/sections/services-preview-grid";
import { SolutionCards } from "@/components/sections/solution-cards";
import { StarterIncludes } from "@/components/sections/starter-includes";
import { StarterPricingPreview } from "@/components/sections/starter-pricing-preview";

export default function SolucionesPage() {
  return (
    <>
      <SolutionCards />
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
