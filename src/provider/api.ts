import Axios from "axios";

const baseUrl = "http://192.168.1.2:5555";

const api = Axios.create({
  baseURL: baseUrl,
});

export default api;
