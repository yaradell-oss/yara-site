import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/platform/supabase";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad-json" }, { status: 400 });
  }

  const { kind, email, name, message, path } = (body ?? {}) as {
    kind?: string;
    email?: string;
    name?: string;
    message?: string;
    path?: string;
  };

  if (kind !== "newsletter" && kind !== "contact") {
    return NextResponse.json({ ok: false, error: "bad-kind" }, { status: 400 });
  }
  const cleanEmail = (email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(cleanEmail) || cleanEmail.length > 320) {
    return NextResponse.json({ ok: false, error: "bad-email" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    // Attribution cookie (set by the referral layer once it ships) rides along.
    const referralCode =
      request.headers
        .get("cookie")
        ?.match(/(?:^|;\s*)yref=([A-Z0-9-]{3,24})(?:;|$)/)?.[1] ?? null;

    const { error } = await supabase.from("leads").insert({
      kind,
      email: cleanEmail,
      name: (name || "").trim().slice(0, 200) || null,
      message: (message || "").trim().slice(0, 4000) || null,
      source_path: (path || "").slice(0, 300) || null,
      referral_code: referralCode,
    });
    if (error) {
      return NextResponse.json({ ok: false, error: "store" }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
