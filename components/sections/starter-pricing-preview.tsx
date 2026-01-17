"use client";

import Link from "next/link";
import { useMemo, useRef } from "react";
import {
  easeOut,
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/content/home";

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

function MarqueeNotes({ notes }: { notes: readonly string[] }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 1], {
    clamp: false,
  });
  const reduceMotion = useReducedMotion();
  const directionRef = useRef(1);
  const repeatedNotes = useMemo(
    () => Array.from({ length: 6 }, () => notes).flat(),
    [notes]
  );

  useAnimationFrame((_, delta) => {
    if (reduceMotion) {
      return;
    }

    const vf = velocityFactor.get();
    if (vf < 0) {
      directionRef.current = -1;
    } else if (vf > 0) {
      directionRef.current = 1;
    }

    const baseSpeed = 1;
    const moveBy =
      directionRef.current * baseSpeed * (delta / 1000) * (1 + Math.abs(vf));
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (value) => `${wrap(-50, 0, value)}%`);

  return (
    <div className="mt-6 w-screen overflow-hidden bg-primary text-white [margin-left:calc(50%-50vw)] [margin-right:calc(50%-50vw)]">
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap px-6 py-4 text-xl font-semibold"
        style={{ x }}
      >
        {repeatedNotes.map((note, idx) => (
          <span key={`${note}-${idx}`} className="flex items-center gap-2">
            <span className="text-white/75">|</span>
            <span>{note}</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function StarterPricingPreview() {
  const { pricing } = homeContent;
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <motion.div
        className="space-y-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-2xl text-center font-semibold tracking-tight md:text-4xl"
          variants={item}
        >
          {pricing.title}{" "}
          <span className="font-bold text-primary">(Starter)</span>
        </motion.h2>
        <motion.p
          className="text-sm text-center text-muted-foreground md:text-base"
          variants={item}
        >
          {pricing.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {pricing.cards.map((card) => (
          <motion.div key={card.title} variants={item}>
            <Card className="flex h-full text-[#1881ff] flex-col text-center">
              <CardHeader>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Button asChild>
                    <Link href={card.href}>{card.cta}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <MarqueeNotes notes={pricing.notes} />
    </section>
  );
}
