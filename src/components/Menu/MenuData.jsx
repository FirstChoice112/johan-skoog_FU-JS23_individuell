/* eslint-disable react/prop-types */
// MenuData.js
import { createContext, useState } from "react";

// Skapa context
const CartContext = createContext();

// Skapa provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Exportera context
export default CartContext;
