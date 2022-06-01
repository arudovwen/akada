import { CgArrowsExchange } from 'react-icons/cg';

import { AiOutlineCreditCard } from 'react-icons/ai';
const FundWallet = function () {
  return (
    <section className='bg-white py-14 pl-4 pr-28'>
      <div className='flex gap-x-3 items-center mb-2'>
        <div className='bg-primary p-2 text-white text-2xl rounded-lg'>
          <CgArrowsExchange />
        </div>
        <div>Transfer to account</div>
      </div>
      <div className='flex gap-x-3 items-center'>
        <div className='bg-[#97B550] p-2 text-white text-2xl rounded-lg'>
          <AiOutlineCreditCard />
        </div>
        <div>Use card</div>
      </div>
    </section>
  );
};
export default FundWallet;
