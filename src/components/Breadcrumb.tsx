import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface Crumb {
  label: string;
  href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: Crumb[];
}

export function Breadcrumb({ items, className, ...rest }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-2.5 text-sm", className)} {...rest}>
      {items.map((item, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={item.label}>
            {item.href && !last ? (
              <a href={item.href} className="font-medium text-forest hover:underline">
                {item.label}
              </a>
            ) : (
              <span className={cn("font-medium", last ? "text-faint" : "text-forest")}>{item.label}</span>
            )}
            {!last && <Icon name="chevron-down" size={14} className="-rotate-90 text-faint" />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
