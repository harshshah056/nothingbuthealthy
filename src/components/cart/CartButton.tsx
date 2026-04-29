"use client";

import MaterialIcon from "@/components/ui/MaterialIcon";
import { useCart } from "@/contexts/CartContext";

export default function CartButton() {
  const { itemCount, open, hydrated } = useCart();

  if (!hydrated) return null;

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Open cart (${itemCount} item${itemCount === 1 ? "" : "s"})`}
      className="fixed bottom-44 right-6 z-50 w-16 h-16 bg-primary text-on-primary rounded-full flex items-center justify-center editorial-shadow active:scale-95 transition-transform hover:scale-105 md:bottom-28 md:right-8 cursor-pointer"
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
