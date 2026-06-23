import figma from "@figma/code-connect";
import { Rating } from "../components/Rating";

figma.connect(
  Rating,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=67-2",
  {
    example: () => <Rating value={4.8} count={214} />,
  },
);
