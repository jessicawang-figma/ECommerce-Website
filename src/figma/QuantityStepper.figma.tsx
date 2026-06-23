import figma from "@figma/code-connect";
import { QuantityStepper } from "../components/QuantityStepper";

figma.connect(
  QuantityStepper,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=3-134",
  {
    example: () => <QuantityStepper defaultValue={1} />,
  },
);
