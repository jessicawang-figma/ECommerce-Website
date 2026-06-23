import * as React from "react";
import { cn } from "@/lib/cn";

export type BadgeTone = "in-stock" | "low-stock" | "sold-out";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

const tones: Record<BadgeTone, string> = {
  "in-stock": "bg-sage-soft text-forest",
  "low-stock": "bg-[#FBF1DC] text-warning",
  "sold-out": "bg-surface-muted text-faint",
};

const labels: Record<BadgeTone, string> = {
  "in-stock": "In stock",
  "low-stock": "Low stock",
  "sold-out": "Sold out",
};

export function Badge({ tone = "in-stock", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-3 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children ?? labels[tone]}
    </span>
  );
}
