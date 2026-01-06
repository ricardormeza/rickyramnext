# Requerimientos de Proyecto — Sitio Rickyram.dev (Next.js)
**Tipo:** Marketing website + catálogo de servicios + blog headless (WordPress)  
**Estado:** Overview (no incluye pasos de setup; van en `tareas.md`)  
**Fuentes internas:** `product-brief.md`, `content-home.md`, `content-servicios-astro.md`, `guia-estilos.md`, `Creative.pdf`

---

## 1) Project Overview
Construir el nuevo sitio web de Rickyram.dev en **Next.js** para:
- Presentar 3 formas de construir sitios: **Astro**, **WordPress**, **Next.js**
- Vender paquetes **Starter** (producto “pan de cada día”) y facilitar upsells (tracking, SEO/Ads, mantenimiento)
- Servir como hub de **Servicios recurrentes** (SEO mensual, Ads, analítica, mantenimiento, ciberseguridad, chatbots, etc.)
- Integrar **Blog** usando **WordPress headless** (contenido administrable sin cambiar el front)

**Objetivo principal (UX/negocio):** convertir visitas en leads (WhatsApp / formulario / llamada / agenda) y guiar la elección de stack con mensajes claros.

**No objetivos (por ahora):**
- No definir aún diseño final por sección ni contenido definitivo (se trabaja con specs de contenido).
- No implementar e-commerce/dashboards (solo se ofertan; la implementación es proyecto aparte).

---

## 2) Tech Stack (tabla: tecnología y propósito)

| Capa | Tecnología | Propósito | Nota |
|---|---|---|---|
| Framework | Next.js (App Router) | Sitio principal, routing, SSR/SSG | Base del proyecto |
| Lenguaje | TypeScript | Tipado, mantenibilidad | Requerido |
| Estilos | Tailwind CSS | Utility-first styling | Alineado al design system |
| UI Library | shadcn/ui | Componentes base consistentes | Base para DS |
| Animación | Framer Motion | Microinteracciones y transiciones | Respeta `prefers-reduced-motion` |
| Theming | next-themes | Toggle claro/oscuro | Persistencia de tema |
| Iconos | lucide-react | Iconografía consistente | Line icons |
| Formularios | react-hook-form + zod | Validación y UX de forms | Errores claros |
| Contenido | Markdown/MDX | Specs de contenido “data-driven” | Fuente de verdad para copy |
| Blog CMS | WordPress (headless) | Gestión de posts | REST o WPGraphQL |
| SEO técnico | next-sitemap (o equivalente) | sitemap/robots automatizados | Mantener indexable |
| Deploy | Vercel | Hosting recomendado para Next | No detallar setup aquí |

---

## 3) Dependencias NPM requeridas (lista)
> Lista “mínima viable” para implementar lo definido. Versiones se fijan en el repo.

### Core
- `next`
- `react`
- `react-dom`
- `typescript`

### Styling / UI
- `tailwindcss`
- `postcss`
- `autoprefixer`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react`
- shadcn/ui (componentes generados en `/components/ui`)

### Theming / Motion
- `next-themes`
- `framer-motion`

### Forms / Validation
- `react-hook-form`
- `zod`
- `@hookform/resolvers`

### Content (Markdown/MDX)
- **Opción A (MDX):** `next-mdx-remote` + `gray-matter`
- **Opción B (MDX oficial):** `@next/mdx` + `gray-matter`
- (Opcional recomendado) `remark-gfm` (tablas/checkboxes en MD)

### SEO utilitario
- `next-sitemap` (o herramienta equivalente para sitemap/robots)

### Integraciones opcionales (según alcance contratado)
- Email forms: `resend` **o** `@sendgrid/mail`
- Analytics: sin dependencia obligatoria (scripts) o wrappers según preferencia
- WordPress GraphQL: `graphql` + `graphql-request` (si se usa WPGraphQL)

---

## 4) Design System (referencia única)
El diseño visual y reglas UI se rigen por el documento:
- **`guia-estilos.md`** (source of truth)

**Requerimientos de alto nivel (sin duplicar la guía):**
- Mantener consistencia con tokens/variables del tema (no hardcodear colores sueltos)
- Implementar **modo claro/oscuro** (toggle visible)
- Incluir acentos de **gradientes animados** de forma sutil (especialmente en hero y separadores)
- Mantener componentes base en shadcn/ui (Buttons, Cards, Accordion, Tabs, Dialog)

---

## 5) Pages & Sections Index (con links a spec files)
> Tabla índice. Cada página debe mapear a un “spec” de contenido.  
> **Nota:** los specs son la fuente para copy/estructura; el layout final se implementa en componentes.

| Ruta | Descripción (1 línea) | Spec file |
|---|---|---|
| `/` | Home: propuesta + comparativa + paquetes + servicios + CTA | [content-home.md](./content-home.md) |
| `/soluciones/astro` | Solución Astro: beneficios, para quién, precios, add-ons, CTA | [content-servicios-astro.md](./content-servicios-astro.md) |
| `/soluciones/wordpress` | Solución WordPress (pendiente de spec) | TBD |
| `/soluciones/nextjs` | Solución Next.js (pendiente de spec) | TBD |
| `/tiendas-en-linea` | Comparativa y paquetes tiendas (pendiente de spec) | TBD |
| `/servicios` | Hub de servicios recurrentes (pendiente de spec) | TBD |
| `/precios` | Tabla comparativa + add-ons + planes de mantenimiento (pendiente) | TBD |
| `/portafolio` | Galería de casos + filtros (pendiente) | TBD |
| `/blog` | Listado blog headless + categorías (pendiente) | TBD |
| `/contacto` | Contacto + CTA + agenda (pendiente) | TBD |
| `/legal/*` | Privacidad, cookies, términos (pendiente) | TBD |

Specs globales:
- Brief del producto: [product-brief.md](./product-brief.md)
- Guía de estilos: [guia-estilos.md](./guia-estilos.md)
- Referencias visuales: [Creative.pdf](./Creative.pdf)

---

## 6) Estructura de archivos recomendada (organización de folders)
> Objetivo: proyecto ordenado, escalable, y “data-driven” (contenido y precios centralizados).

```txt
/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx                      # Home
│  │  ├─ soluciones/
│  │  │  ├─ astro/page.tsx
│  │  │  ├─ wordpress/page.tsx         # TBD
│  │  │  └─ nextjs/page.tsx            # TBD
│  │  ├─ tiendas-en-linea/page.tsx     # TBD
│  │  ├─ servicios/page.tsx            # TBD
│  │  ├─ precios/page.tsx              # TBD
│  │  ├─ portafolio/page.tsx           # TBD
│  │  ├─ blog/page.tsx                 # headless WP list
│  │  ├─ contacto/page.tsx
│  │  └─ legal/
│  │     ├─ privacidad/page.tsx
│  │     ├─ cookies/page.tsx
│  │     └─ terminos/page.tsx
│  ├─ layout.tsx
│  └─ globals.css
│
├─ components/
│  ├─ ui/                              # shadcn/ui components
│  ├─ sections/                        # secciones reutilizables (Hero, Pricing, FAQ, etc.)
│  ├─ marketing/                       # piezas específicas (SolutionCards, ServiceGrid, etc.)
│  └─ shared/                          # Header, Footer, CTA, etc.
│
├─ content/                            # contenido renderizable (MD/MDX)
│  ├─ home.md
│  ├─ soluciones/
│  │  └─ astro.md
│  └─ (TBD...).md
│
├─ lib/
│  ├─ routes.ts                        # rutas y navegación
│  ├─ pricing.ts                       # paquetes, rangos, add-ons
│  ├─ seo.ts                           # helpers metadata
│  ├─ cms/wordpress.ts                 # cliente WP (REST/GraphQL)
│  └─ utils.ts
│
├─ specs/                              # documentación interna (fuente de verdad del brief)
│  ├─ content/                         # specs de copy/estructura (los adjuntos viven aquí)
│  ├─ design/                          # guía de estilos
│  ├─ product/                         # brief
│  └─ creative/                        # referencias visuales
│
└─ public/
   ├─ images/
   └─ (assets)
