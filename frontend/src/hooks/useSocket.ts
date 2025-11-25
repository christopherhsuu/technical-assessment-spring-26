// Custom hook for managing Socket.io connection
// Handles real-time quiz updates from the server

import { useEffect, useRef, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import type { Quiz } from '../types';

const SOCKET_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Hook to manage Socket.io connection for real-time quiz updates
 * @returns {object} - { socket, isConnected, error }
 */
export const useSocket = () => {
  const socketRef = useRef<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Create socket connection
    socketRef.current = io(SOCKET_URL, {
      transports: ['websocket', 'polling'], // Try websocket first, fallback to polling
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
    });

    const socket = socketRef.current;

    // Connection event handlers
    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
      setIsConnected(true);
      setError(null);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
      setIsConnected(false);
    });

    socket.on('connect_error', (err) => {
      console.error('Socket connection error:', err);
      setError('Failed to connect to server');
      setIsConnected(false);
    });

    socket.on('error', (err: { message: string }) => {
      console.error('Socket error:', err);
      setError(err.message);
    });

    // Cleanup on unmount
    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  /**
   * Submit a vote via Socket.io
   */
  const submitVote = (quizId: string, option: number, username: string) => {
    if (socketRef.current) {
      socketRef.current.emit('vote-submitted', { quizId, option, username });
    }
  };

  /**
   * Change a vote via Socket.io
   */
  const changeVote = (quizId: string, newOption: number, username: string) => {
    if (socketRef.current) {
      socketRef.current.emit('vote-changed', { quizId, newOption, username });
    }
  };

  /**
   * Subscribe to quiz updates
   */
  const onQuizUpdate = (callback: (quiz: Quiz) => void) => {
    if (socketRef.current) {
      socketRef.current.on('quiz-updated', callback);

      // Return cleanup function
      return () => {
        socketRef.current?.off('quiz-updated', callback);
      };
    }
  };

  return {
    socket: socketRef.current,
    isConnected,
    error,
    submitVote,
    changeVote,
    onQuizUpdate,
  };
};

export default useSocket;
