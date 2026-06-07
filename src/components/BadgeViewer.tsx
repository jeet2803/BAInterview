import React from 'react';
import { motion } from 'motion/react';
import { Award, Lock, Sparkles, CheckCircle, ShieldAlert } from 'lucide-react';

export interface Badge {
  id: string;
  name: string;
  threshold: number;
  description: string;
  gradient: string;
  iconColor: string;
}

export const BADGES: Badge[] = [
  {
    id: 'badge_bronze',
    name: 'Bronze Analyst',
    threshold: 5,
    description: 'Answer 5 questions correctly to secure your foundation.',
    gradient: 'from-amber-600 to-amber-800',
    iconColor: 'text-amber-400',
  },
  {
    id: 'badge_silver',
    name: 'Silver Advisor',
    threshold: 10,
    description: 'Answer 10 questions correctly to demonstrate intermediate grit.',
    gradient: 'from-slate-400 to-slate-600',
    iconColor: 'text-slate-200',
  },
  {
    id: 'badge_gold',
    name: 'Gold Consultant',
    threshold: 20,
    description: 'Answer 20 questions correctly. You are formulating sharp insights.',
    gradient: 'from-yellow-500 via-amber-500 to-yellow-600',
    iconColor: 'text-yellow-300',
  },
  {
    id: 'badge_expert',
    name: 'Banking Expert',
    threshold: 50,
    description: 'Answer 50 questions correctly. Mastery of complex ledger processes.',
    gradient: 'from-emerald-500 to-teal-700',
    iconColor: 'text-emerald-300',
  },
  {
    id: 'badge_slayer',
    name: 'BA Interview Slayer',
    threshold: 100,
    description: 'Answer 100 questions correctly. Ready to lead any digital team under pressure.',
    gradient: 'from-purple-600 via-indigo-600 to-blue-700',
    iconColor: 'text-purple-300',
  },
];

export function getRank(correctCount: number): { title: string; subtitle: string; color: string } {
  if (correctCount >= 100) return { title: 'BA Interview Slayer', subtitle: 'The ultimate domain specialist.', color: 'text-purple-400 font-extrabold' };
  if (correctCount >= 50) return { title: 'Managing Director', subtitle: 'Leading strategic banking integrations.', color: 'text-emerald-400 font-bold' };
  if (correctCount >= 25) return { title: 'VP of Payments', subtitle: 'Master of high-value clearing ledgers.', color: 'text-yellow-400 font-bold' };
  if (correctCount >= 15) return { title: 'Senior Consultant', subtitle: 'Flawless BRD & FRD decomposition.', color: 'text-blue-400 font-semibold' };
  if (correctCount >= 5) return { title: 'Banking Analyst', subtitle: 'Formulating core procedural criteria.', color: 'text-zinc-300 font-medium' };
  return { title: 'Junior BA Associate', subtitle: 'Gathering initial compliance parameters.', color: 'text-zinc-400 font-medium' };
}

interface BadgeViewerProps {
  correctCount: number;
  highlightNewBadgeId?: string | null;
}

export const BadgeViewer: React.FC<BadgeViewerProps> = ({ correctCount, highlightNewBadgeId }) => {
  const currentRank = getRank(correctCount);

  return (
    <div className="space-y-6">
      {/* Active Rank Hero Panel */}
      <div className="relative p-6 rounded-3xl bg-white/[0.03] border border-white/10 shadow-inner flex flex-col md:flex-row items-center gap-5 overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center relative shadow-lg">
          <Sparkles className="absolute -top-1 -right-1 w-5 h-5 text-yellow-400 animate-pulse pointer-events-none" />
          <Award className="w-8 h-8 text-blue-400 pointer-events-none" />
        </div>

        <div className="text-center md:text-left space-y-1">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Your Banking Professional Rank</p>
          <h3 className={`text-xl font-bold tracking-tight ${currentRank.color}`}>{currentRank.title}</h3>
          <p className="text-sm text-slate-300">{currentRank.subtitle}</p>
        </div>

        <div className="md:ml-auto bg-slate-950/80 px-4 py-2 rounded-xl border border-white/5 text-center">
          <div className="text-2xl font-bold font-mono text-slate-200">{correctCount}</div>
          <div className="text-[10px] uppercase tracking-wider text-slate-400">Correct Answers</div>
        </div>
      </div>

      {/* Achievements Grid */}
      <div className="space-y-3">
        <h4 className="text-sm font-semibold tracking-wider text-slate-400 uppercase">Unlocked Achievements ({BADGES.filter(b => correctCount >= b.threshold).length} / {BADGES.length})</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BADGES.map((badge) => {
            const isUnlocked = correctCount >= badge.threshold;
            const isHighlight = highlightNewBadgeId === badge.id;

            return (
              <motion.div
                key={badge.id}
                id={badge.id}
                initial={isHighlight ? { scale: 0.9, borderColor: 'rgba(255, 255, 255, 0.2)' } : { opacity: 1 }}
                animate={isHighlight ? { scale: [1, 1.05, 1], borderColor: ['rgba(59, 130, 246, 0.4)', 'rgba(59, 130, 246, 0.8)', 'rgba(59, 130, 246, 0.4)'] } : {}}
                transition={{ duration: 1.5, repeat: isHighlight ? Infinity : 0 }}
                className={`relative p-4 rounded-2xl border flex items-start gap-3.5 transition-all duration-300 ${isUnlocked ? 'bg-white/[0.02] border-white/10 overflow-hidden group hover:border-blue-500/30' : 'bg-white/[0.01] border-white/5 opacity-50'}`}
              >
                {/* Dynamic Left Colored Ribbon for Unlocked Badges */}
                {isUnlocked && (
                  <div className={`absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b ${badge.gradient}`} />
                )}

                <div className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center relative shadow-sm border ${isUnlocked ? `bg-gradient-to-br ${badge.gradient} border-white/10 ${badge.iconColor}` : 'bg-slate-900 border-white/5 text-slate-650'}`}>
                  {isUnlocked ? (
                    <Award className="w-5.5 h-5.5 pointer-events-none" />
                  ) : (
                    <Lock className="w-4.5 h-4.5 text-slate-500 pointer-events-none" />
                  )}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-sm font-bold tracking-tight ${isUnlocked ? 'text-slate-200 group-hover:text-white' : 'text-slate-500'}`}>{badge.name}</span>
                    {isUnlocked ? (
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 pointer-events-none" />
                    ) : (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-950 text-slate-500 font-mono">Requires {badge.threshold}</span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">{badge.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
