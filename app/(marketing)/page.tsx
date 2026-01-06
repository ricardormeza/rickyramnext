import RickyRamHero from "@/components/sections/RickyRamHero";
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
