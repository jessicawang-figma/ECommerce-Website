import type { BadgeTone } from "@/components/Badge";

export interface SizeOptionData {
  label: string;
  price: number;
}

export interface ColourData {
  label: string;
  hex: string;
}

export interface Product {
  slug: string;
  title: string;
  category: string;
  price: number;
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  badge?: { label: string; tone?: BadgeTone };
  blurb: string;
  sizes: SizeOptionData[];
  colours: ColourData[];
}

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const PRODUCTS: Product[] = [
  {
    slug: "monstera-deliciosa",
    title: "Monstera Deliciosa",
    category: "Indoor · Easy care",
    price: 128,
    image: u("1614594975525-e45190c55d0b"),
    gallery: [u("1614594975525-e45190c55d0b", 1200), u("1463320726281-696a485928c7")],
    rating: 4.8,
    reviewCount: 214,
    badge: { label: "Bestseller", tone: "in-stock" },
    blurb:
      "A bold, sculptural statement plant with iconic split leaves. Grown in our solar-powered nursery and shipped in plastic-free packaging.",
    sizes: [
      { label: "Small", price: 98 },
      { label: "Medium", price: 128 },
      { label: "Large", price: 168 },
    ],
    colours: [
      { label: "Sandstone", hex: "#D8C7B0" },
      { label: "Forest", hex: "#3F5A3B" },
      { label: "Terracotta", hex: "#B0673F" },
      { label: "Stone", hex: "#E7E2D8" },
    ],
  },
  {
    slug: "aloe-vera",
    title: "Aloe Vera",
    category: "Indoor · Low light",
    price: 42,
    image: u("1567748157439-651aca2ff064"),
    gallery: [u("1567748157439-651aca2ff064", 1200)],
    rating: 4.7,
    reviewCount: 88,
    badge: { label: "Pet-friendly", tone: "in-stock" },
    blurb:
      "A hardy, healing succulent that thrives on neglect. Perfect for sunny windowsills and first-time plant parents.",
    sizes: [
      { label: "Small", price: 32 },
      { label: "Medium", price: 42 },
    ],
    colours: [
      { label: "Concrete", hex: "#CFCabe" },
      { label: "Sandstone", hex: "#D8C7B0" },
    ],
  },
  {
    slug: "golden-cactus",
    title: "Golden Cactus",
    category: "Desert · Low water",
    price: 36,
    image: u("1459156212016-c812468e2115"),
    gallery: [u("1459156212016-c812468e2115", 1200)],
    rating: 4.9,
    reviewCount: 41,
    blurb:
      "A cheerful golden barrel cactus that asks for almost nothing but sunshine. Sculptural and architectural.",
    sizes: [
      { label: "Small", price: 28 },
      { label: "Medium", price: 36 },
    ],
    colours: [{ label: "Terracotta", hex: "#B0673F" }],
  },
  {
    slug: "haworthia-zebra",
    title: "Haworthia Zebra",
    category: "Desert · Easy care",
    price: 38,
    image: u("1632207171349-9d3a4d6f0f0a"),
    gallery: [u("1632207171349-9d3a4d6f0f0a", 1200)],
    rating: 4.6,
    reviewCount: 113,
    badge: { label: "Low stock", tone: "low-stock" },
    blurb:
      "A tidy little succulent with striking striped foliage — happy on a desk, shelf or bedside table.",
    sizes: [
      { label: "Small", price: 30 },
      { label: "Medium", price: 38 },
    ],
    colours: [{ label: "Stone", hex: "#E7E2D8" }],
  },
  {
    slug: "topiary-tree",
    title: "Topiary Tree",
    category: "Statement · Indoor",
    price: 76,
    image: u("1545239351-1141bd82e8a6"),
    gallery: [u("1545239351-1141bd82e8a6", 1200)],
    rating: 4.8,
    reviewCount: 67,
    blurb: "A neatly trained evergreen topiary that brings calm structure to any corner.",
    sizes: [{ label: "Medium", price: 76 }],
    colours: [{ label: "Sandstone", hex: "#D8C7B0" }],
  },
  {
    slug: "mixed-succulents",
    title: "Mixed Succulents",
    category: "Desert · Gift",
    price: 54,
    image: u("1485955900006-10f4d324d411"),
    gallery: [u("1485955900006-10f4d324d411", 1200)],
    rating: 4.7,
    reviewCount: 152,
    badge: { label: "Gift idea", tone: "in-stock" },
    blurb: "A curated trio of easy-going succulents in matching pots — a thoughtful, low-effort gift.",
    sizes: [{ label: "Trio", price: 54 }],
    colours: [{ label: "Stone", hex: "#E7E2D8" }],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const money = (n: number) => `£${n.toFixed(0)}`;
