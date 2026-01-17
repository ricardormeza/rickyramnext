"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/components/layout/nav-data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="overflow-y-auto">
        <SheetHeader className="text-left">
          <SheetTitle>Navegacion</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <Accordion type="multiple" className="space-y-2">
            {navItems.map((item) => {
              if (item.children?.length) {
                return (
                  <AccordionItem key={item.label} value={item.label} className="border-none">
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-2">
                        {item.children.map((child) => (
                          <SheetClose asChild key={child.label}>
                            <Link
                              href={child.disabled ? "#" : child.href}
                              className={cn(
                                "block rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-primary",
                                child.disabled && "pointer-events-none opacity-50"
                              )}
                            >
                              {child.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              }

              return (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-2 py-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              );
            })}
          </Accordion>

          <div className="space-y-2">
            <Button variant="secondary" className="w-full" asChild>
              <Link href={siteConfig.agendaUrl}>Agendar llamada</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href={siteConfig.whatsapp}>Cotizar</Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
