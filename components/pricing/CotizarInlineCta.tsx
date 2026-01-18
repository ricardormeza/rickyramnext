"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PricingForm } from "@/components/pricing/PricingForm";
import type { PricingSelection } from "@/components/pricing/types";
import type { CotizarCategory } from "@/content/cotizar";
import { cn } from "@/lib/utils";

type CotizarInlineCtaProps = {
  categories: readonly CotizarCategory[];
  initialSelection?: PricingSelection | null;
};

const inputStyles =
  "mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function CotizarInlineCta({
  categories,
  initialSelection,
}: CotizarInlineCtaProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hasAppliedParams = React.useRef(false);

  const firstCategory = categories[0]?.id ?? "";
  const [categoryId, setCategoryId] = React.useState(
    initialSelection?.tab ?? firstCategory
  );
  const [stackId, setStackId] = React.useState(initialSelection?.tech ?? "");
  const [planId, setPlanId] = React.useState(initialSelection?.plan ?? "");

  const category = React.useMemo(
    () => categories.find((item) => item.id === categoryId) ?? categories[0],
    [categories, categoryId]
  );

  const stackOptions = React.useMemo(() => category?.stacks ?? [], [category]);

  React.useEffect(() => {
    if (!stackOptions.length) return;
    if (!stackId || !stackOptions.some((item) => item.id === stackId)) {
      setStackId(stackOptions[0]?.id ?? "");
    }
  }, [stackId, stackOptions]);

  const stack = React.useMemo(
    () => stackOptions.find((item) => item.id === stackId) ?? stackOptions[0],
    [stackId, stackOptions]
  );

  const planOptions = React.useMemo(() => stack?.plans ?? [], [stack]);

  React.useEffect(() => {
    if (!planOptions.length) return;
    if (!planId || !planOptions.some((item) => item.id === planId)) {
      setPlanId(planOptions[0]?.id ?? "");
    }
  }, [planId, planOptions]);

  const selectedPlan = React.useMemo(() => {
    if (!category || !stack) return null;
    return planOptions.find((item) => item.id === planId) ?? null;
  }, [category, planId, planOptions, stack]);

  const selection: PricingSelection | undefined =
    category && stack && selectedPlan
      ? {
          tab: category.id,
          tech: stack.id,
          plan: selectedPlan.id,
          title: selectedPlan.title,
          price: selectedPlan.price ?? "",
        }
      : undefined;

  const updateUrl = React.useCallback(
    (nextSelection: PricingSelection | undefined) => {
      if (!nextSelection) return;
      const currentTab = searchParams?.get("tab");
      const currentTech = searchParams?.get("tech");
      const currentPlan = searchParams?.get("plan");

      if (
        currentTab === nextSelection.tab &&
        currentTech === nextSelection.tech &&
        currentPlan === nextSelection.plan
      ) {
        return;
      }

      const params = new URLSearchParams(searchParams?.toString());
      params.set("tab", nextSelection.tab);
      params.set("tech", nextSelection.tech);
      params.set("plan", nextSelection.plan);
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
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

    const matchedCategory = categories.find((item) => item.id === tabParam);
    const matchedStack = matchedCategory?.stacks.find(
      (item) => item.id === techParam
    );
    const matchedPlan = matchedStack?.plans.find(
      (item) => item.id === planParam
    );

    if (matchedCategory && matchedStack && matchedPlan) {
      setCategoryId(matchedCategory.id);
      setStackId(matchedStack.id);
      setPlanId(matchedPlan.id);
    }

    hasAppliedParams.current = true;
  }, [categories, searchParams]);

  React.useEffect(() => {
    if (!hasAppliedParams.current || !selection) return;
    updateUrl(selection);
  }, [selection, updateUrl]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <label className="text-sm font-semibold text-foreground">
          Tipo de proyecto
          <select
            value={categoryId}
            onChange={(event) => {
              const nextCategory = event.target.value;
              setCategoryId(nextCategory);
              setStackId("");
              setPlanId("");
            }}
            className={inputStyles}
          >
            {categories.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-foreground">
          Tecnologia / Servicio
          <select
            value={stackId}
            onChange={(event) => {
              setStackId(event.target.value);
              setPlanId("");
            }}
            className={inputStyles}
          >
            {stackOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-semibold text-foreground">
          Plan
          <select
            value={planId}
            onChange={(event) => setPlanId(event.target.value)}
            className={cn(inputStyles, !planOptions.length && "opacity-70")}
          >
            {planOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.price ? `${option.title} — ${option.price}` : option.title}
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
