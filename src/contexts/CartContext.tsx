"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "nbh-cart-v1";

export interface CartItem {
  id: string;
  title: string;
  price: number;
  category: "Fruit Bowls" | "Juices";
  size?: string;
  qty: number;
}

// Combo deal: when the cart contains at least one Fruit Bowl AND at least one
// Juice, the customer gets 15% off automatically. Mirrors the on-page promise
// in MenuContent ("Pair a bowl with a juice. Save 15%.").
export const COMBO_DISCOUNT_PCT = 0.15;

interface CartContextValue {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "qty">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  /** Pre-discount sum of every line item. */
  subtotal: number;
  /** Rupee value of the active combo discount (0 when not eligible). */
  discount: number;
  /** True when at least one bowl AND one juice are in the cart. */
  comboDiscountActive: boolean;
  /** Final amount payable (subtotal - discount). */
  total: number;
  itemCount: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  hydrated: boolean;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on mount.
  // Calling setState inside this effect is intentional: it's the documented
  // pattern for syncing client-only state (localStorage) into React after SSR,
  // and only runs once. See https://react.dev/learn/you-might-not-need-an-effect#initializing-the-application
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as CartItem[];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore corrupted storage
    }
    setHydrated(true);
  }, []);

  // Persist on change (after hydration)
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage quota / private mode
    }
  }, [items, hydrated]);

  const addItem = useCallback((item: Omit<CartItem, "qty">) => {
    setItems((current) => {
      const existing = current.find((i) => i.id === item.id);
      if (existing) {
        return current.map((i) =>
          i.id === item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...current, { ...item, qty: 1 }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((current) => {
      if (qty <= 0) return current.filter((i) => i.id !== id);
      return current.map((i) => (i.id === id ? { ...i, qty } : i));
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.qty, 0),
    [items]
  );
  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.qty, 0),
    [items]
  );

  const comboDiscountActive = useMemo(() => {
    const hasBowl = items.some((i) => i.category === "Fruit Bowls");
    const hasJuice = items.some((i) => i.category === "Juices");
    return hasBowl && hasJuice;
  }, [items]);

  const discount = useMemo(
    () => (comboDiscountActive ? Math.round(subtotal * COMBO_DISCOUNT_PCT) : 0),
    [comboDiscountActive, subtotal]
  );

  const total = useMemo(() => subtotal - discount, [subtotal, discount]);

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      subtotal,
      discount,
      comboDiscountActive,
      total,
      itemCount,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((v) => !v),
      hydrated,
    }),
    [
      items,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      subtotal,
      discount,
      comboDiscountActive,
      total,
      itemCount,
      isOpen,
      hydrated,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
