import React from 'react';
import { Camera, ListTree, Lightbulb, MessageSquareCode, Dumbbell, LineChart, Sparkles } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Snap & Solve',
      description: 'Take a picture of a question and start learning. LearnSnap recognizes handwriting, mathematical equations, chemistry symbols, and word problems.',
      icon: Camera,
      tag: 'OCR & Multi-Modal',
    },
    {
      title: 'Step-by-Step Explanations',
      description: 'Understand exactly how the solution works. Transparent logic broken down into digestible milestones with conceptual intuition behind each step.',
      icon: ListTree,
      tag: 'Zero Mystery Steps',
    },
    {
      title: 'Smart Hints',
      description: 'Get guidance without immediately revealing the answer. Progressively unlocks nudges so your brain builds the mental pathways to solve it alone.',
      icon: Lightbulb,
      tag: 'Socratic Methodology',
    },
    {
      title: 'AI Tutor',
      description: 'Ask questions naturally and receive personalized explanations. Tailored to your grade level, learning speed, and preferred explanation style.',
      icon: MessageSquareCode,
      tag: '24/7 Personal Mentor',
    },
    {
      title: 'Practice',
      description: 'Turn what you learned into practice questions. Automatically creates similar challenge variations to reinforce what you just worked on.',
      icon: Dumbbell,
      tag: 'Adaptive Generation',
    },
    {
      title: 'Mastery Tracking',
      description: 'See your progress and understand what you need to improve. Visual dashboards pinpointing subject confidence, streak stamina, and exam readiness.',
      icon: LineChart,
      tag: 'Diagnostic Analytics',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6852F5] dark:text-[#8A73FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#131329] dark:text-white font-display">
            Everything you need to learn better.
          </h2>
          <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
            Designed from cognitive science principles to turn confusion into clarity and confidence.
          </p>
        </div>

        {/* 6 Elegant Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative rounded-3xl p-7 bg-white dark:bg-[#161427] border border-slate-200/80 dark:border-white/5 hover:border-[#6852F5]/40 dark:hover:border-[#8A73FF]/40 shadow-sm hover:shadow-xl hover:shadow-[#6852F5]/10 dark:hover:shadow-[#8A73FF]/5 transition-all duration-300 -translate-y-0 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon and tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEEAFE] dark:bg-white/10 text-[#6852F5] dark:text-[#8A73FF] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#6852F5] group-hover:text-white transition-all duration-200 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      {feat.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#131329] dark:text-white font-display mb-2 group-hover:text-[#6852F5] dark:group-hover:text-[#8A73FF] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-white/5 flex items-center text-xs font-semibold text-[#6852F5] dark:text-[#8A73FF] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore workflow →</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
