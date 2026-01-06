import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { homeContent } from "@/content/home";

export function PortfolioPreview() {
  const { portfolio } = homeContent;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          {portfolio.title}
        </h2>
        <p className="text-sm text-muted-foreground md:text-base">
          {portfolio.subtitle}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
        {portfolio.filters.map((filter) => (
          <span
            key={filter}
            className="rounded-full border px-3 py-1 text-xs"
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {portfolio.items.map((item) => (
          <Card key={item.title} className="h-full">
            <CardHeader>
              <CardTitle className="text-base">{item.title}</CardTitle>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.stack}
              </p>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              {item.bullets.map((bullet) => (
                <div key={bullet}>• {bullet}</div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
