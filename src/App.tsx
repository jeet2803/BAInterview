import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Question, QuizSession, QuizMode, UserStats } from './types';
import questions from './data/questions';
import { MetricCard } from './components/MetricCard';
import { BadgeViewer, BADGES, getRank } from './components/BadgeViewer';
import { TopicSelector } from './components/TopicSelector';
import { QuestionBox } from './components/QuestionBox';
import { VisualScorecard } from './components/VisualScorecard';
import { synth } from './components/AudioSynth';
import {
  Award, Flame, Trophy, CheckCircle, Zap, ShieldAlert, Sparkles, HelpCircle, AlertCircle, Compass, Terminal, ShieldCheck, PlayCircle, BookOpen, RotateCcw
} from 'lucide-react';

const LOCAL_STORAGE_KEY = 'banking_ba_master_stats';

// Fisher-Yates element shuffler for mathematically sound randomization of question decks
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = temp;
  }
  return shuffled;
}

// Initialized to all zeros for a pure scratch starting experience
const DEFAULT_USER_STATS: UserStats = {
  currentStreak: 0,
  bestStreak: 0,
  totalSolved: 0,
  correctCount: 0,
  accuracy: 0,
  xp: 0,
  solvedQuestionIds: [],
  topicScores: {}
};

export default function App() {
  const [userStats, setUserStats] = useState<UserStats>(DEFAULT_USER_STATS);
  const [view, setView] = useState<'home' | 'quiz' | 'scorecard'>('home');
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [quizMode, setQuizMode] = useState<QuizMode>('practice');
  const [session, setSession] = useState<QuizSession | null>(null);
  const [justUnlockedBadge, setJustUnlockedBadge] = useState<string | null>(null);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Sync state with localStorage
  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Force flush of old pre-seeded telemetry data from the initial seed so it starts fresh from scratch
        if (parsed.xp === 1530 || parsed.totalSolved === 187 || parsed.correctCount === 153) {
          setUserStats(DEFAULT_USER_STATS);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USER_STATS));
        } else {
          setUserStats(parsed);
        }
      } catch (e) {
        console.error('Failed to parse user stats:', e);
        setUserStats(DEFAULT_USER_STATS);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USER_STATS));
      }
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_USER_STATS));
      setUserStats(DEFAULT_USER_STATS);
    }
  }, []);

  const saveStats = (newStats: UserStats) => {
    setUserStats(newStats);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newStats));
  };

  // Computes which topics the user got wrong to increase probability of showing them later
  const getWeakTopics = (): Record<string, boolean> => {
    const weak: Record<string, boolean> = {};
    Object.entries(userStats.topicScores).forEach(([topic, statsVal]) => {
      const stats = statsVal as { correct: number; total: number };
      const accuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 100;
      if (accuracy < 75) {
        weak[topic] = true;
      }
    });
    return weak;
  };

  // Launch pre-requisite questions according to game rules
  const handleStartSession = (modeSelected: QuizMode) => {
    synth.playClick();
    
    let deck: Question[] = [];
    const weakTopics = getWeakTopics();

    if (modeSelected === 'scenario') {
      // Filter scenario-based simulated items
      deck = shuffleArray([...questions].filter(q => q.isScenario));
    } else if (selectedTopic !== null) {
      // Pick targeted topic
      deck = shuffleArray([...questions].filter(q => q.topic === selectedTopic));
    } else {
      // Mixed Deck: 30% Easy, 50% Medium, 20% Hard composition where possible
      const easy = shuffleArray([...questions].filter(q => q.difficulty === 'Easy'));
      const medium = shuffleArray([...questions].filter(q => q.difficulty === 'Medium'));
      const hard = shuffleArray([...questions].filter(q => q.difficulty === 'Hard'));

      const size = modeSelected === 'challenge' ? 15 : 10;
      const easyCount = Math.round(size * 0.3); // 3 or 5
      const hardCount = Math.round(size * 0.2); // 2 or 3
      const medCount = size - easyCount - hardCount; // 5 or 7

      const selectedEasy = easy.slice(0, easyCount);
      const selectedMedium = medium.slice(0, medCount);
      const selectedHard = hard.slice(0, hardCount);

      const combined = [...selectedEasy, ...selectedMedium, ...selectedHard];
      
      // Smart Learning Prioritization: Push questions of historically failed topics first!
      combined.sort((a, b) => {
        const aWeak = weakTopics[a.topic] ? 1 : 0;
        const bWeak = weakTopics[b.topic] ? 1 : 0;
        return bWeak - aWeak; // Descending, so weak topics float to front
      });

      deck = combined;
    }

    // Slice to desired size to prevent repeating same questions in a session
    const limit = modeSelected === 'challenge' ? 15 : 10;
    let finalDeck = deck.slice(0, limit);

    // Safety fallback in case filtered pools are small
    if (finalDeck.length === 0) {
      finalDeck = shuffleArray([...questions]).slice(0, limit);
    }

    // Always shuffle the final selected deck one last time for maximum unpredictable sequence
    deck = shuffleArray(finalDeck);

    setQuizMode(modeSelected);
    setSession({
      mode: modeSelected,
      selectedTopic: selectedTopic,
      questions: deck,
      currentIndex: 0,
      selectedAnswers: {},
      answeredAt: {},
      xpEarned: 0,
      streak: 0,
      bestStreak: 0,
      startTime: Date.now()
    });

    setView('quiz');
  };

  const handleAnswerSelected = (answer: 'A' | 'B' | 'C' | 'D', timeTakenSeconds: number) => {
    if (!session) return;

    const currentQuestion = session.questions[session.currentIndex];
    const isCorrect = answer === currentQuestion.answer;

    // Calculate interactive state bumps
    const updatedAnswers = { ...session.selectedAnswers, [session.currentIndex]: answer };
    const updatedTimeTaken = { ...session.answeredAt, [session.currentIndex]: timeTakenSeconds };
    
    const newStreak = isCorrect ? session.streak + 1 : 0;
    const newBestStreak = Math.max(session.bestStreak, newStreak);
    const newXPEarned = session.xpEarned + (isCorrect ? 10 : 0);

    setSession({
      ...session,
      selectedAnswers: updatedAnswers,
      answeredAt: updatedTimeTaken,
      streak: newStreak,
      bestStreak: newBestStreak,
      xpEarned: newXPEarned
    });

    // Sync metrics immediately back to user profile state to feed achievements
    const isFirstTimeSolved = !userStats.solvedQuestionIds.includes(currentQuestion.id);
    const updatedSolvedIds = isFirstTimeSolved 
      ? [...userStats.solvedQuestionIds, currentQuestion.id]
      : userStats.solvedQuestionIds;

    const currentTopicStats = userStats.topicScores[currentQuestion.topic] || { correct: 0, total: 0 };
    const updatedTopicScores = {
      ...userStats.topicScores,
      [currentQuestion.topic]: {
        correct: currentTopicStats.correct + (isCorrect ? 1 : 0),
        total: currentTopicStats.total + 1
      }
    };

    const newTotalSolved = isFirstTimeSolved ? userStats.totalSolved + 1 : userStats.totalSolved;
    const newCorrectCount = isFirstTimeSolved 
      ? userStats.correctCount + (isCorrect ? 1 : 0)
      : userStats.correctCount + (isCorrect ? 1 : 0); // Accumulate correct hits

    const newAccuracy = Math.round((newCorrectCount / newTotalSolved) * 100);
    const updatedAllStreak = isCorrect ? userStats.currentStreak + 1 : 0;
    const updatedBestStreak = Math.max(userStats.bestStreak, updatedAllStreak);
    const updatedTotalXP = userStats.xp + (isCorrect ? 10 : 0);

    // Check for newly unlocked milestone badges
    let unlockedBadge: string | null = null;
    BADGES.forEach((badge) => {
      // Check if they crossed the threshold just now
      if (newCorrectCount >= badge.threshold && userStats.correctCount < badge.threshold) {
        unlockedBadge = badge.id;
      }
    });

    if (unlockedBadge) {
      setJustUnlockedBadge(unlockedBadge);
    }

    saveStats({
      currentStreak: updatedAllStreak,
      bestStreak: updatedBestStreak,
      totalSolved: newTotalSolved,
      correctCount: newCorrectCount,
      accuracy: newAccuracy,
      xp: updatedTotalXP,
      solvedQuestionIds: updatedSolvedIds,
      topicScores: updatedTopicScores
    });
  };

  const handleNextQuestion = () => {
    if (!session) return;
    synth.playClick();

    if (session.currentIndex + 1 < session.questions.length) {
      setSession({
        ...session,
        currentIndex: session.currentIndex + 1
      });
    } else {
      // Quiz completed!
      setSession({
        ...session,
        endTime: Date.now()
      });
      setView('scorecard');
    }
  };

  const handleRestartQuiz = () => {
    if (!session) return;
    handleStartSession(session.mode);
  };

  const handleDismissBadgeAlert = () => {
    setJustUnlockedBadge(null);
  };

  // Compute breakdown for active session's scoreboard
  const getSessionTopicPerformance = () => {
    if (!session) return {};
    const perf: Record<string, { correct: number; total: number }> = {};
    
    session.questions.forEach((q, idx) => {
      const ans = session.selectedAnswers[idx];
      const isCorrect = ans === q.answer;

      if (!perf[q.topic]) {
        perf[q.topic] = { correct: 0, total: 0 };
      }
      perf[q.topic].total += 1;
      if (isCorrect) {
        perf[q.topic].correct += 1;
      }
    });

    return perf;
  };

  const sessionPerformance = getSessionTopicPerformance();
  const activeQuestion = session ? session.questions[session.currentIndex] : null;

  // Compute accuracy of current active session
  const getSessionAccuracy = () => {
    if (!session) return 0;
    let correct = 0;
    const answeredCount = Object.keys(session.selectedAnswers).length;
    if (answeredCount === 0) return 0;

    Object.entries(session.selectedAnswers).forEach(([idxStr, ans]) => {
      const idx = parseInt(idxStr);
      if (ans === session.questions[idx].answer) {
        correct += 1;
      }
    });

    return Math.round((correct / answeredCount) * 100);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 selection:text-white pb-12 relative overflow-x-hidden">
      {/* Background Atmospheric Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Primary Navigation Hub */}
      <header className="sticky top-0 z-40 bg-slate-900/40 border-b border-white/10 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => setView('home')}>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 border border-white/10">
              <Trophy className="w-5.5 h-5.5 text-white pointer-events-none" />
            </div>
            <div>
              <h1 className="text-sm font-bold tracking-tight uppercase font-display bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                Banking BA Master
              </h1>
              <p className="text-[10px] text-slate-400 font-mono tracking-wider leading-none">BANKING & PAYMENTS DOMAIN</p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-4 md:gap-6 text-center">
              <div className="flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-none mb-1">Streak</span>
                <span className="text-sm font-bold text-orange-400 flex items-center gap-0.5">🔥 {userStats.currentStreak}</span>
              </div>
              <div className="h-6 w-px bg-white/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-none mb-1">Accuracy</span>
                <span className="text-sm font-bold text-blue-400">{userStats.accuracy}%</span>
              </div>
              <div className="h-6 w-px bg-white/10"></div>
              <div className="hidden sm:flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-none mb-1">Rank</span>
                <span className="text-xs font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {getRank(userStats.correctCount).title}
                </span>
              </div>
              <div className="hidden sm:h-6 sm:w-px sm:bg-white/10"></div>
              <div className="flex flex-col items-center">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-semibold leading-none mb-1">XP</span>
                <span className="text-sm font-bold text-purple-400">{userStats.xp}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Canvas */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 mt-6">
        <AnimatePresence mode="wait">
          {/* View Router */}
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8 animate-fade-in"
            >
              {/* Gamification Status Bar */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold tracking-tight font-display text-white">
                      🏦 Banking BA Interview Master
                    </h2>
                    <p className="text-xs text-slate-400">
                      Acquire elite level core banking, remittance, and UPI technical confidence through dopamine-driven testing sprints.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      synth.playClick();
                      setShowResetConfirm(true);
                    }}
                    className="text-xs font-mono font-medium text-rose-400 hover:text-white hover:bg-rose-500/10 border border-rose-500/25 hover:border-rose-500/50 transition-all py-1.5 px-3 rounded-xl bg-rose-500/5 flex items-center gap-1.5 cursor-pointer max-w-fit select-none shrink-0"
                  >
                    <RotateCcw className="w-3.5 h-3.5 pointer-events-none" />
                    Reset Progress
                  </button>
                </div>

                {/* Grid of Key Gamification Badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-scale-up">
                  <MetricCard
                    id="streak_card"
                    icon={Flame}
                    label="Current Streak"
                    value={`🔥 ${userStats.currentStreak}`}
                    color="rose"
                    subValue={`Best: ${userStats.bestStreak}`}
                  />
                  <MetricCard
                    id="accuracy_card"
                    icon={CheckCircle}
                    label="Accuracy Rating"
                    value={`${userStats.accuracy}%`}
                    color="green"
                    subValue={`${userStats.correctCount} correct`}
                  />
                  <MetricCard
                    id="solved_card"
                    icon={BookOpen}
                    label="Questions Solved"
                    value={userStats.totalSolved}
                    color="blue"
                    subValue="All topics"
                  />
                  <MetricCard
                    id="rank_card"
                    icon={Trophy}
                    label="Candidate Rank"
                    value={getRank(userStats.correctCount).title.split(' ')[0]} // Take first word for card density
                    color="purple"
                    subValue={getRank(userStats.correctCount).title}
                  />
                </div>
              </div>

              {/* Mode Control Station */}
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl space-y-6 shadow-2xl backdrop-blur-sm">
                <div className="space-y-1">
                  <h3 className="text-sm font-bold tracking-wider uppercase text-slate-400 font-mono">
                    CHOOSE YOUR CHALLENGE RUN
                  </h3>
                  <p className="text-xs text-slate-500">
                    Different gameplay modes regulate time pressure and analytical feedback.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    onClick={() => handleStartSession('practice')}
                    className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-500/10 hover:border-blue-500/50 text-left transition-all duration-300 flex flex-col justify-between h-44 cursor-pointer select-none group shadow-lg"
                  >
                    <div className="p-2 bg-blue-500/10 text-blue-400 rounded-xl group-hover:scale-110 transition-transform w-fit border border-blue-500/20">
                      <Compass className="w-5.5 h-5.5 pointer-events-none" />
                    </div>
                    <div className="space-y-1 mt-4">
                      <h4 className="text-sm font-bold text-slate-100 uppercase">Practice Deck</h4>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        10 random questions, details, tips, and memory tricks shown after each option. Perfect for learning at your own pace.
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleStartSession('scenario')}
                    className="p-5 rounded-2xl border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 hover:border-purple-500/50 text-left transition-all duration-300 flex flex-col justify-between h-44 cursor-pointer select-none group shadow-lg"
                  >
                    <div className="p-2 bg-purple-500/10 text-purple-400 rounded-xl group-hover:scale-110 transition-transform w-fit border border-purple-500/20">
                      <AlertCircle className="w-5.5 h-5.5 pointer-events-none" />
                    </div>
                    <div className="space-y-1 mt-4">
                      <h4 className="text-sm font-bold text-slate-100 uppercase">Scenario Mode</h4>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        Only high-stakes custom interview scenarios! Scopes, change requests, team bottlenecks, and transaction crises.
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleStartSession('challenge')}
                    className="p-5 rounded-2xl border border-rose-500/20 bg-rose-500/5 hover:bg-rose-500/10 hover:border-rose-500/50 text-left transition-all duration-300 flex flex-col justify-between h-44 cursor-pointer select-none group shadow-lg"
                  >
                    <div className="p-2 bg-rose-500/10 text-rose-400 rounded-xl group-hover:scale-110 transition-transform w-fit border border-rose-500/20">
                      <ShieldCheck className="w-5.5 h-5.5 pointer-events-none" />
                    </div>
                    <div className="space-y-1 mt-4">
                      <h4 className="text-sm font-bold text-slate-100 uppercase">Speed Challenge</h4>
                      <p className="text-[11px] text-slate-400 leading-normal">
                        15 mixed domain questions. 20-second active timer, no indicators or hints until final committee verdict report.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Interactive Topic Select Grid */}
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl shadow-2xl backdrop-blur-sm">
                <TopicSelector
                  selectedTopic={selectedTopic}
                  onSelectTopic={setSelectedTopic}
                  topicScores={userStats.topicScores}
                />
              </div>

              {/* Badge Collection list */}
              <div className="p-6 bg-white/[0.03] border border-white/10 rounded-3xl shadow-2xl backdrop-blur-sm">
                <BadgeViewer correctCount={userStats.correctCount} />
              </div>
            </motion.div>
          )}

          {view === 'quiz' && session && activeQuestion && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="max-w-3xl mx-auto"
            >
              <QuestionBox
                question={activeQuestion}
                questionNumber={session.currentIndex + 1}
                totalQuestions={session.questions.length}
                mode={session.mode}
                currentStreak={session.streak}
                currentScore={session.xpEarned}
                onAnswerSelected={handleAnswerSelected}
                onNextQuestion={handleNextQuestion}
                storedSelectedAnswer={session.selectedAnswers[session.currentIndex]}
              />
            </motion.div>
          )}

          {view === 'scorecard' && session && (
            <motion.div
              key="scorecard"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto"
            >
              <VisualScorecard
                totalQuestions={session.questions.length}
                correctAnswers={Object.entries(session.selectedAnswers).filter(([idx, ans]) => ans === session.questions[parseInt(idx)].answer).length}
                wrongAnswers={session.questions.length - Object.entries(session.selectedAnswers).filter(([idx, ans]) => ans === session.questions[parseInt(idx)].answer).length}
                accuracy={getSessionAccuracy()}
                xpEarned={session.xpEarned}
                bestStreak={session.bestStreak}
                timeSpentSeconds={Math.round(( (session.endTime || Date.now()) - session.startTime) / 1000)}
                mode={session.mode}
                topicPerformance={sessionPerformance}
                onRestart={handleRestartQuiz}
                onGoHome={() => {
                  synth.playClick();
                  setView('home');
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Gamified Achievements Micro-modal Alert Overlay */}
      <AnimatePresence>
        {justUnlockedBadge && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full bg-zinc-900 border border-zinc-800 p-6 rounded-3xl shadow-2xl space-y-6 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse pointer-events-none" />

              <div className="mx-auto w-16 h-16 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center animate-bounce">
                <Trophy className="w-8 h-8 text-indigo-400 pointer-events-none" />
              </div>

              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 font-mono">BADGE ACQUIRED!</p>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {BADGES.find(b => b.id === justUnlockedBadge)?.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-normal px-4">
                  "{BADGES.find(b => b.id === justUnlockedBadge)?.description}"
                </p>
              </div>

              <div className="py-2.5 px-4 bg-zinc-950 rounded-xl border border-zinc-850 mx-6">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wide">Professional Reward Bracket triggered</span>
              </div>

              <button
                onClick={handleDismissBadgeAlert}
                className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-bold text-sm tracking-wide shadow-md shadow-indigo-600/30 transition-all cursor-pointer font-sans select-none"
              >
                Claim Reward & Return
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dynamic Reset confirmation modal overlay */}
      <AnimatePresence>
        {showResetConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-md w-full bg-slate-900 border border-white/10 p-6 rounded-3xl shadow-2xl space-y-6 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-rose-500 pointer-events-none" />

              <div className="mx-auto w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                <ShieldAlert className="w-5.5 h-5.5 pointer-events-none" />
              </div>

              <div className="space-y-1.5">
                <p className="text-[10px] uppercase font-bold tracking-widest text-rose-400 font-mono">SYSTEM RESET DECK</p>
                <h3 className="text-lg font-bold text-white tracking-tight">Reset All Progress?</h3>
                <p className="text-xs text-slate-400 leading-relaxed px-4">
                  This will immediately clear your streaks, XP scores, solved milestones, and reset all metrics down to a clean slate. This process is irreversible!
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    synth.playClick();
                    setShowResetConfirm(false);
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-white/10 text-xs font-semibold text-slate-300 hover:bg-white/5 transition-colors cursor-pointer select-none"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    saveStats(DEFAULT_USER_STATS);
                    setShowResetConfirm(false);
                    setView('home');
                    setSelectedTopic(null);
                    setSession(null);
                    setJustUnlockedBadge(null);
                    synth.playClick();
                  }}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-xs font-semibold text-white transition-all shadow-md shadow-rose-600/25 cursor-pointer select-none"
                >
                  Yes, Reset Scratch
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
