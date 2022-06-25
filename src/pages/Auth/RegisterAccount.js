import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";
import * as React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { registerUser } from "../../services/authservices";

const RegisterAccount = function () {
  const [isLoading, setIsLoading] = React.useState(false);
  const initialValues = {
    account_type: "individual",
    username: "",
    email: "",
    password: "",
    corporate_name: "",
    first_name: "",
    last_name: "",
  };
  const formik = useFormik({
    initialValues,

    validationSchema: Yup.object({
      account_type: Yup.string().label("Account type").required(),
      username: Yup.string().label("Name"),
      first_name: Yup.string().label("First name"),
      last_name: Yup.string().label("Last name"),
      email: Yup.string().email().label("Email").required(),
      password: Yup.string()
        .label("Password")
        .required()
        .min(8, "Your password is too short."),
      corporate_name: Yup.string(),
    }),
    onSubmit: function (values) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };
      values.username = values.first_name
       values.password_confirmation = values.password;
      registerUser(values, config).then((res) => {
        console.log(
          "🚀 ~ file: RegisterAccount.js ~ line 34 ~ registerUser ~ res",
          res
        );
      });
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
            id="account_type"
            name="account_type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.account_type}
            className="block border-b-2 w-full h-10 text-xl font-medium placeholder:text-gray-300"
          >
            <option value="individual">Individual</option>
            <option value="cooporate">Corporate</option>
          </select>
          {formik.touched.account_type && formik.errors.account_type && (
            <span className="text-red-400">{formik.errors.account_type}</span>
          )}
        </div>
        {formik.values.account_type === "coorporate" ? (
          <div className=" mb-5">
            <label htmlFor="" className="text-sm capitalize">
              Corporate name
            </label>
            <input
              id="corporate_name"
              name="corporate_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.corporate_name}
              type="text"
              autoComplete="off"
              required
              className="block border-b-2 w-full h-10 text-xl placeholder:text-gray-300
          font-medium px-2"
              placeholder="Corporate name"
            />
          </div>
        ) : (
          <div className="flex gap-x-2">
            <div className=" mb-5">
              <label htmlFor="" className="text-sm capitalize">
                First name
              </label>
              <input
                id="first_name"
                name="first_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.first_name}
                type="text"
                required
                className="block border-b-2 w-full h-10 text-xl placeholder:text-gray-300
          font-medium px-2"
                placeholder="First name"
                autoComplete="off"
              />
            </div>
            <div className=" mb-5">
              <label htmlFor="" className="text-sm capitalize">
                Last name
              </label>
              <input
                id="last_name"
                name="last_name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.last_name}
                type="text"
                required
                className="block border-b-2 w-full h-10 text-xl placeholder:text-gray-300
          font-medium px-2"
                placeholder="Last name"
                autoComplete="off"
              />
            </div>
          </div>
        )}
        <div className=" mb-5">
          <label htmlFor="" className="text-sm">
            Enter your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`block border-b-2 w-full h-10 text-xl font-medium px-2 placeholder:text-gray-300 bg-white ${
              formik.touched.email && formik.errors.email
                ? "border-red-400"
                : "border-gray-300"
            }`}
            placeholder="Email address"
            autoComplete="off"
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
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="block border-b-2 w-full  h-10 text-xl font-medium px-2 placeholder:text-gray-300"
            placeholder="Password"
            autoComplete="off"
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-400">{formik.errors.password}</span>
          )}
        </div>

        <div className=" mb-5">
          <label htmlFor="" className="text-sm">
            Select matching metrics
          </label>
          <select
            id="metrics"
            name="metrics"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.account_type}
            className="block border-b-2 w-full h-10 text-xl font-medium placeholder:text-gray-300"
          >
            <option value="individual">Individual</option>
            <option value="cooporate">Corporate</option>
          </select>
          {formik.touched.account_type && formik.errors.account_type && (
            <span className="text-red-400">{formik.errors.account_type}</span>
          )}
        </div>
        <button
          disabled={isLoading}
          type="submit"
          className={`uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold
           rounded-md mb-4 tracking-wider mt-5 ${
             isLoading ? "opacity-70" : ""
           }`}
        >
          Create account
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
