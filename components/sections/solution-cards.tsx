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
        {solutions.cards.map((card) => (
          <Card key={card.title} className="flex h-full flex-col">
            <CardHeader className="space-y-2">
              <CardTitle>{card.title}</CardTitle>
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
                <Button asChild>
                  <Link href={card.href}>Ver mas</Link>
                </Button>
                <Button variant="secondary" asChild>
                  <Link href={card.href}>Cotizar {card.title}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">No sabes cual elegir? Te ayudo</Button>
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
