import axios from "axios"

export default function queryHome(data) {
  return axios.post("/api/v1/login", data)
}
