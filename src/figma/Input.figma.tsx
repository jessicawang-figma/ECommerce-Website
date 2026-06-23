import figma from "@figma/code-connect";
import { Input } from "../components/Input";

figma.connect(
  Input,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=3-115",
  {
    props: {
      inputType: figma.enum("Type", { Text: "text", Search: "search" }),
      disabled: figma.enum("State", { Default: false, Focus: false, Disabled: true }),
    },
    example: ({ inputType, disabled }) => (
      <Input inputType={inputType} disabled={disabled} placeholder="Try monstera, fiddle leaf…" />
    ),
  },
);
