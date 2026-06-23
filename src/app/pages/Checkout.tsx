import * as React from "react";
import { useNavigate } from "react-router-dom";
import { CheckoutHeader } from "@/components/CheckoutHeader";
import { CheckoutSteps } from "@/components/CheckoutSteps";
import { RadioCard } from "@/components/RadioCard";
import { FormField } from "@/components/FormField";
import { OrderSummary } from "@/components/OrderSummary";
import { Footer } from "../App";
import { useCart } from "../cart";
import { money } from "../data";

type Mode = "guest" | "account";
type Delivery = "standard" | "next";

export function Checkout() {
  const navigate = useNavigate();
  const { subtotal, clear } = useCart();
  const [mode, setMode] = React.useState<Mode>("guest");
  const [delivery, setDelivery] = React.useState<Delivery>("standard");

  const deliveryCost = delivery === "next" ? 6.95 : 0;
  const total = subtotal + deliveryCost;

  const placeOrder = () => {
    clear();
    navigate("/confirmation");
  };

  return (
    <div className="min-h-screen bg-canvas">
      <CheckoutHeader />

      <main className="mx-auto max-w-[1320px] px-8 py-10">
        <h1 className="font-display text-4xl font-bold text-ink">Checkout</h1>
        <div className="mt-5 max-w-xl">
          <CheckoutSteps active={1} />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
          <div className="flex flex-col gap-8">
            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-lg font-semibold text-ink">How would you like to check out?</h2>
              <RadioCard
                title="Continue as guest"
                description="Fast checkout with just your email — no account needed."
                selected={mode === "guest"}
                onClick={() => setMode("guest")}
              />
              <RadioCard
                title="Create an account"
                description="Save addresses, track orders, and earn 1 leaf point per £1."
                selected={mode === "account"}
                onClick={() => setMode("account")}
              />
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-heading text-lg font-semibold text-ink">Contact</h2>
              <FormField label="Email" type="email" placeholder="you@example.com" />
              {mode === "account" && (
                <FormField label="Password" type="password" placeholder="Create a password" />
              )}
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-heading text-lg font-semibold text-ink">Delivery address</h2>
              <FormField label="Full name" placeholder="Niamh O’Brien" />
              <FormField label="Address line 1" placeholder="12 Fern Grove" />
              <div className="grid grid-cols-2 gap-4">
                <FormField label="City" placeholder="Bristol" />
                <FormField label="Postcode" placeholder="BS1 4ST" />
              </div>
            </section>

            <section className="flex flex-col gap-3">
              <h2 className="font-heading text-lg font-semibold text-ink">Delivery method</h2>
              <RadioCard
                title="Standard — Free"
                description="Carbon-neutral · 2–4 working days"
                selected={delivery === "standard"}
                onClick={() => setDelivery("standard")}
              />
              <RadioCard
                title="Next-day — £6.95"
                description="Order before 2pm"
                selected={delivery === "next"}
                onClick={() => setDelivery("next")}
              />
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="font-heading text-lg font-semibold text-ink">Payment</h2>
              <FormField label="Card number" placeholder="1234 5678 9012 3456" />
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Expiry" placeholder="MM / YY" />
                <FormField label="CVC" placeholder="123" />
              </div>
            </section>
          </div>

          <div className="lg:sticky lg:top-8 lg:self-start">
            <OrderSummary
              lines={[
                { label: "Subtotal", value: money(subtotal) },
                { label: "Delivery", value: deliveryCost === 0 ? "Free" : money(deliveryCost) },
                { label: "Est. tax", value: "£0" },
              ]}
              total={money(total)}
              ctaLabel={`Place order — ${money(total)}`}
              onCheckout={placeOrder}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
