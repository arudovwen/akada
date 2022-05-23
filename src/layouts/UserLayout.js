import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../pages/Dashboard/Header";
import SideBar from "../pages/Dashboard/SideBar";
import dash from "../images/dash.png";

export const UserLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img src={dash} alt="dash" className="absolute top-0 left-0 z-[1]" />
      <div className="z-[3] w-full">
        <Header />
      </div>
      <div className="flex py-10 z-[4] relative">
        <div className="w-[20%] px-8">
          {" "}
          <SideBar />
        </div>
        <div className="w-[80%] px-6 relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
