/**
 * Tiny first-party analytics shim.
 *
 * All conversion-relevant clicks across the site funnel through `trackEvent`,
 * which pushes a structured payload onto `window.dataLayer`. That makes the
 * site GTM-ready: drop a single GTM container snippet into the layout and
 * every event below becomes available as a trigger in GA4 / Meta Pixel /
 * Mixpanel etc. without touching component code.
 *
 * We intentionally avoid pulling in a vendor SDK so that:
 *  - the home page LCP stays under control,
 *  - AdBlock / privacy extensions don't break our buttons,
 *  - the static export still works on GitHub Pages.
 *
 * Until GTM is installed, events queue silently in `window.dataLayer`. That's
 * by design — once GTM loads it picks up the queue retroactively.
 */

export type AnalyticsEventName =
  | "whatsapp_click"
  | "add_to_cart"
  | "remove_from_cart"
  | "view_cart"
  | "begin_checkout"
  | "subscribe_intent"
  | "welcome_offer_claimed"
  | "welcome_offer_dismissed"
  | "corporate_inquiry";

interface AnalyticsParams {
  /** Where on the page the event originated, e.g. "menu-quick-order". */
  source?: string;
  /** Human-readable item / plan name when applicable. */
  item?: string;
  /** Item / order value in INR. Used for revenue reporting. */
  value?: number;
  /** Quantity shipped with the event (defaults handled per event). */
  quantity?: number;
  /** Order / cart subtotal at the time of the event (INR). */
  subtotal?: number;
  /** GA4-style currency. Always INR for now. */
  currency?: "INR";
  /** Free-form additional context, kept loose on purpose. */
  [key: string]: string | number | boolean | undefined;
}

interface DataLayerEntry extends AnalyticsParams {
  event: AnalyticsEventName;
  timestamp: number;
}

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
  }
}

/** Push a structured event to `window.dataLayer`. Safe on the server (no-op). */
export function trackEvent(name: AnalyticsEventName, params: AnalyticsParams = {}): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({
      event: name,
      timestamp: Date.now(),
      currency: "INR",
      ...params,
    });
  } catch {
    // Never let analytics throw into UX.
  }
}
