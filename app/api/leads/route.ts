import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const schema = z.object({
  type: z.enum(["pricing", "contacto"]),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  whatsapp: z.string().optional(),
  giro: z.string().optional(),
  comentario: z.string().optional(),
  message: z.string().optional(),
  businessName: z.string().optional(),
  projectType: z.string().optional(),
  currentWebsite: z.string().optional(),
  budget: z.string().optional(),
  startTime: z.string().optional(),
  utm_source: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
  gclid: z.string().optional(),
  landing_page: z.string().optional(),
  fecha_del_lead: z.string().optional(),
  tab: z.string().optional(),
  tech: z.string().optional(),
  plan: z.string().optional(),
  page: z.string().optional(),
  variant: z.string().optional(),
  token: z.string().min(1),
});

const SMTP_HOST = process.env.SMTP_HOST ?? "";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? "465");
const SMTP_USER = process.env.SMTP_USER ?? "";
const SMTP_PASS = process.env.SMTP_PASS ?? "";
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY ?? "";

const verifyTurnstile = async (token: string, ip?: string | null) => {
  if (!TURNSTILE_SECRET_KEY) return false;
  const params = new URLSearchParams();
  params.set("secret", TURNSTILE_SECRET_KEY);
  params.set("response", token);
  if (ip) params.set("remoteip", ip);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: params,
  });

  if (!response.ok) return false;
  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
};

const formatRows = (rows: Array<[string, string | undefined]>) =>
  rows
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip");

    const ok = await verifyTurnstile(data.token, ip);
    if (!ok) {
      return NextResponse.json({ error: "turnstile_failed" }, { status: 400 });
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return NextResponse.json({ error: "smtp_not_configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const subject =
      data.type === "pricing" ? "Nueva solicitud de precios" : "Nuevo mensaje de contacto";

    const details = formatRows([
      ["Nombre", data.name],
      ["Email", data.email],
      ["Telefono", data.phone],
      ["WhatsApp", data.whatsapp],
      ["Negocio", data.businessName],
      ["Giro", data.giro],
      ["Tipo de proyecto", data.projectType],
      ["Sitio web actual", data.currentWebsite],
      ["Inversion contemplada", data.budget],
      ["Fecha ideal de inicio", data.startTime],
      ["Mensaje", data.message ?? data.comentario],
      ["Tab", data.tab],
      ["Tech", data.tech],
      ["Plan", data.plan],
      ["Variante", data.variant],
      ["Pagina", data.page],
      ["Landing page", data.landing_page],
      ["Fecha del lead", data.fecha_del_lead],
      ["UTM source", data.utm_source],
      ["UTM medium", data.utm_medium],
      ["UTM campaign", data.utm_campaign],
      ["UTM term", data.utm_term],
      ["UTM content", data.utm_content],
      ["GCLID", data.gclid],
    ]);

    await transporter.sendMail({
      from: `RickyRam Leads <${SMTP_USER}>`,
      to: SMTP_USER,
      replyTo: data.email,
      subject,
      text: details || "Sin detalles adicionales.",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "invalid_payload" }, { status: 400 });
    }
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
