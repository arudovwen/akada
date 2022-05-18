import akadaLogo from '../images/akada-logo.png';
import { Link } from 'react-router-dom';

const CreatedAccount = function () {
  return (
    <section className=''>
      <main className='bg-cover bg-akada-background h-screen '>
        <div className='bg-white w-[30rem] h-[37rem] px-10 rounded-3xl right-24 mt-10 absolute'>
          <div className='mt-10 mx-auto'>
            <img src={akadaLogo} alt='akada-logo' className='mx-auto mb-10' />
          </div>

          <div className='capitalize mb-1 text-text-color text-lg font-semibold'>
            verify account
          </div>
          <p className='font-semibold text-lg w-72  mb-10'>
            Kindly fill the code sent to your mail below
          </p>

          <form
            action='
        '
          >
            <div className=' mb-20'>
              <label htmlFor='' className='text-sm'>
                Verification code
              </label>
              <div className='flex justify-between'>
                <input
                  type='text'
                  className='block border-b-2 w-10  h-10 text-xl font-medium'
                  placeholder=''
                />

                <input
                  type='text'
                  className='block border-b-2 w-10  h-10 text-xl font-medium'
                  placeholder=''
                />
                <input
                  type='text'
                  className='block border-b-2  w-10 h-10 text-xl font-medium'
                  placeholder=''
                />
                <input
                  type='text'
                  className='block border-b-2 w-10  h-10 text-xl font-medium'
                  placeholder=''
                />
                <input
                  type='text'
                  className='block border-b-2  w-10  h-10 text-xl font-medium'
                  placeholder=''
                />
                <input
                  type='text'
                  className='block border-b-2  w-10  h-10 text-xl font-medium'
                  placeholder=''
                />
              </div>
            </div>
            <button className='uppercase bg-text-color w-full text-white py-2 rounded-md mb-4 tracking-wider'>
              <Link to='/createdAccount'> create account</Link>
            </button>
          </form>
        </div>
      </main>

      <div className='bg-white w-64 border rounded-lg pt-4 absolute top-1/2 right-1/2'>
        <div className='px-16'>
          <h3 className='text-center text-text-color font-semibold capitalize mb-4'>
            success!
          </h3>
          <p className='text-gray-500 text-center  mb-4'>
            {' '}
            Yay! account has been created successfully
          </p>
        </div>

        <div className='text-center bg-gray-200 rounded-b-lg w-full py-2 font-semibold uppercase text-text-color'>
          {' '}
          <a href=''>go to dashboard</a>
        </div>
      </div>
    </section>
  );
};

export default CreatedAccount;
