import * as React from "react";
import { cn } from "@/lib/cn";
import { FeatureItem } from "./FeatureItem";
import type { IconName } from "./Icon";

export interface NextStep {
  icon: IconName;
  title: string;
  description: string;
}

export interface NextStepsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  steps?: NextStep[];
}

const DEFAULT_STEPS: NextStep[] = [
  { icon: "mail", title: "Confirmation email sent", description: "Check you@example.com for your receipt and details." },
  { icon: "gift", title: "Packed with care", description: "Plastic-free, fully recyclable packaging." },
  { icon: "truck", title: "Arriving Thu 26 Jun", description: "Carbon-neutral delivery, 2–4 working days." },
];

export function NextStepsCard({
  title = "What happens next",
  steps = DEFAULT_STEPS,
  className,
  ...rest
}: NextStepsCardProps) {
  return (
    <div
      className={cn("flex flex-col gap-[18px] rounded-lg border border-line bg-surface p-8", className)}
      {...rest}
    >
      <h3 className="font-heading text-xl font-medium text-ink">{title}</h3>
      {steps.map((step) => (
        <FeatureItem key={step.title} icon={step.icon} title={step.title} description={step.description} />
      ))}
    </div>
  );
}
