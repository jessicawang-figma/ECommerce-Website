import * as React from "react";
import { cn } from "@/lib/cn";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SuccessBadge } from "./SuccessBadge";
import { OrderNumberPill } from "./OrderNumberPill";
import { NextStepsCard } from "./NextStepsCard";
import { OrderSummary, type SummaryLine } from "./OrderSummary";
import { TrustBar } from "./TrustBar";
import { Button } from "./Button";

export interface OrderConfirmationProps extends React.HTMLAttributes<HTMLDivElement> {
  orderNumber: string;
  email?: string;
  summaryLines?: SummaryLine[];
  total?: string;
}

const DEFAULT_LINES: SummaryLine[] = [
  { label: "Subtotal", value: "£170" },
  { label: "Delivery", value: "Free" },
  { label: "Est. tax", value: "£0" },
];

export function OrderConfirmation({
  orderNumber,
  email = "you@example.com",
  summaryLines = DEFAULT_LINES,
  total = "£170",
  className,
  ...rest
}: OrderConfirmationProps) {
  return (
    <div className={cn("bg-canvas", className)} {...rest}>
      <Header />
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 py-16 text-center">
        <SuccessBadge />
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-display text-[42px] font-bold leading-tight text-ink">
            Thank you for your order!
          </h1>
          <p className="text-[17px] text-muted">A confirmation email is on its way to {email}.</p>
          <OrderNumberPill orderNumber={orderNumber} />
        </div>
        <NextStepsCard className="w-full max-w-xl text-left" />
        <OrderSummary
          className="w-full max-w-md text-left"
          lines={summaryLines}
          total={total}
          ctaLabel="View order details"
        />
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button>Continue shopping</Button>
          <Button variant="secondary">Track your order</Button>
        </div>
      </div>
      <TrustBar className="rounded-none" />
      <Footer />
    </div>
  );
}
