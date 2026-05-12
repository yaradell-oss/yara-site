import { Pill } from "./Primitives";

const HERO_MARKERS = [
  ["21 день", "три недели: Корни, Ствол, Крона"],
  ["микробиота", "рецепты, ферменты, ритуалы"],
  ["Agatha", "ответы из доступных материалов"],
] as const;

export default function EditorialHero() {
  return (
    <section
      className="editorial-hero"
      style={{
        position: "relative",
        padding: "54px 0 36px",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #FAF8F5 0%, #FFFDF9 48%, #F5ECE8 100%)",
      }}
    >
      <div
        className="commercial-hero-grid"
        style={{
          maxWidth: 1340,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: 48,
          position: "relative",
          zIndex: 3,
          alignItems: "center",
        }}
      >
        <div style={{ display: "grid", alignContent: "center", gap: 28 }}>
          <div
            style={{
              fontFamily: "var(--font-label)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.26em",
              textTransform: "uppercase",
              color: "var(--rose)",
            }}
          >
            Яра Делл · Дубай
          </div>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(4rem, 8vw, 8rem)",
              lineHeight: 0.9,
              color: "var(--ink)",
              margin: 0,
              letterSpacing: 0,
              maxWidth: "8.4ch",
            }}
          >
            Кухня,
            <span
              style={{
                display: "block",
                color: "var(--rose)",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: 0,
              }}
            >
              которая
            </span>
            держит тело
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.25rem, 2vw, 1.7rem)",
              lineHeight: 1.35,
              color: "var(--ink)",
              maxWidth: "34ch",
              margin: 0,
            }}
          >
            Авторские программы Яры Делл о вкусе, микробиоте и ежедневной
            дисциплине без марафонной суеты.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Pill as="a" href="/programs/blooming-garden" variant="primary">
              Цветущий Сад
            </Pill>
            <Pill as="a" href="/pricing" variant="ghost">
              Открыть доступ
            </Pill>
          </div>

          <div className="hero-proof-rail">
            {HERO_MARKERS.map(([label, body]) => (
              <div key={label}>
                <div
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 500,
                    fontSize: 10.5,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "var(--rose)",
                    marginBottom: 8,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: 17,
                    lineHeight: 1.35,
                    color: "var(--ink-soft)",
                  }}
                >
                  {body}
                </div>
              </div>
            ))}
          </div>
        </div>

        <figure className="hero-portrait-shell" style={{ margin: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/generated/yara-editorial-hero-gpt-image-2.png"
            alt="Яра Делл в светлой кухне с ботаническими деталями"
          />
        </figure>
      </div>
    </section>
  );
}
