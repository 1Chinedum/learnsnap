import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Bot, User, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'student' | 'tutor';
  text: string;
  timestamp: string;
  highlight?: string;
  quizOptions?: string[];
}

export const AiTutorSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'student',
      text: 'Can you explain photosynthesis in simple terms?',
      timestamp: '10:14 AM',
    },
    {
      id: '2',
      sender: 'tutor',
      text: 'Think of photosynthesis as the way plants make their own food. Plants use sunlight, water, and carbon dioxide to make energy-rich food.',
      timestamp: '10:14 AM',
      highlight: 'Sunlight + Water + CO₂ → Glucose + Oxygen',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState<number | null>(null);

  const suggestionReplies: Record<string, { student: string; tutor: string; highlight?: string; quiz?: string[] }> = {
    'Explain this simply': {
      student: 'Can you explain this even more simply?',
      tutor: 'Imagine plants are solar-powered chefs! Their leaves are tiny solar kitchens that capture sun rays to turn water and air into sweet sugar treats.',
      highlight: 'Plants = Solar Chefs ☀️🌱',
    },
    'Give me an example': {
      student: 'Give me a real-world example.',
      tutor: 'Look at a sunflower in your garden: when its leaves face the sun, microscopic chloroplasts are capturing photons like mini solar panels, generating sugar to grow taller.',
      highlight: 'Sunflower following the morning sun 🌻',
    },
    'Give me a hint': {
      student: 'Give me a hint for remembering the formula.',
      tutor: 'Remember the acronym "SWC" (Sun, Water, Carbon). In goes SWC, out comes Glucose and oxygen for you to breathe!',
      highlight: 'S-W-C in, O₂ + Food out! 💨',
    },
    'Quiz me': {
      student: 'Quiz me on this concept!',
      tutor: 'Quick check: What essential gas do plants absorb from the air during photosynthesis?',
      quiz: ['Carbon Dioxide (CO₂)', 'Pure Oxygen (O₂)', 'Nitrogen (N₂)'],
    },
  };

  const handleSuggestion = (promptKey: string) => {
    if (isTyping) return;
    const item = suggestionReplies[promptKey];
    if (!item) return;

    const studentMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      text: item.student,
      timestamp: '10:15 AM',
    };

    setMessages((prev) => [...prev, studentMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const tutorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'tutor',
        text: item.tutor,
        timestamp: '10:15 AM',
        highlight: item.highlight,
        quizOptions: item.quiz,
      };
      setMessages((prev) => [...prev, tutorMsg]);
      setIsTyping(false);
      setSelectedQuizAnswer(null);
    }, 900);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim() || isTyping) return;

    const userText = inputVal.trim();
    setInputVal('');

    const studentMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      text: userText,
      timestamp: '10:16 AM',
    };

    setMessages((prev) => [...prev, studentMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const tutorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'tutor',
        text: `Great question about "${userText}". As your tutor, let's break this down into the core intuition first before looking at the textbook formulas!`,
        timestamp: '10:16 AM',
      };
      setMessages((prev) => [...prev, tutorMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section className="py-20 md:py-28 bg-[#EEEAFE]/30 dark:bg-[#0E0C1C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6852F5] dark:text-[#8A73FF]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Tutor Conversation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#131329] dark:text-white font-display">
            Meet your personal AI tutor.
          </h2>
          <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
            Ask questions. Get explanations. Learn at your own pace.
          </p>
        </div>

        {/* AI Chat Interface Mockup */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-white dark:bg-[#151326] border border-[#6852F5]/20 dark:border-white/10 shadow-2xl shadow-[#6852F5]/10 overflow-hidden flex flex-col">
          {/* Header Bar */}
          <div className="px-6 py-4 bg-gradient-to-r from-white to-[#F7F5FF] dark:from-[#1A1830] dark:to-[#141226] border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#6852F5] to-[#8A73FF] flex items-center justify-center text-white shadow-md shadow-[#6852F5]/25">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-[#151326]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#131329] dark:text-white">LearnSnap Tutor</h4>
                <p className="text-[11px] text-[#66677D] dark:text-slate-400">Biology & Natural Sciences · Online</p>
              </div>
            </div>

            <span className="text-[11px] font-semibold text-[#6852F5] dark:text-[#8A73FF] px-2.5 py-1 rounded-full bg-[#6852F5]/10 dark:bg-[#8A73FF]/15">
              Socratic Mode Active
            </span>
          </div>

          {/* Conversation Stream */}
          <div className="p-6 sm:p-8 space-y-5 min-h-[380px] max-h-[460px] overflow-y-auto bg-slate-50/40 dark:bg-[#121021]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 items-start ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'tutor' && (
                  <div className="w-8 h-8 rounded-xl bg-[#6852F5]/10 dark:bg-[#6852F5]/20 text-[#6852F5] dark:text-[#8A73FF] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[78%] space-y-2 ${msg.sender === 'student' ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`rounded-2xl p-4 text-sm leading-relaxed shadow-sm ${
                      msg.sender === 'student'
                        ? 'bg-[#6852F5] text-white rounded-tr-none'
                        : 'bg-white dark:bg-[#1C1A32] text-[#131329] dark:text-white border border-slate-200/70 dark:border-white/5 rounded-tl-none'
                    }`}
                  >
                    <p>{msg.text}</p>

                    {msg.highlight && (
                      <div className="mt-3 p-2.5 rounded-xl bg-[#EEEAFE] dark:bg-black/30 border border-[#6852F5]/20 text-xs font-semibold text-[#6852F5] dark:text-[#A390FF]">
                        {msg.highlight}
                      </div>
                    )}

                    {msg.quizOptions && (
                      <div className="mt-3 space-y-2">
                        {msg.quizOptions.map((opt, oIdx) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedQuizAnswer(oIdx)}
                            className={`w-full text-left p-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                              selectedQuizAnswer === oIdx
                                ? oIdx === 0
                                  ? 'bg-emerald-500/15 border-emerald-500 text-emerald-700 dark:text-emerald-300 font-semibold'
                                  : 'bg-rose-500/15 border-rose-500 text-rose-700 dark:text-rose-300'
                                : 'bg-slate-50 dark:bg-black/20 border-slate-200 dark:border-white/10 hover:border-[#6852F5]'
                            }`}
                          >
                            <span className="font-bold mr-2">{String.fromCharCode(65 + oIdx)}.</span> {opt}
                            {selectedQuizAnswer === oIdx && oIdx === 0 && ' ✓ Correct!'}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 px-1 inline-block">{msg.timestamp}</span>
                </div>

                {msg.sender === 'student' && (
                  <div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Subtle Typing Animation Indicator */}
            {isTyping && (
              <div className="flex gap-3 items-center text-slate-400 text-xs pl-2">
                <div className="w-7 h-7 rounded-lg bg-[#6852F5]/10 text-[#6852F5] flex items-center justify-center">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1 bg-white dark:bg-[#1C1A32] px-3 py-2 rounded-2xl border border-slate-200/60 dark:border-white/5">
                  <span className="w-1.5 h-1.5 bg-[#6852F5] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-[#6852F5] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-[#6852F5] rounded-full animate-bounce" />
                </div>
                <span className="text-[11px] text-[#6852F5] font-medium">LearnSnap is preparing explanation...</span>
              </div>
            )}
          </div>

          {/* Prompt Suggestions Bar */}
          <div className="px-6 py-3 bg-white dark:bg-[#151326] border-t border-slate-100 dark:border-white/5">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Try asking:
            </div>
            <div className="flex flex-wrap gap-2">
              {['Explain this simply', 'Give me an example', 'Give me a hint', 'Quiz me'].map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSuggestion(prompt)}
                  disabled={isTyping}
                  className="px-3 py-1.5 rounded-xl text-xs font-medium bg-[#EEEAFE]/60 dark:bg-[#1E1B38] text-[#6852F5] dark:text-[#8A73FF] hover:bg-[#6852F5] hover:text-white dark:hover:bg-[#6852F5] dark:hover:text-white transition-all cursor-pointer disabled:opacity-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Chat Input */}
          <form
            onSubmit={handleCustomSend}
            className="p-4 bg-white dark:bg-[#151326] border-t border-slate-100 dark:border-white/5 flex items-center gap-3"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about homework, concepts, or formulas..."
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#1E1B38] border border-slate-200/80 dark:border-white/10 text-sm text-[#131329] dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6852F5]/40"
            />
            <button
              type="submit"
              disabled={!inputVal.trim() || isTyping}
              className="p-2.5 rounded-xl bg-[#6852F5] hover:bg-[#5840E8] text-white disabled:opacity-40 transition-all cursor-pointer"
              aria-label="Send question to AI tutor"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
