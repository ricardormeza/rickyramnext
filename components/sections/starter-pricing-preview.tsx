import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/content/home";

export function StarterPricingPreview() {
  const { pricing } = homeContent;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="space-y-3">
        <h2 className="text-2xl text-center font-semibold tracking-tight md:text-4xl">
          {pricing.title}
        </h2>
        <p className="text-sm text-center text-muted-foreground md:text-base">
          {pricing.subtitle}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {pricing.cards.map((card) => (
          <Card key={card.title} className="flex h-full flex-col text-center">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <ul className="space-y-2 text-sm text-muted-foreground">
                {card.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button asChild>
                  <Link href={card.href}>{card.cta}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-2 text-center text-sm text-muted-foreground md:grid-cols-2">
        {pricing.notes.map((note) => (
          <div key={note}>• {note}</div>
        ))}
      </div>
    </section>
  );
}
