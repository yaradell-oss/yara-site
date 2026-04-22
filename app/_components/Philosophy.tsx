import Link from "next/link";
import { Kicker, PeonyFloat, Signature } from "./Primitives";

/* ============================================================
   Philosophy — teaser on home, full manifesto on /philosophy.
   ============================================================ */

export function PhilosophyTeaser() {
  return (
    <section style={{ padding: "160px 32px 120px", position: "relative" }}>
      <PeonyFloat
        src="/peonies/peony-bloom-lavender.svg"
        width={520}
        right={-80}
        top={40}
        opacity={0.22}
        rotate={-14}
      />
      <div
        style={{
          maxWidth: 780,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Kicker>Философия</Kicker>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(2.6rem, 5vw, 4rem)",
            lineHeight: 1.1,
            color: "var(--ink)",
            margin: "18px 0 28px",
          }}
        >
          Тело — не проект, а{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>сад.</em>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 20,
            lineHeight: 1.6,
            color: "var(--ink)",
            maxWidth: "58ch",
            margin: "0 0 28px",
          }}
        >
          Мы не чиним себя по плану. Мы учимся замечать — вкус, усталость, свет
          в комнате — и строим из этого день, который нам подходит. Это долгая
          работа, и она того стоит.
        </p>
        <Link
          href="/philosophy"
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 18,
            color: "var(--lavender)",
            borderBottom: "1px solid currentColor",
            paddingBottom: 2,
          }}
        >
          читать манифест →
        </Link>
      </div>
    </section>
  );
}

export function PhilosophyManifesto() {
  const lines = [
    "В медленный бульон, который варится шесть часов и знает о тебе больше, чем ты сама.",
    "В завтрак, съеденный у окна, а не на ходу — даже если это всего три ложки йогурта с грушей.",
    "В биохимию — как в поэзию: внимательно, не спеша, возвращаясь к любимым строчкам.",
    "В женщин сорока, пятидесяти, шестидесяти — которые уже знают, чего хотят, и которых не надо больше ничему учить. Разве что — как красиво провести утро.",
  ];
  return (
    <section
      style={{
        background: "var(--band-lavender)",
        padding: "160px 32px 200px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PeonyFloat
        src="/peonies/peony-bloom-lavender.svg"
        width={640}
        left={-160}
        top={40}
        opacity={0.2}
        rotate={-10}
      />
      <PeonyFloat
        src="/peonies/peony-bloom-rose.svg"
        width={520}
        right={-120}
        bottom={80}
        opacity={0.18}
        rotate={12}
      />

      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Kicker color="var(--lavender)">Манифест</Kicker>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 1.05,
            color: "var(--ink)",
            margin: "22px 0 40px",
          }}
        >
          Я верю в{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>медленное.</em>
        </h1>

        {lines.map((line, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 22,
              lineHeight: 1.6,
              color: "var(--ink)",
              margin: "0 auto 22px",
              maxWidth: "52ch",
            }}
          >
            {line}
          </p>
        ))}

        <div style={{ marginTop: 48 }}>
          <Signature size={64} />
        </div>
      </div>
    </section>
  );
}
