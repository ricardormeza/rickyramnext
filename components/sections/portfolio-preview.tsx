"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Keyboard, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  href: string;
};

const projects: Project[] = [
  {
    title: "GGJ Contabilidad",
    description: "Despacho contable + SEO + Redes",
    image: "/portafolio/ggjcontabilidad1.webp",
    tags: ["WordPress"],
    href: "https://ggjcontabilidad.com/",
  },
  {
    title: "Unete Psic.Yeimy",
    description: "Sitio web + SEO + GA4",
    image: "/portafolio/bienestarunete2.webp",
    tags: ["WordPress"],
    href: "https://bienestar-unete.com/",
  },
  {
    title: "Casa del migrante en Tijuana",
    description: "Hardening + sitio web + GA4",
    image: "/portafolio/casadelmigrantetijuana3.webp",
    tags: ["WordPress"],
    href: "https://casadelmigrantetijuana.com/",
  },
  {
    title: "FashionRC",
    description: "Card digital + SEO",
    image: "/portafolio/fashionrc4.webp",
    tags: ["WordPress"],
    href: "https://fashionrc.shop/",
  },
  {
    title: "Rickyram Tienda",
    description: "E-commerce + SEO",
    image: "/portafolio/Portafolio-tienda-woocomerce.png",
    tags: ["Woocomerce"],
    href: "https://rickyram.top/",
  },
];

export function PortfolioPreview() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  return (
    <section className="w-full min-h-[80vh] bg-primary text-white">
      <div className="mx-auto max-w-6xl px-4 pb-6 pt-12 md:px-6 md:pt-16">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
            Portafolio
          </h1>
          <h2 className="text-lg font-semibold tracking-tight md:text-2xl">
            Trabajo real, Resultados reales.
          </h2>
          <p className="text-sm text-white/70 md:text-base">
            Performance, UX y estrategia.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden pb-12 pt-14">
        <div className="absolute right-6 top-0 z-10 hidden items-center gap-3 md:flex">
          <button
            ref={prevRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Anterior"
          >
            <CircleArrowLeft size={22} />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Siguiente"
          >
            <CircleArrowRight size={22} />
          </button>
        </div>

        {navReady ? (
          <Swiper
            modules={[Navigation, A11y, Keyboard]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              const navigation = swiper.params.navigation;
              if (navigation && typeof navigation !== "boolean") {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
            }}
            keyboard={{ enabled: true }}
            loop
            spaceBetween={24}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.1 },
            }}
            className="w-screen px-4 pb-4 pr-8 [margin-left:calc(50%-50vw)] [margin-right:calc(50%-50vw)]"
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.title}
                className="h-auto grayscale transition [&.swiper-slide-active]:grayscale-0"
              >
                <Link
                  href={project.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.18)] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${project.title}`}
                >
                  <div className="relative h-48 w-full overflow-hidden sm:h-56">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 46vw, 32vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-5 pb-6 pt-5">
                    <div className="text-lg font-semibold">{project.title}</div>
                    <div className="text-sm text-slate-600">
                      {project.description}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.title}-${tag}`}
                          className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </div>
    </section>
  );
}
