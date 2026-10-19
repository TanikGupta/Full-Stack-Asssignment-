import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  FileCode,
  Layout,
  Palette,
  Smartphone,
  Server,
  Cpu,
  Network,
  Flame,
  Terminal,
  Database,
  HardDrive,
  GitBranch,
  Layers,
  Wrench
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Icon mapping helper
const iconMap = {
  Code2,
  FileCode,
  Layout,
  Palette,
  Smartphone,
  Server,
  Cpu,
  Network,
  Flame,
  Terminal,
  Database,
  HardDrive,
  GitBranch,
  Layers,
  Wrench
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'databaseAndTools', label: 'Tools & Database' }
  ];

  const getFilteredSkills = () => {
    if (activeTab === 'frontend') return [{ category: 'Frontend Development', skills: skillsData.frontend }];
    if (activeTab === 'backend') return [{ category: 'Backend & APIs', skills: skillsData.backend }];
    if (activeTab === 'databaseAndTools') return [{ category: 'Database & Developer Tools', skills: skillsData.databaseAndTools }];
    return [
      { category: 'Frontend Development', skills: skillsData.frontend },
      { category: 'Backend & APIs', skills: skillsData.backend },
      { category: 'Database & Developer Tools', skills: skillsData.databaseAndTools }
    ];
  };

  return (
    <section id="skills" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
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
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Skills & Capabilities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-cyanAccent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Proficiency across the full software lifecycle — from responsive frontends to scalable backends and database architectures.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveTab(cat.key)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.key
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25 scale-105'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {getFilteredSkills().map((group, groupIdx) => (
            <div key={groupIdx}>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-500" />
                {group.category}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {group.skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      className="group relative p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/70 shadow-sm hover:shadow-md transition-all"
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute -top-3 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-brand-600 text-white shadow-sm pointer-events-none">
                        Proficiency: {skill.level}%
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-200">
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <span className="font-semibold text-slate-800 dark:text-slate-200 text-base">
                            {skill.name}
                          </span>
                        </div>
                        <span className="font-mono text-sm font-bold text-brand-600 dark:text-brand-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-700 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: index * 0.08 }}
                          className="h-full rounded-full bg-gradient-to-r from-brand-500 via-indigo-500 to-cyanAccent relative"
                        >
                          <span className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
