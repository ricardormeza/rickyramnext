"use client";

import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type MegaCursorIconProps = {
  className?: string;
  iconClassName?: string;
};

export function MegaCursorIcon({
  className,
  iconClassName,
}: MegaCursorIconProps) {
  return (
    <span
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-black/5 text-primary backdrop-blur-sm",
        className
      )}
    >
      <ArrowUpRight className={cn("h-6 w-6", iconClassName)} />
    </span>
  );
}
