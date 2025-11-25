// Comment routes for handling user comments on pages
// Implements GET (fetch comments for a page), POST (create new comment)

import express from 'express';
import Comment from '../models/Comment.js';

const router = express.Router();

/**
 * GET /api/comments/:pageRoute
 * Fetch all comments for a specific page
 * Returns comments sorted by timestamp (newest first)
 */
router.get('/:pageRoute', async (req, res) => {
  try {
    // pageRoute comes in as URL-encoded, e.g., "%2Fwar" for "/war"
    const pageRoute = decodeURIComponent(req.params.pageRoute);

    const comments = await Comment.find({ pageRoute })
      .sort({ timestamp: -1 })  // Sort by newest first
      .limit(100);  // Limit to 100 most recent comments

    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Server error fetching comments' });
  }
});

/**
 * POST /api/comments
 * Create a new comment
 * Body: { pageRoute: string, username: string, text: string }
 */
router.post('/', async (req, res) => {
  try {
    const { pageRoute, username, text } = req.body;

    // Validation
    if (!pageRoute || !username || !text) {
      return res.status(400).json({ message: 'Page route, username, and text are required' });
    }

    if (text.trim().length === 0) {
      return res.status(400).json({ message: 'Comment cannot be empty' });
    }

    if (text.length > 1000) {
      return res.status(400).json({ message: 'Comment too long (max 1000 characters)' });
    }

    // Create new comment
    const comment = new Comment({
      pageRoute,
      username,
      text: text.trim(),
      timestamp: new Date()
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ message: 'Server error creating comment' });
  }
});

/**
 * GET /api/comments
 * Fetch all comments across all pages (for admin/debugging purposes)
 */
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find()
      .sort({ timestamp: -1 })
      .limit(200);

    res.json(comments);
  } catch (error) {
    console.error('Error fetching all comments:', error);
    res.status(500).json({ message: 'Server error fetching comments' });
  }
});

export default router;
