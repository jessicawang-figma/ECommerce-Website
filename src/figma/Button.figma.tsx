import figma from "@figma/code-connect";
import { Button } from "../components/Button";

figma.connect(
  Button,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=3-90",
  {
    props: {
      size: figma.enum("Size", { Sm: "sm", Md: "md" }),
      variant: figma.enum("Style", { Primary: "primary", Secondary: "secondary" }),
      disabled: figma.enum("State", { Default: false, Hover: false, Disabled: true }),
    },
    example: ({ size, variant, disabled }) => (
      <Button size={size} variant={variant} disabled={disabled}>
        Add to basket
      </Button>
    ),
  },
);
