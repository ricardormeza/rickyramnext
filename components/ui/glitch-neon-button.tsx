"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type GlitchNeonButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  accentColor?: string;
  accentColor2?: string;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "ghost";
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-5 py-3 text-sm md:text-base rounded-xl",
  lg: "px-6 py-3.5 text-base rounded-2xl",
};

export default function GlitchNeonButton({
  label,
  href,
  onClick,
  className = "",
  accentColor = "#1881FF",
  accentColor2 = "#A78BFA",
  size = "md",
  variant = "solid",
}: GlitchNeonButtonProps) {
  const reduceMotion = useReducedMotion();

  const Tag: any = href ? Link : "button";
  const tagProps = href ? { href } : { type: "button", onClick };

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.01 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
      className={`inline-block ${className}`}
      style={
        {
          ["--gnb-accent" as any]: accentColor,
          ["--gnb-accent2" as any]: accentColor2,
        } as React.CSSProperties
      }
    >
      <style>{`
        .gnb_wrap {
          position: relative;
          display: inline-block;
          isolation: isolate;
        }

        .gnb_border {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            rgba(0,0,0,0) 0%,
            var(--gnb-accent) 18%,
            var(--gnb-accent2) 35%,
            var(--gnb-accent) 55%,
            rgba(0,0,0,0) 85%
          );
          z-index: 0;
          opacity: 0.9;
          filter: saturate(1.2);
          transform-origin: 50% 50%;
          animation: none;
        }

        .gnb_glow {
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          background: conic-gradient(
            from 0deg,
            rgba(0,0,0,0) 0%,
            color-mix(in srgb, var(--gnb-accent) 70%, transparent) 18%,
            color-mix(in srgb, var(--gnb-accent2) 55%, transparent) 35%,
            color-mix(in srgb, var(--gnb-accent) 70%, transparent) 55%,
            rgba(0,0,0,0) 85%
          );
          z-index: 0;
          opacity: 0.35;
          filter: blur(14px);
          transform-origin: 50% 50%;
          animation: none;
        }

        @keyframes gnb_spin {
          to { transform: rotate(360deg); }
        }

        .gnb_btn {
          position: relative;
          z-index: 1;
          border-radius: inherit;
          border: 1px solid rgba(148,163,184,0.25);
          background: rgba(255,255,255,0.9);
          color: #0B1220;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: background 220ms ease, border-color 220ms ease, color 220ms ease;
          overflow: hidden;
        }

        :global(.dark) .gnb_btn {
          background: rgba(6,10,18,0.65);
          color: rgba(230,237,247,0.92);
          border-color: rgba(148,163,184,0.18);
        }

        .gnb_wrap:hover .gnb_glow { opacity: 0.55; animation: gnb_spin 3.4s linear infinite; }
        .gnb_wrap:hover .gnb_border { animation: gnb_spin 2.8s linear infinite; }
        .gnb_wrap:hover .gnb_btn {
          border-color: color-mix(in srgb, var(--gnb-accent) 55%, rgba(148,163,184,0.25));
        }

        .gnb_btn.ghost {
          background: transparent;
        }
        :global(.dark) .gnb_btn.ghost {
          background: transparent;
        }

        .gnb_text {
          position: relative;
          display: inline-block;
          font-weight: 650;
          letter-spacing: -0.01em;
          user-select: none;
          white-space: nowrap;
        }

        .gnb_text::before,
        .gnb_text::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
        }

        .gnb_text::before {
          color: var(--gnb-accent);
          transform: translate(-1px, 0);
          text-shadow: 0 0 14px color-mix(in srgb, var(--gnb-accent) 60%, transparent);
        }
        .gnb_text::after {
          color: var(--gnb-accent2);
          transform: translate(1px, 0);
          text-shadow: 0 0 14px color-mix(in srgb, var(--gnb-accent2) 60%, transparent);
        }

        @keyframes gnb_glitchA {
          0%, 85%, 100% { opacity: 0; clip-path: inset(0 0 100% 0); }
          88% { opacity: .8; clip-path: inset(0 0 78% 0); transform: translate(-2px,-1px); }
          91% { opacity: .6; clip-path: inset(35% 0 35% 0); transform: translate(-1px,0px); }
          94% { opacity: .75; clip-path: inset(70% 0 10% 0); transform: translate(-3px,1px); }
        }
        @keyframes gnb_glitchB {
          0%, 86%, 100% { opacity: 0; clip-path: inset(0 0 100% 0); }
          89% { opacity: .7; clip-path: inset(10% 0 70% 0); transform: translate(2px,0px); }
          92% { opacity: .55; clip-path: inset(45% 0 25% 0); transform: translate(3px,-1px); }
          95% { opacity: .7; clip-path: inset(75% 0 8% 0); transform: translate(2px,1px); }
        }

        .gnb_char {
          display: inline-block;
          animation: gnb_flicker 2.4s infinite;
          animation-delay: calc(var(--i) * 70ms);
        }
        @keyframes gnb_flicker {
          0%, 78% { opacity: 1; }
          79% { opacity: .65; }
          80% { opacity: 1; }
          86% { opacity: .8; }
          88% { opacity: 1; }
          92% { opacity: .7; }
          100% { opacity: 1; }
        }

        .gnb_wrap .gnb_text {
          text-shadow: 0 0 0 transparent;
          transition: text-shadow 220ms ease;
        }
        .gnb_wrap:hover .gnb_text {
          text-shadow: 0 0 18px color-mix(in srgb, var(--gnb-accent) 45%, transparent);
        }
        .gnb_wrap:hover .gnb_text::before { animation: gnb_glitchA 1.2s infinite; }
        .gnb_wrap:hover .gnb_text::after { animation: gnb_glitchB 1.35s infinite; }

        @media (prefers-reduced-motion: reduce) {
          .gnb_border, .gnb_glow, .gnb_char, .gnb_text::before, .gnb_text::after {
            animation: none !important;
          }
        }
      `}</style>

      <div className={`gnb_wrap ${sizes[size]} ${className}`} style={{ borderRadius: "16px" }}>
        <span aria-hidden className="gnb_glow" />
        <span aria-hidden className="gnb_border" />

        <Tag
          {...tagProps}
          className={`gnb_btn ${variant === "ghost" ? "ghost" : ""} w-full h-full inline-flex items-center justify-center gap-2 px-5 py-3`}
        >
          <span className="gnb_text" data-text={label}>
            {label.split("").map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                className="gnb_char"
                style={{ ["--i" as any]: i } as React.CSSProperties}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
        </Tag>
      </div>
    </motion.div>
  );
}
