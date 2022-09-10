import React, { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { CartProvider } from "./hooks/useCart";
import "./index.css";
import "flowbite";
import App from "./App";
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

const Main = () => {
  useEffect(() => {
    if (!localStorage.getItem("cartItems")) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <ToastContainer />
      <StrictMode>
        <BrowserRouter>
          <AuthProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </AuthProvider>
        </BrowserRouter>
      </StrictMode>
    </>
  );
};

ReactDOM.render(<Main />, rootElement);
