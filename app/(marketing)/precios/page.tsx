import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { preciosContent } from "@/content/pricing";
import { PricingInlineCta } from "@/components/pricing/PricingInlineCta";
import { PricingTabs } from "@/components/pricing/PricingTabs";
import { Button } from "@/components/ui/button";
import type { PricingSelection } from "@/components/pricing/types";

export const metadata: Metadata = {
  title: preciosContent.seo.title,
  description: preciosContent.seo.description,
};

const normalizeTech = (tech: string) =>
  tech.toLowerCase().replace(".", "").replace(/\s+/g, "");

const getSelectionFromParams = (searchParams?: {
  [key: string]: string | string[] | undefined;
}): PricingSelection | null => {
  const tabParam = typeof searchParams?.tab === "string" ? searchParams.tab : null;
  const techParam = typeof searchParams?.tech === "string" ? searchParams.tech : null;
  const planParam = typeof searchParams?.plan === "string" ? searchParams.plan : null;

  if (!tabParam || !techParam || !planParam) return null;

  const tabItem = preciosContent.tabs.items.find((item) => item.id === tabParam);
  if (!tabItem) return null;

  const card = tabItem.cards.find(
    (item) =>
      normalizeTech(item.tech) === normalizeTech(techParam) &&
      item.plan === planParam
  );

  if (!card) return null;

  return {
    tab: tabItem.id,
    tech: card.tech,
    plan: card.plan,
    title: card.title,
    price: card.price,
  };
};

export default function PreciosPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const initialSelection = getSelectionFromParams(searchParams);
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(24,129,255,0.18),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.16),transparent_70%)] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-24 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.18),transparent_70%)] blur-3xl"
      />

      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20 lg:pt-28">
        <div className="mx-auto flex min-h-[75vh] max-w-3xl flex-col justify-center space-y-5 text-center">
          <div className="flex justify-center">
            <Image
              src="/images/RICKYRAM-DEV.png"
              alt="Rickyram"
              width={220}
              height={220}
              className="h-auto w-40 sm:w-48"
              priority
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            {preciosContent.hero.kicker}
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {preciosContent.hero.title}
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {preciosContent.hero.lead}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {preciosContent.hero.ctas.map((cta, index) => (
              <Button
                key={cta.href}
                asChild
                variant={index === 0 ? "default" : "outline"}
              >
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            ))}
          </div>
          <p className="text-sm text-muted-foreground sm:text-base">
            {preciosContent.hero.note}
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <div className="w-full space-y-2 text-center">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {preciosContent.tabs.title}
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              {preciosContent.tabs.note}
            </p>
          </div>
          <PricingTabs items={preciosContent.tabs.items} />
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-3xl border bg-card/80 p-6 shadow-sm backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            {preciosContent.includes.title}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
            {preciosContent.includes.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                {bullet}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            {preciosContent.includes.hostingNote}
          </p>
        </div>
      </section>

      <section
        id={preciosContent.recomendador.id}
        className="relative mx-auto max-w-6xl px-6 pb-20"
      >
        <div className="rounded-3xl border bg-card/80 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
                {preciosContent.recomendador.title}
              </h2>
              <p className="text-sm text-muted-foreground md:text-base">
                {preciosContent.recomendador.lead}
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground md:text-base">
                {preciosContent.recomendador.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <Button asChild size="lg">
              <Link href={preciosContent.recomendador.cta.href}>
                {preciosContent.recomendador.cta.label}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* <section
        id={preciosContent.addOns.id}
        className="relative mx-auto max-w-6xl px-6 pb-20"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            {preciosContent.addOns.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {preciosContent.addOns.groups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border bg-card/80 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section
        id={preciosContent.contact.id}
        className="relative mx-auto max-w-6xl px-6 pb-24"
      >
        <div className="rounded-3xl border bg-card/80 p-6 shadow-sm backdrop-blur md:p-8">
          <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
            {preciosContent.finalCta.title}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground md:text-base">
            {preciosContent.finalCta.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href={preciosContent.finalCta.primary.href}>
                {preciosContent.finalCta.primary.label}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={preciosContent.finalCta.secondary.href}>
                {preciosContent.finalCta.secondary.label}
              </Link>
            </Button>
          </div>
          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            {preciosContent.contact.items.map((item) => (
              <p key={item.label}>
                <span className="font-semibold text-foreground">
                  {item.label}:
                </span>{" "}
                {item.value}
              </p>
            ))}
          </div>
        </div>
      </section> */}

      <section id="cotizar" className="relative mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border bg-card/80 p-6 shadow-sm backdrop-blur md:p-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
              Cotizar ahora
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              Completa el formulario y te respondemos con un plan claro.
            </p>
          </div>
          <div className="mt-6">
            <PricingInlineCta
              items={preciosContent.tabs.items}
              initialSelection={initialSelection}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

