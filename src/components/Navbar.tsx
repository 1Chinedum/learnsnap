import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleTheme,
  onOpenWaitlist,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Mastery', href: '#mastery' },
    { label: 'Features', href: '#features' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-sm border-b border-[#6852F5]/10 dark:border-white/5 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark & Icon */}
            <a
              href="#"
              className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6852F5] rounded-lg"
              aria-label="LearnSnap Home"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#6852F5] via-[#8A73FF] to-[#B89BFF] flex items-center justify-center shadow-md shadow-[#6852F5]/25 group-hover:scale-105 transition-transform duration-200">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-[#131329] dark:text-white">
                LearnSnap
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-[#66677D] dark:text-slate-300 hover:text-[#6852F5] dark:hover:text-[#8A73FF] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#6852F5] dark:after:bg-[#8A73FF] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions (Theme Toggle & Coming Soon) */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Light/Dark Toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className="p-2 rounded-xl text-[#66677D] dark:text-slate-300 hover:text-[#131329] dark:hover:text-white hover:bg-[#EEEAFE]/60 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6852F5]"
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Coming Soon Button */}
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold rounded-xl text-white bg-[#6852F5] hover:bg-[#5840E8] transition-all shadow-md shadow-[#6852F5]/25 hover:shadow-lg hover:shadow-[#6852F5]/35 whitespace-nowrap cursor-pointer active:scale-95"
              >
                Coming Soon
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-xl text-[#66677D] dark:text-slate-300 hover:text-[#131329] dark:hover:text-white hover:bg-[#EEEAFE]/60 dark:hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6852F5]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] z-30 p-4 md:hidden">
          <div className="rounded-2xl glass-nav p-5 border border-[#6852F5]/15 dark:border-white/10 shadow-xl space-y-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#131329] dark:text-white hover:text-[#6852F5] dark:hover:text-[#8A73FF] py-1.5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="pt-2 border-t border-slate-200 dark:border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-[#6852F5] hover:bg-[#5840E8] transition-all text-center cursor-pointer shadow-md shadow-[#6852F5]/25"
              >
                Coming Soon — Get Early Access
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
