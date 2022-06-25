import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AuthLayout = () => {
  const { user } = useAuth();
  console.log("🚀 ~ file: AuthLayout.js ~ line 6 ~ AuthLayout ~ user", user)

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
