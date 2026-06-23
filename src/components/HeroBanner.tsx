import * as React from "react";
import { cn } from "@/lib/cn";
import { Button } from "./Button";

export interface HeroBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  imageSrc: string;
  onCtaClick?: () => void;
}

export function HeroBanner({
  eyebrow = "New season",
  title,
  subtitle,
  ctaLabel = "Shop the collection",
  imageSrc,
  onCtaClick,
  className,
  ...rest
}: HeroBannerProps) {
  return (
    <section
      className={cn("relative isolate overflow-hidden rounded-2xl", className)}
      {...rest}
    >
      <img src={imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      <div className="relative flex max-w-xl flex-col items-start gap-4 px-16 py-28">
        {eyebrow && (
          <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-surface/90">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-[46px] font-bold leading-[1.08] text-surface">{title}</h2>
        {subtitle && <p className="text-lg text-surface/90">{subtitle}</p>}
        <Button onClick={onCtaClick}>{ctaLabel}</Button>
      </div>
    </section>
  );
}
