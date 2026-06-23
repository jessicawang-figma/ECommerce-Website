import figma from "@figma/code-connect";
import { TrustBar } from "../components/TrustBar";

figma.connect(
  TrustBar,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=67-14",
  {
    example: () => <TrustBar />,
  },
);
