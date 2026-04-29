"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import MaterialIcon from "@/components/ui/MaterialIcon";
import VegBadge from "@/components/ui/VegBadge";
import { useCart } from "@/contexts/CartContext";

type Category = "All" | "Fruit Bowls" | "Juices";

const categories: Category[] = ["All", "Fruit Bowls", "Juices"];

interface MenuItem {
  title: string;
  category: "Fruit Bowls" | "Juices";
  price: number;
  size?: string;
  tag: string;
  tagBg: string;
  description: string;
  ingredients: string;
  image: string;
  alt: string;
}

const fruitBowls: MenuItem[] = [
  {
    title: "Desi Sunrise Bowl",
    category: "Fruit Bowls",
    price: 199,
    tag: "Local Favourite",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "A morning classic built on Gujarat-grown produce — the easiest way to start your day right.",
    ingredients: "Banana · Papaya · Pomegranate · Guava · Chia seeds",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Desi Sunrise fruit bowl with banana, papaya, pomegranate and chia seeds — fresh fruit subscription delivered in Ahmedabad",
  },
  {
    title: "Watermelon Cooler",
    category: "Fruit Bowls",
    price: 179,
    tag: "Hydrating",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "Summer hero. Hydrating, electrolyte-rich, and ready to fight Ahmedabad heat.",
    ingredients: "Watermelon · Muskmelon · Basil seeds · Mint · Lime",
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Watermelon Cooler bowl with muskmelon, basil seeds and mint — hydrating fruit bowl delivered in Ahmedabad",
  },
  {
    title: "Protein Power Bowl",
    category: "Fruit Bowls",
    price: 259,
    tag: "High Protein",
    tagBg: "bg-secondary-container text-on-secondary-container",
    description:
      "Built for gym mornings. Banana, peanut butter, almonds — sustained fuel for 4+ hours.",
    ingredients: "Banana · Peanut butter · Almond · Chia · Almond milk",
    image:
      "https://images.unsplash.com/photo-1638813133319-897c2e3eb13b?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Protein Power fruit bowl with banana, raspberry and chia seeds — high-protein 100% vegetarian fruit bowl for gym mornings in Ahmedabad",
  },
  {
    title: "Alphonso Bliss",
    category: "Fruit Bowls",
    price: 279,
    tag: "Seasonal",
    tagBg: "bg-secondary-container text-on-secondary-container",
    description:
      "Pure summer in a bowl. Hand-picked Valsad alphonsos at peak ripeness with toasted nuts.",
    ingredients: "Alphonso mango · Almonds · Pistachio · Cardamom · Honey",
    image:
      "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Alphonso Bliss bowl with hand-picked Valsad alphonso mango, almonds and pistachio — seasonal fruit bowl in Ahmedabad",
  },
  {
    title: "The Berry Zenith",
    category: "Fruit Bowls",
    price: 299,
    tag: "Energy Boost",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "A vibrant medley of wild berries and acai topped with raw honey and coconut flakes.",
    ingredients: "Strawberry · Blueberry · Acai · Chia seeds · Honey · Coconut",
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Berry Zenith acai bowl with strawberry, blueberry, chia seeds and honey — energy-boost fruit bowl in Ahmedabad",
  },
  {
    title: "The Antioxidant Stack",
    category: "Fruit Bowls",
    price: 329,
    tag: "Skin Glow",
    tagBg: "bg-primary-container text-on-primary-container",
    description:
      "A polyphenol powerhouse for clearer skin and stronger immunity. Doctor-approved.",
    ingredients: "Blueberry · Pomegranate · Kiwi · Walnut · Flax seeds",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Antioxidant Stack bowl with blueberry, pomegranate, kiwi and walnut — skin-glow polyphenol-rich fruit bowl in Ahmedabad",
  },
];

const juices: MenuItem[] = [
  {
    title: "Immunity Shot",
    category: "Juices",
    price: 79,
    size: "60ml",
    tag: "Wellness Shot",
    tagBg: "bg-primary-container text-on-primary-container",
    description:
      "60ml of concentrated firepower. The pre-meeting, pre-flight, pre-anything immunity boost.",
    ingredients: "Ginger · Turmeric · Lemon · Black pepper · Cayenne",
    image:
      "https://images.unsplash.com/photo-1606755456206-b25206cde27d?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "60ml ginger turmeric immunity shot with lemon and black pepper — cold-pressed wellness shot delivered in Ahmedabad",
  },
  {
    title: "Watermelon Mint",
    category: "Juices",
    price: 129,
    size: "300ml",
    tag: "Hydrating",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "Pure summer hydration. Lycopene-rich, electrolyte-balanced, the city's best heat-beater.",
    ingredients: "Watermelon · Mint · Lemon · Pink salt",
    image:
      "https://images.unsplash.com/photo-1683166263544-e754e85c3e7c?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Glass of cold-pressed watermelon mint juice with fresh watermelon slice — hydrating summer juice delivered in Ahmedabad",
  },
  {
    title: "Coco-Cane",
    category: "Juices",
    price: 139,
    size: "300ml",
    tag: "Summer Cooler",
    tagBg: "bg-secondary-container text-on-secondary-container",
    description:
      "Gujarat's nostalgic summer drink, reborn. Cold-pressed sugarcane meets tender coconut water — naturally sweet, deeply hydrating.",
    ingredients: "Cold-pressed sugarcane · Tender coconut water · Lemon · Ginger",
    image:
      "https://images.unsplash.com/photo-1642522538458-0ece1670d495?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Coco-Cane cold-pressed juice in tall glass — sugarcane and tender coconut water blend — Gujarati summer cooler delivered in Ahmedabad",
  },
  {
    title: "ABC Classic",
    category: "Juices",
    price: 149,
    size: "300ml",
    tag: "Iron Boost",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "Apple-Beet-Carrot. The OG. Three ingredients, every micronutrient your body craves.",
    ingredients: "Apple · Beetroot · Carrot · Ginger",
    image:
      "https://images.unsplash.com/photo-1638176067000-9e2c89f5a3f1?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "ABC Classic cold-pressed juice — apple, beetroot, carrot and ginger — iron-boost juice delivered in Ahmedabad",
  },
  {
    title: "Coco-Crush",
    category: "Juices",
    price: 159,
    size: "300ml",
    tag: "Tender Coconut",
    tagBg: "bg-primary-container text-on-primary-container",
    description:
      "The 100% pure daab experience. Soft tender coconut malai blended into chilled coconut water with a whisper of pink salt.",
    ingredients: "Tender coconut water · Fresh tender coconut malai · Pink salt",
    image:
      "https://images.unsplash.com/photo-1575828668319-768718f23925?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Coco-Crush — fresh tender coconut water with malai cream — Bali-style daab hydration juice delivered in Ahmedabad",
  },
  {
    title: "Greens Reset",
    category: "Juices",
    price: 169,
    size: "300ml",
    tag: "Alkalising",
    tagBg: "bg-secondary-container text-on-secondary-container",
    description:
      "The cleanest sip you'll have all week. Iron, chlorophyll, and a kick of ginger.",
    ingredients: "Spinach · Cucumber · Apple · Ginger · Lemon · Mint",
    image:
      "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Greens Reset cold-pressed green juice — spinach, cucumber, apple, ginger — alkalising juice in Ahmedabad",
  },
];

function makeItemId(item: MenuItem): string {
  return `${item.category}::${item.title}${item.size ? `::${item.size}` : ""}`;
}

function MenuCard({ item }: { item: MenuItem }) {
  const { addItem, items: cartItems } = useCart();
  const id = makeItemId(item);
  const inCart = cartItems.find((ci) => ci.id === id);

  const handleAdd = () => {
    addItem({
      id,
      title: item.title,
      price: item.price,
      category: item.category,
      size: item.size,
    });
  };

  return (
    <article className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden soft-ambient-shadow group flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${item.tagBg}`}
        >
          {item.tag}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-lg">{item.title}</h3>
          <VegBadge />
        </div>
        <div className="flex items-baseline gap-2 mb-2">
          <p className="text-primary font-extrabold text-xl">₹{item.price}</p>
          {item.size && (
            <p className="text-xs uppercase tracking-widest text-outline">
              {item.size}
            </p>
          )}
        </div>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-3">
          {item.description}
        </p>
        <p className="text-xs text-outline leading-relaxed mb-4 flex-1">
          {item.ingredients}
        </p>
        <button
          type="button"
          onClick={handleAdd}
          aria-label={`Add ${item.title} to order`}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-full editorial-gradient text-white font-bold text-sm active:scale-95 transition-transform cursor-pointer"
        >
          {inCart ? (
            <>
              <MaterialIcon icon="check_circle" filled size="18px" />
              Added · {inCart.qty} in cart
            </>
          ) : (
            <>
              <MaterialIcon icon="add_shopping_cart" size="18px" />
              Add to Order
            </>
          )}
        </button>
      </div>
    </article>
  );
}

interface MenuSectionProps {
  title: string;
  description: string;
  iconLabel: string;
  items: MenuItem[];
}

function MenuSection({ title, description, iconLabel, items }: MenuSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="px-6 md:px-12 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="flex items-end gap-4">
            <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest">
              {iconLabel}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter">
              {title}
            </h2>
          </div>
          <p className="text-on-surface-variant max-w-md text-sm">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <MenuCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MenuContent() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBowls = useMemo(() => {
    if (activeCategory !== "All" && activeCategory !== "Fruit Bowls") return [];
    if (!searchQuery) return fruitBowls;
    const q = searchQuery.toLowerCase();
    return fruitBowls.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.ingredients.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
    );
  }, [activeCategory, searchQuery]);

  const filteredJuices = useMemo(() => {
    if (activeCategory !== "All" && activeCategory !== "Juices") return [];
    if (!searchQuery) return juices;
    const q = searchQuery.toLowerCase();
    return juices.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.ingredients.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q)
    );
  }, [activeCategory, searchQuery]);

  const totalResults = filteredBowls.length + filteredJuices.length;

  return (
    <>
      {/* Search & Filter Bar */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative flex-1 w-full sm:max-w-sm">
            <MaterialIcon
              icon="search"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-outline"
              size="20px"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bowls, juices, ingredients..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-surface-container-low border border-outline-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline"
            />
          </div>
          <div className="flex gap-2 flex-wrap" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {cat}
                {cat === "Fruit Bowls" && (
                  <span className="ml-2 text-xs opacity-70">{fruitBowls.length}</span>
                )}
                {cat === "Juices" && (
                  <span className="ml-2 text-xs opacity-70">{juices.length}</span>
                )}
                {cat === "All" && (
                  <span className="ml-2 text-xs opacity-70">
                    {fruitBowls.length + juices.length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {totalResults === 0 && (
        <section className="px-6 md:px-12 mb-20">
          <div className="max-w-md mx-auto text-center bg-surface-container-low rounded-[2rem] p-8 md:p-12">
            <MaterialIcon icon="search_off" className="text-outline mb-4" size="48px" />
            <h3 className="text-xl font-bold mb-2">No matches</h3>
            <p className="text-on-surface-variant text-sm">
              Try a different search term or category.
            </p>
          </div>
        </section>
      )}

      <MenuSection
        title="Signature Fruit Bowls"
        description="Hand-cut every morning at 4 AM in our Ahmedabad kitchen. Sourced from farms across Gujarat."
        iconLabel="Fruit Bowls"
        items={filteredBowls}
      />

      <MenuSection
        title="Cold-Pressed Juices"
        description="Slow-pressed for max nutrient retention. No added sugar, no preservatives, no heat treatment."
        iconLabel="Juices"
        items={filteredJuices}
      />

      {/* Subscription CTA Bento */}
      <section className="px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 relative rounded-[2rem] overflow-hidden min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1564834744159-ff0ea41ba4b9?w=1400&h=900&fit=crop&auto=format&q=80"
                alt="Build your own daily fruit bowl and cold-pressed juice combo in Ahmedabad"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-4">
                  Bowl + Juice Combo
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  Pair a bowl with a juice. Save 15%.
                </h2>
                <p className="text-white/80 mb-6 max-w-md">
                  Mix any fruit bowl with any cold-pressed juice and we&apos;ll
                  knock 15% off your daily order. The complete morning ritual.
                </p>
                <button className="px-8 py-3.5 rounded-full editorial-gradient text-white font-bold active:scale-95 transition-transform cursor-pointer">
                  Build My Combo
                </button>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 bg-secondary-container rounded-[2rem] p-8 flex flex-col justify-between min-h-[320px]">
              <div>
                <MaterialIcon
                  icon="redeem"
                  className="text-on-secondary-container text-4xl mb-6"
                />
                <h3 className="text-2xl font-bold text-on-secondary-container mb-3">
                  The Daily Subscription
                </h3>
                <p className="text-on-secondary-container/80 leading-relaxed">
                  Get your favourite bowl or juice delivered every morning.
                  Save{" "}
                  <span className="font-extrabold">15%</span> versus single
                  orders. Pause anytime.
                </p>
              </div>
              <button className="mt-6 w-full py-3.5 rounded-full bg-on-secondary-container text-secondary-container font-bold text-sm active:scale-95 transition-transform cursor-pointer">
                Subscribe &amp; Save
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
