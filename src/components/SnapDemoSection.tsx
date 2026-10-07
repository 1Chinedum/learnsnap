import React, { useState } from 'react';
import { Camera, Sparkles, Check, Lightbulb, ChevronRight, HelpCircle, RefreshCw } from 'lucide-react';

interface AssignmentProblem {
  id: string;
  category: string;
  question: string;
  context: string;
  steps: {
    title: string;
    action: string;
    math: string;
    explanation: string;
  }[];
  hint: string;
  checkWork: string;
}

const DEMO_PROBLEMS: AssignmentProblem[] = [
  {
    id: 'algebra',
    category: 'Algebra I',
    question: 'Find the value of x: 2x + 6 = 18',
    context: 'Linear equation with single variable isolate technique',
    steps: [
      {
        title: 'Step 1: Isolate the variable term',
        action: 'Subtract 6 from both sides of the equation',
        math: '2x + 6 - 6 = 18 - 6  →  2x = 12',
        explanation: 'We use the subtraction property of equality to remove the constant term +6 and keep the equation balanced.',
      },
      {
        title: 'Step 2: Solve for x',
        action: 'Divide both sides by the coefficient 2',
        math: '2x / 2 = 12 / 2  →  x = 6',
        explanation: 'Dividing both sides isolates x with a coefficient of 1, revealing our potential root value.',
      },
      {
        title: 'Step 3: Verify the solution',
        action: 'Substitute x = 6 back into the original expression',
        math: '2(6) + 6 = 12 + 6 = 18  ✓',
        explanation: 'Left hand side equals right hand side (18 = 18). The solution is definitively verified.',
      },
    ],
    hint: '💡 Look at the operations applied to x: first it is multiplied by 2, then 6 is added. To undo them, apply inverse operations in reverse order: subtract 6 first!',
    checkWork: '2(6) + 6 = 12 + 6 = 18 (True equation)',
  },
  {
    id: 'physics',
    category: 'Physics',
    question: 'Calculate velocity: v = d / t where d = 150m and t = 12s',
    context: 'Uniform motion along a straight trajectory',
    steps: [
      {
        title: 'Step 1: Identify given variables & units',
        action: 'Write down values with SI units',
        math: 'Distance (d) = 150 meters, Time (t) = 12 seconds',
        explanation: 'Both units are already standard SI (meters and seconds), so no conversion is necessary before calculating.',
      },
      {
        title: 'Step 2: Substitute into motion formula',
        action: 'Evaluate ratio v = 150 / 12',
        math: 'v = 150 ÷ 12 = 12.5 m/s',
        explanation: 'Divide the scalar displacement by elapsed duration to obtain average velocity magnitude.',
      },
      {
        title: 'Step 3: Interpret physical significance',
        action: 'State the final velocity with vector magnitude',
        math: 'Velocity = 12.5 m/s forward',
        explanation: 'The object travels 12.5 meters for each passing second along the given axis.',
      },
    ],
    hint: '💡 Notice that 150 ÷ 12 can be simplified by dividing numerator and denominator by 6: 25 / 2 = 12.5!',
    checkWork: '12.5 m/s × 12s = 150m (Matches original distance)',
  },
  {
    id: 'chemistry',
    category: 'Chemistry',
    question: 'Balance the reaction: H₂ + O₂ → H₂O',
    context: 'Stoichiometry & Conservation of Mass',
    steps: [
      {
        title: 'Step 1: Count atoms on each side',
        action: 'Reactants vs Products comparison',
        math: 'Left: 2 H, 2 O  |  Right: 2 H, 1 O (Unbalanced Oxygen)',
        explanation: 'The law of conservation of mass states atoms cannot be created or destroyed. Oxygen is currently deficient on the right.',
      },
      {
        title: 'Step 2: Balance oxygen atoms',
        action: 'Add coefficient 2 to H₂O on the product side',
        math: 'H₂ + O₂ → 2 H₂O  (Now 4 H, 2 O on right)',
        explanation: 'Now oxygen is balanced with 2 atoms on each side, but hydrogen now has 4 atoms on the right and 2 on the left.',
      },
      {
        title: 'Step 3: Balance hydrogen atoms',
        action: 'Add coefficient 2 to H₂ on the reactant side',
        math: '2 H₂ + O₂ → 2 H₂O  ✓ (4 H and 2 O on both sides)',
        explanation: 'Both hydrogen (4) and oxygen (2) are completely conserved. The equation is now properly balanced.',
      },
    ],
    hint: '💡 Never change subscripts like the 2 in H₂O! Only change whole-number coefficients in front of the molecules.',
    checkWork: 'Reactants: 4 H, 2 O = Products: 4 H, 2 O (Mass conserved)',
  },
];

export const SnapDemoSection: React.FC = () => {
  const [selectedProblemId, setSelectedProblemId] = useState('algebra');
  const [activeStepTab, setActiveStepTab] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [userUnderstood, setUserUnderstood] = useState<boolean>(false);

  const problem = DEMO_PROBLEMS.find((p) => p.id === selectedProblemId) || DEMO_PROBLEMS[0];

  const handleSelectProblem = (id: string) => {
    setSelectedProblemId(id);
    setActiveStepTab(0);
    setShowHint(false);
    setUserUnderstood(false);
  };

  return (
    <section id="snap-demo" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6852F5] dark:text-[#8A73FF]">
            <Camera className="w-3.5 h-3.5" />
            <span>Interactive Guided Demo</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#131329] dark:text-white font-display">
            Your assignment just got easier.
          </h2>
          <p className="text-base sm:text-lg text-[#66677D] dark:text-slate-300 leading-relaxed font-normal">
            Snap a question, and LearnSnap turns it into a guided learning experience.
          </p>

          {/* Subject Switcher */}
          <div className="flex items-center justify-center gap-2 pt-2">
            {DEMO_PROBLEMS.map((p) => (
              <button
                type="button"
                key={p.id}
                onClick={() => handleSelectProblem(p.id)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  selectedProblemId === p.id
                    ? 'bg-[#6852F5] text-white shadow-md shadow-[#6852F5]/25 font-semibold'
                    : 'bg-white dark:bg-[#161427] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-[#6852F5]/40'
                }`}
              >
                {p.category}
              </button>
            ))}
          </div>
        </div>

        {/* Large Interactive Product Demonstration Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-[#151326] border border-[#6852F5]/20 dark:border-white/10 shadow-2xl shadow-[#6852F5]/10 overflow-hidden">
          {/* Mock Window Top Bar */}
          <div className="px-6 py-4 bg-slate-50/80 dark:bg-[#110F20]/90 border-b border-slate-100 dark:border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <span className="text-xs font-medium text-slate-400 dark:text-slate-500 pl-2">
                LearnSnap Guided Solver · Assignment Snapshot
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#6852F5] dark:text-[#8A73FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Tutor Live</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Scanned Question Banner */}
            <div className="rounded-2xl bg-[#EEEAFE]/50 dark:bg-[#1E1B38] border border-[#6852F5]/20 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6852F5] dark:text-[#8A73FF]">
                    Question
                  </span>
                  <span className="text-xs text-slate-400">· {problem.context}</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#131329] dark:text-white font-mono">
                  “{problem.question}”
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" /> Parsed Cleanly
                </span>
              </div>
            </div>

            {/* LearnSnap Explains Lead-in */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#1A1830] border border-slate-200/60 dark:border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#6852F5] dark:text-[#8A73FF]">
                <Sparkles className="w-4 h-4" />
                <span>LearnSnap explains:</span>
              </div>
              <p className="text-base font-semibold text-[#131329] dark:text-white leading-relaxed">
                “First, subtract 6 from both sides. Then divide by 2.”
              </p>
              <p className="text-xs text-[#66677D] dark:text-slate-400">
                Notice the inverse order of operations. Explore each step below to inspect the reasoning behind each transformation.
              </p>
            </div>

            {/* Interactive Chips: Step 1, Step 2, Step 3, 💡 Hint */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {problem.steps.map((step, idx) => (
                <button
                  type="button"
                  key={step.title}
                  onClick={() => {
                    setActiveStepTab(idx);
                    setShowHint(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                    activeStepTab === idx && !showHint
                      ? 'bg-[#6852F5] text-white shadow-md shadow-[#6852F5]/25 scale-105'
                      : 'bg-slate-100 dark:bg-[#1E1B38] text-slate-700 dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-[#252244]'
                  }`}
                >
                  <span className="w-4 h-4 rounded-full bg-white/20 text-center text-[10px] flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>Step {idx + 1}</span>
                </button>
              ))}

              {/* Hint Chip */}
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                  showHint
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25 scale-105'
                    : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border border-amber-300/40 dark:border-amber-700/40 hover:bg-amber-100/80'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>💡 Hint</span>
              </button>
            </div>

            {/* Dynamic Step Content Display */}
            {!showHint ? (
              <div className="rounded-2xl bg-gradient-to-br from-[#F7F5FF] to-white dark:from-[#18162E] dark:to-[#141226] border border-[#6852F5]/15 dark:border-white/5 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold text-[#6852F5] dark:text-[#8A73FF] uppercase tracking-wider">
                      Active Step {activeStepTab + 1} of {problem.steps.length}
                    </span>
                    <h4 className="text-lg font-bold text-[#131329] dark:text-white font-display">
                      {problem.steps[activeStepTab].title}
                    </h4>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-md bg-[#6852F5]/10 dark:bg-[#8A73FF]/15 text-[#6852F5] dark:text-[#8A73FF] font-medium">
                    {problem.steps[activeStepTab].action}
                  </span>
                </div>

                {/* Mathematical transformation banner */}
                <div className="p-4 rounded-xl bg-white dark:bg-[#0E0D1B] border border-slate-200/80 dark:border-white/10 font-mono text-base text-[#6852F5] dark:text-[#8A73FF] font-semibold text-center sm:text-left">
                  {problem.steps[activeStepTab].math}
                </div>

                {/* Explanation paragraph */}
                <p className="text-sm text-[#66677D] dark:text-slate-300 leading-relaxed">
                  {problem.steps[activeStepTab].explanation}
                </p>

                {/* Step Navigation Controls */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-200/60 dark:border-white/5 text-xs">
                  <button
                    type="button"
                    disabled={activeStepTab === 0}
                    onClick={() => setActiveStepTab((s) => Math.max(0, s - 1))}
                    className="font-medium text-slate-500 hover:text-slate-800 dark:hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
                  >
                    ← Previous Step
                  </button>

                  <div className="flex items-center gap-3">
                    {activeStepTab < problem.steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => setActiveStepTab((s) => s + 1)}
                        className="px-4 py-2 rounded-xl bg-[#6852F5] text-white font-semibold flex items-center gap-1.5 shadow-md shadow-[#6852F5]/20 hover:bg-[#5840E8] cursor-pointer"
                      >
                        <span>Next Step</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setUserUnderstood(true)}
                        className={`px-4 py-2 rounded-xl font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                          userUnderstood
                            ? 'bg-emerald-600 text-white'
                            : 'bg-[#6852F5] text-white hover:bg-[#5840E8]'
                        }`}
                      >
                        <Check className="w-4 h-4" />
                        <span>{userUnderstood ? 'Mastered & Verified ✓' : 'I Understand This Step'}</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              /* Hint Box */
              <div className="rounded-2xl bg-amber-50/90 dark:bg-amber-950/20 border border-amber-300 dark:border-amber-700/50 p-6 space-y-3">
                <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 text-sm font-bold">
                  <Lightbulb className="w-4 h-4" />
                  <span>Socratic Guidance & Conceptual Hint</span>
                </div>
                <p className="text-sm text-amber-900 dark:text-amber-100 font-medium leading-relaxed">
                  {problem.hint}
                </p>
                <div className="text-xs text-amber-700/80 dark:text-amber-300/80 pt-1">
                  LearnSnap hints stimulate your own memory pathways so you retain the method for quizzes.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
