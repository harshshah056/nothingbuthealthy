"use client";

import { useEffect, useState } from "react";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { useCart } from "@/contexts/CartContext";
import { WHATSAPP_URL } from "@/utils/constants";

function getTomorrowISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
}

function formatDateForDisplay(iso: string): string {
  if (!iso) return "";
  // Parse as local date to avoid timezone shift
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function CartDrawer() {
  const {
    items,
    isOpen,
    close,
    removeItem,
    updateQty,
    clearCart,
    subtotal,
    discount,
    comboDiscountActive,
    total,
    itemCount,
    hydrated,
  } = useCart();

  const hasBowl = items.some((i) => i.category === "Fruit Bowls");
  const hasJuice = items.some((i) => i.category === "Juices");
  // Show a nudge only when the cart has items of one type but not the other —
  // i.e. customer is one tap away from unlocking the 15% combo discount.
  const showComboNudge =
    items.length > 0 && !comboDiscountActive && (hasBowl || hasJuice);
  const nudgeLabel = hasBowl
    ? "Add any cold-pressed juice to unlock 15% off your order."
    : "Add any fruit bowl to unlock 15% off your order.";

  const [minDate] = useState<string>(() => getTomorrowISO());
  const [deliveryDate, setDeliveryDate] = useState<string>(() => getTomorrowISO());
  const [notes, setNotes] = useState<string>("");

  // Lock body scroll when drawer open
  useEffect(() => {
    if (isOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  if (!hydrated) return null;

  const dateValid = !!deliveryDate && deliveryDate >= minDate;
  const canCheckout = items.length > 0 && dateValid;

  const buildWhatsAppMessage = (): string => {
    const lines: string[] = [];
    lines.push("Hi Nothing But Healthy! I'd like to place this order.");
    lines.push("");
    lines.push(`*Delivery date:* ${formatDateForDisplay(deliveryDate)}`);
    lines.push("");
    lines.push("*Order:*");
    items.forEach((item) => {
      const lineTotal = item.price * item.qty;
      const sizeLabel = item.size ? ` (${item.size})` : "";
      lines.push(
        `• ${item.qty}× ${item.title}${sizeLabel} — ₹${item.price} each = ₹${lineTotal}`
      );
    });
    lines.push("");
    if (comboDiscountActive) {
      lines.push(`Subtotal: ₹${subtotal}`);
      lines.push(`Combo discount (15%): -₹${discount}`);
      lines.push(`*Total: ₹${total}* (Bowl + Juice combo applied)`);
    } else {
      lines.push(`*Total: ₹${total}*`);
    }
    if (notes.trim()) {
      lines.push("");
      lines.push(`*Notes:* ${notes.trim()}`);
    }
    lines.push("");
    lines.push("Please confirm delivery and share payment options. Thank you!");
    return lines.join("\n");
  };

  const handleCheckout = () => {
    if (!canCheckout) return;
    const message = buildWhatsAppMessage();
    const url = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden={!isOpen}
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-label="Your order"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 h-dvh w-full sm:w-[460px] bg-surface z-[70] shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b border-outline-variant/40 shrink-0">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight">Your order</h2>
            <p className="text-sm text-on-surface-variant mt-1">
              {itemCount === 0
                ? "Your cart is empty"
                : `${itemCount} item${itemCount === 1 ? "" : "s"} · ₹${total}${
                    comboDiscountActive ? " (combo 15% off)" : ""
                  }`}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Close cart"
            className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center cursor-pointer"
          >
            <MaterialIcon icon="close" />
          </button>
        </header>

        {/* Compact combo banners — sit just under the header without eating the
            items area on small screens. */}
        {comboDiscountActive && (
          <div className="mx-6 mt-3 px-3 py-2 rounded-full bg-tertiary-container/70 text-on-tertiary-container flex items-center gap-2 text-xs font-bold shrink-0">
            <MaterialIcon icon="celebration" filled size="16px" />
            <span>Combo unlocked — saving ₹{discount} (15% off)</span>
          </div>
        )}
        {showComboNudge && (
          <div className="mx-6 mt-3 px-3 py-2 rounded-full bg-secondary-container/70 text-on-secondary-container flex items-center gap-2 text-xs font-bold shrink-0">
            <MaterialIcon icon="local_offer" filled size="16px" />
            <span>Save 15%: {nudgeLabel}</span>
          </div>
        )}

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <MaterialIcon
                icon="shopping_bag"
                className="text-outline-variant mb-4"
                size="64px"
              />
              <h3 className="text-lg font-bold mb-2">Nothing here yet</h3>
              <p className="text-on-surface-variant text-sm max-w-xs">
                Add a fruit bowl or juice from the menu to start your order.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="bg-surface-container-lowest rounded-2xl p-4 flex flex-col gap-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-base truncate">
                          {item.title}
                        </h3>
                        {item.size && (
                          <span className="text-[10px] font-bold text-outline uppercase tracking-widest shrink-0">
                            {item.size}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        {item.category} · ₹{item.price} each
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.title}`}
                      className="text-outline hover:text-error w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container cursor-pointer shrink-0"
                    >
                      <MaterialIcon icon="close" size="18px" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-surface-container rounded-full p-1">
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        aria-label="Decrease quantity"
                        className="w-8 h-8 rounded-full bg-surface-container-lowest hover:bg-surface-container-high flex items-center justify-center cursor-pointer"
                      >
                        <MaterialIcon icon="remove" size="18px" />
                      </button>
                      <span className="font-extrabold w-8 text-center text-sm">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        aria-label="Increase quantity"
                        className="w-8 h-8 rounded-full bg-primary text-on-primary hover:scale-105 flex items-center justify-center cursor-pointer"
                      >
                        <MaterialIcon icon="add" size="18px" />
                      </button>
                    </div>
                    <p className="font-extrabold text-primary text-base">
                      ₹{item.price * item.qty}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer / Checkout */}
        {items.length > 0 && (
          <footer className="border-t border-outline-variant/40 p-6 shrink-0 bg-surface-container-low/40">
            <div className="space-y-4 mb-4">
              <div>
                <label
                  htmlFor="delivery-date"
                  className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2"
                >
                  Schedule delivery
                </label>
                <div className="relative">
                  <MaterialIcon
                    icon="calendar_today"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
                    size="18px"
                  />
                  <input
                    id="delivery-date"
                    type="date"
                    min={minDate}
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none text-on-surface text-sm"
                  />
                </div>
                <p className="text-[11px] text-outline mt-1.5 leading-relaxed">
                  Same-day orders aren&apos;t possible — bowls are cut at 4 AM.
                  Earliest delivery: <strong>{formatDateForDisplay(minDate)}</strong>.
                </p>
              </div>

              <div>
                <label
                  htmlFor="order-notes"
                  className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2"
                >
                  Notes (optional)
                </label>
                <textarea
                  id="order-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Allergies, address, gate code…"
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-lowest border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none text-on-surface text-sm placeholder:text-outline resize-none"
                />
              </div>
            </div>

            <div className="space-y-1.5 mb-4 px-1">
              {comboDiscountActive && (
                <>
                  <div className="flex items-center justify-between text-sm text-on-surface-variant">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-tertiary font-bold">
                    <span>Combo discount (15%)</span>
                    <span>-₹{discount}</span>
                  </div>
                </>
              )}
              <div className="flex items-center justify-between pt-1">
                <span className="text-on-surface-variant text-sm">Total</span>
                <span className="text-2xl font-extrabold text-primary tracking-tighter">
                  ₹{total}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              disabled={!canCheckout}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Send order on WhatsApp
            </button>

            <button
              type="button"
              onClick={clearCart}
              className="w-full text-center text-xs text-outline hover:text-error mt-3 py-2 cursor-pointer"
            >
              Clear cart
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
