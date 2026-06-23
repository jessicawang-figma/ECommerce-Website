import * as React from "react";
import { useNavigate } from "react-router-dom";
import { OrderConfirmation } from "@/components/OrderConfirmation";

export function Confirmation() {
  const navigate = useNavigate();
  const orderNumber = React.useMemo(
    () => `TWG-${Math.floor(10000 + Math.random() * 89999)}`,
    [],
  );

  return (
    <div
      onClickCapture={(e) => {
        const button = (e.target as HTMLElement).closest("button");
        if (button?.textContent?.includes("Continue shopping")) navigate("/");
      }}
    >
      <OrderConfirmation orderNumber={orderNumber} />
    </div>
  );
}
