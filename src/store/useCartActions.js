import { useCallback, useContext } from "react";
import AddToCart from "./AddToCart";
import { CartCtx } from "./CartContext";

export function useCartActions() {
  const { setCart, setCost, setItems } = useContext(CartCtx);

  const addItem = useCallback(
    (product, quantity = 1) => {
      if (!product) {
        return [];
      }

      const normalizedQuantity = Number(quantity) || 1;
      return AddToCart(
        { ...product, Quantity: normalizedQuantity },
        setCart,
        setCost,
        0,
        "add",
        setItems
      );
    },
    [setCart, setCost, setItems]
  );

  const changeQuantity = useCallback(
    (item, delta) => {
      if (!item || !delta) {
        return [];
      }
      return AddToCart(item, setCart, setCost, delta, "add", setItems);
    },
    [setCart, setCost, setItems]
  );

  const removeItem = useCallback(
    (item) => {
      if (!item) {
        return [];
      }
      const removalAmount = -Number(item?.Quantity || 0);
      if (!removalAmount) {
        return [];
      }
      return AddToCart(item, setCart, setCost, removalAmount, "add", setItems);
    },
    [setCart, setCost, setItems]
  );

  const clearCart = useCallback(
    () => AddToCart(null, setCart, setCost, 0, "empty", setItems),
    [setCart, setCost, setItems]
  );

  return { addItem, changeQuantity, removeItem, clearCart };
}

export default useCartActions;
