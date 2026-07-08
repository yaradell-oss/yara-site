import { notFound } from "next/navigation";
import Footer from "../../_components/Footer";
import Nav from "../../_components/Nav";
import { Kicker, Pill } from "../../_components/Primitives";
import {
  PlatformBand,
  PlatformGrid,
  PlatformHeader,
  SectionIntro,
  SoftTag,
} from "../../_components/platform/PlatformPrimitives";
import {
  BLOOMING_GARDEN_DAYS,
  TASTE_OF_FREEDOM_DAYS,
  getContentForProgram,
  getProgramOffer,
  PROGRAM_OFFERS,
} from "../../../lib/platform/catalog";
import { canAccess, requirePlatformSession } from "../../../lib/platform/access";

export function generateStaticParams() {
  return PROGRAM_OFFERS.map((program) => ({ programSlug: program.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ programSlug: string }>;
}) {
  const { programSlug } = await params;
  const program = getProgramOffer(programSlug);
  return {
    title: program ? `${program.title} — библиотека` : "Библиотека — Яра Делл",
  };
}

export default async function ProgramLibraryPage({
  params,
}: {
  params: Promise<{ programSlug: string }>;
}) {
  const { programSlug } = await params;
  const program = getProgramOffer(programSlug);
  if (!program) {
    notFound();
  }

  const session = await requirePlatformSession(`/library/${program.slug}`);
  const allowed = canAccess(session, program.featureKey);
  const content = getContentForProgram(program.slug);

  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker={allowed ? "Доступ открыт" : "Требуется доступ"}
          title={program.title}
          italic={program.title}
          lead={allowed ? program.summary : "Эта библиотека закрыта до активации соответствующей подписки или покупки."}
        >
          {!allowed ? (
            <Pill as="a" href="/pricing" variant="primary">
              Открыть доступ
            </Pill>
          ) : null}
        </PlatformHeader>

        <PlatformBand tone={allowed ? "sage" : "rose"}>
          {allowed ? (
            <>
              <SectionIntro
                kicker="Маршрут"
                title="Недели, дни и источники для вопросов Agatha"
                lead="Это первый прототип закрытой библиотеки: после загрузки финальных PDF каждая карточка станет входом в конкретный материал, рецепт или ритуал."
              />
              <PlatformGrid min={300}>
                {(program.slug === "taste-of-freedom"
                  ? TASTE_OF_FREEDOM_DAYS
                  : BLOOMING_GARDEN_DAYS
                ).map((week) => (
                  <div
                    key={week.week}
                    className="library-access-card"
                    style={{
                      background:
                        week.tone === "rose"
                          ? "linear-gradient(145deg, rgba(245,236,232,0.78), rgba(255,253,248,0.7))"
                          : week.tone === "sage"
                            ? "linear-gradient(145deg, rgba(238,240,234,0.82), rgba(255,253,248,0.7))"
                            : "linear-gradient(145deg, rgba(237,235,240,0.82), rgba(255,253,248,0.7))",
                    }}
                  >
                    <Kicker color="var(--sage)">{week.week}</Kicker>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 400,
                        fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                        lineHeight: 1.08,
                        margin: "18px 0 16px",
                        color: "var(--ink)",
                      }}
                    >
                      {week.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        fontSize: 19,
                        lineHeight: 1.55,
                        margin: "0 0 24px",
                      }}
                    >
                      {week.focus}
                    </p>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {week.days.map((day) => (
                        <SoftTag key={day}>{day}</SoftTag>
                      ))}
                    </div>
                  </div>
                ))}
              </PlatformGrid>

              <div style={{ height: 60 }} />

              <SectionIntro
                kicker="Одобренные материалы"
                title="Материалы, которые уже можно индексировать для concierge"
              />
              <PlatformGrid min={300}>
                {content.map((item) => (
                  <div key={item.id} className="library-access-card">
                    <Kicker color="var(--sage)">{item.type}</Kicker>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontWeight: 400,
                        fontSize: "clamp(2rem, 3vw, 3rem)",
                        margin: "18px 0",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        fontSize: 19,
                        lineHeight: 1.55,
                      }}
                    >
                      {item.summary}
                    </p>
                    <div
                      style={{
                        marginTop: 22,
                        fontFamily: "var(--font-label)",
                        fontSize: 11,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--ink-soft)",
                      }}
                    >
                      {item.sourceLabel}
                    </div>
                  </div>
                ))}
              </PlatformGrid>
            </>
          ) : (
            <div className="library-access-card is-locked">
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 22,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                Эта библиотека закрыта до оплаты или ручной активации доступа.
                Превью показывает только структуру программы; сами материалы и
                ответы Agatha остаются внутри подписки.
              </p>
              <div aria-hidden style={{ marginTop: 24 }}>
                <span className="library-preview-slat" />
                <span className="library-preview-slat" />
                <span className="library-preview-slat" />
              </div>
            </div>
          )}
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
