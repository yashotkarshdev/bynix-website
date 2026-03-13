import axios from "axios";

const api = axios.create({
  baseURL:
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api"
      : "https://5302v7h3-5000.inc1.devtunnels.ms/api",
});

export default api;