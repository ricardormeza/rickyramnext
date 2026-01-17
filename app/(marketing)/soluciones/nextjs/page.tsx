import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, BarChart3, Bot, Megaphone, Search, Shield } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PackageTabs } from "@/components/sections/PackageTabs";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { SolutionTemplate } from "@/components/sections/solution-template";
import { nextjsContent, nextjsMetadata } from "@/content/solution/nextjs";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FAQAccordion } from "@/components/sections/faq-accordion";

export const metadata = nextjsMetadata;

export default function NextjsSolutionPage() {
  type NotForItem = {
    text: string;
    link?: { label: string; href: string };
    suffix?: string;
  };
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

  const packageImages: Record<string, string> = {
    "Landing (custom)": "/next/landing-next.png",
    "Sitio basico (custom)": "/next/sitioBasico-next.png",
    "PyME (custom)": "/next/pyme-next.png",
    "E-commerce headless": "/next/ecommerce-next.png",
    "Dashboard / App MVP": "/next/dashboard-next.png",
  };

  const packageTabs = pricing.table.map((item) => {
    const nameLower = item.name.toLowerCase();
    const scopeCard = scopes.cards.find((card) => {
      const titleLower = card.title.toLowerCase();
      if (nameLower.includes("e-commerce") || nameLower.includes("dashboard")) {
        return titleLower.includes("e-commerce") || titleLower.includes("dashboard");
      }

      return titleLower.startsWith(nameLower.replace(" (custom)", ""));
    });

    return {
      ...item,
      bullets: scopeCard?.bullets ?? [],
      image: packageImages[item.name],
      ctaText: "Quiero comenzar",
      href: "/contacto",
    };
  });

  const addOnIcons: Record<string, React.ElementType> = {
    "Medicion (Analytics)": BarChart3,
    SEO: Search,
    "Ads (cuando ya hay tracking y oferta clara)": Megaphone,
    "Automatizacion / Integraciones": Bot,
    "Seguridad / Operacion": Shield,
  };

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
          {/* <div className="text-sm font-semibold">{hero.card.title}</div> */}
          <div className="mt-2 w-full max-w-[500px] overflow-hidden rounded-xl">
            <video
              className="aspect-square h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/next/nextjs-video.mp4" type="video/mp4" />
              Tu navegador no soporta video.
            </video>
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
            {(notFor.bullets as readonly NotForItem[]).map((item, index) => (
              <li key={`${item.text}-${index}`}>
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
              </li>
            ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="text-muted-foreground">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
          <div className="mb-10 flex w-full flex-col items-center text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {canBuild.title}
            </h2>
          </div>
          <div className="flex flex-wrap -m-4">
            {canBuild.bullets.map((item, index) => (
              <ScrollReveal
                key={item}
                className="fade-up flex w-full p-4 md:w-1/2 xl:w-1/3"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="h-full w-full rounded-lg border border-border bg-card p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-sm font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item}</h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="que-incluye" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="rounded-3xl border bg-card p-8 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-white/80 px-6 pb-5 pt-6 md:col-span-2">
              <h2 className="text-lg font-semibold text-foreground">
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
            </div>
            <div className="rounded-2xl border bg-white/80 px-6 pb-5 pt-6 md:col-span-1">
              <h3 className="text-lg font-semibold text-foreground">
                {includes.seoTitle}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground md:text-base">
                {includes.seoList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border bg-white/80 px-6 pb-5 pt-6 md:col-span-1">
              <h3 className="text-lg font-semibold text-foreground">
                {includes.notIncludedTitle}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground md:text-base">
                {includes.notIncluded.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <PackageTabs items={packageTabs} />
      </section>

      

      

      <section id="add-ons" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {addOns.title}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            {addOns.description}
          </p>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-16 rounded-full bg-primary" />
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {addOns.sections.map((section) => (
            <div
              key={section.title}
              className="flex w-full flex-col items-center p-4 text-center md:w-1/2 xl:w-1/3"
            >
              <div className="mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                {addOnIcons[section.title] ? (
                  (() => {
                    const Icon = addOnIcons[section.title];
                    return <Icon className="h-8 w-8" />;
                  })()
                ) : (
                  <span className="text-sm font-semibold">
                    {section.title.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
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
      </section> */}

      

      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <ProcessSteps />
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
          <FAQAccordion faqs={faq} />
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
        </div>
      </section>
    </SolutionTemplate>
  );
}
