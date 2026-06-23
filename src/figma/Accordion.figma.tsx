import figma from "@figma/code-connect";
import { Accordion } from "../components/Accordion";

figma.connect(
  Accordion,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=96-28",
  {
    props: {
      defaultOpen: figma.enum("State", { Collapsed: false, Expanded: true }),
    },
    example: ({ defaultOpen }) => (
      <Accordion title="Care & watering" defaultOpen={defaultOpen}>
        Water when the top 2cm of soil feels dry — typically every 1–2 weeks. Prefers bright, indirect light.
      </Accordion>
    ),
  },
);
