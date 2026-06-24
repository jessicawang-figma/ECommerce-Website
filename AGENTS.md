# Twigma Design System — Agent Rules

Guidance for integrating Figma designs into this codebase via the Model Context
Protocol (Figma MCP + Code Connect). This is the **Twigma Luxury Plants** React
component library (`@twigma/ui`), mapped 1:1 to the Figma file
[`Twigma Luxury Plants Design System v1`](https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1).

When implementing a Figma node, **always prefer an existing component and existing
tokens** over generating new markup or hardcoded values. Most designs can be
assembled entirely from the components and Tailwind tokens documented below.

---

## 1. Design Tokens

**Source of truth:** `src/styles/tokens.css` (CSS variables) → surfaced as Tailwind
theme keys in `tailwind.config.ts`. Tokens are generated from the Figma "Color"
variable collection (Light + Dark modes).

### How tokens flow
1. Semantic colors are defined as CSS custom properties under `:root` (Light) and
   `.dark` (Dark) in `src/styles/tokens.css`.
2. `tailwind.config.ts` maps each variable to a Tailwind color/utility name via
   `var(--tw-*)`, so the **same class adapts across themes automatically**.
3. Dark mode is `class`-based (`darkMode: "class"`) — toggle by adding `.dark` to
   an ancestor.

### Color tokens (use the Tailwind name, never the hex)
| Figma intent | Tailwind class | CSS var |
| --- | --- | --- |
| Page background | `bg-canvas` | `--tw-canvas` |
| Card / surface | `bg-surface` | `--tw-surface` |
| Muted surface | `bg-surface-muted` | `--tw-surface-muted` |
| Primary text | `text-ink` | `--tw-ink` |
| Secondary text | `text-muted` | `--tw-muted` |
| Tertiary text | `text-faint` | `--tw-faint` |
| Inverse text | `text-inverse` | `--tw-inverse` |
| Hairline border | `border-line` | `--tw-line` |
| Strong border | `border-line-strong` | `--tw-line-strong` |
| Brand / primary | `forest`, `forest-hover`, `forest-fg` | `--tw-forest*` |
| Accent (soft) | `sage`, `sage-soft` | `--tw-sage*` |
| Accent (warm) | `clay`, `clay-hover` | `--tw-clay*` |
| Status | `success`, `warning`, `error` | `--tw-success` etc. |

### Typography
Three font families (loaded via Google Fonts in `tokens.css`):
- `font-sans` → **Inter** (body, default)
- `font-heading` → **Poppins** (headings, buttons, prices)
- `font-display` → **Playfair Display** (hero / display text)

### Radius & elevation
- Radius: `rounded-sm` (8px), `rounded-md` (12px), `rounded-lg` (16px),
  `rounded-xl` (24px), `rounded-pill` (999px).
- Shadow: `shadow-elev-sm`, `shadow-elev-md`, `shadow-elev-lg`.

> **Rule:** Map Figma variables/styles to these tokens. Only fall back to an
> arbitrary value (e.g. `bg-[#FBF1DC]`) when no token exists — and prefer adding a
> token if the value recurs. Existing one-off example: `Badge` low-stock uses
> `bg-[#FBF1DC]`.

---

## 2. Component Library

**Location:** `src/components/*.tsx` — one component per file, PascalCase.
**Public API:** every component + its prop types are re-exported from
`src/index.ts` (the package entry). Add new components there.

### Architecture conventions
- Functional components. Use `React.forwardRef` for interactive/form primitives
  that wrap a single DOM element (see `Button`, `FormField`); set `displayName`.
- Props extend the underlying element's HTML attributes and spread `...rest`:
  ```tsx
  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
  }
  ```
- **Variants/sizes as `Record<Variant, string>` lookup maps**, not inline ternaries:
  ```tsx
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-forest text-forest-fg hover:bg-forest-hover",
    secondary: "bg-transparent text-forest border border-line-strong hover:bg-sage-soft",
  };
  ```
- Variant string unions are exported types (`ButtonVariant`, `BadgeTone`,
  `FormFieldState`) and **must mirror the Figma component's variant property values**.
- Always merge an incoming `className` last so consumers can override.
- Composite components compose primitives (e.g. `ProductCard` uses `Icon`,
  `Button`, `Badge`, `Rating`) — reuse, don't reimplement.

### Styling helper — `cn`
Always build class strings with `cn` from `src/lib/cn.ts` (clsx + tailwind-merge):
```tsx
import { cn } from "@/lib/cn";
className={cn(base, variants[variant], sizes[size], className)}
```

No Storybook. The live demo app under `src/app/` (pages + routing) is the usage
reference.

---

## 3. Frameworks & Build

- **UI:** React 18 + TypeScript (strict), JSX runtime `react-jsx`.
- **Routing (demo app):** `react-router-dom` v6.
- **Styling:** Tailwind CSS v3 (`darkMode: "class"`) + PostCSS + Autoprefixer.
  Class conflicts resolved by `tailwind-merge`.
- **Build/dev:** Vite 5 (`@vitejs/plugin-react`). Scripts: `npm run dev`,
  `npm run build`, `npm run preview`, `npm run typecheck`.
- **Path alias:** `@/*` → `src/*` (configured in both `tsconfig.json` and
  `vite.config.ts`). Use `@/...` for imports within `src`.

---

## 4. Assets

- No local asset pipeline. Demo product imagery is loaded from **Unsplash** via a
  helper in `src/app/data.ts`:
  ```ts
  const u = (id: string, w = 900) =>
    `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
  ```
- Components accept image URLs via props (e.g. `ProductCard imageSrc`,
  `HeroBanner`) — never hardcode image paths inside components.
- Image elements use responsive cover styling: `object-cover`, fixed
  aspect ratios (`aspect-[4/3]`), with `alt` text.

---

## 5. Icon System

- **Single source:** `src/components/Icon.tsx`. All icons are inline SVG paths in
  one `PATHS: Record<IconName, React.ReactNode>` map; `IconName` is the exported
  union of valid names.
- Usage: `<Icon name="bag" size={24} strokeWidth={1.7} />`. Icons inherit color
  via `currentColor` (stroke-based; the `FILLED` set switches to fill, e.g. `star`).
- **Naming:** kebab-case, mirroring the Figma `Icon/*` components
  (`chevron-down`, `arrow-right`, `map-pin`, …).
- To add an icon: add the path to `PATHS`, add the name to `IconName`, and add a
  `figma.connect` line in `src/figma/Icon.figma.tsx` for the matching Figma node.

---

## 6. Styling Approach

- **Utility-first Tailwind**, applied directly in JSX via `cn(...)`. No CSS
  Modules / styled-components.
- **Global styles:** only `src/styles/tokens.css` (font import, `@tailwind`
  directives, token variables, base `body` styles). Imported once at the top of
  `src/index.ts`.
- **Theming:** never use raw hex when a semantic token exists — that's what keeps
  Light/Dark working.
- **Responsive:** standard Tailwind breakpoint prefixes (`sm:`, `md:`, `lg:`).
- **State styling:** model interactive states with variant maps + `hover:`,
  `focus-visible:`, `disabled:` utilities and `aria-*` (e.g. `FormField` uses
  `aria-invalid`, `Button` uses `focus-visible:ring`).

---

## 7. Project Structure

```
src/
  index.ts              # Package entry: imports tokens.css, re-exports all components + types
  lib/cn.ts             # cn() class-merge helper
  styles/tokens.css     # Design tokens (CSS vars) + global base styles
  components/*.tsx       # Design system components (one per file, exported via index.ts)
  figma/*.figma.tsx      # Figma Code Connect mappings (one per component)
  app/                   # Demo storefront app (not part of the library API)
    main.tsx, App.tsx    # Bootstrap + routing
    pages/*.tsx          # Home, Product, Cart, Checkout, Confirmation
    cart.tsx, data.ts    # Cart context + mock product data
tailwind.config.ts       # Tokens surfaced as Tailwind theme
figma.config.json        # Code Connect config
```

Note: `src/components/` also contains a few app-specific composites
(`OrderConfirmation`, etc.) alongside library primitives.

---

## 8. Figma Code Connect (MCP integration)

This is the critical bridge for design-to-code. Config: `figma.config.json`.
- Parser: `react`. Includes `src/figma/**/*.figma.tsx` and `src/components/**/*.tsx`.
- `importPaths` rewrites `src/components/*` → `@twigma/ui` in published snippets.
- `documentUrlSubstitutions` maps `<FIGMA_FILE>` to the design file URL.
- Publish: `npm run figma:connect` (dry run: `npm run figma:connect:dry`).

### Mapping pattern (one `*.figma.tsx` per component)
```tsx
import figma from "@figma/code-connect";
import { Button } from "../components/Button";

figma.connect(Button, "https://www.figma.com/design/XCej.../?node-id=3-90", {
  props: {
    size: figma.enum("Size", { Sm: "sm", Md: "md" }),
    variant: figma.enum("Style", { Primary: "primary", Secondary: "secondary" }),
    disabled: figma.enum("State", { Default: false, Hover: false, Disabled: true }),
  },
  example: ({ size, variant, disabled }) => (
    <Button size={size} variant={variant} disabled={disabled}>
      Add to basket
    </Button>
  ),
});
```

### Rules when wiring a Figma node to code
1. Map Figma **variant property values** to the component's prop unions via
   `figma.enum(...)` (keys = Figma values, values = code props). Keep them in sync.
2. Use the real component in `example`, importing from `../components/...`.
3. For icons and other 1-name-per-node sets, use one `figma.connect` line per node
   (see `src/figma/Icon.figma.tsx`).
4. When adding a new component: create `src/components/X.tsx`, export it from
   `src/index.ts`, then create `src/figma/X.figma.tsx`.

---

## Quick Do / Don't
- ✅ Reuse existing components + Tailwind tokens; compose primitives.
- ✅ Use `cn()` and `Record<Variant, string>` maps; export prop-type unions.
- ✅ Keep variant unions aligned with Figma component properties + Code Connect.
- ❌ Don't hardcode hex colors, font names, px radii/shadows when a token exists.
- ❌ Don't add CSS files or alternative styling systems.
- ❌ Don't add a component without exporting it from `src/index.ts` and adding its
  `*.figma.tsx` mapping.
