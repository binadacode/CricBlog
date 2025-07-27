import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import BlogTableItem from '../../components/admin/BlogTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard');
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const cards = [
    {
      icon: assets.dashboard_icon_1,
      label: 'Blogs',
      value: dashboardData.blogs,
    },
    {
      icon: assets.dashboard_icon_2,
      label: 'Comments',
      value: dashboardData.comments,
    },
    {
      icon: assets.dashboard_icon_3,
      label: 'Drafts',
      value: dashboardData.drafts,
    },
  ];

  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50 min-h-screen'>

      {/* Stat Cards */}
      <div className='flex flex-wrap gap-5 mb-8'>
        {cards.map((card, i) => (
          <div
            key={i}
            className='flex items-center gap-4 bg-gradient-to-r from-blue-100 to-white p-5 md:min-w-[180px] rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-200'
          >
            <img src={card.icon} alt={card.label} className='w-10 h-10' />
            <div>
              <p className='text-2xl font-bold text-gray-700'>{card.value}</p>
              <p className='text-gray-500 text-sm'>{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Latest Blogs Header */}
      <div className='flex items-center gap-3 mb-4 text-lg font-semibold text-gray-700'>
        <img src={assets.dashboard_icon_4} alt="Latest Blogs" className='w-6 h-6' />
        <p>Latest Blogs</p>
      </div>

      {/* Blog Table */}
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
            {dashboardData.recentBlogs.length > 0 ? (
              dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
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

export default Dashboard;
