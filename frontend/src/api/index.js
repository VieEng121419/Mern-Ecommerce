import Axios from "axios";

const baseURL = "http://localhost:7000";
const api = Axios.create({
  baseURL,
  headers: {
    "content-type": "application/json",
  },
});

export default api;
