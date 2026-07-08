export const FEATURE_KEYS = {
  tasteOfFreedom: "program_taste_of_freedom",
  bloomingGardenV2: "program_blooming_garden_v2",
  evergreenLibrary: "library_evergreen",
  conciergeBasic: "concierge_basic",
  conciergePlus: "concierge_plus",
  adminContentAccess: "admin_content_access",
} as const;

export type FeatureKey = (typeof FEATURE_KEYS)[keyof typeof FEATURE_KEYS];

export type ProgramStatus = "available" | "coming-soon" | "archive";

export interface ProgramOffer {
  slug: string;
  featureKey: FeatureKey;
  stripePriceEnv: string;
  title: string;
  subtitle: string;
  kicker: string;
  summary: string;
  priceLabel: string;
  duration: string;
  format: string;
  status: ProgramStatus;
  libraryHref: string;
  publicHref: string;
  includes: string[];
  coverSrc?: string;
}

export interface ContentItem {
  id: string;
  programSlug: string;
  featureKey: FeatureKey;
  title: string;
  type: "ritual" | "recipe" | "guide" | "video" | "pdf";
  summary: string;
  sourceLabel: string;
  available: boolean;
}

export interface Entitlement {
  lookupKey: FeatureKey;
  label: string;
  active: boolean;
}

export interface PlatformSession {
  userId: string | null;
  email: string | null;
  displayName: string;
  organizationId: string | null;
  isConfigured: boolean;
  isAdmin: boolean;
  entitlements: Entitlement[];
}
