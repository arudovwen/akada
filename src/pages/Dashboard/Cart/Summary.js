import MakePayment from './MakePayment';
import * as React from 'react';

import { DotsVerticalIcon, XIcon } from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import CustomModal from '../../../components/Modal';

const summary = [
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
];

const Summary = function () {
  let [isOpen, setIsOpen] = React.useState(false);
  const [isShowing, setIsShowing] = React.useState('');
  function toggleModal(val) {
    setIsShowing(val);
    setIsOpen(!isOpen);
  }
  return (
    <section>
      <div className="bg-[#F9FAFB] pt-4 pb-2 capitalize text-dashboardgray rounded-lg cart-summary">
        <h3 className="font-semibold text-lg mb-5 px-3 border-b">summary</h3>
        <table className="w-full">
          <tbody>
            {summary.map((item) => {
              return (
                <tr className="border-b" key={item.title}>
                  <td className="border-b"> {item.title}</td>
                  <td className="font-semibold text-sm border-b">
                    NGN {item.amount}
                  </td>
                </tr>
              );
            })}
            <tr className="">
              <td className="border-b">Total</td>
              <td className="text-sm font-semibold border-b">NGN 5,000,000</td>
            </tr>
          </tbody>
        </table>

        <div className="px-3">
          <button
            type="button"
            className="capitalize lg:uppercase bg-text-color w-full text-white  py-3 text-lg font-light rounded-md mb-4 tracking-wider mt-5"
          >
            <span onClick={() => toggleModal("checkout")}>checkout</span>
          </button>
        </div>
      </div>

      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="relative">
          <span
            className="absolute top-4 right-4  z-40 cursor-pointer"
            onClick={() => toggleModal()}
          >
            <XIcon className="w-6 h-6 z-40 cursor-pointer" />
          </span>
          {isShowing === "checkout" && <MakePayment />}
        </div>
      </CustomModal>
    </section>
  );
};

export default Summary;
