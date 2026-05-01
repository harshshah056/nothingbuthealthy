import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL, COMPANY_INFO } from "@/utils/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import MenuContent from "./MenuContent";
import { allMenuItems, fruitBowls, juices, type MenuItem } from "./menuData";

export const metadata: Metadata = {
  title: "Menu – Fresh Fruit Bowls & Cold-Pressed Juices in Ahmedabad",
  description:
    "Browse our curated daily menu — 6 signature fruit bowls and 6 cold-pressed juices in Ahmedabad. Farm-fresh, zero preservatives, delivered before 9 AM. Bowls from ₹179, juices from ₹79.",
  alternates: {
    canonical: `${SITE_URL}/menu/`,
  },
  openGraph: {
    title:
      "Menu – Fruit Bowls & Cold-Pressed Juices | Nothing But Healthy Ahmedabad",
    description:
      "6 signature fruit bowls + 6 cold-pressed juices. Hand-cut every morning at 4 AM in our Ahmedabad kitchen. Pair a bowl with a juice and save 15%.",
    url: `${SITE_URL}/menu/`,
  },
};

const itemUrl = (item: MenuItem) => `${SITE_URL}/menu/#${item.slug}`;

const productOf = (item: MenuItem) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": itemUrl(item),
  name: item.title,
  description: item.description,
  image: item.image,
  brand: {
    "@type": "Brand",
    name: COMPANY_INFO.name,
  },
  category: item.category,
  url: itemUrl(item),
  ...(item.size && {
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Serving size",
        value: item.size,
      },
    ],
  }),
  offers: {
    "@type": "Offer",
    price: item.price,
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    url: itemUrl(item),
    seller: {
      "@type": "Organization",
      name: COMPANY_INFO.name,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "City",
      name: COMPANY_INFO.city,
    },
    priceValidUntil: "2099-12-31",
    deliveryLeadTime: {
      "@type": "QuantitativeValue",
      minValue: 1,
      maxValue: 1,
      unitCode: "DAY",
    },
  },
});

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
      hasMenuItem: fruitBowls.map((item) => ({
        "@type": "MenuItem",
        name: item.title,
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
      hasMenuItem: juices.map((item) => ({
        "@type": "MenuItem",
        name: item.title,
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

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Daily fruit bowls and cold-pressed juices – Ahmedabad",
  numberOfItems: allMenuItems.length,
  itemListElement: allMenuItems.map((item, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    url: itemUrl(item),
    item: productOf(item),
  })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Menu" }]} />

      {/* Hero Section */}
      <section className="relative px-6 md:px-12 mb-10 overflow-hidden">
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
              slow-pressed every morning, delivered across{" "}
              <Link href="/contact" className="text-primary font-bold hover:underline">
                30+ Ahmedabad neighbourhoods
              </Link>{" "}
              before 9 AM. Going daily?{" "}
              <Link href="/plans" className="text-primary font-bold hover:underline">
                Subscriptions save up to 20%
              </Link>
              .
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
