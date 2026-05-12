import Footer from "../../_components/Footer";
import Nav from "../../_components/Nav";
import { Kicker } from "../../_components/Primitives";
import {
  EditorialPanel,
  PlatformBand,
  PlatformGrid,
  PlatformHeader,
} from "../../_components/platform/PlatformPrimitives";
import { CONTENT_ITEMS } from "../../../lib/platform/catalog";
import { requireAdminSession } from "../../../lib/platform/access";

export const metadata = {
  title: "Admin · Content — Яра Делл",
};

export default async function AdminContentPage() {
  await requireAdminSession("/admin/content");
  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker="Admin · Content"
          title="Допущенные материалы."
          italic="материалы"
          lead="Только одобренный subscriber-facing контент должен попасть в эту модель и в индекс Agatha. Черновики и служебные файлы остаются за пределами библиотеки."
        />
        <PlatformBand tone="sage">
          <PlatformGrid min={300}>
            {CONTENT_ITEMS.map((item) => (
              <EditorialPanel key={item.id} tone="cream">
                <Kicker color="var(--sage)">{item.type}</Kicker>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 400 }}>
                  {item.title}
                </h2>
                <p style={{ fontFamily: "var(--font-serif)", fontSize: 18, lineHeight: 1.55 }}>
                  {item.summary}
                </p>
                <code style={{ fontFamily: "var(--font-label)", fontSize: 12 }}>
                  {item.featureKey}
                </code>
              </EditorialPanel>
            ))}
          </PlatformGrid>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
