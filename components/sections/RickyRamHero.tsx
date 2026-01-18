"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  easeOut,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { Button } from "@/components/ui/button";
import { MegaCursorIcon } from "@/components/ui/mega-cursor";
import { siteConfig } from "@/lib/site";
import ShinyText from "@/components/ui/ShinyText";

type RickyRamHeroProps = {
  headlineTop: string;
  headlineBottom: string;
  portraitSrc: string;
  maskSrc?: string;
  primaryColor?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function RickyRamHero({
  headlineTop,
  headlineBottom,
  portraitSrc,
  maskSrc,
  primaryColor = "#1881FF",
}: RickyRamHeroProps) {
  const reduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = React.useState(false);
  const [underlineBase, setUnderlineBase] = React.useState(false);
  const [showMegaCursor, setShowMegaCursor] = React.useState(false);
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setUnderlineBase(currentY > lastScrollY.current);
      lastScrollY.current = currentY;
    };

    const onWheel = (event: WheelEvent) => {
      if (event.deltaY === 0) return;
      setUnderlineBase(event.deltaY > 0);
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 130, damping: 20, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 130, damping: 20, mass: 0.35 });

  const textX = useTransform(sx, (v) => v * 0.45);
  const textY = useTransform(sy, (v) => v * 0.35);

  const portraitX = useTransform(sx, (v) => v * 0.9);
  const portraitY = useTransform(sy, (v) => v * 0.8);

  const bgX = useTransform(sx, (v) => v * 0.15);
  const bgY = useTransform(sy, (v) => v * 0.12);

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const nx = (e.clientX - cx) / (rect.width / 2);
    const ny = (e.clientY - cy) / (rect.height / 2);

    mx.set(clamp(nx, -1, 1) * 14);
    my.set(clamp(ny, -1, 1) * 12);
  };

  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
    setIsHovered(false);
  };

  const effectiveMask = maskSrc ?? portraitSrc;
  const logos = ["Audible", "Tissot", "Olympia", "Veuve Clicquot"];

  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      <style>{`
        .rickyramHeroRoot {
          --hero-primary: ${primaryColor};
          --stroke-color: hsl(var(--muted-foreground));
          --fill-color: hsl(var(--foreground));
          --stroke-width: 2px;
          --portrait-mask: url(${effectiveMask});
        }

        .rickyramHoverZone:hover {
          --stroke-color: var(--hero-primary);
          --fill-color: var(--hero-primary);
        }

        .rickyramOutline {
          -webkit-text-stroke: var(--stroke-width) currentColor;
          text-stroke: var(--stroke-width) currentColor;
          -webkit-text-fill-color: transparent;
          paint-order: stroke fill;
        }

        .rickyramMaskedFill {
          -webkit-mask-image: var(--portrait-mask);
          mask-image: var(--portrait-mask);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          -webkit-mask-size: contain;
          mask-size: contain;
          color: var(--fill-color);
        }

        .rickyramHoverZone:hover .rickyramImageFill {
          background-image: linear-gradient(transparent, transparent), url(/images/rickyramsmiledos.png);
          background-size: cover;
          background-position: center;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .rickyramHoverZone:hover .rickyramTopLine {
          z-index: 60;
          transform: translateY(-210px);
          transition: transform 220ms ease;
        }

        .rickyramHoverZone:hover .rickyramBottomLine {
          z-index: 10;
          transform: translateY(130px);
          transition: transform 220ms ease;
        }

        .glow-btn {
          --glow-color: var(--hero-primary);
          --glow-size: 12px;
          padding: 0.6rem 1.2rem;
          font-size: 1rem;
          border-radius: 8px;
          border: none;
          color: #fff;
          background: linear-gradient(
            90deg,
            color-mix(in srgb, var(--hero-primary) 20%, #0b1220),
            color-mix(in srgb, var(--hero-primary) 45%, #1f2937)
          );
          cursor: pointer;
          position: relative;
          box-shadow: 0 0 var(--glow-size) rgba(122, 252, 255, 0.35);
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .glow-btn:hover,
        .glow-btn:focus {
          transform: translateY(-3px);
          box-shadow: 0 0 calc(var(--glow-size) * 1.6)
            rgba(122, 252, 255, 0.6);
        }

        .glow-btn::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: inherit;
          background: radial-gradient(
            circle at center,
            var(--glow-color),
            transparent 35%
          );
          filter: blur(12px);
          opacity: 0.6;
          z-index: -1;
          transition: transform 300ms ease, opacity 200ms ease;
        }

        .glow-btn:hover::before {
          transform: scale(1.05);
          opacity: 1;
        }

        .glow-btn:focus {
          outline: 3px solid rgba(255, 255, 255, 0.06);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .glow-btn,
          .glow-btn::before {
            transition: none;
            transform: none;
          }
        }

      `}</style>

      <div className="rickyramHeroRoot relative">
        <motion.div
          aria-hidden="true"
          style={reduceMotion ? undefined : { x: bgX, y: bgY }}
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 md:opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(24,129,255,.55), transparent 55%), radial-gradient(circle at 70% 70%, rgba(20,184,166,.4), transparent 55%)",
              filter: "blur(48px)",
            }}
          />
        </motion.div>

        <div className="relative mx-auto flex min-h-[100vh] max-w-7xl flex-col justify-between px-4 pb-12 pt-16 md:min-h-[86vh] md:px-6 md:pb-16 md:pt-20">
          <motion.p
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="-mt-2 text-center text-2xl font-semibold text-muted-foreground mb-8"
          >👋
            <ShinyText text="Hola, soy Ricky y soy freelance" color="#1881ff" shineColor="#0023d1"/>
            
          </motion.p>

          <div
            className="rickyramHoverZone relative flex flex-1 items-center justify-center"
            onPointerMove={onPointerMove}
            onPointerEnter={() => setIsHovered(true)}
            onPointerLeave={onPointerLeave}
          >
            <motion.div
              style={reduceMotion ? undefined : { x: textX, y: textY }}
              className="relative w-full select-none text-center"
            >
              <div className="relative">
                <Link
                  href="/soluciones"
                  aria-label={`${headlineTop} - Ver soluciones`}
                  className="inline-block cursor-none"
                  onPointerEnter={(event) => {
                    if (event.pointerType === "touch") return;
                    setShowMegaCursor(true);
                    setCursorPos({ x: event.clientX, y: event.clientY });
                  }}
                  onPointerMove={(event) => {
                    if (event.pointerType === "touch") return;
                    setCursorPos({ x: event.clientX, y: event.clientY });
                  }}
                  onPointerLeave={() => setShowMegaCursor(false)}
                >
                  <h1 className="rickyramOutline rickyramTopLine relative z-10 cursor-pointer text-[14vw] font-semibold leading-[0.9] tracking-[-0.04em] text-[color:var(--stroke-color)] md:text-[8.5vw] lg:text-[7.4vw]">
                    {headlineTop}
                  </h1>
                </Link>
                <div className="rickyramOutline rickyramBottomLine relative z-50 mt-2 text-[10.5vw] font-semibold leading-[0.9] tracking-[-0.04em] text-[color:var(--hero-primary)] md:mt-0 md:text-[6.5vw] lg:text-[5.6vw]">
                  {headlineBottom}
                </div>
              </div>

            </motion.div>

            <motion.div
              style={reduceMotion ? undefined : { x: portraitX, y: portraitY }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative h-[260px] w-[260px] md:h-[380px] md:w-[380px] lg:h-[460px] lg:w-[460px]">
                <Image
                  src={
                    isHovered
                      ? "/images/rickyramsmiledos.png"
                      : portraitSrc
                  }
                  alt="Portrait"
                  fill
                  priority
                  className="select-none object-contain"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-8 flex flex-col gap-6 md:mt-10 md:flex-row md:items-center md:justify-between">
            <div
              className={[
                "text-center text-sm text-muted-foreground transition-[text-decoration-color] duration-200 md:text-left",
                underlineBase ? "underline underline-offset-4" : "no-underline",
              ].join(" ")}
            >
              Base en Tijuana, Mexico.
            </div>

            

            <div className="flex flex-col gap-3 sm:flex-row md:hidden">
              <Button asChild>
                <Link href="/soluciones">Quiero un Sitio Web</Link>
              </Button>
              <Button asChild className="glow-btn">
                <Link href={siteConfig.whatsapp}>Necesito Branding</Link>
              </Button>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Button asChild>
                <Link href="/soluciones">Quiero un Sitio Web</Link>
              </Button>
              <Button asChild className="glow-btn">
                <Link href={siteConfig.whatsapp}>Necesito Branding</Link>
              </Button>
            </div>
          </div>
        </div>
        {showMegaCursor ? (
          <div
            className="pointer-events-none fixed left-0 top-0 z-[80] hidden md:block"
            style={{
              transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
            }}
          >
            <MegaCursorIcon className="border-[color:var(--hero-primary)] text-[color:var(--hero-primary)]" />
          </div>
        ) : null}
      </div>
    </section>
  );
}

