import Footer from "../../_components/Footer";
import Nav from "../../_components/Nav";
import {
  EditorialPanel,
  PlatformBand,
  PlatformHeader,
} from "../../_components/platform/PlatformPrimitives";
import { requireAdminSession } from "../../../lib/platform/access";

export const metadata = {
  title: "Admin · Conversations — Яра Делл",
};

export default async function AdminConversationsPage() {
  await requireAdminSession("/admin/conversations");
  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker="Admin · Conversations"
          title="Эскалации без шума."
          italic="Эскалации"
          lead="Agatha должна отвечать сама, а когда не может — создавать аккуратную внутреннюю задачу вместо прямого отвлечения Яры."
        />
        <PlatformBand tone="lavender">
          <EditorialPanel>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.55 }}>
              Следующий слой: список сессий, уровень доступа подписчика, источник вопроса, решение Agatha и статус ручной проверки.
            </p>
          </EditorialPanel>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
