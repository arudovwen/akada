import customer1 from "../../../images/customer1.png";
import * as React from "react";
import { PencilAltIcon, CheckIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import CustomModal from "../../../components/Modal";
// import Pagination from '../../../components/Pagination';
import StudentDetail from "../../Dashboard/StudentDetails/Details";
import { useCart } from "../../../hooks/useCart";
import { currency } from "../../../hooks/useCurrency";

const Table = function ({cartData, updateCart}) {


  const [inputData, setInputData] = React.useState([]);
  function openInput(index) {
    let newinput = inputData;
    let inputnew = [...newinput, index.toString()];
    setInputData(inputnew);
  }
  function closeInput(index) {
    let newinput = inputData;
    let inputnew = newinput.filter((i) => i !== index);
    setInputData(inputnew);
  }
  function handleAmount(e, i) {
    let newinput = cartData;
    let inputnew = newinput.map((item, id) => {
      if (id === i) {
        item.amount = e.target.value;
      }
      return item;
    });
    updateCart(inputnew);

  }
  return (
    <section className="w-full lg:w-auto  rounded-xl bg-white">
      <div className="">
        <div className="cart-table overflow-x-auto">
          <table className="">
            <thead>
              <tr className="text-left">
                <th className="!text-xs !font-medium text-gray-400 border-b border-gray-100 px-4 py-2 uppercase">
                  Name
                </th>
                <th className="!text-xs !font-medium text-gray-400 border-b border-gray-100 px-4 py-2 uppercase">
                  Platform
                </th>
                <th className="!text-xs !font-medium text-gray-400 border-b border-gray-100 px-4 py-2 uppercase">
                  Subscription
                </th>
                <th className="!text-xs !font-medium text-gray-400 border-b border-gray-100 px-4 py-2 uppercase">
                  school
                </th>

                <th className="!text-xs !font-medium text-gray-400 border-b border-gray-100 px-4 py-2 uppercase">
                  grade
                </th>

                <th className="!text-xs !font-medium text-gray-400 border-b border-gray-100 px-4 py-2 uppercase">
                  amount
                </th>
                <th className="!text-xs !font-medium text-gray-400 border-b border-gray-100 px-4 py-2 uppercase">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((e, i) => (
                <tr className="" key={i}>
                  <td className="flex items-center border-b border-gray-100 px-4 py-2 capitalize">
                    {" "}
                    <img
                      src={customer1}
                      className="w-8 h-8 rounded-lg mr-2"
                      alt="cusotmer"
                    />{" "}
                    {e.first_name} {e.last_name}
                  </td>
                  <td className="border-b border-gray-100 px-4 py-2 capitalize">
                    u-lesson
                  </td>
                  <td className="border-b border-gray-100 px-4 py-2 capitalize">
                    Monthly
                  </td>

                  <td className="border-b border-gray-100 px-4 py-2 capitalize">
                    {e.school.name}
                  </td>
                  <td className="border-b border-gray-100 px-4 py-2">A+</td>
                  <td className="border-b border-gray-100 px-4 py-2">
                    {inputData.includes(`${e.first_name} ${e.last_name}`) ? (
                      <input
                        value={e.amount}
                        onChange={(a) => handleAmount(a, i)}
                        className="w-[80px] border border-[#943993] rounded-md text-sm h-8"
                      />
                    ) : (
                      currency(e.amount)
                    )}
                  </td>
                  <td className="border-b border-gray-100 px-4 py-2">
                    {!inputData.includes(`${e.first_name} ${e.last_name}`) ? (
                      <PencilAltIcon
                        className="w-5 h-5"
                        onClick={() =>
                          openInput(`${e.first_name} ${e.last_name}`)
                        }
                      />
                    ) : (
                      <CheckIcon
                        className="w-5 h-5"
                        onClick={() =>
                          closeInput(`${e.first_name} ${e.last_name}`)
                        }
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {!cartData.length && (
            <div className="text-xl font-medium text-center py-10 mt-16 text-gray-400">
              You have no student in your cart!
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Table;
