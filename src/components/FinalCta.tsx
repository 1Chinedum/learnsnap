import React from 'react';
import { ArrowRight, Sparkles, Smartphone } from 'lucide-react';

interface FinalCtaProps {
  onOpenWaitlist: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] bg-gradient-to-br from-[#6852F5] via-[#7B62FF] to-[#8A73FF] p-8 sm:p-14 lg:p-16 text-white text-center shadow-2xl shadow-[#6852F5]/25 overflow-hidden">
          {/* Subtle decorative glow circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            {/* Small label */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wide backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start with curiosity</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-tight">
              Ready to learn smarter?
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-white/90 leading-relaxed font-normal">
              Your next difficult question could be your next breakthrough.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#131329] hover:bg-slate-100 font-bold text-sm transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 group cursor-pointer active:scale-95"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenWaitlist}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-black/25 hover:bg-black/35 text-white font-semibold text-sm transition-all border border-white/20 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <Smartphone className="w-4 h-4" />
                <span>Coming Soon on iOS & Android</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
