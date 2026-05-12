import { Kicker } from "./Primitives";

/* ============================================================
   QuoteStrip — emotional band on rose wash.
   ============================================================ */

export default function QuoteStrip({
  quote,
  author,
  kicker = "Из писем",
}: {
  quote: string;
  author: string;
  kicker?: string;
}) {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, var(--rose-wash), var(--porcelain))",
        padding: "40px 32px 34px",
        textAlign: "left",
        borderTop: "1px solid rgba(93,64,48,0.12)",
        borderBottom: "1px solid rgba(93,64,48,0.12)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Kicker color="var(--rose)">{kicker}</Kicker>
        <blockquote
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(1.75rem, 3vw, 2.65rem)",
            lineHeight: 1.22,
            color: "var(--ink)",
            margin: "18px 0 20px",
          }}
        >
          «{quote}»
        </blockquote>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 18,
            color: "var(--sage-deep)",
          }}
        >
          — {author}
        </div>
      </div>
    </section>
  );
}
