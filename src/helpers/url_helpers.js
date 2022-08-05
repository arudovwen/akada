const urls = {
  //Auth urls
  LOGIN_USER: "/v1/auth/login",
  GET_USER: "/v1/user",
  REGISTER_USER: "/v1/auth/register",
  SEND_CODE: "/v1/auth/email/code",
  VERIFY_CODE: "v1/auth/email/verify",
  FORGOT_PASSWORD: "/v1/password/email",
  RESET_PASSWORD: "/v1/password/confirm-reset-token",
  CHANGE_PASSWORD: "/v1/password/change",

  //Sponsor
  GET_SPONSORED_STUDENTS: "/v1/students/sponsored",
  GET_UNSPONSORED_STUDENTS: "/v1/students",
};

export default urls;
