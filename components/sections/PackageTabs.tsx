"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export type PackageTabItem = {
  name: string;
  idealFor?: string;
  scope?: string;
  price: string;
  bullets?: string[];
  ctaText?: string;
  href?: string;
  image?: string;
};

type PackageTabsProps = {
  items: PackageTabItem[];
};

export function PackageTabs({ items }: PackageTabsProps) {
  const [value, setValue] = React.useState(items[0]?.name ?? "");
  const listRef = React.useRef<HTMLDivElement | null>(null);
  const triggerRefs = React.useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = React.useState({ left: 0, width: 0 });

  const updateIndicator = React.useCallback(() => {
    const list = listRef.current;
    const activeTrigger = triggerRefs.current[value];
    if (!list || !activeTrigger) return;

    const listRect = list.getBoundingClientRect();
    const triggerRect = activeTrigger.getBoundingClientRect();
    setIndicator({
      left: triggerRect.left - listRect.left,
      width: triggerRect.width,
    });
  }, [value]);

  React.useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator, items.length]);

  React.useEffect(() => {
    const onResize = () => updateIndicator();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [updateIndicator]);

  const activeItem = items.find((item) => item.name === value) ?? items[0];

  return (
    <div className="w-full">
      <Tabs value={value} onValueChange={setValue}>
        <TabsList
          ref={listRef}
          className="relative mx-auto flex w-full max-w-3xl items-center justify-start gap-2 rounded-full bg-muted/60 p-1 text-muted-foreground md:justify-center md:overflow-visible overflow-x-auto"
        >
          {items.map((item) => (
            <TabsTrigger
              key={item.name}
              value={item.name}
              ref={(node) => {
                triggerRefs.current[item.name] = node;
              }}
              className="relative z-10 shrink-0 rounded-full px-4 py-2 text-sm font-semibold data-[state=active]:text-primary"
            >
              {item.name}
            </TabsTrigger>
          ))}
          <motion.div
            aria-hidden="true"
            className="absolute inset-y-1 rounded-full bg-primary/15"
            animate={{ left: indicator.left, width: indicator.width }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          />
        </TabsList>
      </Tabs>

      <AnimatePresence mode="wait">
        {activeItem ? (
          <motion.div
            key={activeItem.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-6"
            layout
          >
            <div className="rounded-3xl border bg-card p-4 md:p-6">
              <div className="grid gap-6 md:grid-cols-[1.1fr_1fr] md:items-stretch">
                <div className="overflow-hidden rounded-2xl border bg-muted/30">
                  {activeItem.image ? (
                    <Image
                      src={activeItem.image}
                      alt={activeItem.name}
                      width={720}
                      height={720}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full min-h-[220px] items-center justify-center text-sm text-muted-foreground">
                      Sin imagen
                    </div>
                  )}
                </div>
                <div className="rounded-2xl border bg-white/80 p-6 md:p-8">
                  <div className="inline-flex items-center rounded-full border px-3 py-1 md:text-xl font-semibold text-muted-foreground">
                    {activeItem.price}
                  </div>
                  <div className="mt-3 space-y-1">
                    <h3 className="text-2xl font-semibold text-foreground">
                      {activeItem.name}
                    </h3>
                  </div>
                  {activeItem.idealFor || activeItem.scope ? (
                    <ul className="mt-4 space-y-2 md:text-xl text-muted-foreground">
                      {activeItem.idealFor ? (
                        <li>
                          <span className="font-semibold text-foreground">
                            Ideal para:
                          </span>{" "}
                          {activeItem.idealFor}
                        </li>
                      ) : null}
                      {activeItem.scope ? (
                        <li>
                          <span className="font-semibold text-foreground">
                            Alcance:
                          </span>{" "}
                          {activeItem.scope}
                        </li>
                      ) : null}
                    </ul>
                  ) : null}
                  {activeItem.bullets?.length ? (
                    <ul className="mt-4 list-disc space-y-2 pl-5 md:text-xl text-muted-foreground">
                      {activeItem.bullets.map((item, index) => (
                        <li key={`${activeItem.name}-bullet-${index}`}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {activeItem.ctaText && activeItem.href ? (
                    <div className="mt-6">
                      <Button asChild>
                        <Link href={activeItem.href}>{activeItem.ctaText}</Link>
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
