import express from 'express';

import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
import { addBlog, getAllBlogs, getBlogById, deleteBlogById, togglePublish, addComment, getBlogComment, generateContent } from '../controllers/blogController.js';



const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), auth, addBlog)
blogRouter.get("/all", getAllBlogs);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/delete", auth, deleteBlogById);
blogRouter.post("/toggle-publish", auth, togglePublish);
blogRouter.post("/add-comment", addComment);
blogRouter.post("/comments", getBlogComment);

blogRouter.post("/generate", auth, generateContent);




export default blogRouter;