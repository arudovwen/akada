import Form from './Form';
import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';

const Boxes = function () {
  return (
    <section>
      <div className='container mb-12'>
        <div className=' w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 '>
          <div className='bg-[#E16D38] h-[12rem] rounded-lg text-center px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center h-[30rem]'>
            <div>
              <p className='text-white text-4xl mb-5'>75%</p>
              <p className='text-gray-100 font-thin text-sm'>Average grade</p>
            </div>
          </div>
          <div className='bg-[#943993] h-[12rem] rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
            <div>
              <p className='text-white text-4xl mb-5'>125</p>
              <p className='text-gray-100 font-thin text-sm'>
                No of students sponsored
              </p>
            </div>
          </div>
          <div className='bg-[#97B550] h-[12rem] rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
            <div>
              <p className='text-black text-4xl mb-5'>125</p>
              <p className='text-black font-thin text-sm'>
                Best matched candidates
              </p>
            </div>
          </div>
          <div className='bg-[#7A6D7B] h-[12rem] rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
            <div className=''>
              <p className='text-white text-4xl mb-5'>125</p>
              <p className='text-gray-100 font-thin text-sm'>
                No of students sponsored
              </p>
            </div>
          </div>
          <div className='bg-[#943993] col-span-2  rounded-2xl py-8 h-[40rem] '>
            <p className='text-gray-100 text-lg'>Statistics</p>
          </div>
        </div>
      </div>
      <Form />
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
            Yay! sponsor has successfully been added to your sponsor cart
          </p>
        </div>

        <div className='text-center bg-[#E4E5E3] text-sm  flex items-center justify-center w-full py-4 mt-8  font-bold uppercase text-text-color'>
          {' '}
          <Link to='/dashboard'>go to dashboard</Link>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
