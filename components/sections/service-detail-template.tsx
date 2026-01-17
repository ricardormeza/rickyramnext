"use client";

import Link from "next/link";

import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { Button } from "@/components/ui/button";
import type { ServiceContent } from "@/content/services/seo";

type ServiceDetailTemplateProps = {
  content: ServiceContent;
};

const getRevealProps = (index: number) => ({
  className: "fade-up",
  style: { animationDelay: `${index * 90}ms` },
});

export function ServiceDetailTemplate({ content }: ServiceDetailTemplateProps) {
  const {
    hero,
    forWho,
    layers,
    deliverables,
    audit,
    plans,
    requirements,
    addOns,
    processSteps,
    faqs,
    finalCta,
    contact,
    internalLinks,
    labels,
  } = content;

  return (
    <div className="space-y-16 pb-16">
      <ScrollReveal {...getRevealProps(0)}>
        <section className="mx-auto max-w-6xl px-4 pt-12 md:px-6 md:pt-16">
          <div className="rounded-3xl border bg-card p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {hero.kicker}
            </p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
              {hero.lead}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {hero.ctas.map((cta) => (
                <Button key={cta.href} asChild>
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(1)}>
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                {forWho.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
                {forWho.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {labels.notForTitle}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {forWho.notFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(2)}>
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {labels.layersTitle}
          </h2>
          <div className="mt-8 space-y-8">
            {layers.map((layer, index) => (
              <div
                key={layer.title}
                className={`mx-auto flex w-full max-w-3xl flex-col items-center gap-6 border-b border-border pb-8 text-center sm:flex-row sm:text-left ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-24 sm:w-24">
                  <span className="text-xl font-semibold sm:text-2xl">
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {layer.title}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {layer.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {labels.layersNote}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(3)}>
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {labels.deliverablesTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(4)}>
        <section id={audit.id} className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-3xl border bg-card p-8 md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {audit.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              {audit.lead}
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {labels.auditPricesTitle}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {audit.prices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {labels.auditIncludesTitle}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {audit.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Button className="mt-6" asChild>
              <Link href={audit.cta.href}>{audit.cta.label}</Link>
            </Button>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(5)}>
        <section id={plans.id} className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {plans.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">
              {plans.lead}
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {plans.cards.map((card) => (
              <div key={card.title} className="w-full p-4 md:w-1/2 xl:w-1/3">
                <div className="flex h-full flex-col rounded-2xl border bg-card p-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                    {card.title}
                  </h3>
                  <div className="mt-4 border-b border-border pb-4">
                    <p className="text-3xl font-semibold text-foreground">
                      {card.price}
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    {card.subtitle}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {card.bullets.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-[10px] font-semibold text-primary">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(6)}>
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {labels.requirementsTitle}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
            {requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            {labels.requirementsNote}
          </p>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(7)}>
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {labels.addOnsTitle}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {addOns.map((section) => (
              <div key={section.title} className="rounded-2xl border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(8)}>
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {labels.processTitle}
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground md:text-base">
            {processSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(9)}>
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <FAQAccordion faqs={faqs} />
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(10)}>
        <section id={finalCta.id} className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-3xl border bg-card p-8 md:p-12">
            <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {finalCta.title}
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
              {finalCta.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href="#agendar">{finalCta.primary}</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="#auditoria">{finalCta.secondary}</Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal {...getRevealProps(12)}>
        <section className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {labels.internalLinksTitle}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {internalLinks.map((item) => (
              <Button key={item.href} variant="outline" asChild>
                <Link href={item.href}>{item.label}</Link>
              </Button>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
