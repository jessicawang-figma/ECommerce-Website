import figma from "@figma/code-connect";
import { SizeOption } from "../components/SizeOption";

figma.connect(
  SizeOption,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=92-25",
  {
    props: {
      selected: figma.enum("State", { Unselected: false, Selected: true }),
    },
    example: ({ selected }) => <SizeOption selected={selected} label="Medium" price="£128" />,
  },
);
