import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface CheckoutHeaderProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string;
  helpHref?: string;
}

export function CheckoutHeader({ brand = "twigma", helpHref = "#", className, ...rest }: CheckoutHeaderProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between border-b border-line bg-surface px-12 py-5",
        className,
      )}
      {...rest}
    >
      <div className="flex items-center gap-2 text-forest">
        <Icon name="leaf" size={24} />
        <span className="font-heading text-[22px] font-semibold text-ink">{brand}</span>
      </div>
      <div className="flex items-center gap-2 text-muted">
        <Icon name="lock" size={18} />
        <span className="text-sm font-medium">Secure checkout</span>
      </div>
      <a href={helpHref} className="text-sm font-medium text-forest hover:underline">
        Need help?
      </a>
    </header>
  );
}
