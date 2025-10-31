import { createContext, useEffect, useRef, useState } from "react";

const getStoredCartItems = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const stored = window.localStorage.getItem("cart");
    if (!stored) {
      return [];
    }

    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Failed to parse cart from storage:", error);
    return [];
  }
};

const calculateTotals = (items) => {
  return items.reduce(
    (acc, item) => {
      const quantity = Number(item?.Quantity || 0);
      const cost = Number(item?.cost || 0);
      return {
        count: acc.count + quantity,
        cost: acc.cost + quantity * cost,
      };
    },
    { count: 0, cost: 0 }
  );
};

export const CartCtx = createContext({
  Cart: 0,
  setCart: () => {},
  Cost: 0,
  setCost: () => {},
});

export default function CartContext({ children }) {
  const initialSnapshot = useRef();

  if (!initialSnapshot.current) {
    const storedItems = getStoredCartItems();
    initialSnapshot.current = calculateTotals(storedItems);
  }

  const [Cart, setCart] = useState(initialSnapshot.current.count);
  const [Cost, setCost] = useState(initialSnapshot.current.cost);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!window.localStorage.getItem("cart")) {
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  return <CartCtx.Provider value={{ Cart, setCart, Cost, setCost }}>{children}</CartCtx.Provider>;
}
