import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2, Award } from 'lucide-react';
import { courseworkData } from '../data/portfolioData';

const Coursework = () => {
  return (
    <section id="coursework" className="py-16 bg-slate-100/40 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold font-mono">
            Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Core Computer Science Coursework
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-cyanAccent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Rigorous undergraduate CS curriculum at JK Lakshmipat University demonstrating algorithmic rigor and systems engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {courseworkData.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-900/60">
                    {course.code}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md">
                    <Award className="w-3 h-3" />
                    Grade: {course.grade}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {course.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {course.focus}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center gap-1.5 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" />
                <span>JKLU Verified Curriculum</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coursework;
