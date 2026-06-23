import * as React from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export type InputType = "text" | "search";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** Visual treatment — `search` shows a leading magnifier icon. */
  inputType?: InputType;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputType = "text", className, disabled, ...rest }, ref) => (
    <div
      className={cn(
        "flex h-12 items-center gap-2 rounded-md border bg-surface px-4 transition-colors",
        "border-line focus-within:border-forest focus-within:ring-2 focus-within:ring-forest/15",
        disabled && "opacity-50 pointer-events-none",
        className,
      )}
    >
      {inputType === "search" && <Icon name="search" size={18} className="text-faint" />}
      <input
        ref={ref}
        type={inputType === "search" ? "search" : "text"}
        disabled={disabled}
        className="w-full bg-transparent text-[15px] text-ink placeholder:text-faint focus:outline-none"
        {...rest}
      />
    </div>
  ),
);
Input.displayName = "Input";
