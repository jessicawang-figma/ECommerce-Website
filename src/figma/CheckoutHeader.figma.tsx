import figma from "@figma/code-connect";
import { CheckoutHeader } from "../components/CheckoutHeader";

figma.connect(
  CheckoutHeader,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=95-55",
  {
    example: () => <CheckoutHeader />,
  },
);
