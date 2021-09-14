import axios from "axios";

// const API_URL = "localhost:8090";

export default axios.create({
  baseURL: "http://localhost:8090",
  headers: { "Content-type": "application/json" },
});
