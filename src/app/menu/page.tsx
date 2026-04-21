"use client";

import { useState } from "react";
import Image from "next/image";
import MaterialIcon from "@/components/ui/MaterialIcon";
import VegBadge from "@/components/ui/VegBadge";

const categories = ["All", "Pure Veg", "Vegan Choice", "Gluten Free"] as const;

const fruitBowls = [
  {
    title: "The Berry Zenith",
    price: 299,
    tag: "Energy Boost",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "A vibrant medley of wild berries, acai, and chia seeds topped with raw honey and toasted coconut flakes.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAFKvPsAtZPvsHF2z5L5VxcNr2fQPjlxu1sofTY6WwwLLpLS_CHW4Ll1MbTj8pbCdlZC9zFm-f5xSbR1fJQMRsBpkmba7pu7Gm8g9ZFR7GnK3xy__uPTSWrSwi_B3k3MaZ3pg_3-0e3lBffNkdYl5TkMRiAlI5u91VAd5Um-mZiAmgm_N9pz6OBibZeePZiGn6B0VwqYkkKUfxgC4yzINmvgTJcBlVSckGEgu-V91YyPhEkWsja5pH6lMYrjb1l-O0KNuSm3VoTt-i",
  },
  {
    title: "Tropical Harvest",
    price: 349,
    tag: "Vitamin C+",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "Exotic dragonfruit, alphonso mango, and passion fruit with a mint-lime dressing and pumpkin seeds.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuALsc5zDrBA75n7o-xsf3gyFQU3Jv4lrLknGz5jY6VhdGDpnVq1p7afZ0YT7cfIZK-NIEC2HZl9DYBvL4VE5KsqIGAmYpv42kXgAGskIpuPo-vfpZ6EiAsIJQdhhJVDFqLibRYpWyAgSqnCKlUoU8pSygc015SGBP5YGLtl110sNLYSK7Zff9-LvcU9rEeyA2XM9Jk7jQXmU75MI1dJVbxu6_NBw7tu4L-FuQmfmutehHUy1X2qijaCBBSkEH8CJAdHDa-kQ5RMczYW",
  },
];

const proteinSalads = [
  {
    title: "Grilled Paneer Power Bowl",
    price: 449,
    tag: "Keto Choice",
    tagBg: "bg-secondary-container text-on-secondary-container",
    description:
      "Smoky tandoori paneer over a bed of kale, quinoa, roasted chickpeas, and tahini drizzle.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAosRwZVV9-eEVNsZ9e9SjLGUTWWHHTbGuxY6n7KSEGy1QGrwrR-8RVDAa91V1M7l1MVG7-wSdGUEXpN15n02aGVXoRKHNtZJiK8TCGPZRcZAQIS2eAvs4lHuWNN2Jv6a2zIwpSzx_81GjZDovC_GW2MjUR95oX_IDE4_I9OqA5quRn7UuVHfSMSPCqnYHf7Hn_wo1ObX-81RQ67vPEZexe6SP2mR8bvAHM-rwTd3OEyOhYPDiM20diFGTTWgCea7Wy47KVt9-3YuS-",
  },
  {
    title: "Ancient Grain Medley",
    price: 379,
    tag: "Fiber Strong",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "A hearty mix of amaranth, millet, and bajra with roasted vegetables, sprouts, and lemon vinaigrette.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTVtFRcQFok3Vb1CR8gpjdLMtdZjc2iiTw2zOiMDnRoUp2AralFJLf6Zim6xjP-DWfQhInat63XKvdLns3lErX2KXS1npOSl7QTrooCH1obYYa8ZgMo4TDT8Ii2BCnBJTWiN-fLvcT_AkQyFVBCHT73cDwNz0cAoKMBe06F5j_Ay59MdRzAToCCxDAZZtuiZ9-tuNK2xZXWHjSKJYgpq8cgBQJRYP4h8WXMaHw14brqJQd7Ap5vc2VG-H0bFTGrfVTAwdR2LTw1CVQ",
  },
  {
    title: "The Greenest Goddess",
    price: 329,
    tag: "Vegan Friendly",
    tagBg: "bg-tertiary-container text-on-tertiary-container",
    description:
      "Avocado, edamame, cucumber, and mixed greens with a creamy herb goddess dressing.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAJbgZWWb_KsqwZQyunYMgfkiHjCbrd_KmsL4Pw-3tpQqVjkMMWL2ETp1njzEmc9ebrL79Jm7yjqldXkTYrGnS1qhAgk4qPxQRH84T_YCvw0rA6WwyyXdjxX9AnPuNHTQ7ZDJR3UKqvkh_YrINm-xQc5LqBnF207J4Xefqb_0sIm3ql1gBfExWD8HxyoKflMd4sZ31Q3F21JzZVT78EJECKughghkqncD1Hxe_u9OK-AQrMPyYfNst2_Vf8zSSFGiDV7sKmicDv7kh",
  },
];

interface MenuCardProps {
  title: string;
  price: number;
  tag: string;
  tagBg: string;
  description: string;
  image: string;
}

function MenuCard({ title, price, tag, tagBg, description, image }: MenuCardProps) {
  return (
    <div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden soft-ambient-shadow group">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${tagBg}`}
        >
          {tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-lg">{title}</h3>
          <VegBadge />
        </div>
        <p className="text-primary font-extrabold text-xl mb-2">₹{price}</p>
        <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
          {description}
        </p>
        <button className="w-full py-3 rounded-full editorial-gradient text-white font-bold text-sm active:scale-95 transition-transform cursor-pointer">
          Add to Order
        </button>
      </div>
    </div>
  );
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 mb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-6">
              Seasonal Selection
            </span>
            <h1 className="text-5xl md:text-[4.5rem] leading-[1.05] font-extrabold text-on-background tracking-tighter">
              The Living Larder
            </h1>
          </div>
          <div className="hidden md:block relative w-32 h-32 -mb-4 shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR-QKSFYM8ZvxbI1SHVQn4O84A-BoQxv3CMIb4pZxzcllfATIwgTqOCcocqGc5IGAiR885c5aOJIqzsZ1a7EUkqWizVcVaA_EQLSH9BO5XIh5FrEfOJXia0iVdFr83T4d-3DbySmMi5idBO5N-mz5J7nDM0upZtjiqz7eMqqHn8fHaXrop83vyPZoMDi3gY-qVtJTBqdlqHjOKlcRyrlP52VH5dLhUnv7p1Ms0q6jpN1yn6jvUXRyKYzidw-5Lf2_npgQVS46FwGA4"
              alt=""
              width={128}
              height={128}
              unoptimized
              className="object-cover rounded-2xl rotate-6"
            />
          </div>
        </div>
      </section>

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
              placeholder="Search meals, bowls, salads..."
              className="w-full pl-12 pr-4 py-3 rounded-full bg-surface-container-low border border-outline-variant text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 placeholder:text-outline"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Fruit Bowls */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight whitespace-nowrap">
              Fresh Fruit Bowls
            </h2>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {fruitBowls.map((item) => (
              <MenuCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Protein-Rich Salads */}
      <section className="px-6 md:px-12 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold tracking-tight whitespace-nowrap">
              Protein-Rich Salads
            </h2>
            <div className="h-px flex-1 bg-outline-variant" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {proteinSalads.map((item) => (
              <MenuCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Customizable Meals Bento */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8 relative rounded-[2rem] overflow-hidden min-h-[320px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1tGi7eBEGKC9_KXKIrhDd3DaShQkYU1WNQ1tix3bkt3eHNOSUSMpRx-szAXXRZmVW-I_o9-2POI9uYCAolPJQlqTBikWzEJdxCGRukUoW8bbidqcN4Iypx20vF7X7NnDYlUobZr4qFZbhwjlNNvcBf1OzXEJ93YhTXRWxbfGU8uzK8rNl1sa3y7fw48uCoDLUnEbKepcmRcENk30etgxAsiaeTo5EXLUEjuobDT7VC2F-Sdc9nh3QI_mf7Knzzl1d_xJqYVO7zG-h"
                alt="Build your own larder"
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-10 z-10">
                <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container font-bold text-[10px] uppercase tracking-widest mb-4">
                  Customizable
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                  Build Your Own Larder
                </h2>
                <p className="text-white/80 mb-6 max-w-md">
                  Mix and match your favourite bowls, salads, and grains to craft
                  the perfect meal for your goals.
                </p>
                <button className="px-8 py-3.5 rounded-full editorial-gradient text-white font-bold active:scale-95 transition-transform cursor-pointer">
                  Start Customizing
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
                  The Subscription Box
                </h3>
                <p className="text-on-secondary-container/80 leading-relaxed">
                  Get your favourite meals delivered weekly with a curated
                  subscription. Save <span className="font-extrabold">15%</span>{" "}
                  on every order and never miss a fresh drop.
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
