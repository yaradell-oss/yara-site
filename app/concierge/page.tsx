import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import {
  EditorialPanel,
  PlatformBand,
  PlatformGrid,
  PlatformHeader,
  SectionIntro,
  SoftTag,
} from "../_components/platform/PlatformPrimitives";
import ConciergeClient from "../_components/platform/ConciergeClient";
import { requirePlatformSession } from "../../lib/platform/access";

export const metadata = {
  title: "Agatha concierge — Яра Делл",
};

export default async function ConciergePage() {
  const session = await requirePlatformSession("/concierge");

  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker={session.isConfigured ? "Agatha concierge" : "Agatha concierge · preview"}
          title="Первый ответ — у Agatha"
          italic="Agatha"
          lead="Concierge отвечает по материалам, которые открыты вашему профилю. Если вопрос выходит за пределы библиотеки, он превращается в аккуратную эскалацию, а не в бесконечный поток сообщений Яре."
        />
        <PlatformBand tone="sage">
          <SectionIntro
            kicker="Subscriber support"
            title="Тёплый чат, но с ясными границами"
            lead="Agatha не заменяет Яру и не раздаёт закрытые материалы. Она помогает пройти программу, находит разрешённые источники и бережно поднимает сложные вопросы в админку."
          />
          <PlatformGrid min={320}>
            <EditorialPanel tone="cream" style={{ padding: 24 }}>
              <ConciergeClient />
            </EditorialPanel>
            <EditorialPanel tone="rose">
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 28 }}>
                <SoftTag>по материалам</SoftTag>
                <SoftTag>с источниками</SoftTag>
                <SoftTag>эскалация</SoftTag>
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 3vw, 3.2rem)",
                  lineHeight: 1.08,
                  margin: "0 0 20px",
                  color: "var(--ink)",
                }}
              >
                Что важно для доверия
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gap: 14,
                  fontFamily: "var(--font-serif)",
                  fontSize: 19,
                  lineHeight: 1.55,
                }}
              >
                <li>— видеть только открытые материалы;</li>
                <li>— отвечать по программе, а не по фантазии модели;</li>
                <li>— говорить на русском, спокойно и конкретно;</li>
                <li>— возвращать к источнику в библиотеке;</li>
                <li>— передавать сложный вопрос человеку.</li>
              </ul>
            </EditorialPanel>
          </PlatformGrid>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
