import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, School, Calendar, Award, BookOpen, Edit2, Check, X, ShieldAlert } from 'lucide-react';

export default function Education({theme }) {
  const cardBg = theme === 'light' ? 'bg-white/80 border-rose-100/60' : 'bg-[#16141D]/90 border-purple-950/40';
  const textPrimary = theme === 'light' ? 'text-[#33303C]' : 'text-[#E7E5EC]';
  const textSecondary = theme === 'light' ? 'text-[#615C70]' : 'text-[#B2ADB8]';
  const inputBg = theme === 'light' ? 'bg-rose-50/50 border-rose-100 text-[#33303C]' : 'bg-[#1C1A24] border-purple-900/40 text-[#E7E5EC]';
  const buttonPrimary = theme === 'light' ? 'bg-rose-100 hover:bg-rose-200 text-rose-700' : 'bg-purple-900/40 hover:bg-purple-800/40 text-purple-300 border border-purple-700/30';

  const parts = [
    {
      key: 'college',
      label: 'College',
      icon: GraduationCap,
      color: theme === 'light' ? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-950/60 text-indigo-300',
      fields: [
        { key: 'name', label: 'College Name', type: 'text' },
        { key: 'degree', label: 'Degree', type: 'text' },
        { key: 'major', label: 'Major / Field of Study', type: 'text' },
        { key: 'duration', label: 'Duration (Years)', type: 'text' },
        { key: 'cgpa', label: 'CGPA', type: 'text' }
      ]
    },
    {
      key: 'school12',
      label: 'Senior Secondary Education (Class XII)',
      icon: School,
      color: theme === 'light' ? 'bg-rose-100 text-rose-600' : 'bg-rose-950/60 text-rose-300',
      fields: [
        { key: 'name', label: 'School Name', type: 'text' },
        { key: 'duration', label: 'Duration', type: 'text' },
        { key: 'score', label: 'Score / Percentage', type: 'text' }
      ]
    },
    {
      key: 'school10',
      label: 'Secondary Education (Class X)',
      icon: School,
      color: theme === 'light' ? 'bg-teal-100 text-teal-600' : 'bg-emerald-950/60 text-emerald-300',
      fields: [
        { key: 'name', label: 'School Name', type: 'text' },
        { key: 'duration', label: 'Duration', type: 'text' },
        { key: 'score', label: 'Score / Percentage', type: 'text' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
      id="education-container"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-xl font-bold font-sans ${textPrimary}`}>Education Timeline</h2>
          <p className={`text-xs ${textSecondary}`}>Academic achievements and institution details</p>
        </div>
      </div>

        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-6 space-y-8 py-2">
          <div className="relative pl-8 md:pl-10">
            <span className={`absolute -left-5 top-1 flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-[#0F0E13] shadow-md ${parts[0].color}`}>
              <GraduationCap className="w-5 h-5" />
            </span>
            <div className={`p-5 md:p-6 rounded-2xl border ${cardBg} hover:shadow-md transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full ${parts[0].color}`}>
                  College
                </span>
                <span className={`flex items-center gap-1 text-xs font-medium ${textSecondary}`}>
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  2023-2027
                </span>
              </div>
              <h3 className={`text-base md:text-lg font-bold font-sans ${textPrimary}`}>
                Indira Gandhi Delhi Technical University For Women
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800/40 text-sm">
                <div>
                  <p className={`text-xs ${textSecondary}`}>Degree</p>
                  <p className={`font-semibold mt-0.5 ${textPrimary}`}>B.Tech</p>
                </div>
                <div>
                  <p className={`text-xs ${textSecondary}`}>Major</p>
                  <p className={`font-semibold mt-0.5 ${textPrimary}`}>Electronics And Communication Engineering</p>
                </div>
                <div>
                  <p className={`text-xs ${textSecondary}`}>Performance</p>
                  <p className="font-semibold text-rose-500 dark:text-rose-400 mt-0.5 flex items-center gap-1">
                    <Award className="w-4 h-4 text-amber-500 shrink-0" />
                    8.56/10 (CGPA)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pl-8 md:pl-10">
            <span className={`absolute -left-5 top-1 flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-[#0F0E13] shadow-md ${parts[1].color}`}>
              <School className="w-5 h-5" />
            </span>
            <div className={`p-5 md:p-6 rounded-2xl border ${cardBg} hover:shadow-md transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full ${parts[1].color}`}>
                  Class XII (High School)
                </span>
                <span className={`flex items-center gap-1 text-xs font-medium ${textSecondary}`}>
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  2020-2022
                </span>
              </div>
              <h3 className={`text-base font-bold font-sans ${textPrimary}`}>
                GD Goenka Public School, Delhi
              </h3>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/40 text-sm">
                <div>
                  <p className={`text-xs ${textSecondary}`}>Performance Score</p>
                  <p className="font-semibold text-indigo-500 dark:text-indigo-400 mt-0.5 flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-indigo-500 shrink-0" />
                    94% (CBSE Board)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative pl-8 md:pl-10">
            <span className={`absolute -left-5 top-1 flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-[#0F0E13] shadow-md ${parts[2].color}`}>
              <School className="w-5 h-5" />
            </span>
            <div className={`p-5 md:p-6 rounded-2xl border ${cardBg} hover:shadow-md transition-all`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className={`px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-full ${parts[2].color}`}>
                  Class X (Secondary School)
                </span>
                <span className={`flex items-center gap-1 text-xs font-medium ${textSecondary}`}>
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  2011-2020
                </span>
              </div>
              <h3 className={`text-base font-bold font-sans ${textPrimary}`}>
                Maharishi Vidya Mandir public School, Assam
              </h3>
              <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/40 text-sm">
                <div>
                  <p className={`text-xs ${textSecondary}`}>Performance Score</p>
                  <p className="font-semibold text-teal-600 dark:text-teal-400 mt-0.5 flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-teal-500 shrink-0" />
                    96.2% (CBSE Board)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </motion.div>
  );
}
