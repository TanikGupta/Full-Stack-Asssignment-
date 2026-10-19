import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Award, Compass, Heart, Users, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  const highlights = [
    { label: 'CGPA', value: personalInfo.cgpa, sub: 'Scale of 10 at JKLU' },
    { label: 'Roll Number', value: personalInfo.rollNo, sub: 'B.Tech CSE (2024-28)' },
    { label: 'Leadership', value: 'General Secretary', sub: 'Cultural Affairs Council' },
    { label: 'Web Projects', value: 'Sahayak & Aarambh', sub: 'MERN & Full-Stack Apps' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold font-mono">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-cyanAccent mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Profile Card / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 via-purple-600 to-cyanAccent rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />
              <div className="relative rounded-2xl bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 shadow-xl">
                {/* Profile Photo */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative shadow-inner bg-slate-100 dark:bg-slate-800 border-2 border-brand-500/20 group">
                  <img
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xl font-bold tracking-tight">
                      {personalInfo.name}
                    </p>
                    <p className="text-xs text-brand-300 font-mono">
                      B.Tech CSE • JK Lakshmipat University
                    </p>
                  </div>
                </div>

                {/* Profile Quick Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <GraduationCap className="w-4 h-4 text-purple-500 flex-shrink-0" />
                    <span>{personalInfo.degree} <strong className="font-mono text-xs text-brand-600 dark:text-brand-400">({personalInfo.rollNo})</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <Award className="w-4 h-4 text-cyanAccent flex-shrink-0" />
                    <span>CGPA: <strong>{personalInfo.cgpa}</strong> • Gen. Secretary (Cultural)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Passionate Developer, Problem Solver & Campus Leader
            </h3>

            <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
              {personalInfo.bio}
            </p>

            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
              Beyond the screen, I serve as the <strong>General Secretary (Cultural)</strong> and an active Student Council member at JK Lakshmipat University. I have spearheaded operations, food, and hospitality for landmark events such as <strong>HackJKLU v5.0</strong> and college fests, combining technical execution with hands-on team leadership.
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 hover:border-brand-500/50 transition-colors text-center"
                >
                  <p className="text-2xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">
                    {item.value}
                  </p>
                  <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Interests Tags */}
            <div className="pt-2">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block mb-2">
                Core Passions & Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Full-Stack Web Development',
                  'Database Optimization',
                  'Event Operations & Logistics',
                  'Machine Learning Fundamentals',
                  'Team Leadership & Collaboration'
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-200/60 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700"
                  >
                    <CheckCircle className="w-3 h-3 text-brand-500" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
