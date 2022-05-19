/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useLocalStorage("admin", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the admin
  const adminlogin = async (data) => {
    setAdmin(data);
    navigate("/admin");
  };

  // call this function to sign out logged in admin
  const adminlogout = () => {
    setAdmin(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      admin,
      adminlogin,
      adminlogout,
    }),
    [admin,]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAdminAuth = () => {
  return useContext(AuthContext);
};
