import axios from 'axios';

export function userLogin(data) {
  return axios.post('/api/v1/user/login', data);
}

export function userRegister(data) {
  return axios.post('/api/v1/user/register', data);
}

export function userInfo() {
  return axios.post('/api/v1/user/info');
}
