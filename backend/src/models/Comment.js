// Comment model for storing user comments on each page
// Comments include the page they're posted on, username, text content, and timestamp

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  pageRoute: {
    type: String,
    required: true  // Which page the comment is on (e.g., "/war", "/offense")
  },
  username: {
    type: String,
    required: true  // Who posted the comment
  },
  text: {
    type: String,
    required: true,  // The comment content
    maxlength: 1000  // Limit comment length to prevent abuse
  },
  timestamp: {
    type: Date,
    default: Date.now  // Automatically set when comment is created
  }
}, {
  timestamps: true  // Adds createdAt and updatedAt fields
});

// Index for faster queries when fetching comments for a specific page
commentSchema.index({ pageRoute: 1, timestamp: -1 });

// Create and export the Comment model
const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
