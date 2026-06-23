import * as React from "react";
import { cn } from "@/lib/cn";

export interface OrderNumberPillProps extends React.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  orderNumber: string;
}

export function OrderNumberPill({
  label = "Order number",
  orderNumber,
  className,
  ...rest
}: OrderNumberPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-pill bg-sage-soft px-[18px] py-2.5 text-sm font-semibold text-forest",
        className,
      )}
      {...rest}
    >
      {label} · {orderNumber}
    </span>
  );
}
