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
   Data-driven: PROGRAM_DETAILS holds a block per public program.
   ============================================================ */

type WeekTone = "rose" | "sage" | "lavender" | "peach";

interface Week {
  num: string;
  kicker: string;
  title: string;
  lead: string;
  bullets: string[];
  tone: WeekTone;
}

interface GrowthNode {
  title: string;
  label: string;
  body: string;
}

interface CommerceCard {
  title: string;
  body: string;
}

export interface ProgramDetailData {
  kicker: string;
  titleMain: string;
  titleItalic: string;
  lead: string;
  checkoutSlug: string;
  libraryHref: string;
  facts: readonly (readonly [string, string])[];
  commerceLead: string;
  commerceCards: CommerceCard[];
  growthAriaLabel: string;
  growthNodes: GrowthNode[];
  weeks: Week[];
}

export const PROGRAM_DETAILS: Record<string, ProgramDetailData> = {
  "taste-of-freedom": {
    kicker: "Цветок Жизни · Сезон 3 · 28 дней",
    titleMain: "Вкус",
    titleItalic: "свободы",
    lead:
      "Авторская программа Яры Делл: 28 дней живой кухни, ферментов, ритуалов, PDF-материалов и Agatha concierge в личном кабинете.",
    checkoutSlug: "taste-of-freedom",
    libraryHref: "/library/taste-of-freedom",
    facts: [
      ["длительность", "28 дней"],
      ["формат", "PDF + библиотека"],
      ["поддержка", "Agatha concierge"],
      ["язык", "русский"],
    ],
    commerceLead:
      "Участница видит программу в рабочем порядке: подготовка, день закупок, день заготовок, рецепт, ритуал, объяснение и источник для вопросов Agatha.",
    commerceCards: [
      {
        title: "28 дней",
        body: "Четыре недели — Освобождение, Опора, Наполнение, Свобода. Каждый день собран в порядке реальной кухни: тёплая вода до еды, тарелка начинается с клетчатки.",
      },
      {
        title: "PDF + библиотека",
        body: "Финальные материалы лежат в закрытой библиотеке: дни 1–28, дни закупок и заготовок, чайная и десертная карты, карта ферментации.",
      },
      {
        title: "Agatha concierge",
        body: "Вопросы по программе сначала идут к Agatha. Она отвечает по разрешённым материалам и не отдаёт контент вне доступа.",
      },
    ],
    growthAriaLabel: "Ритм программы Вкус свободы",
    growthNodes: [
      {
        title: "Освобождение",
        label: "1 неделя",
        body: "Мягкий старт: тёплая вода до еды, тарелка начинается с клетчатки, знакомые телу блюда.",
      },
      {
        title: "Опора",
        label: "2 неделя",
        body: "Плотность и глубина вкуса: рийет, прозрачный фюме, медленное тушение — опора для дня.",
      },
      {
        title: "Наполнение",
        label: "3 неделя",
        body: "Щедрость к себе: яркие текстуры и блюда, которые наполняют без тяжести.",
      },
      {
        title: "Свобода",
        label: "4 неделя",
        body: "Сборка привычек: свобода выбора, выросшая из ежедневных решений в свою сторону.",
      },
    ],
    weeks: [
      {
        num: "одна",
        kicker: "Неделя первая",
        title: "Освобождение",
        lead:
          "Мягкий старт: тело встречает знакомые блюда, собранные по логике программы — тёплая вода до еды, клетчатка первой, спокойный ритм утра.",
        bullets: [
          "фриттата со шпинатом и пармезаном",
          "курица с оливками и капустной крошкой",
          "полпетте в золотистом бульоне с бок-чой",
        ],
        tone: "rose",
      },
      {
        num: "две",
        kicker: "Неделя вторая",
        title: "Опора",
        lead:
          "Программа набирает глубину: плотные вкусы, медленные техники и блюда, на которые можно опереться в середине пути.",
        bullets: [
          "рийет-тартин с корнишонами",
          "кнели в прозрачном фюме",
          "говядина по-сицилийски с апельсиновой гремолатой и фенхелем",
        ],
        tone: "sage",
      },
      {
        num: "три",
        kicker: "Неделя третья",
        title: "Наполнение",
        lead:
          "Щедрость к себе: холодные и тёплые текстуры, яркие соусы и блюда, которые наполняют энергией без тяжести.",
        bullets: [
          "вителло-тоннато под тунцовым соусом",
          "треска на гриле с цукини и соусом ромеско",
          "яичные роллы с творогом и зеленью",
        ],
        tone: "lavender",
      },
      {
        num: "четыре",
        kicker: "Неделя четвёртая",
        title: "Свобода",
        lead:
          "Финальная неделя: свобода выбора за столом, выросшая из четырёх недель ежедневных решений в свою сторону.",
        bullets: [
          "смёрребрёд с печенью трески и маринованным луком",
          "скандинавское рыбное рагу с мидиями",
          "бараньи отбивные с чимичурри и томатами черри",
        ],
        tone: "peach",
      },
    ],
  },
  "blooming-garden": {
    kicker: "Цветущий Сад · Сезон 2 · 21 день",
    titleMain: "Цветущий",
    titleItalic: "Сад",
    lead:
      "Авторская программа Яры Делл: 21 день микробиоты, рецептов, ритуалов, PDF-материалов и Agatha concierge в личном кабинете.",
    checkoutSlug: "blooming-garden-v2",
    libraryHref: "/library/blooming-garden-v2",
    facts: [
      ["длительность", "21 день"],
      ["формат", "PDF + библиотека"],
      ["поддержка", "Agatha concierge"],
      ["язык", "русский"],
    ],
    commerceLead:
      "Участница видит программу в рабочем порядке: подготовка, неделя, день, рецепт, ритуал, объяснение и источник для вопросов Agatha.",
    commerceCards: [
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
    ],
    growthAriaLabel: "Ритм программы Цветущий Сад",
    growthNodes: [
      {
        title: "Корни",
        label: "1 неделя",
        body: "Подготовка, желчный ритм, ферменты и первые устойчивые тарелки.",
      },
      {
        title: "Ствол",
        label: "2 неделя",
        body: "Плотность вкуса, белок, полифенолы и блюда, которые держат день.",
      },
      {
        title: "Крона",
        label: "3 неделя",
        body: "Лёгкость, ясность и финальная сборка привычек без марафонной суеты.",
      },
    ],
    weeks: [
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
    ],
  },
};

export function ProgramDetailHero({ detail }: { detail: ProgramDetailData }) {
  return (
    <section
      className="program-detail-hero v31-gloss-surface"
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
          <Kicker color="var(--rose)">{detail.kicker}</Kicker>
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
          {detail.titleMain}{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>
            {detail.titleItalic}
          </em>
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
          {detail.lead}
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <CheckoutButton programSlug={detail.checkoutSlug} />
          <Pill as="a" href={detail.libraryHref} variant="ghost">
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
          {detail.facts.map(([k, v]) => (
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

export function ProgramCommerceSection({ detail }: { detail: ProgramDetailData }) {
  return (
    <PlatformBand tone="cream">
      <SectionIntro
        kicker="Что входит"
        title="Не просто доступ к файлам. Понятный маршрут на каждый день."
        lead={detail.commerceLead}
      />
      <PlatformGrid min={280}>
        {detail.commerceCards.map((item) => (
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
      <ProgramGrowthPath detail={detail} />
    </PlatformBand>
  );
}

export function ProgramGrowthPath({ detail }: { detail: ProgramDetailData }) {
  return (
    <div className="program-growth-path" aria-label={detail.growthAriaLabel}>
      {detail.growthNodes.map((node) => (
        <div className="program-growth-node" key={node.title}>
          <div
            style={{
              fontFamily: "var(--font-label)",
              fontSize: 10.5,
              fontWeight: 500,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--rose)",
              marginBottom: 10,
            }}
          >
            {node.label}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 2.6vw, 2.55rem)",
              lineHeight: 1.08,
              margin: "0 0 10px",
              color: "var(--ink)",
            }}
          >
            {node.title}
          </h3>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 17,
              lineHeight: 1.48,
              margin: 0,
              color: "var(--ink-soft)",
            }}
          >
            {node.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export function WeekRow({ week, index }: { week: Week; index: number }) {
  const flipped = index % 2 === 1;
  const washes: Record<WeekTone, string> = {
    rose: "var(--rose-wash)",
    sage: "var(--sage-wash)",
    lavender: "var(--lavender-wash)",
    peach: "var(--peach-wash)",
  };
  return (
    <section
      className="program-week-band"
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
              week.tone === "rose" || week.tone === "peach"
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
