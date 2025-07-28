import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';
import { parse } from 'marked';
import { useAppContext } from '../../context/AppContext';

const AddBlog = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const { axios } = useAppContext(); // ✅ Use axios from context

  const generateContent = async () => {
    if (!title) return toast.error('Please enter a title');
    try {
      setLoading(true);
      const { data } = await axios.post('/blog/generate', { prompt: title });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsAdding(true);

      const blog = {
        title,
        subTitle: subtitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog));
      if (image) formData.append('image', image);

      const { data } = await axios.post('/blog/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (data.success) {
        toast.success(data.message);
        setImage(null);
        setTitle('');
        setSubtitle('');
        quillRef.current.root.innerHTML = '';
        setCategory('Startup');
        setIsPublished(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
      });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-blue-50/50 text-gray-700 min-h-screen overflow-y-auto p-4 md:p-10"
    >
      <div className="bg-white w-full max-w-3xl mx-auto p-6 md:p-10 rounded-xl shadow-lg">
        {/* Thumbnail */}
        <div className="mb-6">
          <label htmlFor="image" className="block text-sm font-medium mb-2">
            Upload Thumbnail
          </label>
          <div className="flex items-center gap-4">
            <label htmlFor="image" className="cursor-pointer">
              <img
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                alt="Thumbnail Preview"
                className="h-20 w-auto rounded-md border border-gray-200 object-cover shadow"
              />
            </label>
            <input
              type="file"
              id="image"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
              accept="image/*"
            />
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Blog Title</label>
          <input
            type="text"
            placeholder="Enter title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Subtitle */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Blog Subtitle</label>
          <input
            type="text"
            placeholder="Enter subtitle"
            required
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description / Editor */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium mb-1">Blog Description</label>
          <div
            className="h-72 border border-gray-300 rounded overflow-hidden"
            ref={editorRef}
          ></div>

          {/* Loading Overlay */}
          {loading && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/70 flex items-center justify-center rounded">
              <div className="w-6 h-6 border-2 border-t-blue-600 border-gray-300 rounded-full animate-spin"></div>
            </div>
          )}

          {/* Generate Button */}
          <button
            disabled={loading}
            type="button"
            onClick={generateContent}
            className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs px-4 py-1.5 rounded hover:bg-blue-700 transition"
          >
            Generate with AI
          </button>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Blog Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select category</option>
            {blogCategories.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Publish Toggle */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="scale-125 cursor-pointer"
          />
          <label className="text-sm">Publish Now</label>
        </div>

        {/* Submit Button */}
        <button
          disabled={isAdding}
          type="submit"
          className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
        >
          {isAdding ? 'Adding...' : 'Add Blog'}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
