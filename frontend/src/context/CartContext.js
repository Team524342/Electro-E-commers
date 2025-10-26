import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => cart.reduce((total, item) => total + item.price, 0);

  const placeOrder = ({ name, address }) => {
    const total = getTotalPrice();
    const id = Date.now();
    const order = {
      id,
      items: cart,
      name,
      address,
      total,
      date: new Date().toISOString().split("T")[0],
      status: "Processing",
    };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    return order;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getTotalPrice,
        orders,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
