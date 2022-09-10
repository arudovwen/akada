import * as React from 'react';
import {  XIcon } from '@heroicons/react/outline';
import CustomModal from '../../../components/Modal';
import Success from './Success';
import { currency } from "../../../hooks/useCurrency";


const MakePayment = function ({
  total,
  subtotal,
  commission,
  fees,
  extraInfo,
  clearcart,
}) {
  let [isOpen, setIsOpen] = React.useState(false);
  const [isShowing, setIsShowing] = React.useState("");
  function toggleModal(val) {
    setIsShowing(val);
    setIsOpen(!isOpen);
    clearcart()
  }
  return (
    <section>
      {" "}
      <div className="bg-white py-14 px-8 capitalize text-dashboardgray rounded-xl w-[90vw] md:w-[30rem]">
        <div className="cart-summary">
          <h3 className="font-semibold text-lg mb-5 px-3">summary</h3>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="border-b border-gray-100">Subtotal</td>
                <td className="font-semibold text-sm border-b text-right border-gray-100">
                  {currency(subtotal)}
                </td>
              </tr>
              <tr className="border-b">
                <td className="border-b border-gray-100">Platform fees</td>
                <td className="font-semibold text-sm border-b text-right border-gray-100">
                  {currency(fees)}
                </td>
              </tr>
              <tr className="border-b">
                <td className="border-b border-gray-100"> Commission </td>
                <td className="font-semibold text-sm border-b text-right border-gray-100">
                  {currency(commission)}
                </td>
              </tr>
              <tr className="border-b">
                <td className="border-b border-gray-100"> Perks </td>
                <td className="font-semibold text-sm border-b text-right border-gray-100">
                  {currency(commission)}
                </td>
              </tr>
              <tr className="">
                <td className="border-b border-gray-100">Total</td>
                <td className="text-sm font-semibold border-b text-right border-gray-100">
                  {" "}
                  {currency(total)}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="px-3">
            <button
              type="button"
              className="capitalize md:uppercase bg-text-color w-full text-white  py-3 text-base  font-medium md:font-bold rounded-md mb-4 tracking-wider mt-5"
            >
              <span onClick={() => toggleModal("makePayment")}>
                make payment
              </span>
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
