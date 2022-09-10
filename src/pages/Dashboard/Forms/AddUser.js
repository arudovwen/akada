
import CustomModal from '../../../components/Modal';
import { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
const AddUser = function () {
  let [isOpen, setIsOpen] = useState(false);
  function toggleModal() {

    setIsOpen(!isOpen);
  }
  return (
    <div className='w-full'>
      <div className='capitalize text-text-color text-2xl font-bold mb-16'>
        Add User
      </div>

      <form action=''>
        <div className=' mb-8'>
          <label htmlFor='' className='text-sm'>
            Enter Name
          </label>
          <input
            type='text'
            className='block border-b-2 w-full h-10 text-xl font-medium py-3 outline-none'
            placeholder='Enter name'
          />
        </div>

        <div className=' mb-8'>
          <label htmlFor='' className='text-sm'>
            Enter work email
          </label>
          <input
            type='text'
            className='block border-b-2 w-full h-10 text-xl font-medium py-3 outline-none'
            placeholder='Enter work email'
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
              Choose role
            </option>
             <option value="male">User</option>
              <option value="Female">Admin</option>
              <option value="others">SuperAdmin</option>
          </select>
        </div>

        <button
          type='button'
          className='uppercase bg-text-color w-full text-white py-3 text-lg font-bold rounded-md mb-4 tracking-wider mt-5'
        >
          <span onClick={() => toggleModal()}>Add User</span>
        </button>
      </form>

      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className='bg-white translate-x-2/4 w-[331px]  border rounded-xl pt-4 absolute top-[200px] right-1/2 text-center'>
          <div className='text-white text-[52px] bg-text-color w-20 h-20 rounded-full text-center top-[-3rem] mx-auto absolute inset-x-0 flex items-center justify-center'>
            <IoMdCheckmark />
          </div>

          <div className='px-16'>
            <h3 className='text-center text-text-color font-semibold capitalize mb-1 mt-6 text-lg'>
              success!
            </h3>
            <p className='text-[#8D8D8D] text-sm text-center text-ligh mb-4'>
              {' '}
              Yay! User added successfully
            </p>
          </div>

          <div className='text-center bg-[#E4E5E3] text-sm rounded-br-xl rounded-bl-xl   flex items-center justify-center w-full py-4 mt-8  font-bold uppercase text-text-color'>
            {' '}
            <a href='/dashboard'>go to dashboard</a>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default AddUser;
