import React from 'react';
import { assets } from '../../assets/assets';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext();

  const logout = () => {
    // Remove token from localStorage
    localStorage.removeItem('token');
    
    // Remove Authorization header from axios defaults
    delete axios.defaults.headers.common['Authorization'];
    
    // Clear token state in context
    setToken(null);
    
    // Navigate user back to home or login page
    navigate('/');
  };

  return (
    <>
      {/* Header with logo and logout button */}
      <div className="flex items-center justify-between py-2 h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.mylogo}
          alt="Logo"
          className="w-32 sm:w-40 cursor-pointer"
          onClick={() => navigate('/')}
        />
        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
          aria-label="Logout"
        >
          Logout
        </button>
      </div>

      {/* Main content: Sidebar + Outlet for nested routes */}
      <div className="flex h-[calc(100vh-70px)]">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
