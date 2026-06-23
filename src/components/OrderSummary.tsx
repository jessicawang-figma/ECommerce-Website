import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import { Button } from "./Button";

export interface SummaryLine {
  label: string;
  value: string;
}

export interface OrderSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  lines: SummaryLine[];
  total: string;
  ctaLabel?: string;
  onCheckout?: () => void;
}

export function OrderSummary({
  lines,
  total,
  ctaLabel = "Proceed to checkout",
  onCheckout,
  className,
  ...rest
}: OrderSummaryProps) {
  return (
    <div className={cn("rounded-lg border border-line bg-surface p-6 shadow-elev-sm", className)} {...rest}>
      <h3 className="font-heading text-lg font-semibold text-ink">Order summary</h3>
      <dl className="mt-4 space-y-3">
        {lines.map((line) => (
          <div key={line.label} className="flex items-center justify-between text-sm">
            <dt className="text-muted">{line.label}</dt>
            <dd className="font-medium text-ink">{line.value}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
        <span className="font-heading text-base font-semibold text-ink">Total</span>
        <span className="font-heading text-xl font-semibold text-ink">{total}</span>
      </div>
      <Button className="mt-5 w-full" onClick={onCheckout}>
        {ctaLabel}
      </Button>
      <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-faint">
        <Icon name="lock" size={14} /> Secure 256-bit SSL checkout
      </p>
    </div>
  );
}
