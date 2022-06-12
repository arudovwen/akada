import { IoMdCheckmark } from 'react-icons/io';
import { Link } from 'react-router-dom';

const SuccessRole = function () {
  return (
    <section>
      <div className='bg-white translate-x-2/4 w-[331px]  border rounded-xl pt-4 absolute top-[200px] right-1/2 text-center'>
        <div className='text-white text-[52px] bg-text-color w-20 h-20 rounded-full text-center top-[-3rem] mx-auto absolute inset-x-0 flex items-center justify-center'>
          <IoMdCheckmark />
        </div>

        <div className='px-16'>
          {/* <h3 className='text-center text-text-color font-semibold capitalize mb-1 mt-6 text-lg'>
            success!
          </h3> */}
          <p className='text-[#8D8D8D] text-sm text-center mt-9 text-light mb-4'>
            {' '}
            Yay! Role assigned successfully
          </p>
        </div>

        <div className='text-center bg-[#E4E5E3] text-sm rounded-br-xl rounded-bl-xl  flex items-center justify-center w-full py-4 mt-8  font-bold uppercase text-text-color'>
          {' '}
          <Link to='/dashboard'>go to dashboard</Link>
        </div>
      </div>
    </section>
  );
};

export default SuccessRole;
