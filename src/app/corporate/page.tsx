import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { WHATSAPP_URL, WHATSAPP_DISPLAY, SITE_URL } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Corporate Tiffin & Office Catering in Ahmedabad – From ₹199/meal",
  description:
    "Wholesome chef-crafted corporate tiffins delivered daily to offices, co-working spaces & gyms across Ahmedabad. Bulk discounts from ₹199/meal. Flexible scheduling, macro-tracking, zero lock-ins. 500+ healthy workplaces trust us.",
  alternates: {
    canonical: `${SITE_URL}/corporate/`,
  },
  openGraph: {
    title: "Corporate Tiffin & Office Meal Delivery in Ahmedabad | Nothing But Healthy",
    description:
      "Keep your Ahmedabad team energized with farm-fresh vegetarian corporate tiffins. Bulk pricing from ₹199/meal. Flexible scheduling, nutritional transparency, and zero lock-ins.",
    url: `${SITE_URL}/corporate/`,
  },
};

const corporateSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Corporate Tiffin & Office Catering – Ahmedabad",
  description:
    "Chef-crafted vegetarian corporate tiffins and office meal delivery service across Ahmedabad. Bulk pricing, flexible scheduling, macro-tracking, and nutritional transparency.",
  provider: {
    "@type": "Organization",
    name: "Nothing But Healthy",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "City",
    name: "Ahmedabad",
  },
  serviceType: "Corporate Meal Delivery",
  offers: {
    "@type": "Offer",
    price: "199",
    priceCurrency: "INR",
    description: "Corporate tiffin meal pricing starting at ₹199/meal for large teams",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: "199",
      priceCurrency: "INR",
      unitText: "per meal",
    },
  },
};

export default function CorporatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(corporateSchema) }}
      />
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 mb-12 md:mb-20 overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="lg:w-1/2 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Fuel Your Team
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.05] font-extrabold text-on-background mb-8 tracking-tighter">
              The Corporate{" "}
              <span className="text-primary italic">Fuel Station.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
              Wholesome, chef-crafted corporate tiffins delivered daily to
              offices, co-working spaces, and gyms across Ahmedabad. Keep your
              team energized with meals that actually nourish.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#inquiry"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full text-lg active:scale-95 transition-transform"
              >
                Get a Custom Quote
              </Link>
              <Link
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-full text-lg active:scale-95 transition-all hover:bg-primary hover:text-on-primary"
              >
                WhatsApp Order
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1200&h=1200&fit=crop&auto=format&q=80"
                alt="Corporate healthy meal spread of fruit bowls with banana, papaya, pomegranate and chia seeds — delivered to Ahmedabad offices by Nothing But Healthy"
                fill
                unoptimized
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest rounded-2xl p-5 shadow-xl z-20">
              <p className="text-primary text-4xl font-black">500+</p>
              <p className="text-on-surface-variant text-sm font-medium">
                Healthy Workplaces in Ahmedabad
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bento Grid */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-16 tracking-tighter">
            Why Partner With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-low rounded-3xl p-6 md:p-10 relative overflow-hidden">
              <MaterialIcon
                icon="workspace_premium"
                className="text-primary mb-4"
                size="36px"
              />
              <h3 className="text-2xl font-bold mb-3">Unmatched Quality</h3>
              <p className="text-on-surface-variant leading-relaxed max-w-lg">
                Every meal is prepared with farm-fresh, locally sourced
                ingredients. No preservatives, no shortcuts — just honest,
                wholesome food your team deserves.
              </p>
              <div className="absolute -right-12 -bottom-12 opacity-10">
                <MaterialIcon
                  icon="eco"
                  className="text-primary"
                  size="16rem"
                />
              </div>
            </div>

            <div className="bg-secondary-container rounded-3xl p-6 md:p-10">
              <MaterialIcon
                icon="calendar_month"
                className="text-on-secondary-container mb-4"
                size="36px"
              />
              <h3 className="text-2xl font-bold mb-3 text-on-secondary-container">
                Flexible Scheduling
              </h3>
              <p className="text-on-secondary-container/80 leading-relaxed">
                Choose delivery days, meal times, and portion sizes that fit your
                office rhythm. Pause or scale anytime — no lock-ins.
              </p>
            </div>

            <div className="bg-surface-container-lowest rounded-3xl p-6 md:p-10 border border-outline-variant/10">
              <MaterialIcon
                icon="analytics"
                className="text-tertiary mb-4"
                size="36px"
              />
              <h3 className="text-2xl font-bold mb-3">Macro-Tracking</h3>
              <p className="text-on-surface-variant leading-relaxed">
                Full nutritional transparency with every order. Calorie counts,
                macro breakdowns, and allergen labels so your team eats with
                confidence.
              </p>
            </div>

            <div className="md:col-span-2 bg-primary text-on-primary rounded-3xl p-6 md:p-10 overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <MaterialIcon
                    icon="savings"
                    className="mb-4"
                    size="36px"
                  />
                  <h3 className="text-2xl font-bold mb-3">Bulk Discounts</h3>
                  <p className="text-on-primary/80 leading-relaxed mb-6">
                    Tiered pricing that rewards scale. The more your team orders,
                    the more you save — starting from just ₹199/meal for large
                    teams.
                  </p>
                  <Link
                    href="#inquiry"
                    className="inline-flex items-center gap-2 font-black uppercase text-sm group"
                  >
                    View Pricing Sheet
                    <MaterialIcon
                      icon="arrow_forward"
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
                <Image
                  src="https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=600&h=600&fit=crop&auto=format&q=80"
                  alt="Bulk healthy fruit bowls and cold-pressed juices delivered to Ahmedabad offices by Nothing But Healthy"
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

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-16 md:py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-[2.5rem] font-bold tracking-tight mb-6 leading-tight">
              Ready to{" "}
              <span className="text-primary">Transform</span> Your
              Workspace?
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-10">
              Fill out the form and our corporate partnerships team will get back
              to you within 24 hours with a tailored proposal.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <MaterialIcon
                    icon="mail"
                    className="text-primary"
                    size="22px"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-0.5">
                    Email
                  </p>
                  <p className="font-bold text-on-surface">
                    corporate@nbhealthy.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0">
                  <MaterialIcon
                    icon="phone"
                    className="text-primary"
                    size="22px"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-0.5">
                    Phone
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
            </div>
          </div>

          <div className="lg:w-2/3">
            <form className="bg-surface-container-lowest rounded-3xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-bold mb-2 text-on-surface"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-bold mb-2 text-on-surface"
                  >
                    Company / Gym Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    placeholder="Company or gym name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold mb-2 text-on-surface"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="weeklyMeals"
                    className="block text-sm font-bold mb-2 text-on-surface"
                  >
                    Estimated Weekly Meals
                  </label>
                  <select
                    id="weeklyMeals"
                    name="weeklyMeals"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-transparent text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  >
                    <option value="">Select a range</option>
                    <option value="20-50">20–50 meals</option>
                    <option value="50-200">50–200 meals</option>
                    <option value="200+">200+ meals</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="requirements"
                  className="block text-sm font-bold mb-2 text-on-surface"
                >
                  Additional Requirements
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-outline-variant/30 bg-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                  placeholder="Dietary preferences, delivery schedule, allergies..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-on-primary font-bold text-lg rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
