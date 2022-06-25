import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import "./index.css";
import "flowbite";
import App from "./App";
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);

const Main = () => {
  return (
    <>
      <ToastContainer />
      <StrictMode>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </StrictMode>
    </>
  );
};

ReactDOM.render(<Main />, rootElement);
