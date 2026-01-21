import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { BadgeCheck, CheckCircle2, FileCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/sections/faq-accordion";
import { PackageTabs } from "@/components/sections/PackageTabs";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SolutionTemplate } from "@/components/sections/solution-template";
import { wordpressContent, wordpressMetadata } from "@/content/solution/wordpress";
import { ProcessSteps } from "@/components/sections/process-steps";
import ShinyText from "@/components/ui/ShinyText";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: wordpressMetadata.title,
  description: wordpressMetadata.description,
  alternates: {
    canonical: "/soluciones/wordpress",
  },
  openGraph: {
    title: wordpressMetadata.openGraph?.title ?? wordpressMetadata.title,
    description:
      wordpressMetadata.openGraph?.description ?? wordpressMetadata.description,
    url: `${siteConfig.siteUrl}/soluciones/wordpress`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: wordpressMetadata.openGraph?.title ?? wordpressMetadata.title,
    description:
      wordpressMetadata.openGraph?.description ?? wordpressMetadata.description,
  },
};

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
    faqs,
    finalCta,
    agendar,
  } = wordpressContent;

  const packageImages: Record<string, string> = {
    "Plan Express": "/wordpress/express-wordpress.png",
    "Landing Start": "/wordpress/landing-star-wordpress.png",
    "Sitio Profesional": "/wordpress/sitioProfesional-wordpress.png",
    "Presencia Online": "/wordpress/presenciaOnline-wordpress.png",
  };

  const packageTabs = pricing.plans.map((plan) => ({
    name: plan.title,
    idealFor: plan.description,
    price: plan.price,
    bullets: plan.bullets,
    ctaText: plan.cta,
    href: plan.href,
    image: packageImages[plan.title],
  }));

  const storePackageImages: Record<string, string> = {
    "Mi Tienda Online": "/wordpress/wocoomerce-wordpress.png",
    "Corporativo Elite": "/wordpress/corporativo-wordpress.png",
  };

  const storePackageTabs = stores.cards.map((card) => ({
    name: card.title,
    price: card.price,
    bullets: card.bullets,
    ctaText: card.cta.label,
    href: card.cta.href,
    image: storePackageImages[card.title],
  }));

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

  const heroTitle = (
    <ShinyText text={hero.title} color="#0b1220" shineColor="#21759b" />
  );

  return (
    <SolutionTemplate
      hero={{ ...hero, title: heroTitle, card: heroCard }}
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
          <h2 className="text-2xl text-center font-semibold tracking-tight md:text-3xl">
            {pricing.title}
          </h2>
          <p className="text-sm text-center md:mt-5 text-muted-foreground md:text-base">
            {pricing.description}
          </p>
        </div>
        <div className="mt-6">
          <PackageTabs items={packageTabs} />
        </div>
        
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <h3 className="font-semibold text-center mt-4 mb-4 md:text-xl">Tabla comparativa de planes de sitios Wordpress Starter</h3>
        <div className="rounded-3xl border bg-white">
          <div className="border-b px-6 py-4 text-sm font-semibold text-muted-foreground">
            Tabla comparativa de planes WordPress (sitio)
          </div>
          <div className="grid grid-cols-5 border-b bg-muted/40 text-sm font-semibold text-muted-foreground">
            <div className="p-4">Caracteristica</div>
            <div className="p-4 text-center">Express</div>
            <div className="p-4 text-center">Landing</div>
            <div className="p-4 text-center">Profesional</div>
            <div className="p-4 text-center">Presencia Online</div>
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
        <div className="mt-6">
          <h3 id="tiendas" className="mt-6 font-semibold text-center mb-4">Tiendas en linea con WooCommerce</h3>
          <PackageTabs items={storePackageTabs} />
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

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <ProcessSteps />
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
          <div className="rounded-2xl border bg-card p-5">
            <div className="text-base font-semibold">Add-ons (pago unico)</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {addOns.addOns.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-5">
            <div className="text-base font-semibold">Recurrentes (mensual)</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {addOns.recurring.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <FAQAccordion faqs={faqs} />
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
