import { Navigate, Outlet, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Header from "../pages/AdminDashboard/Header";
import BottomNav from "../pages/Dashboard/Navigation/BottomNav";
import SideBar from "../pages/AdminDashboard/SideBar";
import dash from "../images/dash.png";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";

export const AdminLayout = function () {
  const { admin } = useAuth();

  if (admin) {
    return <Navigate to="/" />;
  }

  return (
    <div
      className="h-screen w-screen relative overflow-hidden
    "
    >
      {/* <img src={dash} alt='dash' className='absolute top-0 left-0 z-[1]' /> */}
      <div className="z-[3] w-full">
        <Header />
      </div>
      <div className="flex z-[4] relative full-body">
        <div className="hidden lg:block lg:w-[20%]    ">
          {" "}
          <SideBar />
        </div>
        <div className="w-full lg:w-[80%] px-4 md:px-6 lg:px-12 relative z-10 main-body pt-6 lg:pt-10 pb-[80px] lg:pb-0">
          {/* <AdminDashboard /> */}
          <Outlet />
        </div>
      </div>

      {/* <div className='lg:hidden fixed w-full bottom-0 z-[30] shadow-lg border-t'>
        <BottomNav />
      </div> */}
    </div>
  );
};
