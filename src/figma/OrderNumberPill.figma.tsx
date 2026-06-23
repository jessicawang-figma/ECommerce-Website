import figma from "@figma/code-connect";
import { OrderNumberPill } from "../components/OrderNumberPill";

figma.connect(
  OrderNumberPill,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=132-12",
  {
    example: () => <OrderNumberPill orderNumber="TWG-10482" />,
  },
);
