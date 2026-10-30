import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ResumeDownload = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState(null);

  const handleDownload = async () => {
    try {
      setDownloading(true);
      setDownloadStatus(null);

      const endpoint = `${API_BASE}/api/resume/pdf`;

      // Trigger download via browser
      const link = document.createElement('a');
      link.href = endpoint;
      link.setAttribute('download', 'Tanik_Gupta_Resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus({
        type: 'success',
        message: 'Resume download initiated successfully!'
      });
    } catch (err) {
      console.error('Download error:', err);
      setDownloadStatus({
        type: 'error',
        message: 'Could not connect to backend server. Please ensure server is running.'
      });
    } finally {
      setTimeout(() => setDownloading(false), 1000);
      setTimeout(() => setDownloadStatus(null), 5000);
    }
  };

  return (
    <section id="resume" className="py-20 bg-slate-100/60 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-brand-600 dark:text-brand-400 font-semibold font-mono">
            Curriculum Vitae
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
            Download My Resume
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-500 to-cyanAccent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Download my verified ATS-friendly resume for career opportunities, internships, and technical collaborations.
          </p>
        </motion.div>

        {/* Centered Resume Download Card */}
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-lg flex flex-col justify-between text-center items-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-red-50 dark:bg-red-950/50 text-red-500 flex items-center justify-center mb-5 border border-red-200 dark:border-red-900/50 shadow-sm">
              <FileText className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Tanik Gupta – Curriculum Vitae
            </h3>
            
            <p className="text-xs font-mono text-brand-600 dark:text-brand-400 mt-2 font-medium">
              Standard ATS-Friendly Document • PDF Format
            </p>

            <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed max-w-md">
              Comprehensive overview of full-stack engineering projects, core CS coursework, leadership tenures, and technical skill set.
            </p>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className="mt-8 w-full sm:w-auto min-w-[240px] inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-500/25 active:scale-98 transition-all disabled:opacity-50"
            >
              {downloading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Preparing Resume...</span>
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  <span>Download PDF Resume</span>
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Feedback alert banner */}
        {downloadStatus && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-md mx-auto mt-6 p-4 rounded-xl flex items-center gap-3 text-sm ${
              downloadStatus.type === 'success'
                ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                : 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-800'
            }`}
          >
            {downloadStatus.type === 'success' ? (
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span>{downloadStatus.message}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ResumeDownload;