// Quiz Component with real-time updates
// Handles vote submission, changing votes, and displaying live results
// Uses Socket.io for instant synchronization across all users

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizApi } from '../services/api';
import { useSocket } from '../hooks/useSocket';
import { useUsername } from '../hooks/useUsername';
import type { Quiz as QuizType, VoteCount } from '../types';
import UsernameModal from './UsernameModal';

interface QuizProps {
  quizId: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const Quiz: React.FC<QuizProps> = ({ quizId, question, options, correctAnswer }) => {
  const { username, setUsername, hasUsername } = useUsername();
  const { isConnected, submitVote, changeVote, onQuizUpdate } = useSocket();

  const [quiz, setQuiz] = useState<QuizType | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [expandedOption, setExpandedOption] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch quiz data on mount
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const data = await quizApi.getQuiz(quizId);
        setQuiz(data);

        // Check if current user has already voted
        if (username && data.votes.some(vote => vote.username === username)) {
          setHasVoted(true);
          const userVote = data.votes.find(vote => vote.username === username);
          if (userVote) {
            setSelectedOption(userVote.option);
          }
        }
        setLoading(false);
      } catch (err) {
        console.error('Error fetching quiz:', err);
        setError('Failed to load quiz');
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId, username]);

  // Subscribe to real-time quiz updates via Socket.io
  useEffect(() => {
    if (isConnected && onQuizUpdate) {
      const cleanup = onQuizUpdate((updatedQuiz) => {
        if (updatedQuiz.quizId === quizId) {
          setQuiz(updatedQuiz);
        }
      });

      return cleanup;
    }
  }, [isConnected, quizId, onQuizUpdate]);

  // Calculate vote counts per option
  const getVoteCounts = (): VoteCount[] => {
    if (!quiz) return [];

    return options.map((_, index) => {
      const votes = quiz.votes.filter(vote => vote.option === index);
      return {
        option: index,
        count: votes.length,
        usernames: votes.map(v => v.username),
      };
    });
  };

  const voteCounts = getVoteCounts();
  const totalVotes = voteCounts.reduce((sum, vc) => sum + vc.count, 0);

  // Handle option click
  const handleOptionClick = (optionIndex: number) => {
    // If no username, show modal
    if (!hasUsername()) {
      setShowUsernameModal(true);
      setSelectedOption(optionIndex); // Remember which option they wanted to select
      return;
    }

    // If already voted and clicking same option, do nothing
    if (hasVoted && selectedOption === optionIndex) {
      return;
    }

    // If already voted and clicking different option, change vote
    if (hasVoted && selectedOption !== optionIndex) {
      handleChangeVote(optionIndex);
      return;
    }

    // First time voting
    handleSubmitVote(optionIndex);
  };

  // Submit initial vote
  const handleSubmitVote = (optionIndex: number) => {
    if (!username) return;

    setSelectedOption(optionIndex);
    setHasVoted(true);
    submitVote(quizId, optionIndex, username);
  };

  // Change existing vote
  const handleChangeVote = (newOptionIndex: number) => {
    if (!username) return;

    setSelectedOption(newOptionIndex);
    changeVote(quizId, newOptionIndex, username);
  };

  // Handle username submission from modal
  const handleUsernameSubmit = (name: string) => {
    setUsername(name);
    setShowUsernameModal(false);

    // If they had selected an option before entering username, vote now
    if (selectedOption !== null) {
      submitVote(quizId, selectedOption, name);
      setHasVoted(true);
    }
  };

  // Get percentage for an option
  const getPercentage = (count: number): number => {
    if (totalVotes === 0) return 0;
    return Math.round((count / totalVotes) * 100);
  };

  // Check if option is correct
  const isCorrect = (index: number): boolean => {
    return index === correctAnswer;
  };

  if (loading) {
    return (
      <div className="my-8 p-8 bg-white rounded-lg shadow-md">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !quiz) {
    return (
      <div className="my-8 p-8 bg-red-50 rounded-lg shadow-md">
        <p className="text-baseball-red">{error || 'Quiz not found'}</p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-8 p-6 md:p-8 bg-white rounded-lg shadow-md"
      >
        {/* Question */}
        <h3 className="text-xl md:text-2xl font-display font-bold mb-6 text-gray-900">
          {question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {options.map((option, index) => {
            const voteCount = voteCounts[index];
            const percentage = getPercentage(voteCount.count);
            const isSelected = selectedOption === index;
            const showResults = hasVoted;
            const isThisCorrect = isCorrect(index);

            return (
              <div key={index}>
                <motion.button
                  whileHover={{ scale: hasVoted ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleOptionClick(index)}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all relative overflow-hidden ${
                    isSelected && showResults && isThisCorrect
                      ? 'border-green-500 bg-green-50'
                      : isSelected && showResults && !isThisCorrect
                      ? 'border-baseball-red bg-red-50'
                      : isSelected
                      ? 'border-baseball-green bg-baseball-green bg-opacity-10'
                      : 'border-gray-300 hover:border-baseball-green'
                  }`}
                  disabled={loading}
                >
                  {/* Progress bar background (only show after voting) */}
                  {showResults && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`absolute inset-0 ${
                        isThisCorrect ? 'bg-green-100' : 'bg-gray-100'
                      }`}
                      style={{ zIndex: 0 }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-medium">{option}</span>

                    <div className="flex items-center space-x-3">
                      {/* Show correct/incorrect icon after voting */}
                      {showResults && isThisCorrect && (
                        <span className="text-green-600 text-xl">✓</span>
                      )}
                      {showResults && isSelected && !isThisCorrect && (
                        <span className="text-baseball-red text-xl">✗</span>
                      )}

                      {/* Show percentage after voting */}
                      {showResults && (
                        <span className="font-bold text-lg">{percentage}%</span>
                      )}
                    </div>
                  </div>
                </motion.button>

                {/* "Show X voters" button - only visible after user has voted */}
                {hasVoted && voteCount.count > 0 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={() => setExpandedOption(expandedOption === index ? null : index)}
                    className="mt-2 ml-4 text-sm text-baseball-green hover:underline"
                  >
                    {expandedOption === index ? 'Hide' : 'Show'} {voteCount.count} voter{voteCount.count !== 1 ? 's' : ''}
                  </motion.button>
                )}

                {/* Expanded usernames list */}
                <AnimatePresence>
                  {expandedOption === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 ml-4 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex flex-wrap gap-2">
                        {voteCount.usernames.map((name, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white rounded-full text-sm border border-gray-200"
                          >
                            {name}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        {hasVoted && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Total votes: <span className="font-semibold">{totalVotes}</span>
              {' • '}
              <span className="text-xs">
                {isConnected ? '🟢 Live updates enabled' : '🔴 Reconnecting...'}
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Click another option to change your vote
            </p>
          </div>
        )}
      </motion.div>

      {/* Username Modal */}
      <UsernameModal
        isOpen={showUsernameModal}
        onSubmit={handleUsernameSubmit}
      />
    </>
  );
};

export default Quiz;
