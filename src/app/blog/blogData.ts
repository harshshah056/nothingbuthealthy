/**
 * Single source of truth for blog article metadata.
 *
 * Used by:
 *  - /blog index page (article cards)
 *  - sitemap.ts (so each article gets indexed)
 *  - structured data on each article page
 *
 * Article body lives in its own page.tsx under `/blog/<slug>/` for easier
 * authoring and per-article schema control.
 */

export interface BlogPost {
  slug: string;
  title: string;
  /** Short SEO description (≤ 160 chars). */
  description: string;
  /** Card-friendly summary (~25–35 words). */
  excerpt: string;
  /** Hero image (Unsplash URL or /-prefixed local path). */
  heroImage: string;
  heroAlt: string;
  /** ISO date string (YYYY-MM-DD). */
  publishedAt: string;
  /** Approximate reading time in minutes. */
  readingTime: number;
  author: {
    name: string;
    role: string;
  };
  /** Topical keywords surfaced as tag pills on the card. */
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "fruit-subscription-ahmedabad-guide",
    title:
      "Fruit subscription in Ahmedabad: the complete 2026 guide",
    description:
      "Everything you need to know about daily fruit subscriptions in Ahmedabad in 2026 — how they work, pricing, delivery zones, WHO/ICMR fruit guidelines, and how to pick the right plan.",
    excerpt:
      "How daily fruit subscriptions work in Ahmedabad, what to look for, what they cost, and how a habit-forming morning bowl beats every other breakfast option in 2026.",
    heroImage:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1400&h=900&fit=crop&auto=format&q=80",
    heroAlt:
      "Fresh fruit bowl with strawberry, blueberry, kiwi and chia seeds — daily fruit subscription in Ahmedabad",
    publishedAt: "2026-05-01",
    readingTime: 6,
    author: {
      name: "Nothing But Healthy team",
      role: "Ahmedabad",
    },
    tags: [
      "Fruit subscription",
      "Ahmedabad",
      "Healthy breakfast",
      "Cold-pressed juice",
    ],
  },
];

export const getPost = (slug: string): BlogPost | undefined =>
  blogPosts.find((p) => p.slug === slug);
