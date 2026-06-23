import * as React from "react";
import { cn } from "@/lib/cn";

export interface SizeOptionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export function SizeOption({ selected = false, className, children, ...rest }: SizeOptionProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={cn(
        "rounded-md px-[22px] py-[14px] text-[15px] font-medium transition-colors",
        selected
          ? "border-2 border-forest bg-sage-soft text-forest"
          : "border border-line-strong bg-surface text-[#43403A] hover:border-forest/60",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
