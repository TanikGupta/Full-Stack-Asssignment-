import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, FolderGit2, Check, Star, Info, X, Layers, Lightbulb, Zap } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterOptions = ['All', 'Full Stack', 'Frontend / Web', 'ML / Python', 'DBMS'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative">
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
            Featured Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Projects Showcase
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-cyanAccent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Real-world software engineering, machine learning pipelines, and database management systems built with modern stacks. Click <strong>Deep Dive</strong> on any project to inspect architecture details.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilter(opt)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                filter === opt
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-500/25'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand-500/50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category badge & External Links */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                      {project.featured && <Star className="w-3 h-3 text-amber-500 fill-amber-500" />}
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="p-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-brand-500 hover:border-brand-500 transition-colors"
                        title="View GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-brand-500/40 bg-brand-50/70 dark:bg-brand-950/70 text-brand-700 dark:text-brand-300 hover:bg-brand-600 hover:text-white hover:border-brand-600 transition-all text-xs font-semibold shadow-sm"
                          title={`Open ${project.title} live website`}
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet points */}
                  {project.highlights && (
                    <ul className="mt-4 space-y-2">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Footer: Tech Stack Badges + Deep Dive Button */}
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700/60 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.deepDive && (
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-brand-500/30 dark:border-brand-800 bg-brand-50/40 dark:bg-brand-950/40 hover:bg-brand-500 hover:text-white dark:hover:bg-brand-600 text-brand-600 dark:text-brand-400 text-xs sm:text-sm font-semibold transition-all group-hover:shadow-sm"
                    >
                      <Info className="w-4 h-4" />
                      <span>Architecture & Deep Dive</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono bg-brand-100 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">• Deep Dive</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                {activeModalProject.subtitle}
              </p>

              {/* Problem Section */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-semibold text-sm">
                  <Lightbulb className="w-4 h-4" />
                  <span>The Problem Solved</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                  {activeModalProject.deepDive.problem}
                </p>
              </div>

              {/* Solution Section */}
              <div className="mt-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>The Engineering Solution</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1.5 leading-relaxed">
                  {activeModalProject.deepDive.solution}
                </p>
              </div>

              {/* Architecture Breakdown */}
              <div className="mt-5">
                <div className="flex items-center gap-2 font-semibold text-sm text-slate-900 dark:text-white mb-2">
                  <Layers className="w-4 h-4 text-brand-500" />
                  <span>Technical Architecture & Data Flow</span>
                </div>
                <ul className="space-y-2">
                  {activeModalProject.deepDive.architecture.map((arch, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-md bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Callout */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">Outcome:</span>{' '}
                  {activeModalProject.deepDive.impact}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                  {activeModalProject.live && (
                    <a
                      href={activeModalProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-sm"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
