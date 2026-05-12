import { SignIn } from "@clerk/nextjs";
import { isClerkConfigured } from "../../../lib/platform/env";
import Nav from "../../_components/Nav";
import Footer from "../../_components/Footer";
import { EditorialPanel, PlatformBand, PlatformHeader } from "../../_components/platform/PlatformPrimitives";

export const metadata = {
  title: "Вход — Яра Делл",
};

export default function SignInPage() {
  if (!isClerkConfigured()) {
    return (
      <>
        <Nav />
        <main>
          <PlatformHeader
            kicker="Вход · preview"
            title="Clerk ещё не подключён."
            italic="Clerk"
            lead="После добавления ключей Clerk эта страница станет полноценным входом в личный кабинет."
          />
          <PlatformBand tone="rose">
            <EditorialPanel>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22 }}>
                Сейчас сайт работает в preview-режиме, чтобы можно было проверить коммерческие маршруты без секретов.
              </p>
            </EditorialPanel>
          </PlatformBand>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "var(--cream)" }}>
      <SignIn />
    </div>
  );
}
