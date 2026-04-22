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
        background: "var(--band-rose)",
        padding: "120px 32px",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Kicker color="var(--rose)">{kicker}</Kicker>
        <blockquote
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(2rem, 4.2vw, 3.4rem)",
            lineHeight: 1.25,
            color: "var(--ink)",
            margin: "24px 0 32px",
          }}
        >
          «{quote}»
        </blockquote>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 18,
            color: "var(--rose)",
          }}
        >
          — {author}
        </div>
      </div>
    </section>
  );
}
