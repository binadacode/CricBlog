import React, { useEffect, useState } from 'react';
import CommentTableItem from '../../components/admin/CommentTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('Not Approved');
  const [loading, setLoading] = useState(false);

  const { axios } = useAppContext();

  const fetchComments = async () => {
    setLoading(true);
    try {
      // Adjust the URL depending on your axios baseURL config.
      const { data } = await axios.get('/admin/comments');
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  // Filter once before rendering
  const filteredComments = comments.filter((comment) =>
    filter === 'Approved' ? comment.isApproved : !comment.isApproved
  );

  return (
    <div className='flex-1 min-h-screen pt-6 md:pt-12 px-5 md:px-16 bg-blue-50/50'>
      {/* Header with Title and Filters */}
      <div className='flex justify-between items-center max-w-4xl mx-auto mb-6'>
        <h1 className='text-2xl font-bold text-gray-700'>Comments</h1>

        <div className='flex gap-4'>
          {['Approved', 'Not Approved'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`rounded-full px-5 py-1.5 text-xs font-semibold transition-shadow shadow-sm border cursor-pointer
                ${
                  filter === status
                    ? 'text-blue-600 border-blue-600 bg-blue-100'
                    : 'text-gray-600 border-gray-300 hover:bg-gray-100'
                }`}
              aria-pressed={filter === status}
              aria-label={`Filter comments by ${status}`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Comments Table */}
      <div className='relative max-w-4xl mx-auto overflow-x-auto shadow-md rounded-xl bg-white'>
        <table className='w-full text-sm text-gray-600'>
          <thead className='text-xs font-semibold text-gray-500 uppercase bg-gray-100'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Blog Title &amp; Comment
              </th>
              <th scope='col' className='px-6 py-3 max-sm:hidden'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan='3' className='text-center py-6 text-gray-500'>
                  Loading comments...
                </td>
              </tr>
            ) : filteredComments.length > 0 ? (
              filteredComments.map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))
            ) : (
              <tr>
                <td colSpan='3' className='text-center py-6 text-gray-400'>
                  No comments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
