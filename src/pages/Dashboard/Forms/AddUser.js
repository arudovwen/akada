
import akadaLogo from "../../../images/akada-logo.png";
import { Link } from "react-router-dom";

const AddUser = function () {
  return (

      <div className="w-full">

        <div className="capitalize text-text-color text-2xl font-bold mb-16">
          Add User
        </div>

        <form
          action=""
        >
          <div className=" mb-8">
            <label htmlFor="" className="text-sm">
              Enter Name
            </label>
            <input
              type="text"
              className="block border-b-2 w-full h-10 text-xl font-medium"
              placeholder="Enter name"
            />
          </div>

          <div className=" mb-8">
            <label htmlFor="" className="text-sm">
              Enter work email
            </label>
            <input
              type="text"
              className="block border-b-2 w-full h-10 text-xl font-medium"
              placeholder="Enter work email"
            />
          </div>

          <div className=" mb-12">
            <label htmlFor="" className="text-sm ">
              Select role
            </label>
            <select
              name="gender"
              id="gender"
              className="block border-b-2 w-full h-10 text-xl font-medium"
            >
              <option value="" disabled selected hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="Female">Female</option>
              <option value="others">Others</option>
            </select>
          </div>

          <button className="uppercase bg-text-color w-full text-white py-3 text-lg font-bold rounded-md mb-4 tracking-wider mt-5">
            <Link to="/verify-account">Add User</Link>
          </button>
        </form>
      </div>

  );
};

export default AddUser;
