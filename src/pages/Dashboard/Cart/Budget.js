const perks = [
  {
    id: 1,
    title: 'bag',
  },
  {
    id: 2,
    title: 'T-shirt',
  },
  {
    id: 3,
    title: 'books',
  },
  {
    id: 4,
    title: 'stationary',
  },

  {
    id: 5,
    title: 'cardigan',
  },
];

const Budget = function () {
  return (
    <section className='rounded-xl bg-white shadow-2xl p-5 capitalize text-dashboardgray'>
      <div className='flex items-center gap-x-3 mb-12'>
        <h3 className='font-semibold text-lg'>Budget</h3>
        <select className=' border h-14 rounded text-sm w-64'>
          <option className='text-black'>Apply to all </option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Others'>Others</option>
        </select>
      </div>
      <h3>Amount</h3>
      <span>graph</span>
      <span className='border block  mt-4 px-3 py-4 w-full rounded mb-8 h-14'>
        NGN 50,000
      </span>
      <h3 className='text-dashboardgray font-semibold mb-5 text-lg'>Perks</h3>
      {perks.map((item) => {
        return (
          <form action='/action_page.php'>
            <div className='mb-3 flex items-center gap-x-3'>
              {' '}
              <input type='checkbox' id='checkbox' name='checkbox' />
              <label for='checkbox' className='text-dashboardgray '>
                {' '}
                {item.title}
              </label>
            </div>
          </form>
        );
      })}
    </section>
  );
};

export default Budget;
