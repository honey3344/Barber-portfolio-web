'use client';

import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/contexts/DarkModeContext';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode, systemPrefersDark } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        {/* Sun icon for light mode */}
        <Sun
          className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-300 ${
            isDarkMode
              ? 'opacity-0 rotate-90 scale-0'
              : 'opacity-100 rotate-0 scale-100 text-yellow-500'
          }`}
          size={20}
        />
        
        {/* Moon icon for dark mode */}
        <Moon
          className={`absolute inset-0 m-auto h-5 w-5 transition-all duration-300 ${
            isDarkMode
              ? 'opacity-100 rotate-0 scale-100 text-purple-400'
              : 'opacity-0 -rotate-90 scale-0'
          }`}
          size={20}
        />
      </div>
      
      {/* System preference indicator */}
      {systemPrefersDark && !isDarkMode && (
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
      )}
    </button>
  );
}
