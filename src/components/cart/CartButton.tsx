"use client";

import { usePathname } from "next/navigation";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { useCart } from "@/contexts/CartContext";

export default function CartButton() {
  const { itemCount, open, hydrated } = useCart();
  const pathname = usePathname() ?? "";

  if (!hydrated) return null;

  // On the menu page when items are in cart, the page renders its own
  // sticky checkout bar that does the same thing — hide the global
  // CartButton on mobile to avoid stacking two cart entry points.
  // (`md:flex` below restores it on desktop where there's no sticky bar.)
  const onMenuWithItems = pathname.startsWith("/menu") && itemCount > 0;
  const mobileHidden = onMenuWithItems ? "hidden md:flex" : "flex";

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Open cart (${itemCount} item${itemCount === 1 ? "" : "s"})`}
      className={`${mobileHidden} fixed bottom-44 right-6 z-50 w-16 h-16 bg-primary text-on-primary rounded-full items-center justify-center editorial-shadow active:scale-95 transition-transform hover:scale-105 md:bottom-28 md:right-8 cursor-pointer`}
    >
      <MaterialIcon icon="shopping_bag" filled size="28px" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[24px] h-6 px-1.5 bg-tertiary text-on-tertiary rounded-full flex items-center justify-center text-xs font-extrabold border-2 border-surface">
          {itemCount}
        </span>
      )}
    </button>
  );
}
