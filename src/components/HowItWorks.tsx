import React, { useState } from 'react';
import { Camera, BrainCircuit, Trophy, ArrowRight, Check, Sparkles } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Snap it.',
      headline: 'Take a photo of your assignment or difficult question.',
      description: 'Point your camera at handwritten homework, textbook problems, worksheets, or diagrams. LearnSnap instantly parses equations, text, graphs, and questions.',
      icon: Camera,
      tag: 'Instant OCR & Multi-subject',
      preview: {
        title: 'Input: Calculus Problem #4',
        content: 'f(x) = 3x² - 12x + 7. Find critical points and inflection values.',
        status: 'Scanned in 0.4s',
      },
    },
    {
      num: '02',
      title: 'Understand it.',
      headline: 'LearnSnap breaks it down and explains every step.',
      description: 'Instead of dumping a raw answer, LearnSnap provides Socratic dialogue, visual breakdowns, conceptual intuition, and progressive hints so you genuinely understand the logic.',
      icon: BrainCircuit,
      tag: 'Socratic Step-by-Step Reasoning',
      preview: {
        title: 'Guided Breakdown',
        content: "Step 1: Compute first derivative f'(x) = 6x - 12. Set f'(x) = 0 to solve x = 2.",
        status: 'Interactive breakdown ready',
      },
    },
    {
      num: '03',
      title: 'Master it.',
      headline: 'Practice what you learned until you feel confident.',
      description: 'Solidify your memory with adaptive micro-quizzes, similar practice variations, spaced repetition, and gamified mastery benchmarks.',
      icon: Trophy,
      tag: 'Adaptive Practice & Retention',
      preview: {
        title: 'Challenge Variation Generated',
        content: "Try this on your own: Find the critical point for g(x) = 2x² - 8x + 5.",
        status: 'Streak +1 & Mastery +8%',
      },
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6852F5] dark:text-[#8A73FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>How LearnSnap Works</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#131329] dark:text-white font-display">
            Learning starts with a snap.
          </h2>
          <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
            A simple flow designed to move students from stuck to confident without skipping the learning.
          </p>
        </div>

        {/* 3 Premium Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.num}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-7 transition-all duration-300 cursor-pointer border flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-white dark:bg-[#161427] border-[#6852F5] dark:border-[#8A73FF] shadow-xl shadow-[#6852F5]/10 dark:shadow-[#8A73FF]/5 -translate-y-1'
                    : 'bg-white/70 dark:bg-[#121021]/60 border-slate-200/80 dark:border-white/5 hover:border-[#6852F5]/40 hover:-translate-y-0.5'
                }`}
              >
                {/* Glow pill behind number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-extrabold text-2xl text-[#6852F5] dark:text-[#8A73FF]">
                      {step.num}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">
                      Phase
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-gradient-to-tr from-[#6852F5] to-[#8A73FF] text-white shadow-md shadow-[#6852F5]/30'
                      : 'bg-[#EEEAFE] dark:bg-white/5 text-[#6852F5] dark:text-[#8A73FF] group-hover:scale-105'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h3 className="text-2xl font-bold tracking-tight text-[#131329] dark:text-white font-display">
                    {step.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-[#6852F5] dark:text-[#8A73FF]">
                    {step.headline}
                  </h4>
                  <p className="text-sm text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Micro-preview panel inside card */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 rounded-xl bg-slate-50/70 dark:bg-black/20 p-3.5 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#66677D] dark:text-slate-400">
                    <span>{step.preview.title}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                      <Check className="w-3 h-3" /> {step.preview.status}
                    </span>
                  </div>
                  <p className="text-[#131329] dark:text-slate-200 font-mono text-[11px] bg-white dark:bg-[#1E1C33] p-2 rounded-lg border border-slate-200/60 dark:border-white/5">
                    {step.preview.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
