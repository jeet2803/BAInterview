import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, QuizMode } from '../types';
import { synth } from './AudioSynth';
import {
  Zap, HelpCircle, Flame, Clock, Award, Star, BookOpen, AlertCircle,
  Lightbulb, Briefcase, KeyRound, HelpCircle as QuestionIcon, PlusCircle, CheckCircle, XCircle
} from 'lucide-react';

interface QuestionBoxProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  mode: QuizMode;
  currentStreak: number;
  currentScore: number;
  onAnswerSelected: (answer: 'A' | 'B' | 'C' | 'D', timeTakenSeconds: number) => void;
  onNextQuestion: () => void;
  storedSelectedAnswer?: 'A' | 'B' | 'C' | 'D';
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  question,
  questionNumber,
  totalQuestions,
  mode,
  currentStreak,
  currentScore,
  onAnswerSelected,
  onNextQuestion,
  storedSelectedAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [activeTab, setActiveTab] = useState<'explanation' | 'tip' | 'trick' | 'others'>('explanation');
  const [timeLeft, setTimeLeft] = useState<number>(20); // 20s countdown for Challenge mode
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const elapsedRef = useRef<NodeJS.Timeout | null>(null);

  // Sync state if question resets or stored answer changes (e.g. from historical views/review lists)
  useEffect(() => {
    setSelectedAnswer(storedSelectedAnswer || null);
    setActiveTab('explanation');
    setTimeLeft(20);
    setElapsedSeconds(0);
  }, [question.id, storedSelectedAnswer]);

  // Standard progressive stopwatch for questions
  useEffect(() => {
    elapsedRef.current = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      if (elapsedRef.current) clearInterval(elapsedRef.current);
    };
  }, [question.id]);

  // Challenge mode timer
  useEffect(() => {
    if (mode !== 'challenge' || selectedAnswer !== null) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeOut();
          return 0;
        }
        if (prev <= 5) {
          synth.playTimeWarning(); // tick the buzzer during high stakes
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, selectedAnswer, question.id]);

  const handleTimeOut = () => {
    // Automatically submit a blank choice or trigger wrong state
    synth.playIncorrect();
    setSelectedAnswer(null);
    // Auto-advance or log incorrect is triggered by scoring logic
    onAnswerSelected('A', 20); // default fallback
  };

  const handleOptionClick = (optionKey: 'A' | 'B' | 'C' | 'D') => {
    if (selectedAnswer !== null) return; // Prevent double clicking
    synth.playClick();
    setSelectedAnswer(optionKey);

    const isCorrect = optionKey === question.answer;
    if (isCorrect) {
      synth.playCorrect();
    } else {
      synth.playIncorrect();
    }

    onAnswerSelected(optionKey, elapsedSeconds);
  };

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Easy':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Hard':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
    }
  };

  const isAnswered = selectedAnswer !== null;
  const progressPercent = Math.round((questionNumber / totalQuestions) * 100);

  return (
    <div className="space-y-6">
      {/* HUD Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-slate-950/80 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-mono font-medium text-slate-400">
            Progress: {questionNumber} / {totalQuestions}
          </span>
          <div className="w-24 sm:w-36 bg-slate-900 h-2 rounded-full overflow-hidden border border-white/5 shadow-inner">
            <div
              className="bg-blue-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[10px] text-slate-500 font-mono">({progressPercent}%)</span>
        </div>

        <div className="flex items-center gap-3.5 self-stretch sm:self-auto justify-between">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs">
            <Award className="w-4 h-4 text-emerald-400 pointer-events-none" />
            <span className="font-sans font-semibold text-slate-200">Score: {currentScore} XP</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs">
            <Flame className="w-4 h-4 text-orange-405 pointer-events-none" />
            <span className="font-sans font-semibold text-slate-200">Streak: {currentStreak}</span>
          </div>

          {/* Clock timer */}
          <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg border text-xs font-mono ${
            mode === 'challenge'
              ? timeLeft <= 5 ? 'bg-rose-500/20 text-rose-400 border-rose-500/30 animate-pulse' : 'bg-amber-500/10 text-amber-400 border-amber-500/25'
              : 'bg-white/5 border-white/10 text-slate-450'
          }`}>
            <Clock className="w-4 h-4 pointer-events-none" />
            <span>
              {mode === 'challenge' ? `${timeLeft}s` : `${Math.floor(elapsedSeconds / 60)}m ${elapsedSeconds % 60}s`}
            </span>
          </div>
        </div>
      </div>

      {/* Main Card with Question */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-sm relative overflow-hidden space-y-6">
        {/* Glowing glass background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl pointer-events-none" />

        {/* Labels bar */}
        <div className="flex items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-wider border ${getDifficultyColor(question.difficulty)}`}>
              {question.difficulty}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase bg-slate-950 text-slate-300 border border-white/5 font-bold">
              {question.topic}
            </span>
            {question.isScenario && (
              <span className="px-2 py-0.5 rounded-md text-[9px] font-sans font-semibold uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Mock Interview Scenario
              </span>
            )}
          </div>
          <span className="text-[10px] font-mono text-slate-500">QID: {question.id}</span>
        </div>

        {/* Question Text */}
        <h2 className="text-lg sm:text-xl font-medium tracking-tight text-white leading-relaxed">
          {question.question}
        </h2>

        {/* Interactive Options list */}
        <div className="grid grid-cols-1 gap-3.5 pt-2">
          {(Object.keys(question.options) as ('A' | 'B' | 'C' | 'D')[]).map((key) => {
            const optionText = question.options[key];
            const isSelected = selectedAnswer === key;
            const isCorrectAnswer = question.answer === key;

            // Compute theme styling based on current state
            let optionStyle = 'bg-white/[0.02] border-white/5 text-slate-200 hover:bg-white/[0.05] hover:border-white/15';

            if (isAnswered) {
              if (isSelected && isCorrectAnswer) {
                // Correctly picked
                optionStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-300 pointer-events-none shadow-md shadow-emerald-500/5';
              } else if (isSelected && !isCorrectAnswer) {
                // Incorrectly picked
                optionStyle = 'bg-rose-500/10 border-rose-500 text-rose-300 pointer-events-none shadow-md shadow-rose-500/5';
              } else if (isCorrectAnswer) {
                // Not picked, but is correct answer (reveal)
                optionStyle = 'bg-emerald-500/5 border-emerald-500/60 text-emerald-300 pointer-events-none';
              } else {
                // Neutral option in answered block
                optionStyle = 'bg-white/[0.01] border-white/5 text-slate-550 pointer-events-none opacity-40';
              }
            }

            return (
              <motion.button
                key={key}
                disabled={isAnswered}
                whileHover={!isAnswered ? { scale: 1.01, x: 2 } : {}}
                whileTap={!isAnswered ? { scale: 0.99 } : {}}
                onClick={() => handleOptionClick(key)}
                className={`p-4 rounded-2xl border text-left flex items-start gap-4 transition-all duration-200 cursor-pointer w-full select-none ${optionStyle}`}
              >
                {/* Option Letter Circular Indicator */}
                <span className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold font-mono transition-colors ${
                  isAnswered
                    ? isCorrectAnswer
                      ? 'bg-emerald-500 text-slate-950'
                      : isSelected
                        ? 'bg-rose-500 text-white'
                        : 'bg-white/5 text-slate-500'
                    : 'bg-white/5 text-slate-400 group-hover:bg-white/10'
                }`}>
                  {key}
                </span>

                <span className="text-sm font-sans leading-relaxed flex-grow">
                  {optionText}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Answer Explanatory Feedback Sheet (Reveals after choice) */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`p-6 rounded-3xl border backdrop-blur-md overflow-hidden ${
              selectedAnswer === question.answer
                ? 'bg-emerald-950/15 border-emerald-500/20 shadow-lg shadow-emerald-500/5'
                : 'bg-rose-950/15 border-rose-500/20 shadow-lg shadow-rose-500/5'
            }`}
          >
            {/* Header banner */}
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 mb-4">
              <div className={`p-2 rounded-xl ${selectedAnswer === question.answer ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                {selectedAnswer === question.answer ? (
                  <CheckCircle className="w-5 h-5 pointer-events-none" />
                ) : (
                  <XCircle className="w-5 h-5 pointer-events-none" />
                )}
              </div>
              <div>
                <p className={`text-xs font-mono font-bold uppercase tracking-wider ${selectedAnswer === question.answer ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {selectedAnswer === question.answer ? 'Verdict: ✅ Correct Answer! (+10 XP)' : 'Verdict: ❌ Incorrect Response'}
                </p>
                <p className="text-xs text-zinc-400">
                  {selectedAnswer === question.answer ? 'Exceptional analysis.' : `Correct Key: ${question.answer}`}
                </p>
              </div>

              {/* Skip Next Button integrated directly in floating block */}
              <button
                id="next_button"
                onClick={onNextQuestion}
                className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-indigo-600/20 transition-all cursor-pointer font-sans select-none"
              >
                Next Question ➔
              </button>
            </div>

            {/* Custom Tab Panel Navigation */}
            <div className="flex gap-1.5 border-b border-zinc-800/60 pb-3 mb-4 overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab('explanation')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer select-none whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'explanation' ? 'bg-zinc-800/80 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 text-yellow-400 pointer-events-none" />
                Key Explanation
              </button>
              <button
                onClick={() => setActiveTab('tip')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer select-none whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'tip' ? 'bg-zinc-800/80 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5 text-blue-400 pointer-events-none" />
                Interview Pro-Tip
              </button>
              <button
                onClick={() => setActiveTab('trick')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer select-none whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'trick' ? 'bg-zinc-800/80 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5 text-purple-400 pointer-events-none" />
                Memory Trick Mnemonic
              </button>
              <button
                onClick={() => setActiveTab('others')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer select-none whitespace-nowrap flex items-center gap-1.5 ${
                  activeTab === 'others' ? 'bg-zinc-800/80 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <AlertCircle className="w-3.5 h-3.5 text-zinc-400 pointer-events-none" />
                Alternative Breakdown
              </button>
            </div>

            {/* Explanatory Body contents based on active tab */}
            <div className="text-zinc-300 text-xs sm:text-sm leading-relaxed p-1 bg-zinc-950/20 rounded-xl max-h-60 overflow-y-auto">
              {activeTab === 'explanation' && (
                <div className="space-y-3.5">
                  <p>{question.explanation}</p>
                  <div className="p-3.5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 mt-2 space-y-1">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 font-mono">Real-world Operational Example</div>
                    <p className="text-zinc-400 text-xs leading-relaxed">{question.realExample}</p>
                  </div>
                </div>
              )}

              {activeTab === 'tip' && (
                <div className="space-y-2">
                  <p className="font-medium text-blue-300">How to frame this in standard interviews:</p>
                  <p>{question.interviewTip}</p>
                </div>
              )}

              {activeTab === 'trick' && (
                <div className="space-y-2">
                  <p className="font-medium text-purple-300">Mnemonic / Association Trick:</p>
                  <p className="font-mono bg-zinc-950/80 p-3 rounded-lg border border-zinc-800 text-purple-200">
                    {question.memoryTrick}
                  </p>
                </div>
              )}

              {activeTab === 'others' && (
                <div className="space-y-3">
                  <p className="font-medium text-zinc-300">Why other suggestions are contractually incorrect:</p>
                  <div className="grid grid-cols-1 gap-2.5">
                    {(Object.keys(question.whyOthersWrong) as ('A' | 'B' | 'C' | 'D')[]).map((key) => (
                      <div key={key} className="flex gap-2.5 bg-zinc-950/30 p-2.5 rounded-lg border border-zinc-900/60">
                        <span className="font-bold text-rose-400 font-mono text-xs">{key}:</span>
                        <span className="text-xs text-zinc-400 leading-normal">{question.whyOthersWrong[key]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
