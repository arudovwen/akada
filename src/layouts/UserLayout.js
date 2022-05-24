import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../pages/Dashboard/Navigation/Header";
import BottomNav from "../pages/Dashboard/Navigation/BottomNav";
import SideBar from "../pages/Dashboard/Navigation/SideBar";
import dash from "../images/dash.png";

export const UserLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div
      className="h-screen w-screen relative overflow-hidden
    "
    >
      <img src={dash} alt="dash" className="absolute top-0 left-0 z-[1]" />
      <div className="z-[3] w-full">
        <Header />
      </div>
      <div className="flex py-6 lg:py-10 z-[4] relative">
        <div className="hidden lg:block lg:w-[20%] px-8">
          {" "}
          <SideBar />
        </div>
        <div className="w-100 lg:w-[80%] px-6 lg:px-12 relative z-10 main-body pb-44">
          <Outlet />
        </div>
      </div>
      <div className="lg:hidden fixed w-full bottom-0 z-[9999] shadow-lg border-t">
        <BottomNav />
      </div>
    </div>
  );
};
