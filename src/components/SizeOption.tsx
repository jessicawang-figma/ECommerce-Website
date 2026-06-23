import * as React from "react";
import { cn } from "@/lib/cn";

export interface SizeOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  label: string;
  price?: string;
}

export function SizeOption({ selected = false, label, price, className, ...rest }: SizeOptionProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "flex flex-col items-start gap-0.5 rounded-md px-4 py-3 text-left transition-colors",
        selected
          ? "border-2 border-forest bg-sage-soft"
          : "border border-line-strong bg-surface hover:border-forest/60",
        className,
      )}
      {...rest}
    >
      <span className="text-[15px] font-semibold text-ink">{label}</span>
      {price && <span className={cn("text-[13px]", selected ? "text-forest" : "text-muted")}>{price}</span>}
    </button>
  );
}
