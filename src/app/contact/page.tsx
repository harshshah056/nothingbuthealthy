import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  SITE_URL,
  COMPANY_INFO,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
} from "@/utils/constants";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us – Fruit Subscription & Juice Delivery Support in Ahmedabad",
  description:
    "Talk to Nothing But Healthy on WhatsApp, email, or Instagram. Get help with your fruit bowl & cold-pressed juice subscription, schedule deliveries, request corporate catering, or pause your plan. Serving all major Ahmedabad pin codes — daily before 9 AM.",
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
  openGraph: {
    title: "Contact Nothing But Healthy | Fruit & Juice Subscription Support, Ahmedabad",
    description:
      "Reach us on WhatsApp for instant subscription, delivery, and catering support. Real humans, real-time replies — across all of Ahmedabad.",
    url: `${SITE_URL}/contact/`,
  },
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact/` },
      ],
    },
    {
      "@type": "ContactPage",
      name: "Contact Nothing But Healthy – Ahmedabad",
      url: `${SITE_URL}/contact/`,
      description:
        "Contact Nothing But Healthy for fruit bowl and cold-pressed juice subscriptions, order support, delivery scheduling, and corporate catering across Ahmedabad.",
      inLanguage: "en-IN",
      mainEntity: {
        "@type": ["FoodEstablishment", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: COMPANY_INFO.name,
        url: SITE_URL,
        telephone: WHATSAPP_DISPLAY,
        email: COMPANY_INFO.email,
        image: `${SITE_URL}/logo.png`,
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          postalCode: "380001",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "City",
          name: "Ahmedabad",
          sameAs: "https://en.wikipedia.org/wiki/Ahmedabad",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: WHATSAPP_DISPLAY,
            contactType: "customer support",
            availableLanguage: ["English", "Hindi", "Gujarati"],
            areaServed: "IN",
            hoursAvailable: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "08:00",
              closes: "20:00",
            },
          },
          {
            "@type": "ContactPoint",
            email: COMPANY_INFO.email,
            contactType: "corporate catering",
            availableLanguage: ["English", "Hindi", "Gujarati"],
            areaServed: "IN",
          },
        ],
        sameAs: [INSTAGRAM_URL],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What's the fastest way to reach Nothing But Healthy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "WhatsApp is fastest. Message us at +91 96198 96648 between 8 AM and 8 PM, Monday to Saturday — we typically reply within 10 minutes during business hours.",
          },
        },
        {
          "@type": "Question",
          name: "Which areas of Ahmedabad do you deliver to?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We deliver to all major Ahmedabad pin codes including Bodakdev, Vastrapur, Satellite, SG Highway, Prahladnagar, Bopal, Thaltej, Navrangpura, CG Road, Paldi, Ambawadi, Gulbai Tekra, Maninagar, Naranpura, Sabarmati, and Chandkheda. Not sure if we cover your area? Send us your pin code on WhatsApp.",
          },
        },
        {
          "@type": "Question",
          name: "What time do deliveries arrive in Ahmedabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "All daily fruit bowl and juice deliveries arrive between 6:00 AM and 9:00 AM at your doorstep. Same-day orders aren't possible — we cut, press, and dispatch in the early hours, so orders need to be placed at least one day in advance.",
          },
        },
        {
          "@type": "Question",
          name: "Can I pause or skip my fruit subscription?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Message us on WhatsApp at least 48 hours before your next delivery to pause, skip, or reschedule. There are no charges for pausing your subscription.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer corporate catering or office subscriptions in Ahmedabad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. We deliver fruit bowls, juice trays, and tiffin services to offices, gyms, and co-working spaces across Ahmedabad. Email corporate@nbhealthy.com or visit our Corporate page for bulk pricing and customisation.",
          },
        },
        {
          "@type": "Question",
          name: "How do I pay for my subscription?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We accept UPI (GPay, PhonePe, Paytm), all major cards, and direct bank transfer. Subscription plans are pre-paid, single orders can be paid on delivery via UPI.",
          },
        },
      ],
    },
  ],
};

const channels = [
  {
    name: "WhatsApp",
    description: "Replies in under 10 minutes, 8 AM – 8 PM",
    cta: "Chat on WhatsApp",
    href: WHATSAPP_URL,
    icon: "chat",
    accent: "primary",
    value: WHATSAPP_DISPLAY,
  },
  {
    name: "Email",
    description: "For corporate, partnerships & longer queries",
    cta: "Send email",
    href: `mailto:${COMPANY_INFO.email}`,
    icon: "mail",
    accent: "tertiary",
    value: COMPANY_INFO.email,
  },
  {
    name: "Instagram",
    description: "DMs, stories & seasonal sourcing updates",
    cta: "Open Instagram",
    href: INSTAGRAM_URL,
    icon: "photo_camera",
    accent: "secondary",
    value: `@${INSTAGRAM_HANDLE}`,
  },
];

const deliveryZones = [
  {
    zone: "West Ahmedabad",
    areas: [
      "Bodakdev",
      "Vastrapur",
      "Satellite",
      "Thaltej",
      "SG Highway",
      "Bopal",
      "Prahladnagar",
      "Sola",
      "Science City",
    ],
  },
  {
    zone: "Central Ahmedabad",
    areas: [
      "Navrangpura",
      "CG Road",
      "Ellis Bridge",
      "Ambawadi",
      "Paldi",
      "Gulbai Tekra",
      "Law Garden",
    ],
  },
  {
    zone: "North Ahmedabad",
    areas: [
      "Naranpura",
      "Sabarmati",
      "Chandkheda",
      "New Ranip",
      "Motera",
      "Gota",
    ],
  },
  {
    zone: "South & East Ahmedabad",
    areas: [
      "Maninagar",
      "Isanpur",
      "Vastral",
      "Naroda",
      "Nikol",
      "Vatva",
    ],
  },
];

const supportHours = [
  { days: "Monday – Friday", hours: "8:00 AM – 8:00 PM" },
  { days: "Saturday", hours: "8:00 AM – 4:00 PM" },
  { days: "Sunday", hours: "Closed" },
];

const accentClasses: Record<string, string> = {
  primary:
    "bg-primary text-on-primary",
  tertiary:
    "bg-tertiary text-on-tertiary",
  secondary:
    "bg-secondary text-on-secondary",
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />

      {/* Hero */}
      <section className="px-6 md:px-12 mb-12 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:p-10 items-center max-w-7xl mx-auto">
          <div className="md:col-span-7 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Real humans · Ahmedabad-based
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-on-background mb-8 tracking-tighter">
              Talk to a{" "}
              <span className="text-primary italic">real person</span>,
              <br className="hidden md:block" /> not a chatbot.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
              Subscription questions, missing delivery, allergy callouts,
              corporate catering for your office — whatever it is, we&apos;re a
              small Ahmedabad team and we answer everything ourselves. WhatsApp
              is fastest.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-on-primary font-bold rounded-full text-base hover:scale-105 transition-transform"
              >
                <MaterialIcon icon="chat" filled size="20px" />
                WhatsApp us now
              </Link>
              <Link
                href={`mailto:${COMPANY_INFO.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-surface-container-high text-on-surface font-bold rounded-full text-base hover:bg-surface-container-highest transition-colors"
              >
                <MaterialIcon icon="mail" size="20px" />
                Email instead
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=900&fit=crop&auto=format&q=80"
                alt="Fresh fruit bowl with banana, papaya, pomegranate — Nothing But Healthy Ahmedabad customer support"
                width={600}
                height={700}
                unoptimized
                className="relative rounded-[2rem] object-cover w-full aspect-[5/6]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Channels grid */}
      <section className="px-6 md:px-12 mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((channel) => (
              <a
                key={channel.name}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-[2rem] p-8 flex flex-col justify-between gap-6 min-h-[260px] ${accentClasses[channel.accent]}`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                    <MaterialIcon icon={channel.icon} filled size="28px" />
                  </div>
                  <h2 className="text-2xl font-extrabold mb-2 tracking-tight">
                    {channel.name}
                  </h2>
                  <p className="text-sm opacity-90 leading-relaxed mb-3">
                    {channel.description}
                  </p>
                  <p className="text-base font-bold opacity-95 break-words">
                    {channel.value}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider">
                  {channel.cta}
                  <MaterialIcon
                    icon="arrow_forward"
                    size="18px"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Hours + Kitchen */}
      <section className="px-6 md:px-12 mb-12 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 md:p-10 soft-ambient-shadow md:col-span-2">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-container flex items-center justify-center shrink-0">
                <MaterialIcon
                  icon="schedule"
                  filled
                  className="text-on-primary-container"
                  size="28px"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold mb-1 tracking-tight">
                  Support hours
                </h2>
                <p className="text-on-surface-variant">
                  Real humans on WhatsApp, email, and Instagram.
                </p>
              </div>
            </div>
            <ul className="divide-y divide-outline-variant/40">
              {supportHours.map((slot) => (
                <li
                  key={slot.days}
                  className="flex justify-between items-center py-4"
                >
                  <span className="font-bold text-on-background">
                    {slot.days}
                  </span>
                  <span className="text-on-surface-variant font-medium">
                    {slot.hours}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-on-surface-variant mt-6 leading-relaxed">
              Our cloud kitchen runs from 4 AM so deliveries land before 9 AM.
              Customer support starts at 8 AM, when we&apos;re done dispatching.
            </p>
          </div>

          <div className="bg-tertiary-container text-on-tertiary-container rounded-[2rem] p-6 md:p-10 flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/30 flex items-center justify-center mb-6">
                <MaterialIcon icon="storefront" filled size="28px" />
              </div>
              <h2 className="text-2xl font-extrabold mb-2 tracking-tight">
                Our kitchen
              </h2>
              <p className="text-sm opacity-90 leading-relaxed mb-3">
                Cloud kitchen in central Ahmedabad. Deliveries only — we
                don&apos;t have a public dine-in counter (yet).
              </p>
            </div>
            <div className="text-sm opacity-90 font-bold">
              Ahmedabad, Gujarat 380001
            </div>
          </div>
        </div>
      </section>

      {/* Delivery zones */}
      <section className="px-6 md:px-12 mb-12 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-3">
                Delivery zones
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter max-w-2xl">
                Where we deliver
                <br />
                <span className="text-primary italic">in Ahmedabad</span>.
              </h2>
            </div>
            <p className="text-on-surface-variant max-w-md leading-relaxed">
              Live across all major Ahmedabad pin codes. Don&apos;t see your
              area? Send us your pin code on WhatsApp — we&apos;re expanding
              every week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryZones.map((zone) => (
              <article
                key={zone.zone}
                className="bg-surface-container-lowest rounded-[2rem] p-8 soft-ambient-shadow flex flex-col"
              >
                <MaterialIcon
                  icon="location_on"
                  filled
                  className="text-primary mb-4"
                  size="32px"
                />
                <h3 className="text-xl font-extrabold tracking-tight mb-4">
                  {zone.zone}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {zone.areas.map((area) => (
                    <li
                      key={area}
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactContent />

      {/* Final WhatsApp CTA */}
      <section className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-5xl mx-auto bg-primary-container rounded-[2rem] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-white/80 font-bold uppercase text-xs tracking-[0.2em] mb-4">
              Still here?
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tighter text-white">
              Just message us already.
            </h2>
            <p className="text-on-primary-container text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              No phone trees, no ticket numbers. WhatsApp is the easiest way to
              start your fruit subscription, customise a plan, or ask anything.
            </p>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              <MaterialIcon icon="chat" filled size="22px" />
              Chat on WhatsApp · {WHATSAPP_DISPLAY}
            </Link>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
}
