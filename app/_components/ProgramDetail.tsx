import Link from "next/link";
import { Kicker, PeonyFloat, Pill } from "./Primitives";

/* ============================================================
   ProgramDetail — hero + weekly rows. Reused by /programs/[slug].
   ============================================================ */

export function ProgramDetailHero() {
  return (
    <section
      style={{
        padding: "140px 0 80px",
        position: "relative",
        overflow: "visible",
      }}
    >
      <PeonyFloat
        src="/peonies/peony-bloom-rose.svg"
        width={640}
        right={-160}
        top={-60}
        opacity={0.82}
        rotate={-8}
        z={1}
        drift
      />
      <PeonyFloat
        src="/peonies/peony-bud-rose.svg"
        width={180}
        left={80}
        top={220}
        opacity={0.55}
        rotate={-18}
        z={2}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          position: "relative",
          zIndex: 3,
        }}
      >
        <Link
          href="/programs"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--ink-soft)",
            display: "inline-block",
          }}
        >
          ← Все программы
        </Link>

        <div style={{ marginTop: 24 }}>
          <Kicker color="var(--rose)">Сезон II · 21 день</Kicker>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(4rem, 8vw, 7rem)",
            lineHeight: 1.02,
            color: "var(--ink)",
            margin: "18px 0 28px",
            maxWidth: "10ch",
          }}
        >
          Цветущий{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>сад.</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 22,
            lineHeight: 1.55,
            color: "var(--ink)",
            maxWidth: "46ch",
            margin: "0 0 40px",
          }}
        >
          Три недели — по одной на каждую весну, которая живёт внутри. Утро,
          полдень, вечер; свет, тарелка, тишина.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Pill as="a" href="/contact" variant="primary">
            Записаться
          </Pill>
          <Pill as="a" href="/contact" variant="ghost">
            Скачать программу
          </Pill>
        </div>

        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 64,
            flexWrap: "wrap",
            fontFamily: "var(--font-serif)",
            color: "var(--ink)",
          }}
        >
          {(
            [
              ["длительность", "21 день"],
              ["формат", "письма + групповые встречи"],
              ["набор группы", "по запросу"],
              ["язык", "русский"],
            ] as const
          ).map(([k, v]) => (
            <div key={k}>
              <div
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: 10.5,
                  fontWeight: 500,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--ink-soft)",
                }}
              >
                {k}
              </div>
              <div style={{ fontStyle: "italic", fontSize: 20, marginTop: 6 }}>
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type WeekTone = "rose" | "sage" | "lavender";
interface Week {
  num: string;
  kicker: string;
  title: string;
  lead: string;
  bullets: string[];
  tone: WeekTone;
  peony: string;
}

export const WEEKS: Week[] = [
  {
    num: "одна",
    kicker: "Неделя первая",
    title: "Корни",
    lead:
      "Глубинная подготовка: разгрузка печени, активация желчного, мягкий старт. Тарелка собирается из того, что уже знакомо телу — крестоцветные, бульон, лимон, имбирь.",
    bullets: ["золотой костный бульон", "карамелизованная цветная капуста", "уксусный эликсир до еды"],
    tone: "rose",
    peony: "peony-bud-rose.svg",
  },
  {
    num: "две",
    kicker: "Неделя вторая",
    title: "Ствол",
    lead:
      "Расцвет и плотность вкуса: щёчки тушёные, осьминог, путанеска, тирамису на маскарпоне. Программа набирает глубину — микробиота уже встретила перемены и готова к большему.",
    bullets: ["щёчки в винном соусе", "осьминог по-средиземноморски", "тирамису без сахара"],
    tone: "sage",
    peony: "peony-branch-sage.svg",
  },
  {
    num: "три",
    kicker: "Неделя третья",
    title: "Крона",
    lead:
      "Финальная неделя — лёгкость и ясность. Чёрная треска в мисо, гранат, фенхель, японские нотки. Микробиота к этому моменту умеет работать с полифенолами на полную.",
    bullets: [
      "чёрная треска в мисо",
      "гранат и фенхель",
      "панна-котта на кокосовых сливках",
    ],
    tone: "lavender",
    peony: "peony-bloom-lavender.svg",
  },
];

export function WeekRow({ week, index }: { week: Week; index: number }) {
  const flipped = index % 2 === 1;
  const washes: Record<WeekTone, string> = {
    rose: "var(--rose-wash)",
    sage: "var(--sage-wash)",
    lavender: "var(--lavender-wash)",
  };
  return (
    <section
      style={{
        background: washes[week.tone],
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          gridTemplateColumns: flipped ? "1fr 1.2fr" : "1.2fr 1fr",
          gap: 80,
          alignItems: "center",
          direction: flipped ? "rtl" : "ltr",
        }}
      >
        <div style={{ direction: "ltr" }}>
          <Kicker color="var(--ink-soft)">{week.kicker}</Kicker>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(3rem, 5vw, 4rem)",
              lineHeight: 1.1,
              color: "var(--ink)",
              margin: "18px 0 20px",
            }}
          >
            Неделя{" "}
            <em style={{ color: "var(--rose)", fontWeight: 500 }}>
              {week.num}
            </em>{" "}
            — {week.title.toLowerCase()}.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--ink)",
              maxWidth: "46ch",
              margin: "0 0 28px",
            }}
          >
            {week.lead}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              color: "var(--ink)",
            }}
          >
            {week.bullets.map((b) => (
              <li
                key={b}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(93,64,48,0.1)",
                }}
              >
                <span style={{ color: "var(--rose)", marginRight: 12 }}>—</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            direction: "ltr",
            position: "relative",
            minHeight: 360,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/peonies/${week.peony}`}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              width: "100%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.85,
              filter: "drop-shadow(0 24px 48px rgba(93,64,48,0.22))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
