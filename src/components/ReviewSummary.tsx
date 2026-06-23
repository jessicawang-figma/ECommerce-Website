import * as React from "react";
import { cn } from "@/lib/cn";
import { Rating } from "./Rating";

export interface RatingBucket {
  /** Star level, e.g. 5, 4, 3, 2, 1. */
  stars: number;
  /** Percentage of reviews at this level (0–100). */
  percent: number;
}

export interface ReviewSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  score: number;
  count: number;
  distribution?: RatingBucket[];
}

const DEFAULT_DISTRIBUTION: RatingBucket[] = [
  { stars: 5, percent: 82 },
  { stars: 4, percent: 12 },
  { stars: 3, percent: 4 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 1 },
];

export function ReviewSummary({
  score,
  count,
  distribution = DEFAULT_DISTRIBUTION,
  className,
  ...rest
}: ReviewSummaryProps) {
  return (
    <div
      className={cn("flex flex-col gap-5 rounded-2xl border border-line bg-surface p-7", className)}
      {...rest}
    >
      <div className="flex items-center gap-4">
        <span className="font-heading text-[44px] font-semibold leading-none text-ink">
          {score.toFixed(1)}
        </span>
        <div className="flex flex-col gap-1">
          <Rating value={score} showScore={false} />
          <span className="text-[13px] text-faint">Based on {count} reviews</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {distribution.map((bucket) => (
          <div key={bucket.stars} className="flex items-center gap-2.5">
            <span className="w-7 text-xs font-medium text-muted">{bucket.stars}★</span>
            <span className="h-2 flex-1 overflow-hidden rounded-pill bg-surface-muted">
              <span
                className="block h-full rounded-pill bg-forest"
                style={{ width: `${bucket.percent}%` }}
              />
            </span>
            <span className="w-9 text-right text-xs text-faint">{bucket.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
