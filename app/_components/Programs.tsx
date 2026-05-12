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
  commercial: string;
  state: string;
  wash: string;
  tone: ProgramTone;
  rotation: number;
  seasonMark: string;
}

export const PROGRAMS: Program[] = [
  {
    id: "blooming-garden",
    href: "/programs/blooming-garden",
    kicker: "Текущий запуск · 21 день",
    title: "Цветущий Сад",
    italicWord: "Сад",
    lead:
      "Двадцать один день внимания к микробиоте: утренние ритуалы, медленная кухня и биохимия, объяснённая человеческим языком.",
    commercial: "Первый коммерческий сезон платформы: checkout, библиотека, Agatha concierge.",
    state: "доступ открыт после оплаты",
    wash: "var(--rose-wash)",
    tone: "rose",
    rotation: -6,
    seasonMark: "II",
  },
  {
    id: "root-cleanse",
    href: "/pricing",
    kicker: "Будущий запуск · скоро",
    title: "Корневое очищение",
    italicWord: "очищение",
    lead:
      "Антипаразитарная программа на травах и специях. Без медикаментов, без жёстких чисток — мудрость травницы в твоей кухне. Старт 15 июня.",
    commercial: "Будущий запуск: лист ожидания, прогрев, ранний доступ.",
    state: "скоро",
    wash: "var(--sage-wash)",
    tone: "sage",
    rotation: 6,
    seasonMark: "III",
  },
  {
    id: "flower-of-life",
    href: "/pricing",
    kicker: "Архив · ранние программы",
    title: "Архив Яры",
    italicWord: "Яры",
    lead:
      "Программа для тех, кто хочет перестроить привычки, а не протестировать их. Сон, свет, тарелка, тишина — по-порядку.",
    commercial: "Evergreen-архив: старшие материалы с постоянной ценностью.",
    state: "архивный слой",
    wash: "var(--lavender-wash)",
    tone: "lavender",
    rotation: 8,
    seasonMark: "I",
  },
  {
    id: "private-kitchen",
    href: "/contact",
    kicker: "Индивидуально · Дубай",
    title: "Частная кухня",
    italicWord: "кухня",
    lead:
      "Приду на вашу кухню. Разберём холодильник, переработаем завтраки и составим меню на неделю, которое вам действительно нравится.",
    commercial: "Премиальный офлайн-слой: заявка, handoff и персональное согласование.",
    state: "Дубай · по запросу",
    wash: "var(--rose-wash)",
    tone: "rose",
    rotation: -10,
    seasonMark: "D",
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
  const edgeSrc =
    program.id === "root-cleanse"
      ? "/peonies/yara-peony-branch-alpha.png"
      : program.id === "blooming-garden"
        ? "/peonies/yara-peony-single-alpha.png"
        : "/peonies/yara-peony-bud-alpha.png";

  return (
    <article
      className={`program-flow program-flow-${program.tone} ${
        flipped ? "is-flipped" : ""
      }`}
      style={{
        padding: "64px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <span className="program-watermark" aria-hidden>
        {program.seasonMark}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="program-edge-peony"
        src={edgeSrc}
        alt=""
        aria-hidden
      />
      <div
        className="program-row-grid"
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 32px",
          display: "grid",
          ["--program-grid" as string]: flipped ? "1fr 1.1fr" : "1.1fr 1fr",
          gridTemplateColumns: "var(--program-grid)",
          gap: 42,
          alignItems: "center",
          direction: flipped ? "rtl" : "ltr",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ direction: "ltr" }}>
          <Kicker color="var(--ink-soft)">{program.kicker}</Kicker>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 4.2vw, 3.6rem)",
              lineHeight: 1.08,
              color: "var(--ink)",
              margin: "14px 0 16px",
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
              fontSize: 18,
              lineHeight: 1.5,
              color: "var(--ink)",
              maxWidth: "46ch",
              margin: "0 0 18px",
            }}
          >
            {program.lead}
          </p>
          <div
            style={{
              display: "grid",
              gap: 10,
              marginBottom: 22,
              maxWidth: "48ch",
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              lineHeight: 1.5,
              color: "var(--ink)",
            }}
          >
            <div>— {program.commercial}</div>
            <div style={{ color: "var(--ink-soft)" }}>— {program.state}</div>
          </div>
          <Pill as="a" href={program.href} variant="primary">
            Подробнее
          </Pill>
        </div>

        <div
          className="program-art"
          style={{
            direction: "ltr",
            position: "relative",
            minHeight: 230,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="program-peony"
            src={
              program.id === "blooming-garden"
                ? "/peonies/yara-peony-single-alpha.png"
                : program.id === "root-cleanse"
                  ? "/peonies/yara-peony-branch-alpha.png"
                  : "/peonies/yara-peony-bud-alpha.png"
            }
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              width: program.id === "root-cleanse" ? "76%" : "60%",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${program.rotation}deg)`,
              opacity: 0.9,
              mixBlendMode: "multiply",
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
    <header style={{ padding: "72px 32px 36px" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <Kicker color="var(--rose)">Программы</Kicker>
          <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(2.8rem, 5vw, 4.7rem)",
            lineHeight: 1.05,
            color: "var(--ink)",
            margin: "14px 0 0",
            maxWidth: "14ch",
          }}
        >
          Программы{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>Яры</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 19,
            lineHeight: 1.55,
            color: "var(--ink-soft)",
            maxWidth: "58ch",
            marginTop: 28,
          }}
        >
          На верхнем уровне — Яра Делл и её авторская кухня. Внутри —
          текущие сезоны, архивные материалы и будущие продуктовые слои.
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
