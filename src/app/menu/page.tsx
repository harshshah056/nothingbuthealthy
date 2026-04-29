import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/utils/constants";
import MenuContent from "./MenuContent";

export const metadata: Metadata = {
  title: "Menu – Fresh Fruit Bowls & Cold-Pressed Juices in Ahmedabad",
  description:
    "Browse our curated daily menu — 6 signature fruit bowls and 6 cold-pressed juices in Ahmedabad. Farm-fresh, zero preservatives, delivered before 9 AM. Bowls from ₹179, juices from ₹79.",
  alternates: {
    canonical: `${SITE_URL}/menu/`,
  },
  openGraph: {
    title: "Menu – Fruit Bowls & Cold-Pressed Juices | Nothing But Healthy Ahmedabad",
    description:
      "6 signature fruit bowls + 6 cold-pressed juices. Hand-cut every morning at 4 AM in our Ahmedabad kitchen. Pair a bowl with a juice and save 15%.",
    url: `${SITE_URL}/menu/`,
  },
};

const fruitBowlItems = [
  { name: "Watermelon Cooler", description: "Watermelon, muskmelon, basil seeds, mint and lime. Hydrating summer hero.", price: "179" },
  { name: "Desi Sunrise Bowl", description: "Banana, papaya, pomegranate, guava and chia seeds. Built on Gujarat-grown produce.", price: "199" },
  { name: "Protein Power Bowl", description: "Banana, peanut butter, granola, chia and almond milk. Built for gym mornings.", price: "259" },
  { name: "Alphonso Bliss", description: "Hand-picked Valsad alphonsos with almonds, pistachio, cardamom and honey.", price: "279" },
  { name: "The Berry Zenith", description: "Strawberry, blueberry, acai, chia seeds, honey and coconut. Antioxidant medley.", price: "299" },
  { name: "The Antioxidant Stack", description: "Blueberry, pomegranate, kiwi, walnut and flax seeds. Polyphenol powerhouse.", price: "329" },
];

const juiceItems = [
  { name: "Immunity Shot", description: "Ginger, turmeric, lemon, black pepper and cayenne. 60ml of concentrated firepower.", price: "79", size: "60ml" },
  { name: "Watermelon Mint", description: "Watermelon, mint, lemon and pink salt. Pure summer hydration.", price: "129", size: "300ml" },
  { name: "Coco-Cane", description: "Cold-pressed sugarcane blended with tender coconut water, lemon and ginger. Gujarati summer cooler reborn.", price: "139", size: "300ml" },
  { name: "ABC Classic", description: "Apple, beetroot, carrot and ginger. The OG three-ingredient powerhouse.", price: "149", size: "300ml" },
  { name: "Coco-Crush", description: "Tender coconut water blended with fresh coconut malai and pink salt. The 100% pure daab experience.", price: "159", size: "300ml" },
  { name: "Greens Reset", description: "Spinach, cucumber, apple, ginger, lemon and mint. Iron-rich and alkalising.", price: "169", size: "300ml" },
];

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  name: "Nothing But Healthy Daily Menu – Ahmedabad",
  description:
    "Daily menu of chef-cut fruit bowls and cold-pressed juices, delivered fresh across Ahmedabad before 9 AM.",
  url: `${SITE_URL}/menu/`,
  hasMenuSection: [
    {
      "@type": "MenuSection",
      name: "Signature Fruit Bowls",
      description:
        "Six curated fruit bowls hand-cut every morning at 4 AM in our Ahmedabad kitchen. Sourced from farms across Gujarat.",
      hasMenuItem: fruitBowlItems.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        suitableForDiet: ["https://schema.org/VegetarianDiet"],
      })),
    },
    {
      "@type": "MenuSection",
      name: "Cold-Pressed Juices",
      description:
        "Six curated cold-pressed juices, slow-pressed for maximum nutrient retention. No added sugar, no preservatives, no heat treatment.",
      hasMenuItem: juiceItems.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        suitableForDiet: [
          "https://schema.org/VegetarianDiet",
          "https://schema.org/VeganDiet",
        ],
        ...(item.size && { menuAddOn: [{ "@type": "MenuItem", name: item.size }] }),
      })),
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Menu",
      item: `${SITE_URL}/menu/`,
    },
  ],
};

export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-end justify-between gap-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Today&apos;s Menu · Cut Fresh at 4 AM
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-on-background tracking-tighter mb-4">
              Bowls &amp; juices,
              <br />
              <span className="text-primary italic">all morning long.</span>
            </h1>
            <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
              Six curated fruit bowls and six cold-pressed juices — hand-cut and
              slow-pressed every morning, delivered across Ahmedabad before
              9 AM.
            </p>
          </div>
          <div className="hidden md:block relative w-32 h-32 -mb-4 shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&h=400&fit=crop&auto=format&q=80"
              alt="Fresh acai fruit bowl from Nothing But Healthy Ahmedabad"
              width={128}
              height={128}
              unoptimized
              className="object-cover rounded-2xl rotate-6"
            />
          </div>
        </div>
      </section>

      <MenuContent />
    </>
  );
}
