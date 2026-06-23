import * as React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Badge } from "@/components/Badge";
import { Rating } from "@/components/Rating";
import { SizeOption } from "@/components/SizeOption";
import { Swatch } from "@/components/Swatch";
import { QuantityStepper } from "@/components/QuantityStepper";
import { Button } from "@/components/Button";
import { Accordion } from "@/components/Accordion";
import { FeatureItem } from "@/components/FeatureItem";
import { ReviewSummary } from "@/components/ReviewSummary";
import { ProductCard } from "@/components/ProductCard";
import { Icon } from "@/components/Icon";
import { SiteHeader, Footer } from "../App";
import { PRODUCTS, getProduct, money } from "../data";
import { useCart } from "../cart";

export function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { add } = useCart();
  const product = getProduct(slug ?? "") ?? PRODUCTS[0];

  const [size, setSize] = React.useState(product.sizes[1]?.label ?? product.sizes[0].label);
  const [colour, setColour] = React.useState(product.colours[0].label);
  const [qty, setQty] = React.useState(1);

  React.useEffect(() => {
    setSize(product.sizes[1]?.label ?? product.sizes[0].label);
    setColour(product.colours[0].label);
    setQty(1);
  }, [product]);

  const unitPrice = product.sizes.find((s) => s.label === size)?.price ?? product.price;
  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-canvas">
      <SiteHeader />

      <main className="mx-auto max-w-[1320px] px-8 py-8">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Plants", href: "/" }, { label: product.title }]}
        />

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl bg-surface-muted">
            <img src={product.gallery[0]} alt={product.title} className="aspect-square w-full object-cover" />
          </div>

          <div className="flex flex-col gap-5">
            {product.badge && <Badge tone={product.badge.tone}>{product.badge.label}</Badge>}
            <h1 className="font-display text-4xl font-bold text-ink">{product.title}</h1>
            <Rating value={product.rating} count={product.reviewCount} />
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-3xl font-semibold text-ink">{money(unitPrice)}</span>
              <span className="text-sm text-faint">or {money(unitPrice / 12)}/mo with Klarna</span>
            </div>
            <p className="max-w-xl text-muted">{product.blurb}</p>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-ink">Size</span>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((s) => (
                  <SizeOption
                    key={s.label}
                    label={s.label}
                    price={money(s.price)}
                    selected={s.label === size}
                    onClick={() => setSize(s.label)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-semibold text-ink">Pot colour — {colour}</span>
              <div className="flex flex-wrap gap-2">
                {product.colours.map((c) => (
                  <Swatch
                    key={c.label}
                    color={c.hex}
                    label={c.label}
                    selected={c.label === colour}
                    onClick={() => setColour(c.label)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <QuantityStepper value={qty} onValueChange={setQty} />
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <Icon name="check" size={16} className="text-forest" /> In stock — ships in 1–2 days
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                className="min-w-[280px] flex-1"
                onClick={() => {
                  add(product.slug, { qty, size });
                  navigate("/cart");
                }}
              >
                Add to basket — {money(unitPrice * qty)}
              </Button>
              <Button variant="secondary" aria-label="Add to wishlist">
                <Icon name="heart" size={18} />
              </Button>
            </div>

            <div className="mt-1 flex flex-wrap gap-8">
              <FeatureItem icon="truck" title="Free delivery over £40" description="Carbon-neutral shipping" />
              <FeatureItem icon="shield" title="90-day guarantee" description="Happy-roots promise" />
            </div>

            <div className="mt-2 flex flex-col gap-3">
              <Accordion title="Plant care & light" defaultOpen>
                Bright indirect light. Water when the top 2cm of soil is dry (~weekly). Loves humidity. Pet
                caution: mildly toxic if ingested.
              </Accordion>
              <Accordion title="Size & dimensions">
                Nursery pot included. Mature height varies by size — see the size guide for exact dimensions.
              </Accordion>
              <Accordion title="Delivery & returns">
                Carbon-neutral delivery in 2–4 working days. Free returns within 30 days, plus our 90-day
                happy-roots guarantee.
              </Accordion>
            </div>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-ink">Loved by {product.reviewCount} plant parents</h2>
          <div className="mt-6 max-w-md">
            <ReviewSummary score={product.rating} count={product.reviewCount} />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl font-bold text-ink">Pairs well with</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
