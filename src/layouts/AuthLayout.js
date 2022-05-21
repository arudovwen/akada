import {Outlet } from "react-router-dom";
export const AuthLayout = () => {
  return (
    <section className="bg-cover bg-akada-background h-screen flex items-center justify-end">
      <Outlet />
    </section>
  );
};
