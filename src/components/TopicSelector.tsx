import React from 'react';
import { motion } from 'motion/react';
import {
  BookOpen, ShieldCheck, CreditCard, Smartphone, Globe, FileText,
  GitBranch, ClipboardCheck, Code, Database, Users, AlertTriangle, Sparkles, CheckCircle
} from 'lucide-react';

export const TOPICS = [
  { name: 'Banking Fundamentals', icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-600/10 border-blue-500/20' },
  { name: 'KYC & AML', icon: ShieldCheck, color: 'text-rose-400', bg: 'bg-rose-600/10 border-rose-500/20' },
  { name: 'Payments', icon: CreditCard, color: 'text-emerald-400', bg: 'bg-emerald-600/10 border-emerald-500/20' },
  { name: 'UPI', icon: Smartphone, color: 'text-purple-400', bg: 'bg-purple-600/10 border-purple-500/20' },
  { name: 'Remittance', icon: Globe, color: 'text-sky-400', bg: 'bg-sky-600/10 border-sky-500/20' },
  { name: 'BRD & FRD', icon: FileText, color: 'text-amber-400', bg: 'bg-amber-600/10 border-amber-500/20' },
  { name: 'Agile', icon: GitBranch, color: 'text-indigo-400', bg: 'bg-indigo-600/10 border-indigo-500/20' },
  { name: 'UAT', icon: ClipboardCheck, color: 'text-teal-400', bg: 'bg-teal-600/10 border-teal-500/20' },
  { name: 'APIs', icon: Code, color: 'text-cyan-400', bg: 'bg-cyan-600/10 border-cyan-500/20' },
  { name: 'SQL', icon: Database, color: 'text-orange-400', bg: 'bg-orange-600/10 border-orange-500/20' },
  { name: 'Stakeholder Management', icon: Users, color: 'text-violet-400', bg: 'bg-violet-600/10 border-violet-500/20' },
  { name: 'Scenario Questions', icon: AlertTriangle, color: 'text-pink-400', bg: 'bg-pink-600/10 border-pink-500/20' },
];

interface TopicSelectorProps {
  onSelectTopic: (topicName: string | null) => void;
  selectedTopic: string | null;
  topicScores: Record<string, { correct: number; total: number }>;
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  onSelectTopic,
  selectedTopic,
  topicScores,
}) => {
  return (
    <div className="space-y-4">
      {/* Selection Summary banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-4">
        <div>
          <h3 className="text-base font-bold tracking-tight text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400 pointer-events-none" />
            Domain Topic Selection
          </h3>
          <p className="text-xs text-slate-400">Choose a focused domain sprint or play a randomized Mixed Deck</p>
        </div>

        {selectedTopic && (
          <button
            onClick={() => onSelectTopic(null)}
            className="text-xs font-mono font-medium text-blue-400 hover:text-blue-300 transition-colors py-1 px-2.5 rounded bg-white/5 border border-white/10 select-none cursor-pointer"
          >
            Clear Selection (Play Mixed Deck)
          </button>
        )}
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {/* Mixed Deck Card */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => onSelectTopic(null)}
          className={`p-4 rounded-2xl border flex flex-col justify-between h-28 cursor-pointer relative overflow-hidden transition-all duration-200 select-none ${
            selectedTopic === null
              ? 'bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border-blue-500 shadow-lg shadow-blue-500/10'
              : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
          }`}
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full pointer-events-none" />

          <div className="flex justify-between items-start">
            <div className={`p-2.5 rounded-xl bg-blue-500/15 text-blue-300 border border-blue-500/20`}>
              <Sparkles className="w-4.5 h-4.5 pointer-events-none" />
            </div>
            {selectedTopic === null && (
              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 pointer-events-none" />
            )}
          </div>

          <div className="space-y-0.5">
            <h4 className="text-xs font-bold tracking-tight text-slate-100 uppercase">Mixed Deck</h4>
            <p className="text-[10px] text-slate-400 leading-tight">All banking categories merged simultaneously</p>
          </div>
        </motion.div>

        {TOPICS.map((topic) => {
          const Icon = topic.icon;
          const isSelected = selectedTopic === topic.name;
          const scores = topicScores[topic.name] || { correct: 0, total: 0 };
          const completionPercentage = scores.total > 0 ? Math.min(100, Math.round((scores.correct / scores.total) * 100)) : 0;

          return (
            <motion.div
              key={topic.name}
              whileHover={{ scale: 1.02 }}
              onClick={() => onSelectTopic(topic.name)}
              className={`p-4 rounded-2xl border flex flex-col justify-between h-28 cursor-pointer relative overflow-hidden transition-all duration-200 select-none ${
                isSelected
                  ? 'bg-gradient-to-br from-slate-900 to-blue-950/40 border-blue-500 shadow-md shadow-blue-500/10'
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
              }`}
            >
              <div className="flex justify-between items-start">
                <div className={`p-2 rounded-lg ${topic.bg} ${topic.color}`}>
                  <Icon className="w-4.5 h-4.5 pointer-events-none" />
                </div>
                {isSelected && (
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0 pointer-events-none" />
                )}
                {!isSelected && completionPercentage > 0 && (
                  <span className="text-[9px] font-mono font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                    {completionPercentage}% solved
                  </span>
                )}
              </div>

              <div className="space-y-1.5">
                <h4 className="text-xs font-bold tracking-tight text-slate-100 truncate uppercase">
                  {topic.name}
                </h4>
                {/* Thin progress bar if solved */}
                {scores.total > 0 ? (
                  <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${completionPercentage}%` }}
                    />
                  </div>
                ) : (
                  <p className="text-[10px] text-slate-500">Not started yet</p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
