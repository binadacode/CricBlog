import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import BlogTableItem from '../../components/admin/BlogTableItem';
import toast from 'react-hot-toast';
import { API_BASE } from '../../api';  // import the base URL
import axios from 'axios';  // import axios for API calls

const Listblog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${API_BASE}/admin/blogs`);
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className='flex-1 min-h-screen pt-6 md:pt-12 px-4 md:px-16 bg-blue-50/50'>
      {/* Page Heading */}
      <h1 className='text-2xl md:text-3xl font-bold text-gray-700 mb-6'>All Blogs</h1>

      {/* Table Container */}
      <div className='relative w-full overflow-x-auto shadow-md rounded-xl bg-white'>
        <table className='w-full text-sm text-gray-600'>
          <thead className='text-xs font-semibold text-gray-500 uppercase bg-gray-100'>
            <tr>
              <th scope='col' className='px-4 py-4'>#</th>
              <th scope='col' className='px-4 py-4'>Blog Title</th>
              <th scope='col' className='px-4 py-4 max-sm:hidden'>Date</th>
              <th scope='col' className='px-4 py-4 max-sm:hidden'>Status</th>
              <th scope='col' className='px-4 py-4'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))
            ) : (
              <tr>
                <td colSpan='5' className='text-center py-6 text-gray-400'>
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listblog;
