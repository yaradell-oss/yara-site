import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import { Kicker, Pill } from "../_components/Primitives";
import {
  CheckoutButton,
  EditorialPanel,
  InlineMetric,
  PlatformBand,
  PlatformGrid,
  PlatformHeader,
  SectionIntro,
  SoftTag,
} from "../_components/platform/PlatformPrimitives";
import { PROGRAM_OFFERS } from "../../lib/platform/catalog";

export const metadata = {
  title: "Доступ и подписки — Яра Делл",
  description:
    "Доступ к программе Вкус свободы, библиотеке и Agatha concierge.",
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker="Доступ"
          title="Оплатить, войти, продолжить"
          italic="войти"
          lead="Оплаченный доступ открывает материалы, библиотеку и вопросы к Agatha. Карты идут через Stripe; крипто-платежи проходят через ручное подтверждение и админ-активацию."
        />

        <PlatformBand tone="rose" style={{ paddingTop: 72 }}>
          <SectionIntro
            kicker="Запуск"
            title="Текущий запуск — Вкус свободы"
            lead="Один главный путь: купить Сезон 3, войти в личный кабинет и открыть библиотеку. Остальные уровни показаны как будущая архитектура, чтобы не размывать решение."
          />
          <PlatformGrid min={300}>
            {PROGRAM_OFFERS.map((offer) => (
              <EditorialPanel key={offer.slug} tone="cream">
                {offer.coverSrc ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={offer.coverSrc}
                    alt=""
                    aria-hidden
                    style={{
                      width: "100%",
                      aspectRatio: "4 / 3",
                      objectFit: "cover",
                      borderRadius: "var(--radius-image)",
                      boxShadow: "var(--shadow-card)",
                      marginBottom: 22,
                    }}
                  />
                ) : null}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
                  <SoftTag>{offer.status}</SoftTag>
                  <SoftTag>{offer.duration}</SoftTag>
                </div>
                <Kicker color="var(--rose)">{offer.kicker}</Kicker>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: "clamp(2.25rem, 3vw, 3.25rem)",
                    lineHeight: 1.08,
                    color: "var(--ink)",
                    margin: "18px 0 16px",
                  }}
                >
                  {offer.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: 20,
                    lineHeight: 1.55,
                    color: "var(--ink)",
                    margin: "0 0 22px",
                  }}
                >
                  {offer.subtitle}
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-label)",
                    fontWeight: 500,
                    fontSize: 12,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--ink-soft)",
                    marginBottom: 24,
                  }}
                >
                  {offer.priceLabel}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 30px",
                    display: "grid",
                    gap: 12,
                    fontFamily: "var(--font-serif)",
                    fontSize: 18,
                    lineHeight: 1.5,
                  }}
                >
                  {offer.includes.map((item) => (
                    <li key={item}>— {item}</li>
                  ))}
                </ul>
                {offer.status === "available" ? (
                  <CheckoutButton programSlug={offer.slug} />
                ) : (
                  <Pill as="a" href="/contact" variant="ghost">
                    В лист ожидания
                  </Pill>
                )}
              </EditorialPanel>
            ))}
          </PlatformGrid>
        </PlatformBand>

        <PlatformBand tone="cream">
          <SectionIntro
            kicker="Оплата"
            title="Два платёжных пути, один понятный доступ"
            lead="Stripe должен выдавать права автоматически. Крипто-платёж остаётся assisted checkout: Morgan подтверждает поступление, администратор создаёт заказ и активирует entitlement."
          />
          <PlatformGrid min={280}>
            <EditorialPanel tone="sage">
              <InlineMetric label="карты" value="Stripe Checkout" />
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 19,
                  lineHeight: 1.55,
                  margin: "24px 0 0",
                }}
              >
                После оплаты webhook синхронизирует подписку и активирует ключ
                доступа к программе.
              </p>
            </EditorialPanel>
            <EditorialPanel tone="rose">
              <InlineMetric label="crypto" value="ручная активация" />
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 19,
                  lineHeight: 1.55,
                  margin: "24px 0 0",
                }}
              >
                Клиент получает инструкции, Morgan подтверждает оплату, а
                админ выдаёт тот же entitlement, что и после Stripe.
              </p>
            </EditorialPanel>
          </PlatformGrid>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
