import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Smartphone, ShieldCheck } from 'lucide-react';

interface ComingSoonCtaProps {
  onOpenWaitlist: () => void;
}

export const ComingSoonCta: React.FC<ComingSoonCtaProps> = ({ onOpenWaitlist }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#0A0915] text-white">
      {/* Animated purple ambient light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#6852F5]/30 via-[#8A73FF]/25 to-transparent rounded-full blur-[120px] pointer-events-none animate-soft-glow" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#8A73FF]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#8A73FF] text-xs font-semibold tracking-wide">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Mobile Launching Fall 2026</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display max-w-3xl mx-auto leading-tight">
          LearnSnap is coming to your phone.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          Your personal AI tutor will soon be available wherever you learn. Turn homework confusion into effortless mastery anywhere, anytime.
        </p>

        {/* App Store & Google Play Badges marked COMING SOON */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* App Store */}
          <div className="flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all shadow-lg shadow-black/20 text-left">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.54c.64-.78 1.08-1.87.96-2.96-.93.04-2.07.62-2.73 1.4-.58.68-1.1 1.77-.96 2.83 1.04.08 2.09-.53 2.73-1.27z"/>
            </svg>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#A390FF]">
                Coming Soon
              </div>
              <div className="text-sm font-bold text-white">
                App Store for iOS
              </div>
            </div>
          </div>

          {/* Google Play */}
          <div className="flex items-center gap-3.5 px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md transition-all shadow-lg shadow-black/20 text-left">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-1.42V3.234c0-.53.22-1.03.609-1.42zm11.242 11.245l2.08 2.08-11.89 6.84 9.81-8.92zm2.08-2.08l2.97 1.71c.79.45.79 1.19 0 1.64l-2.97 1.71-2.42-2.53 2.42-2.53zm-2.08-2.08l-9.81-8.92 11.89 6.84-2.08 2.08z"/>
            </svg>
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#A390FF]">
                Coming Soon
              </div>
              <div className="text-sm font-bold text-white">
                Google Play Store
              </div>
            </div>
          </div>
        </div>

        {/* Inline VIP Access Form */}
        <div className="max-w-md mx-auto pt-6">
          {!subscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your student email..."
                className="flex-1 px-4 py-3.5 rounded-2xl bg-white/10 border border-white/15 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#8A73FF] text-sm backdrop-blur-sm"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-2xl bg-[#6852F5] hover:bg-[#5840E8] text-white font-semibold text-sm transition-all shadow-lg shadow-[#6852F5]/40 flex items-center justify-center gap-2 cursor-pointer shrink-0"
              >
                <span>Notify Me</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center justify-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>You're on the priority notification list!</span>
            </div>
          )}

          <p className="text-xs text-slate-400 pt-3 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#8A73FF]" />
            <span>Private beta spots limited. Priority given to verified schools.</span>
          </p>
        </div>
      </div>
    </section>
  );
};
