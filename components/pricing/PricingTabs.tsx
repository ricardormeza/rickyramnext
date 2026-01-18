"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, easeOut, motion, useReducedMotion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { PricingCard, type PricingCardData } from "@/components/pricing/PricingCard";
import { PricingForm } from "@/components/pricing/PricingForm";
import { cn } from "@/lib/utils";
import type { PricingSelection } from "@/components/pricing/types";

export type PricingTabItem = {
  id: string;
  label: string;
  subtitle?: string;
  description?: string;
  cards: readonly PricingCardData[];
};

type PricingTabsProps = {
  items: readonly PricingTabItem[];
};

const normalizeTech = (tech: string) =>
  tech.toLowerCase().replace(".", "").replace(/\s+/g, "");

export function PricingTabs({ items }: PricingTabsProps) {
  const [value, setValue] = React.useState(items[0]?.id ?? "");
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedPlan, setSelectedPlan] = React.useState<PricingSelection | null>(
    null
  );
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const [resetSignal, setResetSignal] = React.useState(0);
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const triggerRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const activeItem = items.find((item) => item.id === value) ?? items[0];

  const contentMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.2 },
      }
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 },
        transition: { duration: 0.28, ease: easeOut },
      };

  const updateUrl = React.useCallback(
    (nextTab: string, selection?: PricingSelection | null) => {
      const params = new URLSearchParams(searchParams?.toString());
      params.set("tab", nextTab);
      if (selection) {
        params.set("tech", normalizeTech(selection.tech));
        params.set("plan", selection.plan);
      } else {
        params.delete("tech");
        params.delete("plan");
      }
      router.replace(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  const handleTabChange = React.useCallback(
    (nextValue: string) => {
      setValue(nextValue);
      setSelectedPlan(null);
      updateUrl(nextValue, null);
    },
    [updateUrl]
  );

  const handleSelect = React.useCallback(
    (selection: PricingSelection) => {
      setSelectedPlan(selection);
      setValue(selection.tab);
      updateUrl(selection.tab, selection);
      setIsSheetOpen(true);
    },
    [updateUrl]
  );

  const focusTabs = React.useCallback(() => {
    const list = listRef.current;
    list?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    const trigger =
      triggerRefs.current[value] ??
      triggerRefs.current[items[0]?.id ?? ""] ??
      null;
    trigger?.focus();
  }, [items, reduceMotion, value]);

  React.useEffect(() => {
    const tabParam = searchParams?.get("tab");
    const techParam = searchParams?.get("tech");
    const planParam = searchParams?.get("plan");

    if (!tabParam && !techParam && !planParam) return;

    const matchedTab = items.find((item) => item.id === tabParam) ?? items[0];
    if (matchedTab && matchedTab.id !== value) {
      setValue(matchedTab.id);
    }

    if (techParam && planParam && matchedTab) {
      const matchedCard = matchedTab.cards.find(
        (card) =>
          normalizeTech(card.tech) === normalizeTech(techParam) &&
          card.plan === planParam
      );
      if (matchedCard) {
        setSelectedPlan({
          tab: matchedTab.id,
          tech: matchedCard.tech,
          plan: matchedCard.plan,
          title: matchedCard.title,
          price: matchedCard.price,
        });
        return;
      }
    }

    setSelectedPlan(null);
  }, [items, searchParams, value]);

  return (
    <div className="w-full">
      <Tabs value={value} onValueChange={handleTabChange}>
        <TabsList
          ref={listRef}
          className="relative mx-auto flex w-full max-w-4xl items-center justify-start gap-2 rounded-full border border-border/60 bg-background/70 p-1 text-muted-foreground shadow-sm backdrop-blur md:justify-center md:overflow-visible overflow-x-auto"
        >
          {items.map((item) => {
            const isActive = item.id === value;
            return (
              <TabsTrigger
                key={item.id}
                value={item.id}
                className={cn(
                  "relative isolate shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground",
                  isActive && "text-foreground"
                )}
                ref={(node) => {
                  triggerRefs.current[item.id] = node;
                }}
              >
                {isActive ? (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute inset-0 -z-10 rounded-full bg-primary/15"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 260, damping: 24 }
                    }
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </Tabs>

      <AnimatePresence mode="wait">
        {activeItem ? (
          <motion.div key={activeItem.id} className="mt-8" layout {...contentMotion}>
            <div className="space-y-6">
              {(activeItem.subtitle || activeItem.description) && (
                <div className="max-w-3xl space-y-2">
                  {activeItem.subtitle ? (
                    <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                      {activeItem.subtitle}
                    </h3>
                  ) : null}
                  {activeItem.description ? (
                    <p className="text-sm text-muted-foreground md:text-base">
                      {activeItem.description}
                    </p>
                  ) : null}
                </div>
              )}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {activeItem.cards.map((card) => (
                  <PricingCard
                    key={`${activeItem.id}-${card.tech}`}
                    card={card}
                    tabId={activeItem.id}
                    isSelected={
                      selectedPlan?.plan === card.plan &&
                      normalizeTech(selectedPlan.tech) === normalizeTech(card.tech)
                    }
                    onSelect={handleSelect}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Sheet
        open={isSheetOpen}
        onOpenChange={(open) => {
          setIsSheetOpen(open);
          if (!open) {
            setResetSignal((value) => value + 1);
          }
        }}
      >
        <SheetContent className="w-full max-w-full sm:max-w-lg">
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 40 }}
            animate={
              reduceMotion
                ? { opacity: isSheetOpen ? 1 : 0 }
                : { opacity: isSheetOpen ? 1 : 0, x: isSheetOpen ? 0 : 40 }
            }
            transition={
              reduceMotion ? { duration: 0.15 } : { duration: 0.25, ease: "easeOut" }
            }
            className="h-full"
          >
            <SheetHeader className="mb-6 text-left">
              <SheetTitle>Selecciona y cotiza</SheetTitle>
            </SheetHeader>
            <PricingForm
              selectedPlan={selectedPlan ?? undefined}
              onChangeSelection={() => {
                setIsSheetOpen(false);
                setTimeout(() => focusTabs(), 150);
              }}
              onSuccess={() => setIsSheetOpen(false)}
              resetSignal={resetSignal}
              variant="sheet"
            />
          </motion.div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
