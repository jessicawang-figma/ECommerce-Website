import figma from "@figma/code-connect";
import { Badge } from "../components/Badge";

figma.connect(
  Badge,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=3-122",
  {
    props: {
      tone: figma.enum("Tone", {
        InStock: "in-stock",
        LowStock: "low-stock",
        SoldOut: "sold-out",
      }),
    },
    example: ({ tone }) => <Badge tone={tone} />,
  },
);
