import axios from "axios";
// import store from "../store";
//pass new generated access token here
//const token = localStorage.getItem('user-token')

//apply base url for axios
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://46.101.58.181/api/";
const API_URL = "http://46.101.58.181/api/";

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.defaults.withCredentials = true;

// axiosApi.defaults.headers.common[
//   "Authorization"
// ] = `Bearer ${store.getters.token}`;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  return await axiosApi.get(url, { ...config });
}

export async function post(url, data, config = {}) {
  return axiosApi.post(url, { ...data }, { ...config });
}

export async function put(url, data, config = {}) {
  return axiosApi.put(url, { ...data }, { ...config });
}

export async function del(url, config = {}) {
  return await axiosApi.delete(url, { ...config });
}
