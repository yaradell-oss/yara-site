"use client";

import { useState, type CSSProperties } from "react";
import { Kicker, PeonyFloat, Pill } from "./Primitives";

/* ============================================================
   NewsletterBand — peach gradient, email capture.
   Client component: holds local form state.
   ============================================================ */

export default function NewsletterBand() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const fieldStyle: CSSProperties = {
    fontFamily: "var(--font-serif)",
    fontSize: 17,
    padding: "14px 24px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.65)",
    border: "1px solid rgba(93,64,48,0.22)",
    color: "var(--ink)",
    outline: "none",
    minWidth: 280,
    fontStyle: "normal",
  };

  return (
    <section
      style={{
        background: "var(--band-peach)",
        padding: "140px 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <PeonyFloat
        src="/peonies/peony-bud-rose.svg"
        width={220}
        left={80}
        bottom={60}
        opacity={0.5}
        rotate={-22}
      />
      <PeonyFloat
        src="/peonies/peony-bloom-rose.svg"
        width={420}
        right={-80}
        top={-60}
        opacity={0.35}
        rotate={10}
      />

      <div
        style={{
          maxWidth: 720,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Kicker color="var(--rose)">Воскресные письма</Kicker>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
            lineHeight: 1.1,
            color: "var(--ink)",
            margin: "16px 0 20px",
          }}
        >
          Раз в неделю,{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>негромко.</em>
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 20,
            lineHeight: 1.55,
            color: "var(--ink)",
            maxWidth: "48ch",
            margin: "0 auto 36px",
          }}
        >
          Одна мысль, один рецепт, одна ссылка. Без призывов и без срочности —
          как письмо от подруги, которая хорошо готовит.
        </p>

        {sent ? (
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 20,
              color: "var(--sage)",
            }}
          >
            — готово. Первое письмо придёт в воскресенье.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (email) setSent(true);
            }}
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <input
              type="email"
              placeholder="Ваш e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={fieldStyle}
              aria-label="Email"
            />
            <Pill type="submit" variant="primary">
              Подписаться
            </Pill>
          </form>
        )}

        <div
          style={{
            marginTop: 28,
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 14,
            color: "var(--ink-muted)",
          }}
        >
          отписка — одним кликом, без вопросов.
        </div>
      </div>
    </section>
  );
}
