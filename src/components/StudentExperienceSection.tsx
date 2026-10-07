import React from 'react';
import { BookOpen, GraduationCap, RotateCcw, CalendarCheck, Sparkles, Check } from 'lucide-react';

export const StudentExperienceSection: React.FC = () => {
  const experiences = [
    {
      title: 'Homework',
      subtitle: 'Understand difficult assignments.',
      description: 'Stop getting stuck at 11 PM without help. LearnSnap breaks down complex problem sets without doing the work for you.',
      icon: BookOpen,
      accent: 'from-blue-500/10 to-indigo-500/15 border-blue-500/20 text-blue-600 dark:text-blue-400',
      tag: 'Assignment Companion',
      metrics: 'No more stalled evenings',
    },
    {
      title: 'Exam Prep',
      subtitle: 'Practice before your next test.',
      description: 'Simulate real test conditions with timed quizzes and diagnostic reviews targeting high-probability exam concepts.',
      icon: GraduationCap,
      accent: 'from-[#6852F5]/10 to-[#8A73FF]/15 border-[#6852F5]/20 text-[#6852F5] dark:text-[#8A73FF]',
      tag: 'Test Readiness',
      metrics: 'Targeted weakness drills',
    },
    {
      title: 'Revision',
      subtitle: 'Review topics you struggle with.',
      description: 'Smart spaced repetition flags concepts where your mastery score slipped, scheduling low-friction refreshers before you forget.',
      icon: RotateCcw,
      accent: 'from-amber-500/10 to-orange-500/15 border-amber-500/20 text-amber-600 dark:text-amber-400',
      tag: 'Spaced Repetition',
      metrics: 'Long-term memory retention',
    },
    {
      title: 'Daily Learning',
      subtitle: 'Build consistent learning habits.',
      description: '5-minute micro-sessions keep momentum alive every day. Track streaks, unlock badges, and watch overall comprehension climb.',
      icon: CalendarCheck,
      accent: 'from-emerald-500/10 to-teal-500/15 border-emerald-500/20 text-emerald-600 dark:text-emerald-400',
      tag: 'Habit Formation',
      metrics: 'Streak & confidence engine',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#EEEAFE]/20 dark:bg-[#0E0C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6852F5] dark:text-[#8A73FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#131329] dark:text-white font-display">
            Built for the way students actually learn.
          </h2>
          <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
            Whether preparing for midterm exams, tackling nightly problem sets, or locking in lifelong fundamentals.
          </p>
        </div>

        {/* Four Distinct Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className="rounded-3xl p-6 sm:p-7 bg-white dark:bg-[#161427] border border-slate-200/80 dark:border-white/5 hover:border-[#6852F5]/40 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${exp.accent} border flex items-center justify-center mb-6 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    {exp.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-[#131329] dark:text-white font-display mb-1">
                    {exp.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-[#6852F5] dark:text-[#8A73FF] mb-3">
                    {exp.subtitle}
                  </h4>
                  <p className="text-xs text-[#66677D] dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>{exp.metrics}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
