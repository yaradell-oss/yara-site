import Link from "next/link";
import { Signature } from "./Primitives";

/* ============================================================
   Footer — narrow, centered. Cormorant italic signature line.
   ============================================================ */

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "96px 32px 64px",
        textAlign: "center",
        background: "var(--cream)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/peonies/divider-sprig.svg"
        style={{ width: 180, opacity: 0.75 }}
        alt=""
        aria-hidden
      />

      <div
        style={{
          marginTop: 32,
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 28,
          color: "var(--ink)",
        }}
      >
        до новой весны —
      </div>

      <div style={{ marginTop: 8 }}>
        <Signature size={56} />
      </div>

      <div
        style={{
          marginTop: 40,
          display: "inline-flex",
          gap: 32,
          fontFamily: "var(--font-label)",
          fontWeight: 500,
          fontSize: 11,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
        }}
      >
        <a href="https://t.me/" style={{ color: "inherit" }}>
          Telegram
        </a>
        <a href="https://instagram.com/" style={{ color: "inherit" }}>
          Instagram
        </a>
        <Link href="/contact" style={{ color: "inherit" }}>
          Письмо
        </Link>
      </div>

      <div
        style={{
          marginTop: 48,
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontSize: 14,
          color: "var(--ink-muted)",
        }}
      >
        © Яра Делл, Дубай · {year}
      </div>
    </footer>
  );
}
