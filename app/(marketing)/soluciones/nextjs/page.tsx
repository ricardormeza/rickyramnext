import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SolutionTemplate } from "@/components/sections/solution-template";
import { nextjsContent, nextjsMetadata } from "@/content/solution/nextjs";

export const metadata = nextjsMetadata;

export default function NextjsSolutionPage() {
  const {
    hero,
    trustItems,
    stickyNav,
    why,
    whoIsItFor,
    notFor,
    canBuild,
    includes,
    pricing,
    scopes,
    addOns,
    structure,
    tech,
    process,
    faq,
    cta,
  } = nextjsContent;

  const heroCard = hero.card ? (
    <div className="rounded-3xl border bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase text-muted-foreground">
          {hero.card.badgeLabel}
        </span>
        <BadgeCheck className="h-5 w-5 text-primary" />
      </div>
      <div className="mt-6">
        <div className="rounded-2xl border bg-muted/40 p-4">
          <div className="text-sm font-semibold">{hero.card.title}</div>
          <div className="mt-2 w-full max-w-[500px] overflow-hidden rounded-xl">
            <Image
              src={hero.card.image.src}
              alt={hero.card.image.alt}
              width={500}
              height={500}
              loading="lazy"
              className="aspect-square h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
      <Image
        src={hero.card.logo.src}
        alt={hero.card.logo.alt}
        width={56}
        height={56}
        className="absolute -right-6 -top-6 h-14 w-14 rounded-full bg-white p-2 shadow"
      />
    </div>
  ) : null;

  return (
    <SolutionTemplate
      hero={{ ...hero, card: heroCard }}
      trustItems={trustItems}
      stickyNav={stickyNav}
    >
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {why.title}
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
              {why.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground md:text-base">{why.note}</p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">{whoIsItFor.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
              {whoIsItFor.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold">{notFor.title}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
              {notFor.bullets.map((item, index) => (
                <li key={`${item.text}-${index}`}>
                  {item.text ? (
                    <>
                      {item.text}{" "}
                      {item.link ? (
                        <Link
                          href={item.link.href}
                          className="font-semibold text-primary"
                        >
                          {item.link.label}
                        </Link>
                      ) : null}
                      {item.suffix ?? null}
                    </>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
            <Link href={notFor.cta.href} className="text-sm font-semibold text-primary">
              {notFor.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {canBuild.title}
        </h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
          {canBuild.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="que-incluye" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl border bg-card p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {includes.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {includes.includeLead}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
            {includes.includeList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="mt-6 text-lg font-semibold">{includes.seoTitle}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground md:text-base">
            {includes.seoList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h3 className="mt-6 text-lg font-semibold">{includes.notIncludedTitle}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground md:text-base">
            {includes.notIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="precios" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {pricing.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {pricing.description}
          </p>
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl border bg-white">
          <div className="grid grid-cols-4 border-b bg-muted/40 text-sm font-semibold text-muted-foreground">
            <div className="p-4">Paquete</div>
            <div className="p-4">Ideal para</div>
            <div className="p-4">Alcance recomendado</div>
            <div className="p-4 text-right">Precio</div>
          </div>
          {pricing.table.map((row) => (
            <div key={row.name} className="grid grid-cols-4 border-b text-sm">
              <div className="p-4 font-medium">{row.name}</div>
              <div className="p-4">{row.idealFor}</div>
              <div className="p-4">{row.scope}</div>
              <div className="p-4 text-right font-semibold">{row.price}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 space-y-2 text-sm text-muted-foreground md:text-base">
          <p className="font-semibold text-foreground">{pricing.pricingNotesTitle}</p>
          <ul className="space-y-2">
            {pricing.pricingNotes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="alcances" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {scopes.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {scopes.description}
          </p>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {scopes.cards.map((card) => (
            <div key={card.title} className="rounded-2xl border bg-card p-6">
              <h3 className="text-base font-semibold">{card.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {card.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{scopes.note}</p>
      </section>

      <section id="add-ons" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {addOns.title}
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {addOns.sections.map((section) => (
            <div key={section.title} className="rounded-2xl border bg-card p-6">
              <h3 className="text-base font-semibold">{section.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {structure.title}
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground md:text-base">
            {structure.landingSteps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p className="pt-4 text-sm text-muted-foreground md:text-base">
            {structure.pymeIntro}
          </p>
          <ul className="mt-2 space-y-2 text-sm text-muted-foreground md:text-base">
            {structure.pymeBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {tech.title}
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
            {tech.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {process.title}
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-muted-foreground md:text-base">
            {process.steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">FAQ</h2>
        <div className="mt-6 grid gap-4">
          {faq.map((item) => (
            <details key={item.question} className="rounded-2xl border bg-card p-5">
              <summary className="cursor-pointer text-base font-semibold">
                {item.question}
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="cotizar" className="mx-auto max-w-6xl px-4 pb-16 md:px-6">
        <div className="rounded-3xl border bg-primary/10 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {cta.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {cta.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href={cta.primaryCta.href}>{cta.primaryCta.label}</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href={cta.secondaryCta.href}>{cta.secondaryCta.label}</Link>
            </Button>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">
            <div>WhatsApp: {cta.whatsapp}</div>
            <div>Correo: {cta.email}</div>
          </div>
        </div>
      </section>
    </SolutionTemplate>
  );
}
