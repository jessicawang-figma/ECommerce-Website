import * as React from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";
export type ButtonSize = "sm" | "md";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base =
  "inline-flex items-center justify-center gap-2 font-heading font-medium rounded-pill transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/40 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-forest text-forest-fg hover:bg-forest-hover",
  secondary: "bg-transparent text-forest border border-line-strong hover:bg-sage-soft",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-4 text-sm",
  md: "h-[42px] px-6 text-[15px]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...rest }, ref) => (
    <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  ),
);
Button.displayName = "Button";
