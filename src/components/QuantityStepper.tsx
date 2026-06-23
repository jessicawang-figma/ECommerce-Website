import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface QuantityStepperProps {
  value?: number;
  min?: number;
  max?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  className?: string;
}

export function QuantityStepper({
  value,
  min = 1,
  max = 99,
  defaultValue = 1,
  onValueChange,
  className,
}: QuantityStepperProps) {
  const [internal, setInternal] = React.useState(defaultValue);
  const current = value ?? internal;

  const set = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    setInternal(clamped);
    onValueChange?.(clamped);
  };

  return (
    <div className={cn("inline-flex items-center rounded-md border border-line bg-surface", className)}>
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => set(current - 1)}
        disabled={current <= min}
        className="grid h-11 w-11 place-items-center text-ink disabled:opacity-40"
      >
        <Icon name="minus" size={18} />
      </button>
      <span className="min-w-10 text-center text-[15px] font-medium tabular-nums text-ink">{current}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => set(current + 1)}
        disabled={current >= max}
        className="grid h-11 w-11 place-items-center text-ink disabled:opacity-40"
      >
        <Icon name="plus" size={18} />
      </button>
    </div>
  );
}
