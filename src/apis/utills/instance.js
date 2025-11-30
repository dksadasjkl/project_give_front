import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL + "/api/give",
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("AccessToken");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

export default instance;
