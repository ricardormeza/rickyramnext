"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile, type TurnstileHandle } from "@/components/security/Turnstile";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre."),
  email: z.string().email("Correo invalido."),
  phone: z.string().min(7, "Telefono invalido."),
  message: z.string().min(10, "Cuéntanos un poco más."),
});

type FormValues = z.infer<typeof formSchema>;

const inputStyles =
  "mt-2 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground shadow-sm outline-none transition focus-visible:ring-2 focus-visible:ring-primary/30";

export function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [toast, setToast] = React.useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null);
  const [turnstileError, setTurnstileError] = React.useState<string | null>(null);
  const [resetSignal, setResetSignal] = React.useState(0);
  const turnstileRef = React.useRef<TurnstileHandle | null>(null);
  const pendingValuesRef = React.useRef<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const sendLead = async (values: FormValues, token: string) => {
    setStatus("loading");
    setToast(null);
    setTurnstileError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "contacto",
          ...values,
          token,
          page: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setToast("Mensaje enviado. Te respondemos pronto.");
      form.reset();
      setTurnstileToken(null);
      pendingValuesRef.current = null;
      setResetSignal((value) => value + 1);
      setTimeout(() => setToast(null), 3000);
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
    <div className="space-y-4">
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

      <form className="space-y-4" onSubmit={onSubmit}>
        <fieldset disabled={status === "loading"} className="space-y-4">
          <div className="relative">
            <label htmlFor="name" className="text-sm text-muted-foreground">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              {...form.register("name")}
              className={inputStyles}
            />
            {form.formState.errors.name ? (
              <span className="mt-1 block text-xs text-rose-500">
                {form.formState.errors.name.message}
              </span>
            ) : null}
          </div>

          <div className="relative">
            <label htmlFor="email" className="text-sm text-muted-foreground">
              Correo
            </label>
            <input
              type="email"
              id="email"
              {...form.register("email")}
              className={inputStyles}
            />
            {form.formState.errors.email ? (
              <span className="mt-1 block text-xs text-rose-500">
                {form.formState.errors.email.message}
              </span>
            ) : null}
          </div>

          <div className="relative">
            <label htmlFor="phone" className="text-sm text-muted-foreground">
              Telefono
            </label>
            <input
              type="tel"
              id="phone"
              {...form.register("phone")}
              className={inputStyles}
            />
            {form.formState.errors.phone ? (
              <span className="mt-1 block text-xs text-rose-500">
                {form.formState.errors.phone.message}
              </span>
            ) : null}
          </div>

          <div className="relative">
            <label htmlFor="message" className="text-sm text-muted-foreground">
              Mensaje
            </label>
            <textarea
              id="message"
              rows={4}
              {...form.register("message")}
              className={cn(inputStyles, "resize-none")}
            />
            {form.formState.errors.message ? (
              <span className="mt-1 block text-xs text-rose-500">
                {form.formState.errors.message.message}
              </span>
            ) : null}
          </div>

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
              resetSignal={resetSignal}
              className="mt-2"
              size="invisible"
              action="contacto"
            />
            {turnstileError ? (
              <span className="block text-xs text-rose-500">{turnstileError}</span>
            ) : null}
          </div>
        </fieldset>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>
        <p className="text-xs text-muted-foreground">
          Al enviar aceptas que nos pongamos en contacto contigo.
        </p>
      </form>
    </div>
  );
}
