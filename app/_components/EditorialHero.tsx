import { Kicker, PeonyFloat, Pill, PlaceholderPhoto } from "./Primitives";

/* ============================================================
   EditorialHero — magazine cover. Three-layer floating peonies.
   ============================================================ */

export default function EditorialHero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 0 140px",
        overflow: "visible",
      }}
    >
      {/* floating peonies — three-layer rule */}
      <PeonyFloat
        src="/peonies/peony-bloom-rose.svg"
        width={680}
        right={-180}
        top={-40}
        opacity={0.82}
        rotate={-8}
        z={1}
        drift
      />
      <PeonyFloat
        src="/peonies/peony-bloom-lavender.svg"
        width={420}
        left={"35%"}
        top={140}
        opacity={0.28}
        rotate={4}
        z={0}
      />
      <PeonyFloat
        src="/peonies/peony-bud-rose.svg"
        width={180}
        left={80}
        bottom={40}
        opacity={0.55}
        rotate={-22}
        z={2}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 64,
          position: "relative",
          zIndex: 3,
        }}
      >
        <div>
          <Kicker color="var(--rose)">Письма · Дубай · сезон II</Kicker>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(4rem, 8vw, 7.5rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
              marginTop: 22,
              marginBottom: 28,
              maxWidth: "12ch",
            }}
          >
            Медленное{" "}
            <em style={{ color: "var(--rose)", fontWeight: 500 }}>утро</em>,
            внятная кухня,
            <br />
            собственный{" "}
            <em style={{ color: "var(--rose)", fontWeight: 500 }}>сад.</em>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 22,
              lineHeight: 1.55,
              color: "var(--ink)",
              maxWidth: "48ch",
              margin: "0 0 40px",
            }}
          >
            Письма и программы для женщин, которым интересна биохимия
            собственного тела — без маркетинга, без спешки и без розовых
            подсластителей.
          </p>

          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Pill as="a" href="/programs" variant="primary">
              Посмотреть программы
            </Pill>
            <Pill as="a" href="/philosophy" variant="ghost">
              О философии
            </Pill>
          </div>
        </div>

        <div style={{ position: "relative", alignSelf: "end" }}>
          <PlaceholderPhoto aspect="4 / 5" tone="warm" />
          <div
            style={{
              position: "absolute",
              bottom: -18,
              left: -18,
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 15,
              color: "var(--ink-soft)",
              background: "var(--cream)",
              padding: "6px 14px",
            }}
          >
            портрет · Дубай, март
          </div>
        </div>
      </div>
    </section>
  );
}
