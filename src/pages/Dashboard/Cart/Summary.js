import MakePayment from "./MakePayment";
import * as React from "react";
import { XIcon } from "@heroicons/react/outline";
import CustomModal from "../../../components/Modal";
import { currency } from "../../../hooks/useCurrency";

const Summary = function ({
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
  }

  return (
    <section>
      <div className="bg-[#F9FAFB] pt-4 pb-2 capitalize text-dashboardgray rounded-lg cart-summary">
        <h3 className="font-semibold text-lg mb-5 px-3 border-b">summary</h3>
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className="border-b">Subtotal</td>
              <td className="font-semibold text-sm border-b">
                {currency(subtotal)}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border-b">25% Platform fees</td>
              <td className="font-semibold text-sm border-b">
                {currency(fees)}
              </td>
            </tr>
            <tr className="border-b">
              <td className="border-b"> Commission </td>
              <td className="font-semibold text-sm border-b">
                {currency(commission)}
              </td>
            </tr>
            <tr className="">
              <td className="border-b">Total</td>
              <td className="text-sm font-semibold border-b">
                {" "}
                {currency(total)}
              </td>
            </tr>
          </tbody>
        </table>

        <div className="px-3">
          <button
            type="button"
            className="capitalize lg:uppercase bg-text-color w-full text-white  py-3 text-base font-light rounded-md mb-4 tracking-wider mt-5"
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
          {isShowing === "checkout" && (
            <MakePayment
              extraInfo={extraInfo}
              total={total}
              subtotal={subtotal}
              commission={commission}
              fees={fees}
              clearcart={clearcart}
            />
          )}
        </div>
      </CustomModal>
    </section>
  );
};

export default Summary;
