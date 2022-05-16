import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import { HomeLayout } from "./layouts/HomeLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { UserLayout } from "./layouts/UserLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/dashboard" element={<UserLayout />}>
        <Route path="About" element={<About />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        {/* <Route path="About" element={<About />} /> */}
      </Route>
    </Routes>
  );
}
