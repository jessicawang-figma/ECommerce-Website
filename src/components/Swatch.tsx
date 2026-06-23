import * as React from "react";
import { cn } from "@/lib/cn";

export interface SwatchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Any CSS colour for the dot. */
  color: string;
  selected?: boolean;
  label?: string;
}

export function Swatch({ color, selected = false, label, className, ...rest }: SwatchProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={label}
      title={label}
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-pill transition-shadow",
        selected ? "border-2 border-forest" : "border-2 border-transparent",
        className,
      )}
      {...rest}
    >
      <span
        className="h-[30px] w-[30px] rounded-pill ring-1 ring-black/10"
        style={{ backgroundColor: color }}
      />
    </button>
  );
}
