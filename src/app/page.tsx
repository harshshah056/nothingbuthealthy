import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { SITE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Daily Fruit Subscription in Ahmedabad – Fresh Fruit Bowls Delivered",
  description:
    "Ahmedabad's first daily fruit subscription. Farm-fresh, chef-cut seasonal fruit bowls delivered to your door every morning. Beat breakfast skipping, hit your daily fruit goal. Plans from ₹125/day.",
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Daily Fruit Subscription in Ahmedabad | Nothing But Healthy",
    description:
      "Skip the breakfast guilt. Get a freshly cut seasonal fruit bowl delivered to your Ahmedabad door every morning. Farm-fresh, zero preservatives. Plans from ₹125/day.",
    url: `${SITE_URL}/`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Nothing But Healthy",
      url: SITE_URL,
      description:
        "Ahmedabad's daily fruit subscription service. Farm-fresh, chef-cut seasonal fruit bowls delivered every morning.",
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/menu/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How many fruits should I eat daily?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The World Health Organization recommends at least 400g of fruits and vegetables every day — roughly 2 to 3 servings of fruit. The ICMR–NIN Dietary Guidelines for Indians (2024) echo this and emphasise eating a variety of seasonal fruits daily for better immunity, gut health and energy.",
          },
        },
        {
          "@type": "Question",
          name: "Is a daily fruit subscription worth it in Ahmedabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A daily fruit subscription removes the three biggest barriers to eating fruit consistently: shopping, washing and cutting. With Nothing But Healthy, a freshly cut seasonal fruit bowl is delivered to your Ahmedabad doorstep every morning — so hitting the 400g WHO recommendation becomes effortless.",
          },
        },
        {
          "@type": "Question",
          name: "What are the benefits of eating fruits every day?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Daily fruit consumption is linked to stronger immunity (vitamin C, polyphenols), better gut health (soluble and insoluble fibre), sustained energy (natural sugars paired with fibre), heart health (potassium, flavonoids), clearer skin (antioxidants A, C and E), and easier weight management (high satiety, low calorie density).",
          },
        },
        {
          "@type": "Question",
          name: "Which fruits do you deliver in Ahmedabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We rotate seasonal Indian and exotic fruits sourced from farms across Gujarat — including alphonso mango, papaya, pomegranate, banana, guava, watermelon, dragonfruit, kiwi, blueberries and chia-seed toppings. Bowls are freshly cut every morning at our Ahmedabad kitchen.",
          },
        },
        {
          "@type": "Question",
          name: "How can I stop skipping breakfast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Studies show breakfast skipping is rising among urban Indians, especially professionals between 25 and 40. The simplest fix is to remove preparation effort: a pre-portioned, fresh fruit bowl at your door eliminates decision fatigue and gives you a complete, micronutrient-rich first meal in under 60 seconds.",
          },
        },
      ],
    },
  ],
};

const fruitBenefits = [
  {
    icon: "favorite",
    title: "Stronger Immunity",
    description:
      "Vitamin C, polyphenols and antioxidants in citrus, berries and guava help your body fight infections and recover faster.",
    tone: "primary",
  },
  {
    icon: "spa",
    title: "Better Gut Health",
    description:
      "Soluble fibre from apples, papaya and bananas feeds gut bacteria, improves digestion and reduces bloating.",
    tone: "secondary",
  },
  {
    icon: "bolt",
    title: "Sustained Energy",
    description:
      "Natural sugars paired with fibre release slowly — no 11 AM slump, no crash, no chai dependency.",
    tone: "tertiary",
  },
  {
    icon: "monitor_heart",
    title: "Heart Health",
    description:
      "Potassium and flavonoids help regulate blood pressure and improve cholesterol — your daily cardiac armour.",
    tone: "primary",
  },
  {
    icon: "auto_awesome",
    title: "Glowing Skin",
    description:
      "Vitamins A, C and E in mangoes, papaya and berries support collagen and protect against free-radical damage.",
    tone: "secondary",
  },
  {
    icon: "fitness_center",
    title: "Weight Management",
    description:
      "High satiety, low calorie density. Replace one snack a day with fruit and you naturally cut 200–300 kcal.",
    tone: "tertiary",
  },
];

const testimonials = [
  {
    quote:
      "The morning fruit bowl completely changed my breakfast game. I used to skip it 4 days a week — now I look forward to it. Energy levels are noticeably steadier through the day.",
    name: "Priya M.",
    role: "Yoga Instructor, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1745434159123-5b99b94206ca?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    quote:
      "Buying, washing and cutting fruit was the friction that stopped me. Having a chef-cut seasonal bowl arrive at 7 AM removed every excuse. My gut and my mornings are happier.",
    name: "Karan D.",
    role: "Marathon Runner, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1769636929231-3cd7f853d038?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
  },
  {
    quote:
      "As a nutritionist, I recommend fruit-first mornings to every client. Nothing But Healthy is the only Ahmedabad service consistently sourcing the variety and freshness I'd actually trust.",
    name: "Aanya R.",
    role: "Certified Nutritionist, Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1573496527892-904f897eb744?w=200&h=200&fit=crop&crop=faces&auto=format&q=80",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 mb-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          <div className="md:col-span-6 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Now Live in Ahmedabad · Daily Fruit Subscription
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-on-background mb-8 tracking-tighter">
              A fresh{" "}
              <span className="text-primary italic">fruit bowl</span>, every
              morning at your door.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
              Ahmedabad&apos;s first daily fruit subscription. Chef-cut, seasonal,
              farm-fresh — delivered to your doorstep before 9 AM. No washing,
              no chopping, no excuses. Just the easiest healthy habit you&apos;ll
              ever build.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/plans"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full text-lg active:scale-95 transition-transform"
              >
                Start Daily Fruit Plan
              </Link>
              <Link
                href="/menu"
                className="px-8 py-4 bg-secondary-container text-on-secondary-container font-bold rounded-full text-lg active:scale-95 transition-transform"
              >
                See Today&apos;s Bowl
              </Link>
            </div>
            <p className="text-xs text-outline mt-6 uppercase tracking-widest">
              From ₹125/day · Pause or cancel anytime
            </p>
          </div>
          <div className="md:col-span-6 relative h-[380px] sm:h-[500px] md:h-[700px]">
            <div className="absolute inset-0 bg-primary-fixed rounded-[2rem] -rotate-3 translate-x-4 translate-y-4" />
            <Image
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1200&h=1400&fit=crop&auto=format&q=80"
              alt="Fresh acai fruit bowl with strawberries, blueberries, kiwi, banana and chia seeds — Nothing But Healthy daily fruit subscription delivered in Ahmedabad"
              fill
              unoptimized
              className="object-cover rounded-[2rem] shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* The Hidden Breakfast Crisis */}
      <section className="bg-primary-container py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <p className="text-white/80 font-bold uppercase text-[12px] tracking-widest mb-4">
              The Hidden Crisis
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[3.5rem] leading-[1.05] font-extrabold text-white tracking-tighter mb-6">
              Most of us are quietly under-fuelled.
            </h2>
            <p className="text-on-primary-container text-lg leading-relaxed">
              Three numbers nobody talks about — and the simple habit that fixes
              all of them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-[2rem] p-6 md:p-10">
              <p className="text-7xl font-black text-primary mb-4 tracking-tighter">
                1 in 4
              </p>
              <h3 className="text-xl font-bold mb-3">Skip breakfast</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                Studies on urban Indian adults consistently show that around
                25% skip breakfast on a typical workday — a habit linked to
                higher BMI and metabolic risk.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-6 md:p-10">
              <p className="text-7xl font-black text-primary mb-4 tracking-tighter">
                400g
              </p>
              <h3 className="text-xl font-bold mb-3">Daily fruit + veg goal</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                The WHO recommendation. Most Indians eat barely a third of
                that. Just one fresh fruit bowl already covers half.
              </p>
            </div>

            <div className="bg-white rounded-[2rem] p-6 md:p-10">
              <p className="text-7xl font-black text-primary mb-4 tracking-tighter">
                &lt; 60s
              </p>
              <h3 className="text-xl font-bold mb-3">To eat your bowl</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm">
                No shopping, no washing, no chopping. We removed every step
                between you and a complete, micronutrient-rich first meal.
              </p>
            </div>
          </div>

          <p className="text-on-primary-container/80 text-xs text-center mt-10 max-w-2xl mx-auto leading-relaxed">
            Sources: WHO Healthy Diet Fact Sheet · ICMR–NIN Dietary Guidelines
            for Indians (2024) · peer-reviewed studies on Indian breakfast
            consumption patterns.
          </p>
        </div>
      </section>

      {/* 6 Benefits of Daily Fruit */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-primary font-bold uppercase text-[12px] tracking-widest mb-4">
                Why Daily Fruit Matters
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter max-w-2xl">
                Six reasons your body says thank you,{" "}
                <span className="text-primary italic">every morning</span>.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-sm">
              Backed by ICMR-NIN dietary guidance, WHO recommendations and
              decades of nutrition research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fruitBenefits.map((benefit) => (
              <article
                key={benefit.title}
                className="bg-surface-container-lowest rounded-[2rem] p-8 soft-ambient-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    benefit.tone === "primary"
                      ? "bg-primary-container text-on-primary-container"
                      : benefit.tone === "secondary"
                      ? "bg-secondary-container text-on-secondary-container"
                      : "bg-tertiary-container text-on-tertiary-container"
                  }`}
                >
                  <MaterialIcon icon={benefit.icon} filled size="28px" />
                </div>
                <h3 className="text-2xl font-bold mb-3 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <p className="text-primary font-bold uppercase text-[12px] tracking-widest mb-4">
              How It Works
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              From farm to your front door in{" "}
              <span className="text-primary italic">three steps</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-lowest rounded-[2rem] p-6 md:p-10">
              <div className="text-primary font-black text-5xl mb-4 tracking-tighter">
                01
              </div>
              <h3 className="text-2xl font-bold mb-3">Pick your plan</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Daily, weekly or monthly. Choose how often you want a fresh
                bowl. Pause or cancel anytime — no questions, no penalties.
              </p>
            </div>

            <div className="bg-primary text-white rounded-[2rem] p-6 md:p-10">
              <div className="font-black text-5xl mb-4 tracking-tighter">
                02
              </div>
              <h3 className="text-2xl font-bold mb-3">We cut it fresh</h3>
              <p className="text-primary-fixed leading-relaxed">
                Our chefs hand-cut your seasonal fruit bowl every morning at
                4 AM in our Ahmedabad kitchen. Zero preservatives, never
                pre-cut the day before.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-[2rem] p-6 md:p-10">
              <div className="text-primary font-black text-5xl mb-4 tracking-tighter">
                03
              </div>
              <h3 className="text-2xl font-bold mb-3">Delivered before 9 AM</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Carbon-neutral delivery routes across Ahmedabad. Compostable
                packaging. You get a bowl warmer than the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story Bento Grid */}
      <section className="bg-surface py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-[2.5rem] font-bold tracking-tight">
              The Conscious Kitchen
            </h2>
            <p className="text-primary font-bold uppercase text-[12px] tracking-widest hidden md:block">
              Our Philosophy
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest p-6 md:p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center overflow-hidden">
              <div className="flex-1">
                <MaterialIcon
                  icon="auto_stories"
                  className="text-primary text-4xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Crafted with intention
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Every bowl starts with farm-fresh, locally-sourced seasonal
                  produce from around Gujarat — alphonso mangoes from Valsad,
                  pomegranates from Saurashtra, papaya from local cooperatives.
                  We believe true wellness comes from honest, traceable food.
                </p>
              </div>
              <Image
                src="https://images.unsplash.com/photo-1487376480913-24046456a727?w=600&h=600&fit=crop&auto=format&q=80"
                alt="Fresh seasonal fruits including dragon fruit, citrus and tropical produce sourced from Gujarat farms by Nothing But Healthy Ahmedabad"
                width={256}
                height={256}
                unoptimized
                className="w-full md:w-64 h-64 object-cover rounded-xl"
              />
            </div>

            <div className="bg-primary text-white p-6 md:p-10 rounded-[2rem] flex flex-col justify-between min-h-[280px]">
              <MaterialIcon icon="eco" className="text-4xl" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  100% Fresh &amp; Natural
                </h3>
                <p className="text-primary-fixed text-sm">
                  Cut the morning of delivery. Never frozen, never pre-cut the
                  night before. Just nature&apos;s best, untouched.
                </p>
              </div>
            </div>

            <div className="bg-secondary-fixed p-6 md:p-10 rounded-[2rem] flex flex-col justify-between min-h-[280px]">
              <MaterialIcon
                icon="local_shipping"
                className="text-on-secondary-fixed text-4xl"
              />
              <div>
                <h3 className="text-xl font-bold text-on-secondary-fixed mb-2">
                  Zero Waste
                </h3>
                <p className="text-on-secondary-fixed-variant text-sm">
                  Compostable packaging and carbon-neutral delivery routes
                  across all major Ahmedabad pin codes.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 bg-surface-container-high p-6 md:p-10 rounded-[2rem] flex items-center justify-between overflow-hidden relative min-h-[200px]">
              <div className="z-10 max-w-sm">
                <h3 className="text-2xl font-bold mb-4">Coming Next: Salads &amp; Bowls</h3>
                <p className="mb-6">
                  We&apos;re launching with daily fruit subscriptions and
                  scaling up. Protein salads, grain bowls and full meal plans
                  are next. Subscribers get first access.
                </p>
                <Link
                  href="/plans"
                  className="inline-flex items-center gap-2 text-primary font-black uppercase text-sm group"
                >
                  See Roadmap{" "}
                  <MaterialIcon
                    icon="arrow_forward"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 opacity-40">
                <MaterialIcon
                  icon="calendar_today"
                  className="text-primary-container"
                  size="12rem"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tighter">
              Stories from our morning regulars
            </h2>
            <p className="text-on-surface-variant">
              Real Ahmedabad subscribers, real before-and-afters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-surface-container-lowest p-8 rounded-[2rem] soft-ambient-shadow"
              >
                <div className="flex gap-1 text-star mb-6">
                  {[...Array(5)].map((_, i) => (
                    <MaterialIcon key={i} icon="star" filled />
                  ))}
                </div>
                <p className="italic text-lg mb-8 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-xs uppercase tracking-widest text-outline">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-bold uppercase text-[12px] tracking-widest mb-4">
              Frequently Asked
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter">
              Everything about your daily fruit habit.
            </h2>
          </div>

          <div className="space-y-4">
            <details className="group bg-surface-container-lowest rounded-2xl p-6 soft-ambient-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                How many fruits should I eat daily?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                The World Health Organization recommends at least 400g of
                fruits and vegetables every day — roughly 2 to 3 servings of
                fruit. The ICMR–NIN Dietary Guidelines for Indians (2024) echo
                this and stress the importance of variety, especially seasonal
                Indian fruits.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 soft-ambient-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                Is a daily fruit subscription worth it in Ahmedabad?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                If you skip fruit because of shopping, washing or chopping —
                yes. A subscription removes those exact frictions. At ₹125/day
                you also avoid the ₹40–60 wastage per kilo when fresh produce
                spoils before you can use it.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 soft-ambient-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                What benefits will I notice in the first month?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Most subscribers report steadier morning energy, fewer 4 PM
                cravings, smoother digestion and clearer skin within 2–3 weeks.
                Long-term, daily fruit intake supports heart health, weight
                management and immunity.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 soft-ambient-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                Which Ahmedabad areas do you deliver to?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                We deliver across all major Ahmedabad pin codes — including
                Bopal, Satellite, SG Highway, Prahlad Nagar, Vastrapur,
                Naranpura, Maninagar and the western corridor. Delivery is
                completed before 9 AM.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 soft-ambient-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                Can I pause or cancel my subscription?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Anytime. Pause for travel, cancel without penalty, or swap
                bowls — all from your dashboard or one WhatsApp message. Paused
                days credit automatically to your next cycle.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-5xl mx-auto bg-primary-container rounded-[3rem] p-8 sm:p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-8 tracking-tighter">
              Build the easiest healthy habit of your life.
            </h2>
            <p className="text-on-primary-container text-xl mb-12 max-w-2xl mx-auto">
              Start with one bowl tomorrow morning. From ₹125/day. Pause or
              cancel anytime — no lock-ins, no commitments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/plans"
                className="bg-white text-primary px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform"
              >
                Start My Fruit Plan
              </Link>
              <Link
                href="/contact"
                className="bg-primary border border-primary-fixed/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                Talk to a Nutritionist
              </Link>
            </div>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
}
