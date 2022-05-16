import { Navigate, Outlet, Link } from "react-router-dom";
import { useAdminAuth } from "../hooks/useAdminAuth";

export const AdminLayout = () => {
  const { admin } = useAdminAuth();

  if (!admin) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <nav>
        <Link to="/settings">Settings</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
};
