import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  /** Uncontrolled initial open state. */
  defaultOpen?: boolean;
  /** Controlled open state. */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Accordion({
  title,
  defaultOpen = false,
  open,
  onOpenChange,
  className,
  children,
  ...rest
}: AccordionProps) {
  const [internal, setInternal] = React.useState(defaultOpen);
  const isOpen = open ?? internal;

  const toggle = () => {
    const next = !isOpen;
    setInternal(next);
    onOpenChange?.(next);
  };

  return (
    <div className={cn("rounded-lg border border-line bg-surface px-6 py-5", className)} {...rest}>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <span className="font-heading text-base font-semibold text-ink">{title}</span>
        <Icon name="chevron-down" size={18} className={cn("text-forest transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && <div className="mt-3.5 text-sm leading-relaxed text-muted">{children}</div>}
    </div>
  );
}
