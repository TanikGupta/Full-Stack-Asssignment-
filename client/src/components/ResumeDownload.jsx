import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const ResumeDownload = () => {
  const [downloadingFormat, setDownloadingFormat] = useState(null);
  const [downloadStatus, setDownloadStatus] = useState(null);

  const handleDownload = async (format) => {
    try {
      setDownloadingFormat(format);
      setDownloadStatus(null);

      const endpoint = `${API_BASE}/api/resume/${format}`;

      // Create an anchor and trigger the download via browser
      const link = document.createElement('a');
      link.href = endpoint;
      link.setAttribute('download', `Tanik_Gupta_Resume.${format}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadStatus({
        type: 'success',
        message: `Successfully requested ${format.toUpperCase()} resume from backend!`
      });
    } catch (err) {
      console.error('Download error:', err);
      setDownloadStatus({
        type: 'error',
        message: 'Could not connect to backend server. Please ensure server is running.'
      });
    } finally {
      setTimeout(() => setDownloadingFormat(null), 1000);
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
            Served securely via dynamic Node.js / Express backend endpoints in both standard PDF and editable Microsoft Word formats.
          </p>
        </motion.div>

        {/* Download Options Cards */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PDF Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950/50 text-red-500 flex items-center justify-center mb-5 border border-red-200 dark:border-red-900/50">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                PDF Document
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Format: .PDF | Route: /api/resume/pdf
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Standard ATS-friendly document format, ideal for recruiters, digital viewing, and printing.
              </p>
            </div>

            <button
              onClick={() => handleDownload('pdf')}
              disabled={downloadingFormat === 'pdf'}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 shadow-md shadow-red-500/20 active:scale-98 transition-all disabled:opacity-50"
            >
              {downloadingFormat === 'pdf' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Word (.docx) Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950/50 text-blue-500 flex items-center justify-center mb-5 border border-blue-200 dark:border-blue-900/50">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Microsoft Word
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">
                Format: .DOCX | Route: /api/resume/docx
              </p>
              <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Fully editable Word document format compatible with Microsoft Word and Google Docs.
              </p>
            </div>

            <button
              onClick={() => handleDownload('docx')}
              disabled={downloadingFormat === 'docx'}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 active:scale-98 transition-all disabled:opacity-50"
            >
              {downloadingFormat === 'docx' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download DOCX</span>
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
