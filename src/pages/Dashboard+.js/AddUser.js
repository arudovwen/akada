import Dashboard from "../Dashboard/Home";
import CustomModal from "../../components/Modal";
import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";

const AddUser = function () {
  return (
    <section>
      <Dashboard />
      <div className="bg-white w-[28rem] pt-8 py-12 px-10 rounded-[30px] right-24 mt-10 absolute scale-in-center">
        <div className="mt-10 mx-auto">
          <Link to="/">
            {" "}
            <img src={akadaLogo} alt="akada-logo" className="mx-auto mb-10" />
          </Link>
        </div>

        <div className="capitalize mb-1 text-text-color text-2xl font-bold mb-5">
          Add User
        </div>

        <form
          action="
        "
        >
          <div className=" mb-5">
            <label htmlFor="" className="text-sm">
              Enter Name
            </label>
            <input
              type="text"
              className="block border-b-2 w-full h-10 text-xl font-medium"
              placeholder="Enter name"
            />
          </div>

          <div className=" mb-5">
            <label htmlFor="" className="text-sm">
              Enter work email
            </label>
            <input
              type="text"
              className="block border-b-2 w-full h-10 text-xl font-medium"
              placeholder="Enter work email"
            />
          </div>

          <div className=" mb-5">
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
    </section>
  );
};

export default AddUser;
