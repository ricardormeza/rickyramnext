# Pendientes

Fecha: 2026-06-30

## Decidido

- `desarrollo web` se concentra en `/soluciones`.
- `marketing digital` se trabaja dentro de `/servicios/ads`.
- `/servicios/ads` debe cubrir `Google Ads` + `campanas digitales`.
- `Meta Ads`, `campanas de Facebook`, `cuenta publicitaria`, `portafolio comercial` y `content management` se trabajan dentro de `/servicios/ads`.
- El blog seguira con `cms.rickyram.dev` + frontend en Next.js.
- El blog sera el canal principal para nutrir SEO.

## Pendiente operativo

### Hecho

- `/soluciones`: ya se ajusto como pagina objetivo de `desarrollo web`.
- `/soluciones`: ya se reforzo el enfoque SEO/comercial para:
  - WordPress
  - Astro
  - Next.js
- `/soluciones`: canonical, breadcrumb visible y schema (`Service`, `FAQPage`, `BreadcrumbList`) listos.
- `/servicios`: hub con breadcrumb, canonical y fix de enlace interno de `Infraestructura`.
- `/servicios/seo`, `/servicios/ads`, `/servicios/analitica`, `/servicios/automatizacion`, `/servicios/ciberseguridad`, `/servicios/infraestructura`: schema y SEO tecnico aplicados.
- `/servicios/ads`: ya se redefinio para cubrir `Google Ads`, `Meta Ads`, `campanas de Facebook`, `campanas digitales`, `cuenta publicitaria`, `portafolio comercial` y `content management`.
- `/contacto`: SEO base, breadcrumb y schema listos.
- legales: una sola URL indexable real por documento bajo `/legal/...`.
- blog: indexacion base lista, canonicals listos, schema de `Blog` y `BlogPosting` agregado.
- `llms.txt`: creado.

### `/soluciones`

- Hecho.

### `/servicios/ads`

- Hecho.

### Blog e indexacion

- `/blog`: indexable con canonical propio.
- `/blog/[slug]`: indexable con canonical propio.
- Hecho por ahora: taxonomias fuera de indexacion real mientras no existan landings dedicadas.
- Hecho: sitemap sin URLs con query string.

### Tecnico SEO

- Hecho: `/home-v2` ya apunta canonico a `/`.
- Hecho: una sola URL indexable real por legal (`/legal/...`), con redirects desde aliases.
- Hecho: `canonical` y sitemap de legales ya coinciden.
- Hecho: `llms.txt`.
- No tocar por ahora textos con acentos/encoding raro; el usuario los revisara manualmente si hace falta.

## Keywords acordadas

- desarrollo web
- marketing digital
- ia
- SEO
- campanas digitales

## Pendiente real

- Si mas adelante se quieren taxonomias SEO, crear rutas dedicadas tipo categoria/tag y no volver a query strings.
- Validar en Search Console / Rich Results que el schema de `Blog` y `BlogPosting` quede bien detectado.
