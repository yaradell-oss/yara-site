import { createClient } from "@supabase/supabase-js";
import { isSupabaseConfigured, platformEnv } from "./env";

export function getSupabaseAdmin() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  return createClient(
    platformEnv.supabaseUrl!,
    platformEnv.supabaseServiceRoleKey!,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );
}
