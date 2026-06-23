import figma from "@figma/code-connect";
import { Breadcrumb } from "../components/Breadcrumb";

figma.connect(
  Breadcrumb,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=92-4",
  {
    example: () => (
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Plants", href: "/plants" },
          { label: "Indoor" },
        ]}
      />
    ),
  },
);
