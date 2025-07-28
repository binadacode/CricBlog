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

    // Middlewares
    app.use(cors());
    app.use(express.json());

    // Test route
    app.get('/health', (req, res) => {
      res.json({ status: "ok" });
    });

    app.get('/', (req, res) => {
      res.send("API is working");
    });

    // Routers
    app.use('/api/admin', adminRouter);
    app.use('/api/blog', blogRouter);

    const PORT = process.env.PORT;
    console.log("PORT env var:", PORT);

    if (!PORT) {
      console.error("Error: PORT environment variable is not set.");
      process.exit(1);
    }

    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();
