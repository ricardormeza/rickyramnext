"use client";

import { motion } from "framer-motion";
import {
  Code,
  FileCheck,
  FileText,
  MessageCircle,
  Rocket,
} from "lucide-react";

import { homeContent } from "@/content/home";

export function ProcessSteps() {
  const { process } = homeContent;
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
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <motion.div
        className="space-y-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-2xl text-[#1881ff] text-center font-semibold tracking-tight md:text-4xl"
          variants={item}
        >
          {process.title}
        </motion.h2>
      </motion.div>
      <motion.div
        className="mt-8 grid gap-4 md:grid-cols-5"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {process.steps.map((step, index) => {
          const icons = [
            MessageCircle,
            FileText,
            Code,
            FileCheck,
            Rocket,
          ];
          const Icon = icons[index] ?? Rocket;

          return (
          <motion.div
            key={step}
            variants={item}
            className="rounded-2xl border bg-card p-4 text-sm text-muted-foreground"
          >
            <div className="mb-2 text-xs text-center font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Paso {index + 1}
            </div>
            <div className="mb-3 flex justify-center text-primary">
              <Icon size={35} strokeWidth={1.6} />
            </div>
            <div className="text-sm font-medium text-center text-foreground">{step}</div>
          </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
