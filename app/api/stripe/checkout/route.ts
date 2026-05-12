import { NextResponse } from "next/server";
import { getProgramOffer } from "../../../../lib/platform/catalog";
import { platformEnv } from "../../../../lib/platform/env";
import { getStripe } from "../../../../lib/platform/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const formData = await request.formData();
  const programSlug = String(formData.get("programSlug") || "blooming-garden-v2");
  const program = getProgramOffer(programSlug);
  const stripe = getStripe();

  if (!program) {
    return NextResponse.json({ error: "Unknown program" }, { status: 404 });
  }

  const price = process.env[program.stripePriceEnv];
  if (!stripe || !price) {
    return NextResponse.redirect(new URL(`/pricing?checkout=not-configured`, platformEnv.appUrl));
  }

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price, quantity: 1 }],
    success_url: `${platformEnv.appUrl}/library/${program.slug}?checkout=success`,
    cancel_url: `${platformEnv.appUrl}/pricing?checkout=cancelled`,
    allow_promotion_codes: true,
    metadata: {
      programSlug: program.slug,
      featureKey: program.featureKey,
    },
  });

  if (!session.url) {
    return NextResponse.json({ error: "Stripe did not return a checkout URL" }, { status: 500 });
  }

  return NextResponse.redirect(session.url, { status: 303 });
}
