import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../../lib/platform/supabase";
import { platformEnv } from "../../../../lib/platform/env";
import { getStripe } from "../../../../lib/platform/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const stripe = getStripe();
  const body = await request.text();
  const signature = (await headers()).get("stripe-signature");

  if (!stripe || !platformEnv.stripeWebhookSecret || !signature) {
    return NextResponse.json({ received: false, reason: "webhook_not_configured" }, { status: 200 });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, platformEnv.stripeWebhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (supabase) {
    await supabase.from("audit_events").insert({
      event_type: `stripe.${event.type}`,
      actor_type: "stripe",
      payload: event as unknown as Record<string, unknown>,
    });
  }

  if (event.type === "entitlements.active_entitlement_summary.updated" && supabase) {
    const summary = event.data.object as {
      customer?: string;
      entitlements?: { data?: Array<{ lookup_key?: string }> };
    };
    const lookupKeys = summary.entitlements?.data?.map((item) => item.lookup_key).filter(Boolean) || [];

    await supabase.from("subscriptions").upsert(
      {
        stripe_customer_id: summary.customer,
        status: "entitlements_updated",
        active_entitlements: lookupKeys,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "stripe_customer_id" },
    );
  }

  return NextResponse.json({ received: true });
}
