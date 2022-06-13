import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { BsFillBarChartFill } from "react-icons/bs";
import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Table from "./Table";

const monthData = [
  {
    name: "Jan",
    uv: 4000,
  },
  {
    name: "Feb",
    uv: 3000,
  },
  {
    name: "Mar",
    uv: 2000,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
  },
  {
    name: "Jun",
    uv: 2390,
  },
  {
    name: "Jul",
    uv: 3490,
  },
  {
    name: "Aug",
    uv: 3490,
  },
  {
    name: "Sept",
    uv: 3490,
  },
  {
    name: "Oct",
    uv: 3490,
  },
  {
    name: "Nov",
    uv: 3490,
  },
  {
    name: "Dec",
    uv: 3490,
  },
];
const Payments = function () {
  let [isOpen, setisOpen] = useState(false);
  const data = [
    { name: "Male", value: 60 },
    { name: "Female", value: 40 },
  ];
  const data02 = [{ name: "A1", value: 100 }];
  const COLORS = ["#E16D38", "#97B550"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#fafafa"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  function toggleModal() {
    setisOpen(!isOpen);
  }
  return (
    <section>
      {" "}
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#E16D38]  rounded-lg text-center px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
          <div>
            <p className="text-white text-4xl mb-5">200M</p>
            <p className="text-gray-100 font-thin text-sm">Total Payments</p>
          </div>
        </div>
        <div className="bg-[#943993]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
          <div>
            <p className="text-white text-4xl mb-5">50M</p>
            <p className="text-gray-100 font-thin text-sm">This Month</p>
          </div>
        </div>
        <div className="bg-[#97B550]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
          <div>
            <p className="text-white text-4xl mb-5">5M</p>
            <p className="text-gray-100 font-thin text-sm">Today</p>
          </div>
        </div>

        <div className="bg-white col-span-1 lg:col-span-1 rounded-2xl p-4 shadow-2xl">
          <h4 className="text-dashboardgray text-lg">Statistics</h4>

          <PieChart width={100} height={200}>
            <Pie
              data={data}
              startAngle={360}
              endAngle={0}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={30}
              fill="#fff"
            />
            <Pie
              data={data02}
              dataKey="value"
              startAngle={360}
              endAngle={0}
              cx="50%"
              cy="50%"
              outerRadius={25}
              fill="#e4e2e5"
            />
          </PieChart>

          <div className="flex justify-between">
            <div className="leading-tight">
              <p className="font-light text-[12px] text-dashboardgray mb-0">
                Active Sponsors
              </p>
              <p>
                <span className="text-[13px] mr-1 font-semibold text-dashboardgray">
                  500
                </span>
                <span className="text-[11px] font-light text-dashboardgray">
                  60%
                </span>
              </p>
            </div>
            <div className="leading-tight">
              <p className="font-light text-[12px] text-dashboardgray mb-0">
                In-active Sponsors
              </p>
              <p>
                <span className="text-[13px] mr-1 font-semibold text-dashboardgray">
                  500
                </span>
                <span className="text-[11px] font-light text-dashboardgray">
                  40%
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-white rounded-2xl shadow-xl p-5 flex flex-col justify-between">
          <div className="flex justify-between mb-5">
            <div>
              <h2 className="font-light">Monthly sponsorship</h2>
              <span className="text-dashboardgray text-2xl font-semibold">
                1645
              </span>
            </div>

            <div className="flex items-center">
              <select className="bg-gray-100 rounded-full px-3 py-1  text-xs mr-4 outline-0">
                <option>2022</option>
              </select>

              <div className="p-2 rounded-md bg-[#F4F7FE]">
                {" "}
                <BsFillBarChartFill className="w-3 h-3" />
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              width={500}
              height={200}
              data={monthData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 15,
              }}
              radius={10}
              barSize={40}
            >
              <XAxis dataKey="name" />

              <Tooltip />

              <Bar
                dataKey="pv"
                fill="#97B550"
                background={{ fill: "#eee" }}
                radius={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <Table />
    </section>
  );
};
export default Payments;
