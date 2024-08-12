import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_STRING
    );
    console.log('Data Base connected')
  } catch (error) {
    console.log(error);
  }
};
