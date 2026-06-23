import figma from "@figma/code-connect";
import { NextStepsCard } from "../components/NextStepsCard";

figma.connect(
  NextStepsCard,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=132-17",
  {
    example: () => <NextStepsCard />,
  },
);
