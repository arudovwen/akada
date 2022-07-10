import akadaLogo from "../../images/akada-logo.png";
import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { registerUser, sendcode } from "../../services/authservices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../hooks/useAuth";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

const RegisterAccount = function () {
  const [isVisible, setIsvisible] = React.useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const initialValues = {
    account_type: "Individual",
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
      setIsLoading(true);

      values.password_confirmation = values.password;
      registerUser(values)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          const config = {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + res.data.token,
            },
          };
          if (res.status === 200) {
            sendcode(config)
              .then(() => {
                toast.info("Verify your account", {
                  position: "bottom-center",
                });
                navigate("/verify-account");
              })
              .catch(() => {
                setIsLoading(false);
              });
          }
        })
        .catch((err) => {
          err.response.data.data.forEach((i) => {
            if (i.username) {
              toast.error(i.username, {
                position: "top-right",
              });
            }
            if (i.email) {
              toast.error(i.email, {
                position: "top-right",
              });
            }
            if (i.password) {
              toast.error(i.password, {
                position: "top-right",
              });
            }
          });
          setIsLoading(false);
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
            <option value="Individual">Individual</option>
            <option value="Organization">Organization</option>
          </select>
          {formik.touched.account_type && formik.errors.account_type && (
            <span className="text-red-400">{formik.errors.account_type}</span>
          )}
        </div>
        {formik.values.account_type === "Organization" ? (
          <div className=" mb-5">
            <label htmlFor="" className="text-sm capitalize">
              Organization name
            </label>
            <input
              id="corporate_name"
              name="corporate_name"
              autoComplete="corporate_name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.corporate_name}
              type="text"
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
                autoComplete="first_name"
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
                autoComplete="last_name"
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
            autoComplete="email"
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-400">{formik.errors.email}</span>
          )}
        </div>

        <div className=" mb-5">
          <label htmlFor="username" className="text-sm capitalize">
            Username
          </label>
          <input
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            type="text"
            autoComplete="username"
            required
            className="block border-b-2 w-full h-10 text-xl placeholder:text-gray-300
          font-medium px-2"
            placeholder="Enter username"
          />
        </div>

        <div className=" mb-5">
          <label htmlFor="" className="text-sm ">
            Enter your password
          </label>
          <div className="flex items-center relative">
            <input
              id="password"
              name="password"
              type={isVisible ? "text" : "password"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className="block border-b-2 w-full  h-10 text-xl font-medium px-2 placeholder:text-gray-300"
              placeholder="Password"
              autoComplete="password"
            />
            <span
              onClick={() => {
                setIsvisible(!isVisible);
              }}
              className="absolute right-4"
            >
              {!isVisible ? (
                <VscEye className="text-lg" />
              ) : (
                <VscEyeClosed className="text-lg" />
              )}
            </span>
          </div>
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
