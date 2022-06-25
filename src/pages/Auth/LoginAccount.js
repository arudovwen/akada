import * as React from "react";
import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { loginUser, getUser } from "../../services/authservices";
import { useAuth } from "../../hooks/useAuth";
const LoginAccount = function () {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = React.useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().email().label("Email").required(),
      password: Yup.mixed().label("Password").required(),
    }),
    onSubmit: function (values) {
      setIsLoading(true);
      loginUser(values)
        .then((res) => {
          if (res.status === 200) {
            const config = {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + res.data.token,
              },
            };
            getUser(config)
              .then((response) => {
                toast.success("Login successful", {
                  position: "top-right",
                });
                let user = {
                  token: res.data.token,
                  name: response.data.data.name,
                  id: response.data.data.id,
                  username: response.data.data.username,
                  account_type: response.data.data.account_type,
                };
                login(user);
              })
              .catch(() => {
                setIsLoading(false);
              });
          }
        })
        .catch((err) => {
          toast.error(err.response.data.message, {
            position: "top-right",
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

      <div className="capitalize mb-1 text-text-color text-2xl font-bold mb-5">
        Log in your account
      </div>

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

        <div className=" mb-5">
          <label htmlFor="" className="text-sm block mb-2">
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

        <button
          disabled={isLoading}
          type="submit"
          className={`uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold
           rounded-md mb-4 tracking-wider mt-5 ${
             isLoading ? "opacity-70" : ""
           }`}
        >
          Login in
        </button>
        <p className="text-center text-sm text-gray-500 mb-2">
          Forgot your password?{" "}
          <Link to="/forgot-password" className="text-[#9bab76]">
            Reset here
          </Link>
        </p>

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

export default LoginAccount;
