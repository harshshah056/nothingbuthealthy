import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { TrackedExternalLink } from "@/components/analytics/TrackedLink";
import { SITE_URL, WHATSAPP_URL } from "@/utils/constants";
import { getPost } from "../blogData";

const SLUG = "fruit-subscription-ahmedabad-guide";
const post = getPost(SLUG)!;
const POST_URL = `${SITE_URL}/blog/${SLUG}/`;

export const metadata: Metadata = {
  title: `${post.title} | Nothing But Healthy`,
  description: post.description,
  keywords: [
    "fruit subscription Ahmedabad",
    "daily fruit delivery Ahmedabad",
    "fruit bowl subscription",
    "cold-pressed juice Ahmedabad",
    "healthy breakfast Ahmedabad",
    "morning fruit bowl delivery",
  ],
  alternates: {
    canonical: POST_URL,
  },
  openGraph: {
    type: "article",
    title: post.title,
    description: post.description,
    url: POST_URL,
    publishedTime: post.publishedAt,
    images: [{ url: post.heroImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [post.heroImage],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": POST_URL,
  headline: post.title,
  description: post.description,
  url: POST_URL,
  datePublished: post.publishedAt,
  dateModified: post.publishedAt,
  image: post.heroImage,
  author: {
    "@type": "Organization",
    name: post.author.name,
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Nothing But Healthy",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: POST_URL,
  about: [
    "Daily fruit subscription",
    "Cold-pressed juice",
    "Healthy breakfast",
    "Ahmedabad food delivery",
  ],
  keywords:
    "fruit subscription Ahmedabad, daily fruit bowl delivery, cold-pressed juice, healthy breakfast Ahmedabad",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#faq"],
  },
  mainEntity: [
    {
      "@type": "Question",
      name: "How does a fruit subscription work in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A fruit subscription delivers a freshly cut fruit bowl (and optionally a cold-pressed juice) to your doorstep every morning across Ahmedabad. You pick a plan (trial, weekly, or monthly), share your address and preferred delivery time, and from the next morning onward you receive a chef-cut bowl made from seasonal fruits. Most reputable services in Ahmedabad — including Nothing But Healthy — let you pause, skip or cancel anytime through WhatsApp.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a daily fruit subscription cost in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing in Ahmedabad ranges from roughly ₹119 to ₹329 per fruit bowl, and ₹79 to ₹169 per 300 ml cold-pressed juice. Monthly plans typically save 20% compared to single orders. Nothing But Healthy starts trial bowls at ₹149 and monthly bowls at ₹119 each, with a 2-day juice trial from ₹99 a serving.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas of Ahmedabad are covered by fruit subscriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most Ahmedabad fruit subscription services cover all major residential and commercial pin codes — including Bodakdev, Vastrapur, Satellite, SG Highway, Prahladnagar, Bopal, Thaltej, Navrangpura, CG Road, Paldi, Maninagar, Naranpura, Sabarmati and Chandkheda. Confirm your specific pin code on WhatsApp before subscribing.",
      },
    },
    {
      "@type": "Question",
      name: "How much fruit should I eat daily according to ICMR / WHO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The World Health Organization recommends at least 400 g of fruits and vegetables every day. The ICMR–NIN Dietary Guidelines for Indians (2024) reinforce this, suggesting 2–3 servings of fruit per day with a variety of seasonal Indian fruits for better immunity, gut health and energy. A standard fruit bowl in a daily subscription delivers roughly 200 g — already half the WHO target.",
      },
    },
    {
      "@type": "Question",
      name: "Is a daily fruit subscription worth it for working professionals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most Ahmedabad professionals, yes. The biggest reason urban Indians don't hit the WHO daily fruit goal isn't lack of intent — it's the friction of shopping, washing, peeling and cutting. A subscription removes all four steps. You also avoid impulse-buying processed breakfast foods because the healthy default is already at your door before 9 AM.",
      },
    },
    {
      "@type": "Question",
      name: "What should I look for in a good fruit subscription service in Ahmedabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for: (1) cut-fresh-the-same-morning policy — never pre-cut the night before, (2) clear sourcing transparency (which farms / regions in Gujarat), (3) zero preservatives and no added sugar, (4) flexible WhatsApp-based pause/cancel, (5) delivery before 9 AM so it actually replaces breakfast, and (6) compostable or food-grade packaging.",
      },
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Guides", href: "/blog" },
          { label: "Fruit subscription in Ahmedabad" },
        ]}
      />

      <article className="px-6 md:px-12 max-w-3xl mx-auto pb-16 md:pb-24">
        {/* Article header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 text-xs text-outline mb-4 uppercase tracking-widest">
            <MaterialIcon icon="schedule" size="14px" />
            <span>{post.readingTime} min read</span>
            <span className="opacity-50">·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            <span className="opacity-50">·</span>
            <span>{post.author.name}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[3rem] leading-[1.1] font-extrabold tracking-tighter mb-6">
            {post.title}
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            {post.description}
          </p>
        </header>

        <div className="relative aspect-[16/10] mb-12 rounded-[1.5rem] overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.heroAlt}
            fill
            unoptimized
            priority
            className="object-cover"
          />
        </div>

        {/* Body — using prose-like styling via Tailwind classes for control over
            our brand tokens (we don't ship `@tailwindcss/typography` yet). */}
        <div className="space-y-6 text-on-surface text-base sm:text-[17px] leading-[1.7]">
          <p>
            If you live or work in Ahmedabad, you&apos;ve probably had this
            morning before: alarm at 7:30, no time to eat, a samosa from the
            office canteen at 11, and a 4 PM crash that no amount of chai can
            fix. The simplest fix is also the oldest one in nutrition science —
            <strong> eat fruit, every single morning, before everything
            else</strong>. The hard part isn&apos;t knowing it. The hard part
            is doing it consistently in a city where shopping for produce
            takes 45 minutes, and washing, peeling and cutting takes another
            twenty.
          </p>
          <p>
            That&apos;s the gap a daily{" "}
            <Link href="/plans" className="text-primary font-bold underline-offset-2 hover:underline">
              fruit subscription in Ahmedabad
            </Link>{" "}
            quietly closes. This guide walks you through everything you need
            to know in 2026 — how subscriptions work, what they cost, the WHO
            and ICMR fruit recommendations, what to actually look for in a
            service, and the questions our team gets asked every week.
          </p>

          {/* Table of contents */}
          <nav
            aria-label="In this article"
            className="my-10 p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40"
          >
            <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-3">
              In this guide
            </p>
            <ol className="space-y-2 text-sm font-medium list-decimal list-inside marker:text-primary">
              <li>
                <a
                  href="#what-is-a-fruit-subscription"
                  className="hover:text-primary"
                >
                  What is a fruit subscription, exactly?
                </a>
              </li>
              <li>
                <a href="#why-it-matters" className="hover:text-primary">
                  Why a daily fruit habit matters (with the WHO/ICMR numbers)
                </a>
              </li>
              <li>
                <a href="#what-to-look-for" className="hover:text-primary">
                  What to look for in an Ahmedabad service
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary">
                  Pricing in Ahmedabad in 2026
                </a>
              </li>
              <li>
                <a href="#delivery-zones" className="hover:text-primary">
                  Delivery zones and timing
                </a>
              </li>
              <li>
                <a href="#bowl-vs-juice" className="hover:text-primary">
                  Should you pick a fruit bowl, juice, or combo?
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary">
                  Frequently asked questions
                </a>
              </li>
            </ol>
          </nav>

          <h2
            id="what-is-a-fruit-subscription"
            className="text-2xl md:text-3xl font-extrabold tracking-tight pt-4 scroll-mt-24"
          >
            1. What is a fruit subscription, exactly?
          </h2>
          <p>
            A fruit subscription in Ahmedabad is a recurring morning delivery
            of a chef-cut, ready-to-eat fruit bowl — usually 200–250 grams of
            seasonal fruit, often topped with seeds, nuts or honey. You pay
            once, then receive a fresh bowl every weekday morning (or on the
            schedule you pick), without re-ordering each day.
          </p>
          <p>
            The good ones are <em>cut the same morning</em> in a central
            kitchen between 4 AM and 6 AM, and dispatched on bike-led routes
            to land at your door before 9 AM. Most services let you choose
            between a fruit bowl, a 300 ml cold-pressed juice, or both, and
            the better operators let you pause, skip or cancel by WhatsApp at
            any time — no auto-renew traps, no app to install.
          </p>

          <h2
            id="why-it-matters"
            className="text-2xl md:text-3xl font-extrabold tracking-tight pt-4 scroll-mt-24"
          >
            2. Why a daily fruit habit matters
          </h2>
          <p>
            The numbers from the people who get to set the rules:
          </p>
          <ul className="space-y-2 list-disc list-outside ml-6">
            <li>
              <strong>WHO Healthy Diet (2020 update):</strong> consume at
              least <strong>400 g of fruits and vegetables daily</strong> —
              equivalent to roughly 2–3 servings of fruit on top of vegetables.
            </li>
            <li>
              <strong>ICMR–NIN Dietary Guidelines for Indians (2024):</strong>{" "}
              recommends <strong>2–3 servings of seasonal fruit per day</strong>{" "}
              for better immunity, gut health and energy management — and
              specifically calls out variety across the week.
            </li>
            <li>
              <strong>Gap reality:</strong> peer-reviewed studies on urban
              Indians repeatedly show average intake well below the
              recommendation, with most professionals between 25 and 40 eating
              fruit fewer than three times a week.
            </li>
          </ul>
          <p>
            One{" "}
            <Link href="/menu" className="text-primary font-bold underline-offset-2 hover:underline">
              standard NBH fruit bowl
            </Link>{" "}
            delivers ~200 g — already half the WHO daily target before you
            even sit down to lunch. It&apos;s the single highest-leverage food
            decision you can make in your morning.
          </p>

          <h2
            id="what-to-look-for"
            className="text-2xl md:text-3xl font-extrabold tracking-tight pt-4 scroll-mt-24"
          >
            3. What to look for in an Ahmedabad service
          </h2>
          <p>
            Six checks that separate a real fruit subscription from a glorified
            tiffin service:
          </p>
          <ol className="space-y-3 list-decimal list-outside ml-6">
            <li>
              <strong>Same-morning cutting.</strong> Ask if the bowls are cut
              the night before. Anything pre-cut more than 6 hours in advance
              loses water-soluble vitamins and starts oxidising.
            </li>
            <li>
              <strong>Sourcing transparency.</strong> Reputable services name
              the regions: alphonsos from Valsad, pomegranate from Saurashtra,
              papaya from local cooperatives. Vague answers (&quot;market
              fresh&quot;) are a red flag.
            </li>
            <li>
              <strong>Zero preservatives, zero added sugar.</strong> A sealed
              fruit bowl needs neither, and any service that uses them is
              cutting corners on freshness.
            </li>
            <li>
              <strong>Flexible WhatsApp pause/cancel.</strong> The whole point
              is a habit you can adjust around travel and busy weeks. Look for
              48-hour pause windows with no penalty.
            </li>
            <li>
              <strong>Delivery before 9 AM.</strong> If it lands at noon,
              it&apos;s not a breakfast subscription — it&apos;s a snack
              service.
            </li>
            <li>
              <strong>Compostable or food-grade packaging.</strong> Glass jars
              for juice and compostable bowls for fruit are the floor in 2026,
              not a luxury.
            </li>
          </ol>

          <h2
            id="pricing"
            className="text-2xl md:text-3xl font-extrabold tracking-tight pt-4 scroll-mt-24"
          >
            4. Pricing in Ahmedabad in 2026
          </h2>
          <p>
            Pricing has stabilised across most Ahmedabad operators in 2026.
            Here&apos;s the realistic range you should expect:
          </p>
          <div className="overflow-x-auto -mx-2">
            <table className="w-full text-sm border border-outline-variant/40 rounded-xl overflow-hidden">
              <thead className="bg-surface-container">
                <tr>
                  <th className="text-left px-4 py-3 font-bold">Plan</th>
                  <th className="text-left px-4 py-3 font-bold">Per bowl</th>
                  <th className="text-left px-4 py-3 font-bold">Per juice</th>
                  <th className="text-left px-4 py-3 font-bold">Lock-in</th>
                </tr>
              </thead>
              <tbody className="bg-surface-container-lowest">
                <tr className="border-t border-outline-variant/30">
                  <td className="px-4 py-3 font-bold">Trial (2 days)</td>
                  <td className="px-4 py-3">₹149</td>
                  <td className="px-4 py-3">₹99</td>
                  <td className="px-4 py-3">None</td>
                </tr>
                <tr className="border-t border-outline-variant/30">
                  <td className="px-4 py-3 font-bold">Weekly</td>
                  <td className="px-4 py-3">₹129</td>
                  <td className="px-4 py-3">₹89</td>
                  <td className="px-4 py-3">None</td>
                </tr>
                <tr className="border-t border-outline-variant/30">
                  <td className="px-4 py-3 font-bold">Monthly (Mon–Sat)</td>
                  <td className="px-4 py-3">₹119</td>
                  <td className="px-4 py-3">₹79</td>
                  <td className="px-4 py-3">None</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-outline">
            Reference pricing from{" "}
            <Link href="/plans" className="text-primary font-bold hover:underline">
              Nothing But Healthy plans
            </Link>{" "}
            — comparable Ahmedabad services price within ±10%.
          </p>

          <h2
            id="delivery-zones"
            className="text-2xl md:text-3xl font-extrabold tracking-tight pt-4 scroll-mt-24"
          >
            5. Delivery zones and timing
          </h2>
          <p>
            Most Ahmedabad fruit subscription services cover the major
            residential and commercial belts: Bodakdev, Vastrapur, Satellite,
            SG Highway, Prahladnagar, Bopal, Thaltej, Navrangpura, CG Road,
            Paldi, Maninagar, Naranpura, Sabarmati, Chandkheda and the Gujarat
            University belt. The standard delivery window is{" "}
            <strong>6:00 AM to 9:00 AM</strong>, set so that the bowl reaches
            you before — not after — your normal breakfast time.
          </p>
          <p>
            New / further-out areas like Shela, South Bopal, GIFT City and
            parts of Gandhinagar are typically served on request. If you live
            in one of those areas,{" "}
            <Link href="/contact" className="text-primary font-bold underline-offset-2 hover:underline">
              ping us your pin code
            </Link>{" "}
            before you sign up.
          </p>

          <h2
            id="bowl-vs-juice"
            className="text-2xl md:text-3xl font-extrabold tracking-tight pt-4 scroll-mt-24"
          >
            6. Should you pick a fruit bowl, juice, or combo?
          </h2>
          <p>
            Quick rules of thumb:
          </p>
          <ul className="space-y-2 list-disc list-outside ml-6">
            <li>
              <strong>Pick a bowl</strong> if you want fibre, satiety and a
              meal-replacement breakfast that holds you till lunch.
            </li>
            <li>
              <strong>Pick a juice</strong> if you already eat a normal Indian
              breakfast and just want a clean micronutrient hit before it.
            </li>
            <li>
              <strong>Pick the combo</strong> if you want both — and you want
              the cost to come down. Most services (us included) offer ~15%
              off when a juice and bowl are paired, since prep is more
              efficient.
            </li>
          </ul>
          <p>
            If you&apos;re unsure, start with a{" "}
            <Link href="/plans" className="text-primary font-bold underline-offset-2 hover:underline">
              2-day combo trial
            </Link>{" "}
            (₹209/day) — it&apos;s designed exactly to answer this question
            without committing.
          </p>

          {/* Inline conversion block */}
          <aside className="my-10 p-6 md:p-8 rounded-[1.5rem] editorial-gradient text-white">
            <p className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-2">
              Try it before reading further
            </p>
            <h3 className="text-2xl font-extrabold mb-3 tracking-tight">
              2-day fruit-bowl trial · ₹298 total
            </h3>
            <p className="text-sm opacity-90 mb-5 leading-relaxed">
              Two different signature bowls, hand-cut at 4 AM, delivered before
              9 AM across Ahmedabad. No auto-renew, no commitment. Pay on
              delivery via UPI.
            </p>
            <div className="flex flex-wrap gap-3">
              <TrackedExternalLink
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  "Hi Nothing But Healthy! I read your fruit-subscription guide and want to start the *2-day Fruit Bowl Trial* (₹149/bowl, ₹298 total). Please help me set it up."
                )}`}
                eventName="subscribe_intent"
                eventParams={{ source: "blog-article-cta", item: "Fruit Bowl 2-Day Trial" }}
                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full font-extrabold text-sm cursor-pointer"
              >
                <MaterialIcon icon="chat" filled size="16px" />
                Start trial on WhatsApp
              </TrackedExternalLink>
              <Link
                href="/plans"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/30 font-bold text-sm hover:bg-white/20 transition-colors"
              >
                See all plans
              </Link>
            </div>
          </aside>

          <h2
            id="faq"
            className="text-2xl md:text-3xl font-extrabold tracking-tight pt-4 scroll-mt-24"
          >
            7. Frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqSchema.mainEntity.map((q) => (
              <details
                key={q.name}
                className="group bg-surface-container-low rounded-2xl border border-outline-variant/30 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none">
                  <h3 className="font-bold text-base flex-1">{q.name}</h3>
                  <MaterialIcon
                    icon="add"
                    size="20px"
                    className="text-on-surface-variant transition-transform group-open:rotate-45"
                  />
                </summary>
                <div className="px-5 pb-5 text-sm text-on-surface-variant leading-relaxed">
                  {q.acceptedAnswer.text}
                </div>
              </details>
            ))}
          </div>

          {/* Closing CTA */}
          <div className="mt-12 pt-10 border-t border-outline-variant/30">
            <p className="text-xs uppercase tracking-widest font-bold text-on-surface-variant mb-3">
              Next steps
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4">
              Ready to make tomorrow&apos;s breakfast a fruit bowl?
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              The hardest part of eating better is starting on a Tuesday at
              4 PM, not a Monday at 7 AM. Pick a 2-day trial, see how your
              mornings feel, then decide on a weekly or monthly plan.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/plans"
                className="inline-flex items-center gap-2 editorial-gradient text-white px-6 py-3 rounded-full font-bold text-sm"
              >
                See subscription plans
                <MaterialIcon icon="arrow_forward" size="16px" />
              </Link>
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-6 py-3 rounded-full font-bold text-sm"
              >
                Browse today&apos;s menu
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-surface-container-high text-on-surface px-6 py-3 rounded-full font-bold text-sm"
              >
                More guides
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
