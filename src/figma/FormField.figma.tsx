import figma from "@figma/code-connect";
import { FormField } from "../components/FormField";

figma.connect(
  FormField,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=94-43",
  {
    props: {
      state: figma.enum("State", { Default: "default", Focus: "focus", Error: "error" }),
    },
    example: ({ state }) => (
      <FormField
        label="Email address"
        state={state}
        placeholder="you@email.com"
        errorMessage="Please enter a valid email address"
      />
    ),
  },
);
