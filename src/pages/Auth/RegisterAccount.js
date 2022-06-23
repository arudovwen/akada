import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";
import * as React from "react";
import { IoIosArrowDown } from "react-icons/io";
import * as Yup from "yup";
import { useFormik } from "formik";
import { registerUser } from "../../services/authservices";

const RegisterAccount = function () {
  const [type, setType] = React.useState("individual");
  const initialValues = {
    account_type: "individual",
    username: "",
    email: "",
    password: "",
    corporate_name: "",
  };
  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      account_type: Yup.string().label("Account type").required(),
      name: Yup.string().label("Name").required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: function (values) {
      alert(`You are registered! Name: ${values.name}. Email: ${values.email}. Profession: ${values.profession}.
        Age: ${values.age}`);
    },
  });
  return (
    <div className="bg-white w-[90%] mx-auto lg:mx-0 right-0 left-0 lg:left-[unset] lg:w-[30rem] py-4 lg:py-6 px-6 lg:px-10 rounded-[30px] lg:right-24  absolute scale-in-center">
      <div className=" mx-auto">
        <Link to="/">
          {" "}
          <img
            src={akadaLogo}
            alt="akada-logo"
            className="mx-auto mb-8 w-[150px]"
          />
        </Link>
      </div>

      <div className="capitalize mb-1 text-text-color text-2xl font-bold">
        create account
      </div>
      <p className="text-base lg:text-xl font-bold  mb-5">
        Kindly fill in your details to get started
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className=" mb-5">
          <label htmlFor="" className="text-sm">
            Select type
          </label>
          <select
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.account_type}
            className="block border-b-2 w-full h-10 text-xl font-medium text-gray-300"
          >
            <option value="individual">Individual</option>
            <option value="cooporate">Corporate</option>
          </select>
          {formik.touched.account_type && formik.errors.account_type && (
            <span className="text-red-400">{formik.errors.account_type}</span>
          )}
        </div>
        <div className=" mb-5">
          <label htmlFor="" className="text-sm capitalize">
            {type} name
          </label>
          <input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.corporate_name}
            type="text"
            className="block border-b-2 w-full h-10 text-xl
          font-medium px-2"
            placeholder="Full name"
          />
        </div>
        <div className=" mb-5">
          <label htmlFor="" className="text-sm">
            Enter your business email
          </label>
          <input
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`block border-b-2 w-full h-10 text-xl font-medium px-2 ${
              formik.touched.email && formik.errors.email
                ? "border-red-400"
                : "border-gray-300"
            }`}
            placeholder="Email address"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-400">{formik.errors.email}</span>
          )}
        </div>

        <div className=" mb-5">
          <label htmlFor="" className="text-sm ">
            Enter your password
          </label>
          <input
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="block border-b-2 w-full  h-10 text-xl font-medium px-2"
            placeholder="Password"
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-400">{formik.errors.password}</span>
          )}
        </div>

        <div className=" mb-5 relative">
          <label htmlFor="" className="text-sm ">
            Select matching metrics
          </label>
          <div className="relative">
            <input
              type="text"
              className="block border-b-2 w-full  h-10 text-xl font-medium px-2"
              placeholder="Matching metrics"
            />
            <span className="right-0 text-2xl bottom-[.5rem] absolute pointer-events-none">
              <IoIosArrowDown />
            </span>
          </div>
        </div>
        <button className="uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold rounded-md mb-4 tracking-wider mt-5">
          <Link to="/verify-account">Create account</Link>
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-[#9bab76]">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterAccount;
