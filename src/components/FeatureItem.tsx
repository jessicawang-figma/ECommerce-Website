import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

export interface FeatureItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: IconName;
  title: string;
  description?: string;
}

export function FeatureItem({
  icon = "truck",
  title,
  description,
  className,
  ...rest
}: FeatureItemProps) {
  return (
    <div className={cn("flex items-center gap-3", className)} {...rest}>
      <span className="grid h-10 w-10 place-items-center rounded-pill bg-sage-soft text-forest">
        <Icon name={icon} size={20} />
      </span>
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-semibold text-ink">{title}</p>
        {description && <p className="text-xs text-muted">{description}</p>}
      </div>
    </div>
  );
}
