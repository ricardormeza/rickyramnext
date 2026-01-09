import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/content/home";

export function SolutionCards() {
  const { solutions } = homeContent;
  const accents = {
    Astro: {
      color: "#A78BFA",
      logo: "/images/astro-logo.webp",
    },
    WordPress: {
      color: "#0EA5E9",
      logo: "/images/wordpress-logo.webp",
    },
    "Next.js": {
      color: "#111827",
      logo: "/images/nextjs-logo.webp",
    },
  } as const;

  return (
    <section id="opciones" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          {solutions.title}
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground md:text-base">
          {solutions.intro}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {solutions.cards.map((card) => {
          const accent = accents[card.title as keyof typeof accents];
          return (
            <Card
              key={card.title}
              className={[
                "relative flex h-full flex-col overflow-hidden border-2 border-slate-300/90 dark:border-slate-700/80",
              ].join(" ")}
              style={
                accent
                  ? ({
                      ["--accent" as any]: accent.color,
                    } as React.CSSProperties)
                  : undefined
              }
            >
              <CardHeader className="space-y-3 text-center">
                <div className="flex flex-col items-center gap-3">
                  {accent ? (
                    <Image
                      src={accent.logo}
                      alt={`${card.title} logo`}
                      width={48}
                      height={48}
                    />
                  ) : null}
                  <CardTitle>{card.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{card.subtitle}</p>
              </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-sm text-muted-foreground">{card.text}</p>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Ideal para:</span>{" "}
                {card.idealFor}
              </div>
              <div className="text-base font-semibold text-foreground">
                Desde {card.priceFrom}
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <Button className="hover:bg-primary hover:text-primary-foreground" asChild>
                  <Link href={card.href}>Ver mas</Link>
                </Button>
                <Button
                  variant="secondary"
                  className="hover:bg-secondary hover:text-secondary-foreground"
                  asChild
                >
                  <Link href={card.href}>Cotizar {card.title}</Link>
                </Button>
              </div>
            </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">Encuentra tu opción ideal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Te ayudamos a elegir</DialogTitle>
              <DialogDescription>
                Responde estas 3 preguntas y te recomendamos el stack ideal.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>1) Tu prioridad es velocidad o un panel editable?</div>
              <div>2) Vendes servicios, contenido o un producto?</div>
              <div>3) Necesitas integraciones o un sistema a medida?</div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
