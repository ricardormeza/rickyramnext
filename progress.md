# Progress

Fecha: 2026-08-03

## Cambios realizados hoy

- Se creó la landing independiente `/paginas-web-para-negocios`.
- Se usó el contenido base de `landing/landing.md` para estructurar la página.
- Se tomó como referencia visual `imagenes/propuestaLanding.png`.
- Se integraron las imágenes:
  - `imagenes/hero-soluciones-digitales-web.webp`
  - `imagenes/soluciones-web-rickyram.webp`
- Se construyó una landing sin el header/footer global para mantener un enfoque tipo landing page.
- Se agregó formulario de cotización en dos pasos:
  - Paso 1: nombre, teléfono, correo y nombre del negocio.
  - Paso 2: tipo de proyecto, sitio web actual, inversión contemplada y fecha ideal de inicio.
- Se configuró el formulario para capturar datos de campaña:
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `utm_term`
  - `utm_content`
  - `gclid`
  - `landing_page`
  - `fecha_del_lead`
- Se amplió `/api/leads` para aceptar y enviar los nuevos campos del formulario.
- Se agregó la landing `/paginas-web-para-negocios` al sitemap técnico.
- Se creó la página HTML `/mapa-del-sitio`.
- Se agregó el enlace "Mapa del sitio" al footer global en la sección Legal.
- Se agregó `/mapa-del-sitio` al sitemap técnico.
- Se corrigió `proxy.ts` para permitir las rutas:
  - `/mapa-del-sitio`
  - `/paginas-web-para-negocios`
- Se agregó el enlace "Mapa del sitio" también al footer específico de la landing.
- Se agregó el funko de `rickyram.dev` arriba del enlace de marca en el footer de la landing.

## Validaciones realizadas

- `npx tsc --noEmit` pasó correctamente.
- ESLint pasó correctamente en los archivos modificados para la landing, mapa del sitio, sitemap, rutas y proxy.
- Se detectó que `npm run lint` completo falla por errores preexistentes no relacionados en otros componentes del proyecto.
- Se intentó `npm run build`, pero quedó sin respuesta durante varios minutos y se detuvo para evitar dejar el proceso colgado.

## Notas

- `/mapa-del-sitio` no sustituye al sitemap XML; funciona como mapa HTML para usuarios.
- El sitemap técnico sigue siendo necesario para buscadores.
- El redirect a home en `/mapa-del-sitio` era causado por la allowlist de `proxy.ts`.

---

Fecha: 2026-07-01

## Cambios realizados hoy

- Se cerro el trabajo SEO/comercial de `/soluciones` como pagina objetivo de `desarrollo web`.
- Se reforzaron y alinearon las paginas hijas de `/soluciones`:
  - `/soluciones/wordpress`
  - `/soluciones/astro`
  - `/soluciones/nextjs`
- Se agregaron breadcrumb visible y schema en hubs y paginas clave:
  - `/soluciones`
  - `/servicios`
  - `/servicios/seo`
  - `/servicios/ads`
  - `/servicios/analitica`
  - `/servicios/automatizacion`
  - `/servicios/ciberseguridad`
  - `/servicios/infraestructura`
  - `/contacto`
- Se redefinio `/servicios/ads` para cubrir:
  - Google Ads
  - Meta Ads
  - campanas de Facebook
  - campanas digitales
  - cuenta publicitaria
  - portafolio comercial
  - content management
- Se reviso y ajusto SEO de:
  - `/servicios/seo`
  - `/servicios/analitica`
  - `/servicios/automatizacion`
  - `/servicios/ciberseguridad`
  - `/servicios/infraestructura`
  - `/contacto`
- Se limpiaron canonicals y sitemap:
  - `/home-v2` ya apunta canonico a `/`
  - legales consolidados bajo `/legal/...`
  - aliases `/privacidad` y `/cookies` ahora redirigen
  - sitemap sin query strings del blog
- Se dejo el blog listo para indexacion base:
  - `/blog` con canonical
  - `/blog/[slug]` con canonical
  - schema `CollectionPage` / `BlogPosting`
  - taxonomias fuera de indexacion real por ahora
- Se creo `public/llms.txt`.
- Se activo `blogEnabled`.
- Se corrigio enlace interno roto en `/servicios`:
  - la card de `Infraestructura` ya no apuntaba a `Ciberseguridad`
- Se agregaron señales para GTM/GA4 en `/contacto`:
  - `view_contact_page`
  - `form_start`
  - `generate_lead`
  - `contact_form_error`
  - atributos `data-*` para clicks de contacto
- Se hizo un primer pase de performance:
  - `app/(marketing)/layout.tsx` volvio a server component
  - `BotAssist` y `ScrollToTop` se movieron a wrapper cliente
  - `/contacto` ya no embebe Google Maps; ahora usa bloque ligero + link externo

## Decisiones tomadas hoy

- `desarrollo web` se concentra en `/soluciones`.
- `marketing digital` se trabaja dentro de `/servicios/ads`.
- No se creara pagina aparte de Meta Ads; se integra dentro de `/servicios/ads`.
- El blog seguira viniendo desde `cms.rickyram.dev` por ahora.
- El blog sera el lugar principal para nutrir SEO.
- Las taxonomias del blog no se indexan hasta tener landings reales.
- `join.rickyram.dev` no se agrega al sitemap principal de `rickyram.dev`.

## Estado

- SEO onsite/técnico de `/soluciones` y `/servicios` quedo esencialmente cerrado.
- Queda pendiente validar en produccion:
  - Search Console
  - Rich Results
  - impacto real del pase de performance en mobile
