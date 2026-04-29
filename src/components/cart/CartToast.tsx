"use client";

import { useEffect, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { useCart } from "@/contexts/CartContext";

const VISIBLE_MS = 2600;

export default function CartToast() {
  const { toast, open, hydrated } = useCart();
  const [visibleNonce, setVisibleNonce] = useState<number | null>(null);

  useEffect(() => {
    if (!toast) return;
    setVisibleNonce(toast.nonce);
    const id = window.setTimeout(() => {
      setVisibleNonce((current) => (current === toast.nonce ? null : current));
    }, VISIBLE_MS);
    return () => window.clearTimeout(id);
  }, [toast]);

  if (!hydrated || !toast) return null;
  const isVisible = visibleNonce === toast.nonce;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed left-1/2 -translate-x-1/2 z-[80] transition-all duration-300 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-3 pointer-events-none"
      } bottom-44 md:bottom-28 md:left-auto md:right-28 md:translate-x-0`}
    >
      <div className="flex items-center gap-3 bg-on-surface text-surface rounded-full pl-5 pr-2 py-2 shadow-lg max-w-[90vw]">
        <MaterialIcon icon="check_circle" filled size="20px" />
        <div className="text-sm">
          <span className="font-bold">Added</span>{" "}
          <span className="opacity-80 hidden sm:inline">·</span>{" "}
          <span className="opacity-90">{toast.title}</span>
          {toast.qty > 1 && (
            <span className="opacity-70"> ×{toast.qty}</span>
          )}
        </div>
        <button
          type="button"
          onClick={open}
          className="ml-2 px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold hover:opacity-90 active:scale-95 transition-all cursor-pointer"
        >
          View cart
        </button>
      </div>
    </div>
  );
}
