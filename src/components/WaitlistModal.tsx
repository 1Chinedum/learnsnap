import React, { useState } from 'react';
import { X, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEmail?: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'student' | 'parent' | 'educator'>('student');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0B0A16]/70 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white dark:bg-[#161427] border border-[#6852F5]/20 shadow-2xl transition-all p-7 z-10">
        {/* Glow corner */}
        <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#8A73FF]/25 rounded-full blur-2xl pointer-events-none" />

        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide text-[#6852F5] dark:text-[#8A73FF]">
                <Sparkles className="w-3.5 h-3.5" /> EARLY ACCESS INVITATION
              </span>
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-[#131329] dark:text-white font-display mb-2">
              Be first to experience LearnSnap.
            </h3>
            <p className="text-sm text-[#66677D] dark:text-slate-300 mb-6 leading-relaxed">
              We're rolling out private access to students and educators. Join 8,400+ learners on the priority waitlist for iOS and Android.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#131329] dark:text-slate-200 mb-1.5">
                  I am a:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['student', 'parent', 'educator'] as const).map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all capitalize ${
                        role === r
                          ? 'border-[#6852F5] bg-[#6852F5]/10 text-[#6852F5] dark:border-[#8A73FF] dark:text-[#8A73FF] dark:bg-[#8A73FF]/15 font-semibold'
                          : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="waitlist-email" className="block text-xs font-semibold text-[#131329] dark:text-slate-200 mb-1.5">
                  Email Address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  placeholder="name@school.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#1E1C33] text-[#131329] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6852F5]/40 dark:focus:ring-[#8A73FF]/40 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 px-5 rounded-xl bg-[#6852F5] hover:bg-[#5840E8] text-white font-medium text-sm transition-all shadow-lg shadow-[#6852F5]/25 flex items-center justify-center gap-2 group disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Request Priority Access</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-[#66677D] dark:text-slate-400">
                  Zero spam. We will only notify you when your invite is ready.
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-2xl font-bold text-[#131329] dark:text-white font-display mb-2">
              You're on the list!
            </h4>
            <p className="text-sm text-[#66677D] dark:text-slate-300 mb-6 leading-relaxed">
              We've reserved your spot with <strong className="text-[#131329] dark:text-white">{email}</strong>. Look out for our welcome email and test invite soon.
            </p>
            <button
              onClick={handleReset}
              className="py-2.5 px-6 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Back to LearnSnap
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
