/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { toast } from "react-toastify";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const addToCart = async (data) => {
    let newcart = cart;
    data.amount = 0
    newcart.push(data);
    setCart(newcart);
     toast.success("Added to cart", {
       position: "top-right",
       duration: 2550,
     });
  };
  const setToCart = async (data) => {

    setCart(data);

  };
  const removeFromCart = async (data) => {
    let newcart = cart.filter((item) => item.id !== data.id);
    setCart(newcart);
     toast.success("Removed", {
       position: "top-right",
       duration: 2550
     });
  };
  const clearCart = async () => {
    setCart([]);
    toast.success("Cart cleared", {
      position: "top-right",
      duration: 2550,
    });
  };

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      clearCart,
      removeFromCart,
      setToCart,
    }),
    [cart]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
