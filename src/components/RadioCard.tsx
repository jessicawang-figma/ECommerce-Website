import * as React from "react";
import { cn } from "@/lib/cn";

export interface RadioCardProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, "title"> {
  title: string;
  description?: string;
  selected?: boolean;
}

export function RadioCard({ title, description, selected = false, className, ...rest }: RadioCardProps) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      className={cn(
        "flex w-full items-center gap-3.5 rounded-lg border px-5 py-[18px] text-left transition-colors",
        selected ? "border-2 border-forest bg-sage-soft" : "border border-line bg-surface hover:border-forest/50",
        className,
      )}
      {...rest}
    >
      <span
        className={cn(
          "grid h-[22px] w-[22px] shrink-0 place-items-center rounded-pill border-2",
          selected ? "border-forest" : "border-[#C2B6A3]",
        )}
      >
        {selected && <span className="h-2.5 w-2.5 rounded-pill bg-forest" />}
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[15px] font-semibold text-ink">{title}</span>
        {description && <span className="text-[13px] text-muted">{description}</span>}
      </span>
    </button>
  );
}
