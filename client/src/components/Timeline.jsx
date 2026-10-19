import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Calendar, Building2, Sparkles } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

const Timeline = () => {
  const [filterType, setFilterType] = useState('all');

  const filteredItems = filterType === 'all'
    ? timelineData
    : timelineData.filter((item) => item.type === filterType);

  const getIcon = (item) => {
    if (item.title.includes('General Secretary')) {
      return <Sparkles className="w-5 h-5 text-amber-500" />;
    }
    switch (item.type) {
      case 'education':
        return <GraduationCap className="w-5 h-5 text-brand-500" />;
      case 'experience':
        return <Briefcase className="w-5 h-5 text-cyanAccent" />;
      default:
        return <Award className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold font-mono">
            Milestones & Career
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Education & Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-cyanAccent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            My academic journey, software engineering internships, and apex campus leadership tenures.
          </p>
        </motion.div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { key: 'all', label: 'All Milestones' },
            { key: 'education', label: 'Education' },
            { key: 'experience', label: 'Internships' },
            { key: 'leadership', label: 'Council & Leadership' }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilterType(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                filterType === tab.key
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central bar */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-500 via-indigo-500 to-cyanAccent/30 sm:-translate-x-1/2" />

          <div className="space-y-10">
            {filteredItems.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Icon */}
                  <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white dark:bg-slate-900 border-2 shadow-md flex items-center justify-center z-10 ${
                    item.title.includes('General Secretary') ? 'border-amber-500 shadow-amber-500/30' : 'border-brand-500'
                  }`}>
                    {getIcon(item)}
                  </div>

                  {/* Spacer for other side on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />

                  {/* Timeline Content Card */}
                  <div
                    className={`pl-12 sm:pl-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-10' : 'sm:pl-10'
                    }`}
                  >
                    <div className={`p-6 rounded-2xl bg-white dark:bg-slate-800 border shadow-sm hover:shadow-md transition-all group ${
                      item.title.includes('General Secretary')
                        ? 'border-amber-400 dark:border-amber-500/70 ring-1 ring-amber-400/40 shadow-amber-500/10'
                        : 'border-slate-200 dark:border-slate-700/80'
                    }`}>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold border ${
                          item.title.includes('General Secretary')
                            ? 'bg-amber-50 dark:bg-amber-950/70 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800'
                            : 'bg-brand-50 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 border-brand-200 dark:border-brand-800'
                        }`}>
                          <Calendar className="w-3 h-3" />
                          {item.period}
                        </span>

                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-mono ${
                          item.title.includes('General Secretary')
                            ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                        }`}>
                          {item.badge}
                        </span>
                      </div>

                      <h3 className={`text-lg font-bold transition-colors ${
                        item.title.includes('General Secretary')
                          ? 'text-amber-600 dark:text-amber-400'
                          : 'text-slate-900 dark:text-white group-hover:text-brand-500'
                      }`}>
                        {item.title}
                      </h3>

                      <p className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 mt-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        <span>{item.institution}</span>
                      </p>

                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
