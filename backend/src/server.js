// Main server file for IdeaCon Sabermetrics App
// Sets up Express server with Socket.io for real-time features
// Using JavaScript (not TypeScript) to demonstrate JS skills

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import quizRoutes from './routes/quiz.js';
import commentRoutes from './routes/comments.js';
import setupQuizSocket from './socket/quizSocket.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Create HTTP server (needed for Socket.io)
const httpServer = createServer(app);

// Initialize Socket.io with CORS configuration
const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',  // Vite default port
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
  }
});

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());  // Parse JSON request bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// Request logging middleware (helpful for debugging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// API Routes
app.use('/api/quizzes', quizRoutes);
app.use('/api/comments', commentRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'IdeaCon Sabermetrics API',
    endpoints: {
      health: '/api/health',
      quizzes: '/api/quizzes/:quizId',
      comments: '/api/comments/:pageRoute'
    }
  });
});

// Setup Socket.io handlers for real-time quiz updates
setupQuizSocket(io);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
httpServer.listen(PORT, () => {
  console.log(`
🚀 Server running on port ${PORT}
📡 Socket.io enabled for real-time updates
🗄️  MongoDB connection established
🌐 CORS enabled for ${process.env.FRONTEND_URL || 'http://localhost:5173'}
  `);
});

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully...');
  httpServer.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
