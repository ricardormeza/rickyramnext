"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bot, Calendar, MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";

const whatsappLink = "https://wa.me/526631016627";

export function BotAssist() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={wrapperRef} className="fixed bottom-20 right-6 z-50">
      <div
        className={cn(
          "absolute bottom-14 right-0 w-64 origin-bottom-right rounded-2xl border bg-card p-3 shadow-xl transition-all duration-200",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
            <MessageCircle className="h-4 w-4" />
          </span>
          Escríbeme por WhatsApp
        </a>
        <Link
          href="/Agendar-llamada"
          className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Calendar className="h-4 w-4" />
          </span>
          Agenda un meet
        </Link>
      </div>

      <button
        type="button"
        aria-label="Abrir opciones de contacto"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary text-primary-foreground shadow-lg transition focus-visible:ring-2 focus-visible:ring-primary animate-bot-buzz"
      >
        <Bot className="h-5 w-5" />
      </button>
    </div>
  );
}
