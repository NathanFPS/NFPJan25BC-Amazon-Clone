⚠️ Firebase Deployment Note
---------------------------

This app requires **Firebase Blaze Plan** to support Stripe payments, as Stripe API requests depend on outgoing network access — which is disabled on the Spark (free) plan.

If you're testing this in your own Firebase project:
- You may upgrade to Blaze (you won't be billed unless usage exceeds the free tier).
- Alternatively, use your organization’s Firebase account with Blaze enabled.

The app and payment logic will work as intended once deployed with Blaze. No other changes are necessary.
