import * as React from "react";
import { cn } from "@/lib/cn";

export interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function FilterChip({ active = false, className, children, ...rest }: FilterChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "rounded-pill border px-[18px] py-[11px] text-sm font-medium transition-colors",
        active
          ? "border-forest bg-forest text-forest-fg"
          : "border-line-strong bg-surface text-[#43403A] hover:bg-sage-soft",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
