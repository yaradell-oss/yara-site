import Link from "next/link";
import { Fragment } from "react";
import { Kicker, Pill } from "./Primitives";

/* ============================================================
   Programs — stacked asymmetric rows. No grid of equal cards.
   ============================================================ */

export type ProgramTone = "rose" | "lavender" | "sage";

export interface Program {
  id: string;
  href: string;
  kicker: string;
  title: string;
  italicWord: string;
  lead: string;
  wash: string;
  tone: ProgramTone;
  peony: string;
  rotation: number;
}

export const PROGRAMS: Program[] = [
  {
    id: "blooming-garden",
    href: "/programs/blooming-garden",
    kicker: "Сезон II · 21 день · весна",
    title: "Цветущий сад",
    italicWord: "сад",
    lead:
      "Двадцать один день внимания к себе — утренние ритуалы, медленная кухня и биохимия, объяснённая так, как объясняют друзьям.",
    wash: "var(--rose-wash)",
    tone: "rose",
    peony: "peony-bloom-rose.svg",
    rotation: -6,
  },
  {
    id: "flower-of-life",
    href: "/programs",
    kicker: "Сезон I · 49 дней · осень",
    title: "Цветок жизни",
    italicWord: "жизни",
    lead:
      "Длинная программа для тех, кто хочет перестроить привычки, а не протестировать их. Сон, свет, тарелка, тишина — по-порядку.",
    wash: "var(--lavender-wash)",
    tone: "lavender",
    peony: "peony-bloom-lavender.svg",
    rotation: 8,
  },
  {
    id: "private-kitchen",
    href: "/contact",
    kicker: "Индивидуально · Дубай",
    title: "Частная кухня",
    italicWord: "кухня",
    lead:
      "Приходу на вашу кухню. Разберём холодильник, переработаем завтраки и составим меню на неделю, которое вам действительно нравится.",
    wash: "var(--sage-wash)",
    tone: "sage",
    peony: "peony-branch-sage.svg",
    rotation: -10,
  },
];

export function ProgramRow({
  program,
  index,
}: {
  program: Program;
  index: number;
}) {
  const flipped = index % 2 === 1;

  const words = program.title.split(" ");

  return (
    <article
      style={{
        background: program.wash,
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
          gridTemplateColumns: flipped ? "1fr 1.1fr" : "1.1fr 1fr",
          gap: 64,
          alignItems: "center",
          direction: flipped ? "rtl" : "ltr",
        }}
      >
        <div style={{ direction: "ltr" }}>
          <Kicker color="var(--ink-soft)">{program.kicker}</Kicker>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(3rem, 5.5vw, 4.5rem)",
              lineHeight: 1.08,
              color: "var(--ink)",
              margin: "18px 0 24px",
            }}
          >
            {words.map((w, i) => {
              const isItalic = w
                .toLowerCase()
                .startsWith(program.italicWord.toLowerCase());
              return (
                <Fragment key={i}>
                  {isItalic ? (
                    <em style={{ color: "var(--rose)", fontWeight: 500 }}>{w}</em>
                  ) : (
                    w
                  )}
                  {i < words.length - 1 ? " " : ""}
                </Fragment>
              );
            })}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--ink)",
              maxWidth: "46ch",
              margin: "0 0 32px",
            }}
          >
            {program.lead}
          </p>
          <Pill as="a" href={program.href} variant="primary">
            Подробнее
          </Pill>
        </div>

        <div
          style={{
            direction: "ltr",
            position: "relative",
            minHeight: 420,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/peonies/${program.peony}`}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              width: "110%",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${program.rotation}deg)`,
              opacity: 0.9,
              filter: "drop-shadow(0 24px 48px rgba(93,64,48,0.22))",
            }}
          />
        </div>
      </div>
    </article>
  );
}

export function ProgramsHeader() {
  return (
    <header style={{ padding: "140px 32px 80px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Kicker color="var(--rose)">Программы</Kicker>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
            lineHeight: 1.05,
            color: "var(--ink)",
            margin: "18px 0 0",
            maxWidth: "14ch",
          }}
        >
          Три способа{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>начать</em>.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 22,
            lineHeight: 1.55,
            color: "var(--ink-soft)",
            maxWidth: "58ch",
            marginTop: 28,
          }}
        >
          Сезонные программы и индивидуальные визиты. Каждая из них — о
          внимании, не о дисциплине.
        </p>
      </div>
    </header>
  );
}

export default function Programs() {
  return (
    <>
      {PROGRAMS.map((p, i) => (
        <ProgramRow key={p.id} program={p} index={i} />
      ))}
    </>
  );
}

// re-export the Link primitive for consumers that want a direct anchor
export { Link };
