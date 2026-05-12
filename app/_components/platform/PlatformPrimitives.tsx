import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { Kicker, Pill } from "../Primitives";

export function PlatformHeader({
  kicker,
  title,
  italic,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  italic?: string;
  lead: string;
  children?: ReactNode;
}) {
  const parts = italic ? title.split(italic) : [title];

  return (
    <header style={{ padding: "120px 32px 72px", position: "relative" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Kicker color="var(--rose)">{kicker}</Kicker>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(3rem, 5vw, 5.4rem)",
            lineHeight: 1.03,
            color: "var(--ink)",
            margin: "18px 0 26px",
            maxWidth: "13ch",
          }}
        >
          {italic ? (
            <>
              {parts[0]}
              <em style={{ color: "var(--rose)", fontWeight: 500 }}>{italic}</em>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 20,
            lineHeight: 1.55,
            color: "var(--ink)",
            maxWidth: "58ch",
            margin: 0,
          }}
        >
          {lead}
        </p>
        {children ? <div style={{ marginTop: 36 }}>{children}</div> : null}
      </div>
    </header>
  );
}

export function PlatformBand({
  children,
  tone = "cream",
  style,
}: {
  children: ReactNode;
  tone?: "cream" | "rose" | "sage" | "lavender";
  style?: CSSProperties;
}) {
  const backgrounds = {
    cream: "var(--cream)",
    rose: "var(--rose-wash)",
    sage: "var(--sage-wash)",
    lavender: "var(--lavender-wash)",
  };

  return (
    <section
      style={{
        background: backgrounds[tone],
        padding: "64px 32px",
        ...style,
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

export function SectionIntro({
  kicker,
  title,
  lead,
  align = "left",
}: {
  kicker: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      style={{
        maxWidth: align === "center" ? 760 : 860,
        margin: align === "center" ? "0 auto 36px" : "0 0 36px",
        textAlign: align,
      }}
    >
      <Kicker color="var(--rose)">{kicker}</Kicker>
      <h2
        style={{
          fontFamily: "var(--font-serif)",
          fontWeight: 400,
          fontSize: "clamp(2.25rem, 4vw, 3.8rem)",
          lineHeight: 1.08,
          color: "var(--ink)",
          margin: "18px 0 0",
        }}
      >
        {title}
      </h2>
      {lead ? (
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 19,
            lineHeight: 1.58,
            color: "var(--ink-soft)",
            margin: "22px 0 0",
          }}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function EditorialPanel({
  children,
  tone = "cream",
  style,
}: {
  children: ReactNode;
  tone?: "cream" | "rose" | "sage" | "lavender";
  style?: CSSProperties;
}) {
  const backgrounds = {
    cream: "transparent",
    rose: "color-mix(in oklch, var(--rose-wash), transparent 34%)",
    sage: "color-mix(in oklch, var(--sage-wash), transparent 30%)",
    lavender: "color-mix(in oklch, var(--lavender-wash), transparent 30%)",
  };
  return (
    <div
      style={{
        background: backgrounds[tone],
        borderTop: "1px solid rgba(93,64,48,0.18)",
        borderBottom: tone === "cream" ? "1px solid rgba(93,64,48,0.08)" : "none",
        borderRadius: 0,
        padding: "28px 0 30px",
        boxShadow: "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function InlineMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(93,64,48,0.16)",
        paddingTop: 16,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-label)",
          fontSize: 10.5,
          fontWeight: 500,
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 22,
          color: "var(--ink)",
          marginTop: 7,
        }}
      >
        {value}
      </div>
    </div>
  );
}

export function PlatformGrid({
  children,
  min = 280,
}: {
  children: ReactNode;
  min?: number;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(${min}px, 1fr))`,
        gap: 24,
      }}
    >
      {children}
    </div>
  );
}

export function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <Kicker style={{ fontSize: 10, letterSpacing: "0.28em" }}>{label}</Kicker>
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 20,
          color: "var(--ink)",
          marginTop: 6,
        }}
      >
        {value}
      </div>
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 18,
        color: "var(--rose)",
        borderBottom: "1px solid color-mix(in oklch, var(--rose), transparent 54%)",
      }}
    >
      {children}
    </Link>
  );
}

export function SoftTag({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: 34,
        padding: "6px 13px",
        borderRadius: 3,
        background: "rgba(250,248,245,0.72)",
        border: "1px solid rgba(93,64,48,0.14)",
        color: "var(--ink)",
        fontFamily: "var(--font-label)",
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

export function CheckoutButton({ label = "Открыть доступ" }: { label?: string }) {
  return (
    <form action="/api/stripe/checkout" method="POST">
      <input type="hidden" name="programSlug" value="blooming-garden-v2" />
      <Pill as="button" type="submit" variant="primary">
        {label}
      </Pill>
    </form>
  );
}
