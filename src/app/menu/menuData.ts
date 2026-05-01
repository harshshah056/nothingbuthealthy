/**
 * Single source of truth for menu items.
 * Imported by MenuContent.tsx (rendering, cart) AND menu/page.tsx (Product /
 * ItemList JSON-LD). Keeping the data here prevents the rendered cards and
 * the search-engine schema from drifting apart.
 */

export type MenuCategory = "Fruit Bowls" | "Juices";

export interface MenuItem {
  /** Stable URL slug — used for in-page anchors and Product @id. */
  slug: string;
  title: string;
  category: MenuCategory;
  /** Price in INR. */
  price: number;
  /** Optional serving size (e.g. "300ml") shown next to the price. */
  size?: string;
  /** Short marketing tag rendered in the corner of the card. */
  tag: string;
  /** Tailwind classes for the tag pill. */
  tagBg: string;
  description: string;
  /** Comma / dot-separated ingredient list. */
  ingredients: string;
  image: string;
  alt: string;
}

export const fruitBowls: MenuItem[] = [
  {
    slug: "desi-sunrise-bowl",
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
    slug: "watermelon-cooler-bowl",
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
    slug: "protein-power-bowl",
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
    slug: "alphonso-bliss",
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
    slug: "berry-zenith",
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
    slug: "antioxidant-stack",
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

export const juices: MenuItem[] = [
  {
    slug: "immunity-shot",
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
    slug: "watermelon-mint-juice",
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
    slug: "coco-cane",
    title: "Coco-Cane",
    category: "Juices",
    price: 139,
    size: "300ml",
    tag: "Summer Cooler",
    tagBg: "bg-secondary-container text-on-secondary-container",
    description:
      "Gujarat's nostalgic summer drink, reborn. Cold-pressed sugarcane meets tender coconut water — naturally sweet, deeply hydrating.",
    ingredients:
      "Cold-pressed sugarcane · Tender coconut water · Lemon · Ginger",
    image:
      "https://images.unsplash.com/photo-1642522538458-0ece1670d495?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Coco-Cane cold-pressed juice in tall glass — sugarcane and tender coconut water blend — Gujarati summer cooler delivered in Ahmedabad",
  },
  {
    slug: "abc-classic",
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
    slug: "coco-crush",
    title: "Coco-Crush",
    category: "Juices",
    price: 159,
    size: "300ml",
    tag: "Tender Coconut",
    tagBg: "bg-primary-container text-on-primary-container",
    description:
      "The 100% pure daab experience. Soft tender coconut malai blended into chilled coconut water with a whisper of pink salt.",
    ingredients:
      "Tender coconut water · Fresh tender coconut malai · Pink salt",
    image:
      "https://images.unsplash.com/photo-1575828668319-768718f23925?w=900&h=700&fit=crop&auto=format&q=80",
    alt: "Coco-Crush — fresh tender coconut water with malai cream — Bali-style daab hydration juice delivered in Ahmedabad",
  },
  {
    slug: "greens-reset",
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

export const allMenuItems: MenuItem[] = [...fruitBowls, ...juices];

export function makeItemId(item: Pick<MenuItem, "category" | "title" | "size">): string {
  return `${item.category}::${item.title}${item.size ? `::${item.size}` : ""}`;
}
