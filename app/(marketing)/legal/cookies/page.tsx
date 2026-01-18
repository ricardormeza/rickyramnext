export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-foreground">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">Política de Cookies</h1>
        <p className="text-sm text-muted-foreground">Última actualización: [17/01/2026]</p>
        <p className="text-sm text-muted-foreground">Sitio: rickyram.dev (el Sitio)</p>
        <p className="text-sm text-muted-foreground">
          Responsable: [RickyRamDev / Ricardo Ramírez Meza] (nosotros)
        </p>
        <p className="text-sm text-muted-foreground">
          Esta Política de Cookies explica qué son las cookies, qué tipos usamos en el
          Sitio y cómo puedes administrarlas.
        </p>
        <p className="text-sm text-muted-foreground">
          Para información sobre el tratamiento de datos personales, consulta el Aviso
          de Privacidad en /privacidad.
        </p>
      </header>

      <section className="mt-10 space-y-6 text-sm text-muted-foreground">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            1) ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que un sitio web guarda en tu
            dispositivo para recordar información (por ejemplo, preferencias) y para
            medir cómo se usa el sitio. También existen tecnologías similares como
            localStorage, pixels y tags (etiquetas) que cumplen funciones parecidas.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            2) ¿Qué tipos de cookies existen?
          </h2>
          <p>En general, las cookies se agrupan por su finalidad:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Necesarias (esenciales): permiten que el sitio funcione correctamente
              (seguridad, balanceo, carga básica).
            </li>
            <li>
              Analítica (rendimiento/medición): ayudan a entender cómo se usa el sitio
              (páginas vistas, eventos, conversiones).
            </li>
            <li>
              Funcionales: recuerdan preferencias y mejoran la experiencia (por ejemplo,
              herramientas de agenda).
            </li>
            <li>
              Marketing/Publicidad: sirven para atribución de campañas y remarketing (si
              se habilitan).
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            3) Cookies y tecnologías que usamos
          </h2>
          <p>
            A continuación se describen las categorías que pueden estar activas en el
            Sitio. Algunas dependen de si aceptas cookies no esenciales (si tienes
            banner de consentimiento) y de qué herramientas estén activas en ese
            momento.
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">3.1 Esenciales (siempre activas)</h3>
            <p>Se usan para que el sitio funcione y para seguridad.</p>
            <p>Ejemplos comunes (pueden variar por proveedor/configuración):</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Cloudflare / CDN / WAF: cookies o identificadores para seguridad, mitigación de abuso, y rendimiento.</li>
              <li>Preferencias técnicas: mantener estado de sesión o navegación (cuando aplica).</li>
            </ul>
            <p>Estas cookies no se usan para publicidad. Su objetivo es estabilidad y seguridad.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">3.2 Analítica (GA4 vía Google Tag Manager)</h3>
            <p>Se usan para medir uso del sitio y conversiones (por ejemplo: clic en WhatsApp, envío de formulario, solicitud de cotización, etc.).</p>
            <p>Herramientas:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Google Analytics 4 (GA4)</li>
              <li>Google Tag Manager (GTM)</li>
            </ul>
            <p>Para qué se usan:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Saber qué páginas funcionan mejor.</li>
              <li>Detectar dónde se caen los usuarios.</li>
              <li>Medir conversiones reales (leads, formularios, WhatsApp, llamadas).</li>
            </ul>
            <p>Si desactivas analítica, el sitio seguirá funcionando, pero mediremos menos.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">3.3 Funcionales (agenda y formularios)</h3>
            <p>Si usas la agenda de Cal.com o componentes similares, pueden usarse cookies/identificadores para:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>mantener la sesión de la herramienta,</li>
              <li>recordar estado del flujo de agenda,</li>
              <li>evitar errores y mejorar la experiencia.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">3.4 Pagos (Stripe)</h3>
            <p>Si decides pagar en línea (cuando esté habilitado), Stripe puede usar cookies/identificadores para:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>procesar pagos de forma segura,</li>
              <li>prevenir fraude,</li>
              <li>asegurar la operación del checkout.</li>
            </ul>
            <p>Estas cookies/identificadores son parte del funcionamiento del pago. Stripe opera bajo sus propias políticas.</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-foreground">3.5 Marketing (si se habilita)</h3>
            <p>Si en el futuro activamos etiquetas como Meta Pixel, TikTok Pixel o conversiones mejoradas para Ads, podríamos usar cookies de marketing para:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>medir atribución de campañas,</li>
              <li>optimizar anuncios,</li>
              <li>remarketing (si aplica).</li>
            </ul>
            <p>Solo se activan si las habilitas y/o las aceptas, según tu configuración de consentimiento.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">4) Resumen por categoría</h2>
          <div className="overflow-x-auto rounded-2xl border bg-card/80 p-4">
            <table className="w-full text-left text-sm text-muted-foreground">
              <thead className="text-xs uppercase text-foreground">
                <tr>
                  <th className="pb-2">Categoría</th>
                  <th className="pb-2">¿Para qué sirve?</th>
                  <th className="pb-2">¿Se puede desactivar?</th>
                  <th className="pb-2">Ejemplos</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-t">
                  <td className="py-2">Esenciales</td>
                  <td className="py-2">Seguridad y funcionamiento del sitio</td>
                  <td className="py-2">No (sin afectar el sitio)</td>
                  <td className="py-2">Cloudflare, protección anti-bots</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">Analítica</td>
                  <td className="py-2">Medición de uso y conversiones</td>
                  <td className="py-2">Sí</td>
                  <td className="py-2">GA4, GTM</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">Funcionales</td>
                  <td className="py-2">Experiencia mejorada (agenda, etc.)</td>
                  <td className="py-2">Sí</td>
                  <td className="py-2">Cal.com (según implementación)</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">Pagos</td>
                  <td className="py-2">Procesamiento seguro de pagos</td>
                  <td className="py-2">Depende (si usas checkout)</td>
                  <td className="py-2">Stripe</td>
                </tr>
                <tr className="border-t">
                  <td className="py-2">Marketing</td>
                  <td className="py-2">Atribución/remarketing</td>
                  <td className="py-2">Sí</td>
                  <td className="py-2">Meta/TikTok/Ads (si se activan)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5) ¿Cómo controlar o desactivar cookies?
          </h2>
          <p>Tienes varias opciones:</p>
          <p className="font-semibold text-foreground">
            A) Desde el banner o panel de cookies (si está disponible)
          </p>
          <p>
            Si el Sitio muestra un banner o panel de preferencias, puedes aceptar,
            rechazar o ajustar cookies no esenciales (analítica/marketing).
          </p>
          <p className="font-semibold text-foreground">B) Desde tu navegador</p>
          <p>Puedes bloquear o eliminar cookies desde la configuración del navegador. En general:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Ve a Configuración → Privacidad → Cookies / Datos del sitio</li>
            <li>Elimina cookies existentes o bloquea cookies de terceros</li>
          </ul>
          <p>
            Nota: si bloqueas cookies esenciales, algunas partes del sitio pueden
            fallar.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">6) Cambios a esta Política</h2>
          <p>
            Podemos actualizar esta Política si cambiamos herramientas, incorporamos
            nuevas etiquetas o por ajustes operativos. La versión vigente se
            publicará aquí con su fecha de actualización.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">7) Contacto</h2>
          <p>Si tienes dudas sobre cookies o privacidad, contáctanos en:</p>
          <p>Correo: [contacto@rickyram.dev]</p>
          <p>WhatsApp: [663 101 6627]</p>
        </div>
      </section>
    </main>
  );
}
