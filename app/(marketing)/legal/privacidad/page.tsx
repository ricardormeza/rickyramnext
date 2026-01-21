import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Politica de privacidad y tratamiento de datos personales.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    title: "Aviso de privacidad",
    description: "Politica de privacidad y tratamiento de datos personales.",
    url: `${siteConfig.siteUrl}/privacidad`,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aviso de privacidad",
    description: "Politica de privacidad y tratamiento de datos personales.",
  },
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-foreground">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">Aviso de Privacidad</h1>
        <p className="text-sm text-muted-foreground">
          [RickyRamDev / Rick R. / Ricardo Ramírez Meza] (en adelante, EL
          RESPONSABLE), con domicilio en [Somrerete 114 A Col. Benito Juárez,
          Papantla, Veracruz, México] con cédula profesional: 14639912, es responsable del tratamiento de los datos
          personales que nos proporciones a través del sitio [rickyram.dev], así
          como de los datos derivados del uso del sitio, conforme a este Aviso de
          Privacidad.
        </p>
      </header>

      <section className="mt-10 space-y-6 text-sm text-muted-foreground">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            1) Datos personales que recabamos
          </h2>
          <p>Podemos recabar los siguientes datos, según el formulario o interacción:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Identificación y contacto: nombre, correo electrónico,
              teléfono/WhatsApp.
            </li>
            <li>
              Datos del proyecto/negocio: giro, requerimientos, comentarios y
              preferencias del servicio.
            </li>
            <li>
              Datos de facturación (si aplica): razón social, RFC, domicilio
              fiscal y datos necesarios para emitir factura.
            </li>
            <li>
              Datos de navegación: información técnica como dirección IP
              aproximada, tipo de navegador/dispositivo, páginas visitadas,
              eventos (clics, envíos de formulario) y cookies/identificadores
              similares.
            </li>
          </ul>
          <p>
            EL RESPONSABLE no solicita datos personales sensibles de forma
            intencional. Si llegáramos a requerirlos por la naturaleza del
            servicio, lo solicitaremos de manera expresa y con el consentimiento
            correspondiente.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            2) Finalidades del tratamiento
          </h2>
          <h3 className="font-semibold text-foreground">Finalidades primarias (necesarias)</h3>
          <p>Usaremos tus datos para:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Atender solicitudes de información, cotizaciones o diagnósticos.</li>
            <li>Contactarte por los medios proporcionados (correo, llamada o WhatsApp).</li>
            <li>Preparar propuestas, alcances, tiempos y costos de servicios.</li>
            <li>
              Prestar los servicios contratados (sitios web, SEO, Ads, analítica,
              automatización, ciberseguridad, infraestructura).
            </li>
            <li>
              Facturación y cumplimiento de obligaciones derivadas de la relación
              comercial (si aplica).
            </li>
          </ul>
          <h3 className="mt-4 font-semibold text-foreground">
            Finalidades secundarias (opcionales)
          </h3>
          <p>De manera adicional, y solo si no te opones, podremos usar tus datos para:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Enviarte contenido, novedades, promociones o comunicaciones de marketing.</li>
            <li>Medir y mejorar la experiencia del sitio (analítica) y el rendimiento de campañas.</li>
          </ul>
          <p>
            Si deseas limitar el uso de tus datos para finalidades secundarias, puedes
            solicitarlo al correo: [tu correo de contacto].
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">3) Transferencias de datos</h2>
          <p>
            EL RESPONSABLE podrá compartir datos personales con proveedores que nos
            apoyan a operar el sitio y prestar servicios, por ejemplo:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Hosting/CDN/DNS (p. ej., Cloudflare o proveedor de hosting)</li>
            <li>Herramientas de agenda (p. ej., Cal.com)</li>
            <li>
              Herramientas de analítica y etiquetas (p. ej., Google Analytics 4 / Google
              Tag Manager)
            </li>
            <li>Pasarelas de pago (p. ej., Stripe), si decides pagar en línea</li>
            <li>Proveedores de correo/CRM/automatización (si aplica)</li>
          </ul>
          <p>
            Estas transferencias se realizan solo para cumplir finalidades descritas y
            bajo medidas razonables de seguridad y confidencialidad.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            4) Derechos ARCO y cómo ejercerlos
          </h2>
          <p>
            Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento
            de tus datos personales (Derechos ARCO), así como a revocar tu
            consentimiento cuando sea procedente.
          </p>
          <p>Para ejercerlos, envía un correo a: [tu correo de contacto] con:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Nombre del titular y medio para comunicar respuesta</li>
            <li>Derecho ARCO que deseas ejercer</li>
            <li>Descripción clara de los datos sobre los que solicitas el derecho</li>
            <li>Documentos que acrediten tu identidad (y, en su caso, representación)</li>
          </ul>
          <p>Responderemos dentro de los plazos aplicables conforme a la normativa.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5) Uso de cookies y tecnologías similares
          </h2>
          <p>Este sitio puede usar cookies y tecnologías similares para:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Funcionalidad del sitio (por ejemplo, recordar preferencias)</li>
            <li>Medición de rendimiento (analítica)</li>
            <li>Atribución y medición de campañas (cuando aplique)</li>
          </ul>
          <p>
            Puedes deshabilitar cookies desde la configuración de tu navegador. Ten en
            cuenta que algunas funciones podrían verse afectadas.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            6) Medidas de seguridad y conservación
          </h2>
          <p>
            EL RESPONSABLE aplica medidas técnicas y organizativas razonables para
            proteger tus datos contra daño, pérdida, alteración, destrucción o uso no
            autorizado.
          </p>
          <p>
            Conservaremos tus datos solo por el tiempo necesario para cumplir las
            finalidades descritas, obligaciones legales, resolución de disputas y/o
            para hacer valer derechos.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            7) Cambios al Aviso de Privacidad
          </h2>
          <p>
            Este Aviso puede actualizarse por cambios legales, operativos o de
            servicio. Publicaremos la versión vigente en esta misma sección del
            sitio, indicando la fecha de actualización.
          </p>
          <p>Última actualización: [17/01/2026]</p>
          <p>Contacto de privacidad: [contacto@rickyram.dev] [663 101 66 27]</p>
        </div>
      </section>
    </main>
  );
}
