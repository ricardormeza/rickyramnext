"use client";

import type { ReactNode } from "react";

import { SiteHeader } from "@/components/shared/site-header";
import { SiteFooter } from "@/components/shared/site-footer";
import { GlobalCta } from "@/components/sections/global-cta";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { BotAssist } from "@/components/shared/bot-assist";

type MarketingLayoutProps = {
  children: ReactNode;
};

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <GlobalCta />
      <SiteFooter />
      <BotAssist />
      <ScrollToTop />
    </div>
  );
}
