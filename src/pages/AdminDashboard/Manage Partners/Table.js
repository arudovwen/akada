import customer1 from '../../../images/customer1.png';
import * as React from 'react';
import {
  DotsVerticalIcon,
  ChevronDownIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import CustomModal from '../../../components/Modal';
// import StudentDetail from '../../Dashboard/StudentDetails/Details';
import StudentDetail from '../../Dashboard/StudentDetails/Details';
import StudentStats from '../../Dashboard/StudentDetails/StudentStats';
import Button from '../../../components/Button';
import Pagination from '../../../components/Pagination';

// import StudentStats from '../StudentDetails/StudentStats';
const Table = function () {
  let [isOpen, setIsOpen] = React.useState(false);
  const [isShowing, setIsShowing] = React.useState('details');
  function toggleModal(val) {
    setIsShowing(val);
    setIsOpen(!isOpen);
  }
  return (
    <div className=" container pb-20 mx-auto pt-7">
      <div className="flex capitalize justify-between items-center ">
        <div className="font-bold whitespace-nowrap">
          {" "}
          <Button
            className="bg-primary px-8 rounded uppercase text-sm py-2 text-white ml-auto"
            onClick={() => toggleModal("assign")}
          >
            export to excel
          </Button>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="relative px-6">
            {" "}
            <select className="appearance-none text-text-color bg-transparent font-semibold relative outline-none  text-xs sm:text-sm md:text-base">
              <option>By Status</option>
              <option value="Date">Date</option>
              <option value="Email">Email</option>
              <option value="Sector">Sector</option>
              <option value="Gender"> Gender</option>
            </select>
            <ChevronDownIcon className="h-4 w-4 absolute top-1 right-0 text-text-color pointer-events-none" />
          </div>
          <div className="relative">
            {" "}
            <select className="appearance-none outline-none bg-transparent text-gray-400 border px-3 w-40 py-2 rounded-lg border-gray-200 relative text-xs sm:text-sm md:text-base">
              <option>Active</option>
              <option value="Date">Date</option>
              <option value="Email">Email</option>
              <option value="Sector">Sector</option>
              <option value="Gender"> Gender</option>
            </select>
            <ChevronDownIcon className="h-4 w-4 absolute top-3 right-2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto w-full approvals">
        <table className="capitalize table-auto text-dashboardgray text-sm w-full">
          <thead>
            <tr className="text-left">
              <th>name</th>
              <th>organization</th>
              <th>Date</th>
              <th>position</th>
              <th>role</th>

              <th>status</th>

              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((e, i) => (
              <tr className="" key={i}>
                <td className="flex items-center">
                  {" "}
                  <img
                    src={customer1}
                    className="w-8 h-8 rounded-lg mr-2"
                    alt="cusotmer"
                  />{" "}
                  taiwo odunade
                </td>
                <td>access bank</td>
                <td>23-Jun-2022</td>
                <td>Manager</td>
                <td>admin</td>
                <td>active</td>

                <td>
                  <Menu as="div">
                    <Menu.Button>
                      <DotsVerticalIcon className="w-4 h-4" />
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
                      <Menu.Items className="absolute right-4 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                        <Menu.Item>
                          <div
                            className="rounded-md px-4 py-3 text-sm text-center"
                            onClick={() => toggleModal("details")}
                          >
                            View
                          </div>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination />
      </div>
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="relative">
          <span
            className="absolute top-4 right-4 z-40 cursor-pointer"
            onClick={() => toggleModal()}
          >
            <XIcon className="w-6 h-6 " />
          </span>
          {isShowing === "details" ? <StudentDetail /> : <StudentStats />}
        </div>
      </CustomModal>
    </div>
  );
};

export default Table;
