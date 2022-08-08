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
      <div className="grid grid-cols-1 md:grid-cols-3">
        <img src={topimg} className="h-[33px] w-full" alt="topimg" />
        <img src={topimg} className="h-[33px]  w-full hidden md:inline" alt="topimg" />
        <img src={topimg} className="h-[33px]  w-full hidden md:inline" alt="topimg" />
      </div>

      <Outlet />
      <div className="grid grid-cols-1 md:grid-cols-3">
        <img src={topimg} className="h-[33px]  rotate-180  w-full" alt="topimg" />
        <img
          src={topimg}
          className="h-[33px] hidden md:inline rotate-180  w-full"
          alt="topimg"
        />
        <img
          src={topimg}
          className="h-[33px] hidden md:inline rotate-180  w-full"
          alt="topimg"
        />
      </div>
    </div>
  );
};
