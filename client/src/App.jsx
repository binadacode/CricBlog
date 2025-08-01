import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Layout from './pages/admin/Layout.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import Listblog from './pages/admin/ListBlog.jsx';
import Comments from './pages/admin/Comments.jsx';
import AddBlog from './pages/admin/AddBlog.jsx';
import Login from './components/admin/Login.jsx';
import 'quill/dist/quill.snow.css';
import { Toaster } from 'react-hot-toast';
import { useAppContext } from './context/AppContext';

const App = () => {
  const { token } = useAppContext();

  return (
    <div>
      <Toaster />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />

        {/* Protected Admin Routes */}
        <Route path="/admin" element={token ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="listblog" element={<Listblog />} />
          <Route path="comments" element={<Comments />} />
          <Route path="addblog" element={<AddBlog />} /> {/* Changed to lowercase path */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
