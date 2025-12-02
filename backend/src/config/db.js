// Database configuration for MongoDB connection
// Using Mongoose ODM (Object Document Mapper) for easier database operations

import mongoose from 'mongoose';

/**
 * Connects to MongoDB database using connection string from environment variables
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sabermetrics-app';

  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Avoid crashing dev server; retry after a short delay so nodemon doesn't loop
    setTimeout(() => {
      console.log('Retrying MongoDB connection...');
      connectDB();
    }, 5000);
  }
};

export default connectDB;
