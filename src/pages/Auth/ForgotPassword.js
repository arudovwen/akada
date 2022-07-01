import * as React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";
import { forgotPassword } from "../../services/authservices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const ForgotPassword = function () {
  const [isLoading, setIsLoading] = React.useState(false);
  const initialValues = {
    email: "",
  };
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email().label("Email").required(),
    }),
    onSubmit: function (values, { resetValues }) {
      setIsLoading(true);
      forgotPassword(values)
        .then(() => {
          navigate(`/reset-password?email=${values.email}`)
          toast.success("Email sent", {
            position: "top-right",
          });
          setIsLoading(false);
           values.email = "";

        })

        .catch((err) => {
          err.response.data.data.forEach((i) => {
            if (i.email) {
              toast.error(i.email, {
                position: "top-right",
              });
            }
          });
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

      <div className="capitalize mb-1 text-text-color text-2xl font-bold">
        Forgot your password?
      </div>
      <p className="mb-5">Don't worry, lets help you set a new one</p>

      <form onSubmit={formik.handleSubmit}>
        <div className=" mb-5">
          <label htmlFor="" className="text-sm block mb-2">
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
        <button
          disabled={isLoading}
          type="submit"
          className={`uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold
           rounded-md mb-4 tracking-wider mt-5 ${
             isLoading ? "opacity-70" : ""
           }`}
        >
          Send reset
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
