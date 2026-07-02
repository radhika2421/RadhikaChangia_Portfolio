import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Briefcase, MapPin, Mail, Award, Linkedin, Github } from 'lucide-react';

export default function Dashboard({ profile,theme }) {

  // Theme-specific pastel styles
  const cardBg = theme === 'light' ? 'bg-white/80 border-rose-100/60' : 'bg-[#16141D]/90 border-purple-950/40';
  const textPrimary = theme === 'light' ? 'text-[#33303C]' : 'text-[#E7E5EC]';
  const textSecondary = theme === 'light' ? 'text-[#615C70]' : 'text-[#B2ADB8]';
  const badgeColor = theme === 'light' ? 'bg-rose-50 text-rose-600 border-rose-100' : 'bg-purple-950/40 text-purple-300 border-purple-900/30';
  const buttonPrimary = theme === 'light' ? 'bg-rose-100 hover:bg-rose-200 text-rose-700' : 'bg-purple-900/40 hover:bg-purple-800/40 text-purple-300 border border-purple-700/30';
  const inputBg = theme === 'light' ? 'bg-rose-50/50 border-rose-100 text-[#33303C]' : 'bg-[#1C1A24] border-purple-900/40 text-[#E7E5EC]';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
      id="dashboard-container"
    >
      <div className={`p-6 md:p-8 rounded-3xl border shadow-sm transition-all duration-300 ${cardBg} backdrop-blur-md`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          <div className="relative group shrink-0">
            <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${theme === 'light' ? 'from-rose-200 to-indigo-200 opacity-60' : 'from-purple-600 to-rose-600 opacity-40'} blur-sm group-hover:opacity-100 transition duration-500`} />
            <img
              src="/profilepic.jpg"
              alt={profile.name}
              referrerPolicy="no-referrer"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white shadow-md transform hover:scale-[1.02] transition duration-300"
              id="profile-picture"
            />
          </div>
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h1 className={`text-2xl md:text-3xl font-sans font-bold tracking-tight ${textPrimary}`}>
                    {profile.name}
                  </h1>
                  <motion.div
                    animate={{ rotate: [0, 15, 0, -15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }}
                  >
                    <Sparkles className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </motion.div>
                </div>
                <p className={`text-base md:text-lg font-medium mt-1 ${theme === 'light' ? 'text-indigo-600' : 'text-purple-400'}`}>
                  {profile.role}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs">
              <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${badgeColor}`}>
                <Briefcase className="w-3.5 h-3.5" />
                Open For Roles
              </span>
              <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${badgeColor}`}>
                <MapPin className="w-3.5 h-3.5" />
                {profile.location}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={`p-6 rounded-3xl border ${cardBg} space-y-4`}>
        Hello there 👋 <br/>
        I'm an aspiring Software Engineer who enjoys building scalable web applications and solving challenging problems. I love
        exploring Full-Stack Development, Data Structures & Algorithms, and Machine Learning while continuously sharpening my technical
        and problem-solving skills and diving into complex topics of computer science. Whether it's developing projects, participating in
        hackathons or leading initiatives, I'm always excited to learn, build, and make an impact through technology.
      </div>
      <div className={`p-6 rounded-3xl border ${cardBg} space-y-4`}>
        <div className="flex items-center gap-2">
          <div className={`p-2 rounded-xl ${badgeColor}  text-purple-600 dark:text-purple-400`}>
            <Award className="w-5 h-5" />
          </div>
          <h2 className={`text-lg font-bold font-sans ${textPrimary}`}>What I Do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 space-y-2">
            <h3 className={`font-semibold text-indigo-600 dark:text-indigo-400`}>Frontend Crafting</h3>
            <p className={textSecondary}>Designing intuitive, accessible, and responsive user interfaces using React and modern Tailwind layouts.</p>
          </div>
          <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 space-y-2">
            <h3 className={`font-semibold text-rose-600 dark:text-rose-400`}>Full Stack Logic</h3>
            <p className={textSecondary}>Connecting fast React client apps to structured database schemas using Node, Express, and standard API guidelines.</p>
          </div>
          <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 space-y-2">
            <h3 className={`font-semibold text-teal-600 dark:text-teal-400`}>Quality & Precision</h3>
            <p className={textSecondary}>Optimizing web bundles, applying clean animations, and delivering pixel-perfect reactive code structure.</p>
          </div>
        </div>
      </div>
      <div className={`p-6 rounded-2xl border ${cardBg} space-y-6`}>
        <div>
          <h2 className={`text-xl font-bold font-sans ${textPrimary}`}>Get In Touch</h2>
          <p className={`text-xs ${textSecondary}`}>Let's collaborate, discuss ideas, or grab a virtual coffee!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {[
            { label: 'Email Address', value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
            { label: 'LinkedIn', value: 'linkedin.com/in/radhikachangia', href: 'https://www.linkedin.com/in/radhika-changia-6b8b21211/', icon: Linkedin },
            { label: 'GitHub Profile', value: 'github.com/radhikachangia', href: 'https://github.com/radhika2421', icon: Github },
            { label: 'Location', value: profile.location, icon: MapPin },
          ].map((item) => {
            const Icon = item.icon;
            const details = (
              <>
                <p className={`text-[10px] uppercase font-bold tracking-wider ${textSecondary}`}>{item.label}</p>
                <p className={`text-xs md:text-sm font-semibold truncate ${textPrimary}`}>{item.value}</p>
              </>
            );
            return (
              <div key={item.label} className="flex items-center gap-4 min-w-0">
                <span className={`p-3 rounded-xl border ${badgeColor} shrink-0`}><Icon className="w-5 h-5" /></span>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer" className="min-w-0 hover:underline">{details}</a>
                ) : <div className="min-w-0">{details}</div>}
              </div>
            );
          })}
        </div>
        <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-dashed border-gray-200 dark:border-gray-800 text-center text-xs flex flex-col sm:flex-row justify-center gap-2 sm:gap-6">
          <p className={textSecondary}>Available for remote, hybrid, or relocation roles.</p>
          <p className="font-semibold text-[#8B5CF6] dark:text-purple-400">Response time: &lt; 24 Hours</p>
        </div>
      </div>
    </motion.div>
  );
}
