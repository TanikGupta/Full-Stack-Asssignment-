import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Camera, MapPin, Calendar } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/gallery/ankur_warikoo.jpg',
    title: 'With Entrepreneur & Author Ankur Warikoo',
    badge: 'HackJKLU & Leadership',
    subtitle: 'Author Session & National Hackathon Organization',
    description:
      'Receiving signed copy of "Build An Epic Career" during Ankur Warikoo\'s keynote session at JKLU as part of the core organizing team.',
    location: 'JK Lakshmipat University',
    tag: 'Campus Landmark'
  },
  {
    id: 2,
    image: '/gallery/speaker_podium.jpg',
    title: 'Podium Address & Event Coordination',
    badge: 'Public Speaking',
    subtitle: 'Student Council Leadership & Operations',
    description:
      'Addressing fellow students, faculty, and event delegates as Organizing Head and active Student Council leader during campus programs.',
    location: 'Seminar Hall, JKLU',
    tag: 'Leadership in Action'
  },
  {
    id: 3,
    image: '/gallery/cultural_event.jpg',
    title: 'Cultural Festivities & Stage Performance',
    badge: 'Cultural Affairs',
    subtitle: 'Patriotic Celebrations & Vocal Performance',
    description:
      'Leading cultural spirit and musical stage performance during national celebrations (26th January Republic Day & 15th August Independence Day).',
    location: 'University Grounds',
    tag: 'Cultural Heritage'
  },
  {
    id: 4,
    image: '/gallery/portrait.jpg',
    title: 'Tanik Gupta — B.Tech CSE & Developer',
    badge: 'Full-Stack Developer',
    subtitle: 'General Secretary – Cultural Affairs (Student Council)',
    description:
      'Driven software engineering student combining MERN stack development with impactful university leadership.',
    location: 'Jaipur, Rajasthan',
    tag: 'Profile'
  }
];

const MomentsSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section id="moments" className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold font-mono bg-brand-50 dark:bg-brand-950/70 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Campus Life & Milestones</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Moments in Action
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-cyanAccent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Highlights from hackathons, cultural performances, and leadership addresses across campus.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 group"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-slate-950">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover object-center"
                />

                {/* Dark Vignette / Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent hidden sm:block" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="max-w-2xl"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-600 text-white shadow-md">
                        {currentSlide.badge}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-slate-300 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-brand-400" />
                        {currentSlide.location}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {currentSlide.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono text-cyanAccent mt-1">
                      {currentSlide.subtitle}
                    </p>

                    <p className="mt-2 text-xs sm:text-sm text-slate-200 line-clamp-2 sm:line-clamp-none leading-relaxed drop-shadow">
                      {currentSlide.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white backdrop-blur-md border border-white/20 transition-all opacity-80 hover:opacity-100 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="py-3 px-6 bg-slate-950/90 backdrop-blur-md border-t border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 bg-gradient-to-r from-brand-500 to-cyanAccent'
                      : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <div className="text-xs font-mono text-slate-400">
              <span className="text-brand-400 font-bold">{currentIndex + 1}</span> / {slides.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSlideshow;
