import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

type ComingSoonProps = {
  title: string;
  description?: string;
};

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-start justify-center gap-6 px-4 py-16 md:px-6">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          En construccion
        </p>
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          {description ??
            "Estamos preparando esta seccion. Si quieres avanzar, agenda una llamada o escribenos por WhatsApp."}
        </p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button asChild>
          <Link href={siteConfig.whatsapp}>Escribir por WhatsApp</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href={siteConfig.agendaUrl}>Agendar llamada</Link>
        </Button>
      </div>
    </section>
  );
}
