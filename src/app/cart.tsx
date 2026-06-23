import * as React from "react";
import { PRODUCTS, type Product } from "./data";

export interface CartLine {
  slug: string;
  qty: number;
  size: string;
}

export interface ResolvedLine extends CartLine {
  product: Product;
  unitPrice: number;
  lineTotal: number;
}

interface CartContextValue {
  lines: CartLine[];
  add: (slug: string, opts?: { qty?: number; size?: string }) => void;
  setQty: (slug: string, size: string, qty: number) => void;
  remove: (slug: string, size: string) => void;
  clear: () => void;
  items: ResolvedLine[];
  count: number;
  subtotal: number;
}

const CartContext = React.createContext<CartContextValue | null>(null);

function unitPriceFor(product: Product, size: string): number {
  return product.sizes.find((s) => s.label === size)?.price ?? product.price;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = React.useState<CartLine[]>([
    { slug: "monstera-deliciosa", qty: 1, size: "Medium" },
    { slug: "aloe-vera", qty: 1, size: "Small" },
  ]);

  const add: CartContextValue["add"] = (slug, opts) => {
    const size = opts?.size ?? PRODUCTS.find((p) => p.slug === slug)?.sizes[0]?.label ?? "One size";
    const qty = opts?.qty ?? 1;
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug && l.size === size);
      if (existing) {
        return prev.map((l) => (l === existing ? { ...l, qty: l.qty + qty } : l));
      }
      return [...prev, { slug, qty, size }];
    });
  };

  const setQty: CartContextValue["setQty"] = (slug, size, qty) =>
    setLines((prev) => prev.map((l) => (l.slug === slug && l.size === size ? { ...l, qty } : l)));

  const remove: CartContextValue["remove"] = (slug, size) =>
    setLines((prev) => prev.filter((l) => !(l.slug === slug && l.size === size)));

  const clear = () => setLines([]);

  const items: ResolvedLine[] = lines
    .map((l) => {
      const product = PRODUCTS.find((p) => p.slug === l.slug);
      if (!product) return null;
      const unitPrice = unitPriceFor(product, l.size);
      return { ...l, product, unitPrice, lineTotal: unitPrice * l.qty };
    })
    .filter((x): x is ResolvedLine => x !== null);

  const count = items.reduce((n, l) => n + l.qty, 0);
  const subtotal = items.reduce((n, l) => n + l.lineTotal, 0);

  const value: CartContextValue = { lines, add, setQty, remove, clear, items, count, subtotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = React.useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
