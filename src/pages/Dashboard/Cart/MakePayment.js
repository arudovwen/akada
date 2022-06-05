import * as React from 'react';

import { DotsVerticalIcon, XIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import CustomModal from '../../../components/Modal';
import Success from './Success';

const finalSummary = [
  {
    id: 1,
    title: 'subtotal',
    amount: 400000,
  },

  {
    id: 2,
    title: 'platform fees',
    amount: 400000,
  },

  {
    id: 3,
    title: 'commission',
    amount: 400000,
  },

  {
    id: 4,
    title: 'perks',
    amount: 400000,
  },
];

const MakePayment = function () {
  let [isOpen, setIsOpen] = React.useState(false);
  const [isShowing, setIsShowing] = React.useState('');
  function toggleModal(val) {
    setIsShowing(val);
    setIsOpen(!isOpen);
  }
  return (
    <section>
      {" "}
      <div className="bg-white py-14 px-8 capitalize text-dashboardgray rounded-xl w-[90vw] md:w-[30rem]">
        <div className="cart-summary">
          <h3 className="font-semibold text-lg mb-5 px-3">summary</h3>
          <table className="w-full">
            <tbody>
              {finalSummary.map((item) => {
                return (
                  <tr className="">
                    <td className="text-sm"> {item.title}</td>
                    <td className="font-semibold text-sm">NGN {item.amount}</td>
                  </tr>
                );
              })}
              <tr className="">
                <td className="border-b">Total</td>
                <td className="text-sm font-semibold border-b">
                  NGN 5,000,000
                </td>
              </tr>
            </tbody>
          </table>

        <div className="px-3">
            <button
            type="button"
            className="capitalize md:uppercase bg-text-color w-full text-white  py-3 text-base md:text-lg font-semibold md:font-bold rounded-md mb-4 tracking-wider mt-5"
          >
            <span onClick={() => toggleModal("makePayment")}>make payment</span>
          </button>
          </div>
        </div>
      </div>
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="relative w-[95vw] sm:w-[331px]">
          <span
            className="absolute top-4 right-4  z-40 cursor-pointer"
            onClick={() => toggleModal()}
          >
            <XIcon className="w-6 h-6 " />
          </span>

          {isShowing === "makePayment" && <Success />}
        </div>
      </CustomModal>
    </section>
  );
};

export default MakePayment;
