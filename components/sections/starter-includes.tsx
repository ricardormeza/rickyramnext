import { homeContent } from "@/content/home";

export function StarterIncludes() {
  const { includes } = homeContent;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="rounded-3xl border bg-card p-8 md:p-10">
        <h2 className="text-2xl text-center font-semibold tracking-tight md:text-3xl">
          {includes.title}
        </h2>
        <ul className="mt-6 grid gap-3 text-sm text-muted-foreground md:grid-cols-2 md:text-base">
          {includes.bullets.map((bullet) => (
            <li key={bullet}>• {bullet}</li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground md:text-base">
          {includes.note}
        </p>
      </div>
    </section>
  );
}
