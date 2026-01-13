import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, CheckCircle2, FileCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SolutionTemplate } from "@/components/sections/solution-template";
import { wordpressContent, wordpressMetadata } from "@/content/solution/wordpress";
import { siteConfig } from "@/lib/site";

export const metadata = wordpressMetadata;

export default function WordpressSolutionPage() {
  const {
    hero,
    trustItems,
    stickyNav,
    whoIsItFor,
    whoIsItForCardItems,
    benefits,
    includes,
    pricing,
    sitePlans,
    storePlans,
    hosting,
    stores,
    process,
    addOns,
    finalCta,
    quote,
    agendar,
  } = wordpressContent;

  const heroCard = (
    <div className="rounded-3xl border bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase text-muted-foreground">
          {hero.card?.badgeLabel}
        </span>
        <BadgeCheck className="h-5 w-5 text-primary" />
      </div>
      <div className="mt-6">
        <div className="rounded-2xl border bg-muted/40 p-4">
          <div className="text-sm font-semibold">{hero.card?.title}</div>
          <div className="mt-2 w-full max-w-[500px] overflow-hidden rounded-xl">
            <Image
              src={hero.card?.image.src ?? "/wordpress/hero2-wp.webp"}
              alt={hero.card?.image.alt ?? "Wordpress dashboard"}
              width={500}
              height={500}
              loading="lazy"
              className="aspect-square h-full w-full object-cover object-top"
            />
          </div>
        </div>
      </div>
      <Image
        src={hero.card?.logo.src ?? "/images/wordpress-logo.webp"}
        alt={hero.card?.logo.alt ?? "WordPress"}
        width={56}
        height={56}
        className="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-white p-2 shadow"
      />
    </div>
  );

  return (
    <SolutionTemplate
      hero={{ ...hero, card: heroCard }}
      trustItems={trustItems}
      stickyNav={stickyNav}
    >
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <ScrollReveal
            className="fade-in-left space-y-4"
            style={{ animationDelay: "0ms" }}
          >
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {whoIsItFor.title}
            </h2>
            <div className="space-y-2 text-sm text-muted-foreground md:text-base">
              <p className="font-semibold text-foreground">{whoIsItFor.goodTitle}</p>
              <ul className="space-y-2">
                {whoIsItFor.goodList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground md:text-base">
              <p className="font-semibold text-foreground">{whoIsItFor.badTitle}</p>
              <ul className="space-y-2">
                {whoIsItFor.badList.map((item, index) => (
                  <li key={`${item.link.href}-${index}`}>
                    {item.text}{" "}
                    <Link href={item.link.href} className="font-semibold text-primary">
                      {item.link.label}
                    </Link>
                    {item.suffix}
                  </li>
                ))}
              </ul>
            </div>
            <Link href={whoIsItFor.helpLink.href} className="text-sm font-semibold text-primary">
              {whoIsItFor.helpLink.label}
            </Link>
          </ScrollReveal>
          <ScrollReveal
            className="fade-in-right rounded-3xl border bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
            style={{ animationDelay: "80ms" }}
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {whoIsItForCardItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border bg-muted/30 p-4 text-center">
                    <Icon className="mx-auto h-6 w-6 text-primary" />
                    <div className="mt-2 text-sm font-semibold">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ventajas reales (sin tecnicismos)
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            WordPress puede ser rapido y seguro si se construye con criterio.
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <ScrollReveal
              key={benefit.title}
              className="fade-up rounded-2xl border bg-card p-5 text-sm text-muted-foreground"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="text-base font-semibold text-foreground">
                {benefit.title}
              </div>
              <p className="mt-2">{benefit.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section id="incluye" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="grid gap-8 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {includes.title}
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground md:text-base">
              {includes.includeList.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{includes.notIncludedTitle}</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground md:text-base">
              {includes.notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FileCheck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted-foreground">{includes.note}</p>
            <Link href={includes.link.href} className="mt-4 inline-flex text-sm font-semibold text-primary">
              {includes.link.label}
            </Link>
          </div>
        </div>
      </section>

      <section id="paquetes-y-precios" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {pricing.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {pricing.description}
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricing.plans.map((plan) => (
            <div key={plan.title} className="rounded-2xl border bg-card p-5">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-semibold">{plan.title}</h3>
                {plan.badge ? (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {plan.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-3 text-2xl font-semibold text-foreground">
                {plan.price}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {plan.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-5 w-full" asChild>
                <Link href={plan.href}>{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl border bg-white">
          <div className="border-b px-6 py-4 text-sm font-semibold text-muted-foreground">
            Tabla comparativa de planes WordPress (sitio)
          </div>
          <div className="grid grid-cols-5 border-b bg-muted/40 text-sm font-semibold text-muted-foreground">
            <div className="p-4">Caracteristica</div>
            <div className="p-4 text-center">Express</div>
            <div className="p-4 text-center">Landing</div>
            <div className="p-4 text-center">Profesional</div>
            <div className="p-4 text-center">Presencia</div>
          </div>
          {sitePlans.map((row) => (
            <div key={row.label} className="grid grid-cols-5 border-b text-sm">
              <div className="p-4 font-medium">{row.label}</div>
              {row.values.map((value, idx) => (
                <div key={`${row.label}-${idx}`} className="p-4 text-center">
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-3xl border bg-white">
          <div className="border-b px-6 py-4 text-sm font-semibold text-muted-foreground">
            Planes de tienda (WooCommerce)
          </div>
          <div className="grid grid-cols-3 border-b bg-muted/40 text-sm font-semibold text-muted-foreground">
            <div className="p-4">Caracteristica</div>
            <div className="p-4 text-center">Mi Tienda Online</div>
            <div className="p-4 text-center">Corporativo Elite</div>
          </div>
          {storePlans.map((row) => (
            <div key={row.label} className="grid grid-cols-3 border-b text-sm">
              <div className="p-4 font-medium">{row.label}</div>
              {row.values.map((value, idx) => (
                <div key={`${row.label}-${idx}`} className="p-4 text-center">
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="hosting" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl border bg-primary/10 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {hosting.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {hosting.description}
          </p>
          <Button className="mt-6" asChild>
            <Link href={hosting.cta.href}>{hosting.cta.label}</Link>
          </Button>
        </div>
      </section>

      <section id="tiendas" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {stores.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {stores.description}
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {stores.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border bg-card p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                {card.badge ? (
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {card.badge}
                  </span>
                ) : null}
              </div>
              <div className="mt-3 text-2xl font-semibold">{card.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <Button
                className="mt-6"
                variant={card.cta.variant === "secondary" ? "secondary" : "default"}
                asChild
              >
                <Link href={card.cta.href}>{card.cta.label}</Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {process.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {process.description}
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-5">
          {process.steps.map((step, index) => (
            <div key={step} className="rounded-2xl border bg-card p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Paso {index + 1}
              </div>
              <div className="mt-3 text-sm font-medium text-foreground">{step}</div>
            </div>
          ))}
        </div>
        <Link href={process.link.href} className="mt-6 inline-flex text-sm font-semibold text-primary">
          {process.link.label}
        </Link>
      </section>

      <section id="add-ons" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {addOns.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {addOns.description}
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <details className="rounded-2xl border bg-card p-5" open>
            <summary className="cursor-pointer text-base font-semibold">Add-ons (pago unico)</summary>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {addOns.addOns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
          <details className="rounded-2xl border bg-card p-5">
            <summary className="cursor-pointer text-base font-semibold">Recurrentes (mensual)</summary>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {addOns.recurring.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
        <Button className="mt-6" asChild>
          <Link href={addOns.cta.href}>{addOns.cta.label}</Link>
        </Button>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <FAQAccordion />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl border bg-card p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {finalCta.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {finalCta.description}
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href={finalCta.primaryCta.href}>{finalCta.primaryCta.label}</Link>
            </Button>
            <Button
              variant="secondary"
              className="border border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <Link href={finalCta.secondaryCta.href}>{finalCta.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="cotizar" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="grid gap-8 rounded-3xl border bg-card p-8 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {quote.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground md:text-base">
              {quote.description}
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                placeholder={quote.fields.name}
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder={quote.fields.email}
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
              />
              <textarea
                name="project"
                rows={4}
                placeholder={quote.fields.project}
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm"
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit">{quote.submitLabel}</Button>
                <Button variant="secondary" asChild>
                  <Link href={siteConfig.whatsapp}>{quote.whatsappLabel}</Link>
                </Button>
              </div>
            </form>
            <p className="mt-4 text-xs text-muted-foreground">{quote.note}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">{quote.sidebarTitle}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {quote.sidebarList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="agendar" className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="rounded-3xl border bg-primary/10 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {agendar.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {agendar.description}
          </p>
          <Button className="mt-6" asChild>
            <Link href={siteConfig.agendaUrl}>{agendar.cta.label}</Link>
          </Button>
        </div>
      </section>
    </SolutionTemplate>
  );
}
