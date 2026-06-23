import figma from "@figma/code-connect";
import { FeatureItem } from "../components/FeatureItem";

figma.connect(
  FeatureItem,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=108-17",
  {
    example: () => (
      <FeatureItem
        icon="truck"
        title="Free delivery over £40"
        description="Carbon-neutral shipping"
      />
    ),
  },
);
