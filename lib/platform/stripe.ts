import Stripe from "stripe";
import { isStripeConfigured, platformEnv } from "./env";

export function getStripe() {
  if (!isStripeConfigured()) {
    return null;
  }

  return new Stripe(platformEnv.stripeSecretKey!, {
    apiVersion: "2026-04-22.dahlia",
  });
}
