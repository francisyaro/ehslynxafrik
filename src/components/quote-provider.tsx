"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { products } from "@/lib/data";

type CartItem = { slug: string; quantity: number };
type QuoteContextType = {
  items: CartItem[];
  count: number;
  isOpen: boolean;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  update: (slug: string, quantity: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};
const QuoteContext = createContext<QuoteContextType | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    try {
      const stored = JSON.parse(window.localStorage.getItem("ehs-quote") || "[]") as CartItem[];
      if (Array.isArray(stored)) {
        const restored = stored.filter(item => products.some(p => p.slug === item.slug) && Number.isInteger(item.quantity) && item.quantity > 0 && item.quantity <= 99);
        queueMicrotask(() => setItems(restored));
      }
    } catch { /* ignore invalid stored data */ }
  }, []);
  useEffect(() => {
    window.localStorage.setItem("ehs-quote", JSON.stringify(items));
  }, [items]);
  const value = useMemo<QuoteContextType>(() => ({
    items, isOpen, count: items.reduce((sum, item) => sum + item.quantity, 0),
    add: (slug) => {
      if (!products.some(p => p.slug === slug)) return;
      setItems(prev => prev.some(p => p.slug === slug) ? prev.map(item => item.slug === slug ? { ...item, quantity: Math.min(99, item.quantity + 1) } : item) : [...prev, {slug,quantity:1}]);
      setIsOpen(true);
    },
    remove: slug => setItems(prev => prev.filter(item => item.slug !== slug)),
    update: (slug, quantity) => setItems(prev => prev.map(item => item.slug === slug ? {...item,quantity:Math.max(1,Math.min(99,quantity))} : item)),
    clear: () => setItems([]), open: () => setIsOpen(true), close: () => setIsOpen(false)
  }), [items, isOpen]);
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}
export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) throw new Error("QuoteProvider manquant");
  return context;
}
