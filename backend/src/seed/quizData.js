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
    quizId: 'war',
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
    quizId: 'offense',
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
    quizId: 'pitching',
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
    quizId: 'defense',
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
    quizId: 'statcast',
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
  },
  // Additional WAR quizzes
  {
    quizId: 'war-2',
    pageRoute: '/war',
    question: 'What does the "Replacement Level" baseline in WAR represent?',
    options: [
      'An average MLB player',
      'A freely available minor league or bench player',
      'The worst player in MLB',
      'A rookie with no experience'
    ],
    correctAnswer: 1,
    votes: []
  },
  {
    quizId: 'war-3',
    pageRoute: '/war',
    question: 'Why can DRS and UZR disagree on defensive value?',
    options: [
      'They use different data sources and zone definitions',
      'One is wrong and the other is right',
      'They measure completely different things',
      'DRS only works for infielders'
    ],
    correctAnswer: 0,
    votes: []
  },
  // Additional Offense quizzes
  {
    quizId: 'offense-2',
    pageRoute: '/offense',
    question: 'Why is OPS considered mathematically imperfect?',
    options: [
      'It only measures home runs',
      'It adds two percentages with different denominators',
      'It ignores walks completely',
      'It\'s too complicated to calculate'
    ],
    correctAnswer: 1,
    votes: []
  },
  {
    quizId: 'offense-3',
    pageRoute: '/offense',
    question: 'What does a wRC+ of 130 mean?',
    options: [
      '30% worse than average',
      '130 runs created',
      '30% better than league average',
      'Average performance'
    ],
    correctAnswer: 2,
    votes: []
  },
  // Additional Defense quizzes
  {
    quizId: 'defense-2',
    pageRoute: '/defense',
    question: 'What makes OAA (Outs Above Average) revolutionary compared to DRS/UZR?',
    options: [
      'It measures more plays',
      'It uses objective Statcast data instead of human classification',
      'It only works for outfielders',
      'It\'s easier to calculate'
    ],
    correctAnswer: 1,
    votes: []
  },
  {
    quizId: 'defense-3',
    pageRoute: '/defense',
    question: 'A defender with +15 DRS is considered:',
    options: [
      'Below average',
      'Average',
      'Above average',
      'Gold Glove caliber, elite'
    ],
    correctAnswer: 3,
    votes: []
  },
  // Additional Pitching quizzes
  {
    quizId: 'pitching-2',
    pageRoute: '/pitching',
    question: 'Why does FIP ignore singles, doubles, and triples?',
    options: [
      'They don\'t matter for run prevention',
      'They\'re too hard to track',
      'They involve defense and batted ball luck outside pitcher control',
      'FIP only measures home runs'
    ],
    correctAnswer: 2,
    votes: []
  },
  {
    quizId: 'pitching-3',
    pageRoute: '/pitching',
    question: 'A pitcher with 22% K-BB% is considered:',
    options: [
      'Below average',
      'Average',
      'Above average',
      'Elite, Cy Young caliber'
    ],
    correctAnswer: 3,
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
