import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PricingSelection } from "@/components/pricing/types";

export type PricingCardData = {
  tech: "Astro" | "WordPress" | "Next.js";
  badge?: string;
  plan: string;
  title: string;
  price: string;
  idealFor: string;
  includes: readonly string[];
  timeline?: string;
  note?: string;
  cta: {
    label: string;
    href: string;
  };
};

const techStyles: Record<
  PricingCardData["tech"],
  {
    accent: string;
    badge: string;
    trait: string;
    traitBadge: string;
    glow: string;
  }
> = {
  Astro: {
    accent:
      "bg-gradient-to-r from-fuchsia-500/20 via-orange-500/15 to-transparent",
    badge:
      "border-fuchsia-200/70 bg-fuchsia-500/10 text-fuchsia-700 dark:border-fuchsia-500/30 dark:text-fuchsia-200",
    trait: "Rendimiento",
    traitBadge:
      "border-orange-200/70 bg-orange-500/10 text-orange-700 dark:border-orange-400/30 dark:text-orange-200",
    glow: "hover:shadow-[0_24px_50px_-24px_rgba(168,85,247,0.45)]",
  },
  WordPress: {
    accent: "bg-gradient-to-r from-blue-500/20 via-sky-400/10 to-transparent",
    badge:
      "border-blue-200/70 bg-blue-500/10 text-blue-700 dark:border-blue-500/30 dark:text-blue-200",
    trait: "Editable",
    traitBadge:
      "border-sky-200/70 bg-sky-500/10 text-sky-700 dark:border-sky-500/30 dark:text-sky-200",
    glow: "hover:shadow-[0_24px_50px_-24px_rgba(24,129,255,0.35)]",
  },
  "Next.js": {
    accent: "bg-gradient-to-r from-slate-400/30 via-slate-200/20 to-transparent",
    badge:
      "border-slate-300/70 bg-slate-500/10 text-slate-700 dark:border-slate-500/30 dark:text-slate-200",
    trait: "Escalable",
    traitBadge:
      "border-slate-200/70 bg-slate-500/10 text-slate-700 dark:border-slate-500/30 dark:text-slate-200",
    glow: "hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.35)]",
  },
};

type PricingCardProps = {
  card: PricingCardData;
  isSelected?: boolean;
  onSelect?: (selection: PricingSelection) => void;
  tabId: string;
};

export function PricingCard({ card, isSelected, onSelect, tabId }: PricingCardProps) {
  const techMeta = techStyles[card.tech];
  const isQuote = card.price.trim().toLowerCase() === "a cotizar";

  return (
    <Card
      className={cn(
        "group relative overflow-hidden border-border/60 bg-card/85 transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg before:absolute before:inset-0 before:rounded-2xl before:bg-[radial-gradient(160px_circle_at_top_right,rgba(255,255,255,0.45),transparent_70%)] before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:pointer-events-none",
        techMeta.glow,
        isSelected && "border-primary/60 shadow-lg ring-1 ring-primary/40"
      )}
    >
      <div aria-hidden="true" className={cn("h-1 w-full", techMeta.accent)} />
      <CardHeader className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge className={techMeta.badge}>{card.tech}</Badge>
          {card.badge ? (
            <Badge variant="secondary" className="bg-secondary/70 text-foreground">
              {card.badge}
            </Badge>
          ) : null}
          <Badge variant="outline" className={techMeta.traitBadge}>
            {techMeta.trait}
          </Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
          {isQuote ? (
            <Badge className="border-amber-200/70 bg-amber-400/15 text-amber-800 dark:border-amber-500/40 dark:text-amber-200">
              A cotizar
            </Badge>
          ) : (
            <p className="text-2xl font-semibold text-foreground">{card.price}</p>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Ideal para:</span>{" "}
          {card.idealFor}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-2 text-sm text-muted-foreground">
          {card.includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="mt-0.5 h-4 w-4 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {card.timeline ? (
          <p className="text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Timeline:</span>{" "}
            {card.timeline}
          </p>
        ) : null}
        {card.note ? (
          <p className="text-xs text-muted-foreground">{card.note}</p>
        ) : null}
      </CardContent>
      <CardFooter className="flex items-center justify-between gap-3">
        <Button
          type="button"
          aria-pressed={isSelected}
          onClick={() =>
            onSelect?.({
              tab: tabId,
              tech: card.tech,
              plan: card.plan,
              title: card.title,
              price: card.price,
            })
          }
        >
          Seleccionar
        </Button>
      </CardFooter>
    </Card>
  );
}
