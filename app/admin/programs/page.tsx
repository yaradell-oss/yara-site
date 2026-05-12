import Footer from "../../_components/Footer";
import Nav from "../../_components/Nav";
import { Kicker } from "../../_components/Primitives";
import {
  EditorialPanel,
  PlatformBand,
  PlatformGrid,
  PlatformHeader,
} from "../../_components/platform/PlatformPrimitives";
import { PROGRAM_OFFERS } from "../../../lib/platform/catalog";
import { requireAdminSession } from "../../../lib/platform/access";

export const metadata = {
  title: "Admin · Programs — Яра Делл",
};

export default async function AdminProgramsPage() {
  await requireAdminSession("/admin/programs");
  return (
    <>
      <Nav />
      <main>
        <PlatformHeader
          kicker="Admin · Programs"
          title="Коммерческие программы."
          italic="программы"
          lead="Панель отражает будущую модель управления: публичная страница, библиотека, Stripe price env и entitlement feature key."
        />
        <PlatformBand tone="cream">
          <PlatformGrid min={320}>
            {PROGRAM_OFFERS.map((program) => (
              <EditorialPanel key={program.slug}>
                <Kicker color="var(--rose)">{program.status}</Kicker>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: 34, fontWeight: 400 }}>
                  {program.title}
                </h2>
                <dl
                  style={{
                    display: "grid",
                    gap: 12,
                    fontFamily: "var(--font-serif)",
                    fontSize: 18,
                    lineHeight: 1.45,
                  }}
                >
                  <div><dt>Slug</dt><dd>{program.slug}</dd></div>
                  <div><dt>Feature</dt><dd>{program.featureKey}</dd></div>
                  <div><dt>Stripe env</dt><dd>{program.stripePriceEnv}</dd></div>
                </dl>
              </EditorialPanel>
            ))}
          </PlatformGrid>
        </PlatformBand>
      </main>
      <Footer />
    </>
  );
}
