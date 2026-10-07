/* LearnSnap subscription prototype: ALL billing data lives here (mock only).
   Replace this file with real API data later; the components in billing.js only read from window.LS_MOCK. */
window.LS_MOCK = {
  today: "2026-10-07", // mock "today" so dates in the prototype stay consistent
  plans: {
    free: {
      id: "free", name: "Free", monthly: 0, yearly: 0,
      blurb: "For students getting started with smarter learning.",
      cta: "Start Learning Free",
      features: ["Limited AI tutor questions", "Limited assignment scans", "Basic explanations", "Basic practice questions", "Basic progress tracking", "Learning streak"]
    },
    pro: {
      id: "pro", name: "Pro", monthly: 999, yearly: 7999, badge: "Most popular",
      blurb: "For students who want unlimited AI-powered learning.",
      cta: "Start Pro",
      features: ["Unlimited AI tutor", "Unlimited assignment scans", "Step-by-step explanations", "Unlimited practice", "Personalized quizzes", "Advanced analytics", "Topic mastery tracking", "Learning history", "Personalized recommendations"]
    },
    family: {
      id: "family", name: "Family", monthly: 1999, yearly: 15999,
      blurb: "For families learning together.",
      cta: "Choose Family",
      features: ["Everything in Pro", "Up to 5 student profiles", "Individual dashboards", "Individual progress tracking", "Parent progress overview", "Personalized recommendations", "Shared family plan", "Priority support"]
    }
  },
  comparison: [
    ["AI Tutor", "Limited", "Unlimited", "Unlimited"],
    ["Assignment Scanning", "Limited", "Unlimited", "Unlimited"],
    ["Step-by-Step Explanations", "Basic", true, true],
    ["Practice Questions", "Basic", "Unlimited", "Unlimited"],
    ["Personalized Quizzes", false, true, true],
    ["Progress Analytics", "Basic", "Advanced", "Advanced"],
    ["Topic Mastery", false, true, true],
    ["Learning History", false, true, true],
    ["Student Profiles", "1", "1", "Up to 5"],
    ["Parent Overview", false, false, true],
    ["Priority Support", false, false, true]
  ],
  subscription: { planId: "pro", interval: "monthly", status: "active", nextBilling: "2026-11-07" },
  paymentMethod: { brand: "Visa", last4: "4242", expires: "12/28" },
  history: [
    { id: "INV-1007", date: "2026-10-07", description: "LearnSnap Pro", amount: 999, status: "Paid" },
    { id: "INV-0907", date: "2026-09-07", description: "LearnSnap Pro", amount: 999, status: "Paid" },
    { id: "INV-0807", date: "2026-08-07", description: "LearnSnap Pro", amount: 999, status: "Paid" }
  ],
  faq: [
    ["Can I cancel anytime?", "Yes. You can cancel from Subscription & Billing at any time. You keep your paid features until the end of the period you've already paid for."],
    ["Can I switch plans?", "Yes. Open Change Plan in Subscription & Billing, pick another plan and confirm. You'll see the price difference before you decide."],
    ["What's included in Pro?", "Unlimited AI tutor questions and assignment scans, step-by-step explanations, unlimited practice, personalized quizzes, advanced analytics, topic mastery tracking, learning history and personalized recommendations."],
    ["What's included in Family?", "Everything in Pro for up to 5 student profiles, each with its own dashboard and progress tracking. Parents get a progress overview, and the plan includes priority support."],
    ["Can I use LearnSnap on multiple devices?", "Yes. Your progress is saved to your account, so it follows you between your phone and the web."],
    ["Can I switch between monthly and yearly billing?", "Yes. Yearly billing saves up to 33% compared with paying monthly. You can switch from Subscription & Billing."]
  ]
};
