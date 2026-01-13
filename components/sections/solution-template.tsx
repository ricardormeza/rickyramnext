import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { cn } from "@/lib/utils";

type BreadcrumbItem = {
  label: string;
  href: string;
};

type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type HeroTextLink = {
  label: string;
  href: string;
};

type TrustItem = {
  icon: LucideIcon;
  label: string;
};

type StickyNavItem = {
  label: string;
  href: string;
};

type SolutionHero = {
  breadcrumbs?: BreadcrumbItem[];
  title: string;
  descriptions?: string[];
  bullets?: string[];
  ctas?: HeroCta[];
  textLink?: HeroTextLink;
  note?: string;
  card?: ReactNode;
};

type SolutionTemplateProps = {
  hero: SolutionHero;
  trustItems?: TrustItem[];
  stickyNav?: StickyNavItem[];
  children?: ReactNode;
};

export function SolutionTemplate({
  hero,
  trustItems,
  stickyNav,
  children,
}: SolutionTemplateProps) {
  return (
    <main className="bg-background text-foreground">
      <section
        id="overview"
        className="mx-auto max-w-6xl px-4 pb-10 pt-12 md:px-6 md:pt-16"
      >
        {hero.breadcrumbs?.length ? (
          <nav
            className="fade-up-immediate text-xs text-muted-foreground"
            style={{ animationDelay: "0ms" }}
          >
            {hero.breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                <Link href={crumb.href}>{crumb.label}</Link>
                {index < hero.breadcrumbs!.length - 1 ? " / " : null}
              </span>
            ))}
          </nav>
        ) : null}

        <div
          className={cn(
            "mt-6 grid items-center gap-10",
            hero.card ? "md:grid-cols-2" : "md:grid-cols-1"
          )}
        >
          <div className="space-y-5">
            <h1
              className="fade-up-immediate text-3xl font-semibold tracking-tight md:text-5xl"
              style={{ animationDelay: "80ms" }}
            >
              {hero.title}
            </h1>

            {hero.descriptions?.map((description, index) => (
              <p
                key={description}
                className="fade-up-immediate text-base text-muted-foreground md:text-lg"
                style={{ animationDelay: `${160 + index * 80}ms` }}
              >
                {description}
              </p>
            ))}

            {hero.bullets?.length ? (
              <ul
                className="fade-up-immediate space-y-2 text-sm text-muted-foreground md:text-base"
                style={{
                  animationDelay: `${160 + (hero.descriptions?.length ?? 0) * 80}ms`,
                }}
              >
                {hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" /> {bullet}
                  </li>
                ))}
              </ul>
            ) : null}

            {hero.ctas?.length ? (
              <div
                className="fade-up-immediate flex flex-wrap gap-3"
                style={{
                  animationDelay: `${
                    240 +
                    (hero.descriptions?.length ?? 0) * 80 +
                    (hero.bullets?.length ? 80 : 0)
                  }ms`,
                }}
              >
                {hero.ctas.map((cta) => (
                  <Button
                    key={cta.href}
                    variant={cta.variant === "secondary" ? "secondary" : "default"}
                    asChild
                  >
                    <Link href={cta.href}>{cta.label}</Link>
                  </Button>
                ))}
                {hero.textLink ? (
                  <Link
                    href={hero.textLink.href}
                    className="text-sm font-semibold text-muted-foreground hover:text-primary"
                  >
                    {hero.textLink.label}
                  </Link>
                ) : null}
              </div>
            ) : null}

            {hero.note ? (
              <p
                className="fade-up-immediate text-sm text-muted-foreground"
                style={{
                  animationDelay: `${
                    320 +
                    (hero.descriptions?.length ?? 0) * 80 +
                    (hero.bullets?.length ? 80 : 0) +
                    (hero.ctas?.length ? 80 : 0)
                  }ms`,
                }}
              >
                {hero.note}
              </p>
            ) : null}
          </div>

          {hero.card ? (
            <div
              className="fade-up-immediate relative"
              style={{ animationDelay: "560ms" }}
            >
              {hero.card}
            </div>
          ) : null}
        </div>
      </section>

      {trustItems?.length ? (
        <section className="border-y bg-muted/30">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-6 text-sm md:grid-cols-4 md:px-6">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  key={item.label}
                  className="fade-up flex items-center gap-3"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="font-medium text-muted-foreground md:text-xl">
                    {item.label}
                  </span>
                </ScrollReveal>
              );
            })}
          </div>
        </section>
      ) : null}
        {/* MENU DE PILDORA INICIO */}
      {stickyNav?.length ? (
        <div className="sticky top-20 z-40 hidden lg:block">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <div className="mt-6 flex items-center justify-center gap-6 rounded-full border bg-white/90 px-6 py-3 text-sm font-medium text-muted-foreground shadow-sm backdrop-blur">
              {stickyNav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {children}
    </main>
  );
}
