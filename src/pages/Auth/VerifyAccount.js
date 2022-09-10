import * as React from "react";
import akadaLogo from "../../images/akada-logo.png";
import { Link } from "react-router-dom";
import CustomModal from "../../components/Modal";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import * as Yup from "yup";
import { useFormik } from "formik";
import { accountverify, sendcode } from "../../services/authservices";
import OtpInput from "react-otp-input";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyAccount = function () {

  let [isOpen, setIsOpen] = useState(false);
  const [, setOtp] = useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const initialValues = {
    code: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      code: Yup.string().required(),
    }),
    onSubmit: function (values) {
      setIsLoading(true);
      let token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      };
      accountverify(values, config)
        .then(() => {
          toggleModal();
        })
        .catch((err) => {
          setIsLoading(false);
          setOtp("");
          formik.values.code = "";
          toast.error(err.response.data.message, {
            position: "bottom-center",
          });
        });
    },
  });
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function handleCode(val) {
    setOtp(val);
    formik.values.code = val;
  }

  function resendCode() {
    let token = localStorage.getItem("token");
    setOtp("");
    formik.values.code = "";
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    };
    sendcode(config).then(() => {
      toast.success("Code resent!", {
        position: "top-right",
      });
    });
  }
  return (
    <div className="bg-white w-[90%] mx-auto lg:mx-0 right-0 left-0 lg:left-[unset] lg:w-[28rem] lg:h-[36rem] px-6  py-4 lg:px-10 rounded-[30px] lg:right-24 absolute scale-in-center">
      <div className="mt-10 mx-auto">
        <Link to="/">
          {" "}
          <img src={akadaLogo} alt="akada-logo" className="mx-auto mb-10" />
        </Link>
      </div>

      <div className="capitalize mb-1 text-text-color text-2xl font-bold">
        Verify account
      </div>
      <p className=" text-base lg:text-2xl font-bold mb-10">
        Kindly fill the code sent to your <br className="hidden lg:block"></br>{" "}
        mail below
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className=" mb-16">
          <label htmlFor="" className="text-sm mb-5 block">
            Verification code
          </label>
          <OtpInput
            value={formik.values.code}
            onChange={handleCode}
            numInputs={6}
            name="code"
            id="code"
            inputStyle="!text-black border-b border-gray-600 !w-10 !h-12 !p-1"
            containerStyle="!mx-auto justify-center gap-x-4"
          />
        </div>
        <button
          className={`uppercase bg-text-color w-full text-white py-3 text-base lg:text-lg font-bold
           rounded-md tracking-wider mb-4 mt-5 ${
             isLoading ? "opacity-70" : ""
           }`}
          type="submit"
        >
          verify account
        </button>

        <p
          className="text-center text-sm mt-3 text-[#9bab76] hover:underline cursor-pointer"
          onClick={() => resendCode()}
        >
          Resend code
        </p>
      </form>
      <CustomModal isOpen={isOpen} closeModal={() => toggleModal()}>
        <div className="bg-white translate-x-2/4 w-[331px]  border rounded-xl pt-4 absolute top-[200px] right-1/2 text-center">
          <div className="text-white text-[52px] bg-text-color w-20 h-20 rounded-full text-center top-[-3rem] mx-auto absolute inset-x-0 flex items-center justify-center">
            <IoMdCheckmark />
          </div>

          <div className="px-16">
            <h3 className="text-center text-text-color font-semibold capitalize mb-1 mt-6 text-lg">
              success!
            </h3>
            <p className="text-[#8D8D8D] text-sm text-center text-ligh mb-4">
              {" "}
              Yay! account has been created successfully
            </p>
          </div>

          <div className="text-center bg-[#E4E5E3] text-sm rounded-br-xl rounded-bl-xl  flex items-center justify-center w-full py-4 mt-8  font-bold uppercase text-text-color">
            {" "}
            <Link to="/login">go to login</Link>
          </div>
        </div>
      </CustomModal>
    </div>
  );
};

export default VerifyAccount;
