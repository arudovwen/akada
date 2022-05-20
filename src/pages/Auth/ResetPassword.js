//import akadabg from '../images/background-image.jpg';
import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

const ResetPassword = function () {
  return (
    <div className="bg-white w-[28rem] pt-8 py-12 px-10 rounded-[30px] right-24 mt-10 absolute scale-in-center">
      <div className="mt-10 mx-auto">
        <Link to="/">
          {" "}
          <img src={akadaLogo} alt="akada-logo" className="mx-auto mb-10" />
        </Link>
      </div>

      <div className="capitalize mb-1 text-text-color text-2xl font-bold mb-5">
        Reset your password
      </div>

      <form
        action="
        "
      >
        <div className=" mb-5">
          <label htmlFor="" className="text-sm ">
            Enter your new password
          </label>
          <input
            type="text"
            className="block border-b-2 w-full  h-10 text-xl font-medium"
            placeholder="Password"
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="" className="text-sm ">
            Confirm your password
          </label>
          <input
            type="text"
            className="block border-b-2 w-full  h-10 text-xl font-medium"
            placeholder="Password"
          />
        </div>

        <button className="uppercase bg-text-color w-full text-white py-3 text-lg font-bold rounded-md mb-4 tracking-wider mt-5">
          <Link to="/verify-account">Reset password</Link>
        </button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#9bab76]">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
