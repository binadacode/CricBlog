// src/api.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // e.g. https://cricblog-backend.onrender.com/api
});

export default axiosInstance;
