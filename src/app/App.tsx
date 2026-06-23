import * as React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCart } from "./cart";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/Checkout";
import { Confirmation } from "./pages/Confirmation";

/** Turns internal <a href="/..."> clicks (e.g. inside Header/Footer) into SPA navigation. */
function NavCapture({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const onClick = (e: React.MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest("a");
    const href = anchor?.getAttribute("href");
    if (href && href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    }
  };
  return <div onClick={onClick}>{children}</div>;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const NAV_LINKS = [
  { label: "Plants", href: "/" },
  { label: "Pots & planters", href: "/" },
  { label: "Plant care", href: "/" },
  { label: "Gifts", href: "/" },
  { label: "Sale", href: "/" },
];

export function SiteHeader() {
  const { count } = useCart();
  return <Header links={NAV_LINKS} cartCount={count} />;
}

export function App() {
  return (
    <NavCapture>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </NavCapture>
  );
}

export { Footer };
