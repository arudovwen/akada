import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import topimg from '../images/topimg.png';

export const HomeLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <img src={topimg} className="h-[33px]" alt="topimg" />
        <img src={topimg} className="h-[33px] hidden lg:inline" alt="topimg" />
        <img src={topimg} className="h-[33px] hidden lg:inline" alt="topimg" />
      </div>

      <Outlet />
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <img src={topimg} className="h-[33px]  rotate-180" alt="topimg" />
        <img
          src={topimg}
          className="h-[33px] hidden lg:inline rotate-180"
          alt="topimg"
        />
        <img
          src={topimg}
          className="h-[33px] hidden lg:inline rotate-180"
          alt="topimg"
        />
      </div>
    </div>
  );
};
