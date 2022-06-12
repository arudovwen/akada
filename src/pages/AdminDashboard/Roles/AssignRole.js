import { IoMdCheckmark } from 'react-icons/io';
import * as React from 'react';
import { Link } from 'react-router-dom';

const AssignRole = function () {
  const [isDone, setIsDone] = React.useState(false);
  return (
    <div>
      {!isDone ? (
        <form
          action=''
          className='px-8 md:px-16 py-12 md:py-24 bg-white rounded-2xl w-full lg:w-[40rem] '
        >
          <div className=' mb-8 '>
            <label htmlFor='' className='text-sm'>
              Enter Name
            </label>
            <input
              type='text'
              className='block border-b-2 w-full h-10 text-sm md:text-xl font-medium py-3 outline-none'
              placeholder='Name'
            />
          </div>

          <div className=' mb-12'>
            <label htmlFor='' className='text-sm '>
              Select role
            </label>
            <select
              name='gender'
              id='gender'
              className='block border-b-2 w-full h-10  text-sm md:text-xl font-medium  outline-none'
            >
              <option value='' disabled selected hidden>
                Role
              </option>
              <option value='male'>User</option>
              <option value='Female'>Admin</option>
              <option value='others'>SuperAdmin</option>
            </select>
          </div>

          <button
            onClick={() => setIsDone(true)}
            type='button'
            className='lg:uppercase bg-text-color w-full text-white py-3 text-sm md:text-base lg:text-lg font-bold rounded-md mb-4 tracking-wider mt-5'
          >
            <span>Assign role</span>
          </button>
        </form>
      ) : (
        <div className='bg-white w-[250px] md:w-[331px]  border rounded-xl pt-4 text-center'>
          <div className='text-white text-[52px] bg-text-color w-20 h-20 rounded-full text-center top-[-3rem] mx-auto absolute inset-x-0 flex items-center justify-center'>
            <IoMdCheckmark />
          </div>

          <div className='px-8 md:px-16'>
            <h3 className='text-center text-text-color font-semibold capitalize mb-1 mt-6 text-lg'>
              success!
            </h3>
            <p className='text-[#8D8D8D] text-sm text-center text-ligh mb-4'>
              {' '}
              Yay! User role assigned successfully
            </p>
          </div>

          <div className='text-center bg-[#E4E5E3] text-sm rounded-br-xl rounded-bl-xl    flex items-center justify-center w-full py-4 mt-8  font-bold uppercase text-text-color'>
            {' '}
            <Link to='/dashboard'>go to dashboard</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignRole;
