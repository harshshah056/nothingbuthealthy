import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { SITE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Our Story – From the Heart of Gujarat | Nothing But Healthy",
  description:
    "Born in an Ahmedabad kitchen and rooted in Gujarat's farm heritage. Nothing But Healthy is a daily fruit bowl & cold-pressed juice subscription crafted from Valsad alphonsos, Saurashtra pomegranates and farm-fresh produce sourced across Gujarat.",
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
  openGraph: {
    title: "Our Story – From the Heart of Gujarat | Nothing But Healthy",
    description:
      "Born in Ahmedabad, sourced across Gujarat. The story behind Ahmedabad's freshest fruit bowl and cold-pressed juice subscription.",
    url: `${SITE_URL}/about/`,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about/` },
      ],
    },
    {
      "@type": "AboutPage",
      name: "About Nothing But Healthy – From the Heart of Gujarat",
      url: `${SITE_URL}/about/`,
      description:
        "Nothing But Healthy is a daily fruit bowl and cold-pressed juice subscription founded in Ahmedabad and sourced from across Gujarat — Valsad, Saurashtra, Banaskantha, Junagadh and Kutch.",
      mainEntity: {
        "@type": "Organization",
        name: "Nothing But Healthy",
        foundingLocation: {
          "@type": "Place",
          name: "Ahmedabad, Gujarat, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Ahmedabad",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
        },
        knowsAbout: [
          "Vegetarian nutrition",
          "Ayurvedic cooking",
          "Cold-pressed juicing",
          "Farm-fresh fruit subscriptions",
          "Gujarat-sourced produce",
          "Sattvic food tradition",
        ],
        slogan: "From the heart of Gujarat. Delivered fresh, every morning.",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Where is Nothing But Healthy based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Nothing But Healthy is based in Ahmedabad, Gujarat. Our cloud kitchen is in the heart of the city and we deliver across all major Ahmedabad pin codes every morning before 9 AM.",
          },
        },
        {
          "@type": "Question",
          name: "Where do you source your fruits and ingredients from?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every ingredient is sourced from within Gujarat. Alphonso mangoes from Valsad, pomegranates from Saurashtra, papaya from local cooperatives, dates from Kutch, fresh tender coconut and bananas from south Gujarat, and dairy malai from Banaskantha — India's largest dairy belt.",
          },
        },
        {
          "@type": "Question",
          name: "What makes Gujarat ideal for healthy fresh produce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gujarat has India's longest growing season, multiple agro-climatic zones, and a centuries-old tradition of vegetarian, Ayurvedic, sattvic eating. The state is one of India's largest producers of mango, banana, papaya, sugarcane and chickoo — the building blocks of our fruit bowls and juices.",
          },
        },
        {
          "@type": "Question",
          name: "What is your founding philosophy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We started with a simple belief: when food is honest, the body thrives. Every recipe blends modern nutrition science with the Ayurvedic and sattvic principles that have shaped Gujarati cooking for centuries.",
          },
        },
      ],
    },
  ],
};

const sourcingRegions = [
  {
    region: "Valsad",
    crop: "Alphonso & Kesar mangoes",
    season: "Mar – Jun",
    icon: "park",
  },
  {
    region: "Saurashtra",
    crop: "Pomegranates, chickoo & guava",
    season: "Year-round",
    icon: "spa",
  },
  {
    region: "Banaskantha",
    crop: "Tender coconut malai & dairy",
    season: "Year-round",
    icon: "agriculture",
  },
  {
    region: "Junagadh",
    crop: "Kesar mangoes & mosambi",
    season: "Mar – Aug",
    icon: "eco",
  },
  {
    region: "Kutch",
    crop: "Dates, watermelon & muskmelon",
    season: "Apr – Sep",
    icon: "wb_sunny",
  },
  {
    region: "South Gujarat",
    crop: "Papaya, banana & sugarcane",
    season: "Year-round",
    icon: "grass",
  },
];

const gujaratEdge = [
  {
    title: "India's Vegetarian Heart",
    description:
      "Gujarat has the highest share of vegetarian households in India. Plant-first eating isn't a trend here — it's a 600-year-old way of life.",
    icon: "favorite",
  },
  {
    title: "365 Days of Sunshine",
    description:
      "Multiple agro-climatic zones across the state mean something is always in season. Our menus rotate naturally with what each region is harvesting.",
    icon: "wb_sunny",
  },
  {
    title: "Ayurvedic & Sattvic Wisdom",
    description:
      "From Lothal to Lakhpat, Gujarat's food traditions are rooted in Ayurveda and sattvic principles. We bring those into a modern, ready-to-eat format.",
    icon: "auto_stories",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Hero */}
      <section className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          <div className="md:col-span-7">
            <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-6">
              Born in Ahmedabad · Sourced from across Gujarat
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8">
              From the{" "}
              <span className="text-primary italic">heart of Gujarat</span>,
              with intention.
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl mb-8">
              We didn&apos;t start a meal-delivery company — we started a love
              letter to Gujarat&apos;s food heritage. Every alphonso, every
              ginger root, every drop of cold-pressed sugarcane comes from
              within our state. Hand-picked. Hand-cut. Honest.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-xs uppercase tracking-wider">
                100% Vegetarian
              </span>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs uppercase tracking-wider">
                Sourced in Gujarat
              </span>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container font-bold text-xs uppercase tracking-wider">
                Ayurvedic-Inspired
              </span>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=900&h=1100&fit=crop&auto=format&q=80"
                alt="Hand-picked Valsad alphonso mangoes — sourced for Nothing But Healthy fruit bowls in Ahmedabad"
                fill
                unoptimized
                className="object-cover"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-xs uppercase tracking-widest font-bold mb-1">
                  In season
                </p>
                <p className="text-white font-extrabold text-lg">
                  Valsad Alphonso · Hand-picked at peak ripeness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="bg-surface-container-low py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-square rounded-[2rem] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1746783840949-8bc54f8220d1?w=900&h=900&fit=crop&auto=format&q=80"
              alt="Colourful fresh fruit platter with watermelon, papaya, kiwi and seasonal fruits — the simple breakfast that started Nothing But Healthy in Ahmedabad"
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-4">
              The Origin
            </p>
            <h2 className="text-4xl font-extrabold tracking-tighter mb-6">
              It started in a small Ahmedabad kitchen.
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              A borrowed blender. A weekly trip to the APMC market in Vasna. Two
              years spent travelling between organic farms in Valsad, dairy
              cooperatives in Banaskantha, and Ayurvedic kitchens across
              Gujarat. We weren&apos;t trying to build a brand — we were trying
              to figure out what honest, modern, vegetarian food could look like
              if it was actually made the way our grandmothers would approve of.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Six months later, friends were asking us to deliver to their
              offices. A year later, neighbours were asking for subscriptions.
              And so Nothing But Healthy became real — built bowl by bowl, glass
              by glass, with the same obsessive freshness we started with.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 mb-10">
              <p className="italic text-lg text-on-surface leading-relaxed">
                &ldquo;The healthiest meal of your day should also be the one
                you look forward to most. Anything less, and we&apos;re doing
                something wrong.&rdquo;
              </p>
              <footer className="text-sm text-on-surface-variant mt-3 not-italic">
                — Founder, Nothing But Healthy
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why Gujarat */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-4">
              Why Gujarat
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6">
              The state was{" "}
              <span className="text-primary italic">made for this</span>.
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              We could ship in trendy superfoods from California. Instead, we
              looked around — and realised we already live in one of the most
              fertile, food-rich corners of India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gujaratEdge.map((item) => (
              <article
                key={item.title}
                className="bg-surface-container-lowest rounded-[2rem] p-6 md:p-10 soft-ambient-shadow"
              >
                <MaterialIcon
                  icon={item.icon}
                  filled
                  className="text-primary mb-6"
                  size="40px"
                />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Map */}
      <section className="bg-primary-container py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-white/80 font-bold uppercase text-xs tracking-[0.2em] mb-4">
                Our Gujarat
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white max-w-2xl">
                Six regions. One state.
                <br />
                Every ingredient.
              </h2>
            </div>
            <p className="text-on-primary-container leading-relaxed max-w-md">
              Every fruit and ingredient on our menu is traceable to a specific
              Gujarat region — and a specific season.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourcingRegions.map((source) => (
              <article
                key={source.region}
                className="bg-white rounded-[2rem] p-8 flex flex-col gap-3"
              >
                <MaterialIcon
                  icon={source.icon}
                  filled
                  className="text-primary"
                  size="32px"
                />
                <h3 className="text-2xl font-extrabold tracking-tight">
                  {source.region}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                  {source.crop}
                </p>
                <p className="text-xs uppercase tracking-widest font-bold text-primary mt-2">
                  In season: {source.season}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The Healthy Commitment */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-4">
              The Healthy Commitment
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              Four promises.{" "}
              <span className="text-primary italic">Every bowl. Every juice.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-secondary-container rounded-[2rem] p-6 md:p-10 flex flex-col justify-between overflow-hidden relative min-h-[360px]">
              <div>
                <MaterialIcon
                  icon="eco"
                  className="text-on-secondary-container text-4xl mb-4"
                />
                <h3 className="text-2xl font-bold text-on-secondary-container mb-3">
                  Zero Preservatives
                </h3>
                <p className="text-on-secondary-container/80 leading-relaxed max-w-md">
                  Every fruit is washed, cut, and bowled the same morning of
                  delivery. Every juice is slow-pressed and bottled within an
                  hour. No stabilizers, no shelf-life tricks — just real food.
                </p>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=900&h=400&fit=crop&auto=format&q=80"
                alt="Cold-pressed green juice with fresh ginger and lemon"
                width={600}
                height={200}
                unoptimized
                className="w-full h-40 object-cover rounded-xl mt-6"
              />
            </div>

            <div className="bg-surface-container-high rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[360px]">
              <div>
                <MaterialIcon
                  icon="schedule"
                  className="text-on-surface text-4xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">Cut at 4 AM</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Our kitchen lights up before sunrise. Bowls are prepared,
                  bottled, and dispatched the same morning so every bite is at
                  peak freshness, before 9 AM.
                </p>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&h=600&fit=crop&auto=format&q=80"
                alt="Freshly cut acai berry bowl prepared in Ahmedabad kitchen"
                width={400}
                height={400}
                unoptimized
                className="w-full aspect-square object-cover rounded-xl mt-6"
              />
            </div>

            <div className="bg-tertiary-container text-on-tertiary-container rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[320px]">
              <div>
                <MaterialIcon
                  icon="nutrition"
                  filled
                  className="text-4xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">Nutritionist-Designed</h3>
                <p className="opacity-80 leading-relaxed">
                  Every menu item is reviewed by a certified nutritionist. Macro
                  ratios, micronutrient density, and glycemic load are balanced
                  in every bowl and bottle.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container/10 font-bold text-xs uppercase tracking-wider">
                  Diabetic-Friendly
                </span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container/10 font-bold text-xs uppercase tracking-wider">
                  High Fibre
                </span>
              </div>
            </div>

            <div className="md:col-span-2 bg-surface-container-lowest shadow-sm rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
              <Image
                src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=400&h=400&fit=crop&auto=format&q=80"
                alt="Hand-picked alphonso mangoes from a Valsad orchard — traceable Gujarat sourcing for Nothing But Healthy fruit bowls"
                width={160}
                height={160}
                unoptimized
                className="w-40 h-40 rounded-full object-cover border-4 border-outline-variant shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Honest, traceable, local
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-4">
                  We can name the farm every alphonso came from. We can tell you
                  which Banaskantha cooperative supplies our coconut malai, and
                  which Saurashtra orchard our pomegranates ripened in. That&apos;s
                  the standard.
                </p>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-2 text-primary font-black uppercase text-sm group"
                >
                  See our menu{" "}
                  <MaterialIcon
                    icon="arrow_forward"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Pull Quote */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-4xl mx-auto text-center">
          <MaterialIcon
            icon="format_quote"
            filled
            className="text-primary mx-auto mb-6"
            size="48px"
          />
          <p className="text-3xl md:text-4xl font-extrabold tracking-tighter leading-[1.2] text-on-background mb-8">
            Our mission isn&apos;t to feed Ahmedabad. It&apos;s to make the
            healthiest meal of your day{" "}
            <span className="text-primary italic">the one you look forward to</span>{" "}
            — and to do it with what Gujarat has been growing all along.
          </p>
          <Link
            href="/plans"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-bold rounded-full text-base hover:scale-105 transition-transform"
          >
            Start Your Healthy Life
            <MaterialIcon icon="arrow_forward" size="18px" />
          </Link>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24 px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-5xl mx-auto bg-primary-container rounded-3xl p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-6 tracking-tighter">
              Join the conscious living movement.
            </h2>
            <p className="text-on-primary-container text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Weekly seasonal recipes, sourcing stories from Gujarat&apos;s
              farms, and subscriber-only offers — straight to your inbox. No
              spam, just goodness.
            </p>
            <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                required
                placeholder="Your email address"
                aria-label="Email address"
                className="flex-1 px-6 py-4 rounded-full bg-white text-on-surface placeholder:text-outline text-base outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary font-bold rounded-full text-base hover:scale-105 transition-transform shadow-xl cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
}
