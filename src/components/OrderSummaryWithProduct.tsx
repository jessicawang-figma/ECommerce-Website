import * as React from "react";
import { cn } from "@/lib/cn";
import type { SummaryLine } from "./OrderSummary";

export interface OrderSummaryItem {
  title: string;
  variant?: string;
  price: string;
  imageSrc?: string;
}

export interface OrderSummaryWithProductProps extends React.HTMLAttributes<HTMLDivElement> {
  items: OrderSummaryItem[];
  lines: SummaryLine[];
  total: string;
  heading?: string;
}

export function OrderSummaryWithProduct({
  items,
  lines,
  total,
  heading = "Order summary",
  className,
  ...rest
}: OrderSummaryWithProductProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-surface p-6 shadow-elev-lg",
        className,
      )}
      {...rest}
    >
      <h3 className="font-heading text-lg font-medium text-ink">{heading}</h3>

      <ul className="mt-5 space-y-5">
        {items.map((item, i) => (
          <li key={`${item.title}-${i}`} className="flex items-center gap-4">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md bg-surface-muted">
              {item.imageSrc && (
                <img src={item.imageSrc} alt={item.title} className="h-full w-full object-cover" />
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1">
              <p className="text-[15px] font-semibold text-ink">{item.title}</p>
              {item.variant && <p className="text-[13px] text-faint">{item.variant}</p>}
            </div>
            <span className="font-heading text-[15px] font-semibold text-ink">{item.price}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-line pt-5">
        <dl className="space-y-3">
          {lines.map((line) => (
            <div key={line.label} className="flex items-center justify-between text-sm">
              <dt className="text-muted">{line.label}</dt>
              <dd className="text-ink">{line.value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-heading text-base font-semibold text-ink">Total</span>
          <span className="font-heading text-lg font-semibold text-ink">{total}</span>
        </div>
      </div>
    </div>
  );
}
