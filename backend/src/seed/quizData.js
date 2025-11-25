// Seed data for quiz questions
// Run this file to populate the database with initial quiz data: npm run seed

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Quiz from '../models/Quiz.js';
import connectDB from '../config/db.js';

dotenv.config();

// Quiz data for all 5 detail pages
const quizzes = [
  {
    quizId: 'war-question',
    pageRoute: '/war',
    question: 'A player with 5.0 WAR is considered:',
    options: [
      'Below Average',
      'Average',
      'All-Star caliber',
      'MVP candidate'
    ],
    correctAnswer: 2, // All-Star caliber
    votes: []
  },
  {
    quizId: 'offense-question',
    pageRoute: '/offense',
    question: 'Player A: .280 AVG, .320 wOBA | Player B: .250 AVG, .380 wOBA. Who\'s the better hitter?',
    options: [
      'Player A (higher batting average)',
      'Player B (higher wOBA)',
      'They\'re equal',
      'Cannot determine'
    ],
    correctAnswer: 1, // Player B
    votes: []
  },
  {
    quizId: 'pitching-question',
    pageRoute: '/pitching',
    question: 'Which stat better predicts future pitching performance?',
    options: [
      'ERA (Earned Run Average)',
      'FIP (Fielding Independent Pitching)',
      'Wins',
      'Strikeouts'
    ],
    correctAnswer: 1, // FIP
    votes: []
  },
  {
    quizId: 'defense-question',
    pageRoute: '/defense',
    question: 'What\'s the biggest problem with using errors to evaluate defense?',
    options: [
      'Too many errors',
      'Doesn\'t measure range',
      'Errors are rare',
      'Too subjective'
    ],
    correctAnswer: 1, // Doesn't measure range
    votes: []
  },
  {
    quizId: 'statcast-question',
    pageRoute: '/statcast',
    question: 'What makes a "barrel" in Statcast?',
    options: [
      'Any hard-hit ball',
      'Specific exit velocity + launch angle combo',
      'Any home run',
      'Any line drive'
    ],
    correctAnswer: 1, // Specific exit velo + launch angle combo
    votes: []
  }
];

/**
 * Seeds the database with quiz data
 * Clears existing quizzes and inserts new ones
 */
const seedQuizzes = async () => {
  try {
    await connectDB();

    console.log('Clearing existing quizzes...');
    await Quiz.deleteMany({});

    console.log('Inserting quiz data...');
    await Quiz.insertMany(quizzes);

    console.log('✅ Quiz data seeded successfully!');
    console.log(`Inserted ${quizzes.length} quizzes`);

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding quiz data:', error);
    process.exit(1);
  }
};

seedQuizzes();
