import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface CheckoutStepsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 1-based index of the active step. */
  active?: number;
  steps?: [string, string, string];
}

export function CheckoutSteps({
  active = 1,
  steps = ["Information", "Shipping", "Payment"],
  className,
  ...rest
}: CheckoutStepsProps) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...rest}>
      {steps.map((label, i) => {
        const index = i + 1;
        const state: "done" | "active" | "todo" =
          index < active ? "done" : index === active ? "active" : "todo";
        return (
          <React.Fragment key={label}>
            <div className="flex items-center gap-2.5">
              <span
                className={cn(
                  "grid h-8 w-8 place-items-center rounded-pill text-sm font-semibold",
                  state === "todo"
                    ? "border-[1.5px] border-line-strong bg-surface text-faint"
                    : "bg-forest text-forest-fg",
                )}
              >
                {state === "done" ? <Icon name="check" size={16} strokeWidth={2.4} /> : index}
              </span>
              <span
                className={cn(
                  "text-[15px]",
                  state === "active" ? "font-semibold text-ink" : state === "done" ? "text-[#43403A]" : "text-faint",
                )}
              >
                {label}
              </span>
            </div>
            {index < steps.length && <span className="h-0.5 flex-1 rounded-pill bg-line" />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
