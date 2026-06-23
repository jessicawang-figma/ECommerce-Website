import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import { Button } from "./Button";

export interface FooterColumn {
  heading: string;
  links: string[];
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  brand?: string;
  columns?: FooterColumn[];
}

const DEFAULT_COLUMNS: FooterColumn[] = [
  { heading: "Shop", links: ["All plants", "Low-light plants", "Pet-friendly", "Pots & planters", "Gift cards"] },
  { heading: "Care", links: ["Plant care hub", "Watering guide", "Repotting", "Troubleshooting"] },
  { heading: "Company", links: ["Our nurseries", "Sustainability", "Careers", "Press"] },
  { heading: "Help", links: ["Delivery & returns", "Track order", "Contact us", "FAQs"] },
];

export function Footer({ brand = "twigma", columns = DEFAULT_COLUMNS, className, ...rest }: FooterProps) {
  return (
    <footer className={cn("bg-forest text-forest-fg", className)} {...rest}>
      <div className="mx-auto max-w-[1320px] px-8 py-14">
        <div className="flex flex-col gap-10 border-b border-white/15 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h3 className="font-display text-2xl">Grow your inbox</h3>
            <p className="mt-2 text-sm text-white/75">
              Care tips, new arrivals and member-only offers — one calm email a week.
            </p>
          </div>
          <form className="flex w-full max-w-md gap-3">
            <input
              type="email"
              placeholder="you@email.com"
              className="h-12 flex-1 rounded-pill border border-white/25 bg-white/10 px-5 text-sm text-white placeholder:text-white/60 focus:outline-none"
            />
            <Button variant="secondary" className="border-white/40 text-white hover:bg-white/10">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Icon name="leaf" size={24} />
              <span className="font-heading text-xl font-semibold">{brand}</span>
            </div>
            <p className="mt-3 text-sm text-white/70">Thoughtfully grown plants, delivered with care.</p>
            <div className="mt-4 flex gap-3">
              <Icon name="instagram" size={20} className="text-white/80" />
              <Icon name="mail" size={20} className="text-white/80" />
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-sm font-semibold">{col.heading}</h4>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/70 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Twigma. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
