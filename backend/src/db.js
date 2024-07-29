import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://juanmateobuccolini:O7HR7r4kNdwUOv6A@cluster0.hqok0d0.mongodb.net/"
    );
    console.log('Data Base connected')
  } catch (error) {
    console.log(error);
  }
};
