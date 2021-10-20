import Axios from "axios";

const baseURL = "http://localhost:7000";
const api = Axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token =
    JSON.parse(localStorage.getItem("userInfo")) !== null
      ? JSON.parse(localStorage.getItem("userInfo")).token
      : null;
  if (token !== null) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export default api;
