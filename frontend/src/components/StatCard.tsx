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
      bg: 'bg-white',
      border: 'border-[#d1fae5]',
      text: 'text-[#10b981]',
      accent: 'bg-[#10b981]'
    },
    red: {
      bg: 'bg-white',
      border: 'border-[#fee2e2]',
      text: 'text-[#ef4444]',
      accent: 'bg-[#ef4444]'
    },
    blue: {
      bg: 'bg-white',
      border: 'border-[#dbeafe]',
      text: 'text-[#3b82f6]',
      accent: 'bg-[#3b82f6]'
    },
    gray: {
      bg: 'bg-white',
      border: 'border-[#f1f5f9]',
      text: 'text-[#64748b]',
      accent: 'bg-[#64748b]'
    },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className={`p-6 rounded-lg border ${colors.bg} ${colors.border} shadow-sm transition-all hover:shadow-lg`}
    >
      {icon && (
        <div className="mb-3 text-3xl">
          {icon}
        </div>
      )}

      <h4 className={`font-sans text-xs font-semibold uppercase tracking-wider mb-2 text-slate-600`}>
        {title}
      </h4>

      <div className={`scoreboard-num text-4xl mb-2 ${colors.text}`}>
        {value}
      </div>

      {description && (
        <p className="text-sm text-slate-500 font-sans">
          {description}
        </p>
      )}

      {/* Small accent bar at bottom */}
      <div className={`mt-4 h-1 w-12 ${colors.accent}`}></div>
    </motion.div>
  );
};

export default StatCard;
