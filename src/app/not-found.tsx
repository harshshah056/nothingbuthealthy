import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { TrackedExternalLink } from "@/components/analytics/TrackedLink";
import { WHATSAPP_URL, SITE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Page not found · Nothing But Healthy",
  description:
    "We couldn't find that page. Browse today's fruit-bowl and cold-pressed juice menu, see daily plans, or message our team on WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  // Tell crawlers not to index the 404 itself but still allow link-following.
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
        <div className="md:col-span-7">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
            404 · Lost in transit
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter leading-[1.05] mb-5">
            That bowl rolled off
            <br />
            <span className="text-primary italic">the delivery cart.</span>
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8 max-w-lg">
            The page you were looking for isn&apos;t here. Don&apos;t leave on
            an empty stomach — pick up where you left off below, or message us
            and we&apos;ll point you to the right thing.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Link
              href="/menu"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full editorial-gradient text-white font-bold text-base active:scale-95 transition-transform"
            >
              <MaterialIcon icon="restaurant_menu" size="20px" />
              See today&apos;s menu
            </Link>
            <Link
              href="/plans"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-base active:scale-95 transition-transform"
            >
              <MaterialIcon icon="redeem" size="20px" />
              Daily plans &amp; pricing
            </Link>
            <TrackedExternalLink
              href={WHATSAPP_URL}
              eventParams={{ source: "404-page" }}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-base active:scale-95 transition-transform"
            >
              <MaterialIcon icon="chat" filled size="20px" />
              Ask on WhatsApp
            </TrackedExternalLink>
          </div>

          <ul className="grid grid-cols-2 gap-2 mt-10 text-sm">
            <li>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <MaterialIcon icon="auto_stories" size="16px" />
                Our story
              </Link>
            </li>
            <li>
              <Link
                href="/corporate"
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <MaterialIcon icon="business" size="16px" />
                Corporate &amp; bulk orders
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <MaterialIcon icon="map" size="16px" />
                Delivery zones in Ahmedabad
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
              >
                <MaterialIcon icon="home" size="16px" />
                Back to home
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-5 relative aspect-square max-w-sm md:max-w-none mx-auto w-full">
          <div className="absolute inset-0 bg-primary-fixed rounded-[2rem] -rotate-3 translate-x-3 translate-y-3" />
          <Image
            src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=900&h=900&fit=crop&auto=format&q=80"
            alt="Fresh fruit bowl with strawberries, blueberries and chia seeds — Nothing But Healthy Ahmedabad"
            fill
            unoptimized
            className="object-cover rounded-[2rem] shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
