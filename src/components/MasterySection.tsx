import React, { useState } from 'react';
import { Flame, CheckCircle2, Trophy, BookOpen, TrendingUp, Sparkles, Award, BarChart3, ChevronUp } from 'lucide-react';

export const MasterySection: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'all'>('week');

  const subjects = [
    { name: 'Mathematics', score: 82, trend: '+6%', masteredTopics: 6, color: 'from-[#6852F5] to-[#8A73FF]', bg: 'bg-[#6852F5]' },
    { name: 'Science', score: 74, trend: '+4%', masteredTopics: 5, color: 'from-emerald-500 to-teal-400', bg: 'bg-emerald-500' },
    { name: 'English', score: 91, trend: '+11%', masteredTopics: 4, color: 'from-violet-500 to-indigo-400', bg: 'bg-indigo-500' },
    { name: 'History', score: 46, trend: '+2%', masteredTopics: 2, color: 'from-amber-500 to-orange-400', bg: 'bg-amber-500' },
  ];

  // SVG Radial Gauge calculation for 75%
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (75 / 100) * circumference;

  return (
    <section id="mastery" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6852F5] dark:text-[#8A73FF]">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Mastery & Analytics Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#131329] dark:text-white font-display">
            See your learning become mastery.
          </h2>
          <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
            Know what you understand, what needs work, and what you have already mastered.
          </p>

          {/* Timeframe Filter Buttons */}
          <div className="flex items-center justify-center gap-1.5 p-1 bg-white dark:bg-[#161427] rounded-xl border border-slate-200 dark:border-white/10 w-fit mx-auto mt-4">
            {(['week', 'month', 'all'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all capitalize cursor-pointer ${
                  timeframe === t
                    ? 'bg-[#6852F5] text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {t === 'week' ? 'This Week' : t === 'month' ? 'Last 30 Days' : 'All Time'}
              </button>
            ))}
          </div>
        </div>

        {/* Analytics Dashboard Grid */}
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Top 4 KPI Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Streak */}
            <div className="p-5 rounded-3xl bg-white dark:bg-[#161427] border border-slate-200/80 dark:border-white/5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Consistency</span>
                <div className="w-8 h-8 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                  <Flame className="w-4 h-4 fill-orange-500" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#131329] dark:text-white font-display flex items-baseline gap-1.5">
                <span className="tabular-nums">5</span>
                <span className="text-sm font-semibold text-slate-500">day streak</span>
              </div>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <ChevronUp className="w-3.5 h-3.5" /> Top 5% of active students
              </p>
            </div>

            {/* Questions Solved */}
            <div className="p-5 rounded-3xl bg-white dark:bg-[#161427] border border-slate-200/80 dark:border-white/5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Practice</span>
                <div className="w-8 h-8 rounded-xl bg-[#6852F5]/10 text-[#6852F5] dark:text-[#8A73FF] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#131329] dark:text-white font-display tabular-nums">
                128
              </div>
              <p className="text-[11px] text-slate-500">questions solved</p>
            </div>

            {/* Quizzes Completed */}
            <div className="p-5 rounded-3xl bg-white dark:bg-[#161427] border border-slate-200/80 dark:border-white/5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Assessments</span>
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#131329] dark:text-white font-display tabular-nums">
                24
              </div>
              <p className="text-[11px] text-slate-500">quizzes completed</p>
            </div>

            {/* Topics Mastered */}
            <div className="p-5 rounded-3xl bg-white dark:bg-[#161427] border border-slate-200/80 dark:border-white/5 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Milestones</span>
                <div className="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#131329] dark:text-white font-display tabular-nums">
                17
              </div>
              <p className="text-[11px] text-[#6852F5] dark:text-[#8A73FF] font-semibold">
                topics mastered
              </p>
            </div>
          </div>

          {/* Master Dashboard Center Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Overall Mastery Radial Gauge */}
            <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-white via-white to-[#F7F5FF] dark:from-[#18162E] dark:to-[#121021] border border-[#6852F5]/20 dark:border-white/10 p-7 flex flex-col items-center justify-center text-center shadow-md">
              <div className="relative w-44 h-44 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 160 160">
                  {/* Background track circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    className="text-slate-100 dark:text-slate-800"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  {/* Gauge fill */}
                  <circle
                    cx="80"
                    cy="80"
                    r={radius}
                    className="text-[#6852F5] transition-all duration-1000 ease-out"
                    strokeWidth="12"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    stroke="url(#purpleGradient)"
                    fill="transparent"
                  />
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6852F5" />
                      <stop offset="100%" stopColor="#8A73FF" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-extrabold text-[#131329] dark:text-white font-display tabular-nums">
                    75%
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Mastery Index
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#131329] dark:text-white font-display mb-1">
                75% Overall Mastery
              </h3>
              <p className="text-xs text-[#66677D] dark:text-slate-300 max-w-xs leading-relaxed">
                Consistently demonstrating retention across key units. Ready for end-of-semester exam practice.
              </p>
            </div>

            {/* Subject Mastery Progress Bars */}
            <div className="lg:col-span-7 rounded-3xl bg-white dark:bg-[#161427] border border-slate-200/80 dark:border-white/5 p-7 flex flex-col justify-between shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
                <div>
                  <h3 className="text-lg font-bold text-[#131329] dark:text-white font-display">
                    Subject Breakdown
                  </h3>
                  <p className="text-xs text-[#66677D] dark:text-slate-400">
                    Calculated from accuracy, retention spacing, and hint reliance
                  </p>
                </div>
                <span className="text-xs font-semibold text-[#6852F5] dark:text-[#8A73FF] flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 17 topics mastered
                </span>
              </div>

              <div className="space-y-4">
                {subjects.map((subj) => (
                  <div key={subj.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#131329] dark:text-white">{subj.name}</span>
                        <span className="text-[11px] text-slate-400">({subj.masteredTopics} topics locked in)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold">{subj.trend}</span>
                        <span className="font-extrabold text-[#131329] dark:text-white tabular-nums text-sm">
                          {subj.score}%
                        </span>
                      </div>
                    </div>

                    <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                      <div
                        className={`h-full bg-gradient-to-r ${subj.color} rounded-full transition-all duration-700`}
                        style={{ width: `${subj.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs text-[#66677D] dark:text-slate-400">
                <span>Updated continuously after every snap or quiz</span>
                <span className="text-[#6852F5] dark:text-[#8A73FF] font-semibold">Diagnostic details →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
