import figma from "@figma/code-connect";
import { Footer } from "../components/Footer";

figma.connect(
  Footer,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=66-2",
  {
    example: () => <Footer />,
  },
);
