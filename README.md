# Twigma Luxury Plants — UI Library

A React + TypeScript component library implementing the **Twigma Luxury Plants** design system, with [Figma Code Connect](https://www.figma.com/code-connect-docs/) mappings so every component shows real code in Figma Dev Mode.

- **Styling:** Tailwind CSS driven by design tokens (`src/styles/tokens.css`) that mirror the Figma `Color`, `Radius`, `Spacing`, and `Elevation` variable collections, with full Light/Dark theming via the `.dark` class.
- **Figma source:** [Twigma Luxury Plants Design System v1](https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1)

## Getting started

```bash
npm install
npm run typecheck
```

Import the styles once at your app root, then use components:

```tsx
import { Button, ProductCard, Header } from "@twigma/ui";

export function App() {
  return (
    <>
      <Header cartCount={2} />
      <ProductCard category="Indoor" title="Monstera Deliciosa" price="£128" rating={4.8} />
      <Button>Add to basket</Button>
    </>
  );
}
```

## Components

| Group | Components |
|---|---|
| Primitives | `Button`, `Badge`, `Input`, `FormField`, `Select`, `FilterChip`, `SizeOption`, `Swatch`, `Rating`, `QuantityStepper`, `Icon` |
| Navigation & disclosure | `Breadcrumb`, `Accordion`, `RadioCard`, `CheckoutSteps`, `Header`, `Footer`, `CheckoutHeader` |
| Commerce | `ProductCard`, `CartItemRow`, `OrderSummary`, `TrustBar` |

## Code Connect

Each component has a `*.figma.tsx` file in `src/figma/` that maps it to its Figma node via `figma.connect()`. Variant properties (e.g. Button `Size`/`Style`/`State`) are mapped to the matching React props with `figma.enum`.

Configuration lives in `figma.config.json` (`parser: "react"`, includes `src/figma/**/*.figma.tsx`).

### Publishing

Code Connect requires the components to be **published to a Figma team library** and an **Organization/Enterprise** plan. Authenticate with a Figma access token, then:

```bash
export FIGMA_ACCESS_TOKEN=your_token
npm run figma:connect:dry   # validate without publishing
npm run figma:connect       # publish mappings to Figma
```

Once published, opening a component instance in Figma Dev Mode shows the corresponding React snippet.

## Project structure

```
src/
  components/      # React components
  figma/           # Code Connect (*.figma.tsx) mappings
  lib/cn.ts        # className merge helper
  styles/tokens.css# design tokens + Tailwind layers
  index.ts         # public barrel export
```
