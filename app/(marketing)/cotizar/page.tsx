import type { Metadata } from "next";
import Image from "next/image";
import { Suspense } from "react";
import { CotizarInlineCta } from "@/components/pricing/CotizarInlineCta";
import { cotizarCatalog, findCotizarSelection } from "@/content/cotizar";

export const metadata: Metadata = {
  title: "Cotizar sitio web | Elige tecnologia y paquete",
  description:
    "Selecciona el tipo de proyecto, tecnologia y plan. Recibe una cotizacion clara para tu sitio web.",
};

export default function CotizarPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const initialSelection = findCotizarSelection(searchParams);
  return (
    <main className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(24,129,255,0.18),transparent_70%)] blur-3xl"
      />
      <section className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 lg:pt-28">
        <div className="mx-auto max-w-3xl space-y-5 text-center">
          <div className="flex justify-center">
            <Image
              src="/images/RICKYRAM-DEV.png"
              alt="Rickyram"
              width={220}
              height={220}
              className="h-auto w-36 sm:w-44"
              priority
            />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Cotizar
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Selecciona tu proyecto y recibe una propuesta clara
          </h1>
          <p className="text-lg text-muted-foreground sm:text-xl">
            Elige tipo de sitio, tecnologia y plan para iniciar la cotizacion.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border bg-card/80 p-6 shadow-sm backdrop-blur md:p-8">
          <Suspense fallback={<div className="text-sm text-muted-foreground">Cargando...</div>}>
            <CotizarInlineCta
              categories={cotizarCatalog}
              initialSelection={initialSelection}
            />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
