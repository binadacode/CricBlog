// src/api.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cricblog-backend.onrender.com/api', // e.g. https://cricblog-backend.onrender.com/api
});

export default axiosInstance;
