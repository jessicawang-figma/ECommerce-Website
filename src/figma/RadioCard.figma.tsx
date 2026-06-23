import figma from "@figma/code-connect";
import { RadioCard } from "../components/RadioCard";

figma.connect(
  RadioCard,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=96-14",
  {
    props: {
      selected: figma.enum("State", { Unselected: false, Selected: true }),
    },
    example: ({ selected }) => (
      <RadioCard title="Create an account" description="Save details & track orders" selected={selected} />
    ),
  },
);
