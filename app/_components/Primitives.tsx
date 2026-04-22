import type { CSSProperties, ReactNode } from "react";

/* ============================================================
   Primitives — shared, tiny, composable. Server-safe.
   Ported from ui_kits/website/Primitives.jsx.
   ============================================================ */

type KickerColor = string;

export function Kicker({
  children,
  color,
  style,
}: {
  children: ReactNode;
  color?: KickerColor;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        fontFamily: "var(--font-label)",
        fontWeight: 500,
        fontSize: "11px",
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: color || "var(--ink-soft)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export type PillVariant = "primary" | "rose" | "ghost";

export function Pill({
  children,
  variant = "primary",
  as,
  href,
  onClick,
  type,
  style,
}: {
  children: ReactNode;
  variant?: PillVariant;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  style?: CSSProperties;
}) {
  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    fontFamily: "var(--font-serif)",
    fontStyle: "italic",
    fontWeight: 500,
    fontSize: "1rem",
    padding: "13px 26px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    transition:
      "background var(--dur-fast) var(--ease-editorial), color var(--dur-fast) var(--ease-editorial), transform var(--dur-fast) var(--ease-editorial)",
  };
  const variants: Record<PillVariant, CSSProperties> = {
    primary: { background: "var(--lavender)", color: "var(--cream)" },
    rose: { background: "var(--rose)", color: "var(--cream)" },
    ghost: {
      background: "transparent",
      color: "var(--ink)",
      boxShadow: "inset 0 0 0 1px rgba(93,64,48,0.35)",
    },
  };

  const merged: CSSProperties = { ...base, ...variants[variant], ...style };

  if (as === "a" || href) {
    return (
      <a href={href} style={merged} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} style={merged}>
      {children}
    </button>
  );
}

export function Signature({ size = 54 }: { size?: number }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-signature)",
        fontSize: size,
        color: "var(--ink)",
        lineHeight: 1,
      }}
    >
      Y. Dell
    </span>
  );
}

export function DividerSprig({
  width = 240,
  opacity = 0.85,
}: {
  width?: number;
  opacity?: number;
}) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "48px 0" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/peonies/divider-sprig.svg"
        style={{ width, opacity }}
        alt=""
        aria-hidden
      />
    </div>
  );
}

/**
 * Painted soft-wash placeholder. Never a rectangle that says "ФОТО".
 * Degrades gracefully and can be swapped 1:1 with a real <Image>.
 */
export function PlaceholderPhoto({
  aspect = "4 / 5",
  tone = "warm",
  width = "100%",
  children,
  style,
}: {
  aspect?: string;
  tone?: "warm" | "sage" | "lavender" | "rose";
  width?: string | number;
  children?: ReactNode;
  style?: CSSProperties;
}) {
  const tones: Record<string, string> = {
    warm:
      "radial-gradient(120% 80% at 20% 20%, #EFD4BD 0%, #D9A98A 55%, #A17957 100%)",
    sage:
      "radial-gradient(120% 80% at 30% 25%, #CBD5BD 0%, #9CAE8A 55%, #6E8060 100%)",
    lavender:
      "radial-gradient(120% 80% at 25% 30%, #D8CEE0 0%, #B0A0C2 55%, #7B6B8A 100%)",
    rose:
      "radial-gradient(120% 80% at 25% 30%, #EBC8D2 0%, #C48799 55%, #9B5F74 100%)",
  };
  return (
    <div
      style={{
        width,
        aspectRatio: aspect,
        background: tones[tone] || tones.warm,
        borderRadius: 2,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Floating watercolor peony — transparent alpha SVG, three-layer rule.
 * Pointer-events: none so it never intercepts clicks.
 */
export function PeonyFloat({
  src,
  width,
  top,
  left,
  right,
  bottom,
  opacity = 0.8,
  rotate = 0,
  z = 1,
  drift = false,
}: {
  src: string;
  width: number | string;
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
  opacity?: number;
  rotate?: number;
  z?: number;
  drift?: boolean;
}) {
  const style: CSSProperties = {
    position: "absolute",
    width,
    top,
    left,
    right,
    bottom,
    opacity,
    transform: `rotate(${rotate}deg)`,
    zIndex: z,
    filter: `drop-shadow(0 18px 36px rgba(93,64,48,${0.22 * opacity}))`,
    pointerEvents: "none",
    ...(drift ? ({ ["--peony-rot" as string]: `${rotate}deg` } as CSSProperties) : {}),
  };

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden
      className={drift ? "peony-drift" : undefined}
      style={style}
    />
  );
}
