"use client";

import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MegaCursorIcon } from "@/components/ui/mega-cursor";
import { homeContent } from "@/content/home";

type FaqItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  faqs?: FaqItem[];
};

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const items = faqs ?? homeContent.faqs;
  const [showMegaCursor, setShowMegaCursor] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const onPointerEnter = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") return;
    setShowMegaCursor(true);
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  const onPointerMove = (event: React.PointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "touch") return;
    setCursorPos({ x: event.clientX, y: event.clientY });
  };

  const onPointerLeave = () => {
    setShowMegaCursor(false);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:px-6">
      <div className="space-y-3 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Preguntas frecuentes
        </h2>
      </div>
      <Accordion type="single" collapsible className="mt-8">
        {items.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger
              className="cursor-none"
              onPointerEnter={onPointerEnter}
              onPointerMove={onPointerMove}
              onPointerLeave={onPointerLeave}
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {showMegaCursor ? (
        <div
          className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block"
          style={{
            transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
          }}
        >
          <MegaCursorIcon />
        </div>
      ) : null}
    </section>
  );
}
