import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface CheckoutHeaderProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string;
  helpHref?: string;
  announcements?: string[];
}

const DEFAULT_ANNOUNCEMENTS = [
  "Free UK delivery over £40",
  "90-day plant guarantee",
  "Carbon-neutral shipping",
];

export function CheckoutHeader({
  brand = "twigma",
  helpHref = "#",
  announcements = DEFAULT_ANNOUNCEMENTS,
  className,
  ...rest
}: CheckoutHeaderProps) {
  return (
    <header className={cn("w-full bg-surface", className)} {...rest}>
      {announcements.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 bg-forest px-4 py-2.5 text-forest-fg">
          <Icon name="leaf" size={16} />
          {announcements.map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 && <span aria-hidden className="text-forest-fg/50">·</span>}
              <span className="text-[13px] font-medium">{item}</span>
            </React.Fragment>
          ))}
        </div>
      )}
      <div className="flex items-center justify-between border-b border-line px-12 py-5">
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
      </div>
    </header>
  );
}
