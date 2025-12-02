// Quiz routes for handling quiz data and vote submissions
// Implements GET (fetch quiz), POST (submit vote), PUT (change vote)

import express from 'express';
import Quiz from '../models/Quiz.js';

const router = express.Router();

/**
 * GET /api/quizzes/:quizId
 * Fetch a specific quiz by its quizId, including all vote data
 */
router.get('/:quizId', async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const quiz = await Quiz.findOne({ quizId });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    res.json(quiz);
  } catch (error) {
    console.error('Error fetching quiz:', error);
    res.status(500).json({ message: 'Server error fetching quiz' });
  }
});

/**
 * POST /api/quizzes/:quizId/vote
 * Submit a new vote for a quiz
 * Body: { option: number, username: string }
 */
router.post('/:quizId/vote', async (req, res) => {
  try {
    const { option, username } = req.body;

    // Validation
    if (option === undefined || !username) {
      return res.status(400).json({ message: 'Option and username are required' });
    }

    const quizId = req.params.quizId;
    const quiz = await Quiz.findOne({ quizId });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    // Check if user already voted (prevents duplicate votes)
    const existingVote = quiz.votes.find(vote => vote.username === username);
    if (existingVote) {
      return res.status(400).json({ message: 'User already voted. Use PUT to change vote.' });
    }

    // Add the new vote
    quiz.votes.push({
      option,
      username,
      timestamp: new Date()
    });

    await quiz.save();
    res.json(quiz);
  } catch (error) {
    console.error('Error submitting vote:', error);
    res.status(500).json({ message: 'Server error submitting vote' });
  }
});

/**
 * PUT /api/quizzes/:quizId/vote
 * Change an existing vote
 * Body: { newOption: number, username: string }
 */
router.put('/:quizId/vote', async (req, res) => {
  try {
    const { newOption, username } = req.body;

    // Validation
    if (newOption === undefined || !username) {
      return res.status(400).json({ message: 'New option and username are required' });
    }

    const quizId = req.params.quizId;
    const quiz = await Quiz.findOne({ quizId });

    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    // Find the existing vote
    const voteIndex = quiz.votes.findIndex(vote => vote.username === username);

    if (voteIndex === -1) {
      return res.status(404).json({ message: 'No existing vote found for this user' });
    }

    // Update the vote
    quiz.votes[voteIndex].option = newOption;
    quiz.votes[voteIndex].timestamp = new Date();

    await quiz.save();
    res.json(quiz);
  } catch (error) {
    console.error('Error changing vote:', error);
    res.status(500).json({ message: 'Server error changing vote' });
  }
});

export default router;
