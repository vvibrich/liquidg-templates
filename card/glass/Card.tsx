import * as React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Controla a intensidade da sombra (vidro mais "flutuante").
   * @default false
   */
  elevated?: boolean;
}

/**
 * Card estilo Liquid Glass
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, elevated = false, ...props }, ref) => {
    const base =
      "relative flex flex-col items-center justify-center " +
      "rounded-[2rem] border border-white/20 " +
      "bg-white/10 backdrop-blur-2xl " + // fundo translúcido com blur mais forte
      "text-white/90 transition-shadow duration-300";

    const elevation = elevated
      ? "shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
      : "shadow-[0_4px_16px_rgba(0,0,0,0.15)]";

    return (
      <div
        ref={ref}
        className={clsx(base, elevation, className)}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";
