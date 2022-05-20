import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

const RegisterAccount = function () {
  return (
    <div className="bg-white w-[30rem] pt-8 py-12 px-10 rounded-[30px] right-24 mt-10 absolute scale-in-center">
      <div className="mt-10 mx-auto">
       <Link to="/">
          {" "}
          <img src={akadaLogo} alt="akada-logo" className="mx-auto mb-10" />
        </Link>
      </div>

      <div className="capitalize mb-1 text-text-color text-2xl font-bold">
        create account
      </div>
      <p className="text-2xl font-bold  mb-5">
        Kindly fill in your details <br></br> to get started
      </p>

      <form
        action="
        "
      >
        <div className=" mb-5">
          <label htmlFor="" className="text-sm">
            Enter your business email
          </label>
          <input
            type="text"
            className="block border-b-2 w-full h-10 text-xl font-medium"
            placeholder="Email address"
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="" className="text-sm ">
            Enter your password
          </label>
          <input
            type="text"
            className="block border-b-2 w-full  h-10 text-xl font-medium"
            placeholder="Password"
          />
        </div>

        <div className=" mb-5 relative">
          <label htmlFor="" className="text-sm ">
            Select matching metrics
          </label>
          <div className="relative">
            <input
              type="text"
              className="block border-b-2 w-full  h-10 text-xl font-medium"
              placeholder="Matching metrics"
            />
            <div className="right-0 text-2xl bottom-[.5rem] absolute">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <button className="uppercase bg-text-color w-full text-white py-3 text-lg font-bold rounded-md mb-4 tracking-wider mt-5">
          <Link to="/verify-account">Create account</Link>
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-[#9bab76]" >
           Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterAccount;
