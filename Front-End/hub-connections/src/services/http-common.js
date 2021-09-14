import axios from "axios";

const API_URL = "localhost:8090";

export default axios.create({
  baseURL: API_URL,
  headers: { "Content-type": "application/json" },
});
