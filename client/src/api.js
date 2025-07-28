import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cric-blog-x3m5.vercel.app/api', // Use the new API URL
});

// Add a request interceptor to include token in headers
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // or wherever you store your token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
