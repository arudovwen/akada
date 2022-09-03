import * as React from "react";
import { currency } from "../../../hooks/useCurrency";
const perks = [
  {
    id: 1,
    title: "bag",
  },
  {
    id: 2,
    title: "T-shirt",
  },
  {
    id: 3,
    title: "books",
  },
  {
    id: 4,
    title: "stationary",
  },

  {
    id: 5,
    title: "cardigan",
  },
];

const Budget = function ({extraInfo, updateInfo}) {
  function handleChange(e) {
    updateInfo({
      ...extraInfo,

      [e.target.name]: e.target.value,
    });
  }
  function handlePerks(e) {
    let myperks = extraInfo.perks;
    let newperks = myperks.includes(e.target.value)
      ? myperks.filter((i) => i !== e.target.value)
      : [...extraInfo.perks, e.target.value];
    updateInfo({
      ...extraInfo,
      perks: newperks,
    });
  }
  return (
    <section className="rounded-xl bg-white shadow-xl border border-gray-100 p-5 capitalize text-dashboardgray">
      <div className="flex items-center gap-x-3 mb-9">
        <h3 className="font-medium text-[#5B5B5B] text-lg">Budget</h3>
        <select
          onChange={(e) => handleChange(e)}
          value={extraInfo.apply}
          name="apply"
          className=" border h-9 rounded text-base px-3"
        >
          <option className="text-black">Apply to all </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <h3 className="text-[#5B5B5B] font-medium text-lg">Amount</h3>
      <span>
        <input
          type="range"
          name="budget"
          min={0}
          max={1000000}
          onChange={(e) => handleChange(e)}
          value={extraInfo.budget}
          className="w-full accent-primary"
        />
      </span>
      <span className="border block  mt-4 px-3 py-2 w-full rounded mb-8 h-10">
        {currency(extraInfo.budget)}
      </span>
      <h3 className="text-[#5B5B5B] font-medium mb-[10px] text-lg">Perks</h3>
      {perks.map((item) => {
        return (
          <form key={item.title}>
            <div className="mb-2 flex items-center gap-x-3">
              {" "}
              <input
                name="perks"
                value={item.title}
                onChange={(e) => handlePerks(e)}
                type="checkbox"
                id="checkbox"
                className="accent-primary"
              />
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
