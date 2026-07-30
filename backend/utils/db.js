

import mongoose from "mongoose";
import dns from "node:dns";

// Force Google DNS
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected");
    console.log("Host:", conn.connection.host);
  } catch (error) {
    console.error("❌ MongoDB Error");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;