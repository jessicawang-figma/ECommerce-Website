import figma from "@figma/code-connect";
import { HeroBanner } from "../components/HeroBanner";

figma.connect(
  HeroBanner,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=108-5",
  {
    example: () => (
      <HeroBanner
        eyebrow="New season"
        title="Plants that practically grow themselves"
        subtitle="Self-watering, expertly grown, delivered to your door."
        ctaLabel="Shop the collection"
        imageSrc="/plants/hero.jpg"
      />
    ),
  },
);
