"use client";

import { easeOut, motion } from "framer-motion";

import { homeContent } from "@/content/home";

export function StarterIncludes() {
  const { includes } = homeContent;
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
        className="rounded-3xl border bg-card p-8 md:p-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-2xl text-center font-semibold tracking-tight md:text-3xl"
          variants={item}
        >
          {includes.title}
        </motion.h2>
        <motion.ul
          className="mt-6 grid gap-3 text-sm text-center text-muted-foreground md:grid-cols-2 md:text-base "
          variants={container}
        >
          {includes.bullets.map((bullet) => (
            <motion.li key={bullet} variants={item}>
              - {bullet}
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          className="mt-6 text-sm text-center text-muted-foreground md:text-base"
          variants={item}
        >
          {includes.note}
        </motion.p>
      </motion.div>
    </section>
  );
}
