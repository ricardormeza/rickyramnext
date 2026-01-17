"use client";

import * as React from "react";
import Image from "next/image";
import {
  easeOut,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";

type BazilStyleHeroProps = {
  headlineTop: string;
  headlineBottom: string;
  portraitSrc: string;
  maskSrc?: string;
  primaryColor?: string;
  className?: string;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function RickyHero({
  headlineTop,
  headlineBottom,
  portraitSrc,
  maskSrc,
  primaryColor = "#1881FF",
  className = "",
}: BazilStyleHeroProps) {
  const reduceMotion = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, { stiffness: 140, damping: 18, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 140, damping: 18, mass: 0.3 });

  const portraitX = useTransform(sx, (v) => v * 1.0);
  const portraitY = useTransform(sy, (v) => v * 0.9);

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
  };

  const effectiveMask = maskSrc ?? portraitSrc;

  return (
    <section
      className={[
        "relative overflow-hidden",
        "min-h-[78vh] md:min-h-[86vh]",
        "flex items-center justify-center",
        "bg-background text-foreground",
        className,
      ].join(" ")}
    >
      <style>{`
        .rickyHeroRoot{
          --hero-primary: ${primaryColor};
          --stroke-color: hsl(var(--muted-foreground));
          --fill-color: hsl(var(--foreground));
          --stroke-width: 2px;
          --portrait-mask: url(${effectiveMask});
        }

        .rickyHeroRoot:hover{
          --stroke-color: var(--hero-primary);
          --fill-color: var(--hero-primary);
        }

        .rickyOutlineText{
          color: var(--stroke-color);
          -webkit-text-stroke: var(--stroke-width) currentColor;
          text-stroke: var(--stroke-width) currentColor;
          -webkit-text-fill-color: transparent;
          paint-order: stroke fill;
        }

        .rickyMaskedFill{
          color: var(--fill-color);
          -webkit-mask-image: var(--portrait-mask);
          mask-image: var(--portrait-mask);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          -webkit-mask-size: contain;
          mask-size: contain;
          pointer-events: none;
          user-select: none;
        }

        .rickyText{
          letter-spacing: -0.04em;
          line-height: 0.9;
        }

        @keyframes rickyGradientDrift {
          0%   { transform: translate3d(-2%, -2%, 0) scale(1.05); filter: blur(48px); }
          50%  { transform: translate3d(2%, 1%, 0) scale(1.08);  filter: blur(54px); }
          100% { transform: translate3d(-2%, -2%, 0) scale(1.05); filter: blur(48px); }
        }
      `}</style>

      <div
        className="rickyHeroRoot relative w-full"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <motion.div
          aria-hidden="true"
          style={reduceMotion ? undefined : { x: bgX, y: bgY }}
          className="pointer-events-none absolute inset-0"
        >
          <div
            className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 md:opacity-30"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(24,129,255,.55), transparent 55%), radial-gradient(circle at 70% 70%, rgba(167,139,250,.45), transparent 55%)",
              animation: reduceMotion
                ? "none"
                : "rickyGradientDrift 10s ease-in-out infinite",
            }}
          />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative flex items-center justify-center py-16 md:py-24">
            <motion.p
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: easeOut }}
              className="absolute left-1/2 top-[-28px] z-40 -translate-x-1/2 text-sm text-muted-foreground md:top-[-40px]"
            >
              👋 Hola, Soy Ricky y soy freelance
            </motion.p>

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easeOut }}
              className="relative w-full select-none text-center"
            >
              <div className="relative z-10">
                <div className="rickyText rickyOutlineText text-[14vw] md:text-[8.5vw] lg:text-[7.4vw] font-semibold whitespace-nowrap">
                  {headlineTop}
                </div>
                <div className="rickyText rickyOutlineText mt-2 md:mt-0 text-[10.5vw] md:text-[6.5vw] lg:text-[5.6vw] font-semibold whitespace-nowrap">
                  {headlineBottom}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 z-20">
                <div className="rickyText rickyMaskedFill text-[14vw] md:text-[8.5vw] lg:text-[7.4vw] font-semibold whitespace-nowrap transition-colors duration-300">
                  {headlineTop}
                </div>
                <div className="rickyText rickyMaskedFill mt-2 md:mt-0 text-[10.5vw] md:text-[6.5vw] lg:text-[5.6vw] font-semibold whitespace-nowrap transition-colors duration-300">
                  {headlineBottom}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
              style={reduceMotion ? undefined : { x: portraitX, y: portraitY }}
              className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative h-[260px] w-[260px] md:h-[380px] md:w-[380px] lg:h-[440px] lg:w-[440px]">
                <Image
                  src={portraitSrc}
                  alt="Portrait"
                  fill
                  priority
                  className="select-none object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
