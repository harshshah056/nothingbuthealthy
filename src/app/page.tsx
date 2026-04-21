import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";

const testimonials = [
  {
    quote:
      "The morning energy boost from the seasonal fruit bowls was immediate. I no longer reach for a third chai at 3 PM. These meals are life-changing.",
    name: "Sarah M.",
    role: "Yoga Instructor",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdDNy0Ca47CXSJ0amkWFTXcBQL2hZE5affJcz6MOtFPoIP2eZEGdbghT9chI7n46dGbsc2X59De6INLTRLkh5SKeMFHycmr0Ey9CIxdPBwMQGUKw1FvkodKOLBbGk8GuIv9r4E2VAYNTBZ5vMWvoMTImJcn8bwUlJnmW8B2nSnZgPFFAujU4m8w_3PsHNVBjQjnmX2SmNY7K0S7hwvz162TL-x6Cr8OFh_9dyRGHPZpw2ERqDMk8fC-5IqU76iNNofDy1KvvNdbQ8n",
  },
  {
    quote:
      "Clean vegetarian eating used to be a chore. Now it's the highlight of my day. The farm-fresh paneer and chickpeas are unlike anything from a supermarket.",
    name: "David K.",
    role: "Marathon Runner",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxzOfRbYWWNN7CD_0fEflgKUKPQhLen3ljT_BlceigZtlNvk8f34qXpGGmmKCayl7fAFA9OFFmgyegi8TcFGyBsBYt8SG9PuM0XZs73LQJhfjnS8dELpgciCGaZPAcAJfq4PxtvLG6qgS3h-slEFH_UeScvMBYtDbpHLyANkQdmqCRtsmc3oeYjbneKYuvQsHtjFaKBvL8rFup6e6Il4pDABGPcUkSg3gvd7M1445xhVgqBPb4AOtSfI-tEh7akhhu9-qHuwGAG_B",
  },
  {
    quote:
      "Finally, a pure veg meal service that actually cares about authentic Indian flavors as much as the nutrition. My gut and my conscience are happy.",
    name: "Elena R.",
    role: "Nutritionist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBp3ZNZvUQ7fPEGRzZMvAoDYWOC6bh9b36R7CiHwZfEND7lIHZKb22dDUm247Bkvb3uQRD8u46ZBHkFvgOU8Cgb9Lq3RueAUuLO9BEE0_ywVedRA66h9Dj7CsRdT5Gm2DtFbOu6gzQgJA5YlhNFuA9YrG6DUQpRVSY9ZaF0obCy28NrU_K8N7v_lSI0VXhTtP8L6VcuPFdpKwyIoUIj5PjEKu9N1OCDAcV1C9pAFVZ2_ODh6wrkZ0tagOS3eTBNDR22e1eMCCuCbo0O",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 mb-20 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto">
          <div className="md:col-span-6 z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              100% Veg &amp; Farm-Fresh
            </span>
            <h1 className="text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-on-background mb-8 tracking-tighter">
              Sattvic health, <br />
              <span className="text-primary italic">delivered</span> to your
              door.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md mb-10 leading-relaxed">
              Chef-crafted vegetarian meals using farm-fresh ingredients like
              rich paneer, wholesome chickpeas, and seasonal desi fruits.
              Delivering fresh, nutritional abundance across Ahmedabad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-full text-lg active:scale-95 transition-transform"
              >
                Explore Menu
              </Link>
              <Link
                href="/plans"
                className="px-8 py-4 bg-secondary-container text-on-secondary-container font-bold rounded-full text-lg active:scale-95 transition-transform"
              >
                View Plans
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 relative h-[500px] md:h-[700px]">
            <div className="absolute inset-0 bg-primary-fixed rounded-[2rem] -rotate-3 translate-x-4 translate-y-4" />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDacF1wj9h7j5vgX-0LCZwKKCZhm4zdaZLKtDQigJfdwo0L2cLoi73OPuudg6JlVnA7KivqieKRhloGEd628lN8oanGgZ6wj3OkFht7bpCtZyEMyUn6iIuqRyEkmFGg6QPPWE3pFJAOUKY8_CS7_EZcHMz70HEWRHuzH-HCfK5zEYdtxaMlK7AnqE5Hj1jpfEgmDh4QWiB0O6x6ERAgS3cKoWhRrdHa44NU2Rui5BQ0lNqBkD5PLogQvyLy_PVbG-XHXAI-ERN153gT"
              alt="Fresh fruit bowl with dragon fruit, berries, kiwi, and honey seeds"
              fill
              className="object-cover rounded-[2rem] shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Brand Story Bento Grid */}
      <section className="bg-surface-container-low py-24 px-6 md:px-12">
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
            {/* Large Feature */}
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col md:flex-row gap-8 items-center overflow-hidden">
              <div className="flex-1">
                <MaterialIcon
                  icon="auto_stories"
                  className="text-primary text-4xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Crafted with Intention
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Every recipe starts with farm-fresh, locally-sourced desi
                  produce from around Ahmedabad. We believe true wellness comes
                  from wholesome, vegetarian nourishment rooted in our
                  traditions.
                </p>
              </div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp1zQeEWMZXDtfGq0GI0UZA0GJgVRS-9sF8L6PWVJqHgsCjk-dqubWbH4CqThAGC8CTWUUJ0bFqViWbrm6kN12E7arRzbWUWtaKdtPSDqG3i5tZRcxzwx7oXznSUgbKAa6clWbjl6yzQTNn-3VIPcRaku382q0GgNKFe6eAjQm5UMCi0H43UDMv5cC_HI7rBfg59vCBO3OvwbsC4QZ48JkxSqw6si58t3PJEHGR_6dtknjt_FMjhP4zqPNm_7tTpZBZPbglpgt3UFA"
                alt="Chef picking fresh greens in greenhouse"
                width={256}
                height={256}
                className="w-full md:w-64 h-64 object-cover rounded-xl"
              />
            </div>
            {/* Small Feature 1 */}
            <div className="bg-primary text-white p-10 rounded-[2rem] flex flex-col justify-between min-h-[280px]">
              <MaterialIcon icon="eco" className="text-4xl" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  100% Fresh &amp; Natural
                </h3>
                <p className="text-primary-fixed text-sm">
                  Unprocessed, wholesome ingredients like seasonal Indian fruits
                  and veggies. Just nature&apos;s best.
                </p>
              </div>
            </div>
            {/* Small Feature 2 */}
            <div className="bg-secondary-fixed p-10 rounded-[2rem] flex flex-col justify-between min-h-[280px]">
              <MaterialIcon
                icon="local_shipping"
                className="text-on-secondary-fixed text-4xl"
              />
              <div>
                <h3 className="text-xl font-bold text-on-secondary-fixed mb-2">
                  Zero Waste
                </h3>
                <p className="text-on-secondary-fixed-variant text-sm">
                  Compostable packaging and carbon-neutral delivery routes.
                </p>
              </div>
            </div>
            {/* Medium Feature */}
            <div className="md:col-span-2 bg-surface-container-high p-10 rounded-[2rem] flex items-center justify-between overflow-hidden relative min-h-[200px]">
              <div className="z-10 max-w-sm">
                <h3 className="text-2xl font-bold mb-4">Subscription Plans</h3>
                <p className="mb-6">
                  Set your wellness on autopilot with curated weekly tiffin boxes
                  tailored to your body&apos;s needs. Plans starting at
                  ₹2,499/week.
                </p>
                <Link
                  href="/plans"
                  className="inline-flex items-center gap-2 text-primary font-black uppercase text-sm group"
                >
                  Explore Plans{" "}
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
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold mb-4 tracking-tighter">
              Stories of Transformation
            </h2>
            <p className="text-on-surface-variant">
              Real results from our community members.
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

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 mb-24">
        <div className="max-w-5xl mx-auto bg-primary-container rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-white font-extrabold mb-8 tracking-tighter">
              Ready to feel the difference?
            </h2>
            <p className="text-on-primary-container text-xl mb-12 max-w-2xl mx-auto">
              Join over 10,000+ healthy eaters who have swapped processed snacks
              for wholesome, pure veg meals starting at just ₹299/day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/plans"
                className="bg-white text-primary px-10 py-5 rounded-full font-black text-lg shadow-xl hover:scale-105 transition-transform"
              >
                Get Started Today
              </Link>
              <Link
                href="/contact"
                className="bg-primary border border-primary-fixed/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
              >
                Talk to an Expert
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
