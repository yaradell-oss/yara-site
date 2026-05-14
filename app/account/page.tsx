import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import { Pill } from "../_components/Primitives";
import {
  EditorialPanel,
  InlineMetric,
  MetaRow,
  PlatformBand,
  PlatformGrid,
  PlatformHeader,
  SectionIntro,
  SoftTag,
  TextLink,
} from "../_components/platform/PlatformPrimitives";
import { PROGRAM_OFFERS } from "../../lib/platform/catalog";
import { requirePlatformSession } from "../../lib/platform/access";

export const metadata = {
  title: "Личный кабинет — Яра Делл",
};

export default async function AccountPage() {
  const session = await requirePlatformSession("/account");
  const active = session.entitlements.filter((item) => item.active);

  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker={session.isConfigured ? "Личный кабинет" : "Личный кабинет · preview"}
          title="Доступ, материалы, вопросы"
          italic="доступ"
          lead="Кабинет показывает не только факт оплаты, а следующий шаг: что открыто, куда идти, где задать вопрос и как управлять подпиской."
        />

        <PlatformBand tone="cream">
          <PlatformGrid min={320}>
            <EditorialPanel tone="rose">
              <MetaRow label="Профиль" value={session.displayName} />
              <div style={{ height: 24 }} />
              <MetaRow label="Email" value={session.email || "не авторизован"} />
              <div style={{ marginTop: 30, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Pill as="a" href="/library" variant="primary">
                  В библиотеку
                </Pill>
                <Pill as="a" href="/concierge" variant="ghost">
                  Спросить Agatha
                </Pill>
              </div>
            </EditorialPanel>

            <EditorialPanel>
              <MetaRow label="Активные права" value={active.length ? `${active.length}` : "нет"} />
              <div style={{ marginTop: 24, display: "grid", gap: 14 }}>
                {active.length ? (
                  active.map((item) => (
                    <div
                      key={item.lookupKey}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        borderBottom: "1px solid rgba(93,64,48,0.1)",
                        paddingBottom: 12,
                        fontFamily: "var(--font-serif)",
                        fontSize: 18,
                      }}
                    >
                      <span>{item.label}</span>
                      <span style={{ color: "var(--sage)" }}>активно</span>
                    </div>
                  ))
                ) : (
                  <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.55 }}>
                    Доступ появится после оплаты программы или активации подписки.
                  </p>
                )}
              </div>
            </EditorialPanel>
          </PlatformGrid>
        </PlatformBand>

        <PlatformBand tone="sage">
          <SectionIntro
            kicker="Следующие шаги"
            title="Кабинет ведёт, а не шумит настройками"
            lead="Для MVP достаточно трёх понятных входов: открыть программу, спросить Agatha, управлять оплатой. Остальное не должно шуметь."
          />
          <PlatformGrid min={260}>
            <div className="account-step-card">
              <InlineMetric label="шаг 1" value="Открыть библиотеку" />
              <div style={{ marginTop: 22 }}>
                <TextLink href="/library">Перейти к материалам</TextLink>
              </div>
            </div>
            <div className="account-step-card">
              <InlineMetric label="шаг 2" value="Задать вопрос" />
              <div style={{ marginTop: 22 }}>
                <TextLink href="/concierge">Открыть Agatha concierge</TextLink>
              </div>
            </div>
            <div className="account-step-card">
              <InlineMetric label="шаг 3" value="Оплата и доступ" />
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 22 }}>
                <SoftTag>карта</SoftTag>
                <SoftTag>ручная активация</SoftTag>
              </div>
            </div>
          </PlatformGrid>
        </PlatformBand>

        <PlatformBand tone="lavender">
          <PlatformGrid min={280}>
            {PROGRAM_OFFERS.map((program) => (
              <EditorialPanel key={program.slug} tone="cream">
                <MetaRow label={program.kicker} value={program.title} />
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: 18,
                    lineHeight: 1.55,
                    color: "var(--ink)",
                    margin: "20px 0",
                  }}
                >
                  {program.summary}
                </p>
                <TextLink href={program.libraryHref}>Открыть раздел</TextLink>
              </EditorialPanel>
            ))}
          </PlatformGrid>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
