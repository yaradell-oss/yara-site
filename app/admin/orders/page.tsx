import Footer from "../../_components/Footer";
import Nav from "../../_components/Nav";
import {
  EditorialPanel,
  PlatformBand,
  PlatformHeader,
} from "../../_components/platform/PlatformPrimitives";
import { requireAdminSession } from "../../../lib/platform/access";

export const metadata = {
  title: "Admin · Orders — Яра Делл",
};

export default async function AdminOrdersPage() {
  await requireAdminSession("/admin/orders");
  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker="Admin · Orders"
          title="Stripe как источник прав."
          italic="Stripe"
          lead="Заказы и подписки будут попадать сюда через webhook-синхронизацию. Внутренний доступ хранится отдельно, чтобы сайт быстро проверял права без постоянного запроса к Stripe."
        />
        <PlatformBand tone="rose">
          <EditorialPanel>
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.55 }}>
              Реальная таблица заказов появится после подключения Stripe test mode. Сейчас маршрут фиксирует операционную форму: checkout, portal, webhook, entitlement sync.
            </p>
          </EditorialPanel>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
