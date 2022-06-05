const PaymentType = function () {
  return (
    <section className='bg-white shadow-lg w-full  '>
      <div className=''>
        <h2 className='bg-[#F9F9F9] text-center p-2 capitalize text-dashboardgray font-semibold mb-3'>
          payment type
        </h2>

        <div className='grid grid-cols-2  w-[12rem] gap-x-28 mx-auto capitalize font-semibold mb-5'>
          <h3 className='text-[#D1D4E3]'>card</h3>
          <h3 className='text-primary'>transfer</h3>
        </div>

        <div className='grid grid-cols-2 gap-y-7  pb-14  justify-items-center'>
          <div>
            <h4 className='text-sm '>Account number</h4>
            <span className='text-3xl text-[#D1D4E3]'>12345678</span>
          </div>
          <div>
            <h4 className='text-sm'>Account name</h4>
            <span className='text-3xl text-[#D1D4E3]'>Akada</span>
          </div>

          <div>
            <h4 className='text-sm'>Bank</h4>
            <span className='text-3xl text-[#D1D4E3]'>Providus</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentType;
