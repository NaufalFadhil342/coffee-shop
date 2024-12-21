import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartData.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartData(cartData.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)));
    } else {
      setCartData([...cartData, { ...item, quantity: 1 }]);
    }
  };

  return <CartContext.Provider value={{ cartData, addToCart, setCartData }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
