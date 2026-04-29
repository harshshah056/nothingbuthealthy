import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, SITE_URL, COMPANY_INFO } from "@/utils/constants";
import CorporateInquiryForm from "./CorporateInquiryForm";

export const metadata: Metadata = {
  title:
    "Bulk Fruit Bowl & Juice Catering for Offices, Gyms & Events in Ahmedabad",
  description:
    "Bulk healthy catering in Ahmedabad — chef-cut fruit bowls and cold-pressed juices for offices, gyms, weddings, conferences and one-time events. Volume pricing from ₹99/bowl, custom menus, daily or one-time delivery. WhatsApp our team for a quote.",
  keywords: [
    "bulk fruit bowls Ahmedabad",
    "corporate fruit catering Ahmedabad",
    "office breakfast delivery Ahmedabad",
    "healthy office snacks Ahmedabad",
    "wedding fruit catering Ahmedabad",
    "event juice catering Ahmedabad",
    "gym fruit partner Ahmedabad",
    "co-working healthy snacks Ahmedabad",
    "bulk cold-pressed juice Ahmedabad",
    "corporate wellness catering Gujarat",
    "Nothing But Healthy corporate",
  ],
  alternates: {
    canonical: `${SITE_URL}/corporate/`,
  },
  openGraph: {
    title:
      "Bulk Fruit Bowl & Juice Catering – Offices, Gyms & Events | Nothing But Healthy Ahmedabad",
    description:
      "Hand-cut fruit bowls and cold-pressed juices in bulk for Ahmedabad offices, gyms, weddings and events. Volume pricing, custom menus, WhatsApp ordering.",
    url: `${SITE_URL}/corporate/`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bulk Fruit Bowls & Juices for Ahmedabad Offices, Gyms & Events",
    description:
      "Healthy bulk catering — fruit bowls and cold-pressed juices delivered across Ahmedabad. Volume pricing from ₹99/bowl.",
  },
};

const corporateSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/corporate/#service`,
      name: "Bulk Fruit Bowl & Juice Catering – Ahmedabad",
      description:
        "Bulk healthy catering service across Ahmedabad — chef-cut fruit bowls and cold-pressed juices for offices, gyms, co-working spaces, weddings, conferences and one-time events. Volume pricing, custom menus, daily or one-time delivery.",
      provider: {
        "@type": "Organization",
        name: COMPANY_INFO.name,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "City",
        name: "Ahmedabad",
        sameAs: "https://en.wikipedia.org/wiki/Ahmedabad",
      },
      serviceType: "Corporate & Event Healthy Catering",
      audience: [
        { "@type": "BusinessAudience", audienceType: "Corporate offices" },
        { "@type": "BusinessAudience", audienceType: "Gyms & fitness studios" },
        { "@type": "BusinessAudience", audienceType: "Co-working spaces" },
        { "@type": "BusinessAudience", audienceType: "Wedding & event planners" },
      ],
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "79",
        highPrice: "129",
        offerCount: 6,
        description:
          "Tiered volume pricing for fruit bowls and cold-pressed juices. Bowls from ₹99, juices from ₹79.",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Bulk catering tiers",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Office daily breakfast – 50 to 100 servings",
            priceCurrency: "INR",
            price: "109",
            description:
              "Daily fruit bowls + juices delivered before 9 AM to Ahmedabad offices.",
          },
          {
            "@type": "Offer",
            name: "Office daily breakfast – 100 to 300 servings",
            priceCurrency: "INR",
            price: "99",
            description:
              "Volume tier for mid-size Ahmedabad offices and co-working spaces.",
          },
          {
            "@type": "Offer",
            name: "One-time event catering",
            priceCurrency: "INR",
            price: "129",
            description:
              "Weddings, launches, conferences — chef-cut fruit and cold-pressed juice stations.",
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Corporate & Bulk Orders",
          item: `${SITE_URL}/corporate/`,
        },
      ],
    },
  ],
};

const useCases = [
  {
    icon: "domain",
    title: "Office breakfast",
    description:
      "Daily chef-cut fruit bowls and juice shots delivered before 9 AM to your Ahmedabad office. Replace samosas with something your team will actually thank you for.",
  },
  {
    icon: "fitness_center",
    title: "Gym & studio partners",
    description:
      "Post-workout fruit bowls and electrolyte-rich juices stocked at your gym, yoga studio or pilates space. White-label packaging available.",
  },
  {
    icon: "celebration",
    title: "Weddings & events",
    description:
      "Live fruit-bowl bars, cold-pressed juice stations and welcome shots for weddings, sangeets, conferences and product launches.",
  },
  {
    icon: "co_present",
    title: "Co-working spaces",
    description:
      "Build a wellness-forward workspace. Daily replenishment of fruit bowls, infused water and juices for your members.",
  },
  {
    icon: "school",
    title: "Schools & institutions",
    description:
      "Healthy mid-morning fruit bowls for schools, colleges, hostels and training programmes — vegetarian, allergen-labelled.",
  },
  {
    icon: "movie",
    title: "Shoots & productions",
    description:
      "Energising fruit bowls and juices for crew on long shoot days. Same-week turnaround on bulk orders across Ahmedabad.",
  },
];

const tiers = [
  {
    label: "Starter",
    headline: "20–50 servings",
    bowlPrice: "₹119",
    juicePrice: "₹89",
    badge: "Single team",
    bullets: [
      "Daily or weekly delivery",
      "Two bowl + juice options to start",
      "WhatsApp account manager",
    ],
  },
  {
    label: "Growth",
    headline: "50–100 servings",
    bowlPrice: "₹109",
    juicePrice: "₹85",
    badge: "Most offices",
    featured: true,
    bullets: [
      "Daily delivery before 9 AM",
      "Rotating weekly menu, theme bowls",
      "Allergen / macro labelling on each cup",
      "Dedicated kitchen liaison",
    ],
  },
  {
    label: "Enterprise",
    headline: "100–300+ servings",
    bowlPrice: "From ₹99",
    juicePrice: "From ₹79",
    badge: "Custom quote",
    bullets: [
      "Multi-floor / multi-site delivery",
      "Custom menu by company chef",
      "Branded packaging available",
      "Monthly invoicing & GST",
    ],
  },
];

const faqs = [
  {
    q: "What's the minimum bulk order?",
    a: "20 servings per delivery. Below that, the standard subscription plans are usually a better fit — see the Plans page.",
  },
  {
    q: "How quickly can you start?",
    a: "Most office breakfast partnerships go live within 3–5 working days of finalising the menu. One-time events with 7+ days lead time are guaranteed; rush events are accommodated when our kitchen capacity allows.",
  },
  {
    q: "Do you provide GST invoices?",
    a: "Yes. We're a fully GST-registered Ahmedabad business and provide compliant tax invoices. Monthly consolidated invoicing is available for ongoing partnerships.",
  },
  {
    q: "Can the menu be customised for our team?",
    a: "Absolutely. We build a rotating weekly menu with your office, weighted around your team's preferences (high-protein bowls for gym partners, lighter bowls for IT teams, festive bowls for celebrations, etc.).",
  },
  {
    q: "What about packaging and waste?",
    a: "Default packaging is FSSAI-compliant compostable bowls and recyclable PET juice cups. For partnerships above 100 servings/day we offer reusable steel-lined bowls with a daily pickup-and-wash service.",
  },
];

export default function CorporatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
      />

      {/* Hero */}
      <section className="relative px-6 md:px-12 mb-12 md:mb-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="lg:w-1/2 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Bulk · Corporate · Events
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.05] font-extrabold text-on-background mb-8 tracking-tighter">
              Healthy in{" "}
              <span className="text-primary italic">bulk.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
              Hand-cut fruit bowls and cold-pressed juices delivered in bulk to
              Ahmedabad offices, gyms, weddings and events. Volume pricing from{" "}
              <strong>₹99 / bowl</strong> and <strong>₹79 / juice</strong>.
              Replace samosa platters with something your people will actually
              thank you for.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#inquiry"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full text-lg active:scale-95 transition-transform"
              >
                Get a bulk quote
              </Link>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  "Hi Nothing But Healthy! I'd like a bulk / corporate quote for fruit bowls and juices."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full text-lg active:scale-95 transition-all hover:bg-primary hover:text-on-primary inline-flex items-center gap-2"
              >
                <MaterialIcon icon="chat" filled size="18px" />
                WhatsApp us
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=1200&fit=crop&auto=format&q=80"
                alt="Bulk corporate fruit bowls — banana, papaya, pomegranate, watermelon and chia seeds — delivered to Ahmedabad offices and events by Nothing But Healthy"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest rounded-2xl p-5 shadow-xl z-20">
              <p className="text-primary text-4xl font-black">12k+</p>
              <p className="text-on-surface-variant text-sm font-medium">
                Bowls delivered to Ahmedabad teams
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <span className="inline-block text-primary font-bold uppercase text-xs tracking-[0.2em] mb-3">
                Built for any setting
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter">
                One healthy menu.{" "}
                <span className="text-primary italic">Six places it shines.</span>
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-md text-sm">
              Whether you&apos;re feeding 20 people daily or 500 in one go, our
              Ahmedabad kitchen scales with you — without losing the chef-cut,
              farm-fresh quality our subscribers love.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="bg-surface-container-low rounded-3xl p-6 md:p-8 hover:shadow-xl transition-shadow"
              >
                <MaterialIcon
                  icon={u.icon}
                  className="text-primary mb-4"
                  size="32px"
                />
                <h3 className="text-xl font-bold mb-2">{u.title}</h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {u.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-primary font-bold uppercase text-xs tracking-[0.2em] mb-3">
              Volume pricing
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter mb-4">
              Bigger the team,{" "}
              <span className="text-primary italic">smaller the price.</span>
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Indicative pricing per serving. Final quote depends on menu mix,
              delivery frequency and packaging — share your details below and
              we&apos;ll send a tailored proposal within two business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`relative rounded-[2rem] p-6 md:p-8 flex flex-col gap-5 ${
                  tier.featured
                    ? "bg-primary text-on-primary shadow-xl scale-[1.02]"
                    : "bg-surface-container-lowest border border-outline-variant/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs uppercase tracking-widest font-extrabold ${
                      tier.featured ? "text-on-primary/80" : "text-primary"
                    }`}
                  >
                    {tier.label}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      tier.featured
                        ? "bg-on-primary/20 text-on-primary"
                        : "bg-tertiary-container text-on-tertiary-container"
                    }`}
                  >
                    {tier.badge}
                  </span>
                </div>

                <div>
                  <p
                    className={`text-2xl font-extrabold mb-2 ${
                      tier.featured ? "text-on-primary" : ""
                    }`}
                  >
                    {tier.headline}
                  </p>
                  <div className="flex items-baseline gap-4">
                    <div>
                      <p
                        className={`text-[11px] uppercase tracking-widest ${
                          tier.featured ? "text-on-primary/70" : "text-outline"
                        }`}
                      >
                        Per bowl
                      </p>
                      <p
                        className={`text-3xl font-extrabold tracking-tighter ${
                          tier.featured ? "text-on-primary" : "text-primary"
                        }`}
                      >
                        {tier.bowlPrice}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`text-[11px] uppercase tracking-widest ${
                          tier.featured ? "text-on-primary/70" : "text-outline"
                        }`}
                      >
                        Per juice
                      </p>
                      <p
                        className={`text-2xl font-extrabold tracking-tighter ${
                          tier.featured ? "text-on-primary/90" : "text-on-surface"
                        }`}
                      >
                        {tier.juicePrice}
                      </p>
                    </div>
                  </div>
                </div>

                <ul
                  className={`space-y-2 text-sm leading-relaxed ${
                    tier.featured ? "text-on-primary/90" : "text-on-surface-variant"
                  }`}
                >
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <MaterialIcon
                        icon="check_circle"
                        filled
                        size="16px"
                        className={tier.featured ? "text-on-primary mt-0.5" : "text-primary mt-0.5"}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#inquiry"
                  className={`mt-auto w-full inline-flex items-center justify-center py-3 rounded-full font-bold text-sm transition-colors ${
                    tier.featured
                      ? "bg-on-primary text-primary hover:opacity-90"
                      : "bg-primary text-on-primary hover:opacity-90"
                  }`}
                >
                  Request {tier.label.toLowerCase()} quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 md:mb-14 tracking-tighter">
            Why teams across Ahmedabad pick us.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-6 md:p-10 relative overflow-hidden">
              <MaterialIcon
                icon="workspace_premium"
                className="text-primary mb-4"
                size="36px"
              />
              <h3 className="text-2xl font-bold mb-3">Farm-to-office in 18 hours</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-lg">
                Fruit picked at sunrise from Gujarat farms, cut at our Ahmedabad
                kitchen at 4 AM, in your office before 9 AM. No preservatives,
                no shortcuts — just honest, traceable produce.
              </p>
              <div className="absolute -right-12 -bottom-12 opacity-10">
                <MaterialIcon icon="eco" className="text-primary" size="16rem" />
              </div>
            </div>

            <div className="bg-secondary-container rounded-3xl p-6 md:p-10">
              <MaterialIcon
                icon="calendar_month"
                className="text-on-secondary-container mb-4"
                size="36px"
              />
              <h3 className="text-2xl font-bold mb-3 text-on-secondary-container">
                Flexible & lock-in free
              </h3>
              <p className="text-on-secondary-container/80 leading-relaxed">
                Pause, scale up or down with 48-hour notice. No long contracts,
                no setup fees. Pay only for what you order.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 border border-outline-variant/10">
              <MaterialIcon
                icon="analytics"
                className="text-tertiary mb-4"
                size="36px"
              />
              <h3 className="text-2xl font-bold mb-3">Macros & allergens labelled</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Every bowl ships with a label showing calories, protein, fibre and
                allergens — your people eat with confidence and your HR team
                gets the wellness reporting it loves.
              </p>
            </div>

            <div className="md:col-span-2 bg-primary text-on-primary rounded-3xl p-6 md:p-10 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <MaterialIcon icon="receipt_long" className="mb-4" size="36px" />
                  <h3 className="text-2xl font-bold mb-3">
                    GST invoicing & monthly billing
                  </h3>
                  <p className="text-on-primary/80 leading-relaxed mb-6">
                    Fully GST-registered. Single consolidated monthly invoice,
                    UPI / NEFT / RTGS payment, dedicated account manager on
                    WhatsApp. Built for procurement teams.
                  </p>
                  <Link
                    href="#inquiry"
                    className="inline-flex items-center gap-2 font-black uppercase text-sm group"
                  >
                    Talk to our corporate team
                    <MaterialIcon
                      icon="arrow_forward"
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=600&h=600&fit=crop&auto=format&q=80"
                  alt="Bulk healthy fruit bowls and cold-pressed juices delivered to Ahmedabad offices, gyms and events by Nothing But Healthy"
                  width={280}
                  height={280}
                  unoptimized
                  className="w-full md:w-64 h-64 object-cover rounded-2xl grayscale brightness-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="inline-block text-primary font-bold uppercase text-xs tracking-[0.2em] mb-3">
              Procurement-ready answers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter">
              The bulk-order FAQ.
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-surface-container-lowest rounded-2xl px-5 md:px-7 py-4 border border-outline-variant/30"
              >
                <summary className="flex items-center justify-between cursor-pointer text-base md:text-lg font-bold text-on-background">
                  <span>{f.q}</span>
                  <MaterialIcon
                    icon="expand_more"
                    className="text-on-surface-variant transition-transform group-open:rotate-180 shrink-0 ml-4"
                    size="22px"
                  />
                </summary>
                <p className="mt-3 text-on-surface-variant leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section
        id="inquiry"
        className="py-16 md:py-24 px-6 md:px-12 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/3">
            <span className="inline-block text-primary font-bold uppercase text-xs tracking-[0.2em] mb-3">
              Step 1 of 1
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
              Tell us what you need.{" "}
              <span className="text-primary italic">We&apos;ll quote in 2 hours.</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              Fill in the form and your inquiry is pre-filled into WhatsApp —
              fastest way to a real reply from our Ahmedabad corporate team.
              Weekday inquiries are quoted within two business hours.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm">
                  <MaterialIcon icon="chat" className="text-primary" size="22px" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-0.5">
                    WhatsApp (fastest)
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-on-surface hover:text-primary transition-colors"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm">
                  <MaterialIcon icon="mail" className="text-primary" size="22px" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-0.5">
                    Corporate desk
                  </p>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-bold text-on-surface hover:text-primary transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 shadow-sm">
                  <MaterialIcon icon="schedule" className="text-primary" size="22px" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-0.5">
                    Reply window
                  </p>
                  <p className="font-bold text-on-surface">
                    2 business hours · Mon–Sat
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-container/60 rounded-2xl p-5 text-on-secondary-container">
              <p className="text-xs uppercase tracking-widest font-bold mb-2 opacity-80">
                Already know what you want?
              </p>
              <p className="text-sm leading-relaxed">
                Skip the form and message our team directly on WhatsApp — pre-filled
                bulk-order template included.
              </p>
              <a
                href={`${WHATSAPP_URL}?text=${encodeURIComponent(
                  "Hi Nothing But Healthy! I'd like a bulk / corporate quote.\n\nOrder type: \nVolume: \nFrequency: \nLocation in Ahmedabad: \n\nPlease share pricing. Thank you!"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-on-secondary-container text-secondary-container font-bold text-sm cursor-pointer"
              >
                <MaterialIcon icon="chat" filled size="16px" />
                Open WhatsApp template
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <CorporateInquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
