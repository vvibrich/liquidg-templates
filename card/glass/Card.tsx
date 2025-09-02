import * as React from "react";
import clsx from "clsx";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Cor de “tinta” para o glow inferior-direito (segue o fundo). */
  tintClassName?: string; // ex: "from-purple-400/40"
  elevated?: boolean;
  radius?: number; // em px (opcional)
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      tintClassName = "from-white/5",
      elevated = true,
      radius = 28,
      ...props
    },
    ref
  ) => {
    // rounded-[Npx] dinâmico
    const rounded = `rounded-[${radius}px]`;

    return (
      <div
        ref={ref}
        className={clsx(
          "relative p-[1px]",
          rounded,
          // Borda polida com leve gradiente vertical
          "bg-[linear-gradient(180deg,rgba(255,255,255,0.70)_0%,rgba(255,255,255,0.28)_45%,rgba(255,255,255,0.10)_100%)]",
          // Sombra externa suave
          elevated
            ? "shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
            : "shadow-[0_10px_30px_rgba(0,0,0,0.20)]",
          className
        )}
        {...props}
      >
        {/* Camada de vidro */}
        <div
          className={clsx(
            "relative overflow-hidden",
            rounded,
            "bg-white/10 backdrop-blur-3xl",
            // Borda fina interna para “espessura”
            "ring-1 ring-inset ring-white/15"
          )}
        >
          {/* Specular highlight (top-left) */}
          <span
            aria-hidden
            className={clsx(
              "pointer-events-none absolute -top-10 -left-10",
              "w-48 h-48 rounded-full",
              "bg-white/50 blur-3xl opacity-70"
            )}
          />

          {/* Vignette/espessura interna */}
          <span
            aria-hidden
            className={clsx(
              "pointer-events-none absolute inset-0",
              rounded,
              "bg-[radial-gradient(120%_140%_at_50%_30%,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.06)_40%,rgba(0,0,0,0.35)_100%)] opacity-90"
            )}
          />

          {/* Glow inferior-direito que acompanha o fundo */}
          <span
            aria-hidden
            className={clsx(
              "pointer-events-none absolute -bottom-12 -right-12 w-56 h-56 blur-3xl",
              "bg-gradient-to-br to-transparent",
              tintClassName
            )}
          />

          {/* Conteúdo */}
          <div className="relative z-[1]">{children}</div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
