import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';

const RequestConfirmation = function ({switchVal}) {
  return (
    <section>
      <div className='bg-white  w-[320px]  border rounded-xl pt-6 pb-8 text-center'>
        <div className='text-white text-[52px] bg-text-color w-16 h-16 rounded-full text-center top-[-2rem] mx-auto absolute inset-x-0 flex items-center justify-center'>
          <IoMdCheckmark />
        </div>

        <div className='px-8'>
          {/* <h3 className='text-center text-text-color font-semibold capitalize mb-1 mt-6 text-lg'>
            success!
          </h3> */}
          <p className='text-[#8D8D8D] text-base text-center mt-9 text-light mb-4'>
            {' '}
            Approve user access request
          </p>
        </div>

        <div className='flex items-center justify-center px-4 '>
          <button className='text-dashboardgray bg-white px-6 py-3 text-sm  mr-3 uppercase rounded' onClick={()=>switchVal('approved')}>
            yes
          </button>
          <button className='bg-primary text-white px-6 py-3 text-sm uppercase rounded'>
            no
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestConfirmation;
