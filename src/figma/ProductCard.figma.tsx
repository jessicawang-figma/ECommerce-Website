import figma from "@figma/code-connect";
import { ProductCard } from "../components/ProductCard";

figma.connect(
  ProductCard,
  "https://www.figma.com/design/XCejTJyXlpZqCqkAx1BoYP/Twigma-Luxury-Plants-Design-System-v1?node-id=67-40",
  {
    example: () => (
      <ProductCard
        category="Indoor · Easy care"
        title="Monstera Deliciosa"
        price="£128"
        rating={4.8}
        reviewCount={214}
        badge={{ label: "Bestseller", tone: "in-stock" }}
        imageSrc="/plants/monstera.jpg"
      />
    ),
  },
);
