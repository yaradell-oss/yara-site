export const platformEnv = {
  appUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  clerkPublishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  clerkSecretKey: process.env.CLERK_SECRET_KEY,
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  supabaseServiceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
  stripePortalReturnUrl:
    process.env.STRIPE_PORTAL_RETURN_URL || `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/account`,
  adminEmails: (process.env.PLATFORM_ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean),
  aiModel: process.env.AGATHA_AI_MODEL || "openai/gpt-5.4",
};

export function isClerkConfigured() {
  return Boolean(platformEnv.clerkPublishableKey && platformEnv.clerkSecretKey);
}

export function isSupabaseConfigured() {
  return Boolean(platformEnv.supabaseUrl && platformEnv.supabaseServiceRoleKey);
}

export function isStripeConfigured() {
  return Boolean(platformEnv.stripeSecretKey);
}
