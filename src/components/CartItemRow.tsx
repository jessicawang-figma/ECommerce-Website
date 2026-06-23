import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import { QuantityStepper } from "./QuantityStepper";

export interface CartItemRowProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  variant?: string;
  price: string;
  imageSrc?: string;
  quantity?: number;
  onQuantityChange?: (value: number) => void;
  onRemove?: () => void;
}

export function CartItemRow({
  title,
  variant,
  price,
  imageSrc,
  quantity = 1,
  onQuantityChange,
  onRemove,
  className,
  ...rest
}: CartItemRowProps) {
  return (
    <div className={cn("flex items-center gap-4 border-b border-line py-5 last:border-b-0", className)} {...rest}>
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md bg-surface-muted">
        {imageSrc && <img src={imageSrc} alt={title} className="h-full w-full object-cover" />}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <h4 className="font-heading text-base font-medium text-ink">{title}</h4>
        {variant && <p className="text-sm text-muted">{variant}</p>}
        <button
          type="button"
          onClick={onRemove}
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm text-faint hover:text-error"
        >
          <Icon name="trash" size={15} /> Remove
        </button>
      </div>
      <QuantityStepper value={quantity} onValueChange={onQuantityChange} />
      <span className="w-20 text-right font-heading text-base font-semibold text-ink">{price}</span>
    </div>
  );
}
