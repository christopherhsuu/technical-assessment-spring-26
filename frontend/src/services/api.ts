// API service for making HTTP requests to the backend
// Uses axios for cleaner async/await syntax

import axios from 'axios';
import type { Quiz, Comment } from '../types';

// Base URL for API - change this for production deployment
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

/**
 * Quiz API calls
 */
export const quizApi = {
  /**
   * Fetch a quiz by its ID
   */
  getQuiz: async (quizId: string): Promise<Quiz> => {
    const response = await api.get(`/quizzes/${quizId}`);
    return response.data;
  },

  /**
   * Submit a vote for a quiz
   */
  submitVote: async (quizId: string, option: number, username: string): Promise<Quiz> => {
    const response = await api.post(`/quizzes/${quizId}/vote`, {
      option,
      username,
    });
    return response.data;
  },

  /**
   * Change an existing vote
   */
  changeVote: async (quizId: string, newOption: number, username: string): Promise<Quiz> => {
    const response = await api.put(`/quizzes/${quizId}/vote`, {
      newOption,
      username,
    });
    return response.data;
  },
};

/**
 * Comment API calls
 */
export const commentApi = {
  /**
   * Fetch all comments for a page
   */
  getComments: async (pageRoute: string): Promise<Comment[]> => {
    // Encode the pageRoute to handle forward slashes
    const encodedRoute = encodeURIComponent(pageRoute);
    const response = await api.get(`/comments/${encodedRoute}`);
    return response.data;
  },

  /**
   * Create a new comment
   */
  createComment: async (
    pageRoute: string,
    username: string,
    text: string
  ): Promise<Comment> => {
    const response = await api.post('/comments', {
      pageRoute,
      username,
      text,
    });
    return response.data;
  },
};

/**
 * Health check
 */
export const checkHealth = async (): Promise<{ status: string }> => {
  const response = await api.get('/health');
  return response.data;
};

export default api;
