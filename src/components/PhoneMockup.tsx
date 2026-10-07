import React, { useState } from 'react';
import {
  Camera,
  Flame,
  Home,
  BookOpen,
  Gamepad2,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Award
} from 'lucide-react';

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'snap' | 'practice' | 'games'>('home');
  const [isSnapping, setIsSnapping] = useState(false);
  const [snapStep, setSnapStep] = useState(0);

  const handleSnapDemo = () => {
    setActiveTab('snap');
    setIsSnapping(true);
    setSnapStep(1);
    setTimeout(() => setSnapStep(2), 1200);
    setTimeout(() => setSnapStep(3), 2400);
  };

  return (
    <div className="relative mx-auto flex items-center justify-center p-2 sm:p-4 select-none">
      {/* Soft purple ambient back-glow */}
      <div className="absolute w-72 h-96 sm:w-96 sm:h-[480px] bg-gradient-to-tr from-[#6852F5]/35 to-[#8A73FF]/25 rounded-full blur-3xl -z-10 animate-soft-glow pointer-events-none" />

      {/* Floating 3D perspective container */}
      <div className="relative group transition-transform duration-500 hover:scale-[1.02] animate-float-phone">
        {/* Smartphone Hardware Frame (Titanium Dark Finish) */}
        <div className="relative w-[300px] sm:w-[335px] h-[640px] sm:h-[675px] bg-[#0E0D18] p-3 rounded-[46px] shadow-[0_25px_60px_-15px_rgba(20,16,45,0.45),0_0_0_1px_rgba(255,255,255,0.12),0_0_40px_rgba(104,82,245,0.22)] ring-1 ring-white/10">
          {/* Subtle side button highlights */}
          <div className="absolute -left-[2px] top-28 w-[3px] h-10 bg-slate-700 rounded-l-sm" />
          <div className="absolute -left-[2px] top-42 w-[3px] h-12 bg-slate-700 rounded-l-sm" />
          <div className="absolute -right-[2px] top-32 w-[3px] h-14 bg-slate-700 rounded-r-sm" />

          {/* Screen Glass */}
          <div className="relative w-full h-full bg-[#0D0B1C] rounded-[36px] overflow-hidden flex flex-col border border-white/5 text-white shadow-inner font-sans">
            {/* Top Dynamic Island / Speaker Notch */}
            <div className="pt-2 px-6 pb-1 flex items-center justify-between z-20 bg-transparent text-[11px] font-medium text-slate-300">
              <span className="font-semibold tracking-tight">9:41</span>
              {/* Dynamic Island pill */}
              <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2 space-x-1 border border-white/10 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#1A182E] border border-white/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#6852F5] animate-pulse" />
              </div>
              <div className="flex items-center gap-1.5 opacity-80 text-[10px]">
                <span>5G</span>
                <div className="w-4 h-2 border border-slate-300 rounded-[2px] p-[0.5px] flex items-center">
                  <div className="w-full h-full bg-emerald-400 rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* Main Phone Content Screen */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3.5 scrollbar-none text-left">
              {activeTab === 'home' && (
                <>
                  {/* Greeting & Header */}
                  <div className="flex items-start justify-between pt-1">
                    <div>
                      <span className="text-[11px] font-medium text-[#8A73FF] tracking-wide block uppercase">
                        AI Tutor Ready
                      </span>
                      <h2 className="text-lg font-bold text-white tracking-tight leading-snug">
                        Good morning, Destiny
                      </h2>
                      <p className="text-[12px] text-slate-400">
                        You've learned <strong className="text-white font-semibold">9 of 12</strong> concepts.
                      </p>
                    </div>

                    {/* Streak Badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-500/15 to-orange-500/20 border border-orange-500/30 text-amber-300 text-xs font-semibold shadow-sm">
                      <Flame className="w-3.5 h-3.5 text-orange-400 fill-orange-400 animate-bounce" />
                      <span>5 day streak</span>
                    </div>
                  </div>

                  {/* Large Card: Snap Assignment */}
                  <div
                    onClick={handleSnapDemo}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleSnapDemo(); }}
                    className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#6852F5] via-[#7B62FF] to-[#9B84FF] p-4 text-white shadow-lg shadow-[#6852F5]/30 cursor-pointer group/card transition-all active:scale-[0.98] border border-white/20"
                  >
                    <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/10 rounded-full blur-xl pointer-events-none" />
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="space-y-1 pr-2">
                        <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/20 text-[10px] font-semibold tracking-wider uppercase text-white/95">
                          <Camera className="w-3 h-3" /> Quick Scan
                        </div>
                        <h3 className="text-base font-bold tracking-tight">Snap Assignment</h3>
                        <p className="text-[11px] text-white/85 leading-snug">
                          Take a photo and learn it step by step
                        </p>
                      </div>

                      <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/card:scale-110 transition-transform">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] font-medium text-white/90">
                      <span>Tap to simulate live scan</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Learning Progress Section */}
                  <div className="rounded-2xl bg-[#161427]/85 border border-[#8A73FF]/15 p-3.5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-white tracking-wide uppercase">
                        Learning Progress
                      </h4>
                      <span className="text-[11px] text-[#8A73FF] font-semibold">Weekly Goal</span>
                    </div>

                    {/* Maths — 82% */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">Maths</span>
                        <span className="font-semibold text-white tabular-nums">82%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6852F5] to-[#8A73FF] rounded-full w-[82%]" />
                      </div>
                    </div>

                    {/* Science — 74% */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">Science</span>
                        <span className="font-semibold text-white tabular-nums">74%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[74%]" />
                      </div>
                    </div>

                    {/* History — 46% */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-slate-200">History</span>
                        <span className="font-semibold text-white tabular-nums">46%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full w-[46%]" />
                      </div>
                    </div>
                  </div>

                  {/* Today's Focus Card */}
                  <div className="rounded-xl bg-[#121021] border border-white/5 p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#6852F5]/20 text-[#8A73FF] flex items-center justify-center">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-semibold text-white">Quadratic Equations</div>
                        <div className="text-[10px] text-slate-400">Mastery checkpoint in 3 questions</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#8A73FF] bg-[#6852F5]/10 px-2 py-1 rounded-md">
                      Resume
                    </span>
                  </div>
                </>
              )}

              {activeTab === 'snap' && (
                <div className="py-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Live Assignment Scan
                    </span>
                    <button
                      onClick={() => setActiveTab('home')}
                      className="text-[11px] text-[#8A73FF] font-semibold hover:underline"
                    >
                      Back to Home
                    </button>
                  </div>

                  <div className="relative aspect-[4/3] rounded-2xl bg-[#1A1830] border border-[#6852F5]/40 overflow-hidden flex flex-col items-center justify-center p-3 text-center">
                    {/* Viewfinder crosshairs */}
                    <div className="absolute inset-3 border border-dashed border-[#8A73FF]/40 rounded-xl pointer-events-none" />
                    
                    {snapStep <= 1 && (
                      <div className="space-y-2">
                        <div className="w-10 h-10 rounded-full bg-[#6852F5]/30 text-[#8A73FF] mx-auto flex items-center justify-center animate-pulse">
                          <Camera className="w-5 h-5" />
                        </div>
                        <p className="text-xs font-semibold text-white">Analyzing handwritten math...</p>
                        <span className="text-[10px] text-slate-400">2x + 6 = 18 detected</span>
                      </div>
                    )}

                    {snapStep === 2 && (
                      <div className="space-y-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-300 mx-auto flex items-center justify-center">
                          <Sparkles className="w-4 h-4 animate-spin" />
                        </div>
                        <p className="text-xs font-semibold text-white">Generating Guided Hints</p>
                        <span className="text-[10px] text-slate-400">Step 1 breakdown ready</span>
                      </div>
                    )}

                    {snapStep >= 3 && (
                      <div className="space-y-1.5 text-left w-full px-2">
                        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Ready for Destiny
                        </div>
                        <div className="p-2 bg-black/40 rounded-lg text-[11px] font-mono text-purple-200">
                          Step 1: Subtract 6 from both sides → 2x = 12
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-3 rounded-xl bg-[#161427] border border-white/5 space-y-2">
                    <span className="text-[11px] font-semibold text-slate-300">Tutor Mode</span>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      "I won't give you the final answer right away. Let's solve x together!"
                    </p>
                    <button
                      onClick={() => setSnapStep((s) => (s >= 3 ? 1 : s + 1))}
                      className="w-full py-1.5 rounded-lg bg-[#6852F5] text-white text-xs font-semibold cursor-pointer"
                    >
                      {snapStep >= 3 ? 'Restart Demo' : 'Advance Next Step'}
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'practice' && (
                <div className="py-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Practice Arena
                    </span>
                    <button
                      onClick={() => setActiveTab('home')}
                      className="text-[11px] text-[#8A73FF] font-semibold hover:underline"
                    >
                      Back to Home
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#161427] border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-purple-300">Daily Practice #14</span>
                      <span className="text-[10px] text-slate-400">5 min</span>
                    </div>
                    <p className="text-xs font-medium text-white">
                      Solve for y: 4y - 8 = 20
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div className="p-2 rounded-lg bg-[#201D38] text-center text-xs text-slate-200 hover:bg-[#6852F5] hover:text-white cursor-pointer transition-colors">
                        y = 5
                      </div>
                      <div className="p-2 rounded-lg bg-[#201D38] text-center text-xs text-slate-200 hover:bg-[#6852F5] hover:text-white cursor-pointer transition-colors">
                        y = 7
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'games' && (
                <div className="py-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Mastery Games
                    </span>
                    <button
                      onClick={() => setActiveTab('home')}
                      className="text-[11px] text-[#8A73FF] font-semibold hover:underline"
                    >
                      Back to Home
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#161427] border border-white/10 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                      <Gamepad2 className="w-4 h-4" /> Speed Algebra Showdown
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Answer 10 rapid-fire questions to boost your 5-day streak!
                    </p>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 w-3/4 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom App Navigation Bar (Home, Snap, Practice, Games) */}
            <div className="px-3 py-2 bg-[#0C0A1A]/95 border-t border-white/10 backdrop-blur-md flex items-center justify-around z-20">
              <button
                type="button"
                onClick={() => setActiveTab('home')}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'home' ? 'text-[#8A73FF]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="text-[9px] font-semibold tracking-wide">Home</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('snap');
                  setIsSnapping(true);
                  setSnapStep(1);
                }}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'snap' ? 'text-[#8A73FF]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#6852F5] to-[#8A73FF] flex items-center justify-center text-white shadow-sm -mt-2">
                  <Camera className="w-3.5 h-3.5" />
                </div>
                <span className="text-[9px] font-semibold tracking-wide">Snap</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('practice')}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'practice' ? 'text-[#8A73FF]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-[9px] font-semibold tracking-wide">Practice</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('games')}
                className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-lg transition-colors cursor-pointer ${
                  activeTab === 'games' ? 'text-[#8A73FF]' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span className="text-[9px] font-semibold tracking-wide">Games</span>
              </button>
            </div>

            {/* Home indicator bar */}
            <div className="w-24 h-1 bg-white/30 rounded-full mx-auto my-1.5 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
