import * as React from "react";
import { cn } from "@/lib/cn";

/** Names available in the Twigma icon set (mirrors the Figma `Icon/*` components). */
export type IconName =
  | "search"
  | "heart"
  | "user"
  | "bag"
  | "star"
  | "leaf"
  | "truck"
  | "shield"
  | "chevron-down"
  | "arrow-right"
  | "plus"
  | "minus"
  | "close"
  | "check"
  | "filter"
  | "sort"
  | "menu"
  | "trash"
  | "tag"
  | "gift"
  | "lock"
  | "mail"
  | "map-pin"
  | "instagram";

const PATHS: Record<IconName, React.ReactNode> = {
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-4-4" /></>,
  heart: <path d="M12 20s-7-4.6-7-9.2A3.8 3.8 0 0 1 12 8a3.8 3.8 0 0 1 7-1.2C19 11.4 12 20 12 20z" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M5 21c0-3.9 3.1-6 7-6s7 2.1 7 6" /></>,
  bag: <><path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8a3 3 0 0 1 6 0" /></>,
  star: <path d="M12 3l2.7 5.6 6.1.8-4.5 4.2 1.2 6L12 17l-5.5 2.8 1.2-6L3.2 9.4l6.1-.8z" />,
  leaf: <><path d="M4 20c8 2 16-4 16-14C12 6 6 10 4 20z" /><path d="M4 20C6 14 10 11 14 10" /></>,
  truck: <><path d="M3 7h11v8H3z" /><path d="M14 10h4l3 3v2h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></>,
  shield: <><path d="M12 3l7 3v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  "chevron-down": <path d="M6 9l6 6 6-6" />,
  "arrow-right": <><path d="M4 12h15" /><path d="M13 6l6 6-6 6" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  check: <path d="M5 12l5 5L19 7" />,
  filter: <path d="M3 6h18M6 12h12M10 18h4" />,
  sort: <><path d="M7 4v16M7 4L4 7M7 4l3 3" /><path d="M17 20V4M17 20l3-3M17 20l-3-3" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  trash: <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13" />,
  tag: <><path d="M3 12l9-9 9 9-9 9z" /><circle cx="9" cy="9" r="1.3" /></>,
  gift: <><path d="M4 11h16v9H4z" /><path d="M4 8h16v3H4z" /><path d="M12 8v12" /><path d="M12 8C9 8 8 4 10 4s2 4 2 4 0-4 2-4 1 4-2 4z" /></>,
  lock: <><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></>,
  "map-pin": <><path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  instagram: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><circle cx="17" cy="7" r="1" /></>,
};

const FILLED = new Set<IconName>(["star"]);

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  strokeWidth?: number;
}

export function Icon({ name, size = 24, strokeWidth = 1.7, className, ...rest }: IconProps) {
  const filled = FILLED.has(name);
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("inline-block shrink-0", className)}
      {...rest}
    >
      {PATHS[name]}
    </svg>
  );
}
