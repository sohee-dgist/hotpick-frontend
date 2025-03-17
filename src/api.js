import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

export default api;