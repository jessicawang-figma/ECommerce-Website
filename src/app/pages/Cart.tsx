import { useNavigate } from "react-router-dom";
import { CartItemRow } from "@/components/CartItemRow";
import { OrderSummary } from "@/components/OrderSummary";
import { TrustBar } from "@/components/TrustBar";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { SiteHeader, Footer } from "../App";
import { useCart } from "../cart";
import { money } from "../data";

export function Cart() {
  const navigate = useNavigate();
  const { items, setQty, remove, subtotal, count } = useCart();

  return (
    <div className="bg-canvas">
      <SiteHeader />

      <main className="mx-auto max-w-[1320px] px-8 py-12">
        <div className="flex items-end justify-between">
          <div className="flex items-baseline gap-3">
            <h1 className="font-display text-4xl font-bold text-ink">Your basket</h1>
            <span className="text-muted">{count} items</span>
          </div>
          <a href="/" className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:underline">
            Continue shopping <Icon name="arrow-right" size={16} />
          </a>
        </div>

        {items.length === 0 ? (
          <div className="mt-12 flex flex-col items-center gap-4 rounded-xl border border-line bg-surface py-20 text-center">
            <p className="text-lg text-muted">Your basket is empty.</p>
            <Button onClick={() => navigate("/")}>Browse plants</Button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_400px]">
            <div className="flex flex-col">
              {items.map((line) => (
                <CartItemRow
                  key={`${line.slug}-${line.size}`}
                  title={line.product.title}
                  variant={`Size: ${line.size}`}
                  price={money(line.unitPrice)}
                  imageSrc={line.product.image}
                  quantity={line.qty}
                  onQuantityChange={(q) => setQty(line.slug, line.size, q)}
                  onRemove={() => remove(line.slug, line.size)}
                />
              ))}
            </div>

            <div className="lg:sticky lg:top-8 lg:self-start">
              <OrderSummary
                lines={[
                  { label: "Subtotal", value: money(subtotal) },
                  { label: "Delivery", value: "Free" },
                  { label: "Est. tax", value: "£0" },
                ]}
                total={money(subtotal)}
                ctaLabel="Proceed to checkout"
                onCheckout={() => navigate("/checkout")}
              />
            </div>
          </div>
        )}

        <div className="mt-12">
          <TrustBar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
