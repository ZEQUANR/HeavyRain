import axios from "axios"

export function userLogin(data) {
  return axios.post("/api/v1/user/login", data)
}

export function getUserInfo(data) {
  return axios.post("/api/v1/user/info", data)
}
