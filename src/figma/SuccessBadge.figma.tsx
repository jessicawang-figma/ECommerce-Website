import figma from "@figma/code-connect";
import { SuccessBadge } from "../components/SuccessBadge";

figma.connect(
  SuccessBadge,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=132-5",
  {
    example: () => <SuccessBadge icon="check" />,
  },
);
