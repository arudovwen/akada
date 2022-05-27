const Boxes = function () {
  return (
    <section>
      <div className='flex w-[45rem] gap-x-3 '>
        <div className='grid grid-cols-1 w-[18rem] gap-3 '>
          {' '}
          <div className='bg-primary h-[10rem] rounded-3xl pl-10 pt-12 text-white'>
            <p className='text-lg'>Balance</p>
            <span className='text-2xl font-bold'>NGN 50000000</span>
            <p className='underline'>Fund wallet</p>
          </div>
          <div
            className='bg-[#97B550]
 h-[10rem] rounded-3xl pl-10 pt-12 text-white'
          >
            {' '}
            <p className='text-lg'>Balance</p>
            <span className='text-2xl font-bold'>$ 5000</span>
            <p className='underline'>Fund wallet</p>
          </div>
        </div>{' '}
        <div className='grid grid-cols-2 gap-x-2 w-[25rem]'>
          <div className='bg-white shadow-xl h-[6rem] rounded-3xl text-sm py-5 px-5  '>
            <div className='flex justify-between items-center mb-2'>
              <p>Total Spent</p>
              <div className='text-[#97B550] '>NGN</div>
            </div>
            <span
              className='text-[#97B550] text-lg  font-bold
'
            >
              N657.000
            </span>
          </div>
          <div className='bg-white shadow-xl h-[6rem] rounded-3xl text-sm py-5 px-5  '>
            <div className='flex justify-between items-center mb-2'>
              <p>Spent this month</p>
              <div className='text-[#97B550] '>graph</div>
            </div>
            <span
              className='text-[#97B550] text-lg  font-bold
'
            >
              N657.000
            </span>
          </div>
          <div className='col-span-2 bg-white shadow-xl h-[14rem] rounded-3xl mt-2 py-5 px-5  '>
            <h3 className='mb-3 text-dashboardgray font-semibold'>
              {' '}
              Spend analysis{' '}
            </h3>
            <div className='grid grid-cols-2 items-center gap-y-10 '>
              <div className='flex gap-x-7 text-sm'>
                <div>subscription</div> <span>N67,300</span>
              </div>
              <div className='flex gap-x-7 text-sm'>
                <div> sponsorship</div> <span>N156,300</span>
              </div>
              <div className='flex gap-x-7 text-sm'>
                <div> upgrade</div> <span>N1,456,300</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
