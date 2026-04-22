"use client";

import { useState, type CSSProperties } from "react";
import { Kicker, PeonyFloat, Pill } from "./Primitives";

/* ============================================================
   ContactForm — full contact page. Client component.
   ============================================================ */

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange =
    (k: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const inputStyle: CSSProperties = {
    fontFamily: "var(--font-serif)",
    fontSize: 17,
    padding: "14px 22px",
    borderRadius: 999,
    background: "rgba(255,255,255,0.6)",
    border: "1px solid rgba(93,64,48,0.18)",
    color: "var(--ink)",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <section
      style={{ padding: "140px 32px 80px", position: "relative" }}
    >
      <PeonyFloat
        src="/peonies/peony-bloom-rose.svg"
        width={420}
        right={-120}
        top={80}
        opacity={0.25}
        rotate={-6}
      />
      <div
        style={{
          maxWidth: 640,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Kicker color="var(--rose)">Контакт · частная кухня</Kicker>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 400,
            fontSize: "clamp(2.6rem, 5vw, 4rem)",
            lineHeight: 1.08,
            color: "var(--ink)",
            margin: "18px 0 20px",
          }}
        >
          Напишите мне — я{" "}
          <em style={{ color: "var(--rose)", fontWeight: 500 }}>
            отвечаю сама.
          </em>
        </h1>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: 19,
            lineHeight: 1.6,
            color: "var(--ink)",
            maxWidth: "50ch",
            margin: "0 0 40px",
          }}
        >
          Приёмы в Дубае, онлайн-сопровождение, программа для вашей семьи,
          медиа-запросы. Ответ — в течение трёх дней, без автоответчиков.
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
            — спасибо. Я получу ваше письмо сегодня и отвечу в течение трёх
            дней.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}
          >
            <input
              style={inputStyle}
              placeholder="Как к вам обращаться"
              value={form.name}
              onChange={onChange("name")}
              aria-label="Имя"
            />
            <input
              style={inputStyle}
              type="email"
              placeholder="Ваш e-mail"
              value={form.email}
              onChange={onChange("email")}
              aria-label="Email"
            />
            <textarea
              style={{
                ...inputStyle,
                borderRadius: 22,
                minHeight: 160,
                resize: "vertical",
                padding: "18px 22px",
              }}
              placeholder="Расскажите, о чём вы думаете"
              value={form.message}
              onChange={onChange("message")}
              aria-label="Сообщение"
            />
            <div style={{ marginTop: 8 }}>
              <Pill type="submit" variant="primary">
                Отправить письмо
              </Pill>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
