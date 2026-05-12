import EditorialHero from "./_components/EditorialHero";
import Footer from "./_components/Footer";
import { JournalList } from "./_components/Journal";
import Nav from "./_components/Nav";
import NewsletterBand from "./_components/NewsletterBand";
import { PhilosophyTeaser } from "./_components/Philosophy";
import Programs from "./_components/Programs";
import {
  CheckoutButton,
  EditorialPanel,
  PlatformBand,
  PlatformGrid,
  SectionIntro,
  SoftTag,
  TextLink,
} from "./_components/platform/PlatformPrimitives";
import { COMMERCIAL_MILESTONES } from "../lib/platform/catalog";

const promiseBlocks = [
  {
    title: "Еда без инфопродуктового шума",
    body: "Рецепты идут в рабочем порядке: что купить, что подготовить, что приготовить сегодня и почему это важно для вкуса и микробиоты.",
  },
  {
    title: "Биохимия человеческим языком",
    body: "Полифенолы, ферменты, клетчатка, желчный ритм и ночной отдых объясняются без тревоги и без пустых обещаний.",
  },
  {
    title: "Поддержка внутри платформы",
    body: "Agatha помогает пройти материалы, находит разрешённые источники и бережно отделяет обычный вопрос от вопроса к человеку.",
  },
] as const;

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <EditorialHero />

        <PlatformBand tone="cream" style={{ paddingTop: 56, paddingBottom: 64 }}>
          <SectionIntro
            kicker="Платформа Яры"
            title="Не папка с PDF. Спокойный маршрут через программу."
            lead="Сайт должен сразу объяснять, кто ведёт программу, что получает участница после оплаты и почему это пространство собрано вокруг вкуса, а не вокруг контроля."
          />
          <PlatformGrid min={300}>
            {promiseBlocks.map((item) => (
              <EditorialPanel key={item.title} tone="cream">
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: "clamp(2rem, 3vw, 3rem)",
                    lineHeight: 1.1,
                    margin: "0 0 18px",
                    color: "var(--ink)",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: 19,
                    lineHeight: 1.58,
                    margin: 0,
                    color: "var(--ink-soft)",
                  }}
                >
                  {item.body}
                </p>
              </EditorialPanel>
            ))}
          </PlatformGrid>
        </PlatformBand>

        <Programs />

        <PlatformBand tone="sage" style={{ paddingTop: 70, paddingBottom: 76 }}>
          <SectionIntro
            kicker="Текущий запуск"
            title="Цветущий Сад · Сезон 2"
            lead="21 день для микробиоты: три недели, подготовительные дни, рецепты, ритуалы, объяснения и личный кабинет. Это первая программа, которую выводим как коммерческий платформенный продукт."
          />
          <div
            className="feature-split"
            style={{
              display: "grid",
              gridTemplateColumns: "1.05fr 0.95fr",
              gap: 38,
              alignItems: "stretch",
            }}
          >
            <EditorialPanel tone="cream">
              <SoftTag>Корни · Ствол · Крона</SoftTag>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(2.35rem, 4vw, 4.2rem)",
                  lineHeight: 1.04,
                  margin: "30px 0 20px",
                  color: "var(--ink)",
                }}
              >
                Программа начинается с кухни, а не с силы воли
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: 21,
                  lineHeight: 1.58,
                  margin: "0 0 32px",
                  color: "var(--ink)",
                  maxWidth: "44ch",
                }}
              >
                Участница видит не хаос файлов, а понятную неделю: что купить,
                что приготовить, чем поддержать пищеварение и где спросить
                Agatha, если что-то пошло не по плану.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <CheckoutButton label="Открыть доступ" />
                <TextLink href="/programs/blooming-garden">
                  Смотреть программу
                </TextLink>
              </div>
            </EditorialPanel>

            <EditorialPanel tone="rose">
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 3vw, 3.25rem)",
                  lineHeight: 1.1,
                  margin: "0 0 22px",
                  color: "var(--ink)",
                }}
              >
                После оплаты внутри
              </h3>
              <ul
                className="editorial-list"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 19,
                  lineHeight: 1.55,
                  color: "var(--ink)",
                }}
              >
                {[
                  "закрытая библиотека Сезона 2;",
                  "недели Корни, Ствол и Крона;",
                  "ежедневные PDF и дополнительные материалы;",
                  "Agatha concierge с границами доступа;",
                  "личный кабинет без лишнего шума.",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </EditorialPanel>
          </div>
        </PlatformBand>

        <PlatformBand tone="cream" style={{ paddingTop: 70, paddingBottom: 40 }}>
          <SectionIntro
            kicker="Коммерческая архитектура"
            title="Красивый публичный слой, закрытая библиотека, первый контур поддержки"
          />
          <PlatformGrid min={300}>
            {COMMERCIAL_MILESTONES.map((item) => (
              <EditorialPanel key={item.title} tone="cream">
                <SoftTag>{item.title}</SoftTag>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: 19,
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

        <PhilosophyTeaser />
        <JournalList limit={3} />
        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
