import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import {
  EditorialPanel,
  PlatformBand,
  PlatformGrid,
  PlatformHeader,
  TextLink,
} from "../_components/platform/PlatformPrimitives";
import { requireAdminSession } from "../../lib/platform/access";

const ADMIN_LINKS = [
  ["/admin/programs", "Программы", "Коммерческие предложения, статусы и Stripe feature keys."],
  ["/admin/content", "Контент", "Материалы библиотеки, RAG-чанки и права доступа."],
  ["/admin/orders", "Заказы", "Stripe checkout, подписки и синхронизация entitlements."],
  ["/admin/conversations", "Диалоги", "История concierge и эскалации для внутреннего разбора."],
] as const;

export const metadata = {
  title: "Admin — Яра Делл",
};

export default async function AdminPage() {
  const session = await requireAdminSession("/admin");

  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker={session.isAdmin ? "Admin" : "Admin preview"}
          title="Операционный контур."
          italic="контур"
          lead="Эта зона задаёт структуру будущей панели управления: программы, контент, заказы и диалоги Agatha."
        />
        <PlatformBand tone="lavender">
          <PlatformGrid min={280}>
            {ADMIN_LINKS.map(([href, title, summary]) => (
              <EditorialPanel key={href}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontWeight: 400,
                    fontSize: "clamp(2rem, 3vw, 3rem)",
                    margin: "0 0 16px",
                  }}
                >
                  {title}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: 19,
                    lineHeight: 1.55,
                  }}
                >
                  {summary}
                </p>
                <TextLink href={href}>Открыть</TextLink>
              </EditorialPanel>
            ))}
          </PlatformGrid>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
