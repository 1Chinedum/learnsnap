import React from 'react';
import { ArrowRight, Sparkles, Smartphone } from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';

interface HeroSectionProps {
  onOpenWaitlist: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#EEEAFE]/80 via-[#EEEAFE]/30 to-transparent dark:from-[#6852F5]/15 dark:via-[#161427]/10 dark:to-transparent rounded-[100%] blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-[#8A73FF]/15 dark:bg-[#8A73FF]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Typography */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow Label (Zero-pill compliant clean text with subtle glow icon) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#6852F5]/10 dark:bg-[#6852F5]/20 border border-[#6852F5]/20 text-[#6852F5] dark:text-[#8A73FF] text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-powered learning, built for understanding</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-[#131329] dark:text-white font-display leading-[1.08] text-balance">
              Snap It.{' '}
              <span className="bg-gradient-to-r from-[#6852F5] via-[#8A73FF] to-[#A390FF] bg-clip-text text-transparent inline-block">
                Understand It.
              </span>{' '}
              Master It.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Take a photo of any assignment and LearnSnap teaches you how to solve it, one step at a time. It explains, gives hints, and checks your work — so you actually learn, not just get the answer.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-[#6852F5] hover:bg-[#5840E8] text-white font-semibold text-sm transition-all shadow-xl shadow-[#6852F5]/30 hover:shadow-2xl hover:shadow-[#6852F5]/40 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>Coming Soon</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href="#snap-demo"
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white dark:bg-[#1A1830] text-[#131329] dark:text-white border border-[#6852F5]/20 dark:border-white/10 hover:border-[#6852F5]/40 font-semibold text-sm transition-all shadow-sm hover:shadow-md text-center flex items-center justify-center gap-2"
              >
                <span>Explore LearnSnap</span>
              </a>
            </div>

            {/* App Store & Google Play Badges (Marked COMING SOON) */}
            <div className="pt-4 border-t border-[#6852F5]/10 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-left">
              {/* App Store Badge */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-[#161427]/80 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <svg className="w-5 h-5 text-[#131329] dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.64-.78 1.08-1.87.96-2.96-.93.04-2.07.62-2.73 1.4-.58.68-1.1 1.77-.96 2.83 1.04.08 2.09-.53 2.73-1.27z"/>
                </svg>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#6852F5] dark:text-[#8A73FF]">
                    Coming Soon
                  </div>
                  <div className="text-xs font-bold text-[#131329] dark:text-white">
                    App Store
                  </div>
                </div>
              </div>

              {/* Google Play Badge */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-[#161427]/80 border border-slate-200 dark:border-white/10 shadow-sm backdrop-blur-sm">
                <svg className="w-5 h-5 text-[#131329] dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.42V3.234c0-.53.22-1.03.609-1.42zm11.242 11.245l2.08 2.08-11.89 6.84 9.81-8.92zm2.08-2.08l2.97 1.71c.79.45.79 1.19 0 1.64l-2.97 1.71-2.42-2.53 2.42-2.53zm-2.08-2.08l-9.81-8.92 11.89 6.84-2.08 2.08z"/>
                </svg>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#6852F5] dark:text-[#8A73FF]">
                    Coming Soon
                  </div>
                  <div className="text-xs font-bold text-[#131329] dark:text-white">
                    Google Play
                  </div>
                </div>
              </div>

              {/* Trust Signal */}
              <div className="flex items-center gap-2 text-xs text-[#66677D] dark:text-slate-400 pl-1">
                <Smartphone className="w-4 h-4 text-[#6852F5]" />
                <span>Optimized for iOS 18 & Android 15</span>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic 3D Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
};
