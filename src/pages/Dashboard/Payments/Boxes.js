import React, { PureComponent } from "react";
import flag from "../../../images/flag.png";
import eli1 from "../../../images/eli1.png";
import eli2 from "../../../images/eli2.png";
import eli3 from "../../../images/eli3.png";
import eli4 from "../../../images/eli4.png";
import { IoIosArrowDown } from "react-icons/io";
import ProgessBar from "../../../components/ProgressBar";
import { BarChart, Bar } from "recharts";
import { Menu, Transition } from "@headlessui/react";
import { BiWallet, BiTransferAlt, BiX } from "react-icons/bi";
import CustomModal from "../../../components/Modal";

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
  const [isOpen, setIsOpen] = React.useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <section className="w-full">
      <div className="md:flex gap-8 md:gap-4 w-full ">
        <div className="grid md:grid-cols-1 md:w-[40%]  gap-4 mb-8 md:mb-0">
          <div className="bg-primary  rounded-3xl p-8 md:pl-10 pt-8 md:pt-12 text-white relative">
            <img src={eli2} className="absolute top-0 left-4" alt="eli" />
            <img src={eli1} className="absolute bottom-0 right-0" alt="eli" />
            <p className="text-base">Balance</p>
            <span className="text-xl font-bold">NGN 50000000</span>

            <Menu as="div">
              <Menu.Button>
                {" "}
                <p className="hover:underline text-sm cursor-pointer">
                  Fund wallet
                </p>
              </Menu.Button>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-2 w-56 py-4 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                  <Menu.Item>
                    <div className="rounded-md px-4 py-3 text-sm flex items-center">
                      <span className="w-6 h-6 rounded flex items-center justify-center mr-2 bg-[#943993]">
                        <BiTransferAlt className="text-white" />
                      </span>
                      <span
                        className="text-[#5B5B5B] text-sm"
                        onClick={() => setIsOpen(true)}
                      >
                        {" "}
                        Transfer to account{" "}
                      </span>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="rounded-md px-4 py-3 text-sm  flex items-center">
                      <span className="w-6 h-6 rounded flex items-center justify-center mr-2 bg-[#97B550]">
                        <BiWallet className="text-white" />
                      </span>{" "}
                      <span
                        className="text-[#5B5B5B] text-sm"
                        onClick={() => setIsOpen(true)}
                      >
                        Use card
                      </span>
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="bg-[#97B550]  rounded-3xl p-8 md:pl-10 pt-8 md:pt-12 text-white relative">
            <img src={eli4} className="absolute top-0 left-4" alt="eli" />
            <img src={eli3} className="absolute bottom-0 right-0" alt="eli" />

            <p className="text-base">Balance</p>
            <span className="text-xl font-bold">$5000</span>
            <Menu as="div">
              <Menu.Button>
                {" "}
                <p className="hover:underline text-sm cursor-pointer">
                  Fund wallet
                </p>
              </Menu.Button>
              <Transition
                as={React.Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-2 w-56 py-4 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                  <Menu.Item>
                    <div className="rounded-md px-4 py-3 text-sm flex items-center">
                      <span className="w-6 h-6 rounded flex items-center justify-center mr-2 bg-[#943993]">
                        <BiTransferAlt className="text-white" />
                      </span>
                      <span
                        className="text-[#5B5B5B] text-sm"
                        onClick={() => setIsOpen(true)}
                      >
                        {" "}
                        Transfer to account{" "}
                      </span>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <div className="rounded-md px-4 py-3 text-sm  flex items-center">
                      <span className="w-6 h-6 rounded flex items-center justify-center mr-2 bg-[#97B550]">
                        <BiWallet className="text-white" />
                      </span>{" "}
                      <span
                        className="text-[#5B5B5B] text-sm"
                        onClick={() => setIsOpen(true)}
                      >
                        Use card
                      </span>
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
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

      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="bg-white w-[90vw] md:w-[45vw]  border rounded-xl  mx-auto text-center overflow-hidden">
          <div className="bg-[#F9F9F9] py-3 flex justify-between items-center px-6">
            <h3 className="text-lg font-semibold">Payment Type </h3>
            <BiX className="text-lg" onClick={() => setIsOpen(false)} />
          </div>
          <div className=" py-4 flex justify-center items-center px-6">
            <h3 className="text-lg text-[#D1D4E3] font-medium mr-8">Card </h3>
            <h3 className="text-lg font-medium text-primary">Transfer </h3>
          </div>

          <form className="py-8 px-6">
            <div className="mb-5 md:flex items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 px-3 text-left">
                <label className="px-3 text-xs">Account number </label>
                <input
                  className="px-3 py-2   w-full border-0 custom-placeholder sm:h-14"
                  placeholder="00238580385"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 text-left">
                <label className="px-3 text-xs">Account name </label>
                <input
                  className="px-3 py-2   w-full border-0 custom-placeholder sm:h-14"
                  placeholder="Akada"
                />
              </div>
            </div>
            <div className="mb-5 flex items-center">
              <div className="w-full w-1/2 px-3 text-left">
                <label className="px-3 text-xs">Bank</label>
                <input
                  className="px-3 py-2   w-full border-0 custom-placeholder sm:h-14"
                  placeholder="Providus"
                />
              </div>
            </div>
          </form>
        </div>
      </CustomModal>
    </section>
  );
};

export default Boxes;
