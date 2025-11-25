// Quiz model for storing quiz questions and vote results
// Each quiz has a question, multiple options, and tracks all votes with usernames

import mongoose from 'mongoose';

// Define the schema for individual votes
const voteSchema = new mongoose.Schema({
  option: {
    type: Number,  // Index of the option they voted for (0, 1, 2, etc.)
    required: true
  },
  username: {
    type: String,  // Username of the person who voted
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now  // Automatically set to current time when vote is cast
  }
});

// Define the main quiz schema
const quizSchema = new mongoose.Schema({
  quizId: {
    type: String,
    required: true,
    unique: true  // Ensures each quiz has a unique identifier
  },
  pageRoute: {
    type: String,
    required: true  // Which page this quiz appears on (e.g., "/war", "/offense")
  },
  question: {
    type: String,
    required: true  // The quiz question text
  },
  options: {
    type: [String],  // Array of answer options
    required: true
  },
  correctAnswer: {
    type: Number,  // Index of the correct answer
    required: true
  },
  votes: {
    type: [voteSchema],  // Array of all votes cast for this quiz
    default: []
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt fields
});

// Create and export the Quiz model
const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
