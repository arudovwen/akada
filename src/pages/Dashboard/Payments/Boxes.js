const Boxes = function () {
  return (
    <section>
      <div className='flex w-[65rem] gap-x-3'>
        <div className='grid grid-cols-1 w-[18rem] gap-3 '>
          {' '}
          <div className='bg-primary h-[10rem] rounded-3xl'>box 50000000</div>
          <div className='bg-green-600 h-[10rem] rounded-3xl'>box 500</div>
        </div>{' '}
        <div className='grid grid-cols-2 gap-x-2 w-[25rem]'>
          <div className='bg-white shadow-xl h-[6rem] rounded-3xl  '>647</div>
          <div className='bg-white shadow-xl h-[6rem] rounded-3xl '>647</div>
          <div className='col-span-2 bg-white shadow-xl h-[14rem] rounded-3xl mt-2'>
            spend analysis
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
