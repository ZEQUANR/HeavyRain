import axios from "axios"

export function userLogin(data) {
  return axios.post("/api/v1/login", data)
}

export function queryHome(data) {
  return axios.post("/api", data)
}
