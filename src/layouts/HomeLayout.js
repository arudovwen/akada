import { Navigate, Outlet, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import akadaLogo from '../images/akada-logo.png';
import akadaboy from '../images/akadaboy.png';
import akadagirl2 from '../images/akadaboy2.png';
import akadagirl from '../images/akadagirl.png';

export const HomeLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to='/dashboard/profile' />;
  }

  return (
    <div>
      <div></div>
      <nav className='flex justify-between max-w-6xl mx-auto mt-8'>
        <img src={akadaLogo} alt='akada-logo' />
        <div className='flex gap-x-5'>
          <Link className='capitalize font-semibold' to='/login'>
            Log in
          </Link>

          <Link
            className='uppercase border border-purple-800 px-2 py-1 rounded-full '
            to='/getStarted'
          >
            {' '}
            get started
          </Link>
        </div>
      </nav>

      <section className='grid grid-cols-2  mt-14'>
        <div className='mr-8 '>
          <h2 className='text-5xl text-purple-800 font-extrabold capitalize'>
            subscribe.
          </h2>
          <h2 className='text-5xl text-purple-800 font-extrabold capitalize'>
            select.
          </h2>
          <h2 className='text-5xl text-purple-800 font-extrabold capitalize'>
            sponsor.
          </h2>
          {/* <div className='border border-purple-800'>get started</div> */}
        </div>

        <div className='grid grid-cols-3'>
          <div className='block'>
            <img
              className='rounded-2xl h-[32rem] block'
              src={akadagirl}
              alt='akada-girl'
            />
          </div>
          <div className='block'>
            <img
              className='rounded-2xl h-[32rem] block'
              src={akadaboy}
              alt='akada-boy'
            />
          </div>
          <div className='block'>
            <img
              className='rounded-2xl h-[32rem] block'
              src={akadagirl2}
              alt='akada-girl2'
            />
          </div>
        </div>
      </section>
      <Outlet />
    </div>
  );
};
