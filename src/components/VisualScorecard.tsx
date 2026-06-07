import React, { useState } from 'react';
import { motion } from 'motion/react';
import { synth } from './AudioSynth';
import {
  Award, RefreshCw, Home, Compass, UserCheck, Star, Activity, AlertTriangle, Check, BookOpen, Clock, Zap
} from 'lucide-react';

interface VisualScorecardProps {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  accuracy: number;
  xpEarned: number;
  bestStreak: number;
  timeSpentSeconds: number;
  mode: 'practice' | 'scenario' | 'challenge';
  topicPerformance: Record<string, { correct: number; total: number }>;
  onRestart: () => void;
  onGoHome: () => void;
}

export const VisualScorecard: React.FC<VisualScorecardProps> = ({
  totalQuestions,
  correctAnswers,
  wrongAnswers,
  accuracy,
  xpEarned,
  bestStreak,
  timeSpentSeconds,
  mode,
  topicPerformance,
  onRestart,
  onGoHome,
}) => {
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<'overview' | 'topics' | 'revision'>('overview');

  React.useEffect(() => {
    synth.playVictory();
  }, []);

  const getPerformanceRating = () => {
    if (accuracy >= 85) return { stars: 5, label: 'Interview Ready', color: 'text-emerald-400', banner: 'border-emerald-500/20 bg-emerald-950/10' };
    if (accuracy >= 70) return { stars: 4, label: 'Highly Proficient', color: 'text-indigo-400', banner: 'border-indigo-500/20 bg-indigo-950/10' };
    if (accuracy >= 50) return { stars: 3, label: 'Strong Potential', color: 'text-yellow-400', banner: 'border-yellow-500/20 bg-yellow-950/10' };
    return { stars: 2, label: 'Keep Practicing', color: 'text-rose-400', banner: 'border-rose-500/20 bg-rose-950/10' };
  };

  const getVerdict = () => {
    if (accuracy >= 85) {
      return {
        decision: 'HIRE',
        text: 'The candidate demonstrates stellar, bulletproof command over payments topologies, credit regulations, and core banking design boundaries. Unanimously hired.',
        color: 'text-emerald-400 border-emerald-500 bg-emerald-600/10',
      };
    }
    if (accuracy >= 70) {
      return {
        decision: 'BORDERLINE HIRE',
        text: 'Strong logic gates and clear functional agility. Minor refinement needed in niche remittance workflows, but displays high analytical value. Recommended for hire.',
        color: 'text-indigo-400 border-indigo-500 bg-indigo-600/10',
      };
    }
    if (accuracy >= 50) {
      return {
        decision: 'BORDERLINE REJECT',
        text: 'The audit shows procedural leaks in KYC compliance and scenario prioritization. Has potential but needs immediate self-study and deep ledger simulation runs.',
        color: 'text-yellow-400 border-yellow-500 bg-yellow-600/10',
      };
    }
    return {
      decision: 'REJECT',
      text: 'Multiple regulatory lapses occurred under pressure. Core payments terminology needs fundamental reconstruction. Recommend comprehensive review before resubmitting application.',
      color: 'text-rose-400 border-rose-500 bg-rose-600/10',
    };
  };

  const getWeakAreasAndRevisions = () => {
    const weakList: string[] = [];
    const revisions: string[] = [];

    Object.entries(topicPerformance).forEach(([topic, statsVal]) => {
      const stats = statsVal as { correct: number; total: number };
      const topicAccuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 100;
      if (topicAccuracy < 70) {
        weakList.push(topic);
        
        // Maps topics to suggested revision items
        if (topic.includes('KYC') || topic.includes('AML')) {
          revisions.push('AML Transaction Monitoring Patterns');
          revisions.push('Enhanced Due Diligence (EDD) for Foreign PEPs');
        } else if (topic.includes('Payments') || topic.includes('UPI')) {
          revisions.push('Inter-bank net settlement structures');
          revisions.push('NPCI routing switch callback APIs');
        } else if (topic.includes('Remittance')) {
          revisions.push('SWIFT MT103 vs MX XML converter schemas');
          revisions.push('Nostro-Vostro balance reconciliation workflows');
        } else if (topic.includes('BRD') || topic.includes('FRD') || topic.includes('Agile')) {
          revisions.push('Gherkin Given-When-Then criteria limits');
          revisions.push('Scrum Definition-of-Done (DoD) protocols');
        } else if (topic.includes('UAT') || topic.includes('Scenario')) {
          revisions.push('Scope Creep Impact Triage systems');
          revisions.push('Production incident log mapping processes');
        }
      }
    });

    // Fallbacks if user did amazingly well or tested too few
    if (weakList.length === 0) {
      weakList.push('None - Fully optimized!');
      revisions.push('Explore advanced ISO 20022 schemas');
      revisions.push('Read Central Bank Digital Currency (CBDC) token boundaries');
    }

    return {
      weakList: Array.from(new Set(weakList)),
      revisions: Array.from(new Set(revisions)),
    };
  };

  const rating = getPerformanceRating();
  const verdict = getVerdict();
  const analysis = getWeakAreasAndRevisions();

  // Convert time to readable mm:ss
  const minutes = Math.floor(timeSpentSeconds / 60);
  const seconds = timeSpentSeconds % 60;
  const timeString = `${minutes}m ${seconds}s`;

  return (
    <div className="space-y-6">
      {/* Title Header with ambient particle glows */}
      <div className="text-center space-y-2 relative py-4">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-indigo-400">SESSION COMPLETE</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
          🏆 Quiz Completed Successfully
        </h2>
        <div className="flex justify-center gap-1.5 text-yellow-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating.stars ? 'fill-current' : 'text-zinc-700'}`}
            />
          ))}
        </div>
      </div>

      {mode === 'challenge' && (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`p-5 rounded-2xl border ${verdict.color} space-y-2 text-center relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 p-3 text-[10px] font-mono border-l border-b border-inherit bg-black/40 text-slate-400 uppercase tracking-widest leading-none">
            MOCK COMMITTEE VERDICT
          </div>
          <span className="text-xs uppercase tracking-wider text-slate-400">Interview Evaluation Outcome</span>
          <div className="text-3xl font-extrabold tracking-wider">{verdict.decision}</div>
          <p className="text-xs text-slate-200 max-w-xl mx-auto leading-relaxed border-t border-white/5 pt-2.5 mt-2">
            "{verdict.text}"
          </p>
        </motion.div>
      )}

      {/* Main stats layout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl text-center shadow-lg">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Accuracy Score</p>
          <p className={`text-2xl font-extrabold font-mono mt-1 ${rating.color}`}>{accuracy}%</p>
          <p className="text-[10px] text-slate-400 mt-1">{correctAnswers} / {totalQuestions} Correct</p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl text-center shadow-lg">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Dopamine Reward</p>
          <p className="text-2xl font-extrabold font-mono mt-1 text-yellow-400 flex items-center justify-center gap-1">
            <Zap className="w-5 h-5 text-yellow-400 animate-pulse pointer-events-none" />
            +{xpEarned}
          </p>
          <p className="text-[10px] text-slate-400 mt-1">Total XP Gained</p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl text-center shadow-lg">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Best Hot Streak</p>
          <p className="text-2xl font-extrabold font-mono mt-1 text-orange-400">🔥 {bestStreak}</p>
          <p className="text-[10px] text-slate-400 mt-1">Consecutive correct</p>
        </div>

        <div className="bg-white/[0.03] border border-white/10 p-4 rounded-2xl text-center shadow-lg">
          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Time Completed</p>
          <p className="text-2xl font-extrabold font-mono mt-1 text-sky-400">{timeString}</p>
          <p className="text-[10px] text-slate-400 mt-1">Average: {Math.round(timeSpentSeconds / totalQuestions)}s / q</p>
        </div>
      </div>

      {/* Analysis Section with dedicated tabs */}
      <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-sm">
        <div className="flex gap-2.5 border-b border-white/10 pb-3 mb-4 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setActiveAnalysisTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer select-none ${activeAnalysisTab === 'overview' ? 'text-white bg-blue-600/25 border border-blue-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Performance Verdict
          </button>
          <button
            onClick={() => setActiveAnalysisTab('topics')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer select-none ${activeAnalysisTab === 'topics' ? 'text-white bg-blue-600/25 border border-blue-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Topic Breakdown
          </button>
          <button
            onClick={() => setActiveAnalysisTab('revision')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer select-none ${activeAnalysisTab === 'revision' ? 'text-white bg-blue-600/25 border border-blue-500/30' : 'text-slate-400 hover:text-slate-200'}`}
          >
            Revision Suggested
          </button>
        </div>

        <div className="min-h-56">
          {activeAnalysisTab === 'overview' && (
            <div className={`p-4 rounded-2xl border ${rating.banner} space-y-3`}>
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-400 pointer-events-none z-10" />
                <span className="text-sm font-bold text-white z-10">General Evaluation Summary</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed z-10 relative">
                Your total score indicates a standard level of <span className="font-bold text-blue-400">{rating.label}</span> classification.
                {accuracy >= 85
                  ? ' You have pristine clarity on high-throughput payment architectures, KYC laws, and stakeholder scoping bottlenecks. Recommended to try Scenario challenges next.'
                  : ' Some structural blocks remain regarding payment settlements or API callbacks. Keep testing your skills to solidify memory mnemonics.'}
              </p>

              <div className="pt-3 border-t border-white/5">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono mb-2">Identified Core Fragilities</p>
                <div className="flex flex-wrap gap-1.5">
                  {analysis.weakList.map((weak, i) => (
                    <span key={i} className="px-2 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs rounded-xl select-none">
                      ⚠️ {weak}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeAnalysisTab === 'topics' && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Tested Domain Performance Rates</h4>
              <div className="space-y-3">
                {Object.entries(topicPerformance).map(([topic, statsVal]) => {
                  const stats = statsVal as { correct: number; total: number };
                  const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
                  return (
                    <div key={topic} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-200 uppercase font-medium">{topic}</span>
                        <span className={`font-mono ${pct >= 80 ? 'text-emerald-400' : pct >= 50 ? 'text-yellow-400' : 'text-rose-400'}`}>
                          {pct}% ({stats.correct}/{stats.total})
                        </span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-white/5">
                        <div
                          className={`h-full rounded-full transition-all duration-1000 ${pct >= 80 ? 'bg-emerald-500' : pct >= 50 ? 'bg-yellow-500' : 'bg-rose-500'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeAnalysisTab === 'revision' && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Tailored Learning Priority Checklist</h4>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">We suggest reviewing the following specific technical frameworks to solidify your consulting capability before real interviews:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 animate-slide-up">
                {analysis.revisions.map((ref, idx) => (
                  <div key={idx} className="flex gap-2 border border-white/5 p-3.5 bg-white/[0.01] rounded-2xl items-start">
                    <Check className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5 pointer-events-none" />
                    <span className="text-xs text-slate-200 leading-normal font-sans">{ref}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Primary Actions Drawer */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onRestart}
          className="flex-1 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all text-white font-bold text-sm tracking-wide shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer select-none"
        >
          <RefreshCw className="w-4.5 h-4.5 pointer-events-none" />
          Retry Quiz Session
        </button>

        <button
          onClick={onGoHome}
          className="flex-1 py-3.5 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all text-slate-200 font-bold text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer select-none"
        >
          <Home className="w-4.5 h-4.5 pointer-events-none" />
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};
