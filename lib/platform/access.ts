import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FEATURE_KEYS, type Entitlement, type FeatureKey, type PlatformSession } from "./types";
import { isClerkConfigured, isSupabaseConfigured, platformEnv } from "./env";
import { getSupabaseAdmin } from "./supabase";

const PREVIEW_ENTITLEMENTS: Entitlement[] = [
  {
    lookupKey: FEATURE_KEYS.bloomingGardenV2,
    label: "Цветущий Сад · Сезон 2",
    active: true,
  },
  {
    lookupKey: FEATURE_KEYS.conciergeBasic,
    label: "Agatha concierge basic",
    active: true,
  },
];

export async function getPlatformSession(): Promise<PlatformSession> {
  if (!isClerkConfigured()) {
    return {
      userId: "preview-user",
      email: "preview@yara.local",
      displayName: "Preview subscriber",
      organizationId: null,
      isConfigured: false,
      isAdmin: true,
      entitlements: PREVIEW_ENTITLEMENTS,
    };
  }

  const session = await auth();
  const user = await currentUser();
  const email = user?.emailAddresses.at(0)?.emailAddress?.toLowerCase() || null;
  const entitlements = await loadEntitlements(session.userId);

  return {
    userId: session.userId,
    email,
    displayName: user?.firstName || user?.fullName || email || "Подписчик",
    organizationId: session.orgId || null,
    isConfigured: true,
    isAdmin: Boolean(email && platformEnv.adminEmails.includes(email)),
    entitlements,
  };
}

export async function requirePlatformSession(returnTo = "/account") {
  const session = await getPlatformSession();
  if (session.isConfigured && !session.userId) {
    redirect(`/sign-in?redirect_url=${encodeURIComponent(returnTo)}`);
  }
  return session;
}

export async function requireAdminSession(returnTo = "/admin") {
  const session = await requirePlatformSession(returnTo);
  if (session.isConfigured && !session.isAdmin) {
    redirect("/account?admin=required");
  }
  return session;
}

export function activeFeatureKeys(session: PlatformSession): FeatureKey[] {
  return session.entitlements
    .filter((entitlement) => entitlement.active)
    .map((entitlement) => entitlement.lookupKey);
}

export function canAccess(session: PlatformSession, featureKey: FeatureKey) {
  return session.isAdmin || activeFeatureKeys(session).includes(featureKey);
}

async function loadEntitlements(userId: string | null): Promise<Entitlement[]> {
  if (!userId || !isSupabaseConfigured()) {
    return [];
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return [];
  }

  const { data, error } = await supabase
    .from("user_entitlements")
    .select("lookup_key, label, active")
    .eq("clerk_user_id", userId)
    .eq("active", true);

  if (error || !data) {
    return [];
  }

  return data.map((row) => ({
    lookupKey: row.lookup_key as FeatureKey,
    label: row.label || row.lookup_key,
    active: Boolean(row.active),
  }));
}
