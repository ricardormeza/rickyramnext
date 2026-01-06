import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeContent } from "@/content/home";

export function FAQAccordion() {
  const { faqs } = homeContent;

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="space-y-3 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Preguntas frecuentes
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-8">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
