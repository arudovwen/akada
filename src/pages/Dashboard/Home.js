import Table from "./components/Table";
import Modal from "../../components/Modal";

import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import StudentDetails from "../Dashboard/StudentDetails/StudentStats";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Dashboard = function () {
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
      <div className="container mb-12 mx-auto">
        <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          <div className="bg-[#E16D38]  rounded-lg text-center px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
            <div>
              <p className="text-white text-4xl mb-5">75%</p>
              <p className="text-gray-100 font-thin text-sm">Average grade</p>
            </div>
          </div>
          <div className="bg-[#943993]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
            <div>
              <p className="text-white text-4xl mb-5">125</p>
              <p className="text-gray-100 font-thin text-sm">
                No of students sponsored
              </p>
            </div>
          </div>
          <div className="bg-[#97B550]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
            <div>
              <p className="text-black text-4xl mb-5">125</p>
              <p className="text-black font-thin text-sm">
                Best matched candidates
              </p>
            </div>
          </div>
          <div className="bg-[#7A6D7B]  rounded-lg text-center   px-4 lg:px-8  py-8 lg:py-12 flex items-center justify-center">
            <div>
              <p className="text-white text-4xl mb-5">125</p>
              <p className="text-gray-100 font-thin text-sm">
                No of students sponsored
              </p>
            </div>
          </div>
          <div className="bg-[#943993] col-span-2 lg:col-span-1 rounded-2xl p-4 ">
            <h4 className="text-gray-100 text-lg">Statistics</h4>

            <PieChart width={100} height={140}>
              <Pie
                data={data}
                startAngle={180}
                endAngle={0}
                dataKey="value"
                cx="50%"
                cy="70%"
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
                cy="70%"
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
                cy="70%"
                outerRadius={25}
                fill="#e4e2e5"
              />
            </PieChart>

            <div className="flex justify-between">
              <div className="leading-tight">
                <p className="font-light text-[12px] text-[#eac8e9] mb-0">
                  Male
                </p>
                <p>
                  <span className="text-[13px] mr-1 font-semibold text-white">
                    500
                  </span>
                  <span className="text-[11px] font-light text-white">60%</span>
                </p>
              </div>
              <div className="leading-tight">
                <p className="font-light text-[12px] text-[#eac8e9] mb-0">
                  Female
                </p>
                <p>
                  <span className="text-[13px] mr-1 font-semibold text-white">
                    500
                  </span>
                  <span className="text-[11px] font-light text-white">40%</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Table toggleDetailsModal={toggleModal} />
      {/* View user stats */}
      <Modal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="">
          <span
            className="absolute top-4 right-4  z-40 cursor-pointer"
            onClick={() => toggleModal()}
          >
            <XIcon className="w-6 h-6 text-white z-40" />
          </span>
          <StudentDetails />
        </div>
      </Modal>
    </section>
  );
};
export default Dashboard;
