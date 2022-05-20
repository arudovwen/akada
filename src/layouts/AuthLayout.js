import { Navigate, Outlet, Link } from "react-router-dom";
import akadaLogo from "../images/akada-logo.png";


import { IoIosArrowDown } from "react-icons/io";
export const AuthLayout = () => {
  return (
    <section className="bg-cover bg-akada-background h-screen flex items-center justify-end">
      <Outlet />
    </section>
  );
};
