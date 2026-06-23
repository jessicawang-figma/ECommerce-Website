import * as React from "react";
import { useNavigate } from "react-router-dom";
import { HeroBanner } from "@/components/HeroBanner";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FilterChip } from "@/components/FilterChip";
import { Select } from "@/components/Select";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";
import { SiteHeader, Footer } from "../App";
import { PRODUCTS, money } from "../data";
import { useCart } from "../cart";

const FILTERS = ["All", "Pet-friendly", "Low light", "Statement", "Pots & planters"];

export function Home() {
  const navigate = useNavigate();
  const { add } = useCart();
  const [active, setActive] = React.useState("All");

  return (
    <div className="bg-canvas">
      <SiteHeader />

      <main>
        <section className="mx-auto max-w-[1320px] px-8 pt-8">
          <HeroBanner
            imageSrc="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1600&q=80"
            eyebrow="New season"
            title="Plants that practically grow themselves"
            subtitle="Self-watering, expertly grown, delivered to your door."
            ctaLabel="Shop bestsellers"
            onCtaClick={() => navigate("/product/monstera-deliciosa")}
          />
        </section>

        <section className="mx-auto mt-10 max-w-[1320px] px-8">
          <TrustBar />
        </section>

        <section className="mx-auto max-w-[1320px] px-8 py-12">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Plants", href: "/" }, { label: "Indoor" }]}
          />
          <div className="mt-5 flex flex-col gap-2">
            <h1 className="font-display text-4xl font-bold text-ink">Indoor Plants</h1>
            <p className="text-muted">48 thoughtfully chosen plants for every corner and light level.</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {FILTERS.map((f) => (
              <FilterChip key={f} active={active === f} onClick={() => setActive(f)}>
                {f}
              </FilterChip>
            ))}
            <div className="ml-auto">
              <Select
                label="Sort:"
                options={[
                  { label: "Popular", value: "popular" },
                  { label: "Price: low to high", value: "price-asc" },
                  { label: "Price: high to low", value: "price-desc" },
                  { label: "Newest", value: "new" },
                ]}
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p) => (
              <div
                key={p.slug}
                className="cursor-pointer"
                onClickCapture={(e) => {
                  if ((e.target as HTMLElement).closest("button")) return;
                  navigate(`/product/${p.slug}`);
                }}
              >
                <ProductCard
                  title={p.title}
                  category={p.category}
                  price={money(p.price)}
                  imageSrc={p.image}
                  rating={p.rating}
                  reviewCount={p.reviewCount}
                  badge={p.badge}
                  onAddToBasket={() => add(p.slug)}
                />
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3">
            <Button variant="secondary">Load more plants</Button>
            <p className="text-sm text-faint">Showing {PRODUCTS.length} of 48</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
