import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing/Landing";
import { HomeLayout } from "./layouts/HomeLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { AuthLayout } from "./layouts/AuthLayout";
import { UserLayout } from "./layouts/UserLayout";
import RegisterAccount from "./pages/Auth/RegisterAccount";
import VerifyAccount from "./pages/Auth/VerifyAccount";
import LoginAccount from "./pages/Auth/LoginAccount";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";


export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route path="/dashboard" element={<UserLayout />}>
        <Route path="About" element={<About />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="register" element={<RegisterAccount />} />
        <Route path="/login" element={<LoginAccount />} />
        <Route path="/verify-account" element={<VerifyAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route path="About" element={<About />} /> */}
      </Route>
    </Routes>
  );
}
