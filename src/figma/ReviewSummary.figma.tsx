import figma from "@figma/code-connect";
import { ReviewSummary } from "../components/ReviewSummary";

figma.connect(
  ReviewSummary,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=108-31",
  {
    example: () => <ReviewSummary score={4.8} count={214} />,
  },
);
