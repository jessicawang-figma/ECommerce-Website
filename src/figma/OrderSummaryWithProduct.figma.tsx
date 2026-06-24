import figma from "@figma/code-connect";
import { OrderSummaryWithProduct } from "../components/OrderSummaryWithProduct";

figma.connect(
  OrderSummaryWithProduct,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=147-1485",
  {
    example: () => (
      <OrderSummaryWithProduct
        items={[
          { title: "Monstera Deliciosa", variant: "Medium · Sandstone", price: "£128" },
          { title: "Aloe Vera", variant: "Small · Concrete", price: "£42" },
        ]}
        lines={[
          { label: "Subtotal", value: "£170" },
          { label: "Delivery", value: "Free" },
          { label: "Est. tax", value: "£0" },
        ]}
        total="£170"
      />
    ),
  },
);
