import * as React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import akadaLogo from "../../images/akada-logo.png";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { resetPassword, changePassword } from "../../services/authservices";
import OtpInput from "react-otp-input";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
const ResetPassword = function () {
  const [isVisible, setIsvisible] = React.useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [phase, setPhase] = React.useState(1);
  const [otp, setOtp] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const initialValues = {
    code: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password is required")
        .min(8, "Your password is too short."),
      password_confirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: function (values) {
      setIsLoading(true);
      values.email = searchParams.get("email");
      values.code = otp;
      changePassword(values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => {
          setErrors(err.response.data.data);
          setIsLoading(false);
        });
    },
  });
  function handleCode(val) {
    setOtp(val);
  }

  function sendCode(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };
    resetPassword({ code: otp, email: searchParams.get("email") }, config)
      .then(() => {
        setPhase(2);
        toast.success("Reset verified!", {
          position: "top-right",
        });
      })
      .catch((err) => {
        setErrors(err.response.data.data);
        setPhase(2);
      });
  }
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

      {phase === 2 ? (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <div className=" mb-5">
              <label htmlFor="" className="text-sm block mb-2">
                Enter your new password
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
                  autoComplete="off"
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
            <div className=" mb-5">
              <label htmlFor="" className="text-sm block mb-2">
                Confirm your new password
              </label>
              <div className="flex items-center relative">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type={isVisible ? "text" : "password"}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password_confirmation}
                  className="block border-b-2 w-full  h-10 text-xl font-medium px-2 placeholder:text-gray-300"
                  placeholder="Password"
                  autoComplete="off"
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

              {formik.touched.password_confirmation &&
                formik.errors.password_confirmation && (
                  <span className="text-red-400">
                    {formik.errors.password_confirmation}
                  </span>
                )}
            </div>
            {errors.length > 0 && (
              <div className="pb-4 pl-4">
                <ul>
                  {errors.map((error, index) => (
                    <li
                      className="text-red-500 list-disc marker:text-red-500"
                      key={index}
                    >
                      {error.password && <div>{error.password}</div>}
                      {error.password_confirmation && (
                        <div>{error.password_confirmation}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
      ) : (
        <div>
          <p className=" text-base lg:text-2xl font-bold mb-10">
            Kindly fill the code sent to your{" "}
            <br className="hidden lg:block"></br> mail below
          </p>

          <form onSubmit={sendCode}>
            <div className=" mb-16">
              <label htmlFor="" className="text-sm mb-5 block">
                Verification code
              </label>
              <OtpInput
                value={otp}
                onChange={handleCode}
                numInputs={6}
                name="code"
                id="code"
                inputStyle="!text-black border-b border-gray-600 !w-10 !h-12 !p-1"
                containerStyle="!mx-auto justify-center gap-x-4"
              />
            </div>
            {errors.length > 0 && (
              <div className="pb-4 pl-4">
                <ul>
                  {errors.map((error, index) => (
                    <li
                      className="text-red-500 list-disc marker:text-red-500"
                      key={index}
                    >
                      {error.code && <div>{error.code}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className={`uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold
           rounded-md tracking-wider mb-4 mt-5 ${
             isLoading ? "opacity-70" : ""
           }`}
              type="submit"
            >
              verify
            </button>

            <p
              className="text-center text-sm mt-3 text-[#9bab76] hover:underline cursor-pointer"
              onClick={() => sendCode()}
            >
              Resend code
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
