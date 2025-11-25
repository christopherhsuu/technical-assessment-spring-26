// Username Modal Component
// Prompts user for their name on first interaction with quiz or comments
// Uses Framer Motion for smooth animations

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface UsernameModalProps {
  isOpen: boolean;
  onSubmit: (username: string) => void;
}

/**
 * Modal that prompts user to enter their username
 * Appears on first quiz vote or comment attempt
 */
const UsernameModal: React.FC<UsernameModalProps> = ({ isOpen, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const trimmed = inputValue.trim();
    if (trimmed.length === 0) {
      setError('Please enter a name');
      return;
    }
    if (trimmed.length < 2) {
      setError('Name must be at least 2 characters');
      return;
    }
    if (trimmed.length > 20) {
      setError('Name must be less than 20 characters');
      return;
    }

    // Submit and close
    onSubmit(trimmed);
    setInputValue('');
    setError('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={(e) => e.stopPropagation()} // Prevent closing on backdrop click
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-baseball-green rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl">⚾</span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-display font-bold text-center mb-2 text-gray-900">
                Welcome to IdeaCon!
              </h2>
              <p className="text-gray-600 text-center mb-6">
                Enter your name to participate in quizzes and comments
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    setError(''); // Clear error on input
                  }}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-baseball-green focus:outline-none transition-colors mb-2"
                  autoFocus
                  maxLength={20}
                />

                {/* Error message */}
                {error && (
                  <p className="text-baseball-red text-sm mb-4">{error}</p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-baseball-green text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 active:scale-95"
                >
                  Continue
                </button>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your name is stored locally and used for quiz results and comments
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default UsernameModal;
