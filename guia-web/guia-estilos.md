# Guía de estilos — Rickyram.dev (Next.js + Tailwind + shadcn/ui)
> **Solo estilos visuales**: colores, tipografía, layout, componentes, motion, responsive, accesibilidad y theming.

---

## 1) Fundamentos visuales

### 1.1 Personalidad visual
- **Moderno, limpio, tech-premium**.
- Mucho aire (espacios generosos), bordes suaves, sombras ligeras.
- Acentos con **gradientes sutiles** y microinteracciones (nunca estridentes).

### 1.2 Formas
- Radio base (cards/sections): **24px** (`rounded-2xl`)
- Radio secundario (inputs/buttons): **16px** (`rounded-xl`)
- Chips/badges: **9999px** (`rounded-full`)

### 1.3 Profundidad (sombras)
- Sombras suaves, casi imperceptibles:
  - `shadow-sm` para cards
  - `shadow-md` para elementos destacados
- Evitar sombras duras/negro intenso; preferir sombras difusas.

---

## 2) Color

### 2.1 Color primario (marca)
- **Primary:** `#1881FF`
- **Primary Hover:** `#0F6FE6`
- **Primary Active:** `#0C5FC7`

> Regla: el primario se usa para **CTA principal**, links destacados, highlights y estados activos.

### 2.2 Neutrales (modo claro)
- **Background:** `#FFFFFF`
- **Surface 1:** `#F7FAFF` (secciones alternas)
- **Surface 2:** `#F1F5FF` (cards suaves / paneles)
- **Text (strong):** `#0B1220`
- **Text (muted):** `#475569`
- **Border:** `rgba(148,163,184,0.28)`

### 2.3 Neutrales (modo oscuro)
- **Background:** `#060A12`
- **Surface 1:** `#0B1220`
- **Surface 2:** `#101A2E`
- **Text (strong):** `#E6EDF7`
- **Text (muted):** `#93A4BD`
- **Border:** `rgba(148,163,184,0.18)`

### 2.4 Estados semánticos
- **Success:** `#22C55E`
- **Warning:** `#F59E0B`
- **Danger:** `#EF4444`
- **Info:** usar Primary o `#38BDF8` si se requiere un secundario (opcional)

### 2.5 Gradientes (uso moderado)
- Gradiente de marca sugerido:
  - `#1881FF → #60A5FA → #A78BFA` (con baja opacidad)
- Usos permitidos:
  - fondos del hero (blur + opacity 10–25%)
  - separadores entre secciones
  - hover de cards (overlay)
- Prohibido:
  - texto largo sobre gradiente intenso
  - gradiente como fondo de toda la página

---

## 3) Tipografía

### 3.1 Familia tipográfica
- Recomendación: **Geist Sans** o **Inter**
- Fallback: `system-ui, -apple-system, Segoe UI, Roboto, Arial`

### 3.2 Jerarquía (Tailwind)
- **H1:** `text-4xl md:text-6xl font-semibold tracking-tight`
- **H2:** `text-2xl md:text-4xl font-semibold tracking-tight`
- **H3:** `text-xl md:text-2xl font-semibold`
- **Body:** `text-base md:text-lg leading-relaxed`
- **Small / microcopy:** `text-sm text-muted-foreground`

### 3.3 Reglas de legibilidad
- Longitud de línea ideal: **60–85 caracteres** en texto corrido.
- Interlineado: `leading-relaxed` o `leading-7` en body.
- Evitar texto en mayúsculas como párrafo (solo badges o labels cortos).

---

## 4) Espaciado y layout

### 4.1 Contenedor
- `max-w-7xl` (o `max-w-6xl` si quieres más “compact premium”)
- Padding horizontal:
  - mobile: `px-4`
  - md+: `px-6`

### 4.2 Ritmo vertical de secciones
- Secciones estándar: `py-12 md:py-20`
- Secciones “hero”: `py-16 md:py-28`
- Separación interna (stack): `space-y-6 md:space-y-10`

### 4.3 Grid
- Cards: `grid gap-4 md:gap-6`
- 3 columnas desktop: `md:grid-cols-3`
- 2 columnas (contenido + visual): `md:grid-cols-2 md:gap-10`

### 4.4 Breakpoints (por defecto Tailwind)
- Mobile-first
- Ajustes principales en `md` y `lg`

---

## 5) Componentes: estilo y estados

> Basado en shadcn/ui: coherencia por variantes y tokens.

### 5.1 Botones
- **Primary (CTA):**
  - Fondo: Primary
  - Texto: blanco
  - Hover: Primary Hover
  - Active: Primary Active
  - Clase base: `rounded-xl px-5 py-3 font-medium`
- **Secondary:**
  - Fondo: Surface 2
  - Borde: Border
  - Hover: elevar sombra + leve cambio de fondo
- **Ghost/Link:**
  - Sin fondo
  - Color: Primary
  - Hover: underline + leve opacity

**Regla:** 1 CTA primary por viewport (para no saturar).

### 5.2 Links
- Color: Primary
- Hover: underline (siempre)
- Visited: opcional (si se activa, que sea sutil)

### 5.3 Cards
- Base: Surface 1/2 según el modo
- Borde: Border
- Sombra: `shadow-sm` (hover `shadow-md`)
- Hover: elevar 2–4px con `transform` + overlay sutil

### 5.4 Badges / Chips
- Fondo suave (tint del primario al 10–15%)
- Texto fuerte (foreground)
- Radio full, padding corto: `px-3 py-1 text-xs font-medium`

### 5.5 Inputs / Forms
- Alto cómodo: 44–48px (touch-friendly)
- Borde sutil + focus ring Primary
- Mensajes de error: Danger + texto `text-sm`

### 5.6 Tabs / Toggles
- Activo: underline/indicator Primary
- Inactivo: texto muted
- Transición: 150–200ms

### 5.7 Accordion (FAQs)
- Títulos: `font-medium`
- Icono chevron: rotación suave al abrir
- Separadores sutiles (border)

---

## 6) Iconografía e ilustración

### 6.1 Iconos
- Recomendado: **Lucide** (línea, simple)
- Grosor consistente (stroke uniforme)
- Tamaños:
  - inline: 16–18px
  - cards: 20–24px
  - features: 24–28px

### 6.2 Imágenes / mockups
- Estilo: limpio, con buen contraste, preferir fondos neutros.
- Esquinas redondeadas: `rounded-2xl`
- Evitar imágenes pixeladas; siempre optimizadas.

---

## 7) Motion / microinteracciones

### 7.1 Transiciones
- Duración base: **150–250ms**
- Easing: `ease-out` para entradas, `ease-in-out` para toggles

### 7.2 Hover y foco
- Cards: translateY ligero + sombra
- Botones: oscurecer/iluminar + micro escala opcional (muy sutil)

### 7.3 Animaciones de fondo (gradiente)
- Lentas, baja opacidad, blur
- Deben respetar `prefers-reduced-motion`

### 7.4 Accesibilidad de motion
- Si `prefers-reduced-motion: reduce`, desactivar:
  - animaciones continuas
  - parallax
  - transiciones largas

---

## 8) Responsive (reglas de comportamiento)

### 8.1 Mobile-first
- Priorizar lectura y CTA visible.
- Evitar “3 columnas” en mobile: siempre stack.

### 8.2 Tamaños táctiles
- Tap targets mínimo: **44x44px**
- Espacio entre elementos clicables: suficiente para evitar misclick.

### 8.3 Tipografía en mobile
- H1 no debe romper líneas raras: ajustar `max-w` del texto y `leading-tight`.

---

## 9) Accesibilidad visual (obligatorio)

- Contraste mínimo recomendado:
  - Texto normal: **4.5:1**
  - Texto grande: **3:1**
- Focus ring visible en todos los elementos interactivos:
  - ring: Primary con opacity (ej. 30–40%)
- Estados no dependan solo de color:
  - error: color + ícono + texto

---

## 10) Theming (shadcn/ui + Tailwind)

### 10.1 Convención de tokens
- No usar hex “sueltos” en componentes.
- Usar variables/tokens del tema:
  - `background`, `foreground`
  - `primary`, `primary-foreground`
  - `muted`, `muted-foreground`
  - `border`, `ring`

### 10.2 Coherencia de superficies
- Alternar secciones:
  - fondo base → Surface 1 → base → Surface 1…
- Cards siempre con un nivel de superficie por encima del fondo de su sección.

---

## 11) Checklist visual (rápido)
- [ ] El CTA primary destaca sin gritar.
- [ ] Textos largos siempre sobre fondo sólido (no gradiente fuerte).
- [ ] Cards y botones comparten radios y sombras consistentes.
- [ ] Focus ring visible en keyboard nav.
- [ ] Modo oscuro legible (muted no demasiado tenue).
- [ ] Espaciado generoso; nada apretado.
