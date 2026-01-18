import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/MobileNav";
import { NavMegaMenu } from "@/components/layout/NavMegaMenu";
import { siteConfig } from "@/lib/site";

export function Navbar() {
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

        <div className="hidden items-center gap-4 md:flex">
          <NavMegaMenu />
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
            asChild
          >
            <Link href={siteConfig.agendaUrl}>Agendar llamada</Link>
          </Button>
          <Button asChild>
            <Link href="/cotizar">Cotizar</Link>
          </Button>
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
