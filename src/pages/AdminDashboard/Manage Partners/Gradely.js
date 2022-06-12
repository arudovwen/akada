const Gradely = function () {
  return (
    <section className='w-[50rem] shadow-2xl rounded-xl mb-10'>
      <div className='capitalize'>
        <h3 className='text-center bg-[#F9F9F9] text-dashboardgray font-semibold py-3 mb-14'>
          Gradely
        </h3>
        <div className='grid grid-cols-2 gap-y-14 pb-20 '>
          <div className='text-center'>
            <h4 className='text-sm text-dashboardgray'>Total students</h4>
            <span className='text-[#D1D4E3] text-4xl font-semibold'>
              200000
            </span>
          </div>
          <div></div>

          <div className='text-center '>
            <h4 className='text-sm text-dashboardgray '>male</h4>
            <span className='text-[#D1D4E3] text-4xl font-semibold'>
              200000
            </span>
          </div>

          <div className='text-center'>
            <h4 className='text-sm text-dashboardgray '>female</h4>
            <span className='text-[#D1D4E3] text-4xl font-semibold'>
              200000
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gradely;
