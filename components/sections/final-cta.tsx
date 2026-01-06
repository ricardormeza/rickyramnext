import Link from "next/link";

import { Button } from "@/components/ui/button";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  const { finalCta } = homeContent;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="rounded-3xl border bg-card p-8 md:p-12">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {finalCta.title}
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            {finalCta.text}
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href={siteConfig.whatsapp}>{finalCta.primary}</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={siteConfig.agendaUrl}>{finalCta.secondary}</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href={siteConfig.whatsapp}>
              O escribenos por WhatsApp
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
