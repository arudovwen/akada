import Table from "./components/Table";
import SideModal from "../../components/SideModal";

import { useState } from "react";
import AddUser from "../Dashboard/Forms/AddUser";

import { XIcon } from "@heroicons/react/outline";
const Dashboard = function () {
  let [isSideOpen, setIsSideOpen] = useState(false);

  function toggleSideModal() {
    setIsSideOpen(!isSideOpen);
  }


  return (
    <section>
      <div className="container mb-12">
        <div className=" w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
          <div className="bg-[#943993] col-span-2  rounded-2xl py-8 ">
            <p className="text-gray-100 text-lg">Statistics</p>
          </div>
        </div>
      </div>
      <Table />
      {/* Add user starts */}
      <SideModal isSideOpen={isSideOpen} closeModal={() => toggleSideModal()}>
        <div className="p-8">
          <span
            className="absolute top-4 right-4"
            onClick={() => toggleSideModal()}
          >
            <XIcon className="w-6 h-6" />
          </span>
          <AddUser />
        </div>
      </SideModal>


    </section>
  );
};
export default Dashboard;
