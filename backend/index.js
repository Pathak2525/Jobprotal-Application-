
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import dns from "node:dns";

import connectDB from "./utils/db.js";

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

// ✅ CORS Options
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://jobprotal-application-frontend.onrender.com",
  ],
  credentials: true,
};

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Health Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Job Portal Backend Running 🚀",
  });
});

// Start Server
app.listen(PORT, async () => {
  await connectDB();
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
