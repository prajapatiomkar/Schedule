import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();
const connectDB = async () => {
  try {
    const MONGO_URL = `${process.env.DB_URL}/${process.env.DB_NAME}`;
    const connection = await mongoose.connect(MONGO_URL);
    console.log(`db connected host = ${connection.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
