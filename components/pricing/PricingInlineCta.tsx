"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PricingForm } from "@/components/pricing/PricingForm";
import type { PricingCardData } from "@/components/pricing/PricingCard";
import type { PricingSelection } from "@/components/pricing/types";
import type { PricingTabItem } from "@/components/pricing/PricingTabs";
import { cn } from "@/lib/utils";

const normalizeTech = (tech: string) =>
  tech.toLowerCase().replace(".", "").replace(/\s+/g, "");

type PricingInlineCtaProps = {
  items: readonly PricingTabItem[];
  initialSelection?: PricingSelection | null;
};

const inputStyles =
  "mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function PricingInlineCta({ items, initialSelection }: PricingInlineCtaProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasAppliedParams = React.useRef(false);
  const searchParamsRef = React.useRef(searchParams);
  const firstTab = items[0]?.id ?? "";
  const [tabId, setTabId] = React.useState(initialSelection?.tab ?? firstTab);
  const allowedTechs = React.useMemo(
    () => ["Astro", "WordPress", "Next.js"] as const,
    []
  );
  const getInitialTech = (value?: string): PricingCardData["tech"] | "" =>
    allowedTechs.includes(value as PricingCardData["tech"])
      ? (value as PricingCardData["tech"])
      : "";
  const [tech, setTech] = React.useState<PricingCardData["tech"] | "">(
    getInitialTech(initialSelection?.tech)
  );
  const [plan, setPlan] = React.useState(initialSelection?.plan ?? "");

  const tabItem = React.useMemo(
    () => items.find((item) => item.id === tabId) ?? items[0],
    [items, tabId]
  );

  const techOptions = React.useMemo(() => {
    if (!tabItem) return [];
    return Array.from(new Set(tabItem.cards.map((card) => card.tech)));
  }, [tabItem]);

  React.useEffect(() => {
    if (!tabItem) return;
    if (!tech || !techOptions.includes(tech)) {
      setTech(techOptions[0] ?? "");
    }
  }, [tabItem, tech, techOptions]);

  const planOptions = React.useMemo(() => {
    if (!tabItem || !tech) return [];
    return tabItem.cards.filter((card) => card.tech === tech);
  }, [tabItem, tech]);

  React.useEffect(() => {
    if (!planOptions.length) return;
    if (!plan || !planOptions.some((card) => card.plan === plan)) {
      setPlan(planOptions[0]?.plan ?? "");
    }
  }, [plan, planOptions]);

  const selectedCard = React.useMemo(() => {
    if (!tabItem || !tech || !plan) return null;
    return tabItem.cards.find(
      (card) => normalizeTech(card.tech) === normalizeTech(tech) && card.plan === plan
    );
  }, [plan, tabItem, tech]);

  const selection: PricingSelection | undefined = selectedCard
    ? {
        tab: tabItem?.id ?? "",
        tech: selectedCard.tech,
        plan: selectedCard.plan,
        title: selectedCard.title,
        price: selectedCard.price,
      }
    : undefined;

  const updateUrl = React.useCallback(
    (nextSelection: PricingSelection | undefined) => {
      if (!nextSelection) return;
      const nextTab = nextSelection.tab;
      const nextTech = normalizeTech(nextSelection.tech);
      const nextPlan = nextSelection.plan;
      const paramsSnapshot = searchParamsRef.current;
      const currentTab = paramsSnapshot?.get("tab");
      const currentTech = paramsSnapshot?.get("tech");
      const currentPlan = paramsSnapshot?.get("plan");

      if (currentTab === nextTab && currentTech === nextTech && currentPlan === nextPlan) {
        return;
      }

      const params = new URLSearchParams(paramsSnapshot?.toString());
      params.set("tab", nextTab);
      params.set("tech", nextTech);
      params.set("plan", nextPlan);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router]
  );

  React.useEffect(() => {
    if (hasAppliedParams.current) return;
    const tabParam = searchParams?.get("tab");
    const techParam = searchParams?.get("tech");
    const planParam = searchParams?.get("plan");
    if (!tabParam || !techParam || !planParam) {
      hasAppliedParams.current = true;
      return;
    }

    const matchedTab = items.find((item) => item.id === tabParam);
    if (!matchedTab) {
      hasAppliedParams.current = true;
      return;
    }

    const normalizedTech = normalizeTech(techParam);
    const techCards = matchedTab.cards.filter(
      (card) => normalizeTech(card.tech) === normalizedTech
    );
    const matchedCard = techCards.find((card) => card.plan === planParam);

    if (techCards.length) {
      setTabId(matchedTab.id);
      setTech(techCards[0].tech);
      setPlan(matchedCard?.plan ?? techCards[0].plan);
    }

    hasAppliedParams.current = true;
  }, [items, searchParams]);

  React.useEffect(() => {
    if (!hasAppliedParams.current || !selection) return;
    updateUrl(selection);
  }, [selection, updateUrl]);

  React.useEffect(() => {
    searchParamsRef.current = searchParams;
  }, [searchParams]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm font-semibold text-foreground">
          Tipo de proyecto
          <select
            value={tabId}
            onChange={(event) => {
              const nextTab = event.target.value;
              setTabId(nextTab);
              setTech("");
              setPlan("");
            }}
            className={inputStyles}
          >
            {items.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-foreground">
          Tecnologia
          <select
            value={tech}
            onChange={(event) => {
              setTech(event.target.value as PricingCardData["tech"]);
              setPlan("");
            }}
            className={inputStyles}
          >
            {techOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-foreground">
          Plan
          <select
            value={plan}
            onChange={(event) => setPlan(event.target.value)}
            className={cn(inputStyles, !planOptions.length && "opacity-70")}
          >
            {planOptions.map((option) => (
              <option key={option.plan} value={option.plan}>
                {option.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <PricingForm
        selectedPlan={selection}
        defaultValues={
          selection
            ? {
                tab: selection.tab,
                tech: selection.tech,
                plan: selection.plan,
              }
            : undefined
        }
        variant="inline"
      />
    </div>
  );
}
