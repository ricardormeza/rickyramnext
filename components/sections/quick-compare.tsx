"use client";

import { motion } from "framer-motion";

import { homeContent } from "@/content/home";

export function QuickCompare() {
  const { compare } = homeContent;
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 mt-16 md:px-6">
      <motion.div
        className="space-y-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-2xl text-center font-semibold tracking-tight md:text-4xl"
          variants={item}
        >
          {compare.title}
        </motion.h2>
        <motion.div className="overflow-hidden rounded-2xl border" variants={item}>
          <div className="grid grid-cols-4 bg-secondary/60 text-sm font-medium text-muted-foreground">
            <div className="p-4">Criterio</div>
            {compare.columns.map((col) => (
              <div key={col} className="p-4 text-center">
                {col}
              </div>
            ))}
          </div>
          {compare.rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-4 border-t text-sm"
            >
              <div className="p-4 font-medium">{row.label}</div>
              {row.values.map((value, idx) => (
                <div key={`${row.label}-${idx}`} className="p-4 text-center">
                  {value}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
        <motion.p
          className="text-sm text-center text-muted-foreground md:text-base"
          variants={item}
        >
          {compare.conclusion}
        </motion.p>
      </motion.div>
    </section>
  );
}
