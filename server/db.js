import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to database...");
  } catch (error) {
    console.log("Error while connecting to database... ", error);
  }
};

export default connectDb;
