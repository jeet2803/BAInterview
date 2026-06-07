import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  id: string;
  icon: LucideIcon;
  label: string;
  value: string | number;
  color: string; // e.g., 'blue', 'purple', 'green', 'rose'
  subValue?: string;
  animateCount?: boolean;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  id,
  icon: Icon,
  label,
  value,
  color,
  subValue,
}) => {
  const getColors = () => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-gradient-to-br from-blue-500/5 to-blue-500/15 border-blue-500/25 text-blue-400',
          glow: 'shadow-blue-500/5',
          accent: 'text-blue-300 bg-blue-500/10 border-blue-500/20',
        };
      case 'purple':
        return {
          bg: 'bg-gradient-to-br from-purple-500/5 to-purple-500/15 border-purple-500/25 text-purple-400',
          glow: 'shadow-purple-500/5',
          accent: 'text-purple-300 bg-purple-500/10 border-purple-500/20',
        };
      case 'green':
        return {
          bg: 'bg-gradient-to-br from-emerald-500/5 to-emerald-500/15 border-emerald-500/25 text-emerald-400',
          glow: 'shadow-emerald-500/5',
          accent: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20',
        };
      case 'rose':
        return {
          bg: 'bg-gradient-to-br from-rose-500/5 to-rose-500/15 border-rose-500/25 text-rose-400',
          glow: 'shadow-rose-500/5',
          accent: 'text-rose-300 bg-rose-505/10 border-rose-500/20',
        };
      default:
        return {
          bg: 'bg-white/[0.03] border-white/10 text-slate-450',
          glow: 'shadow-none',
          accent: 'text-slate-300 bg-white/5 border-white/10',
        };
    }
  };

  const scheme = getColors();

  return (
    <motion.div
      id={id}
      whileHover={{ scale: 1.02, y: -2 }}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative p-5 rounded-3xl border ${scheme.bg} shadow-lg ${scheme.glow} backdrop-blur-sm overflow-hidden flex items-center justify-between transition-shadow duration-300`}
    >
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-current opacity-5 pointer-events-none" />

      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
          {label}
        </span>
        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-bold font-sans tracking-tight text-white md:text-2xl">
            {value}
          </span>
          {subValue && (
            <span className="text-[10px] text-slate-400 font-mono">
              {subValue}
            </span>
          )}
        </div>
      </div>

      <div className={`p-2.5 rounded-xl border ${scheme.accent}`}>
        <Icon className="w-5 h-5 pointer-events-none" />
      </div>
    </motion.div>
  );
};
