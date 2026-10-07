import React, { useState } from 'react';
import { ArrowDown, Check, X, AlertTriangle, Sparkles, Lightbulb, Compass, Dumbbell, Award, ArrowRight } from 'lucide-react';

export const LearnSnapDifference: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState<'compare' | 'deep-dive'>('compare');

  return (
    <section className="py-20 md:py-28 bg-[#EEEAFE]/40 dark:bg-[#0E0C1C] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#6852F5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6852F5] dark:text-[#8A73FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The LearnSnap Difference</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#131329] dark:text-white font-display text-balance">
            Don't just get the answer. Learn how to find it.
          </h2>
          <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
            Generic chatbots hand out answers that leave students helpless on exam day. LearnSnap mentors you through the problem-solving journey.
          </p>
        </div>

        {/* Visual Workflow Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Traditional AI Column (Negative Contrast) */}
          <div className="lg:col-span-5 rounded-3xl p-7 bg-white/70 dark:bg-[#141224]/80 border border-slate-200 dark:border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/5">
                <div>
                  <span className="text-xs font-semibold text-rose-500 uppercase tracking-wider block">
                    Generic Chatbots
                  </span>
                  <h3 className="text-xl font-bold text-[#131329] dark:text-white font-display">
                    Traditional AI
                  </h3>
                </div>
                <div className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-500 flex items-center justify-center">
                  <X className="w-5 h-5" />
                </div>
              </div>

              {/* Traditional Flow */}
              <div className="py-8 space-y-4 text-center">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-[#1A182E] border border-slate-200 dark:border-white/5 font-medium text-sm text-[#131329] dark:text-slate-200">
                  Question
                </div>

                <div className="flex justify-center text-slate-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-rose-700 dark:text-rose-300 font-semibold text-sm">
                  Raw Answer Dump
                </div>

                {/* Outcome Callout */}
                <div className="mt-8 p-4 rounded-2xl bg-slate-50 dark:bg-[#110F20] border border-slate-200/60 dark:border-white/5 text-left space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-600 dark:text-rose-400">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>The Cheating Trap</span>
                  </div>
                  <ul className="text-xs text-[#66677D] dark:text-slate-400 space-y-1.5 list-disc pl-4">
                    <li>Zero conceptual understanding gained</li>
                    <li>Students freeze when variables change on tests</li>
                    <li>Parents and schools detect generic AI output</li>
                    <li>Forgotten completely in 24 hours</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-white/5 text-center text-xs text-slate-400 font-medium">
              Result: Dependency & Exam Anxiety
            </div>
          </div>

          {/* LearnSnap Column (Heroic Violet/Purple Flow) */}
          <div className="lg:col-span-7 rounded-3xl p-8 bg-gradient-to-b from-white via-white to-[#F7F5FF] dark:from-[#1A1832] dark:via-[#161427] dark:to-[#121021] border-2 border-[#6852F5] shadow-2xl shadow-[#6852F5]/15 flex flex-col justify-between relative">
            {/* Top glowing badge */}
            <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#6852F5] to-[#8A73FF] text-white text-[11px] font-bold tracking-wider uppercase shadow-md shadow-[#6852F5]/30">
              ✦ The LearnSnap Way
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#6852F5]/15">
                <div>
                  <span className="text-xs font-semibold text-[#6852F5] dark:text-[#8A73FF] uppercase tracking-wider block">
                    Pedagogical AI Tutor
                  </span>
                  <h3 className="text-2xl font-bold text-[#131329] dark:text-white font-display">
                    LearnSnap Guided Flow
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-[#6852F5] text-white flex items-center justify-center shadow-md shadow-[#6852F5]/30">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* The Seven-Stage LearnSnap Pathway */}
              <div className="py-6 space-y-2.5">
                {[
                  { title: 'Question', desc: 'Snap photo of assignment or problem', icon: Compass, color: 'border-slate-300 dark:border-slate-700' },
                  { title: 'Explanation', desc: 'Break down underlying principles without spoiling the answer', icon: Lightbulb, color: 'border-[#6852F5]/40 text-[#6852F5] dark:text-[#8A73FF]' },
                  { title: 'Hint', desc: 'Targeted nudge targeting where you are stuck', icon: Sparkles, color: 'border-[#8A73FF]/40 text-[#6852F5] dark:text-[#8A73FF]' },
                  { title: 'Step-by-step reasoning', desc: 'Guided mathematical & logical checkpoints', icon: Check, color: 'border-[#6852F5]/50 text-[#6852F5] dark:text-[#8A73FF]' },
                  { title: 'Practice', desc: 'Immediate similar exercise to verify skill acquisition', icon: Dumbbell, color: 'border-emerald-500/40 text-emerald-600 dark:text-emerald-400' },
                  { title: 'Understanding', desc: 'Full mastery, retaining concepts for future exams', icon: Award, color: 'border-purple-600 bg-[#6852F5] text-white' },
                ].map((item, idx, arr) => {
                  const Icon = item.icon;
                  const isLast = idx === arr.length - 1;
                  return (
                    <React.Fragment key={item.title}>
                      <div
                        className={`flex items-center gap-3.5 p-3 rounded-2xl border transition-all ${
                          isLast
                            ? 'bg-gradient-to-r from-[#6852F5] to-[#8A73FF] text-white border-transparent shadow-lg shadow-[#6852F5]/30'
                            : 'bg-white/90 dark:bg-[#1E1C33]/90 border-slate-200 dark:border-white/10 hover:border-[#6852F5]/40'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                            isLast ? 'bg-white/20 text-white' : 'bg-[#EEEAFE] dark:bg-white/10 text-[#6852F5] dark:text-[#8A73FF]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`text-xs font-bold ${isLast ? 'text-white' : 'text-[#131329] dark:text-white'}`}>
                            {item.title}
                          </div>
                          <div className={`text-[11px] truncate ${isLast ? 'text-white/85' : 'text-[#66677D] dark:text-slate-400'}`}>
                            {item.desc}
                          </div>
                        </div>
                      </div>

                      {!isLast && (
                        <div className="flex justify-center -my-1 text-[#8A73FF]">
                          <ArrowDown className="w-3.5 h-3.5 opacity-60" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[#6852F5]/15 flex items-center justify-between text-xs text-[#6852F5] dark:text-[#8A73FF] font-semibold">
              <span>Retention rate: 4.2x higher than answer engines</span>
              <Award className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
