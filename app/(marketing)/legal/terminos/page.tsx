export default function TerminosPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-foreground">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Legal
        </p>
        <h1 className="text-3xl font-semibold md:text-4xl">
          Términos y Condiciones de Uso y Contratación
        </h1>
        <p className="text-sm text-muted-foreground">Última actualización: [17/01/2026]</p>
        <p className="text-sm text-muted-foreground">
          Estos Términos y Condiciones (en adelante, los Términos) regulan el uso del
          sitio [rickyram.dev] (el Sitio) y, en su caso, la contratación de servicios
          ofrecidos por [RickyRamDev / Ricardo Ramírez Meza] (en adelante, EL
          PROVEEDOR).
        </p>
        <p className="text-sm text-muted-foreground">
          Al acceder, navegar o solicitar servicios a través del Sitio, aceptas estos
          Términos. Si no estás de acuerdo, por favor no uses el Sitio.
        </p>
        <p className="text-sm text-muted-foreground">
          Nota: Este documento es un marco general. Para proyectos específicos puede
          existir una propuesta/orden de trabajo con alcance, entregables y
          condiciones particulares. En caso de conflicto, prevalece la propuesta
          firmada/aceptada para ese proyecto.
        </p>
      </header>

      <section className="mt-10 space-y-6 text-sm text-muted-foreground">
        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            1) Identidad del proveedor
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Proveedor: [RickyRamDev / Ricardo Ramírez Meza]</li>
            <li>
              Domicilio: [Sombrerete 114 A Col. Benito Juárez, Papantla, Veracruz,
              México]
            </li>
            <li>
              Contacto: [contacto@rickyram.dev] [663 101 66 27]
            </li>
            <li>
              Servicios: desarrollo web (Astro/WordPress/Next.js), SEO, Ads, analítica
              (GA4/GTM), automatización, ciberseguridad, infraestructura
              (dominio/DNS/correo).
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">2) Definiciones</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Cliente/Usuario: persona que navega el Sitio o contrata servicios.</li>
            <li>
              Propuesta: documento (PDF, email o página de cotización) con alcance,
              costos y tiempos.
            </li>
            <li>
              Alcance: lista de entregables y límites del servicio (páginas,
              secciones, integraciones, etc.).
            </li>
            <li>Add-ons: servicios opcionales adicionales al paquete base.</li>
            <li>
              Terceros: herramientas y plataformas externas (p. ej., hosting,
              Cloudflare, Google, Stripe, Cal.com).
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">3) Uso del Sitio</h2>
          <p>El Usuario se compromete a usar el Sitio de forma lícita y a no intentar:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>vulnerar la seguridad del Sitio, servidores o servicios asociados,</li>
            <li>realizar scraping abusivo,</li>
            <li>introducir código malicioso,</li>
            <li>interferir con el funcionamiento del Sitio.</li>
          </ul>
          <p>EL PROVEEDOR puede suspender o bloquear accesos ante usos indebidos.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            4) Información, paquetes y contratación
          </h2>
          <p>
            El Sitio puede mostrar paquetes, rangos de precio y servicios. La
            contratación se formaliza mediante:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>aceptación de una Propuesta, o</li>
            <li>confirmación por escrito (correo/WhatsApp) de alcance, costo y tiempos, o</li>
            <li>pago de anticipo/pago inicial cuando aplique.</li>
          </ul>
          <p>
            EL PROVEEDOR está obligado a informar y respetar precios, términos y
            condiciones ofrecidas o convenidas con el consumidor.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            5) Cotizaciones, precios y cambios
          </h2>
          <p>Los precios publicados pueden ser desde, rangos o a cotizar.</p>
          <p>
            Una cotización final depende de: alcance, volumen de contenido,
            integraciones, urgencia, estado del sitio actual y requerimientos
            especiales.
          </p>
          <p>
            Si durante el proyecto se solicitan cambios fuera del alcance, se
            considerará cambio de alcance y se cotiza como:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>add-on, o</li>
            <li>bolsa de horas, o</li>
            <li>nueva fase.</li>
          </ul>
          <p>
            En compras en línea, los términos deben aclarar cargos adicionales y
            forma de pago, entre otras condiciones.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            6) Pagos, facturación e impuestos
          </h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Los pagos pueden ser: anticipo, parcialidades o pago único, según propuesta.</li>
            <li>Los importes pueden mostrarse +IVA o con IVA incluido (según se especifique).</li>
            <li>
              Si se requiere factura, el Cliente deberá proporcionar sus datos fiscales
              completos (RFC y constancia, si aplica) dentro de los plazos establecidos.
            </li>
            <li>
              Pagos con terceros (Stripe u otros): el procesamiento de pagos puede hacerse
              mediante plataformas externas sujetas a sus propios términos.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            7) Hosting, dominio y servicios de terceros
          </h2>
          <h3 className="font-semibold text-foreground">7.1 Hosting incluido (cuando aplique)</h3>
          <p>En algunos paquetes puede incluirse hosting por 1 año. Salvo que se indique lo contrario en la propuesta:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>el hosting incluido es compartido (shared hosting),</li>
            <li>se ofrece para facilitar el arranque del proyecto,</li>
            <li>la renovación a partir del segundo año puede ser pagada por el Cliente.</li>
          </ul>
          <p>
            Si el Cliente ya cuenta con hosting/dominio, EL PROVEEDOR puede adaptarse a la
            infraestructura existente y sugerir optimizaciones.
          </p>
          <h3 className="mt-4 font-semibold text-foreground">7.2 Dominio</h3>
          <p>El dominio (registro/renovación) puede estar incluido o no según la propuesta. En general:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>se recomienda que el dominio esté a nombre del Cliente,</li>
            <li>el Cliente debe mantener acceso al registrador y/o DNS.</li>
          </ul>
          <h3 className="mt-4 font-semibold text-foreground">7.3 Herramientas de terceros</h3>
          <p>
            Para prestar el servicio se pueden usar plataformas como: hosting, DNS/CDN,
            analítica, Tag Manager, CRM, automatización, email corporativo, etc. El uso
            de dichas plataformas puede requerir cuentas y/o pagos del Cliente.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            8) Responsabilidades del Cliente
          </h2>
          <p>Para cumplir tiempos y calidad, el Cliente se compromete a:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>entregar materiales (logo, textos, imágenes) o aprobar los propuestos,</li>
            <li>proporcionar accesos (hosting, WordPress, DNS, Search Console, etc.) cuando se requiera,</li>
            <li>responder aprobaciones en tiempos razonables,</li>
            <li>validar información legal/comercial de su negocio (precios, políticas, avisos).</li>
          </ul>
          <p>Retrasos por falta de materiales o aprobaciones pueden extender el timeline.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            9) Entregables, revisiones y aceptación
          </h2>
          <p>Los entregables se detallan en la Propuesta.</p>
          <p>Las revisiones incluidas (número/alcance) se definen por paquete o propuesta.</p>
          <p>
            Una vez entregado un hito, el Cliente debe revisarlo y reportar ajustes dentro
            de un periodo razonable (por ejemplo, 5-10 días hábiles).
          </p>
          <p>Si no hay respuesta, puede considerarse aceptación tácita del hito.</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            10) Alcance SEO, Ads y resultados
          </h2>
          <p>
            EL PROVEEDOR puede aplicar buenas prácticas técnicas (performance, estructura,
            tags, tracking), pero:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>no garantiza posiciones #1 en buscadores,</li>
            <li>
              no garantiza resultados comerciales específicos (ventas/leads) sin considerar
              oferta, mercado, inversión publicitaria y seguimiento del Cliente.
            </li>
          </ul>
          <p>
            En Ads, los resultados dependen de presupuesto, competencia, oferta, landing y
            optimización continua.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">11) Propiedad intelectual</h2>
          <h3 className="font-semibold text-foreground">11.1 Materiales del Cliente</h3>
          <p>
            El Cliente declara contar con derechos de uso sobre marcas, logos, imágenes y
            textos entregados.
          </p>
          <h3 className="mt-4 font-semibold text-foreground">11.2 Entregables del proyecto</h3>
          <p>Salvo pacto distinto en la Propuesta:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              al liquidarse el proyecto, el Cliente obtiene licencia/uso de los entregables
              acordados (sitio, componentes, configuraciones),
            </li>
            <li>
              EL PROVEEDOR puede conservar librerías internas, métodos y plantillas no
              específicas del Cliente.
            </li>
          </ul>
          <h3 className="mt-4 font-semibold text-foreground">11.3 Portafolio</h3>
          <p>
            EL PROVEEDOR puede mostrar el proyecto en portafolio (capturas o enlace) salvo
            que el Cliente solicite por escrito confidencialidad/publicación restringida.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">12) Confidencialidad</h2>
          <p>
            Si el Cliente comparte información sensible (precios internos, procesos, accesos,
            bases de datos), EL PROVEEDOR se compromete a:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>usarla solo para prestar el servicio,</li>
            <li>mantenerla protegida con medidas razonables,</li>
            <li>
              no divulgarla a terceros salvo necesidad operativa (hosting/pagos/herramientas)
              y bajo confidencialidad.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            13) Garantías, limitación de responsabilidad
          </h2>
          <p>
            El Sitio y los servicios se ofrecen tal cual y según disponibilidad. En la
            máxima medida permitida:
          </p>
          <p>
            EL PROVEEDOR no será responsable por daños indirectos, pérdida de ganancias,
            pérdida de datos o interrupciones causadas por terceros (hosting, DNS,
            plataformas, caídas de servicios).
          </p>
          <p>
            La responsabilidad total (si aplica) se limita al monto pagado por el Cliente
            en el periodo/servicio afectado, salvo pacto distinto.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">14) Soporte y mantenimiento</h2>
          <p>Si el Cliente contrata mantenimiento mensual, aplican:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>SLA y alcance del plan (cambios incluidos, monitoreo, backups, etc.),</li>
            <li>tiempos de respuesta según plan,</li>
            <li>exclusiones (desarrollo mayor, migraciones, rediseños) que se cotizan aparte.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            15) Cancelaciones, reprogramaciones y reembolsos
          </h2>
          <p>El Cliente puede cancelar un proyecto en cualquier momento; se facturará el trabajo ya realizado.</p>
          <p>
            Anticipos normalmente cubren reservación de agenda e inicio del trabajo; salvo
            propuesta distinta, pueden no ser reembolsables.
          </p>
          <p>
            Reprogramaciones de sesiones (diagnóstico/videollamada) deben solicitarse con
            anticipación razonable.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            16) Comunicaciones electrónicas
          </h2>
          <p>
            El Cliente acepta que comunicaciones, aprobaciones y acuerdos puedan realizarse
            por medios electrónicos (correo, mensajería, plataformas). En México, los
            mensajes de datos pueden tener efectos jurídicos en transacciones comerciales
            cuando se mantienen íntegros y accesibles.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            17) Protección de datos y cookies
          </h2>
          <p>
            El tratamiento de datos personales se rige por el Aviso de Privacidad publicado
            en /privacidad. Para información sobre cookies y tecnologías de medición,
            consulta /cookies.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">18) Cambios a estos Términos</h2>
          <p>
            EL PROVEEDOR puede modificar estos Términos por razones legales, operativas o
            de servicio. La versión vigente se publicará en esta página con la fecha de
            actualización.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">
            19) Ley aplicable y jurisdicción
          </h2>
          <p>
            Estos Términos se interpretan conforme a las leyes aplicables en México. Para
            cualquier controversia, las partes se someten a los tribunales competentes de
            [Veracruz], salvo disposición distinta por ley.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">20) Contacto</h2>
          <p>Para dudas sobre estos Términos:</p>
          <p>Correo: [contacto@rickyram.dev]</p>
          <p>WhatsApp: [663 101 66 27]</p>
        </div>
      </section>
    </main>
  );
}
