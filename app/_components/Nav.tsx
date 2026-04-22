import Link from "next/link";
import { Pill } from "./Primitives";

/* ============================================================
   Nav — sticky editorial header. Server component.
   ============================================================ */

const ITEMS: ReadonlyArray<[string, string]> = [
  ["/programs", "Программы"],
  ["/philosophy", "Философия"],
  ["/journal", "Журнал"],
  ["/contact", "Контакт"],
];

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(250,248,245,0.92)",
        backdropFilter: "saturate(1) blur(6px)",
        WebkitBackdropFilter: "saturate(1) blur(6px)",
        borderBottom: "1px solid rgba(93,64,48,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "18px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 26,
            color: "var(--ink)",
            letterSpacing: "0.01em",
          }}
        >
          Яра Делл
        </Link>

        <div
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
          className="nav-links"
        >
          {ITEMS.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-label)",
                fontWeight: 500,
                fontSize: 11,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--ink)",
                padding: "6px 2px",
                borderBottom: "1px solid transparent",
                transition:
                  "color var(--dur-fast) var(--ease-editorial), border-color var(--dur-fast) var(--ease-editorial)",
              }}
            >
              {label}
            </Link>
          ))}
        </div>

        <Pill as="a" href="/contact" variant="primary">
          Записаться
        </Pill>
      </div>
    </nav>
  );
}
