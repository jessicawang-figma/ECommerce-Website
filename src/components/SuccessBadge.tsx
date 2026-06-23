import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

export interface SuccessBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  size?: number;
}

export function SuccessBadge({ icon = "check", size = 72, className, ...rest }: SuccessBadgeProps) {
  return (
    <div
      className={cn("grid place-items-center rounded-pill bg-forest text-forest-fg", className)}
      style={{ width: size, height: size }}
      {...rest}
    >
      <Icon name={icon} size={Math.round(size * 0.47)} />
    </div>
  );
}
