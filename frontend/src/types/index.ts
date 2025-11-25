// TypeScript type definitions for the application
// Defines interfaces for Quiz, Comment, and Vote data structures

/**
 * Represents a single vote on a quiz
 */
export interface Vote {
  option: number;       // Index of the option voted for
  username: string;     // Name of the user who voted
  timestamp: Date;      // When the vote was cast
}

/**
 * Represents a quiz question with all its data
 */
export interface Quiz {
  _id?: string;         // MongoDB ID (optional, set by database)
  quizId: string;       // Unique identifier for the quiz
  pageRoute: string;    // Which page the quiz appears on
  question: string;     // The quiz question text
  options: string[];    // Array of answer options
  correctAnswer: number; // Index of correct answer
  votes: Vote[];        // Array of all votes cast
  createdAt?: Date;     // When quiz was created (optional)
  updatedAt?: Date;     // When quiz was last updated (optional)
}

/**
 * Represents a comment on a page
 */
export interface Comment {
  _id?: string;         // MongoDB ID (optional)
  pageRoute: string;    // Which page the comment is on
  username: string;     // Who posted the comment
  text: string;         // Comment content
  timestamp: Date;      // When comment was posted
  createdAt?: Date;     // Database timestamp (optional)
  updatedAt?: Date;     // Database timestamp (optional)
}

/**
 * Vote counts aggregated by option
 * Used for displaying quiz results
 */
export interface VoteCount {
  option: number;       // Option index
  count: number;        // Number of votes for this option
  usernames: string[];  // List of usernames who voted for this option
}

/**
 * Props for Quiz component
 */
export interface QuizProps {
  quizId: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

/**
 * Props for Comments component
 */
export interface CommentsProps {
  pageRoute: string;
}

/**
 * API response types
 */
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}
