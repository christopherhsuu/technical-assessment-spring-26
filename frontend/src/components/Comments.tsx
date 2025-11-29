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
        <div className="inline-block px-3 py-1 bg-[#ff6b35] border-2 border-[#ffd23f] mb-3">
          <span className="font-mono text-xs text-white font-bold tracking-widest">DISCUSSION</span>
        </div>
        <h3 className="text-3xl font-display font-black text-[#0a1628]">
          Join the Conversation
        </h3>
      </div>

      {/* Comment Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-2 border-[#cbd5e0] p-6 mb-6"
      >
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value);
              setError(null);
            }}
            placeholder="Share your thoughts or ask a question..."
            className="w-full px-4 py-3 border-2 border-[#cbd5e0] focus:border-[#ffd23f] focus:outline-none transition-colors resize-none font-serif"
            rows={4}
            maxLength={1000}
            disabled={submitting}
          />

          {/* Character count */}
          <div className="flex items-center justify-between mt-3">
            <span className="text-sm text-gray-500 font-mono">
              {commentText.length}/1000
            </span>

            <button
              type="submit"
              disabled={submitting || commentText.trim().length === 0}
              className="px-6 py-3 bg-[#ff6b35] text-white border-2 border-[#ffd23f] font-display font-bold hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
            >
              {submitting ? 'POSTING...' : 'POST COMMENT'}
            </button>
          </div>

          {/* Error message */}
          {error && (
            <p className="text-[#ff6b35] text-sm mt-2 font-semibold">{error}</p>
          )}
        </form>
      </motion.div>

      {/* Comments List */}
      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border-2 border-[#cbd5e0] p-6 animate-pulse">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-[#e8e2d5]"></div>
                <div>
                  <div className="h-4 bg-[#e8e2d5] w-24 mb-2"></div>
                  <div className="h-3 bg-[#e8e2d5] w-16"></div>
                </div>
              </div>
              <div className="h-4 bg-[#e8e2d5] w-full mb-2"></div>
              <div className="h-4 bg-[#e8e2d5] w-3/4"></div>
            </div>
          ))}
        </div>
      ) : comments.length === 0 ? (
        <div className="bg-[#fef5e7] border-2 border-[#e8e2d5] p-8 text-center">
          <p className="text-gray-600 font-serif">No comments yet. Be the first to share your thoughts!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <motion.div
              key={comment._id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white border-2 border-[#cbd5e0] p-6 hover:shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:border-[#ffd23f] transition-all"
            >
              {/* Comment Header */}
              <div className="flex items-start space-x-3 mb-3">
                {/* Avatar */}
                <div className="w-10 h-10 bg-[#ff6b35] border-2 border-[#ffd23f] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-display font-black text-sm">
                    {comment.username.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline space-x-2">
                    <span className="font-display font-bold text-[#0a1628]">
                      {comment.username}
                    </span>
                    <span className="text-sm text-gray-500 font-mono">
                      {formatTimestamp(comment.timestamp)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Comment Text */}
              <p className="text-gray-700 whitespace-pre-wrap pl-13 font-serif leading-relaxed">
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
