import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();

async function startServer() {
  try {
    await connectDB();
    console.log("Database connected");

    // CORS configuration: allow your frontend origin
    app.use(cors({
      origin: 'https://cric-blog-henna.vercel.app', // your frontend URL here
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, // if you are sending cookies or auth headers
      preflightContinue: false, // Let cors middleware handle OPTIONS requests automatically
      optionsSuccessStatus: 204, // Some legacy browsers choke on 204
    }));

    // Middleware to parse JSON bodies
    app.use(express.json());

    // Optional: Middleware to parse URL encoded data (for form submissions)
    app.use(express.urlencoded({ extended: true }));

    // Logging middleware
    app.use((req, res, next) => {
      console.log(`Incoming ${req.method} request to ${req.url}`);
      next();
    });

    // Health check endpoint
    app.get('/health', (req, res) => {
      res.json({ status: "ok" });
    });

    // Root endpoint
    app.get('/', (req, res) => {
      res.send("API is working");
    });

    // Routers
    app.use('/api/admin', adminRouter);
    app.use('/api/blog', blogRouter);

    const PORT = process.env.PORT || 5000; // fallback port if not set
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
