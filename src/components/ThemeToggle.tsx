import { motion } from 'framer-motion';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-2 rounded-lg bg-dark-lighter/30 backdrop-blur-md border border-white/10 z-50"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <SunIcon className="w-6 h-6 text-primary" />
      ) : (
        <MoonIcon className="w-6 h-6 text-primary" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 