"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/content/home";

export function BlogPreview() {
  const { blog } = homeContent;
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
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <motion.div
        className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="space-y-2" variants={item}>
          <h2 className="text-2xl text-[#1881ff] font-semibold tracking-tight md:text-4xl">
            {blog.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {blog.subtitle}
          </p>
        </motion.div>
        <motion.div variants={item}>
          <Button variant="secondary" asChild>
            <Link href="/blog">Ir al blog</Link>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {blog.posts.map((post) => (
          <motion.div key={post} variants={item}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{post}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Guia practica para tomar mejores decisiones digitales.
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
