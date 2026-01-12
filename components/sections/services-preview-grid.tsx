"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/content/home";

export function ServicesPreviewGrid() {
  const { services } = homeContent;
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
          className="text-2xl text-center font-semibold tracking-tight md:text-4xl"
          variants={item}
        >
          Cuando tu{" "}
          <span className="text-primary font-semibold">web</span> ya esta viva,
          toca hacerla{" "}
          <span className="text-primary font-semibold">crecer</span>
        </motion.h2>
        <motion.p
          className="text-sm text-center text-muted-foreground md:text-base"
          variants={item}
        >
          {services.subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.cards.map((card) => (
          <motion.div key={card.title} variants={item}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base text-[#1881ff] text-center">
                  {card.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{card.description}</p>
                <p className="font-medium text-foreground">{card.price}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
