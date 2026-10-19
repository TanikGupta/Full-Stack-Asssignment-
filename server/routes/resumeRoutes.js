const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const FILES_DIR = path.join(__dirname, '../files');

// Ensure files directory exists
if (!fs.existsSync(FILES_DIR)) {
  fs.mkdirSync(FILES_DIR, { recursive: true });
}

// Helper to ensure dummy/placeholder resume files exist if custom ones haven't been copied
const ensureResumeFiles = () => {
  const pdfPath = path.join(FILES_DIR, 'Tanik_Gupta_Resume.pdf');
  const docxPath = path.join(FILES_DIR, 'Tanik_Gupta_Resume.docx');

  if (!fs.existsSync(pdfPath)) {
    // Generate minimal valid PDF header/content so browsers and readers can open it
    const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 195 >>
stream
BT
/F1 22 Tf
72 720 Td
(TANIK GUPTA - RESUME) Tj
/F1 12 Tf
0 -30 Td
(B.Tech CSE - JK Lakshmipat University | Full-Stack Web Developer) Tj
0 -20 Td
(Email: TanikGupta@jklu.edu.in | Phone: +91 9929396663) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000010 00000 n 
0000000060 00000 n 
0000000117 00000 n 
0000000236 00000 n 
0000000483 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
555
%%EOF`;
    fs.writeFileSync(pdfPath, pdfContent);
  }

  if (!fs.existsSync(docxPath)) {
    // Minimal text content for docx fallback
    const docxContent = 'TANIK GUPTA RESUME\nB.Tech Computer Science & Engineering - JK Lakshmipat University\nEmail: TanikGupta@jklu.edu.in\nPhone: +91 9929396663\nGitHub: https://github.com/TanikGupta\nLinkedIn: https://www.linkedin.com/in/tanik-gupta-643a53313/';
    fs.writeFileSync(docxPath, docxContent);
  }
};

ensureResumeFiles();

// @route   GET /api/resume/pdf
// @desc    Download Tanik Gupta's Resume in PDF format
// @access  Public
router.get('/pdf', (req, res) => {
  ensureResumeFiles();
  const filePath = path.join(FILES_DIR, 'Tanik_Gupta_Resume.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.download(filePath, 'Tanik_Gupta_Resume.pdf', (err) => {
    if (err) {
      console.error('Error serving PDF resume:', err);
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: 'Could not download PDF resume' });
      }
    }
  });
});

// @route   GET /api/resume/docx
// @desc    Download Tanik Gupta's Resume in Word (.docx) format
// @access  Public
router.get('/docx', (req, res) => {
  ensureResumeFiles();
  const filePath = path.join(FILES_DIR, 'Tanik_Gupta_Resume.docx');
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
  res.download(filePath, 'Tanik_Gupta_Resume.docx', (err) => {
    if (err) {
      console.error('Error serving DOCX resume:', err);
      if (!res.headersSent) {
        res.status(500).json({ success: false, message: 'Could not download Word resume' });
      }
    }
  });
});

// @route   GET /api/resume/download?format=pdf|docx
// @desc    Generic endpoint supporting query format
// @access  Public
router.get('/download', (req, res) => {
  const format = (req.query.format || 'pdf').toLowerCase();
  if (format === 'docx' || format === 'doc') {
    return res.redirect('/api/resume/docx');
  }
  return res.redirect('/api/resume/pdf');
});

module.exports = router;
