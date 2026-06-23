import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { Badge, type BadgeTone } from "./Badge";
import { Rating } from "./Rating";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  category: string;
  price: string;
  imageSrc?: string;
  rating?: number;
  reviewCount?: number;
  badge?: { label: string; tone?: BadgeTone };
  onAddToBasket?: () => void;
}

export function ProductCard({
  title,
  category,
  price,
  imageSrc,
  rating,
  reviewCount,
  badge,
  onAddToBasket,
  className,
  ...rest
}: ProductCardProps) {
  return (
    <div
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-elev-sm transition-shadow hover:shadow-elev-md",
        className,
      )}
      {...rest}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        )}
        {badge && (
          <Badge tone={badge.tone ?? "in-stock"} className="absolute left-3 top-3 shadow-elev-sm">
            {badge.label}
          </Badge>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-pill bg-surface/90 text-ink shadow-elev-sm hover:text-clay"
        >
          <Icon name="heart" size={18} />
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-faint">{category}</span>
        <h3 className="font-heading text-lg font-medium text-ink">{title}</h3>
        {typeof rating === "number" && <Rating value={rating} count={reviewCount} showScore={false} />}
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-heading text-lg font-semibold text-ink">{price}</span>
          <Button size="sm" onClick={onAddToBasket}>
            Add to basket
          </Button>
        </div>
      </div>
    </div>
  );
}
