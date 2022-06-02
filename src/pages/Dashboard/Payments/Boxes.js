import React, { PureComponent } from "react";
import flag from "../../../images/flag.png";
import eli1 from "../../../images/eli1.png";
import eli2 from "../../../images/eli2.png";
import eli3 from "../../../images/eli3.png";
import eli4 from "../../../images/eli4.png";
import { IoIosArrowDown } from "react-icons/io";
import ProgessBar from "../../../components/ProgressBar";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

const subscription = [
  {
    name: "Page S",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
];

const sponsorship = [
  {
    name: "Page T",
    uv: 800,
    pv: 2400,
    amt: 2400,
  },
];

const upgrade = [
  {
    name: "Page U",
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
];

const Boxes = function () {
  return (
    <section className="w-full">
      <div className="md:flex gap-8 md:gap-4 w-full ">
        <div className="grid md:grid-cols-1 md:w-[40%]  gap-4 mb-8 md:mb-0">
          <div className="bg-primary  rounded-3xl p-8 md:pl-10 pt-8 md:pt-12 text-white relative">
            <img src={eli2} className="absolute top-0 left-4" alt="eli" />
            <img src={eli1} className="absolute bottom-0 right-0" alt="eli" />
            <p className="text-base">Balance</p>
            <span className="text-xl font-bold">NGN 50000000</span>
            <p className="underline text-sm">Fund wallet</p>
          </div>
          <div className="bg-[#97B550]  rounded-3xl p-8 md:pl-10 pt-8 md:pt-12 text-white relative">
            <img src={eli4} className="absolute top-0 left-4" alt="eli" />
            <img src={eli3} className="absolute bottom-0 right-0" alt="eli" />

            <p className="text-base">Balance</p>
            <span className="text-xl font-bold">$ 5000</span>
            <p className="underline text-sm">Fund wallet</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:w-[60%] gap-4 ">
          <div className="bg-white shadow-mb md:h-[7rem] rounded-3xl text-sm py-5 px-5  ">
            <div className="flex justify-between items-center ">
              <p className="text-xs text-[#5B5B5B] font-medium">Total Spent</p>
              <div className="text-[#97B550] flex items-center">
                {" "}
                <img src={flag} alt="flag" className="w-4 h-3" /> NGN{" "}
                <IoIosArrowDown />
              </div>
            </div>
            <span className="text-[#97B550] text-md  font-semibold">
              N657.000
            </span>
          </div>
          <div className="bg-white shadow-mb md:h-[7rem] rounded-3xl text-sm py-5 px-5  ">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-xs text-[#5B5B5B] font-medium">
                  Spent this month
                </p>
                <span
                  className="text-[#97B550] text-md  font-semibold
"
                >
                  N657.000
                </span>
              </div>

              <div className="text-[#97B550] ">
                <BarChart width={50} height={40} data={data}>
                  <Bar
                    dataKey="uv"
                    fill="#97B550"
                    background={{ fill: "#fafafa" }}
                  />
                </BarChart>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 bg-white shadow-mb md:h-[14rem] rounded-3xl mt-2 py-5 px-5  ">
            <h3 className="mb-3 text-dashboardgray font-semibold">
              {" "}
              Spend analysis{" "}
            </h3>
            <div className="grid md:grid-cols-2 items-center gap-10 capitalize">
              <div className="text-sm">
                <div className="">
                  <div className=" mb-3 flex justify-between items-center">
                    {" "}
                    <span>subscription </span> <span>N67,300</span>{" "}
                  </div>

                  <ProgessBar min={200} max={300} color="#943992" />
                </div>{" "}
              </div>
              <div className="text-sm">
                <div className="mb-3 flex justify-between items-center">
                  {" "}
                  <span>sponsorship </span> <span>N67,300</span>{" "}
                </div>

                <ProgessBar min={520} max={600} color="#e16d38" />
              </div>
              <div>
                <div className="mb-3 flex justify-between text-sm">
                  <div className=""> upgrade </div> <span>N1,456,300</span>
                </div>

                <ProgessBar min={190} max={300} color="#97b550" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
