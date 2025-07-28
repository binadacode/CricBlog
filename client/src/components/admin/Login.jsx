import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { toast } from 'react-hot-toast';

const Login = () => {
  const { axios, updateToken } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/admin/login', { email, password });
      console.log('Login response:', data);
      if (data.success) {
        updateToken(data.token);
        toast.success('Login successful');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-primary">Admin</span> Login
          </h1>
          <p>Enter your credentials to access the admin panel</p>
          <form onSubmit={handleSubmit} className="mt-6 w-full text-gray-600">
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Your email id"
              className="border-b-2 border-gray-300 p-2 mb-6 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Your password"
              className="border-b-2 border-gray-300 p-2 mb-6 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/80 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
