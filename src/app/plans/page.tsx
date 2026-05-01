import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { TrackedExternalLink } from "@/components/analytics/TrackedLink";
import { WHATSAPP_URL, SITE_URL } from "@/utils/constants";
import PlanTabs from "./PlanTabs";

export const metadata: Metadata = {
  title: "Fruit Bowl & Juice Subscription Plans in Ahmedabad – From ₹79/serve",
  description:
    "Daily fruit bowl, cold-pressed juice, and combo subscription plans in Ahmedabad. Trial from ₹99/serve, weekly from ₹89, monthly from ₹79. Free delivery, pause anytime, order on WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/plans/`,
  },
  openGraph: {
    title: "Fruit Bowl & Juice Subscription Plans in Ahmedabad | Nothing But Healthy",
    description:
      "9 plans across Fruit Bowls, Juices and Combo. From ₹79/juice, ₹119/bowl. Hand-cut and slow-pressed every morning, delivered before 9 AM across Ahmedabad.",
    url: `${SITE_URL}/plans/`,
  },
};

const plansSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Plans", item: `${SITE_URL}/plans/` },
      ],
    },
    {
      "@type": "Product",
      name: "Fruit Bowl Subscription Plans – Ahmedabad",
      description:
        "Daily fruit bowl subscription plans delivered fresh across Ahmedabad. Trial, weekly and monthly tiers.",
      brand: { "@type": "Brand", name: "Nothing But Healthy" },
      category: "Fruit subscription",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "119",
        highPrice: "149",
        offerCount: "3",
        availability: "https://schema.org/InStock",
        offers: [
          {
            "@type": "Offer",
            name: "Fruit Bowl 2-Day Trial",
            price: "149",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "149",
              priceCurrency: "INR",
              unitText: "per bowl",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Weekly Bloom Fruit Bowl Plan",
            price: "129",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "129",
              priceCurrency: "INR",
              unitText: "per bowl",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Monthly Harvest Fruit Bowl Plan",
            price: "119",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "119",
              priceCurrency: "INR",
              unitText: "per bowl",
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@type": "Product",
      name: "Cold-Pressed Juice Subscription Plans – Ahmedabad",
      description:
        "Daily cold-pressed juice subscription plans delivered fresh across Ahmedabad. Trial, weekly and monthly tiers.",
      brand: { "@type": "Brand", name: "Nothing But Healthy" },
      category: "Juice subscription",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "79",
        highPrice: "99",
        offerCount: "3",
        availability: "https://schema.org/InStock",
        offers: [
          {
            "@type": "Offer",
            name: "Juice 2-Day Trial",
            price: "99",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "99",
              priceCurrency: "INR",
              unitText: "per serve",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Weekly Reset Juice Plan",
            price: "89",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "89",
              priceCurrency: "INR",
              unitText: "per serve",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Monthly Detox Juice Plan",
            price: "79",
            priceCurrency: "INR",
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "79",
              priceCurrency: "INR",
              unitText: "per serve",
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },
    },
    {
      "@type": "Product",
      name: "Bowl + Juice Combo Subscription Plans – Ahmedabad",
      description:
        "Daily fruit bowl + cold-pressed juice combo subscription plans across Ahmedabad. Save up to 15% versus single orders.",
      brand: { "@type": "Brand", name: "Nothing But Healthy" },
      category: "Combo subscription",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "169",
        highPrice: "209",
        offerCount: "3",
        availability: "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      // Lets AI answer engines speak the FAQ aloud / quote it directly.
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#faq"],
      },
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a daily fruit subscription cost in Ahmedabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nothing But Healthy fruit bowl subscriptions start at ₹119 per bowl on the Monthly Harvest plan (26 days, excluding Sundays). Weekly is ₹129 per bowl and the 2-day trial is ₹149 per bowl. All plans include free delivery across Ahmedabad before 9 AM.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a cold-pressed juice subscription cost in Ahmedabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cold-pressed juice subscriptions start at ₹79 per serve on the Monthly Detox plan. Weekly is ₹89 per serve and the 2-day trial is ₹99 per serve. Each serve is 300ml, slow-pressed every morning at our Ahmedabad kitchen.",
          },
        },
        {
          "@type": "Question",
          name: "Is the bowl + juice combo plan worth it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. The combo plan saves you up to 15% versus ordering a bowl and juice separately. Monthly Vitality combo is ₹169 per day for 1 bowl + 1 juice, saving roughly ₹752 per month compared to two single-track monthly plans.",
          },
        },
        {
          "@type": "Question",
          name: "Why does the monthly plan exclude Sundays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our kitchen and farm partners take Sundays off so produce is at peak freshness Monday through Saturday. The monthly plan reflects 26 active delivery days. If you'd like Sunday delivery, just message us on WhatsApp and we can arrange it as an add-on.",
          },
        },
        {
          "@type": "Question",
          name: "Can I pause my subscription if I'm travelling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Pause your plan anytime from the dashboard or with a single WhatsApp message. Paused days are automatically credited to your next billing cycle — no questions, no penalties, no expiry.",
          },
        },
        {
          "@type": "Question",
          name: "Do I have to commit to a contract?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No lock-ins. Cancel anytime, no penalties, no auto-renew traps. Most subscribers start with our 2-day trial to taste the difference before upgrading to weekly or monthly.",
          },
        },
        {
          "@type": "Question",
          name: "How do I order a Nothing But Healthy plan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Click any plan's 'Start My Healthy Life' button. It opens WhatsApp with your selected plan pre-filled — just hit send. Our team confirms your delivery address and starts your plan from the next morning.",
          },
        },
      ],
    },
  ],
};

export default function PlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plansSchema) }}
      />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Plans" }]} />

      {/* Hero */}
      <section className="relative px-6 md:px-12 mb-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          <div className="md:col-span-6 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Fruit Bowls · Juices · Combo Plans
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-on-background mb-8 tracking-tighter">
              Healthy living, <br />
              <span className="text-primary italic">delivered.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
              Pick a 2-day trial, a weekly habit, or a full monthly programme.
              Three tracks, nine plans — every one of them ends with a fresh
              bowl or juice at your Ahmedabad door before 9 AM. New here?{" "}
              <Link href="/menu" className="text-primary font-bold hover:underline">
                Browse today&apos;s menu
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-primary font-bold hover:underline">
                check delivery zones
              </Link>{" "}
              first.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#pricing"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full text-lg active:scale-95 transition-transform inline-flex items-center gap-2"
              >
                See plans
                <MaterialIcon icon="arrow_downward" size="20px" />
              </Link>
              <TrackedExternalLink
                href={WHATSAPP_URL}
                eventParams={{ source: "plans-hero" }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary-container text-on-secondary-container font-bold rounded-full text-lg active:scale-95 transition-transform"
              >
                <MaterialIcon icon="chat" filled size="20px" />
                WhatsApp us
              </TrackedExternalLink>
            </div>
            <p className="text-xs text-outline mt-6 uppercase tracking-widest">
              Pause or cancel anytime · No lock-in · Free delivery in Ahmedabad
            </p>
          </div>

          <div className="md:col-span-6 relative h-[380px] sm:h-[500px] md:h-[700px]">
            <div className="absolute inset-0 bg-primary-fixed rounded-[2rem] -rotate-3 translate-x-4 translate-y-4" />
            <Image
              src="https://images.unsplash.com/photo-1530439499745-676032f789c1?w=1200&h=1400&fit=crop&auto=format&q=80"
              alt="Pure fruit smoothie bowl with banana, strawberry, raspberry and chia seeds — Nothing But Healthy fruit subscription plans delivered in Ahmedabad"
              fill
              unoptimized
              className="object-cover rounded-[2rem] shadow-2xl"
              priority
            />

            <div className="hidden md:flex absolute -left-6 bottom-16 bg-surface-container-lowest rounded-2xl p-5 shadow-xl items-center gap-4 z-20">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center">
                <MaterialIcon icon="eco" className="text-white" size="24px" />
              </div>
              <div>
                <p className="font-bold text-sm text-on-surface">
                  Fresh &amp; Nutritious
                </p>
                <p className="text-xs text-on-surface-variant">Prepared daily before 5 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison strip */}
      <section className="px-6 md:px-12 mb-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { stat: "9", label: "Subscription plans" },
            { stat: "₹79", label: "Lowest price / serve" },
            { stat: "Before 9 AM", label: "Daily delivery window" },
            { stat: "0%", label: "Lock-in or auto-renew" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-primary tracking-tighter">
                {item.stat}
              </p>
              <p className="text-on-surface-variant text-sm mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Plan tracks (interactive) */}
      <PlanTabs />

      {/* Promise of Purity Bento */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-[2rem] p-8 md:p-14 relative overflow-hidden">
              <h2 className="text-[2.5rem] font-bold tracking-tight mb-4">
                The Promise of Purity
              </h2>
              <p className="text-on-surface-variant leading-relaxed max-w-xl mb-8">
                Every bowl and bottle we deliver is crafted from locally
                sourced, seasonal Gujarat produce — free of preservatives,
                refined sugars, artificial colors, and heat treatment. What
                reaches your table is nothing but honest, wholesome food.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-xs uppercase tracking-wider">
                  Cut Same Morning
                </span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs uppercase tracking-wider">
                  Slow-Pressed
                </span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold text-xs uppercase tracking-wider">
                  Zero Preservatives
                </span>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-[0.07]">
                <MaterialIcon
                  icon="eco"
                  className="text-primary"
                  size="16rem"
                />
              </div>
            </div>

            <div className="md:col-span-4 bg-primary rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[280px] text-white">
              <MaterialIcon icon="local_shipping" className="text-4xl" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Daily Fresh Delivery
                </h3>
                <p className="text-primary-fixed text-sm leading-relaxed">
                  Dispatched every morning from our Ahmedabad cloud kitchen and
                  delivered before 9 AM across all major Ahmedabad pin codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low scroll-mt-24"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase text-[12px] tracking-widest mb-4">
              Plan FAQ
            </p>
            <h2 className="text-4xl font-extrabold tracking-tighter">
              Everything about pricing &amp; delivery.
            </h2>
            <p className="text-on-surface-variant text-sm mt-3">
              Still researching?{" "}
              <Link
                href="/blog/fruit-subscription-ahmedabad-guide"
                className="text-primary font-bold underline-offset-2 hover:underline"
              >
                Read the complete fruit subscription guide
              </Link>
              .
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                How much does a daily fruit subscription cost in Ahmedabad?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180 shrink-0 ml-3"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Fruit bowl plans start at <strong>₹119/bowl</strong> on the
                Monthly Harvest plan (26 days, ₹3,094/month). Weekly Bloom is
                ₹129/bowl (₹903/week) and the 2-day trial is ₹149/bowl. All
                plans include free delivery across Ahmedabad before 9 AM.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                How much does a cold-pressed juice subscription cost?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180 shrink-0 ml-3"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Juice plans start at <strong>₹79/serve</strong> on the Monthly
                Detox plan (₹2,054/month). Weekly Reset is ₹89/serve and the
                2-day trial is ₹99/serve. Each serve is 300ml, slow-pressed
                every morning at our Ahmedabad kitchen.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                Is the bowl + juice combo plan worth it?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180 shrink-0 ml-3"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Yes — combo plans save up to <strong>15%</strong> versus
                ordering a bowl and juice separately. The Monthly Vitality
                combo is ₹169/day for 1 bowl + 1 juice, saving roughly ₹752 a
                month compared to two single-track monthly plans.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                Why does the monthly plan exclude Sundays?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180 shrink-0 ml-3"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Our kitchen and farm partners take Sundays off so produce is at
                peak freshness Monday through Saturday. The monthly plan
                reflects 26 active delivery days. Need Sunday delivery? Message
                us on WhatsApp — we can usually arrange it as an add-on.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                Can I pause my subscription?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180 shrink-0 ml-3"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Anytime. Pause from your dashboard or one WhatsApp message.
                Paused days are credited to your next billing cycle — no
                questions, no penalties, no expiry.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                How do I order?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180 shrink-0 ml-3"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Click <em>Start My Healthy Life</em> on any plan. It opens
                WhatsApp with your chosen plan pre-filled — just hit send. Our
                team confirms your delivery address and your first bowl arrives
                the next morning.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-5xl mx-auto bg-primary-container rounded-[3rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-8 tracking-tighter">
              Still deciding? Try 2 days for ₹198.
            </h2>
            <p className="text-on-primary-container text-xl mb-12 max-w-2xl mx-auto">
              Two cold-pressed juices delivered tomorrow morning. No
              commitment, no auto-renew. Taste the difference before you
              subscribe.
            </p>
            <TrackedExternalLink
              href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                "Hi Nothing But Healthy! I'd like to start the *Juice 2-Day Trial* (₹99/serve, ₹198 total). Please help me get set up."
              )}`}
              eventName="subscribe_intent"
              eventParams={{
                source: "plans-trial-cta",
                item: "Juice 2-Day Trial",
                value: 99,
              }}
              className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform"
            >
              <MaterialIcon icon="chat" filled size="22px" />
              Start My Healthy Life
            </TrackedExternalLink>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
}
