import Link from "next/link";
import { Kicker, PeonyFloat, Pill } from "./Primitives";
import {
  CheckoutButton,
  EditorialPanel,
  PlatformBand,
  PlatformGrid,
  SectionIntro,
  SoftTag,
} from "./platform/PlatformPrimitives";

/* ============================================================
   ProgramDetail — hero + weekly rows. Reused by /programs/[slug].
   ============================================================ */

export function ProgramDetailHero() {
  return (
    <section
      style={{
        padding: "84px 0 52px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PeonyFloat
        src="/peonies/yara-peony-single-alpha.png"
        width={260}
        right={24}
        top={18}
        opacity={0.42}
        rotate={-8}
        z={1}
        drift
      />
      <PeonyFloat
        src="/peonies/yara-peony-bud-alpha.png"
        width={120}
        left={32}
        top={170}
        opacity={0.38}
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
          <Kicker color="var(--rose)">Цветущий Сад · Сезон 2 · 21 день</Kicker>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(3.4rem, 6vw, 5.8rem)",
            lineHeight: 1.02,
            color: "var(--ink)",
            margin: "14px 0 22px",
            maxWidth: "10ch",
          }}
        >
          Цветущий{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>Сад</em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 20,
            lineHeight: 1.5,
            color: "var(--ink)",
            maxWidth: "46ch",
            margin: "0 0 40px",
          }}
        >
          Авторская программа Яры Делл: 21 день микробиоты, рецептов,
          ритуалов, PDF-материалов и Agatha concierge в личном кабинете.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <CheckoutButton />
          <Pill as="a" href="/library/blooming-garden-v2" variant="ghost">
            В библиотеку
          </Pill>
        </div>

        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 38,
            flexWrap: "wrap",
            fontFamily: "var(--font-serif)",
            color: "var(--ink)",
          }}
        >
          {(
            [
              ["длительность", "21 день"],
              ["формат", "PDF + библиотека"],
              ["поддержка", "Agatha concierge"],
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

export function ProgramCommerceSection() {
  return (
    <PlatformBand tone="cream">
      <SectionIntro
        kicker="Что входит"
        title="Не просто доступ к файлам. Понятный маршрут на каждый день."
        lead="Участница видит программу в рабочем порядке: подготовка, неделя, день, рецепт, ритуал, объяснение и источник для вопросов Agatha."
      />
      <PlatformGrid min={280}>
        {[
          {
            title: "21 день",
            body: "Три недели с логикой микробиоты: Корни, Ствол, Крона. Каждый день собран в порядке реальной кухни, а не красивой таблицы.",
          },
          {
            title: "PDF + библиотека",
            body: "Финальные материалы лежат в закрытой библиотеке. Черновики, рабочие заметки и внутренние документы туда не попадают.",
          },
          {
            title: "Agatha concierge",
            body: "Вопросы по программе сначала идут к Agatha. Она отвечает по разрешённым материалам и не отдаёт контент вне доступа.",
          },
        ].map((item) => (
          <EditorialPanel key={item.title} tone="cream">
            <SoftTag>{item.title}</SoftTag>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: 20,
                lineHeight: 1.58,
                margin: "22px 0 0",
                color: "var(--ink)",
              }}
            >
              {item.body}
            </p>
          </EditorialPanel>
        ))}
      </PlatformGrid>
    </PlatformBand>
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
  },
  {
    num: "две",
    kicker: "Неделя вторая",
    title: "Ствол",
    lead:
      "Расцвет и плотность вкуса: щёчки тушёные, осьминог, путанеска, тирамису на маскарпоне. Программа набирает глубину — микробиота уже встретила перемены и готова к большему.",
    bullets: ["щёчки в винном соусе", "осьминог по-средиземноморски", "тирамису без сахара"],
    tone: "sage",
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
        padding: "68px 0",
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
          gap: 46,
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
              fontSize: "clamp(2.45rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              color: "var(--ink)",
              margin: "14px 0 16px",
            }}
          >
            Неделя{" "}
            <em style={{ color: "var(--rose)", fontWeight: 500 }}>
              {week.num}
            </em>{" "}
            — {week.title.toLowerCase()}
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
            minHeight: 250,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              week.tone === "rose"
                ? "/peonies/yara-peony-bud-alpha.png"
                : week.tone === "sage"
                  ? "/peonies/yara-peony-branch-alpha.png"
                  : "/peonies/yara-peony-single-alpha.png"
            }
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              width: week.tone === "sage" ? "84%" : "70%",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 0.85,
              mixBlendMode: "multiply",
              filter: "drop-shadow(0 24px 48px rgba(93,64,48,0.22))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
