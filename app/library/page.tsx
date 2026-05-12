import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import { Kicker, Pill } from "../_components/Primitives";
import {
  EditorialPanel,
  PlatformBand,
  PlatformGrid,
  PlatformHeader,
  SectionIntro,
  SoftTag,
  TextLink,
} from "../_components/platform/PlatformPrimitives";
import { LIBRARY_FILTERS, PROGRAM_OFFERS } from "../../lib/platform/catalog";
import { canAccess, requirePlatformSession } from "../../lib/platform/access";

export const metadata = {
  title: "Библиотека — Яра Делл",
};

export default async function LibraryPage() {
  const session = await requirePlatformSession("/library");

  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker="Библиотека"
          title="Материалы без хаоса"
          italic="Материалы"
          lead="Закрытая библиотека должна ощущаться как спокойный маршрут по программе: недели, дни, рецепты, ритуалы, PDF и понятный статус доступа."
        />
        <PlatformBand tone="lavender">
          <SectionIntro
            kicker="Библиотека"
            title="Сначала маршрут, потом поиск"
            lead="На MVP фильтры работают как понятная структура библиотеки. После подключения Supabase они будут читать только материалы, разрешённые активными правами."
          />
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}>
            {LIBRARY_FILTERS.map((filter) => (
              <SoftTag key={filter}>{filter}</SoftTag>
            ))}
          </div>
          <PlatformGrid min={320}>
            {PROGRAM_OFFERS.map((program) => {
              const allowed = canAccess(session, program.featureKey);
              return (
                <EditorialPanel key={program.slug} tone={allowed ? "cream" : "rose"}>
                  <Kicker color={allowed ? "var(--sage)" : "var(--ink-soft)"}>
                    {allowed ? "доступ открыт" : "закрыто"}
                  </Kicker>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontWeight: 400,
                      fontSize: "clamp(2rem, 3vw, 3rem)",
                      margin: "18px 0",
                    }}
                  >
                    {program.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: 19,
                      lineHeight: 1.55,
                    }}
                  >
                    {program.summary}
                  </p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 20 }}>
                    <SoftTag>{program.duration}</SoftTag>
                    <SoftTag>{program.format}</SoftTag>
                  </div>
                  <div style={{ marginTop: 28 }}>
                    {allowed ? (
                      <TextLink href={program.libraryHref}>Открыть материалы</TextLink>
                    ) : (
                      <Pill as="a" href="/pricing" variant="ghost">
                        Посмотреть доступ
                      </Pill>
                    )}
                  </div>
                </EditorialPanel>
              );
            })}
          </PlatformGrid>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
