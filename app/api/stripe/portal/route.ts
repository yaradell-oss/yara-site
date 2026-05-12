import { NextResponse } from "next/server";
import { platformEnv } from "../../../../lib/platform/env";
import { getStripe } from "../../../../lib/platform/stripe";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const stripe = getStripe();
  const formData = await request.formData();
  const customerId = String(formData.get("customerId") || "");

  if (!stripe || !customerId) {
    return NextResponse.redirect(new URL("/account?portal=not-configured", platformEnv.appUrl));
  }

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: platformEnv.stripePortalReturnUrl,
  });

  return NextResponse.redirect(session.url, { status: 303 });
}
