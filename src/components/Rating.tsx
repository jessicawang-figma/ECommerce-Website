import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  /** Optional review count shown after the score. */
  count?: number;
  showScore?: boolean;
}

export function Rating({ value, max = 5, count, showScore = true, className, ...rest }: RatingProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} {...rest}>
      <div className="flex items-center gap-0.5 text-clay">
        {Array.from({ length: max }).map((_, i) => (
          <Icon
            key={i}
            name="star"
            size={15}
            className={i < Math.round(value) ? "text-clay" : "text-line-strong"}
          />
        ))}
      </div>
      {showScore && <span className="text-sm font-medium text-ink">{value.toFixed(1)}</span>}
      {typeof count === "number" && <span className="text-sm text-faint">· {count} reviews</span>}
    </div>
  );
}
