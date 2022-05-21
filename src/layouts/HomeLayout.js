import { Navigate, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import topimg from '../images/topimg.png';

export const HomeLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <div>
      <img src={topimg} className='w-full h-[33px]' alt='topimg' />

      <Outlet />
      <img src={topimg} className='w-full h-[33px] rotate-180' alt='topimg' />
    </div>
  );
};
