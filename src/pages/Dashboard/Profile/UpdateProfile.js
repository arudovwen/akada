import ProfilePicture from './ProfilePicture';
import CustomModal from '../../../components/Modal';
import { useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';

const UpdateProfile = function () {
  let [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <section className='w-full '>
      <ProfilePicture />
      <div className=' justify-between shadow-lg pt-7 pb-20  px-14 rounded-xl'>
        <div className='grid grid-cols-1  lg:grid-cols-2 gap-x-[15rem] mb-5'>
          <div className=' mb-5'>
            <label htmlFor='' className='text-sm'>
              Enter your name
            </label>
            <input
              type='text'
              className='block border-b-2 w-full h-10 text-xl font-medium'
              placeholder='Name'
            />
          </div>

          <div className=' mb-5'>
            <label htmlFor='' className='text-sm'>
              Select your gender
            </label>
            <select className='block border-b-2 w-full h-10 text-xl font-medium text-gray-300'>
              <option className='text-gray-300'>Gender </option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
          </div>

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
            <label htmlFor='' className='text-sm'>
              Enter location
            </label>
            <select className='block border-b-2 w-full h-10 text-xl font-medium text-gray-300'>
              <option className='text-gray-300'>Location</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Others'>Others</option>
            </select>
          </div>
          <div className=' mb-5'>
            <label htmlFor='' className='text-sm'>
              Enter your phone number
            </label>
            <input
              type='text'
              className='block border-b-2 w-full h-10 text-xl font-medium'
              placeholder='Phone number'
            />
          </div>

          <div className=' mb-5'>
            <label htmlFor='' className='text-sm'>
              Select role
            </label>
            <select className='block border-b-2 w-full h-10 text-xl font-medium text-gray-300'>
              <option>By Subject</option>
              <option value='Date'>Date</option>
              <option value='Email'>Email</option>
              <option value='Sector'>Sector</option>
              <option value='Gender'> Gender</option>
            </select>
          </div>
        </div>
        <div className='text-center  '>
          <button
            onClick={toggleModal}
            className='bg-primary w-full lg:w-[25rem] uppercase text-center rounded-lg py-3 px-6 text-white'
          >
            update profile
          </button>
        </div>
      </div>
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
              Yay! Profile updated successfully
            </p>
          </div>

          <div className='text-center bg-[#E4E5E3] text-sm  flex items-center justify-center w-full py-4 mt-8  font-bold uppercase text-text-color'>
            {' '}
            <a href=''>go to dashboard</a>
          </div>
        </div>
      </CustomModal>
    </section>
  );
};
export default UpdateProfile;
