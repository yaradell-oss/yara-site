import { SignUp } from "@clerk/nextjs";
import { isClerkConfigured } from "../../../lib/platform/env";
import Nav from "../../_components/Nav";
import Footer from "../../_components/Footer";
import { EditorialPanel, PlatformBand, PlatformHeader } from "../../_components/platform/PlatformPrimitives";

export const metadata = {
  title: "Регистрация — Яра Делл",
};

export default function SignUpPage() {
  if (!isClerkConfigured()) {
    return (
      <>
        <Nav />
        <main>
          <PlatformHeader
            kicker="Регистрация · preview"
            title="Ключи Clerk ожидаются."
            italic="Clerk"
            lead="После настройки Clerk здесь будет регистрация подписчиков и покупателей программ."
          />
          <PlatformBand tone="sage">
            <EditorialPanel>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22 }}>
                Preview-режим оставляет маршруты проверяемыми без публикации секретов в репозитории.
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
      <SignUp />
    </div>
  );
}
