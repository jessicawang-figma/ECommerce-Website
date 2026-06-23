import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  /** Optional leading label, e.g. "Sort:". */
  label?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export function Select({ label, options, value, defaultValue, onValueChange, className }: SelectProps) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue ?? options[0]?.value);
  const current = value ?? internal;
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const select = (v: string) => {
    setInternal(v);
    onValueChange?.(v);
    setOpen(false);
  };
  const currentLabel = options.find((o) => o.value === current)?.label ?? "";

  return (
    <div ref={ref} className={cn("relative w-[260px]", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center gap-2 rounded-md border bg-surface px-4 py-3 text-left transition-colors",
          open ? "border-forest border-2" : "border-line",
        )}
      >
        {label && <span className="text-sm text-faint">{label}</span>}
        <span className="text-sm font-medium text-ink">{currentLabel}</span>
        <Icon name="chevron-down" size={16} className="ml-auto text-muted" />
      </button>
      {open && (
        <ul className="absolute z-10 mt-2 w-full rounded-md border border-line bg-surface p-2 shadow-elev-md">
          {options.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                onClick={() => select(o.value)}
                className={cn(
                  "w-full rounded-sm px-3 py-2.5 text-left text-sm",
                  o.value === current ? "bg-surface-muted font-medium text-ink" : "text-[#43403A] hover:bg-surface-muted",
                )}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
