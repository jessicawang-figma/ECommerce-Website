import figma from "@figma/code-connect";
import { FilterChip } from "../components/FilterChip";

figma.connect(
  FilterChip,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=92-18",
  {
    props: {
      active: figma.enum("State", { Default: false, Active: true }),
    },
    example: ({ active }) => <FilterChip active={active}>Indoor</FilterChip>,
  },
);
