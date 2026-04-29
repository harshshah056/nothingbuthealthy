// Canonical site URL. Override via `NEXT_PUBLIC_SITE_URL` at build time when
// deploying to a different domain. Must NOT include a trailing slash.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://nothingbuthealthy.in";

export const WHATSAPP_NUMBER = "919619896648";
export const WHATSAPP_DISPLAY = "+91 96198 96648";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const INSTAGRAM_HANDLE = "nothing.but.healthy";
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const NAV_LINKS = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Menu", href: "/menu", icon: "restaurant_menu" },
  { label: "Plans", href: "/plans", icon: "calendar_today" },
  { label: "About", href: "/about", icon: "auto_stories" },
  { label: "Corporate", href: "/corporate", icon: "business" },
  { label: "Contact", href: "/contact", icon: "chat" },
] as const;

export const MOBILE_NAV_LINKS = [
  { label: "Home", href: "/", icon: "home" },
  { label: "Menu", href: "/menu", icon: "restaurant_menu" },
  { label: "Plans", href: "/plans", icon: "calendar_today" },
  { label: "Support", href: "/contact", icon: "chat" },
] as const;

export const COMPANY_INFO = {
  name: "Nothing But Healthy",
  tagline: "Fresh & Clean Living",
  email: "corporate@nbhealthy.com",
  phone: WHATSAPP_DISPLAY,
  city: "Ahmedabad",
};
