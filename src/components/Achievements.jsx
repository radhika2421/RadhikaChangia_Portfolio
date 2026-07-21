import React from 'react';
import { motion } from 'motion/react';
import { Code2, ExternalLink, Trophy, Users } from 'lucide-react';

const achievements = [
  {
    title: 'Vibe2Ship Coding Hackathon',
    subtitle: 'Coding Ninjas x Google Developers',
    description: 'Participated and got an opportunity for enhancing skills in AI-assisted development, modern web technologies, Git/GitHub, and building end-to-end projects using industry best practices.',
    linkLabel: 'Certificate',
    link: 'https://drive.google.com/file/d/1qpS_n5xFTPL4wHroEPDf37Hu_qkln3v2/view?usp=sharing',
    type: 'hackathon',
    accent: 'rose',
  },
  {
    title: 'Tech Fellowship and Coding Contest',
    subtitle: 'Algo-University',
    description: 'Top 10% out of 20,000+ applicants in round 1',
    linkLabel: 'Certificate',
    link: 'https://drive.google.com/file/d/1nmGyLxhIIBtzToowFS7eyIS_5j1fOdF2/view?usp=sharing',
    type: 'hackathon',
    accent: 'indigo',
  },
  {
    title: 'LeetCode',
    subtitle: 'Coding Platform',
    description: 'Solved over 650+ questions with highest contest rating of 1551',
    linkLabel: 'Profile',
    link: 'https://leetcode.com/u/Radhika2421/',
    type: 'coding',
    accent: 'emerald',
  },
];

const accentClasses = {
  rose: {
    glow: 'from-rose-400/20 to-pink-400/10',
    button: 'text-rose-600 hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-950/30',
    icon: 'text-rose-500 dark:text-rose-300',
  },
  indigo: {
    glow: 'from-indigo-400/20 to-violet-400/10',
    button: 'text-indigo-600 hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-950/30',
    icon: 'text-indigo-500 dark:text-indigo-300',
  },
  emerald: {
    glow: 'from-emerald-400/20 to-teal-400/10',
    button: 'text-emerald-600 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950/30',
    icon: 'text-emerald-500 dark:text-emerald-300',
  },
};

export default function Achievements({ theme }) {
  const cardBg = theme === 'light' ? 'bg-white/80 border-rose-100/60' : 'bg-[#16141D]/90 border-purple-950/40';
  const textPrimary = theme === 'light' ? 'text-[#33303C]' : 'text-[#E7E5EC]';
  const textSecondary = theme === 'light' ? 'text-[#615C70]' : 'text-[#B2ADB8]';

  return (
    <motion.section
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
      id="achievements-container"
    >
      <div>
        <h2 className={`text-xl font-bold font-sans ${textPrimary}`}>Achievements</h2>
        <p className={`text-xs ${textSecondary}`}>Hackathon participation, coding progress, ratings, and problem-solving milestones</p>
      </div>

      <div className={`rounded-3xl border ${cardBg} shadow-sm overflow-hidden`}>
        <div className="p-5 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => {
              const accent = accentClasses[achievement.accent] || accentClasses.rose;
              const Icon = achievement.type === 'coding' ? Code2 : Trophy;

              return (
                <motion.article
                  key={`${achievement.title}-${index}`}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/60 bg-white/70 dark:bg-white/[0.03] p-5 min-h-[245px] flex flex-col"
                >
                  <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-br ${accent.glow}`} />

                  <div className="relative flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`text-sm font-bold leading-snug ${textPrimary}`}>{achievement.title}</h3>
                      <Icon className={`w-4 h-4 shrink-0 ${accent.icon}`} />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-rose-500 dark:text-purple-300">{achievement.subtitle} </p>
                    <p className={`mt-10 text-xs leading-5 ${textSecondary}`}>{achievement.description}</p>
                  </div>

                  <a
                    href={achievement.link}
                    className={`mt-5 inline-flex items-center gap-2 text-xs font-bold rounded-xl px-3 py-2 transition-colors ${accent.button}`}
                  >
                    {achievement.linkLabel}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
