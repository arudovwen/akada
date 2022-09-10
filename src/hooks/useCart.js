import React, { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

const Context = React.createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Local Storage: setting & getting data
  useEffect(() => {
    const cartItemsData = JSON.parse(localStorage.getItem("cartItems"));

    if (cartItemsData) {
      setCartItems(cartItemsData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const setToCart = async (data) => {
    setCartItems(data);
  };
  function addToCart(newItem) {
    newItem.amount = 0;
    newItem.id = Date.now();
    setCartItems((prevItems) => [...prevItems, newItem]);
    toast.success("Added to cart", {
      position: "top-right",
      duration: 2550,
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success("Removed", {
      position: "top-right",
      duration: 2550,
    });
  }
  function clearCart() {
    setCartItems([]);
    toast.success("Cart cleared", {
      position: "top-right",
      duration: 2550,
    });
  }
  return (
    <Context.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, setToCart }}
    >
      {children}
    </Context.Provider>
  );
}

export { CartProvider, Context };
export const useCart = () => {
  return useContext(Context);
};
