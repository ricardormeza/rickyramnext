"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Coffee, FileCode, Laugh, Rocket } from "lucide-react";

type OrganicDividerProps = {
  className?: string;
};

type StatItem = {
  label: string;
  value: number;
  icon: typeof FileCode;
};

const items: StatItem[] = [
  {
    label: "Lineas de codigo",
    value: 125000,
    icon: FileCode,
  },
  {
    label: "Proyectos entregados",
    value: 49,
    icon: Rocket,
  },
  {
    label: "Clientes satisfechos",
    value: 57,
    icon: Laugh,
  },
  {
    label: "Tazas de cafe",
    value: 250,
    icon: Coffee,
  },
];

function useCountUp(target: number, active: boolean, reduceMotion: boolean) {
  const [value, setValue] = useState(reduceMotion ? target : 0);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (reduceMotion) {
      setValue(target);
      animatedRef.current = true;
      return;
    }

    if (!active || animatedRef.current) {
      return;
    }

    let frame = 0;
    const duration = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        animatedRef.current = true;
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [active, reduceMotion, target]);

  return value;
}

function StatCard({
  item,
  active,
  reduceMotion,
  formatter,
  delay,
}: {
  item: StatItem;
  active: boolean;
  reduceMotion: boolean;
  formatter: Intl.NumberFormat;
  delay: number;
}) {
  const Icon = item.icon;
  const value = useCountUp(item.value, active, reduceMotion);

  return (
    <motion.div
      className="group px-6 py-6 text-center transition-colors hover:bg-white/45 dark:hover:bg-slate-900/40"
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-primary shadow-[0_10px_24px_rgba(15,23,42,0.08)] dark:bg-slate-900/60 transition-transform duration-200 ease-out hover:-translate-y-2">
          <Icon size={44} strokeWidth={1.4} />
        </div>
        <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {formatter.format(value)}
        </div>
        <div className="text-xl text-[#1881ff] font-semibold ">
          {item.label}
        </div>
      </div>
    </motion.div>
  );
}

export function OrganicDivider({ className }: OrganicDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });
  const reduceMotion = useReducedMotion();
  const formatter = useMemo(() => new Intl.NumberFormat("en-US"), []);

  return (
    <section
      ref={ref}
      className={[
        "relative border-y border-slate-200/70 bg-muted/40 py-10 md:py-12",
        "dark:border-slate-800/80",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundImage:
          "linear-gradient(to left, hsl(var(--primary) / 0.18), rgba(6,182,212,0.18))",
      }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 divide-y divide-slate-200/70 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0 dark:divide-slate-800/80">
          {items.map((item, idx) => (
            <StatCard
              key={item.label}
              item={item}
              active={isInView}
              reduceMotion={reduceMotion}
              formatter={formatter}
              delay={reduceMotion ? 0 : 0.2 * (idx + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
