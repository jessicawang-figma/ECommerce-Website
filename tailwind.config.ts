import type { Config } from "tailwindcss";

/**
 * Twigma design tokens, surfaced as Tailwind theme values.
 * Colour values are driven by CSS variables (see src/styles/tokens.css)
 * so the same classes adapt across the Light and Dark themes.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        canvas: "var(--tw-canvas)",
        surface: "var(--tw-surface)",
        "surface-muted": "var(--tw-surface-muted)",
        ink: "var(--tw-ink)",
        muted: "var(--tw-muted)",
        faint: "var(--tw-faint)",
        inverse: "var(--tw-inverse)",
        line: "var(--tw-line)",
        "line-strong": "var(--tw-line-strong)",
        forest: {
          DEFAULT: "var(--tw-forest)",
          hover: "var(--tw-forest-hover)",
          fg: "var(--tw-forest-fg)",
        },
        sage: "var(--tw-sage)",
        "sage-soft": "var(--tw-sage-soft)",
        clay: {
          DEFAULT: "var(--tw-clay)",
          hover: "var(--tw-clay-hover)",
        },
        success: "var(--tw-success)",
        warning: "var(--tw-warning)",
        error: "var(--tw-error)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Poppins", "Inter", "sans-serif"],
        display: ['"Playfair Display"', "Georgia", "serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        pill: "999px",
      },
      boxShadow: {
        "elev-sm": "0 1px 2px rgba(27,25,21,0.06), 0 1px 3px rgba(27,25,21,0.04)",
        "elev-md": "0 6px 16px rgba(27,25,21,0.08), 0 2px 6px rgba(27,25,21,0.05)",
        "elev-lg": "0 16px 44px rgba(27,25,21,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
