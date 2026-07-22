// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI);
//         console.log('mongodb connected successfully');
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default connectDB;




import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB Connected");
        console.log("Host:", conn.connection.host);
    } catch (error) {
        console.error("❌ MongoDB Error:");
        console.error(error);
    }
};

export default connectDB;