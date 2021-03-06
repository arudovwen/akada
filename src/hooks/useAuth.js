/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [admin, setAdmin] = useLocalStorage("admin", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate("/dashboard");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

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
      user,
      login,
      logout,
      admin,
      adminlogin,
      adminlogout,
    }),
    [user, admin]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
