import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { assets } from '../assets/assets';
import Moment from 'moment';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Blog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();

  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', { blogId: id });
      if (data.success) {
        setComments(data.comments);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/blog/add-comment', { blog: id, name, content });
      if (data.success) {
        toast.success(data.message);
        setName('');
        setContent('');
        fetchComments(); // Refresh comments after adding one
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, [id]);

  if (!data) return <Loader />;

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      <Navbar />

      {/* Blog Header */}
      <header className="text-center mt-20 text-gray-700 px-4 max-w-4xl mx-auto">
        <p className="text-primary font-medium mb-2">
          Published on {Moment(data.publishedOn).format('MMMM Do YYYY')}
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-3">{data.title}</h1>
        <h2 className="text-lg sm:text-xl font-light text-gray-600 mb-5 max-w-xl mx-auto">{data.subTitle}</h2>
      </header>

      {/* Blog Content */}
      <section className="mx-5 max-w-5xl md:mx-auto mb-16 mt-8 px-4">
        <img
          src={data.image}
          alt={data.title}
          className="rounded-3xl mb-8 mx-auto max-h-96 object-cover shadow-lg"
        />
        <article
          className="rich-text max-w-3xl mx-auto text-gray-800 leading-relaxed prose prose-indigo"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </section>

      {/* Comments Section */}
      <section className="max-w-3xl mx-auto mb-16 px-4">
        <h3 className="font-semibold text-xl mb-6 border-b border-gray-200 pb-2">
          Comments ({comments.length})
        </h3>

        <div className="flex flex-col gap-6">
          {comments.length === 0 && (
            <p className="text-gray-400 text-center">No comments yet. Be the first to comment!</p>
          )}

          {comments.map((comment, index) => (
            <div
              key={index}
              className="relative bg-primary/5 border border-primary/20 rounded-lg p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <img src={assets.user_icon} alt="User icon" className="w-7 h-7 rounded-full" />
                <p className="font-semibold text-gray-700">{comment.name}</p>
              </div>
              <p className="text-gray-700 ml-10 text-sm">{comment.content}</p>
              <time className="absolute right-5 bottom-4 text-xs text-gray-400 select-none">
                {Moment(comment.createdAt).fromNow()}
              </time>
            </div>
          ))}
        </div>
      </section>

      {/* Add Comment Form */}
      <section className="max-w-3xl mx-auto mb-24 px-4">
        <h3 className="font-semibold text-xl mb-6 border-b border-gray-200 pb-2">
          Add your comment
        </h3>
        <form onSubmit={addComment} className="flex flex-col gap-5 max-w-lg">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            placeholder="Comment"
            className="p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-primary h-40 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Social Share */}
      <section className="max-w-3xl mx-auto mb-24 px-4">
        <h3 className="font-semibold text-xl mb-6 border-b border-gray-200 pb-2">
          Share this article on social media
        </h3>
        <div className="flex gap-6">
          {[assets.facebook_icon, assets.twitter_icon, assets.googleplus_icon].map((icon, idx) => (
            <button
              key={idx}
              aria-label={`Share on social media ${idx + 1}`}
              className="transition transform hover:scale-110"
            >
              <img src={icon} alt="Social icon" width={48} height={48} />
            </button>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
