import figma from "@figma/code-connect";
import { Select } from "../components/Select";

// The Figma `State` variant (Default / Open) represents runtime open state,
// which the React component manages internally — so it is not mapped to a prop.
figma.connect(
  Select,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=94-27",
  {
    example: () => (
      <Select
        label="Sort:"
        options={[
          { label: "Recommended", value: "recommended" },
          { label: "Price: low to high", value: "price-asc" },
          { label: "Price: high to low", value: "price-desc" },
          { label: "Newest first", value: "newest" },
        ]}
      />
    ),
  },
);
