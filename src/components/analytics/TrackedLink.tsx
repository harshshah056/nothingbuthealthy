"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import {
  trackEvent,
  type AnalyticsEventName,
} from "@/utils/analytics";

interface BaseTrackedProps {
  /** Child node — text, icon, etc. */
  children: ReactNode;
  /** className, etc. */
  className?: string;
  /** Analytics event name to fire on click. Defaults to `whatsapp_click`. */
  eventName?: AnalyticsEventName;
  /** Additional analytics params merged into the event payload. */
  eventParams?: Record<string, string | number | boolean | undefined>;
}

type TrackedExternalLinkProps = BaseTrackedProps &
  Omit<ComponentPropsWithoutRef<"a">, "onClick">;

/** External tracked anchor — used for WhatsApp / Instagram / wa.me links.
 *  Always opens in a new tab, always pushes the event to `dataLayer`. */
export function TrackedExternalLink({
  children,
  className,
  eventName = "whatsapp_click",
  eventParams,
  href,
  target = "_blank",
  rel = "noopener noreferrer",
  ...rest
}: TrackedExternalLinkProps) {
  return (
    <a
      {...rest}
      href={href}
      target={target}
      rel={rel}
      className={className}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </a>
  );
}

type TrackedNextLinkProps = BaseTrackedProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, "onClick">;

/** Internal tracked link — used for in-app navigation that we want to count
 *  (e.g. "See Plans" hero CTA so we can attribute conversions). */
export function TrackedInternalLink({
  children,
  className,
  eventName = "view_cart",
  eventParams,
  href,
  ...rest
}: TrackedNextLinkProps) {
  return (
    <Link
      {...rest}
      href={href}
      className={className}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </Link>
  );
}
