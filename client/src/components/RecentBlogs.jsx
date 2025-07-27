// RecentBlogs.jsx
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const RecentBlogs = () => {
  const { axios } = useAppContext();
  const [recentBlogs, setRecentBlogs] = useState([]);

  useEffect(() => {
    const fetchRecentBlogs = async () => {
      try {
        const { data } = await axios.get('/api/blog/recent'); // Ensure your backend has this endpoint
        if (data.success) setRecentBlogs(data.blogs);
      } catch (error) {
        console.error('Failed to fetch recent blogs:', error);
      }
    };
    fetchRecentBlogs();
  }, [axios]);

  if (recentBlogs.length === 0) return <p className="text-gray-500">No recent blogs found.</p>;

  return (
    <div className="max-w-md bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Recent Blog Posts</h3>
      <ul className="space-y-3">
        {recentBlogs.map((blog) => (
          <li key={blog._id}>
            <Link
              to={`/blog/${blog._id}`}
              className="text-primary hover:underline"
              title={blog.title}
            >
              {blog.title.length > 50 ? blog.title.slice(0, 50) + '...' : blog.title}
            </Link>
            <p className="text-xs text-gray-500">
              {new Date(blog.publishedOn).toLocaleDateString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBlogs;
