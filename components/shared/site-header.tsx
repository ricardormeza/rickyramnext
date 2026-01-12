"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { mainNav } from "@/lib/routes";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logosinbg-rickyram.png"
            alt={siteConfig.name}
            width={140}
            height={40}
            priority
            className="h-8 w-auto"
          />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" asChild>
            <Link href={siteConfig.agendaUrl}>Agendar llamada</Link>
          </Button>
          <Button asChild>
            <Link href={siteConfig.whatsapp}>Cotizar</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "border-t bg-background md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2">
            <Button variant="secondary" asChild>
              <Link href={siteConfig.agendaUrl}>Agendar llamada</Link>
            </Button>
            <Button asChild>
              <Link href={siteConfig.whatsapp}>Cotizar</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
