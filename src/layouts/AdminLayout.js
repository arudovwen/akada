import { Navigate, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Header from '../pages/AdminDashboard/Header';
import BottomNav from '../pages/Dashboard/Navigation/BottomNav';
import SideBar from '../pages/AdminDashboard/SideBar';
import dash from '../images/dash.png';
import AdminDashboard from '../pages/AdminDashboard/Overview/AdminDashboard';

export const AdminLayout = function () {
  const { admin } = useAuth();

  if (admin) {
    return <Navigate to='/' />;
  }

  return (
    <div
      className="h-screen w-screen relative overflow-hidden
    "
    >

      <div className="flex z-[4] relative bg-[#fcfafb]">
        <div className="hidden lg:block lg:w-[20%]">
          {" "}
          <SideBar />
        </div>
        <div className="w-full lg:w-[80%] px-4 md:px-6 relative z-10 h-screen pb-[80px] overflow-y-auto lg:pb-0">
          {/* <AdminDashboard /> */}
          <div className="z-[3] w-full">
            <Header />
          </div>
          <Outlet />
        </div>
      </div>

      {/* <div className='lg:hidden fixed w-full bottom-0 z-[30] shadow-lg border-t'>
        <BottomNav />
      </div> */}
    </div>
  );
};
