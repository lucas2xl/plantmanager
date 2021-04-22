import axios from 'axios';

const api = axios.create({
  baseURL: `http://${process.env.BASE_URL}:8080`
})

export default api;
