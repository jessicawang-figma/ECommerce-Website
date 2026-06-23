import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

export interface TrustItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface TrustBarProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: TrustItem[];
}

const DEFAULT_ITEMS: TrustItem[] = [
  { icon: "truck", title: "Free delivery over £40", description: "Carbon-neutral, plastic-free shipping" },
  { icon: "shield", title: "90-day happy-roots guarantee", description: "Free replacement if it struggles" },
  { icon: "leaf", title: "Grown sustainably", description: "Solar-powered, peat-free nurseries" },
];

export function TrustBar({ items = DEFAULT_ITEMS, className, ...rest }: TrustBarProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-6 rounded-lg bg-sage-soft px-8 py-6",
        className,
      )}
      {...rest}
    >
      {items.map((item) => (
        <div key={item.title} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-pill bg-surface text-forest">
            <Icon name={item.icon} size={20} />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{item.title}</p>
            <p className="text-xs text-muted">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
