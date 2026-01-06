import { homeContent } from "@/content/home";

export function ProcessSteps() {
  const { process } = homeContent;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          {process.title}
        </h2>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {process.steps.map((step, index) => (
          <div
            key={step}
            className="rounded-2xl border bg-card p-4 text-sm text-muted-foreground"
          >
            <div className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Paso {index + 1}
            </div>
            <div className="text-sm font-medium text-foreground">{step}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
