import React from 'react';
import { assets } from '../../assets/assets'; 
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id, name, content, isApproved } = comment;
  const BlogDate = createdAt ? new Date(createdAt) : null;

  const { axios } = useAppContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.post('/admin/approve-comment', { Id: _id });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const deleteComment = async () => {
    try {
      const confirmDelete = window.confirm('Are you sure you want to delete this comment?');
      if (!confirmDelete) return;

      const { data } = await axios.post('/admin/delete-comment', { Id: _id });
      if (data.success) {
        toast.success(data.message);
        fetchComments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <tr className="border-b border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {blog ? blog.title : 'N/A'}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b> : {name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {content}
      </td>
      <td className="px-6 py-4 max-sm:hidden">
        {BlogDate ? BlogDate.toLocaleDateString() : 'N/A'}
      </td>
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              alt="Approve Comment"
              className="w-5 cursor-pointer hover:scale-110 transition-all"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}
          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            alt="Delete Comment"
            className="w-5 cursor-pointer hover:scale-110 transition-all"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;
