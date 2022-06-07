import Requests from './Requests';

const AccessRequest = function () {
  return (
    <section>
      <div className='grid grid-cols-3 gap-x-3'>
        <div className='bg-[#E16D38]  rounded-lg text-center px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
          <div>
            <p className='text-white text-4xl mb-5'>75</p>
            <p className='text-gray-100 font-thin text-sm'>Total Requests</p>
          </div>
        </div>
        <div className='bg-[#943993]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
          <div>
            <p className='text-white text-4xl mb-5'>125</p>
            <p className='text-gray-100 font-thin text-sm'>Approved Requests</p>
          </div>
        </div>
        <div className='bg-[#97B550]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center'>
          <div>
            <p className='text-black text-4xl mb-5'>125</p>
            <p className='text-black font-thin text-sm'>Pending Requests</p>
          </div>
        </div>
      </div>
      <Requests />
    </section>
  );
};

export default AccessRequest;
