import { useState } from "react";
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
import Table from "./Table";
import Modal from "../../../components/Modal";
import { XIcon } from "@heroicons/react/outline";
import sponsor from "../../../images/lastSponsor.png";


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

const lastFiveSponsors = [
  {
    id: 1,
    name: "taiwo odunadde",
    image: sponsor,
  },

  {
    id: 2,
    name: "taiwo odunadde",
    image: sponsor,
  },

  {
    id: 3,
    name: "taiwo odunadde",
    image: sponsor,
  },

  {
    id: 4,
    name: "taiwo odunadde",
    image: sponsor,
  },

  {
    id: 5,
    name: "taiwo odunadde",
    image: sponsor,
  },
];

const Students = function () {
  const [isOpen, setisOpen] = useState(false);
  const [showing, setShowing] = useState("info");
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
  function toggleModal(val) {
    setisOpen(!isOpen);
    setShowing(val);
  }
  return (
    <section>
      <div className="container mb-12 mx-auto">
        <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-[#E16D38]  rounded-lg text-center px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
            <div>
              <p className="text-white text-4xl mb-5">75</p>
              <p className="text-gray-100 font-thin text-sm">Male Students</p>
            </div>
          </div>
          <div className="bg-[#943993]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
            <div>
              <p className="text-white text-4xl mb-5">125</p>
              <p className="text-gray-100 font-thin text-sm">Female Students</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-x-7 ">
          <div className="col-span-3 bg-white rounded-2xl shadow-xl p-5 flex flex-col justify-between">
            <div className="flex justify-between">
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

          <div className="bg-white shadow-2xl  lg:col-span-1 rounded-2xl p-4 ">
            <h4 className="text-black mb-4 font-semibold">Last 5 Sponsors</h4>
            <ul>
              {lastFiveSponsors.map((sponsor) => {
                return (
                  <li className="flex items-center gap-x-2 capitalize text-sm mb-2">
                    <img src={sponsor.image} alt={sponsor.name} />{" "}
                    {sponsor.name}{" "}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Table  />

    </section>
  );
};

export default Students;
