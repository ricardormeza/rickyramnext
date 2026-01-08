 "use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { GlobalCta } from "@/components/sections/global-cta";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  const pathname = usePathname();
  const hideFooter = pathname === "/";

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {hideFooter ? null : <GlobalCta />}
      {hideFooter ? null : <SiteFooter />}
    </div>
  );
}
