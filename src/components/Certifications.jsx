import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Apna College',
    description: 'Completed a comprehensive Full-Stack Web Development program and with hands-on experience in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React, Node.js, Express.js, SQL, MongoDB, Git/GitHub, API development, deployment and industry-level project development.',
    credential: 'https://drive.google.com/file/d/1EWaP_xoZ7q-HMm5VnOdia54HEcayV_jo/view?usp=sharing',
    accent: 'rose',
  },
  {
    title: 'DSA in Java',
    issuer: 'Coding Ninjas',
    description: 'Developed a solid foundation in Data Structures and Algorithms using Java, with hands-on experience in recursion, sorting, searching, trees, graphs, dynamic programming and time complexity analysis.',
    credential: 'https://drive.google.com/file/d/10DqwY8wylmflMW5PlcUdkpNqYE0psBgQ/view?usp=sharing',
    accent: 'indigo',
  },
  {
    title: 'Developing Soft Skills and Personality',
    issuer: 'NPTEL',
    description: 'Enhanced essential workplace skills through the course, focusing on effective communication, teamwork, problem-solving, leadership, confidence and personality development.',
    credential: 'https://drive.google.com/file/d/1aKsfigkWdP3gNseykhfNSudCqd9_CzvO/view?usp=sharing',
    accent: 'emerald',
  },
];

const accentClasses = {
  rose: {
    glow: 'from-rose-400/20 to-pink-400/10',
    button: 'text-rose-600 hover:bg-rose-50 dark:text-rose-300 dark:hover:bg-rose-950/30',
  },
  indigo: {
    glow: 'from-indigo-400/20 to-violet-400/10',
    button: 'text-indigo-600 hover:bg-indigo-50 dark:text-indigo-300 dark:hover:bg-indigo-950/30',
  },
  emerald: {
    glow: 'from-emerald-400/20 to-teal-400/10',
    button: 'text-emerald-600 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950/30',
  },
};

export default function Certifications({ theme }) {
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
      id="certifications-container"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className={`text-xl font-bold font-sans ${textPrimary}`}>Certifications</h2>
          <p className={`text-xs ${textSecondary}`}>Certified learnings and professional achievements</p>
        </div>
      </div>

      <div className={`rounded-3xl border ${cardBg} shadow-sm overflow-hidden`}>
        <div className="p-5 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {certifications.map((certificate, index) => {
              const accent = accentClasses[certificate.accent] || accentClasses.rose;

              return (
                <motion.article
                  key={`${certificate.title}-${index}`}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800/60 bg-white/70 dark:bg-white/[0.03] p-5 min-h-[245px] flex flex-col"
                >
                  <div className={`absolute inset-x-0 top-0 h-20 bg-gradient-to-br ${accent.glow}`} />

                  <div className="relative flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`text-sm font-bold leading-snug ${textPrimary}`}>{certificate.title}</h3>
                      <Award className="w-4 h-4 shrink-0 text-rose-500 dark:text-purple-300" />
                    </div>
                    <p className="mt-1 text-xs font-semibold text-rose-500 dark:text-purple-300">{certificate.issuer}</p>
                    <p className={`mt-10 text-xs leading-5 ${textSecondary}`}>{certificate.description}</p>
                  </div>

                  <a
                    href={certificate.credential}
                    className={`mt-5 inline-flex items-center gap-2 text-xs font-bold rounded-xl px-3 py-2 transition-colors ${accent.button}`}
                  >
                    Certificate
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
