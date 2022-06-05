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
    <section className="rounded-xl bg-white shadow-2xl p-5 capitalize text-dashboardgray">
      <div className="flex items-center gap-x-3 mb-12">
        <h3 className="font-semibold text-[#5B5B5B] text-lg">Budget</h3>
        <select className=" border h-14 rounded text-sm w-64 px-3">
          <option className="text-black">Apply to all </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <h3 className="text-[#5B5B5B] font-semibold text-lg">Amount</h3>
      <span>
        <input
          id="default-range"
          type="range"
          min="0"
          max="100000"
          value="50"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
        />
      </span>
      <span className="border block  mt-4 px-3 py-4 w-full rounded mb-8 h-14">
        NGN 50,000
      </span>
      <h3 className="text-[#5B5B5B] font-semibold mb-5 text-lg">Perks</h3>
      {perks.map((item) => {
        return (
          <form action="/action_page.php" key={item.title}>
            <div className="mb-3 flex items-center gap-x-3">
              {" "}
              <input type="checkbox" id="checkbox" name="checkbox" />
              <label htmlFor="checkbox" className="text-dashboardgray ">
                {" "}
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
