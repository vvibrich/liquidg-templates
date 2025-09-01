import * as React from "react";
import clsx from "clsx";

/**
 * Liquid Glass Button
 * - efeito vidro com blur/backdrop
 */
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: "light" | "dark";
  size?: "sm" | "md" | "lg";
};

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ className, tone = "light", size = "md", ...props }, ref) => {
    const base =
      "relative inline-flex select-none items-center justify-center border border-glass-border text-glass-ink " +
      "bg-glass-grad backdrop-blur-xs shadow-glass transition-transform active:translate-y-[1px] " +
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40";

    const sizes = {
      sm: "h-8 px-3 rounded-lg-btn text-[13px]",
      md: "h-10 px-4 rounded-lg-btn text-sm",
      lg: "h-12 px-5 rounded-lg-btn text-base",
    }[size];

    const tones =
      tone === "dark"
        ? "bg-black/20 text-white/90 border-white/20"
        : "bg-white/10 text-white/90 border-white/20";

    return (
      <button
        ref={ref}
        className={clsx(base, sizes, tones, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
