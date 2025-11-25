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
    green: 'bg-green-50 border-green-200 text-green-700',
    red: 'bg-red-50 border-red-200 text-red-700',
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    gray: 'bg-gray-50 border-gray-200 text-gray-700',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className={`p-6 rounded-lg border-2 ${colorClasses[color]} transition-shadow hover:shadow-lg`}
    >
      {icon && (
        <div className="mb-3 text-3xl">
          {icon}
        </div>
      )}

      <h4 className="text-sm font-semibold uppercase tracking-wide opacity-75 mb-1">
        {title}
      </h4>

      <div className="text-3xl font-display font-bold mb-2">
        {value}
      </div>

      {description && (
        <p className="text-sm opacity-75">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default StatCard;
