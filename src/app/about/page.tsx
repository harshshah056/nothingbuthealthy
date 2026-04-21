import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
          <div className="md:col-span-7">
            <p className="text-primary font-bold uppercase text-xs tracking-[0.2em] mb-6">
              Our Essence
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.05] mb-8">
              Freshness is a{" "}
              <span className="text-primary italic">Philosophy.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
              We don&apos;t just make meals — we cultivate a way of living. Every
              leaf, every grain, every drizzle of cold-pressed oil is chosen with
              the same care you&apos;d bring to your own kitchen. Nothing But
              Healthy was born from a simple belief: when food is honest, the
              body thrives.
            </p>
          </div>
          <div className="md:col-span-5">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgaGUu1RI8iPp-wlb1R85f-9qd_tdV9hShaQKkr8-xsTnFhw7MMf3GXXfIgu_Edrnwa3c6Hi8oNYNT5W2YrX6PrjOTs6p6SUtX_crO2d2A4FgcwwILuux1-d5WVGydutyjbkWJ4tfnJCUoVEEr8_7-w0TNeV0rV73roNYQ1n6csyTVOGKWYZfQG6p2r2V1Q3_u4NzlCijvsdlL2rYF1iF5Bdld0DnCse72Ll39qekDlb21eqqVp-w9OYYYuEv64dTsjQ5wlThY7x83"
              alt="Fresh salad bowl with vibrant greens and seasonal produce"
              width={600}
              height={700}
              unoptimized
              className="w-full h-auto organic-shape mix-blend-multiply opacity-90"
            />
          </div>
        </div>
      </section>

      {/* Founder's Story */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDvdGv_xtjP4Ksys7pYQutVsyg3aHXnkdnsMX7_RcLuFVKyftsnYFCGtC9hevzmOnMwYQ18OsLEj4jXd1RSSnvBC8n-LfvpIvFStdojX94J-u5l8bAerdFhAL-19ryHRkL7n7GoDt1ilGT14w7QWdRi68PUf_cge4tTF_DzqhtlY4jR9kg_2CjOpiUyCYYPw6r_HWkJQSgaaKvFkjU0W3_aLNg97Dc0crz8rEBKMh09XC25wjIyoLIwXEcsa1za6FwhEW77P2GRT0M"
            alt="Founder in the kitchen crafting a fresh meal"
            width={600}
            height={600}
            unoptimized
            className="w-full aspect-square object-cover rounded-[2rem]"
          />
          <div>
            <h2 className="text-4xl font-extrabold tracking-tighter mb-6">
              The Heart Behind the Bowl
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              It started in a tiny Ahmedabad kitchen with a borrowed blender and
              a conviction that eating clean shouldn&apos;t mean eating bland.
              Our founder spent two years researching Ayurvedic nutrition,
              visiting organic farms across Gujarat, and perfecting recipes that
              marry authentic Indian flavors with modern dietary science.
            </p>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              What began as meal-prepping for friends quickly became a movement.
              Today, Nothing But Healthy serves thousands of bowls every week —
              each one still made with the same obsessive attention to
              freshness, balance, and joy.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 mb-10">
              <p className="italic text-lg text-on-surface leading-relaxed">
                &ldquo;I wanted to prove that the healthiest meal in your day
                could also be the most delicious.&rdquo;
              </p>
            </blockquote>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-black uppercase text-sm group"
            >
              Read the full journey{" "}
              <MaterialIcon
                icon="arrow_forward"
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Bento Grid */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tighter text-center mb-16">
            The Healthy Commitment
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Zero Preservatives — col-span-2 */}
            <div className="md:col-span-2 bg-secondary-container rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden relative min-h-[360px]">
              <div>
                <MaterialIcon
                  icon="eco"
                  className="text-on-secondary-container text-4xl mb-4"
                />
                <h3 className="text-2xl font-bold text-on-secondary-container mb-3">
                  Zero Preservatives
                </h3>
                <p className="text-on-secondary-container/80 leading-relaxed max-w-md">
                  Every ingredient is sourced fresh and used within 24 hours.
                  No stabilizers, no shelf-life tricks — just real food the way
                  nature intended it.
                </p>
              </div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOfK4NK2EdbxrlcDGgG2o42btMQgG-Hk77TZ5tcE2u3AengXwJV4T1QV_zMCDgEJTXKHIsJli4Qc0i57gtzvhxBVVQNUb_RQdzHmcxxdteRHWOVxnODVrowe3SrpTBwkjq1oLY4Q9QXPRxjs-JEz6eUmsx0iF7ZMVaL45y7Q57fcrnkBvSEpFxIPmIRIJIrjNmbB5PlRKEuBRGtyRrRHKWqzktNlJR5qKOWj1KrjS0TepKV8MVWVq7x-ZL1-CVRqmRzfWaeCxVx6gP"
                alt="Fresh lemons and rosemary on a cutting board"
                width={600}
                height={200}
                unoptimized
                className="w-full h-40 object-cover rounded-xl mt-6"
              />
            </div>

            {/* Daily Harvest */}
            <div className="bg-surface-container-high rounded-[2rem] p-10 flex flex-col justify-between min-h-[360px]">
              <div>
                <MaterialIcon
                  icon="local_shipping"
                  className="text-on-surface text-4xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">Daily Harvest</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Our kitchen fires up before sunrise. Meals are prepped,
                  packed, and dispatched the same morning so every bite is at
                  peak freshness.
                </p>
              </div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxDoYhQYeJKZyz0ICufyw2XPfxrD6aG-PU1oOYV79HVDdfH07BIH7OxkwqX19MJb_BIA2IJ2Za03OV1mQLKGJUZ6SaVEQVUYFuiMxKteCODgWWmAyf7FuepHfrAxDNhcBHa0kgH3tTouolkIco5YhUOAZI9yBSbxvBxWibEDhQlNzoR6_XirvF9_xTnagI9_XKQE1HbXdXBugRzE1XQ8-eUT6iDUvog07OMFk7xq8ZSU_ifG1Ko1NlrLPog3mEOcLJ5nRl-TCWWHJH"
                alt="Fresh vegetables and greens"
                width={400}
                height={400}
                unoptimized
                className="w-full aspect-square object-cover rounded-xl mt-6"
              />
            </div>

            {/* Science-Backed */}
            <div className="bg-tertiary-container text-on-tertiary-container rounded-[2rem] p-10 flex flex-col justify-between min-h-[320px]">
              <div>
                <MaterialIcon
                  icon="nutrition"
                  filled
                  className="text-4xl mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">Science-Backed</h3>
                <p className="opacity-80 leading-relaxed">
                  Every menu is designed with a certified nutritionist. Macro
                  ratios, micronutrient density, and glycemic impact are
                  balanced in every bowl.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container/10 font-bold text-xs uppercase tracking-wider">
                  Keto Friendly
                </span>
                <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container/10 font-bold text-xs uppercase tracking-wider">
                  High Protein
                </span>
              </div>
            </div>

            {/* Our Culinary Vision — col-span-2 */}
            <div className="md:col-span-2 bg-surface-container-lowest shadow-sm rounded-[2rem] p-10 flex flex-col md:flex-row items-center gap-8">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNTnBg6tV9jzXoLDsGjOHByl4PNk6ejT5auE_Hv2R0h8dHr7_RuIdDwTg5S8tCg_s1-22PSTa7NOkUhL1uXOrAlnwmdGn3qaY4Lhe6NvaX4XHwFArSuGP8oU1XJdXILPizPFt-CDT7dbcz9OnXN5D-Ee1H03vwfUDhOzSIR6dwhw2REelfUyBprpW02sOxome2wDvkaX4aGCiGBB7m-OhaVxRT1SEE10IFw5BuB724xGcQkcLW0Rwwi3XC9aW_gs5WIOEljwMzQ2f1"
                alt="Chef hands preparing a fresh dish"
                width={160}
                height={160}
                unoptimized
                className="w-40 h-40 rounded-full object-cover border-4 border-outline-variant shrink-0"
              />
              <div>
                <h3 className="text-2xl font-bold mb-3">
                  Our Culinary Vision
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  We see food as a craft, not a commodity. Our chefs draw
                  inspiration from traditional Indian kitchens, global
                  superfoods, and the changing seasons to create menus that
                  nourish deeply and delight completely. The goal is simple:
                  make the healthiest meal of your day the one you look forward
                  to most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 px-6 md:px-12 mb-24">
        <div className="max-w-5xl mx-auto bg-primary-container rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-6 tracking-tighter">
              Join the Conscious Living Movement
            </h2>
            <p className="text-on-primary-container text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Get weekly recipes, wellness tips, and exclusive subscriber-only
              offers delivered straight to your inbox. No spam, just goodness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full bg-white text-on-surface placeholder:text-outline text-base outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-8 py-4 bg-white text-primary font-bold rounded-full text-base hover:scale-105 transition-transform shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-tertiary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
        </div>
      </section>
    </>
  );
}
