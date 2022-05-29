import { useState } from 'react';
import CustomModal from '../../../components/Modal';

const AssignRole = function () {
  // let [isOpen, setIsOpen] = useState(false);
  // function toggleModal() {
  //   console.log('🚀 ~ file: AddUser.js ~ line 9 ~ toggleModal ~ toggleModal');
  //   setIsOpen(!isOpen);
  // }
  return (
    <section>
      <div>
        <span className='absolute top-0 right-0  z-40 cursor-pointer'></span>

        <form
          action=''
          className='px-64 py-24 bg-white rounded-2xl absolute top-0 w-full right-20'
        >
          <div className=' mb-8 '>
            <label htmlFor='' className='text-sm'>
              Enter Name
            </label>
            <input
              type='text'
              className='block border-b-2 w-full h-10 text-xl font-medium py-3 outline-none'
              placeholder='Samson Joe'
            />
          </div>

          <div className=' mb-12'>
            <label htmlFor='' className='text-sm '>
              Select role
            </label>
            <select
              name='gender'
              id='gender'
              className='block border-b-2 w-full h-10 text-xl font-medium  outline-none'
            >
              <option value='' disabled selected hidden>
                Role
              </option>
              <option value='male'>Male</option>
              <option value='Female'>Female</option>
              <option value='others'>Others</option>
            </select>
          </div>

          <button
            type='button'
            className='uppercase bg-text-color w-full text-white py-3 text-lg font-bold rounded-md mb-4 tracking-wider mt-5'
          >
            <span>assign role</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AssignRole;
