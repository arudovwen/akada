//import akadabg from '../images/background-image.jpg';
import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";

const ForgotPassword = function () {
  return (
    <div className="bg-white w-[90%] mx-auto lg:mx-0 right-0 left-0 lg:left-[unset] lg:w-[28rem] pt-8 py-12 px-6 lg:px-10 rounded-[30px] lg:right-24 mt-10 absolute scale-in-center">
      <div className="mt-10 mx-auto">
        <Link to="/">
          {" "}
          <img src={akadaLogo} alt="akada-logo" className="mx-auto mb-10" />
        </Link>
      </div>

      <div className="capitalize mb-1 text-text-color text-2xl font-bold">
        Forgot your password?
      </div>
      <p className="mb-5">Don't worry, lets help you set a new one</p>

      <form
        action="
        "
      >
        <div className=" mb-5">
          <label htmlFor="" className="text-sm">
            Enter email
          </label>
          <input
            type="text"
            className="block border-b-2 w-full h-10 text-xl font-medium"
            placeholder="Email address"
          />
        </div>

        <button className="uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold rounded-md mb-4 tracking-wider mt-5">
          <Link to="/verify-account">Send reset</Link>
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

export default ForgotPassword;
