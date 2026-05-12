import { CONTENT_ITEMS } from "./catalog";
import { activeFeatureKeys, canAccess } from "./access";
import type { PlatformSession } from "./types";

export function getUserEntitlements(session: PlatformSession) {
  return session.entitlements.filter((entitlement) => entitlement.active);
}

export function searchAllowedContent(session: PlatformSession, query: string) {
  const normalized = query.trim().toLowerCase();
  const allowedKeys = activeFeatureKeys(session);

  const accessible = CONTENT_ITEMS.filter((item) => {
    if (!allowedKeys.includes(item.featureKey) && !session.isAdmin) {
      return false;
    }
    return true;
  });

  if (!normalized) {
    return accessible;
  }

  const matched = accessible.filter((item) => {
    if (!normalized) {
      return true;
    }
    return `${item.title} ${item.summary} ${item.sourceLabel}`
      .toLowerCase()
      .includes(normalized);
  });

  return matched.length ? matched : accessible;
}

export function summarizeProgramStep(session: PlatformSession, programSlug: string) {
  const allowed = CONTENT_ITEMS.filter(
    (item) => item.programSlug === programSlug && canAccess(session, item.featureKey),
  );

  if (!allowed.length) {
    return "У вас пока нет доступа к материалам этой программы.";
  }

  return allowed
    .map((item) => `${item.title}: ${item.summary}`)
    .join("\n\n");
}

export function createSupportHandoff(question: string, session: PlatformSession) {
  return {
    status: "queued",
    label: "Эскалация создана",
    message:
      "Я собрала вопрос для внутреннего просмотра. Яра не будет отвлекаться мгновенно; сначала его разберёт рабочий контур Agatha.",
    question,
    userId: session.userId,
    entitlements: getUserEntitlements(session).map((item) => item.lookupKey),
  };
}
