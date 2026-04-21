"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import MaterialIcon from "../ui/MaterialIcon";
import { NAV_LINKS } from "@/utils/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const desktopLinks = NAV_LINKS.filter((l) => l.label !== "Corporate");

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(26,28,25,0.08)]">
        <div className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDrawerOpen(true)}
              className="text-primary hover:bg-surface-container transition-all p-2 rounded-full active:scale-95 duration-200"
            >
              <MaterialIcon icon="menu" />
            </button>
            <Link href="/">
              <span className="text-lg font-extrabold text-on-surface uppercase tracking-widest font-headline">
                Nothing But Healthy
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex gap-8 items-center">
            {desktopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-label text-sm font-bold transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-outline hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/menu"
            className="text-primary hover:bg-surface-container transition-all p-2 rounded-full active:scale-95 duration-200"
          >
            <MaterialIcon icon="shopping_basket" />
          </Link>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60]" onClick={() => setDrawerOpen(false)}>
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <aside
            className="absolute inset-y-0 left-0 w-80 p-8 bg-surface shadow-2xl rounded-r-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-12">
              <h2 className="font-headline font-bold text-primary italic text-2xl">
                NBH
              </h2>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 hover:bg-surface-container rounded-full transition-all"
              >
                <MaterialIcon icon="close" />
              </button>
            </div>
            <nav className="space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    pathname === link.href
                      ? "bg-tertiary-container/10 text-primary font-bold"
                      : "text-on-surface hover:bg-surface-container"
                  }`}
                >
                  <MaterialIcon icon={link.icon} />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}
