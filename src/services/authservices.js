import urls from "../helpers/url_helpers";
import { post, get } from "../helpers/api_helpers";

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
export async function getUser(config = {}) {
  return await get(urls.GET_USER, config);
}

export async function forgotPassword(user, config = {}) {
  return await post(urls.FORGOT_PASSWORD, user, config);
}
export async function resetPassword(user, config = {}) {
  return await post(urls.RESET_PASSWORD, user, config);
}
export async function changePassword(user, config = {}) {
  return await post(urls.CHANGE_PASSWORD, user, config);
}

export async function accountverify(user, config = {}) {
  return await post(urls.VERIFY_CODE, user, config);
}

export async function sendcode(config = {}) {

  return await post(urls.SEND_CODE, {}, config);
}
