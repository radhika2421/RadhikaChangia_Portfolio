import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Database, Hammer, Sparkles, Cpu, Boxes, Coffee, Braces, Waves, FileCode2, Server, Waypoints, Atom, Network, LayoutTemplate, NotebookPen, Cylinder, Table2, Component, HardDrive, Binary, Workflow, Radio, FileType2, Palette, GitBranch , MonitorCog} from 'lucide-react';

const SKILL_ICONS = {
  Java: Coffee,
  JavaScript: Braces,
  Python: FileCode2,
  'Node.js': Server,
  'Express.js': Waypoints,
  'React.js': Atom,
  Mongoose: Network,
  Bootstrap: LayoutTemplate,
  Jupyter: NotebookPen,
  MongoDB: Cylinder,
  MySQL: Table2,
  TailwindCSS: Waves,
  'Object-Oriented Programming': Component,
  'Database Management Systems': Database,
  'Operating Systems': HardDrive,
  'Data Structures and Algorithms': Binary,
  'Computer Networks': Radio,
  'System Design': MonitorCog,
  HTML: FileCode2,
  CSS: Palette,
  EJS: FileType2,
  Git: GitBranch,
  Figma: Workflow,
};

export default function Skills({theme }) {
  const [activeCategory, setActiveCategory] = useState('languages');

  const cardBg = theme === 'light' ? 'bg-white/80 border-rose-100/60' : 'bg-[#16141D]/90 border-purple-950/40';
  const textPrimary = theme === 'light' ? 'text-[#33303C]' : 'text-[#E7E5EC]';
  const textSecondary = theme === 'light' ? 'text-[#615C70]' : 'text-[#B2ADB8]';
  const inputBg = theme === 'light' ? 'bg-rose-50/50 border-rose-100 text-[#33303C]' : 'bg-[#1C1A24] border-purple-900/40 text-[#E7E5EC]';
  const progressBg = theme === 'light' ? 'bg-rose-100/60' : 'bg-purple-950/40 border border-purple-900/20';

  const skills = {
    languages: ['Java', 'JavaScript', 'Python'],
    databases: ['MongoDB', 'MySQL'],
    frameworks: ['Node.js', 'Express.js', 'React.js', 'Mongoose', 'TailwindCSS', 'Bootstrap', 'Jupyter'],
    fundamentals: ['Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'System Design' , 'Computer Networks', 'Data Structures and Algorithms'],
    tools: ['HTML', 'CSS', 'EJS', 'Git', 'Figma']
  };
  
  const categories = [
    {
      key: 'languages',
      title: 'Languages',
      icon: Code,
      accentColor: 'rose',
      colorClasses: theme === 'light' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-rose-950/30 text-rose-300 border-rose-900/30',
      barColor: theme === 'light' ? 'bg-rose-400' : 'bg-rose-500',
    },
    {
      key: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Boxes,
      accentColor: 'indigo',
      colorClasses: theme === 'light' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' : 'bg-indigo-950/30 text-indigo-300 border-indigo-900/30',
      barColor: theme === 'light' ? 'bg-indigo-400' : 'bg-indigo-500',
    },
    {
      key: 'databases',
      title: 'Databases',
      icon: Database,
      colorClasses: theme === 'light' ? 'bg-amber-50 text-amber-600 border-amber-100' : 'bg-amber-950/30 text-amber-300 border-amber-900/30',
    },
    {
      key: 'tools',
      title: 'Tools',
      icon: Hammer,
      accentColor: 'teal',
      colorClasses: theme === 'light' ? 'bg-teal-50 text-teal-600 border-teal-100' : 'bg-emerald-950/30 text-emerald-300 border-emerald-900/30',
      barColor: theme === 'light' ? 'bg-emerald-400' : 'bg-emerald-500',
    },
    {
      key: 'fundamentals',
      title: 'Computer Science Fundamentals',
      icon: Cpu,
      colorClasses: theme === 'light' ? 'bg-purple-50 text-purple-600 border-purple-100' : 'bg-purple-950/30 text-purple-300 border-purple-900/30',
    },
  ];

  const selectedCategory = categories.find((category) => category.key === activeCategory) || categories[0];
  const SelectedCategoryIcon = selectedCategory.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
      id="skills-container"
    >
      <div>
        <h2 className={`text-xl font-bold font-sans ${textPrimary}`}>Technical Skills</h2>
        <p className={`text-xs ${textSecondary}`}>Core programming languages, frameworks, databases, and workflow practices</p>
      </div>

      <div className={`rounded-3xl border ${cardBg} shadow-sm overflow-hidden`}>
        <div className="flex flex-col md:flex-row min-h-[430px]">
          <nav className="md:w-56 shrink-0 p-3 md:p-5 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800/60 flex md:flex-col gap-2 overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`relative shrink-0 flex items-center gap-2.5 px-3 py-3 rounded-xl text-left text-xs font-semibold transition-all ${
                    isActive ? category.colorClasses : `${textSecondary} hover:bg-black/5 dark:hover:bg-white/5`
                  }`}
                >
                  {isActive && <span className="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-current" />}
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap md:whitespace-normal">{category.title}</span>
                </button>
              );
            })}
          </nav>

          <div className="flex-1 p-5 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className={`p-2.5 rounded-xl border ${selectedCategory.colorClasses}`}>
                <SelectedCategoryIcon className="w-5 h-5" />
              </span>
              <div>
                <h3 className={`text-base font-bold ${textPrimary}`}>{selectedCategory.title}</h3>
                <p className={`text-xs ${textSecondary}`}>{skills[selectedCategory.key].length} skills</p>
              </div>
            </div>

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
            >
              {skills[selectedCategory.key].map((skill) => {
                const SkillIcon = SKILL_ICONS[skill] || Code;
                return (
                  <motion.div
                    key={skill}
                    whileHover={{ y: -3 }}
                    className={`min-h-28 p-4 rounded-2xl border flex flex-col items-center justify-center gap-3 text-center ${selectedCategory.colorClasses}`}
                  >
                    <SkillIcon className="w-8 h-8" strokeWidth={1.7} />
                    <span className="text-xs font-bold leading-snug">{skill}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
