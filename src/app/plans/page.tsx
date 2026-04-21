import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { WHATSAPP_URL } from "@/utils/constants";

const plans = [
  {
    name: "Daily Spark",
    icon: "bolt",
    price: "₹125",
    unit: "meal",
    features: [
      { text: "Freshly prepared daily", included: true },
      { text: "Choice of 1 salad or bowl", included: true },
      { text: "No weekend delivery", included: false },
    ],
    featured: false,
  },
  {
    name: "Weekly Bloom",
    icon: "spa",
    price: "₹105",
    unit: "week",
    badge: "Most Popular",
    features: [
      { text: "5 days of premium meals", included: true },
      { text: "Free nutritional consultation", included: true },
      { text: "Zero delivery fees", included: true },
    ],
    featured: true,
  },
  {
    name: "Monthly Harvest",
    icon: "auto_awesome",
    price: "₹85",
    unit: "month",
    features: [
      { text: "22 days of curated meals", included: true },
      { text: "Customized dietary mapping", included: true },
      { text: "Priority delivery slot", included: true },
    ],
    savings: "Save 20% — Best Value",
    featured: false,
  },
];

export default function PlansPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative px-6 md:px-12 mb-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          <div className="md:col-span-6 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Flexible Fueling
            </span>
            <h1 className="text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-on-background mb-8 tracking-tighter">
              Healthy Living, <br />
              <span className="text-primary italic">Delivered.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
              Choose a plan that fits your lifestyle. From daily bowls to monthly
              meal programs, we make clean eating effortless and affordable.
            </p>
          </div>

          <div className="md:col-span-6 relative h-[500px] md:h-[700px]">
            <div className="absolute inset-0 bg-primary-fixed rounded-[2rem] -rotate-3 translate-x-4 translate-y-4" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjLvXeATuNv0Xbi9toDSFxfJ25CJ04OE96ntAih9kn8hVRnbEUF8zl7hLeN7RMl8bPE2VY_LuyX1nOSeDq6cSWTVS4RqFkEIX9UAMz_rI5MPJUyF9dEUtagIjPk000v0894QZleDi0r6XdGJWm9M7A2u2GclpyriGSZtXoz-fRPguB0AmnfZdCwy1DUgnQaXgb5i2KAq6qstXiLMXXiEOGfXwGNdm3F3gW9xJ7rrImRz2mYERfQbN3jtVXkXS6dHDD10jfFOdS_esg"
              alt="Healthy salad bowls with fresh vegetables and grains"
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
                <p className="text-xs text-on-surface-variant">Prepared Daily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tighter">
              Pick Your Plan
            </h2>
            <p className="text-on-surface-variant max-w-xl mx-auto">
              Simple, transparent pricing with no hidden fees. Pause or cancel
              anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[2rem] p-8 flex flex-col transition-transform hover:-translate-y-1 ${
                  plan.featured
                    ? "bg-surface-container-lowest ring-4 ring-primary shadow-2xl scale-100 md:scale-105"
                    : "bg-surface-container-low editorial-shadow"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full editorial-gradient text-white text-xs font-bold uppercase tracking-wider">
                    {plan.badge}
                  </span>
                )}

                <MaterialIcon
                  icon={plan.icon}
                  className="text-primary mb-4"
                  size="36px"
                />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-on-surface-variant text-sm">
                    /{plan.unit}
                  </span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <MaterialIcon
                        icon={f.included ? "check_circle" : "cancel"}
                        filled={plan.featured && f.included}
                        className={
                          f.included ? "text-primary" : "text-outline-variant"
                        }
                        size="20px"
                      />
                      <span
                        className={
                          f.included
                            ? "text-on-surface"
                            : "text-on-surface-variant line-through"
                        }
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {plan.savings && (
                  <p className="text-primary font-bold text-sm mb-4 text-center">
                    {plan.savings}
                  </p>
                )}

                <Link
                  href="/subscribe"
                  className="block text-center editorial-gradient text-white font-bold py-3.5 rounded-full mb-3 hover:opacity-90 transition-opacity"
                >
                  Subscribe Now
                </Link>
                <Link
                  href={WHATSAPP_URL}
                  className="flex items-center justify-center gap-2 text-center border border-outline-variant text-on-surface font-semibold py-3.5 rounded-full hover:bg-surface-container transition-colors"
                >
                  <MaterialIcon icon="chat" size="18px" />
                  WhatsApp Inquiry
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise of Purity Bento */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 bg-surface-container-lowest rounded-[2rem] p-10 md:p-14 relative overflow-hidden">
              <h2 className="text-[2.5rem] font-bold tracking-tight mb-4">
                The Promise of Purity
              </h2>
              <p className="text-on-surface-variant leading-relaxed max-w-xl mb-8">
                Every meal we deliver is crafted from locally sourced, seasonal
                produce — free of preservatives, refined sugars, and artificial
                colors. What reaches your table is nothing but honest, wholesome
                food.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-xs uppercase tracking-wider">
                  Nutritious
                </span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-bold text-xs uppercase tracking-wider">
                  Prepared Daily
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

            <div className="md:col-span-4 bg-primary rounded-[2rem] p-10 flex flex-col justify-between min-h-[280px] text-white">
              <MaterialIcon icon="local_shipping" className="text-4xl" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Daily Fresh Delivery
                </h3>
                <p className="text-primary-fixed text-sm leading-relaxed">
                  Meals dispatched every morning from our cloud kitchen and
                  delivered to your doorstep before lunch, across all major
                  Ahmedabad pin codes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 tracking-tighter">
            Frequently Asked Questions
          </h2>
          <p className="text-on-surface-variant mb-12">
            Got questions? We&apos;ve got answers.
          </p>

          <div className="space-y-4 text-left">
            <details className="group bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                Can I pause my subscription?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Absolutely. You can pause your subscription at any time from
                your dashboard or by messaging us on WhatsApp. Paused days are
                automatically credited to your next billing cycle — no questions
                asked.
              </p>
            </details>

            <details className="group bg-surface-container-lowest rounded-2xl p-6 editorial-shadow">
              <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg">
                Do you cater to specific allergies?
                <MaterialIcon
                  icon="expand_more"
                  className="text-on-surface-variant transition-transform duration-300 group-open:rotate-180"
                  size="24px"
                />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">
                Yes. During onboarding we capture your dietary preferences and
                allergen profile. Our kitchen team flags every ingredient, and
                you can swap items freely within your plan. Common allergens like
                nuts, gluten, and dairy are always clearly labelled.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
