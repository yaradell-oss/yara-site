"use client";

import { useMemo, useState } from "react";
import { Pill } from "../Primitives";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function ConciergeClient() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Я здесь как первый контур сопровождения. Спросите про неделю, рецепт, ритуал или замену продукта — отвечу только из материалов, которые открыты вашему профилю.",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const canSubmit = useMemo(() => input.trim().length > 2 && !isLoading, [input, isLoading]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canSubmit) return;

    const question = input.trim();
    setInput("");
    setIsLoading(true);
    setMessages((current) => [
      ...current,
      { role: "user", content: question },
      { role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/concierge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });

      if (!response.body) {
        throw new Error("No response stream");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((current) => {
          const next = [...current];
          next[next.length - 1] = { role: "assistant", content: assistantText };
          return next;
        });
      }
    } catch {
      setMessages((current) => {
        const next = [...current];
        next[next.length - 1] = {
          role: "assistant",
          content:
            "Сейчас я не могу ответить из чата. Вопрос можно передать в эскалацию, чтобы его разобрали в рабочем контуре.",
        };
        return next;
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "minmax(360px, 1fr) auto",
        gap: 24,
      }}
    >
      <div
        style={{
          display: "grid",
          gap: 18,
          alignContent: "start",
          minHeight: 360,
          maxHeight: 560,
          overflow: "auto",
          paddingRight: 4,
        }}
      >
        {messages.map((message, index) => (
          <div
            key={`${message.role}-${index}`}
            style={{
              justifySelf: message.role === "user" ? "end" : "start",
              maxWidth: "78%",
              background:
                message.role === "user" ? "var(--lavender)" : "rgba(250,248,245,0.86)",
              color: message.role === "user" ? "var(--cream)" : "var(--ink)",
              border:
                message.role === "user" ? "none" : "1px solid rgba(93,64,48,0.12)",
              borderRadius: 4,
              padding: "18px 20px",
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              lineHeight: 1.55,
              whiteSpace: "pre-wrap",
            }}
          >
            {message.content || "Agatha думает..."}
          </div>
        ))}
      </div>

      <form
        onSubmit={onSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 14,
          alignItems: "end",
        }}
      >
        <label style={{ display: "grid", gap: 8 }}>
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--ink-soft)",
            }}
          >
            Вопрос к Agatha
          </span>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Например: что приготовить в первую неделю, если не люблю цветную капусту?"
            rows={3}
            style={{
              resize: "vertical",
              minHeight: 92,
              border: "1px solid rgba(93,64,48,0.18)",
              borderRadius: 4,
              background: "var(--cream)",
              color: "var(--ink)",
              padding: 16,
              fontFamily: "var(--font-serif)",
              fontSize: 18,
              lineHeight: 1.45,
            }}
          />
        </label>
        <Pill
          as="button"
          type="submit"
          variant="primary"
          style={{
            minWidth: 148,
            opacity: canSubmit ? 1 : 0.58,
            pointerEvents: canSubmit ? "auto" : "none",
          }}
        >
          {isLoading ? "Пишу..." : "Спросить"}
        </Pill>
      </form>
    </div>
  );
}
