"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { PricingSelection } from "@/components/pricing/types";
import { Turnstile, type TurnstileHandle } from "@/components/security/Turnstile";

const giroOptions = [
  "salud",
  "laboratorio",
  "abogado",
  "contador",
  "disenador",
  "dentista",
  "spa",
  "otro",
] as const;

const formSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre."),
  email: z.string().email("Correo invalido."),
  whatsapp: z.string().min(7, "WhatsApp invalido."),
  giro: z.enum(giroOptions, {
    message: "Selecciona un giro.",
  }),
  comentario: z.string().max(800).optional(),
  tab: z.string().optional(),
  tech: z.string().optional(),
  plan: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type PricingFormProps = {
  selectedPlan?: PricingSelection;
  onChangeSelection?: () => void;
  onSuccess?: () => void;
  variant?: "sheet" | "inline";
  defaultValues?: Partial<FormValues>;
  resetSignal?: number;
};

const inputStyles =
  "mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function PricingForm({
  selectedPlan,
  onChangeSelection,
  onSuccess,
  variant = "inline",
  defaultValues,
  resetSignal,
}: PricingFormProps) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [toast, setToast] = React.useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null);
  const [turnstileError, setTurnstileError] = React.useState<string | null>(null);
  const [turnstileReset, setTurnstileReset] = React.useState(0);
  const turnstileRef = React.useRef<TurnstileHandle | null>(null);
  const pendingValuesRef = React.useRef<FormValues | null>(null);

  const baseDefaults = React.useMemo<FormValues>(
    () => ({
      name: "",
      email: "",
      whatsapp: "",
      giro: "salud",
      comentario: "",
      tab: defaultValues?.tab ?? selectedPlan?.tab ?? "",
      tech: defaultValues?.tech ?? selectedPlan?.tech ?? "",
      plan: defaultValues?.plan ?? selectedPlan?.plan ?? "",
    }),
    [defaultValues, selectedPlan]
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: baseDefaults,
  });

  React.useEffect(() => {
    form.setValue("tab", selectedPlan?.tab ?? defaultValues?.tab ?? "");
    form.setValue("tech", selectedPlan?.tech ?? defaultValues?.tech ?? "");
    form.setValue("plan", selectedPlan?.plan ?? defaultValues?.plan ?? "");
  }, [defaultValues, form, selectedPlan]);

  React.useEffect(() => {
    if (resetSignal === undefined) return;
    form.reset(baseDefaults);
    setStatus("idle");
    setToast(null);
    setTurnstileToken(null);
    setTurnstileError(null);
    setTurnstileReset((value) => value + 1);
    pendingValuesRef.current = null;
  }, [baseDefaults, form, resetSignal]);

  const sendLead = async (values: FormValues, token: string) => {
    setStatus("loading");
    setToast(null);
    setTurnstileError(null);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "pricing",
          ...values,
          token,
          page: typeof window !== "undefined" ? window.location.href : undefined,
          variant,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setToast("Solicitud enviada. Te respondemos pronto.");
      setTurnstileToken(null);
      pendingValuesRef.current = null;
      setTurnstileReset((value) => value + 1);
      form.reset(baseDefaults);
      setTimeout(() => {
        setToast(null);
        onSuccess?.();
      }, 3000);
    } catch {
      setStatus("error");
      setToast("No se pudo enviar. Intenta de nuevo.");
    }
  };

  const onSubmit = form.handleSubmit(async (values) => {
    if (!turnstileToken) {
      pendingValuesRef.current = values;
      setTurnstileError(null);
      turnstileRef.current?.execute();
      return;
    }

    await sendLead(values, turnstileToken);
  });

  return (
    <div className="space-y-6">
      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className={cn(
            "fixed right-6 top-6 z-50 rounded-xl border px-4 py-3 text-sm shadow-lg",
            status === "success" && "border-emerald-200 bg-emerald-50 text-emerald-700",
            status === "error" && "border-rose-200 bg-rose-50 text-rose-700"
          )}
        >
          {toast}
        </div>
      ) : null}

      <div className="rounded-2xl border bg-muted/40 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Seleccion actual
            </p>
            <p className="text-sm font-semibold text-foreground">
              {selectedPlan
                ? `${selectedPlan.title} (${selectedPlan.tech})`
                : "Elige un paquete para cotizar"}
            </p>
            <p className="text-xs text-muted-foreground">
              {selectedPlan?.price ?? "Completa tu seleccion en las tarjetas."}
            </p>
          </div>
          {onChangeSelection ? (
            <Button type="button" variant="outline" onClick={onChangeSelection}>
              Cambiar
            </Button>
          ) : null}
        </div>
      </div>

      <form className="space-y-4" onSubmit={onSubmit}>
        <fieldset disabled={status === "loading"} className="space-y-4">
          <label className="text-sm font-semibold text-foreground">
            Nombre
            <input
              type="text"
              placeholder="Tu nombre"
              {...form.register("name")}
              className={inputStyles}
            />
            {form.formState.errors.name ? (
              <span className="mt-1 block text-xs text-rose-500">
                {form.formState.errors.name.message}
              </span>
            ) : null}
          </label>

          <label className="text-sm font-semibold text-foreground">
            Email
            <input
              type="email"
              placeholder="tucorreo@email.com"
              {...form.register("email")}
              className={inputStyles}
            />
            {form.formState.errors.email ? (
              <span className="mt-1 block text-xs text-rose-500">
                {form.formState.errors.email.message}
              </span>
            ) : null}
          </label>

          <label className="text-sm font-semibold text-foreground">
            WhatsApp
            <input
              type="tel"
              placeholder="+52 664 000 0000"
              {...form.register("whatsapp")}
              className={inputStyles}
            />
            {form.formState.errors.whatsapp ? (
              <span className="mt-1 block text-xs text-rose-500">
                {form.formState.errors.whatsapp.message}
              </span>
            ) : null}
          </label>

          <label className="text-sm font-semibold text-foreground">
            Giro
            <select {...form.register("giro")} className={inputStyles}>
              {giroOptions.map((option) => (
                <option key={option} value={option}>
                  {option === "disenador"
                    ? "Disenador"
                    : option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
            {form.formState.errors.giro ? (
              <span className="mt-1 block text-xs text-rose-500">
                {form.formState.errors.giro.message}
              </span>
            ) : null}
          </label>

          <label className="text-sm font-semibold text-foreground">
            Comentario
            <textarea
              rows={4}
              placeholder="Cuentame de tu proyecto..."
              {...form.register("comentario")}
              className={cn(inputStyles, "resize-none")}
            />
          </label>

          <input type="hidden" {...form.register("tab")} />
          <input type="hidden" {...form.register("tech")} />
          <input type="hidden" {...form.register("plan")} />

          <div className="space-y-2">
            <Turnstile
              ref={turnstileRef}
              onVerify={(token) => {
                setTurnstileToken(token);
                if (pendingValuesRef.current) {
                  const values = pendingValuesRef.current;
                  sendLead(values, token);
                }
              }}
              onExpire={() => {
                setTurnstileToken(null);
                pendingValuesRef.current = null;
              }}
              onError={() => {
                setTurnstileError("No se pudo validar. Intenta de nuevo.");
                pendingValuesRef.current = null;
              }}
              resetSignal={turnstileReset}
              size="invisible"
              action="pricing"
            />
            {turnstileError ? (
              <span className="block text-xs text-rose-500">{turnstileError}</span>
            ) : null}
          </div>
        </fieldset>

        <Button type="submit" size="lg" className="w-full">
          {status === "loading" ? "Enviando..." : "Enviar solicitud"}
        </Button>

        {variant === "inline" ? (
          <p className="text-xs text-muted-foreground">
            Respuesta en menos de 48 horas habiles.
          </p>
        ) : null}
      </form>
    </div>
  );
}
