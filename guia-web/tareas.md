# tareas.md — Plan de ejecución por fases (Sitio Rickyram.dev en Next.js)

**Base documental (source of truth):**
- Home (estructura y copy): `content-home.md`
- Solución Astro (estructura y copy): `content-servicios-astro.md`
- Design system (estilos visuales): `guia-estilos.md`
- Requerimientos + arquitectura: `requerimientos.md`

> Este documento es un **plan de trabajo**. No duplica contenido/copy; referencia specs y guía de estilos.

---

## Fase 0 — Preparación (alineación rápida)
- [ ] Confirmar placeholders globales: Marca, WhatsApp, correo, URL agenda, ciudad, redes (IG/FB/TikTok/LinkedIn).
- [ ] Definir páginas “MVP”: `/` y `/soluciones/astro` (resto puede quedar en “TBD / Coming soon” con estructura).
- [ ] Definir estrategia blog headless: REST vs WPGraphQL (decisión técnica).

**Criterio de salida:** alcance MVP cerrado y variables globales definidas.

---

## Fase 1 — Setup del proyecto (base técnica)
### 1.1 Repositorio y baseline
- [ ] Crear proyecto Next.js (App Router) con TypeScript.
- [ ] Configurar Tailwind CSS.
- [ ] Inicializar shadcn/ui y generar componentes base requeridos (Button, Card, Accordion, Tabs, Dialog, etc.).
- [ ] Instalar librerías base: `next-themes`, `framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`.
- [ ] Configurar lint/format (ESLint + Prettier) y convenciones de imports.

### 1.2 Estructura de carpetas (según requerimientos)
- [ ] Crear estructura: `app/(marketing)`, `components/{ui,sections,shared}`, `lib/`, `content/`, `specs/`.
- [ ] Crear `lib/routes.ts` (navegación) y `lib/pricing.ts` (precios/paquetes/add-ons) como fuente única.

### 1.3 Theming y estilos globales
- [ ] Implementar modo claro/oscuro con `next-themes`.
- [ ] Definir tokens/variables del tema siguiendo `guia-estilos.md` (sin hardcode de hex en componentes).

**Criterio de salida:** app corre, tema funciona, estructura lista, componentes UI base disponibles.

---

## Fase 2 — “Shell” del sitio (layout global)
### 2.1 Layout global
- [ ] Crear `Header` (nav + CTA) y `Footer` (links + contacto + legal) como componentes compartidos.
- [ ] Crear layout base con contenedor, espaciado y superficies consistentes (según guía de estilos).
- [ ] Implementar navegación responsive (desktop + menú mobile).
- [ ] Agregar componente CTA global reutilizable (bloque final/strip).

### 2.2 Páginas placeholder (routing)
- [ ] Crear rutas: `/`, `/soluciones/astro`.
- [ ] Crear placeholders para: `/soluciones/wordpress`, `/soluciones/nextjs`, `/servicios`, `/precios`, `/portafolio`, `/blog`, `/contacto`, `/legal/*` (mensaje “en construcción” + CTA).

**Criterio de salida:** navegación completa sin 404, layout consistente en todas las rutas.

---

## Fase 3 — Home: construir sección por sección (según spec)
**Spec:** `content-home.md`

> Cada sección se implementa como componente en `components/sections/` y consume datos desde `content/` o constantes en `lib/`.

### 3.1 Hero
- [ ] Construir `HomeHero` (H1, subtítulo, bullets, CTAs, trust band).
- [ ] Fondo con gradiente sutil (respetar guías de motion y contraste).
- [ ] Estados hover/focus correctos en CTAs.

### 3.2 Cards “Elige tu camino”
- [ ] `SolutionCards` (Astro/WP/Next) con tags, “desde” y botones.
- [ ] Botón “Ayúdame a elegir” abre modal (Dialog).

### 3.3 Comparativa rápida
- [ ] `QuickCompare` (tabla/stacked) responsive.

### 3.4 Paquetes Starter
- [ ] `StarterPricingPreview` con 3 bloques y rangos (consumir `lib/pricing.ts`).

### 3.5 “Qué incluye Starter”
- [ ] `StarterIncludes` (lista clara + nota honesta).

### 3.6 Servicios recurrentes teaser
- [ ] `ServicesPreviewGrid` (8 cards) con CTA a `/servicios/*`.

### 3.7 Portafolio teaser
- [ ] `PortfolioPreview` (grid + filtros UI opcional; data mock).

### 3.8 Blog teaser
- [ ] `BlogPreview` (3 posts mock; luego se conecta a WP).

### 3.9 Proceso
- [ ] `ProcessSteps` (4–5 pasos).

### 3.10 FAQs
- [ ] `FAQAccordion` (usar `Accordion` de shadcn).

### 3.11 CTA final
- [ ] `FinalCTA` (cotizar + agendar + WhatsApp).

**Criterio de salida:** Home completo, responsive, consistente con guía de estilos, CTAs funcionales.

---

## Fase 4 — Página `/soluciones/astro` (según spec)
**Spec:** `content-servicios-astro.md`

### 4.1 Estructura y secciones
- [ ] `SolutionHero` (Astro: promesa + desde + anchors).
- [ ] `Benefits` + “Para quién es / cuándo no conviene”.
- [ ] `WhatYouCanBuild` (lista).
- [ ] `WhatIncludes` (incluye / no incluye).
- [ ] `PricingTable` (tabla con rangos y notas; data desde `lib/pricing.ts`).
- [ ] `ScopeGuardrails` (alcances por paquete).
- [ ] `AddOns` (tracking/SEO/Ads/cuidado; data desde `lib/pricing.ts`).
- [ ] `FAQAccordion` (Astro).
- [ ] `CTA` final + enlaces internos.

### 4.2 UX / navegación interna
- [ ] Implementar anchors (`#precios`, `#que-incluye`, `#cotizar`) y “jump links”.
- [ ] Agregar “Next steps” cards hacia WP / Next / Precios / Servicios.

**Criterio de salida:** página Astro completa, navegable por anchors, con tabla de precios y CTAs.

---

## Fase 5 — Contenido data-driven (fuentes de verdad)
- [ ] Crear `lib/pricing.ts` con:
  - Paquetes Astro/WP/Next (rangos)
  - Add-ons (tracking, auditoría SEO, ads setup, mantenimiento)
  - Planes Care (mensual)
- [ ] Crear `lib/routes.ts` con:
  - navegación principal
  - links del footer
- [ ] Definir esquema/tipos TypeScript para:
  - Solutions
  - Services
  - FAQs
  - Pricing bundles

**Criterio de salida:** no hay precios hardcodeados en componentes; todo sale de `lib/`.

---

## Fase 6 — SEO técnico base (MVP)
- [ ] Implementar metadata por página (title/description/OG).
- [ ] Agregar `sitemap.xml` y `robots.txt` (automatizado con `next-sitemap` o equivalente).
- [ ] Definir canonical URL (si aplica).
- [ ] Preparar Open Graph image (default) en `public/`.

**Criterio de salida:** páginas indexables, metadata consistente, sitemap/robots disponibles.

---

## Fase 7 — Integraciones “lead capture” (contacto y formularios)
- [ ] Definir componente `LeadForm` reutilizable (nombre, email/teléfono, objetivo, mensaje).
- [ ] Implementar envío de formulario:
  - [ ] Opción A: email provider (Resend/SendGrid)
  - [ ] Opción B: endpoint propio + reCAPTCHA (si se requiere)
- [ ] Conectar CTAs a WhatsApp/agenda (links reales).

**Criterio de salida:** leads capturables sin fricción y con validación clara.

---

## Fase 8 — Blog Headless WordPress (base)
- [ ] Crear `lib/cms/wordpress.ts` (cliente REST o GraphQL).
- [ ] Construir `/blog` (listado) con skeleton loading.
- [ ] Construir `/blog/[slug]` (detalle) con render seguro (sanitize / MD).
- [ ] Definir estructura mínima: categorías, fecha, autor (si aplica).

**Criterio de salida:** blog funcional con data real o stub con swap fácil.

---

## Fase 9 — Accesibilidad + performance (pasada de calidad)
- [ ] Revisar contrastes y focus rings.
- [ ] Verificar navegación por teclado (Header, Dialog, Accordion).
- [ ] Respetar `prefers-reduced-motion` en animaciones.
- [ ] Optimizar imágenes (`next/image`) y fuentes (1–2 familias, load optimizado).
- [ ] Evitar dependencias pesadas no esenciales.

**Criterio de salida:** UX accesible, sitio ligero, interacciones suaves.

---

## Fase 10 — Preparación para producción
- [ ] Páginas “TBD” con contenido mínimo + CTA (sin rutas rotas).
- [ ] Revisar links internos y footer.
- [ ] Revisar copy placeholders (`https://wa.me/526631016627`, `contacto@rickyram.dev`, etc.).
- [ ] Checklist final de “no hay hardcodes raros” (precios/tokens).
- [ ] Deploy (Vercel) + variables de entorno (si aplica).

**Criterio de salida:** sitio publicable sin pendientes críticos.

---

## Apéndice — Backlog (después del MVP)
- [ ] Crear contenido/specs faltantes: WordPress, Next.js, Servicios, Precios, Portafolio, Contacto, Legal.
- [ ] Modal “Ayúdame a elegir” con lógica (3 preguntas → recomendación).
- [ ] Página `/servicios/*` (SEO mensual, Ads, analítica, mantenimiento, etc.) con estructura repetible.
- [ ] Casos de éxito con filtros reales (y datos medibles si existen).
- [ ] Esquemas (Schema.org) por página (Organization/LocalBusiness/FAQ) según se requiera.
