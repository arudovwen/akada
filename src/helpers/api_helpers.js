import axios from "axios";
//pass new generated access token here
//const token = localStorage.getItem('user-token')

//apply base url for axios

const API_URL = "http://46.101.58.181/api/";

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.defaults.withCredentials = false;

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
