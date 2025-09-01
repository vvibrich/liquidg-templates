import * as React from "react";
import clsx from "clsx";

export type CardVariant = "glass" | "frosted";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Variante de estilo do card.
   * @default "glass"
   */
  variant?: CardVariant;

  /**
   * Define se o card terá sombra mais forte.
   * @default false
   */
  elevated?: boolean;
}

/**
 * Card no estilo Liquid Glass
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "glass", elevated = false, ...props }, ref) => {
    const base =
      "relative overflow-hidden rounded-2xl border border-glass-border bg-glass-grad " +
      "backdrop-blur-xs text-glass-ink transition-shadow";

    const variants: Record<CardVariant, string> = {
      glass: "shadow-glass",
      frosted: "bg-white/10 border-white/20 backdrop-blur-md",
    };

    const elevation = elevated ? "shadow-xl" : "";

    return (
      <div
        ref={ref}
        className={clsx(base, variants[variant], elevation, className)}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
