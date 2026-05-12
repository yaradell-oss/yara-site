import Link from "next/link";

/* ============================================================
   Nav — sticky editorial header. Server component.
   ============================================================ */

const ITEMS: ReadonlyArray<[string, string]> = [
  ["/programs", "Программы"],
  ["/pricing", "Доступ"],
  ["/library", "Библиотека"],
  ["/concierge", "Agatha"],
  ["/philosophy", "Философия"],
];

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,253,248,0.9)",
        backdropFilter: "saturate(1) blur(6px)",
        WebkitBackdropFilter: "saturate(1) blur(6px)",
        borderBottom: "1px solid color-mix(in oklch, var(--plum), transparent 86%)",
      }}
    >
      <div
        className="nav-shell"
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
          className="nav-brand"
          href="/"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 34,
            color: "var(--ink)",
            letterSpacing: 0,
            whiteSpace: "nowrap",
          }}
        >
          Яра Делл
        </Link>

        <div
          className="nav-links"
        >
          {ITEMS.map(([href, label]) => (
            <Link
              key={href}
              href={href}
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 500,
                fontSize: 18,
                letterSpacing: 0,
                textTransform: "none",
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

        <Link
          href="/account"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--rose-deep)",
            borderBottom: "1px solid color-mix(in oklch, var(--rose), transparent 45%)",
            paddingBottom: 4,
            whiteSpace: "nowrap",
          }}
        >
          Кабинет
        </Link>
      </div>
    </nav>
  );
}
