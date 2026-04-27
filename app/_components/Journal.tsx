import Link from "next/link";
import { Fragment } from "react";
import { DividerSprig, Kicker, PeonyFloat, PlaceholderPhoto } from "./Primitives";

/* ============================================================
   Journal — single-column list. Hairline under-border per row only.
   ============================================================ */

export type ArticleTone = "rose" | "sage" | "lavender";

export interface Article {
  id: string;
  kicker: string;
  title: string;
  italic: string;
  lede: string;
  tone: ArticleTone;
}

export const ARTICLES: Article[] = [];

function kickerColor(t: ArticleTone) {
  return {
    rose: "var(--rose)",
    sage: "var(--sage)",
    lavender: "var(--lavender)",
  }[t];
}

export function JournalList({ limit }: { limit?: number }) {
  const items = limit ? ARTICLES.slice(0, limit) : ARTICLES;

  // Empty state — when there are no articles yet
  if (items.length === 0) {
    return (
      <section style={{ padding: "120px 32px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <Kicker color="var(--rose)">Журнал</Kicker>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              lineHeight: 1.15,
              color: "var(--ink)",
              margin: "14px 0 24px",
            }}
          >
            Скоро —{" "}
            <em style={{ color: "var(--rose)", fontWeight: 500 }}>первые письма</em>.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 20,
              lineHeight: 1.6,
              color: "var(--ink-soft)",
              maxWidth: "52ch",
              margin: 0,
            }}
          >
            Журнал пока пустой — буду писать сюда раз в неделю, по воскресеньям. Чтобы не пропустить — оставь имя в форме внизу страницы.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {limit ? (
          <div style={{ marginBottom: 48 }}>
            <Kicker color="var(--rose)">Журнал</Kicker>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontWeight: 400,
                fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
                lineHeight: 1.1,
                color: "var(--ink)",
                margin: "14px 0 0",
              }}
            >
              Пишу{" "}
              <em style={{ color: "var(--rose)", fontWeight: 500 }}>
                раз в неделю
              </em>
              , по воскресеньям.
            </h2>
          </div>
        ) : null}

        {items.map((a) => {
          const chunks = a.title.split(a.italic);
          return (
            <Link
              key={a.id}
              href={`/journal/${a.id}`}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                borderBottom: "1px solid rgba(93,64,48,0.1)",
                padding: "28px 0",
              }}
            >
              <Kicker color={kickerColor(a.tone)}>{a.kicker}</Kicker>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(1.8rem, 3vw, 2.25rem)",
                  lineHeight: 1.2,
                  color: "var(--ink)",
                  margin: "10px 0 6px",
                }}
              >
                {chunks.map((chunk, i) => (
                  <Fragment key={i}>
                    {chunk}
                    {i < chunks.length - 1 && (
                      <em
                        style={{ color: "var(--rose)", fontWeight: 500 }}
                      >
                        {a.italic}
                      </em>
                    )}
                  </Fragment>
                ))}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 17,
                  color: "var(--ink-soft)",
                }}
              >
                {a.lede}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function JournalHeader() {
  return (
    <header style={{ padding: "140px 32px 40px", position: "relative" }}>
      <PeonyFloat
        src="/peonies/peony-branch-sage.svg"
        width={520}
        right={-60}
        top={90}
        opacity={0.4}
        rotate={-4}
      />
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Kicker color="var(--rose)">Журнал</Kicker>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(3rem, 6vw, 5rem)",
            lineHeight: 1.05,
            color: "var(--ink)",
            margin: "18px 0 0",
            maxWidth: "14ch",
          }}
        >
          Записки с{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>кухни</em> и
          немного биохимии.
        </h1>
      </div>
    </header>
  );
}

export function ArticleHero() {
  return (
    <section style={{ padding: "120px 32px 64px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Link
          href="/journal"
          style={{
            fontFamily: "var(--font-label)",
            fontSize: 11,
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "var(--ink-soft)",
            display: "inline-block",
            marginBottom: 32,
          }}
        >
          ← Журнал
        </Link>

        <Kicker color="var(--rose)">Кухня · 12 мин · апрель 2026</Kicker>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
            lineHeight: 1.08,
            color: "var(--ink)",
            margin: "18px 0 24px",
          }}
        >
          Медленный бульон и{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>
            время, которое его стоит.
          </em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 22,
            lineHeight: 1.55,
            color: "var(--ink-soft)",
            margin: 0,
          }}
        >
          о том, почему шесть часов — не много
        </p>
      </div>
      <div style={{ maxWidth: 960, margin: "56px auto 0", padding: "0 32px" }}>
        <PlaceholderPhoto aspect="16 / 9" tone="warm" />
      </div>
    </section>
  );
}

export function ArticleBody() {
  const paragraphs = [
    {
      italic: true,
      text: "Есть вещи, которые невозможно ускорить, и бульон — одна из них. Можно, конечно, включить скороварку и закрыть вопрос за сорок минут. Но тогда это будет другой суп, и разговор у нас будет другой.",
    },
    {
      italic: false,
      text: "Когда я варю бульон долго, я делаю это не из верности старине, а по совершенно практической причине: коллаген и минералы у говяжьей кости выходят медленно. Три часа — это начало; шесть — это честный результат. Всё, что быстрее, — это ароматная вода с солью, тоже вкусная, но другая.",
    },
    {
      italic: true,
      text: "И да — шесть часов звучит как много. Но на самом деле это значит: поставили в десять утра, забыли до четырёх. В промежутке — два телефонных разговора, один душ, одно письмо, одна прогулка. Бульон варится сам. Он в вас не нуждается.",
    },
  ];
  return (
    <article style={{ padding: "64px 32px 120px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: p.italic ? "italic" : "normal",
              fontSize: 19,
              lineHeight: 1.7,
              color: "var(--ink)",
              margin: "0 0 24px",
              maxWidth: "100%",
            }}
          >
            {p.text}
          </p>
        ))}
        <DividerSprig width={180} />
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 19,
            lineHeight: 1.7,
            color: "var(--ink-soft)",
            margin: "24px 0 0",
            textAlign: "center",
          }}
        >
          — Я. Д.
        </p>
      </div>
    </article>
  );
}
