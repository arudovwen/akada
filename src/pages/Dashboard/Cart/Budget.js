const Budget = function () {
  return (
    <section>
      <div className='flex items-center gap-x-3'>
        <h3>Budget</h3>
        <select className=' border h-10 text-sm '>
          <option className='text-black'>Apply to all </option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Others'>Others</option>
        </select>
      </div>
      <h3>Amount</h3>
      <span>graph</span>
      <span className='border block w-28'>NGN 50,000</span>
    </section>
  );
};

export default Budget;
