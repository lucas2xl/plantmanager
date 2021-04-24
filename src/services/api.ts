import axios from 'axios';

const api = axios.create({
  baseURL: `http://192.168.1.22:8080`
})

export default api;
