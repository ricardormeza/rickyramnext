import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/content/home";

export function ServicesPreviewGrid() {
  const { services } = homeContent;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          {services.title}
        </h2>
        <p className="text-sm text-muted-foreground md:text-base">
          {services.subtitle}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {services.cards.map((card) => (
          <Card key={card.title} className="h-full">
            <CardHeader>
              <CardTitle className="text-base">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>{card.description}</p>
              <p className="font-medium text-foreground">{card.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
