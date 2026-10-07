/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HowItWorks } from './components/HowItWorks';
import { LearnSnapDifference } from './components/LearnSnapDifference';
import { SnapDemoSection } from './components/SnapDemoSection';
import { AiTutorSection } from './components/AiTutorSection';
import { MasterySection } from './components/MasterySection';
import { FeaturesSection } from './components/FeaturesSection';
import { StudentExperienceSection } from './components/StudentExperienceSection';
import { ComingSoonCta } from './components/ComingSoonCta';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [waitlistOpen, setWaitlistOpen] = useState<boolean>(false);

  // Initialize and synchronize theme state
  useEffect(() => {
    const isDarkStored = localStorage.getItem('learnsnap_theme') === 'dark';
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = isDarkStored || (localStorage.getItem('learnsnap_theme') === null && prefersDark);
    
    setDarkMode(initialDark);
    if (initialDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('learnsnap_theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('learnsnap_theme', 'light');
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-[#F7F5FF] dark:bg-[#0B0916] text-[#131329] dark:text-slate-100 transition-colors duration-200">
      {/* Top sticky navigation bar */}
      <Navbar
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section with 3D Smartphone Mockup */}
        <HeroSection onOpenWaitlist={() => setWaitlistOpen(true)} />

        {/* 2. How It Works: 01 Snap, 02 Understand, 03 Master */}
        <HowItWorks />

        {/* 3. The LearnSnap Difference: Traditional AI vs LearnSnap */}
        <LearnSnapDifference />

        {/* 4. Snap Assignment Interactive Demo */}
        <SnapDemoSection />

        {/* 5. Personal AI Tutor Section */}
        <AiTutorSection />

        {/* 6. Mastery Analytics Dashboard */}
        <MasterySection />

        {/* 7. Core Features */}
        <FeaturesSection />

        {/* 8. Student Experience (Homework, Exam Prep, Revision, Daily Learning) */}
        <StudentExperienceSection />

        {/* 9. Dark-Purple Coming Soon Section with App Badges */}
        <ComingSoonCta onOpenWaitlist={() => setWaitlistOpen(true)} />

        {/* 10. FAQ Accordion */}
        <FaqSection />

        {/* 11. Final Conversion CTA */}
        <FinalCta onOpenWaitlist={() => setWaitlistOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Early Access / Waitlist Modal */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />
    </div>
  );
}
