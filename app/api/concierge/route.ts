import { streamText } from "ai";
import { z } from "zod";
import { getPlatformSession } from "../../../lib/platform/access";
import {
  createSupportHandoff,
  getUserEntitlements,
  searchAllowedContent,
  summarizeProgramStep,
} from "../../../lib/platform/concierge";
import { platformEnv } from "../../../lib/platform/env";

export const runtime = "nodejs";

const RequestSchema = z.object({
  message: z.string().min(1).max(2000),
});

export async function POST(request: Request) {
  const payload = RequestSchema.safeParse(await request.json());
  if (!payload.success) {
    return new Response("Некорректный вопрос.", { status: 400 });
  }

  const session = await getPlatformSession();
  if (session.isConfigured && !session.userId) {
    return new Response("Необходим вход в личный кабинет.", { status: 401 });
  }
  const question = payload.data.message;
  const allowedContent = searchAllowedContent(session, question);
  const entitlements = getUserEntitlements(session);

  const context = [
    `Пользователь: ${session.displayName}`,
    `Активные права: ${entitlements.map((item) => item.lookupKey).join(", ") || "нет"}`,
    `Доступные источники:\n${allowedContent
      .map((item) => `- ${item.title}: ${item.summary} [${item.sourceLabel}]`)
      .join("\n")}`,
    `Сводка Цветущий Сад · Сезон 2:\n${summarizeProgramStep(session, "blooming-garden-v2")}`,
  ].join("\n\n");

  if (!process.env.VERCEL_OIDC_TOKEN && !process.env.OPENAI_API_KEY && !process.env.AI_GATEWAY_API_KEY) {
    return streamFallback(question, context, session.isConfigured);
  }

  const result = streamText({
    model: platformEnv.aiModel,
    system:
      "Ты Agatha, concierge Яры Делл. Отвечай по-русски, тепло и точно. Используй только переданный контекст и права доступа. Если данных недостаточно или вопрос требует Яры, предложи эскалацию. Не раскрывай материалы, к которым нет доступа.",
    prompt: `Контекст:\n${context}\n\nВопрос подписчика:\n${question}`,
  });

  return result.toTextStreamResponse();
}

function streamFallback(question: string, context: string, configured: boolean) {
  const handoff = createSupportHandoff(question, {
    userId: "preview-user",
    email: "preview@yara.local",
    displayName: "Preview subscriber",
    organizationId: null,
    isConfigured: configured,
    isAdmin: false,
    entitlements: [],
  });
  const text = [
    "Я могу ответить только из доступных материалов.",
    "",
    context.includes("Доступные источники:\n-")
      ? "По вашему доступу вижу материалы программы «Цветущий Сад». Начните с вводного файла и первой недели: там собраны ритм утра, подготовка кухни и базовая логика микробиоты."
      : "Сейчас у профиля нет активных материалов, поэтому я не раскрываю содержимое программы.",
    "",
    `Если вопрос требует человека, статус эскалации: ${handoff.status}.`,
  ].join("\n");

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      for (const chunk of text.match(/.{1,72}(\s|$)/g) || [text]) {
        controller.enqueue(encoder.encode(chunk));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
