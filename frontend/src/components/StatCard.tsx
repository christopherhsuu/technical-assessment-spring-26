// StatCard Component
// Reusable card component for displaying stat information with hover effect

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  color?: 'green' | 'red' | 'blue' | 'gray';
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  color = 'green'
}) => {
  const colorClasses = {
    green: {
      bg: 'bg-[#f0fff4]',
      border: 'border-[#00d9ff]',
      text: 'text-[#00d9ff]',
      accent: 'bg-[#00d9ff]'
    },
    red: {
      bg: 'bg-[#fff5f0]',
      border: 'border-[#ff6b35]',
      text: 'text-[#ff6b35]',
      accent: 'bg-[#ff6b35]'
    },
    blue: {
      bg: 'bg-[#f0f5ff]',
      border: 'border-[#2d4a7c]',
      text: 'text-[#2d4a7c]',
      accent: 'bg-[#2d4a7c]'
    },
    gray: {
      bg: 'bg-[#fef5e7]',
      border: 'border-[#cbd5e0]',
      text: 'text-[#4a5568]',
      accent: 'bg-[#cbd5e0]'
    },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className={`p-6 border-2 ${colors.bg} ${colors.border} transition-all hover:shadow-[4px_4px_0px_rgba(0,0,0,0.1)]`}
    >
      {icon && (
        <div className="mb-3 text-3xl">
          {icon}
        </div>
      )}

      <h4 className={`font-mono text-xs font-bold uppercase tracking-widest mb-2 ${colors.text}`}>
        {title}
      </h4>

      <div className={`scoreboard-num text-4xl mb-2 ${colors.text}`}>
        {value}
      </div>

      {description && (
        <p className="text-sm text-gray-600 font-serif">
          {description}
        </p>
      )}

      {/* Small accent bar at bottom */}
      <div className={`mt-4 h-1 w-12 ${colors.accent}`}></div>
    </motion.div>
  );
};

export default StatCard;
