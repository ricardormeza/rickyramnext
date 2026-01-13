"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setIsVisible(false);
      return;
    }

    const hero = document.getElementById("overview");

    if (hero) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(hero);
      return () => observer.disconnect();
    }

    const onScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.6);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const onClick = () => {
    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Volver arriba"
      onClick={onClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/80 text-white shadow-lg backdrop-blur transition-all duration-200",
        isVisible ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-2"
      )}
    >
      <ChevronUp className="h-5 w-5" />
    </button>
  );
}
