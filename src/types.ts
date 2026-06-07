export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export interface Question {
  id: string;
  topic: string;
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  interviewTip: string;
  memoryTrick: string;
  realExample: string;
  whyOthersWrong: {
    [key in 'A' | 'B' | 'C' | 'D']?: string;
  };
  isScenario: boolean;
  difficulty: Difficulty;
}

export interface UserStats {
  currentStreak: number;
  bestStreak: number;
  totalSolved: number;
  accuracy: number;
  correctCount: number;
  xp: number;
  solvedQuestionIds: string[];
  topicScores: Record<string, { correct: number; total: number }>;
}

export type QuizMode = 'practice' | 'scenario' | 'challenge';

export interface QuizSession {
  mode: QuizMode;
  selectedTopic: string | null; // null means 'Mixed'
  questions: Question[];
  currentIndex: number;
  selectedAnswers: Record<number, 'A' | 'B' | 'C' | 'D'>;
  answeredAt: Record<number, number>; // timestamps for time taken
  xpEarned: number;
  streak: number;
  bestStreak: number;
  startTime: number;
  endTime?: number;
}
