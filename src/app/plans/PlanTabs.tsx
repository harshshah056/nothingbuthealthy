"use client";

import { useState } from "react";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { WHATSAPP_URL } from "@/utils/constants";
import { trackEvent } from "@/utils/analytics";

type Track = "Fruit Bowls" | "Juices" | "Combo";

interface Plan {
  name: string;
  duration: string;
  pricePerUnit: string;
  unit: string;
  totalLabel: string;
  features: string[];
  badge?: string;
  featured?: boolean;
  savings?: string;
  whatsappMessage: string;
}

const fruitBowlPlans: Plan[] = [
  {
    name: "2-Day Trial",
    duration: "2 days",
    pricePerUnit: "149",
    unit: "bowl",
    totalLabel: "₹298 total",
    features: [
      "Try 2 different signature bowls",
      "Hand-cut at 4 AM, delivered before 9 AM",
      "Free delivery anywhere in Ahmedabad",
      "No commitment, no auto-renew",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Fruit Bowl 2-Day Trial* (₹149/bowl, ₹298 total for 2 days). Please help me get set up.",
  },
  {
    name: "Weekly Bloom",
    duration: "7 days",
    pricePerUnit: "129",
    unit: "bowl",
    totalLabel: "₹903 / week",
    badge: "Most Popular",
    featured: true,
    features: [
      "7 different bowls across the week",
      "Free nutritionist consultation",
      "Free delivery, every morning",
      "Pause or swap items anytime",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Weekly Bloom Fruit Bowl Plan* (₹129/bowl, ₹903 total per week). Please help me set it up.",
  },
  {
    name: "Monthly Harvest",
    duration: "26 days · Mon–Sat",
    pricePerUnit: "119",
    unit: "bowl",
    totalLabel: "₹3,094 / month",
    savings: "Save 20% – Best Value",
    features: [
      "26 bowls across the month (excludes Sundays)",
      "Customised dietary mapping",
      "Priority morning delivery slot",
      "Free quarterly health check-in",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Monthly Harvest Fruit Bowl Plan* (₹119/bowl, ₹3,094/month, 26 days excl. Sundays). Please help me set it up.",
  },
];

const juicePlans: Plan[] = [
  {
    name: "2-Day Trial",
    duration: "2 days",
    pricePerUnit: "99",
    unit: "serve",
    totalLabel: "₹198 total",
    features: [
      "Try 2 different cold-pressed juices",
      "Slow-pressed at sunrise, delivered cold",
      "Free delivery anywhere in Ahmedabad",
      "No commitment, no auto-renew",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Juice 2-Day Trial* (₹99/serve, ₹198 total for 2 days). Please help me get set up.",
  },
  {
    name: "Weekly Reset",
    duration: "7 days",
    pricePerUnit: "89",
    unit: "serve",
    totalLabel: "₹623 / week",
    badge: "Most Popular",
    featured: true,
    features: [
      "7 different juices across the week",
      "Free immunity shot every Friday",
      "Free delivery, every morning",
      "Pause or swap juices anytime",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Weekly Reset Juice Plan* (₹89/serve, ₹623 total per week). Please help me set it up.",
  },
  {
    name: "Monthly Detox",
    duration: "26 days · Mon–Sat",
    pricePerUnit: "79",
    unit: "serve",
    totalLabel: "₹2,054 / month",
    savings: "Save 20% – Best Value",
    features: [
      "26 juices across the month (excludes Sundays)",
      "4 free immunity shots / month",
      "Priority morning delivery slot",
      "Personalised juice rotation",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Monthly Detox Juice Plan* (₹79/serve, ₹2,054/month, 26 days excl. Sundays). Please help me set it up.",
  },
];

const comboPlans: Plan[] = [
  {
    name: "2-Day Combo Trial",
    duration: "2 days",
    pricePerUnit: "209",
    unit: "day",
    totalLabel: "₹418 total",
    features: [
      "1 fruit bowl + 1 juice every morning",
      "Save 15% vs ordering separately",
      "Free delivery anywhere in Ahmedabad",
      "No commitment, no auto-renew",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Combo 2-Day Trial* (1 bowl + 1 juice daily, ₹209/day, ₹418 total). Please help me get set up.",
  },
  {
    name: "Weekly Ritual",
    duration: "7 days",
    pricePerUnit: "185",
    unit: "day",
    totalLabel: "₹1,295 / week",
    badge: "Best Combo",
    featured: true,
    features: [
      "7 bowl + juice combos across the week",
      "Free nutritionist consultation",
      "Free delivery, every morning",
      "Save ₹230 / week vs separate orders",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Weekly Combo Ritual* (1 bowl + 1 juice daily, ₹185/day, ₹1,295/week). Please help me set it up.",
  },
  {
    name: "Monthly Vitality",
    duration: "26 days · Mon–Sat",
    pricePerUnit: "169",
    unit: "day",
    totalLabel: "₹4,394 / month",
    savings: "Save ₹752 vs separate plans",
    features: [
      "26 bowl + juice combos (excludes Sundays)",
      "Customised dietary mapping",
      "Priority morning delivery slot",
      "Free quarterly health check-in",
    ],
    whatsappMessage:
      "Hi Nothing But Healthy! I'd like to start the *Monthly Vitality Combo Plan* (1 bowl + 1 juice daily, ₹169/day, ₹4,394/month, 26 days excl. Sundays). Please help me set it up.",
  },
];

const tracks: Record<Track, { plans: Plan[]; copy: string; icon: string }> = {
  "Fruit Bowls": {
    plans: fruitBowlPlans,
    copy: "Hand-cut, seasonal, delivered before 9 AM. The easiest healthy habit you'll ever build.",
    icon: "lunch_dining",
  },
  Juices: {
    plans: juicePlans,
    copy: "Slow-pressed for max nutrient retention. No added sugar, no preservatives, never pasteurised.",
    icon: "local_drink",
  },
  Combo: {
    plans: comboPlans,
    copy: "1 bowl + 1 juice every morning. The complete ritual, with up to 15% off.",
    icon: "restaurant",
  },
};

function whatsappLink(message: string): string {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative rounded-[2rem] p-8 flex flex-col transition-transform hover:-translate-y-1 ${
        plan.featured
          ? "bg-surface-container-lowest ring-4 ring-primary shadow-2xl scale-100 md:scale-105"
          : "bg-surface-container-low editorial-shadow"
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full editorial-gradient text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap">
          {plan.badge}
        </span>
      )}

      <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
      <p className="text-on-surface-variant text-sm mb-6">{plan.duration}</p>

      <div className="flex items-baseline gap-1 mb-1">
        <span className="text-5xl font-extrabold text-primary tracking-tighter">
          ₹{plan.pricePerUnit}
        </span>
        <span className="text-on-surface-variant text-sm">/ {plan.unit}</span>
      </div>
      <p className="text-on-surface-variant text-xs uppercase tracking-widest mb-8">
        {plan.totalLabel}
      </p>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <MaterialIcon
              icon="check_circle"
              filled={plan.featured}
              className="text-primary shrink-0 mt-0.5"
              size="20px"
            />
            <span className="text-on-surface text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {plan.savings && (
        <p className="text-primary font-bold text-sm mb-4 text-center">
          {plan.savings}
        </p>
      )}

      <Link
        href={whatsappLink(plan.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          trackEvent("subscribe_intent", {
            source: "plan-card",
            item: plan.name,
            value: Number(plan.pricePerUnit),
            duration: plan.duration,
          })
        }
        className="flex items-center justify-center gap-2 editorial-gradient text-white font-bold py-3.5 rounded-full hover:opacity-90 transition-opacity"
      >
        <MaterialIcon icon="chat" filled size="18px" />
        Start My Healthy Life
      </Link>
      <p className="text-center text-xs text-outline mt-3">
        Continues your order on WhatsApp
      </p>
    </div>
  );
}

// Savings copy shown above each track's plan cards. Concrete numbers help
// shoppers anchor on the value of going monthly vs single orders.
const trackSavings: Record<Track, string> = {
  "Fruit Bowls":
    "Going monthly saves ₹780 / month vs single bowls (₹3,094 vs ₹3,874).",
  Juices:
    "Going monthly saves ₹520 / month vs single juices (₹2,054 vs ₹2,574).",
  Combo:
    "The Combo monthly saves ₹752 vs running separate bowl + juice plans.",
};

export default function PlanTabs() {
  const [activeTrack, setActiveTrack] = useState<Track>("Fruit Bowls");
  const trackData = tracks[activeTrack];

  // The mobile sticky CTA links to the *featured* plan's WhatsApp deep-link
  // for the currently active track — i.e. one tap to start the most popular
  // option, no need to scroll the cards.
  const featuredPlan =
    trackData.plans.find((p) => p.featured) ?? trackData.plans[0];

  return (
    <section
      id="pricing"
      className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-bold uppercase text-[12px] tracking-widest mb-4">
            Pick Your Plan
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tighter">
            Three tracks, nine plans, one healthy habit.
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Start with a 2-day trial, then scale up. Pause or cancel anytime —
            no lock-ins, no auto-renew traps.
          </p>
        </div>

        {/* Track switcher */}
        <div
          role="tablist"
          aria-label="Plan track"
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-surface-container rounded-full p-1.5 gap-1 flex-wrap justify-center">
            {(Object.keys(tracks) as Track[]).map((track) => (
              <button
                key={track}
                role="tab"
                aria-selected={activeTrack === track}
                onClick={() => setActiveTrack(track)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeTrack === track
                    ? "bg-primary text-on-primary shadow-lg"
                    : "text-on-surface-variant hover:bg-surface-container-high"
                }`}
              >
                <MaterialIcon icon={tracks[track].icon} size="18px" />
                {track}
              </button>
            ))}
          </div>
        </div>

        {/* Savings strip — concrete monetary delta, central to subscription
            conversion. */}
        <div className="max-w-2xl mx-auto mb-10 flex items-center gap-3 px-4 py-3 rounded-full bg-tertiary-container/60 text-on-tertiary-container text-xs sm:text-sm font-bold">
          <MaterialIcon icon="savings" filled size="18px" className="shrink-0" />
          <span className="leading-snug">{trackSavings[activeTrack]}</span>
        </div>

        <p className="text-center text-on-surface-variant max-w-xl mx-auto mb-12">
          {trackData.copy}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center pb-20 md:pb-0">
          {trackData.plans.map((plan) => (
            <PlanCard key={`${activeTrack}-${plan.name}`} plan={plan} />
          ))}
        </div>

        <p className="text-center text-xs text-outline mt-12 max-w-xl mx-auto">
          All plans include carbon-neutral delivery, compostable packaging, and
          a free quarterly health check-in. GST included where applicable.
        </p>
      </div>

      {/* Sticky mobile CTA — converts the most-popular plan with one tap.
          Hidden on md+ where the featured card is fully visible. */}
      <div className="fixed inset-x-3 bottom-20 z-40 md:hidden">
        <Link
          href={whatsappLink(featuredPlan.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            trackEvent("subscribe_intent", {
              source: "plans-sticky-mobile",
              item: featuredPlan.name,
              value: Number(featuredPlan.pricePerUnit),
              track: activeTrack,
            })
          }
          className="w-full flex items-center justify-between gap-3 bg-[#25D366] text-white rounded-full pl-5 pr-2 py-2 shadow-2xl active:scale-[0.99] transition-transform cursor-pointer"
        >
          <span className="flex items-center gap-2 min-w-0">
            <MaterialIcon icon="chat" filled size="20px" />
            <span className="font-bold text-sm truncate">
              Start {activeTrack.toLowerCase()} on WhatsApp
            </span>
          </span>
          <span className="px-3 py-1.5 rounded-full bg-white text-[#25D366] text-xs font-extrabold shrink-0">
            ₹{featuredPlan.pricePerUnit}/{featuredPlan.unit}
          </span>
        </Link>
      </div>
    </section>
  );
}
