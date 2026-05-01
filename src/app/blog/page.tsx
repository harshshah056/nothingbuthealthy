import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { SITE_URL } from "@/utils/constants";
import { blogPosts } from "./blogData";

export const metadata: Metadata = {
  title: "Healthy living guides – Nothing But Healthy",
  description:
    "Long-form guides on daily fruit subscriptions, cold-pressed juices, breakfast nutrition, and healthy eating in Ahmedabad — all written by our kitchen and nutrition team.",
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
  openGraph: {
    title: "Healthy living guides – Nothing But Healthy Ahmedabad",
    description:
      "Practical long-form guides on fruit subscriptions, cold-pressed juices and breakfast nutrition in Ahmedabad.",
    url: `${SITE_URL}/blog/`,
  },
};

const blogIndexSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE_URL}/blog/`,
  name: "Nothing But Healthy guides",
  description:
    "Long-form guides on daily fruit subscriptions, cold-pressed juices and healthy eating in Ahmedabad.",
  url: `${SITE_URL}/blog/`,
  publisher: {
    "@type": "Organization",
    name: "Nothing But Healthy",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
    },
  },
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}/`,
    datePublished: post.publishedAt,
    image: post.heroImage,
    author: {
      "@type": "Organization",
      name: post.author.name,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/blog/` },
  ],
};

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
          Healthy living guides · Ahmedabad
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.05] font-extrabold tracking-tighter mb-4 max-w-3xl">
          Practical guides for{" "}
          <span className="text-primary italic">eating better</span> in
          Ahmedabad.
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
          Long-form, no-fluff articles on fruit subscriptions, cold-pressed
          juices, breakfast nutrition and how busy Ahmedabad professionals
          actually build healthier mornings — written by our kitchen team and
          backed by ICMR–NIN and WHO sources.
        </p>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}/`}
              className="group bg-surface-container-lowest rounded-[1.5rem] overflow-hidden soft-ambient-shadow flex flex-col hover:-translate-y-1 transition-transform"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.heroImage}
                  alt={post.heroAlt}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-outline mb-3 uppercase tracking-widest">
                  <MaterialIcon icon="schedule" size="14px" />
                  <span>{post.readingTime} min read</span>
                  <span className="opacity-50">·</span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="text-xl font-extrabold mb-2 leading-tight tracking-tight">
                  {post.title}
                </h2>
                <p className="text-on-surface-variant text-sm leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-primary font-bold text-sm">
                  Read the guide
                  <MaterialIcon
                    icon="arrow_forward"
                    size="16px"
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
