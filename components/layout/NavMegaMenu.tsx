"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { navItems } from "@/components/layout/nav-data";
import { cn } from "@/lib/utils";

export function NavMegaMenu() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navItems.map((item) => {
          if (item.children?.length) {
            return (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuTrigger onClick={() => router.push(item.href)}>
                  {item.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 md:w-[520px] md:grid-cols-2">
                    {item.children.map((child) => {
                      const Icon = child.icon;
                      const itemClasses = cn(
                        "group flex items-start gap-3 rounded-lg border border-transparent p-3 transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                        child.disabled && "pointer-events-none opacity-50"
                      );

                      return (
                        <NavigationMenuLink asChild key={child.label}>
                          <Link href={child.href} className={itemClasses}>
                            <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span className="space-y-1">
                              <span className="block text-sm font-semibold text-foreground">
                                {child.label}
                              </span>
                              <span className="block text-xs text-muted-foreground">
                                {child.description}
                              </span>
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      );
                    })}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink asChild>
                <Link href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
