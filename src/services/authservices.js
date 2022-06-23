import urls from "../helpers/url_helpers";
import { post } from "../helpers/api_helpers";

//Authentication
export async function loginUser(user, config = {}) {
  return await post(urls.LOGIN_USER, user, config);
}
export async function logOut() {
  localStorage.removeItem("user");
  window.location.href = "/";
}
export async function registerUser(user, config = {}) {
  return await post(urls.REGISTER_USER, user, config);
}

export async function forgotPassword(user, config = {}) {
  return await post(urls.FORGOT_PASSWORD, user, config);
}
export async function resetPassword(user, config = {}) {
  return await post(urls.RESET_PASSWORD, user, config);
}

export async function verifySignupOtp(user, config = {}) {
  return await post(urls.SIGNUP_VERIFY_OTP, user, config);
}
export async function accountverify(user, config = {}) {
  return await post(urls.VERIFY_OTP, user, config);
}

export async function sendsignupOtp(user, config = {}) {
  return await post(urls.SIGNUP_SEND_OTP, user, config);
}
