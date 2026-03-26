import mongoose from "mongoose";


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {dbName: 'ai-interview',serverSelectionTimeoutMS: 5000});
        console.log("connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;