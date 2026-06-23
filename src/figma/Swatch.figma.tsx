import figma from "@figma/code-connect";
import { Swatch } from "../components/Swatch";

figma.connect(
  Swatch,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=96-35",
  {
    props: {
      selected: figma.enum("State", { Unselected: false, Selected: true }),
    },
    example: ({ selected }) => <Swatch color="#C9A27A" label="Sandstone" selected={selected} />,
  },
);
