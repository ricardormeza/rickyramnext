"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

import { Turnstile, type TurnstileHandle } from "@/components/security/Turnstile";

type Step = 1 | 2;
type Status = "idle" | "loading" | "success" | "error";

const projectTypes = [
  "Landing page.",
  "Sitio web empresarial.",
  "Tienda en línea.",
  "Rediseño de un sitio existente.",
  "No estoy seguro, necesito asesoría.",
] as const;

const websiteStatuses = [
  "Sí.",
  "No.",
  "Tengo uno, pero necesito renovarlo.",
] as const;

const budgets = [
  "Entre $5,000 y $7,000 MXN.",
  "Entre $7,001 y $13,000 MXN.",
  "Entre $13,001 y $20,000 MXN.",
  "Más de $20,000 MXN.",
  "Todavía no tengo un presupuesto definido.",
] as const;

const startTimes = [
  "Lo antes posible.",
  "En las próximas 2 a 4 semanas.",
  "En 1 o 2 meses.",
  "Solo estoy solicitando información.",
  "Aún no tengo una fecha definida.",
] as const;

type FormState = {
  name: string;
  phone: string;
  email: string;
  businessName: string;
  projectType: string;
  currentWebsite: string;
  budget: string;
  startTime: string;
};

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  businessName: "",
  projectType: projectTypes[0],
  currentWebsite: websiteStatuses[1],
  budget: budgets[1],
  startTime: startTimes[0],
};

const inputStyles =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

const getTrackingData = () => {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: "",
      gclid: "",
      landing_page: "/paginas-web-para-negocios",
      fecha_del_lead: "",
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") ?? "",
    utm_medium: params.get("utm_medium") ?? "",
    utm_campaign: params.get("utm_campaign") ?? "",
    utm_term: params.get("utm_term") ?? "",
    utm_content: params.get("utm_content") ?? "",
    gclid: params.get("gclid") ?? "",
    landing_page: window.location.href,
    fecha_del_lead: new Date().toISOString(),
  };
};

function validateStepOne(values: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  if (values.name.trim().length < 2) errors.name = "Ingresa tu nombre.";
  if (values.phone.trim().length < 7) errors.phone = "Ingresa un teléfono válido.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Ingresa un correo válido.";
  }
  if (values.businessName.trim().length < 2) {
    errors.businessName = "Ingresa el nombre del negocio.";
  }

  return errors;
}

function OptionGroup({
  legend,
  name,
  options,
  value,
  onChange,
}: {
  legend: string;
  name: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-bold text-slate-950">{legend}</legend>
      <div className="grid gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:border-blue-300 hover:bg-blue-50/40"
          >
            <input
              type="radio"
              name={name}
              checked={value === option}
              onChange={() => onChange(option)}
              className="mt-1 h-4 w-4 accent-blue-600"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function LandingLeadForm() {
  const [step, setStep] = React.useState<Step>(1);
  const [values, setValues] = React.useState<FormState>(initialFormState);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = React.useState<string | null>(null);
  const [turnstileError, setTurnstileError] = React.useState<string | null>(null);
  const [turnstileReset, setTurnstileReset] = React.useState(0);
  const pendingSubmitRef = React.useRef(false);
  const turnstileRef = React.useRef<TurnstileHandle | null>(null);

  const updateValue = (field: keyof FormState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const continueToStepTwo = () => {
    const nextErrors = validateStepOne(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setStep(2);
      setMessage(null);
    }
  };

  const sendLead = async (token: string) => {
    setStatus("loading");
    setMessage(null);
    setTurnstileError(null);

    try {
      const trackingData = getTrackingData();
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "pricing",
          name: values.name,
          email: values.email,
          phone: values.phone,
          whatsapp: values.phone,
          businessName: values.businessName,
          projectType: values.projectType,
          currentWebsite: values.currentWebsite,
          budget: values.budget,
          startTime: values.startTime,
          landing_page: trackingData.landing_page,
          fecha_del_lead: trackingData.fecha_del_lead,
          utm_source: trackingData.utm_source,
          utm_medium: trackingData.utm_medium,
          utm_campaign: trackingData.utm_campaign,
          utm_term: trackingData.utm_term,
          utm_content: trackingData.utm_content,
          gclid: trackingData.gclid,
          page: trackingData.landing_page,
          variant: "paginas-web-para-negocios",
          token,
        }),
      });

      if (!response.ok) throw new Error("lead_request_failed");

      setStatus("success");
      setMessage("Solicitud enviada. Te responderé con una propuesta.");
      setValues(initialFormState);
      setStep(1);
      setTurnstileToken(null);
      pendingSubmitRef.current = false;
      setTurnstileReset((current) => current + 1);
    } catch {
      setStatus("error");
      setMessage("No se pudo enviar la solicitud. Intenta de nuevo o usa WhatsApp.");
    }
  };

  const submit = async () => {
    const nextErrors = validateStepOne(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStep(1);
      return;
    }

    if (!turnstileToken) {
      pendingSubmitRef.current = true;
      turnstileRef.current?.execute();
      return;
    }

    await sendLead(turnstileToken);
  };

  return (
    <div id="cotizacion" className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-7">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">
            Cotización
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
            Cuéntame sobre tu proyecto
          </h2>
        </div>
        <div className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
          Paso {step} de 2
        </div>
      </div>

      <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-blue-600 transition-all"
          style={{ width: step === 1 ? "50%" : "100%" }}
        />
      </div>

      {step === 1 ? (
        <div className="grid gap-4">
          <label className="text-sm font-bold text-slate-950">
            Nombre
            <input
              value={values.name}
              onChange={(event) => updateValue("name", event.target.value)}
              className={inputStyles}
              placeholder="Tu nombre"
              type="text"
              autoComplete="name"
            />
            {errors.name ? <span className="mt-1 block text-xs text-rose-600">{errors.name}</span> : null}
          </label>

          <label className="text-sm font-bold text-slate-950">
            Teléfono o WhatsApp
            <input
              value={values.phone}
              onChange={(event) => updateValue("phone", event.target.value)}
              className={inputStyles}
              placeholder="+52 664 000 0000"
              type="tel"
              autoComplete="tel"
            />
            {errors.phone ? <span className="mt-1 block text-xs text-rose-600">{errors.phone}</span> : null}
          </label>

          <label className="text-sm font-bold text-slate-950">
            Correo electrónico
            <input
              value={values.email}
              onChange={(event) => updateValue("email", event.target.value)}
              className={inputStyles}
              placeholder="correo@negocio.com"
              type="email"
              autoComplete="email"
            />
            {errors.email ? <span className="mt-1 block text-xs text-rose-600">{errors.email}</span> : null}
          </label>

          <label className="text-sm font-bold text-slate-950">
            Nombre del negocio
            <input
              value={values.businessName}
              onChange={(event) => updateValue("businessName", event.target.value)}
              className={inputStyles}
              placeholder="Ej. Clínica Dental Norte"
              type="text"
              autoComplete="organization"
            />
            {errors.businessName ? (
              <span className="mt-1 block text-xs text-rose-600">{errors.businessName}</span>
            ) : null}
          </label>

          <button
            type="button"
            onClick={continueToStepTwo}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-sm font-black text-white shadow-[0_14px_30px_rgba(24,129,255,0.28)] transition hover:bg-blue-700"
          >
            Continuar con mi cotización
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          <OptionGroup
            legend="1. ¿Qué tipo de proyecto necesitas?"
            name="projectType"
            options={projectTypes}
            value={values.projectType}
            onChange={(value) => updateValue("projectType", value)}
          />
          <OptionGroup
            legend="2. ¿Actualmente tienes un sitio web?"
            name="currentWebsite"
            options={websiteStatuses}
            value={values.currentWebsite}
            onChange={(value) => updateValue("currentWebsite", value)}
          />
          <OptionGroup
            legend="3. ¿Qué inversión tienes contemplada?"
            name="budget"
            options={budgets}
            value={values.budget}
            onChange={(value) => updateValue("budget", value)}
          />
          <OptionGroup
            legend="4. ¿Cuándo te gustaría iniciar?"
            name="startTime"
            options={startTimes}
            value={values.startTime}
            onChange={(value) => updateValue("startTime", value)}
          />

          <div className="space-y-2">
            <Turnstile
              ref={turnstileRef}
              onVerify={(token) => {
                setTurnstileToken(token);
                if (pendingSubmitRef.current) {
                  sendLead(token);
                }
              }}
              onExpire={() => {
                setTurnstileToken(null);
                pendingSubmitRef.current = false;
              }}
              onError={() => {
                setTurnstileError("No se pudo validar. Intenta de nuevo.");
                pendingSubmitRef.current = false;
              }}
              resetSignal={turnstileReset}
              size="invisible"
              action="landing_paginas_web"
            />
            {turnstileError ? (
              <span className="block text-xs text-rose-600">{turnstileError}</span>
            ) : null}
          </div>

          <div className="grid gap-3 sm:grid-cols-[auto_1fr]">
            <button
              type="button"
              onClick={() => setStep(1)}
              disabled={status === "loading"}
              className="rounded-2xl border border-slate-200 px-5 py-4 text-sm font-black text-slate-800 transition hover:bg-slate-50 disabled:opacity-60"
            >
              Regresar
            </button>
            <button
              type="button"
              onClick={submit}
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-4 text-sm font-black text-white shadow-[0_14px_30px_rgba(24,129,255,0.28)] transition hover:bg-blue-700 disabled:opacity-60"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Recibir mi propuesta
                  <CheckCircle2 className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {message ? (
        <p
          className={`mt-5 rounded-2xl px-4 py-3 text-sm font-semibold ${
            status === "success"
              ? "bg-emerald-50 text-emerald-700"
              : "bg-rose-50 text-rose-700"
          }`}
        >
          {message}
        </p>
      ) : null}

      <p className="mt-5 text-xs leading-relaxed text-slate-500">
        Tus datos serán utilizados únicamente para responder a tu solicitud. Consulta nuestro aviso de privacidad.
      </p>
    </div>
  );
}
