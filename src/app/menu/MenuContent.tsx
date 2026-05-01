"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "@/components/ui/MaterialIcon";
import VegBadge from "@/components/ui/VegBadge";
import { useCart } from "@/contexts/CartContext";
import { WHATSAPP_URL } from "@/utils/constants";
import { trackEvent } from "@/utils/analytics";
import {
  fruitBowls,
  juices,
  makeItemId,
  type MenuItem,
} from "./menuData";

type Category = "All" | "Fruit Bowls" | "Juices";

const categories: Category[] = ["All", "Fruit Bowls", "Juices"];

function quickOrderUrl(item: MenuItem): string {
  const sizeLabel = item.size ? ` (${item.size})` : "";
  const message = `Hi Nothing But Healthy! I'd like to order *${item.title}${sizeLabel}* — ₹${item.price}.\n\nPlease confirm tomorrow's delivery slot and share UPI details. Thank you!`;
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
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
    <article
      id={item.slug}
      className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden soft-ambient-shadow group flex flex-col scroll-mt-24"
    >
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
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <button
            type="button"
            onClick={handleAdd}
            aria-label={`Add ${item.title} to order`}
            className="flex items-center justify-center gap-2 py-3 rounded-full editorial-gradient text-white font-bold text-sm active:scale-95 transition-transform cursor-pointer"
          >
            {inCart ? (
              <>
                <MaterialIcon icon="check_circle" filled size="18px" />
                Added · {inCart.qty}
              </>
            ) : (
              <>
                <MaterialIcon icon="add_shopping_cart" size="18px" />
                Add to cart
              </>
            )}
          </button>
          <a
            href={quickOrderUrl(item)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${item.title} on WhatsApp`}
            title="Order this item directly on WhatsApp"
            onClick={() =>
              trackEvent("whatsapp_click", {
                source: "menu-quick-order",
                item: item.title,
                value: item.price,
              })
            }
            className="flex items-center justify-center w-12 rounded-full bg-[#25D366] text-white active:scale-95 transition-transform cursor-pointer hover:opacity-90"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
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
            <MenuCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Sticky mobile checkout bar — shows once items are in the cart. Drives
 *  cart-open conversion on phones where the small floating cart button is
 *  easy to miss. Hidden on md+ screens (desktop has the floating cart fab). */
function StickyCheckoutBar() {
  const { itemCount, total, subtotal, comboDiscountActive, open, hydrated } =
    useCart();
  if (!hydrated || itemCount === 0) return null;

  const handleClick = () => {
    trackEvent("view_cart", {
      source: "menu-sticky-bar",
      subtotal,
      value: total,
      quantity: itemCount,
    });
    open();
  };

  return (
    <div
      role="region"
      aria-label="Cart summary"
      className="fixed bottom-20 left-3 right-3 z-40 md:hidden"
    >
      <button
        type="button"
        onClick={handleClick}
        className="w-full flex items-center justify-between gap-3 bg-on-surface text-surface rounded-full pl-5 pr-2 py-2 shadow-2xl active:scale-[0.99] transition-transform cursor-pointer"
      >
        <span className="flex items-center gap-2 min-w-0">
          <MaterialIcon icon="shopping_bag" filled size="20px" />
          <span className="font-bold text-sm">
            {itemCount} item{itemCount === 1 ? "" : "s"} · ₹{total}
            {comboDiscountActive && (
              <span className="opacity-70 font-normal"> · combo 15% off</span>
            )}
          </span>
        </span>
        <span className="flex items-center gap-1 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold shrink-0">
          View cart
          <MaterialIcon icon="arrow_forward" size="14px" />
        </span>
      </button>
    </div>
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
      {/* Urgency / order-window strip — sets a hard deadline for tomorrow's
          delivery, which materially lifts mobile conversion. */}
      <section className="px-6 md:px-12 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-tertiary-container/70 text-on-tertiary-container">
            <div className="flex items-start sm:items-center gap-3">
              <MaterialIcon icon="schedule" filled size="22px" className="shrink-0" />
              <p className="text-sm leading-snug">
                <span className="font-extrabold">Order by 6 PM today</span>{" "}
                <span className="opacity-80">
                  → bowls cut at 4 AM, delivered before 9 AM tomorrow across
                  Ahmedabad.
                </span>
              </p>
            </div>
            <Link
              href="/plans"
              className="text-xs font-extrabold uppercase tracking-widest underline-offset-2 hover:underline shrink-0"
            >
              Save 20% with a monthly plan →
            </Link>
          </div>
        </div>
      </section>

      {/* Search & Filter Bar */}
      <section className="px-6 md:px-12 mb-12">
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
                <p className="text-white/80 max-w-md">
                  Add at least one fruit bowl <strong>and</strong> one
                  cold-pressed juice to your cart and the 15% combo discount
                  applies <strong>automatically</strong> at checkout. The
                  complete morning ritual — no codes, no fuss.
                </p>
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
              <Link
                href="/plans"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-on-secondary-container text-secondary-container font-bold text-sm active:scale-95 transition-transform cursor-pointer"
              >
                Let&apos;s Start Healthy Life
                <MaterialIcon icon="arrow_forward" size="18px" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StickyCheckoutBar />
    </>
  );
}
