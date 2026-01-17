"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

type StickyPillNavItem = {
  label: string;
  href: string;
};

type StickyPillNavProps = {
  items: readonly StickyPillNavItem[];
};

export function StickyPillNav({ items }: StickyPillNavProps) {
  const [isPastHero, setIsPastHero] = useState(false);

  const handleItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    target.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const hero = document.getElementById("overview");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPastHero(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-20 z-40 hidden lg:block">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div
          className={cn(
            "mt-6 flex items-center justify-center gap-6 rounded-full border px-6 py-3 text-sm font-medium shadow-sm backdrop-blur transition-colors duration-200",
            isPastHero
              ? "border-primary/40 bg-primary/80 text-white"
              : "border-border bg-white/90 text-muted-foreground"
          )}
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary"
              onClick={handleItemClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
