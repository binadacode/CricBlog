// src/api.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '', // e.g. https://cricblog-backend.onrender.com/api
});

export default axiosInstance;
