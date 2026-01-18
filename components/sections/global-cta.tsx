import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function GlobalCta() {
  return (
    <section className="border-y bg-secondary/60">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-xl space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            ¿Listo para un sitio que convierta?
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Dinos que necesitas y te recomendamos el sitio web correcto para ti.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href="/cotizar">Cotizar ahora</Link>
          </Button>
          <Button
            variant="secondary"
            className="border border-primary text-primary hover:bg-primary hover:text-white"
            asChild
          >
            <Link href={siteConfig.agendaUrl}>Agendar videollamada</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
