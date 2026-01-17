"use client";

import Link from "next/link";
import { easeOut, motion } from "framer-motion";
import styles from "@/components/sections/RickyTechCards.module.css";

type CardItem = {
  title: "Astro" | "WordPress" | "Next.js";
  subtitle: string;
  text: string;
  idealFor: string;
  priceFrom: string;
  href: string;
};

const cards: CardItem[] = [
  {
    title: "WordPress",
    subtitle: "Mucha flexibilidad y panel autoadministrable",
    text: "Perfecto si tu equipo quiere editar contenido fácil y publicar seguido.",
    idealFor: "Sitios con blog, catálogos simples, operación diaria, escalable a ecommerce.",
    priceFrom: "$6,900 MXN",
    href: "/soluciones/wordpress",
  },
  {
    title: "Astro",
    subtitle: "Ingeniería enfocada en rendimiento",
    text: "Ideal para sitios de marketing que necesitan velocidad, SEO y conversión sin complicaciones.",
    idealFor: "Landing, servicios, portafolio, campañas.",
    priceFrom: "$7,900 MXN",
    href: "/soluciones/astro",
  },
  {
    title: "Next.js",
    subtitle: "Funciones a medida y crecimiento tipo producto/app.",
    text: "Para experiencias premium: tiendas avanzadas, dashboards y webs escalables.",
    idealFor: "Producto digital, ecommerce headless, integraciones, sitio tipo aplicaciones.",
    priceFrom: "$14,900 MXN",
    href: "/soluciones/nextjs",
  },
];

function gradientVars(title: CardItem["title"]) {
  if (title === "Astro")
    return { ["--g1" as any]: "#FF5D01", ["--g2" as any]: "#7C3AED" };
  if (title === "WordPress")
    return { ["--g1" as any]: "#1D4ED8", ["--g2" as any]: "#06B6D4" };
  return { ["--g1" as any]: "#0B1220", ["--g2" as any]: "#1881FF" };
}

export default function RickyTechCards() {
  return (
    <div className={styles.container}>
      {cards.map((c, idx) => (
        <motion.div
          key={c.title}
          className={styles.card}
          style={gradientVars(c.title)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: easeOut,
            delay: 0.2 * (idx + 1),
          }}
        >
          <div className={`${styles.face} ${styles.face1}`}>
            <div className={styles.content}>
              <h3 className={styles.title}>{c.title}</h3>
              <p className={styles.subtitle}>{c.subtitle}</p>

              <p className={styles.text}>{c.text}</p>

              <div className={styles.meta}>
                <div>
                  <span className={styles.metaLabel}>Ideal para</span>
                  <p className={styles.metaValue}>{c.idealFor}</p>
                </div>
                <div>
                  <span className={styles.metaLabel}>Desde</span>
                  <p className={styles.metaValueStrong}>{c.priceFrom}</p>
                </div>
              </div>

              <Link href={c.href} className={styles.cta}>
                Ver más
              </Link>
            </div>
          </div>

          <div className={`${styles.face} ${styles.face2}`} aria-hidden>
            <div className={styles.face2Inner}>
              <div className={styles.face2Title}>{c.title}</div>
            </div></div>
        </motion.div>
      ))}
    </div>
  );
}




