"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { WHATSAPP_URL } from "@/utils/constants";
import { trackEvent } from "@/utils/analytics";

const STORAGE_KEY = "nbh-welcome-banner-dismissed-v1";
const APPEAR_DELAY_MS = 1500;

const offerMessage =
  "Hi Nothing But Healthy! I'm a first-time customer and would like to claim the *₹50 off* on my 2-day trial. Please help me set it up.";

/** Dismissible first-visit incentive banner.
 *
 *  - Sticks to the bottom on mobile, top-right on desktop, so it never blocks
 *    primary content.
 *  - Renders only after a 1.5s delay to avoid LCP / CLS impact on Lighthouse.
 *  - Dismissal is persisted in localStorage; we never re-prompt the same
 *    browser. Cleared by editing devtools localStorage if needed.
 */
export default function WelcomeBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // private mode / quota — fail closed (banner shown once per session).
    }
    if (dismissed) return;
    const id = window.setTimeout(() => setVisible(true), APPEAR_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  const persistDismissal = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore storage failures
    }
  };

  const dismiss = () => {
    setVisible(false);
    persistDismissal();
    trackEvent("welcome_offer_dismissed");
  };

  const claim = () => {
    setVisible(false);
    persistDismissal();
    trackEvent("welcome_offer_claimed");
    trackEvent("whatsapp_click", {
      source: "welcome-banner",
      item: "First-time ₹50 off trial",
      value: 248,
    });
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="First-time customer offer"
      className="fixed inset-x-3 bottom-64 z-40 md:left-auto md:right-6 md:bottom-6 md:max-w-sm"
    >
      <div className="relative bg-on-surface text-surface rounded-2xl shadow-2xl p-4 md:p-5 pr-10 flex gap-3 items-start">
        <div className="w-10 h-10 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
          <MaterialIcon icon="redeem" filled size="20px" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] uppercase tracking-widest opacity-70 font-bold mb-1">
            First-time offer
          </p>
          <p className="text-sm font-extrabold mb-1 leading-tight">
            ₹50 off your 2-day trial
          </p>
          <p className="text-xs opacity-80 leading-relaxed mb-3">
            New to Nothing But Healthy? Try a 2-day fruit-bowl trial for{" "}
            <span className="line-through opacity-60">₹298</span>{" "}
            <strong className="opacity-100">₹248</strong>. Pause or cancel
            anytime.
          </p>
          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(offerMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={claim}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-tertiary text-on-tertiary text-xs font-extrabold cursor-pointer hover:opacity-90"
            >
              <MaterialIcon icon="chat" filled size="14px" />
              Claim on WhatsApp
            </a>
            <Link
              href="/plans"
              onClick={dismiss}
              className="text-xs font-bold underline-offset-2 hover:underline opacity-80 cursor-pointer"
            >
              See all plans
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss offer"
          className="absolute top-2 right-2 w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center cursor-pointer"
        >
          <MaterialIcon icon="close" size="16px" />
        </button>
      </div>
    </div>
  );
}
