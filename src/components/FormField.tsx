import * as React from "react";
import { cn } from "@/lib/cn";

export type FormFieldState = "default" | "focus" | "error";

export interface FormFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
  /** Drives border styling; `error` also renders `errorMessage`. */
  state?: FormFieldState;
  errorMessage?: string;
  id?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, state = "default", errorMessage, id, className, ...rest }, ref) => {
    const generatedId = React.useId();
    const fieldId = id ?? generatedId;
    return (
      <div className={cn("flex w-full flex-col gap-2", className)}>
        <label htmlFor={fieldId} className="text-[13px] font-semibold text-[#43403A]">
          {label}
        </label>
        <input
          ref={ref}
          id={fieldId}
          aria-invalid={state === "error"}
          className={cn(
            "h-[52px] rounded-md border bg-surface px-4 text-[15px] text-ink placeholder:text-faint focus:outline-none",
            state === "error"
              ? "border-error border-2"
              : state === "focus"
                ? "border-forest border-2"
                : "border-line focus:border-forest focus:border-2",
          )}
          {...rest}
        />
        {state === "error" && errorMessage && (
          <p className="text-xs text-error">{errorMessage}</p>
        )}
      </div>
    );
  },
);
FormField.displayName = "FormField";
