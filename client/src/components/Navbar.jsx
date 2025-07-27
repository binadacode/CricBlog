import React from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { navigate, token } = useAppContext();

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/30 backdrop-blur-lg backdrop-saturate-150 border border-white/30 shadow-sm">
      <div className="flex justify-between items-center py-4 px-6 sm:px-12 xl:px-24">
        {/* Logo - keep in place */}
        <img
          onClick={() => navigate('/')}
          src={assets.mylogo}
          alt="logo"
          className="w-48 sm:w-64 cursor-pointer transition duration-300 ease-in-out hover:opacity-90"
        />

        {/* Button */}
        <button
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 rounded-full text-sm font-semibold cursor-pointer bg-primary text-white px-6 sm:px-10 py-2.5 hover:bg-primary-dark transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          {token ? 'Dashboard' : 'Login'}
          <img
            src={assets.arrow}
            alt="arrow"
            className="w-3 transition-transform duration-300 transform group-hover:translate-x-1 group-hover:scale-110"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
