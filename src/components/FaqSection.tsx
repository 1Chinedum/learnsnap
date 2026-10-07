import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is LearnSnap?',
      a: 'LearnSnap is a personal AI tutor engineered specifically for students. Instead of merely spewing final answers like conventional chatbots, LearnSnap analyzes assignments, breaks them down into intuitive milestones, offers progressive hints, and tracks your subject mastery so you actually learn the underlying principles.',
    },
    {
      q: 'How does LearnSnap work?',
      a: 'Simply snap a photo of any assignment, handwritten homework problem, textbook page, or diagram using your phone. LearnSnap reads the question with computer vision, explains the core concept, offers step-by-step reasoning, checks your intermediate calculations, and generates adaptive practice variations.',
    },
    {
      q: 'Can I use LearnSnap for homework?',
      a: 'Yes, LearnSnap is built specifically for homework guidance. It acts as an empathetic, 24/7 personal tutor sitting beside you—guiding you through stuck moments, explaining why a step is taken, and ensuring your homework submission represents genuine personal comprehension.',
    },
    {
      q: 'Does LearnSnap give me the answer?',
      a: 'LearnSnap is intentionally designed NOT to simply dump answers. Our pedagogical framework uses Socratic scaffolding: we provide conceptual hints, verify your intermediate steps, and coach you to reach the answer yourself. This prevents academic integrity issues and ensures you will excel on in-class tests.',
    },
    {
      q: 'Can LearnSnap explain difficult topics?',
      a: 'Absolutely. From AP Calculus and Organic Chemistry to World History essays and English grammar, LearnSnap adjusts its explanations to your grade level and comprehension speed. You can ask for simpler analogies, real-world examples, or visual diagrams anytime.',
    },
    {
      q: 'When will the LearnSnap mobile app launch?',
      a: 'The LearnSnap mobile app is launching in Fall 2026 for both iOS and Android. Early access priority invites are being rolled out currently to students and educators on the waitlist.',
    },
    {
      q: 'Will LearnSnap be available on Android?',
      a: 'Yes! LearnSnap is launching with a native, optimized experience for Android smartphones and tablets on the Google Play Store.',
    },
    {
      q: 'Will LearnSnap be available on iPhone?',
      a: 'Yes! LearnSnap is engineered natively for iOS with support for Dynamic Island, Apple Pencil annotations on iPad, and offline photo processing via the Apple App Store.',
    },
    {
      q: 'Is LearnSnap free?',
      a: 'LearnSnap offers a generous free tier with daily snaps, guided step-by-step breakdowns, and core AI tutor chat. A premium tier with unlimited snaps, deep exam diagnostic simulation, and family accounts will be available at launch.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6852F5] dark:text-[#8A73FF]">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#131329] dark:text-white font-display">
            Questions, answered.
          </h2>
          <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
            Everything you need to know about LearnSnap and how it transforms student learning.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl transition-all border overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#161427] border-[#6852F5]/30 dark:border-[#8A73FF]/30 shadow-md shadow-[#6852F5]/5'
                    : 'bg-white/70 dark:bg-[#141224]/60 border-slate-200/80 dark:border-white/5 hover:border-[#6852F5]/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#131329] dark:text-white font-display">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#6852F5] text-white rotate-180'
                        : 'bg-[#EEEAFE] dark:bg-white/10 text-[#6852F5] dark:text-[#8A73FF]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#66677D] dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
