"use client";

import Image from "next/image";
import Link from "next/link";
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
    title: "Astro",
    subtitle: "Ingeniería enfocada en rendimiento",
    text: "Ideal para sitios de marketing que necesitan velocidad, SEO y conversión sin complicaciones.",
    idealFor: "Landing, servicios, portafolio, campañas.",
    priceFrom: "$7,900 MXN",
    href: "/soluciones/astro",
  },
  {
    title: "WordPress",
    subtitle: "Mucha flexibilidad y panel autoadministrable",
    text: "Perfecto si tu equipo quiere editar contenido fácil y publicar seguido.",
    idealFor: "Sitios con blog, catálogos simples, operación diaria, escalable a ecommerce.",
    priceFrom: "$8,900 MXN",
    href: "/soluciones/wordpress",
  },
  {
    title: "Next.js",
    subtitle: "Funciones a medida y crecimiento tipo producto/app.",
    text: "Para experiencias premium: tiendas avanzadas, dashboards y webs escalables.",
    idealFor: "Producto digital, ecommerce headless, integraciones.",
    priceFrom: "$18,900 MXN",
    href: "/soluciones/nextjs",
  },
];

const logos: Record<CardItem["title"], string> = {
  Astro: "/images/astro-logo.webp",
  WordPress: "/images/wordpress-logo.webp",
  "Next.js": "/images/nextjs-logo.webp",
};

function TechIcon({ title }: { title: CardItem["title"] }) {
  return (
    <Image
      src={logos[title]}
      alt={`${title} logo`}
      width={72}
      height={72}
      className={styles.face2Icon}
    />
  );
}

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
      {cards.map((c) => (
        <div key={c.title} className={styles.card} style={gradientVars(c.title)}>
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
              <TechIcon title={c.title} />
              <div className={styles.face2Title}>{c.title}</div>
            </div></div>
        </div>
      ))}
    </div>
  );
}

