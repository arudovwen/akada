import ProfilePicture from './ProfilePicture';
import { IoIosArrowDown } from 'react-icons/io';

const UpdateProfile2 = function () {
  return (
    <section className='w-full '>
      <ProfilePicture />
      <div className=' justify-between shadow-lg py-7 px-14 rounded-xl'>
        <div className='grid grid-cols-2 gap-x-[15rem] mb-5'>
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
            <select className='block border-b-2 w-full h-10 text-xl font-medium'>
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
            <select className='block border-b-2 w-full h-10 text-xl font-medium'>
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
            <select className='block border-b-2 w-full h-10 text-xl font-medium'>
              <option>By Subject</option>
              <option value='Date'>Date</option>
              <option value='Email'>Email</option>
              <option value='Sector'>Sector</option>
              <option value='Gender'> Gender</option>
            </select>
          </div>
        </div>
        <div className='text-center  '>
          <button className='bg-primary w-[25rem] text-center rounded-lg py-3 px-3 text-white capitalize'>
            edit profile
          </button>
        </div>
      </div>
    </section>
  );
};
export default UpdateProfile2;
