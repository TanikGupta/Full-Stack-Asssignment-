import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowRight, Github, Linkedin, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  // Typewriter effect state
  const [currentText, setCurrentText] = useState('');
  const [subIndex, setSubIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = personalInfo.subtitles;

  useEffect(() => {
    const handleType = () => {
      const fullText = titles[titleIndex];

      if (!isDeleting) {
        setCurrentText(fullText.substring(0, subIndex + 1));
        setSubIndex((prev) => prev + 1);

        if (subIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, subIndex - 1));
        setSubIndex((prev) => prev - 1);

        if (subIndex - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    };

    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [subIndex, isDeleting, titleIndex, titles]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-brand-500/20 via-purple-500/20 to-cyanAccent/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-72 h-72 bg-brand-400/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyanAccent/10 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-500/30 bg-brand-50/50 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Software Development & Full-Stack Internships</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Dynamic Typewriter Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 sm:mt-6 h-10 sm:h-12 flex items-center justify-center font-mono text-xl sm:text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-semibold"
        >
          <Terminal className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-brand-500 inline" />
          <span>{currentText}</span>
          <span className="inline-block w-1.5 h-6 sm:h-7 bg-brand-500 ml-1 animate-pulse" />
        </motion.div>

        {/* Subtitle / Bio snippet */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
        >
          B.Tech CSE student at <strong className="text-slate-800 dark:text-slate-200">{personalInfo.university}</strong>. Building production-grade web applications, interactive dashboards, and scalable database architectures.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#resume"
            className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 hover:from-brand-500 hover:to-indigo-500 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base"
          >
            <Download className="w-5 h-5" />
            <span>Download CV (PDF / DOCX)</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-sm sm:text-base"
          >
            <Mail className="w-5 h-5 text-brand-500" />
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Social Links & Quick Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-5 text-slate-600 dark:text-slate-400"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 hover:text-brand-500 hover:border-brand-500 hover:scale-110 transition-all shadow-sm"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 hover:text-cyanAccent hover:border-cyanAccent hover:scale-110 transition-all shadow-sm"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Address"
            className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-800/80 hover:text-purple-500 hover:border-purple-500 hover:scale-110 transition-all shadow-sm"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
