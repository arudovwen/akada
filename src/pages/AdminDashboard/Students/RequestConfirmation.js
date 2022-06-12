import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';

const RequestConfirmation = function () {
  return (
    <section>
      <div className='bg-white translate-x-2/4 w-[331px]  border rounded-xl pt-4 pb-2 absolute top-[400px] right-1/2 text-center'>
        <div className='text-white text-[52px] bg-text-color w-20 h-20 rounded-full text-center top-[-3rem] mx-auto absolute inset-x-0 flex items-center justify-center'>
          <IoMdCheckmark />
        </div>

        <div className='px-16'>
          {/* <h3 className='text-center text-text-color font-semibold capitalize mb-1 mt-6 text-lg'>
            success!
          </h3> */}
          <p className='text-[#8D8D8D] text-sm text-center mt-9 text-light mb-4'>
            {' '}
            Approve user access request
          </p>
        </div>

        <div className='flex items-center justify-between px-4 '>
          <button className='text-dashboardgray bg-white w-36 py-3   uppercase rounded'>
            yes
          </button>
          <button className='bg-primary text-white w-36 py-3 uppercase rounded'>
            no
          </button>
        </div>
      </div>
    </section>
  );
};

export default RequestConfirmation;
