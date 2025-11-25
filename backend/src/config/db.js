// Database configuration for MongoDB connection
// Using Mongoose ODM (Object Document Mapper) for easier database operations

import mongoose from 'mongoose';

/**
 * Connects to MongoDB database using connection string from environment variables
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    // MongoDB connection string should be in .env file
    // For development, we'll use a default local connection if not set
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sabermetrics-app';

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Exit process with failure code if database connection fails
    process.exit(1);
  }
};

export default connectDB;
