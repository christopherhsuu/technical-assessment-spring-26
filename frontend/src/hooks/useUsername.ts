// Custom hook for managing username with localStorage
// Persists username across page refreshes

import { useState, useEffect } from 'react';

const USERNAME_KEY = 'sabermetrics-username';

/**
 * Hook to manage username stored in localStorage
 * @returns {object} - { username, setUsername, clearUsername }
 */
export const useUsername = () => {
  // Initialize from localStorage if available
  const [username, setUsernameState] = useState<string | null>(() => {
    return localStorage.getItem(USERNAME_KEY);
  });

  /**
   * Set username and save to localStorage
   */
  const setUsername = (name: string) => {
    localStorage.setItem(USERNAME_KEY, name);
    setUsernameState(name);
  };

  /**
   * Clear username from localStorage
   */
  const clearUsername = () => {
    localStorage.removeItem(USERNAME_KEY);
    setUsernameState(null);
  };

  /**
   * Check if username exists
   */
  const hasUsername = (): boolean => {
    return username !== null && username.trim().length > 0;
  };

  return {
    username,
    setUsername,
    clearUsername,
    hasUsername,
  };
};

export default useUsername;
