import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";
import CustomModal from "../../components/Modal";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const VerifyAccount = function () {
  let [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="bg-white w-[28rem] h-[38rem] px-10 rounded-[30px] right-24 absolute scale-in-center">
      <div className="mt-10 mx-auto">
       <Link to="/">
          {" "}
          <img src={akadaLogo} alt="akada-logo" className="mx-auto mb-10" />
        </Link>
      </div>

      <div className="capitalize mb-1 text-text-color text-2xl font-bold">
        Verify account
      </div>
      <p className="text-2xl font-bold mb-10">
        Kindly fill the code sent to your <br></br> mail below
      </p>

      <form
        action="
        "
      >
        <div className=" mb-28">
          <label htmlFor="" className="text-sm">
            Verification code
          </label>
          <div className="flex justify-between">
            <input
              type="text"
              className="block border-b-2 w-10  h-10 text-xl font-medium"
              placeholder=""
            />

            <input
              type="text"
              className="block border-b-2 w-10  h-10 text-xl font-medium"
              placeholder=""
            />
            <input
              type="text"
              className="block border-b-2  w-10 h-10 text-xl font-medium"
              placeholder=""
            />
            <input
              type="text"
              className="block border-b-2 w-10  h-10 text-xl font-medium"
              placeholder=""
            />
            <input
              type="text"
              className="block border-b-2  w-10  h-10 text-xl font-medium"
              placeholder=""
            />
            <input
              type="text"
              className="block border-b-2  w-10  h-10 text-xl font-medium"
              placeholder=""
            />
          </div>
        </div>
        <button onClick={()=>toggleModal()} className="uppercase bg-text-color w-full text-white py-3 text-lg font-bold rounded-md mb-4 tracking-wider" type="button">
          {/* <Link to="/createdAccount"> */}
          create account
          {/* </Link> */}
        </button>
      </form>
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="bg-white translate-x-2/4 w-[331px]  border rounded-xl pt-4 absolute top-[200px] right-1/2 text-center">
          <div className="text-white text-[52px] bg-text-color w-20 h-20 rounded-full text-center top-[-3rem] mx-auto absolute inset-x-0 flex items-center justify-center">
            <IoMdCheckmark />
          </div>

          <div className="px-16">
            <h3 className="text-center text-text-color font-semibold capitalize mb-1 mt-6 text-lg">
              success!
            </h3>
            <p className="text-[#8D8D8D] text-sm text-center text-ligh mb-4">
              {" "}
              Yay! account has been created successfully
            </p>
          </div>

          <div className="text-center bg-[#E4E5E3] text-sm  flex items-center justify-center w-full py-4 mt-8  font-bold uppercase text-text-color">
            {" "}
            <a href="">go to dashboard</a>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default VerifyAccount;
