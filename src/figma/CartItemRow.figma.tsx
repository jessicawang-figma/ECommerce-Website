import figma from "@figma/code-connect";
import { CartItemRow } from "../components/CartItemRow";

figma.connect(
  CartItemRow,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=3-141",
  {
    example: () => (
      <CartItemRow
        title="Monstera Deliciosa"
        variant="Size: Medium · Pot: Sandstone"
        price="£128"
        quantity={1}
        imageSrc="/plants/monstera.jpg"
      />
    ),
  },
);
