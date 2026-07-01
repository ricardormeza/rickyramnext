"use client";

import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { ScrollReveal } from "@/components/sections/scroll-reveal";
import { cn } from "@/lib/utils";

type SplitTextRevealProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  text: string;
  highlight?: string;
  trailing?: ReactNode;
};

export function SplitTextReveal({
  as: Component = "h2",
  text,
  highlight,
  trailing,
  className,
  ...props
}: SplitTextRevealProps) {
  const words = text.trim().split(/\s+/).filter(Boolean);

  return (
    <ScrollReveal className="fade-up" {...props}>
      <Component className={cn("leading-tight tracking-tight", className)}>
        {words.map((word, index) => {
          const isHighlighted = highlight?.toLowerCase() === word.toLowerCase();

          return (
            <span
              key={`${word}-${index}`}
              className={cn(
                "inline-block animate-[fade-up_.55s_ease-out_forwards] opacity-0",
                isHighlighted && "text-primary"
              )}
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {word}
              {index < words.length - 1 ? "\u00A0" : null}
            </span>
          );
        })}
        {trailing ? <span>{trailing}</span> : null}
      </Component>
    </ScrollReveal>
  );
}
