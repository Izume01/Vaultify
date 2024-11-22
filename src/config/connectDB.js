import mongoose from 'mongoose';
import process from 'node:process';
import dotenv from 'dotenv';

dotenv.config();

const dburl = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(dburl);
    console.log('MongoDB connected');
  } catch (error) {
    console.log('MongoDB connection failed : ', error);
  }
};

export default connectDB;
