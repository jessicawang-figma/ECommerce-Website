import figma from "@figma/code-connect";
import { Header } from "../components/Header";

figma.connect(
  Header,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=65-2",
  {
    example: () => <Header cartCount={2} />,
  },
);
