import React from 'react';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenWaitlist: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWaitlist }) => {
  return (
    <footer className="border-t border-[#6852F5]/10 dark:border-white/5 bg-white/50 dark:bg-[#0B0916] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200/60 dark:border-white/5">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6852F5] via-[#8A73FF] to-[#B89BFF] flex items-center justify-center text-white shadow-md shadow-[#6852F5]/25">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-[#131329] dark:text-white">
                LearnSnap
              </span>
            </a>

            <p className="text-sm font-medium text-[#6852F5] dark:text-[#8A73FF]">
              “Snap it. Understand it. Master it.”
            </p>

            <p className="text-xs text-[#66677D] dark:text-slate-400 max-w-sm leading-relaxed">
              The luxury AI personal tutor designed to move students from stuck to confident with step-by-step reasoning, hints, and mastery tracking.
            </p>
          </div>

          {/* Links Column: Product */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#131329] dark:text-white">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-[#66677D] dark:text-slate-400">
              <li>
                <a href="#how-it-works" className="hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#mastery" className="hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors">
                  Mastery
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column: Company */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#131329] dark:text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-[#66677D] dark:text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors text-left cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors text-left cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Links Column: Legal */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#131329] dark:text-white">
              Legal & Stores
            </h4>
            <ul className="space-y-2 text-xs text-[#66677D] dark:text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenWaitlist}
                  className="hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors text-left cursor-pointer"
                >
                  Terms of Service
                </button>
              </li>
              <li className="pt-1 text-[#6852F5] dark:text-[#8A73FF] font-medium">
                App Store — Coming Soon
              </li>
              <li className="text-[#6852F5] dark:text-[#8A73FF] font-medium">
                Google Play — Coming Soon
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#66677D] dark:text-slate-400 gap-4">
          <p>© 2026 LearnSnap. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built for student mastery & understanding</span>
            <span aria-hidden="true">·</span>
            <span>Zero answer dumping</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
