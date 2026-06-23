import figma from "@figma/code-connect";
import { OrderSummary } from "../components/OrderSummary";

figma.connect(
  OrderSummary,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=3-147",
  {
    example: () => (
      <OrderSummary
        lines={[
          { label: "Subtotal", value: "£176.00" },
          { label: "Delivery", value: "Free" },
          { label: "Tax", value: "£29.33" },
        ]}
        total="£176.00"
      />
    ),
  },
);
