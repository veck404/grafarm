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
  Items: [],
  setItems: () => {},
});

export default function CartContext({ children }) {
  const initialSnapshot = useRef();

  if (!initialSnapshot.current) {
    const storedItems = getStoredCartItems();
    initialSnapshot.current = {
      items: storedItems,
      totals: calculateTotals(storedItems),
    };
  }

  const [Items, setItemsState] = useState(initialSnapshot.current.items);
  const [Cart, setCart] = useState(initialSnapshot.current.totals.count);
  const [Cost, setCost] = useState(initialSnapshot.current.totals.cost);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem("cart", JSON.stringify(Items));
  }, [Items]);

  const syncItems = (nextItems) => {
    setItemsState(nextItems);
    const { count, cost } = calculateTotals(nextItems);
    setCart(count);
    setCost(cost);
  };

  return <CartCtx.Provider value={{ Cart, setCart, Cost, setCost, Items, setItems: syncItems }}>{children}</CartCtx.Provider>;
}
