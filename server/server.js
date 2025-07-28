import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({ comment, index, fetchComments }) => {
  const { axios } = useAppContext();

  const handleApprove = async () => {
    try {
      const { data } = await axios.post(`/admin/approve-comment/${comment._id}`);
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

  const handleDelete = async () => {
    try {
      const { data } = await axios.post(`/admin/delete-comment/${comment._id}`);
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

  const blogTitle = comment.blog?.title || 'Blog deleted';
  const commentText = comment.text || 'No comment';
  const commentDate = comment.createdAt ? formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true }) : 'Unknown time';

  return (
    <tr className="border-b hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">
        <p className="font-semibold text-gray-800">{blogTitle}</p>
        <p className="text-sm text-gray-600 mt-1">{commentText}</p>
      </td>
      <td className="px-6 py-4 max-sm:hidden text-sm text-gray-500">
        {commentDate}
      </td>
      <td className="px-6 py-4 flex gap-2">
        {!comment.isApproved && (
          <button
            onClick={handleApprove}
            className="text-xs px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Approve
          </button>
        )}
        <button
          onClick={handleDelete}
          className="text-xs px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default CommentTableItem;
