import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export interface NavLink {
  label: string;
  href?: string;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string;
  links?: NavLink[];
  announcement?: string;
  cartCount?: number;
}

const DEFAULT_LINKS: NavLink[] = [
  { label: "Plants" },
  { label: "Pots & planters" },
  { label: "Plant care" },
  { label: "Gifts" },
  { label: "Sale" },
];

export function Header({
  brand = "twigma",
  links = DEFAULT_LINKS,
  announcement = "Free carbon-neutral delivery on orders over £40",
  cartCount = 0,
  className,
  ...rest
}: HeaderProps) {
  return (
    <header className={cn("w-full bg-surface", className)} {...rest}>
      {announcement && (
        <div className="flex items-center justify-center gap-2 bg-forest px-4 py-2.5 text-forest-fg">
          <Icon name="leaf" size={16} />
          <p className="text-[13px] font-medium">{announcement}</p>
        </div>
      )}
      <div className="flex items-center gap-6 border-b border-line px-8 py-4">
        <div className="flex items-center gap-2 text-forest">
          <Icon name="leaf" size={26} />
          <span className="font-heading text-2xl font-semibold text-ink">{brand}</span>
        </div>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href ?? "#"} className="text-[15px] font-medium text-ink hover:text-forest">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <label className="hidden items-center gap-2 rounded-pill border border-line bg-canvas px-4 py-2.5 md:flex">
            <Icon name="search" size={18} className="text-faint" />
            <input
              placeholder="Search plants…"
              className="w-44 bg-transparent text-sm text-ink placeholder:text-faint focus:outline-none"
            />
          </label>
          <button aria-label="Wishlist" className="grid h-11 w-11 place-items-center rounded-pill text-ink hover:bg-surface-muted">
            <Icon name="heart" size={20} />
          </button>
          <button aria-label="Account" className="grid h-11 w-11 place-items-center rounded-pill text-ink hover:bg-surface-muted">
            <Icon name="user" size={20} />
          </button>
          <button aria-label="Basket" className="relative grid h-11 w-11 place-items-center rounded-pill text-ink hover:bg-surface-muted">
            <Icon name="bag" size={20} />
            {cartCount > 0 && (
              <span className="absolute right-1 top-1 grid h-5 min-w-5 place-items-center rounded-pill bg-clay px-1 text-[11px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
