// Comments Component
// Displays comments for a page and allows users to post new ones
// Fetches comments on mount and after posting

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { commentApi } from '../services/api';
import { useUsername } from '../hooks/useUsername';
import type { Comment } from '../types';
import UsernameModal from './UsernameModal';

interface CommentsProps {
  pageRoute: string;
}

const Comments: React.FC<CommentsProps> = ({ pageRoute }) => {
  const { username, setUsername, hasUsername } = useUsername();

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showUsernameModal, setShowUsernameModal] = useState(false);

  // Fetch comments on mount and when pageRoute changes
  useEffect(() => {
    fetchComments();
  }, [pageRoute]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const data = await commentApi.getComments(pageRoute);
      setComments(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching comments:', err);
      setError('Failed to load comments');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user has username
    if (!hasUsername()) {
      setShowUsernameModal(true);
      return;
    }

    // Validation
    const trimmed = commentText.trim();
    if (trimmed.length === 0) {
      setError('Comment cannot be empty');
      return;
    }
    if (trimmed.length > 1000) {
      setError('Comment too long (max 1000 characters)');
      return;
    }

    try {
      setSubmitting(true);
      setError(null);

      const newComment = await commentApi.createComment(pageRoute, username!, trimmed);

      // Add new comment to the top of the list (optimistic update)
      setComments([newComment, ...comments]);
      setCommentText('');
    } catch (err) {
      console.error('Error posting comment:', err);
      setError('Failed to post comment');
    } finally {
      setSubmitting(false);
    }
  };

  const handleUsernameSubmit = (name: string) => {
    setUsername(name);
    setShowUsernameModal(false);
    // After setting username, they can submit their comment
  };

  const formatTimestamp = (timestamp: Date): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  };

  return (
    <div className="my-12">
      {/* Section Title */}
      <h3 className="text-2xl font-display font-bold mb-6 text-gray-900">
        💬 Discussion
      </h3>

      {/* Comment Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-md p-6 mb-6"
      >
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value);
              setError(null);
            }}
            placeholder="Share your thoughts or ask a question..."
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-baseball-green focus:outline-none transition-colors resize-none"
            rows={4}
            maxLength={1000}
            disabled={submitting}
          />

          {/* Character count */}
          <div className="flex items-center justify-between mt-2">
            <span className="text-sm text-gray-500">
              {commentText.length}/1000
            </span>

            <button
              type="submit"
              disabled={submitting || commentText.trim().length === 0}
              className="px-6 py-2 bg-baseball-green text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Posting...' : 'Post Comment'}
            </button>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-baseball-red text-sm mt-2">{error}</p>
          )}
        </form>
      </motion.div>

      {/* Comments List */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-16"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600">No comments yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <motion.div
              key={comment._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              {/* Comment Header */}
              <div className="flex items-start space-x-3 mb-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-baseball-green rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">
                    {comment.username.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-semibold text-gray-900">
                      {comment.username}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatTimestamp(comment.timestamp)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Comment Text */}
              <p className="text-gray-700 whitespace-pre-wrap pl-13">
                {comment.text}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Username Modal */}
      <UsernameModal
        isOpen={showUsernameModal}
        onSubmit={handleUsernameSubmit}
      />
    </div>
  );
};

export default Comments;
