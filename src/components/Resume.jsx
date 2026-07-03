import React from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import resumeUrl from '../assets/resume.pdf';

export default function Resume({ theme }) {
  const cardBg = theme === 'light' ? 'bg-white/80 border-rose-100/60' : 'bg-[#16141D]/90 border-purple-950/40';
  const textPrimary = theme === 'light' ? 'text-[#33303C]' : 'text-[#E7E5EC]';
  const textSecondary = theme === 'light' ? 'text-[#615C70]' : 'text-[#B2ADB8]';

  return (
    <motion.section initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className={`text-xl font-bold ${textPrimary}`}>Resume</h2>
          <p className={`text-xs ${textSecondary}`}>View or download my latest resume</p>
        </div>
        <div className="flex gap-2">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-100 dark:border-purple-900/40 text-indigo-600 dark:text-purple-300 text-xs font-bold hover:bg-indigo-50 dark:hover:bg-purple-950/30 transition-colors">
            <ExternalLink className="w-4 h-4" /> Open
          </a>
          <a href={resumeUrl} download="Radhika-Changia-Resume.pdf" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-colors">
            <Download className="w-4 h-4" /> Download
          </a>
        </div>
      </div>
      <div className={`rounded-3xl border ${cardBg} shadow-sm overflow-hidden`}>
        <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800/60 flex items-center gap-2">
          <FileText className="w-4 h-4 text-rose-500 dark:text-purple-400" />
          <span className={`text-xs font-semibold ${textPrimary}`}>Radhika Changia — Resume</span>
        </div>
        <iframe src={`${resumeUrl}#view=FitH`} title="Radhika Changia Resume" className="w-full h-[70vh] min-h-[520px] bg-slate-100 dark:bg-slate-900" />
      </div>
    </motion.section>
  );
}
