import figma from "@figma/code-connect";
import { CheckoutSteps } from "../components/CheckoutSteps";

figma.connect(
  CheckoutSteps,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=95-52",
  {
    props: {
      active: figma.enum("Active", { "1": 1, "2": 2, "3": 3 }),
    },
    example: ({ active }) => <CheckoutSteps active={active} />,
  },
);
