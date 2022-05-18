//import akadabg from '../images/background-image.jpg';
import akadaLogo from '../images/akada-logo.png';
import { Link } from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io';

const SignUp = function () {
  return (
    <section className='bg-cover bg-akada-background h-screen '>
      <div className='bg-white w-[30rem] h-[37rem] px-10 rounded-3xl right-24 mt-10 absolute'>
        <div className='mt-10 mx-auto'>
          <img src={akadaLogo} alt='akada-logo' className='mx-auto mb-10' />
        </div>

        <div className='capitalize mb-1 text-text-color text-lg font-semibold'>
          create account
        </div>
        <p className='font-semibold text-lg w-72  mb-5'>
          Kindly fill in your details to get started
        </p>

        <form
          action='
        '
        >
          <div className=' mb-5'>
            <label htmlFor='' className='text-sm'>
              Enter your business email
            </label>
            <input
              type='text'
              className='block border-b-2 w-full h-10 text-xl font-medium'
              placeholder='Email address'
            />
          </div>

          <div className=' mb-5'>
            <label htmlFor='' className='text-sm '>
              Enter your password
            </label>
            <input
              type='text'
              className='block border-b-2 w-full  h-10 text-xl font-medium'
              placeholder='Password'
            />
          </div>

          <div className=' mb-5'>
            <label htmlFor='' className='text-sm '>
              Select matching metrics
            </label>
            <input
              type='text'
              className='block border-b-2 w-full  h-10 text-xl font-medium'
              placeholder='Matching metrics'
            />
            <div className='right-10 text-2xl bottom-[8.5rem] absolute'>
              <IoIosArrowDown />
            </div>
          </div>
          <button className='uppercase bg-text-color w-full text-white py-2 rounded-md mb-4 tracking-wider'>
            <Link to='getStarted2'>create account</Link>
          </button>

          <p className='text-center text-sm text-gray-500'>
            already have an account?{' '}
            <a className='text-green-300' href=''>
              sign up
            </a>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
