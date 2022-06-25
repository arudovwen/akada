import * as React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";
import { resetPassword } from "../../services/authservices";

const ResetPassword = function () {
  const [isLoading, setIsLoading] = React.useState(false);
  const initialValues = {
    password: "",
    confirmpassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required").min(8, 'Your password is too short.'),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: function (values) {
    setIsLoading(true)
      resetPassword(values)
        .then((res) => {
          console.log(
            "🚀 ~ file: RegisterAccount.js ~ line 34 ~ registerUser ~ res",
            res
          );
        })
        .catch(() => {
          setIsLoading(false);
        });
    },
  });
  return (
    <div className="bg-white w-[90%] mx-auto lg:mx-0 right-0 left-0 lg:left-[unset] lg:w-[28rem] pt-8 py-12 px-6 lg:px-10 rounded-[30px] lg:right-24 mt-10 absolute scale-in-center">
      <div className="mt-10 mx-auto">
        <Link to="/">
          {" "}
          <img src={akadaLogo} alt="akada-logo" className="mx-auto mb-10" />
        </Link>
      </div>

      <div className="capitalize text-text-color text-2xl font-bold mb-5">
        Reset your password
      </div>

      <form onSubmit={formik.handleSubmit}>
        <div className=" mb-5">
          <label htmlFor="" className="text-sm block mb-2">
            Enter your new password
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
          <label htmlFor="" className="text-sm block mb-2">
            Confirm your new password
          </label>
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpassword}
            className="block border-b-2 w-full  h-10 text-xl font-medium px-2 placeholder:text-gray-300"
            placeholder="Password"
            autoComplete="off"
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword && (
            <span className="text-red-400">
              {formik.errors.confirmpassword}
            </span>
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
          Reset password
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
