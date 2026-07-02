import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {Menu, ChevronLeft, ChevronRight, Sun, Moon,
  LayoutDashboard, GraduationCap, Briefcase, Wrench,
  Mail, User, CheckCircle2, Sparkles, Lightbulb, File} from 'lucide-react';

import Dashboard from './components/Dashboard.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Resume from './components/Resume.jsx';
import Feedback from './components/Feedback.jsx';

const profile = {
  name: "Radhika Changia",
  role: "Software Developer",
  location: "New Delhi, India",
  email: "radhika2changia@gmail.com",
};


export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme])

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Wrench },
    { id: 'resume', label: 'Resume', icon: File },
    { id: 'feedback', label: 'Feedback', icon: Mail },
  ];

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const bgMain = theme === 'light' ? 'bg-slate-50' : 'bg-slate-950';
  const bgHeader = theme === 'light' ? 'bg-white/80 border-slate-200' : 'bg-slate-900/80 border-slate-800/60';
  const bgSidebar = theme === 'light' ? 'bg-white border-slate-100' : 'bg-slate-900 border-slate-800/60';
  
  const textPrimary = theme === 'light' ? 'text-slate-800' : 'text-slate-100';
  const textSecondary = theme === 'light' ? 'text-slate-500' : 'text-slate-400';
  
  const btnToggleHover = theme === 'light' ? 'hover:bg-rose-50 text-rose-500' : 'hover:bg-violet-950/50 text-violet-400';
  const sidebarActiveColor = theme === 'light' ? 'bg-rose-50 text-rose-600 font-semibold' : 'bg-violet-950/40 text-violet-300 font-semibold';
  const sidebarInactiveColor = theme === 'light' ? 'text-slate-500 hover:bg-slate-50 hover:text-slate-900' : 'text-slate-400 hover:bg-slate-900/50 hover:text-slate-200';

  return (
    <div className={`min-h-screen ${bgMain} ${textPrimary} transition-colors duration-300 font-sans flex flex-col`} id="portfolio-app">
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${bgHeader} px-4 md:px-6 py-3 flex items-center justify-between h-16`} id="sticky-header">
        <div className="flex items-center gap-3">
          <button className={`p-2 rounded-xl transition-all ${btnToggleHover}`} title="Toggle Navigation Menu" id="sidebar-toggle-btn" 
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              setIsMobileOpen(!isMobileOpen);
            }}>
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex flex-col md:flex-row md:items-baseline md:gap-2.5">
            <span className="font-bold text-base md:text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-violet-500">
              {profile.name}
            </span>
            <span className="text-slate-300 dark:text-slate-700 hidden md:inline">|</span>
            <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400 dark:bg-violet-400 animate-pulse hidden md:inline" />
              {profile.role}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className={`p-2 rounded-xl border border-transparent transition-all ${btnToggleHover}`} title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'} id="theme-toggle-btn"
            onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="w-5 h-5 text-indigo-600" /> : <Sun className="w-5 h-5 text-amber-400 fill-amber-400" />}
          </button>
        </div>
      </header>

      <div className="flex-1 flex relative" id="body-workspace">
        {isMobileOpen && (
          <div className="fixed inset-0 bg-black/30 dark:bg-black/60 z-30 md:hidden backdrop-blur-sm" id="mobile-overlay"
            onClick={() => setIsMobileOpen(false)}/>
        )}
        <aside
          id="collapsible-sidebar" className={`fixed md:sticky top-16 bottom-0 left-0 z-30 h-[calc(100vh-64px)] border-r transition-all duration-300 ${bgSidebar}
            ${isCollapsed ? 'w-20' : 'w-64'}
            ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="flex flex-col h-full justify-between py-4">
            <div className="space-y-1.5 px-3">
              {navItems.map((item) => {
                const isSelected = activeTab === item.id;
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileOpen(false);
                    }}
                    className={`w-full flex items-center gap-3.5 p-3 rounded-xl text-left transition-all text-sm ${
                      isSelected ? sidebarActiveColor : sidebarInactiveColor
                    }`}
                    id={`nav-item-${item.id}`}
                  >
                    <Icon className="w-5 h-5 shrink-0" />
                    <AnimatePresence>
                      {!isCollapsed && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.15 }}
                          className="truncate"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
        <main className="flex-1 min-w-0 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto space-y-6" id="main-content">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <Dashboard
                key="dashboard"
                profile={profile}
                theme={theme}
              />
            )}

            {activeTab === 'education' && (
              <Education
                key="education"
                theme={theme}
              />
            )}

            {activeTab === 'projects' && (
              <Projects
                key="projects"
                theme={theme}
              />
            )}

            {activeTab === 'skills' && (
              <Skills
                key="skills"
                theme={theme}
              />
            )}

            {activeTab === 'resume' && (
              <Resume key="resume" theme={theme} />
            )}

            {activeTab === 'feedback' && (
              <Feedback
                key="feedback"
                theme={theme}
              />
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
