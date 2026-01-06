import { homeContent } from "@/content/home";

export function QuickCompare() {
  const { compare } = homeContent;

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
          {compare.title}
        </h2>
        <div className="overflow-hidden rounded-2xl border">
          <div className="grid grid-cols-4 bg-secondary/60 text-sm font-medium text-muted-foreground">
            <div className="p-4">Criterio</div>
            {compare.columns.map((col) => (
              <div key={col} className="p-4 text-center">
                {col}
              </div>
            ))}
          </div>
          {compare.rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-4 border-t text-sm"
            >
              <div className="p-4 font-medium">{row.label}</div>
              {row.values.map((value, idx) => (
                <div key={`${row.label}-${idx}`} className="p-4 text-center">
                  {value}
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground md:text-base">
          {compare.conclusion}
        </p>
      </div>
    </section>
  );
}
