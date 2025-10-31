const loadCart = () => {
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

const calculateSummary = (cart) => {
  return cart.reduce(
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

export default function AddToCart(arr, setCart, setCost, num = 0, type = "add", setItems) {
  if (typeof window === "undefined") {
    return [];
  }

  if (type === "empty") {
    window.localStorage.setItem("cart", JSON.stringify([]));
    setItems?.([]);
    setCart?.(0);
    setCost?.(0);
    return [];
  }

  const cart = loadCart();

  if (!arr) {
    return cart;
  }

  const index = cart.findIndex((item) => item.id === arr.id && item.color === arr.color && item.size === arr.size);
  const delta = num === 0 ? Number(arr.Quantity || 0) : num;

  if (index !== -1) {
    cart[index].Quantity += delta;
    if (cart[index].Quantity < 1) {
      cart.splice(index, 1);
    }
  } else if (delta > 0) {
    cart.push({ ...arr, Quantity: delta });
  }

  if (setItems) {
    setItems(cart);
  } else {
    const { count, cost } = calculateSummary(cart);
    setCart?.(count);
    setCost?.(cost);
  }

  window.localStorage.setItem("cart", JSON.stringify(cart));

  return cart;
}
