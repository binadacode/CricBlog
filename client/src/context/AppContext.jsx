import React, { createContext, useContext, useState, useEffect } from 'react';
import axiosInstance from '../api'; // Axios instance configured with baseURL
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState('');

  // ✅ Update token in state and localStorage
  const updateToken = (newToken) => {
    setToken(newToken);

    if (newToken) {
      localStorage.setItem('token', newToken);
      axiosInstance.defaults.headers.common['Authorization'] = newToken;
    } else {
      localStorage.removeItem('token');
      delete axiosInstance.defaults.headers.common['Authorization'];
    }
  };

  const fetchBlogs = async () => {
    try {
      const { data } = await axiosInstance.get('/blog/all');
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem('token');
    if (localToken) {
      updateToken(localToken); // Ensures axios header is set
    }
    fetchBlogs();
  }, []);

  const value = {
    axios: axiosInstance,
    navigate,
    token,
    setToken,       // ✅ included so Layout.jsx doesn't crash
    updateToken,    // ✅ preferred usage for logout/login
    blogs,
    setBlogs,
    input,
    setInput,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
