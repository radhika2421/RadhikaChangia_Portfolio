import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Globe, Code, Sparkles, Database, Smartphone, Terminal, Laptop, HelpCircle } from 'lucide-react';
import taskMateIcon from '../assets/taskmateicon.png';
import memoStackIcon from "../assets/memostack.png";
import reThreadIcon from "../assets/rethreadicon.png"

const ICON_MAP = {
  globe: Globe,
  code: Code,
  sparkles: Sparkles,
  database: Database,
  smartphone: Smartphone,
  terminal: Terminal,
  laptop: Laptop,
  help: HelpCircle,
};

export default function Projects({theme }) {
  const cardBg = theme === 'light' ? 'bg-white/80 border-rose-100/60' : 'bg-[#16141D]/90 border-purple-950/40';
  const textPrimary = theme === 'light' ? 'text-[#33303C]' : 'text-[#E7E5EC]';
  const textSecondary = theme === 'light' ? 'text-[#615C70]' : 'text-[#B2ADB8]';

  const projects= [
  {
    id: "proj-1",
    name: "MyTaskMate - AI Companion for Smarter Productivity.",
    description: "MyTaskMate, an AI-powered productivity web application that leverages Gemini AI for intelligent task planning, priority-based scheduling, dynamic rescheduling and personalized productivity analytics, integrated with Google Calendar and secure authentication",
    image: taskMateIcon,
    githubLink: "https://github.com/radhika2421/MyTaskMate",
    liveLink: "https://mytaskmate.onrender.com/login"
  },
  {
    id: "proj-2",
    name: "MemoStack - Smart, organized space for your memos to be stacked.",
    description: "A full-stack MERN note-taking application featuring secure CRUD operations, responsive design and efficient MongoDB data management, deployed on Render for seamless access.",
    image: memoStackIcon,
    githubLink: "https://github.com/radhika2421/MemoStack",
    liveLink: "https://mymemostack.onrender.com/"
  },
  {
    id: "proj-3",
    name: "Rethread - discover affordable fashion while promoting sustainable living..",
    description: "A full-stack thrift marketplace built with the MERN stack, enabling users to buy and sell pre-owned items through secure authentication, product listings and a seamless shopping experience. A WORK IN PROGRESS",
    image: reThreadIcon,
    githubLink: "https://github.com/radhika2421/ReThread",
    liveLink: "#"
  }]

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
      id="projects-container"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-xl font-bold font-sans ${textPrimary}`}>Projects Gallery</h2>
          <p className={`text-xs ${textSecondary}`}>Live applications, GitHub code, and portfolio work</p>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj) => {
          const IconComponent = ICON_MAP[proj.iconName || 'globe'] || Globe;

          // Distinct, warm pastel background circles for logo based on project title length/ID
          const colors = [
            'bg-rose-100 text-rose-600 dark:bg-rose-950/50 dark:text-rose-300 border-rose-200/50 dark:border-rose-900/30',
            'bg-indigo-100 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300 border-indigo-200/50 dark:border-indigo-900/30',
            'bg-teal-100 text-teal-600 dark:bg-emerald-950/50 dark:text-emerald-300 border-teal-200/50 dark:border-emerald-900/30',
            'bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200/50 dark:border-amber-900/30',
          ];
          const colorClass = colors[proj.name.length % colors.length];

          return (
            <motion.div
              key={proj.id}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative flex flex-col p-6 rounded-2xl border shadow-sm transition-all duration-300 ${cardBg} group`}
            >
              {/* Logo / Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shrink-0 shadow-sm overflow-hidden`}>
                {proj.image ? (
                  <img src={proj.image} alt={`${proj.name} logo`} className="w-full h-full object-cover" />
                ) : (
                  <IconComponent className="w-6 h-6" />
                )}
              </div>

              {/* Text Info */}
              <div className="flex-1 space-y-2">
                <h3 className={`text-base font-bold font-sans tracking-tight ${textPrimary}`}>
                  {proj.name}
                </h3>
                <p className={`text-xs md:text-sm leading-relaxed ${textSecondary}`}>
                  {proj.description}
                </p>
              </div>

              {/* Links Footer */}
              <div className="flex items-center gap-4 pt-4 mt-4  text-xs font-semibold">
                {proj.githubLink && proj.githubLink !== '#' && (
                  <a
                    href={proj.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-500 hover:text-rose-500 dark:text-gray-400 dark:hover:text-rose-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Github
                  </a>
                )}
                {proj.liveLink && proj.id!="proj-3" && proj.liveLink !== '#' && (
                  <a
                    href={proj.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-indigo-500 hover:text-indigo-600 dark:text-purple-400 dark:hover:text-purple-300 transition-colors ml-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Link
                  </a>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className={`text-xs ${textSecondary}`}>The projects are deployed on render, so it might take a couple minutes for it to load.</p>
    </motion.div>
  );
}
