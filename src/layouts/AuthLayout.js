import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  } else {
    return (
      <section className="bg-cover bg-akada-background h-screen flex items-center justify-end">
        <Outlet />
      </section>
    );
  }
};
