// Socket.io handler for real-time quiz updates
// Broadcasts vote changes to all connected clients instantly

import Quiz from '../models/Quiz.js';

/**
 * Initialize Socket.io event handlers
 * @param {Server} io - Socket.io server instance
 */
const setupQuizSocket = (io) => {
  io.on('connection', (socket) => {
    console.log(`New client connected: ${socket.id}`);

    /**
     * Handle vote submission from client
     * Event: 'vote-submitted'
     * Data: { quizId, option, username }
     */
    socket.on('vote-submitted', async (data) => {
      try {
        const { quizId, option, username } = data;

        // Find the quiz and add the vote
        const quiz = await Quiz.findOne({ quizId });

        if (!quiz) {
          socket.emit('error', { message: 'Quiz not found' });
          return;
        }

        // Check if user already voted
        const existingVote = quiz.votes.find(vote => vote.username === username);
        if (existingVote) {
          socket.emit('error', { message: 'Already voted' });
          return;
        }

        // Add new vote
        quiz.votes.push({ option, username, timestamp: new Date() });
        await quiz.save();

        // Broadcast updated quiz to ALL clients (including sender)
        io.emit('quiz-updated', quiz);
      } catch (error) {
        console.error('Socket error handling vote submission:', error);
        socket.emit('error', { message: 'Server error' });
      }
    });

    /**
     * Handle vote change from client
     * Event: 'vote-changed'
     * Data: { quizId, newOption, username }
     */
    socket.on('vote-changed', async (data) => {
      try {
        const { quizId, newOption, username } = data;

        const quiz = await Quiz.findOne({ quizId });

        if (!quiz) {
          socket.emit('error', { message: 'Quiz not found' });
          return;
        }

        // Find and update the existing vote
        const voteIndex = quiz.votes.findIndex(vote => vote.username === username);

        if (voteIndex === -1) {
          socket.emit('error', { message: 'No existing vote found' });
          return;
        }

        quiz.votes[voteIndex].option = newOption;
        quiz.votes[voteIndex].timestamp = new Date();
        await quiz.save();

        // Broadcast updated quiz to ALL clients
        io.emit('quiz-updated', quiz);
      } catch (error) {
        console.error('Socket error handling vote change:', error);
        socket.emit('error', { message: 'Server error' });
      }
    });

    /**
     * Handle client disconnect
     */
    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

export default setupQuizSocket;
