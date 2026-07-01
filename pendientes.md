# Pendientes

Fecha: 2026-06-30

## Decidido

- `desarrollo web` se concentra en `/soluciones`.
- `marketing digital` se trabaja dentro de `/servicios/ads`.
- `/servicios/ads` debe cubrir `Google Ads` + `campanas digitales`.
- Se creara una pagina aparte para `Meta Ads`, `Pixel`, `catalogo` y temas relacionados.
- El blog seguira con `cms.rickyram.dev` + frontend en Next.js.
- El blog sera el canal principal para nutrir SEO.

## Pendiente operativo

### `/soluciones`

- Reforzar el enfoque SEO/comercial para:
  - WordPress
  - Astro
  - Next.js

### `/servicios/ads`

- Redefinir la pagina para que el foco principal quede claro en:
  - Google Ads
  - campanas digitales

### Nueva pagina de Meta

- Definir `slug` final.
- Definir nombre visible final.
- Cubrir como minimo:
  - Meta Ads
  - Pixel
  - configuracion de catalogo

### Blog e indexacion

- Confirmar que `/blog` sera indexable.
- Confirmar que `/blog/[slug]` sera indexable.
- Decidir si las taxonomias:
  - se convierten en paginas SEO reales
  - salen del sitemap y quedan `noindex` si no aportan valor
- Sacar del sitemap URLs con query string si no tendran contenido/indexacion propia.

### Tecnico SEO

- Dejar una sola URL indexable real por cada documento legal.
- Revisar `canonical` y sitemap de legales para que coincidan.
- Crear `llms.txt`.
- No tocar por ahora textos con acentos/encoding raro; el usuario los revisara manualmente si hace falta.

## Keywords acordadas

- desarrollo web
- marketing digital
- ia
- SEO
- campanas digitales

## Checklist de manana

- Ajustar `/soluciones` como pagina objetivo de `desarrollo web`.
- Ajustar `/servicios/ads` para `Google Ads + campanas digitales`.
- Definir `slug` y nombre final de la nueva pagina de Meta Ads.
- Crear `llms.txt`.
- Revisar sitemap y canonicals del blog.
- Resolver decision final sobre taxonomias del blog.
- Limpiar duplicados legales.
