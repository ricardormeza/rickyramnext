"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ContactForm = dynamic(
  () => import("@/components/forms/ContactForm").then((module) => module.ContactForm),
  { ssr: false }
);

const PortfolioPreview = dynamic(
  () =>
    import("@/components/sections/portfolio-preview").then(
      (module) => module.PortfolioPreview
    ),
  { ssr: false }
);

function useNearViewport() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNearViewport(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, nearViewport };
}

export function DeferredContactForm() {
  const { ref, nearViewport } = useNearViewport();

  return (
    <div ref={ref}>
      {nearViewport ? <ContactForm /> : <div className="min-h-[420px]" aria-hidden="true" />}
    </div>
  );
}

export function DeferredPortfolioPreview() {
  const { ref, nearViewport } = useNearViewport();

  return (
    <div ref={ref}>
      {nearViewport ? (
        <PortfolioPreview headingAs="h2" />
      ) : (
        <div className="min-h-[520px] bg-primary" aria-hidden="true" />
      )}
    </div>
  );
}
