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
      <div className="mb-6">
        <div className="inline-block px-3 py-1 bg-[#06b6d4] bg-opacity-90 rounded-full mb-3 shadow-sm">
          <span className="font-mono text-[11px] text-white font-bold tracking-[0.2em]">DISCUSSION</span>
        </div>
        <h3 className="text-3xl font-display font-black text-[#0f172a]">
          Join the Conversation
        </h3>
      </div>

      {/* Comment Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6"
      >
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value);
              setError(null);
            }}
            placeholder="Share your thoughts or ask a question..."
            className="w-full px-4 py-3 border border-gray-300 focus:border-[#06b6d4] focus:ring-2 focus:ring-[#22d3ee]/30 focus:outline-none transition-colors resize-none font-sans rounded-lg text-slate-800"
            rows={4}
            maxLength={1000}
            disabled={submitting}
          />

          {/* Character count */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-slate-500 font-mono">
              {commentText.length}/1000
            </span>

            <button
              type="submit"
              disabled={submitting || commentText.trim().length === 0}
              className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#3b82f6] text-white font-display font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-md"
            >
              {submitting ? 'POSTING...' : 'POST COMMENT'}
            </button>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-[#ef4444] text-sm mt-2 font-semibold font-sans">{error}</p>
          )}
        </form>
      </motion.div>

      {/* Comments List */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse shadow-sm">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="h-4 bg-gray-200 w-24 mb-2 rounded"></div>
                  <div className="h-3 bg-gray-200 w-16 rounded"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-200 w-full mb-2 rounded"></div>
              <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
            </div>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="bg-[#f8fafc] border border-gray-200 rounded-xl p-8 text-center shadow-sm">
          <p className="text-slate-600 font-sans">No comments yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <motion.div
              key={comment._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all"
            >
              {/* Comment Header */}
              <div className="flex items-start space-x-3 mb-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-[#06b6d4] border border-[#22d3ee] rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-white font-display font-black text-sm">
                    {comment.username.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-display font-bold text-[#0f172a]">
                      {comment.username}
                    </span>
                    <span className="text-sm text-slate-500 font-mono">
                      {formatTimestamp(comment.timestamp)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Comment Text */}
              <p className="text-slate-700 whitespace-pre-wrap pl-13 font-sans leading-relaxed">
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
