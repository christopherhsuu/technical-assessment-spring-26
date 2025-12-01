// Quiz Component with real-time updates
// Handles vote submission, changing votes, and displaying live results
// Uses Socket.io for instant synchronization across all users

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Circle } from 'lucide-react';
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
      <div className="my-8 p-8 bg-white border-2 border-[#cbd5e0]">
        <div className="animate-pulse">
          <div className="h-6 bg-[#e8e2d5] w-3/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-[#e8e2d5]"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !quiz) {
    return (
      <div className="my-8 p-8 bg-[#fff5f0] border-2 border-[#ff6b35]">
        <p className="text-[#ff6b35] font-semibold">{error || 'Quiz not found'}</p>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-8 p-6 md:p-8 bg-white border-2 border-[#cbd5e0]"
      >
        {/* Header */}
        <div className="inline-block px-3 py-1 bg-[#ffd23f] mb-6">
          <span className="font-mono text-xs text-[#0a1628] font-bold tracking-widest">TEST YOUR KNOWLEDGE</span>
        </div>

        {/* Question */}
        <h3 className="text-xl md:text-2xl font-display font-black mb-6 text-[#0a1628]">
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
                  whileHover={{ scale: hasVoted ? 1 : 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleOptionClick(index)}
                  className={`w-full p-4 border-2 text-left transition-all relative overflow-hidden ${
                    isSelected && showResults && isThisCorrect
                      ? 'border-[#00d9ff] bg-[#f0fff4]'
                      : isSelected && showResults && !isThisCorrect
                      ? 'border-[#ff6b35] bg-[#fff5f0]'
                      : isSelected
                      ? 'border-[#ffd23f] bg-[#fffbeb]'
                      : 'border-[#cbd5e0] hover:border-[#ffd23f] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.1)]'
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
                        isThisCorrect ? 'bg-[#e6fffa]' : 'bg-[#fef5e7]'
                      }`}
                      style={{ zIndex: 0 }}
                    />
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-semibold text-gray-800 font-serif">{option}</span>

                    <div className="flex items-center space-x-3">
                      {/* Show correct/incorrect icon after voting */}
                      {showResults && isThisCorrect && (
                        <Check className="text-[#00d9ff]" size={28} strokeWidth={3} />
                      )}
                      {showResults && isSelected && !isThisCorrect && (
                        <X className="text-[#ff6b35]" size={28} strokeWidth={3} />
                      )}

                      {/* Show percentage after voting */}
                      {showResults && (
                        <span className="font-mono font-bold text-lg text-[#0a1628]">{percentage}%</span>
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
                    className="mt-2 ml-4 text-sm text-[#2d4a7c] hover:text-[#00d9ff] font-mono font-semibold transition-colors"
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
                      className="mt-2 ml-4 p-4 bg-[#fef5e7] border-l-4 border-[#ffd23f]"
                    >
                      <div className="flex flex-wrap gap-2">
                        {voteCount.usernames.map((name, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white border-2 border-[#cbd5e0] text-sm font-semibold text-gray-700"
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
          <div className="mt-6 pt-4 border-t-2 border-[#e8e2d5]">
            <p className="text-sm font-serif text-gray-700">
              Total votes: <span className="font-mono font-bold text-[#0a1628]">{totalVotes}</span>
              {' • '}
              <span className="text-xs font-mono flex items-center gap-1">
                {isConnected ? (
                  <>
                    <Circle className="text-[#00d9ff]" size={8} fill="currentColor" />
                    <span className="text-[#00d9ff]">Live updates enabled</span>
                  </>
                ) : (
                  <>
                    <Circle className="text-[#ff6b35]" size={8} fill="currentColor" />
                    <span className="text-[#ff6b35]">Reconnecting...</span>
                  </>
                )}
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-2 font-serif italic">
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
