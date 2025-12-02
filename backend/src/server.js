import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import quizRoutes from './routes/quiz.js';
import commentRoutes from './routes/comments.js';
import setupQuizSocket from './socket/quizSocket.js';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 5001;

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
  }
});

connectDB();

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use('/api/quizzes', quizRoutes);
app.use('/api/comments', commentRoutes);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

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

setupQuizSocket(io);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

if (process.env.VERCEL !== '1') {
  const startServer = (portToUse) => {
    httpServer.listen(portToUse, '127.0.0.1', () => {
      const addressInfo = httpServer.address();
      const boundPort = typeof addressInfo === 'object' && addressInfo ? addressInfo.port : portToUse;
      console.log(`
🚀 Server running on port ${boundPort}
📡 Socket.io enabled for real-time updates
🗄️  MongoDB connection established
🌐 CORS enabled for ${process.env.FRONTEND_URL || 'http://localhost:5173'}
      `);
    });
  };

  httpServer.on('error', (err) => {
    if (['EADDRINUSE', 'EACCES', 'EPERM'].includes(err.code)) {
      console.warn(`Port ${PORT} unavailable (${err.code}). Retrying on a random open port...`);
      setTimeout(() => startServer(0), 300);
    } else {
      console.error('Server listen error:', err);
      process.exit(1);
    }
  });

  startServer(PORT);

  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully...');
    httpServer.close(() => {
      console.log('Server closed');
      process.exit(0);
    });
  });
}

export default app;
