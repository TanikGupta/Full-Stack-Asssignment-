# 🚀 Full-Stack MERN Personal Portfolio | Tanik Gupta

> A production-ready, full-stack personal portfolio website built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js), styled with **Tailwind CSS**, and enhanced with **Framer Motion** animations.

---

## 🌐 Live Deployments
- **Frontend (Vercel / Netlify)**: `https://tanik-gupta-portfolio.vercel.app` *(or your custom deployed URL)*
- **Backend API (Render / Railway)**: `https://tanik-gupta-api.onrender.com` *(or your custom deployed URL)*
- **GitHub Repository**: [https://github.com/TanikGupta/full-stack-mern-portfolio](https://github.com/TanikGupta)

---

## 📌 Features & Architecture

### 1. **Hero & Landing Section**
- Dynamic typewriter effect showcasing key engineering and campus leadership titles.
- Modern glassmorphic gradient backdrop with subtle interactive accents.
- Direct Call-to-Action (CTA) for CV download and contact section.

### 2. **About Me Section**
- Professional summary highlighting academic credentials (B.Tech CSE at JKLU, CGPA: 8.268).
- Interactive profile card with stylized avatar, quick-facts, and core technical passions.

### 3. **Interactive Skills Section**
- Filterable by **All**, **Frontend**, **Backend**, and **Tools & Database**.
- Animated proficiency progress bars with interactive hover tooltips showing mastery levels.

### 4. **Projects Showcase**
- Interactive project cards with live links and GitHub repository references:
  1. **SAHAYAK – Student Onboarding & Documentation Portal** (Practice School-I Full-Stack Web Dev)
  2. **Bank Marketing Campaign Response Prediction** (Machine Learning & Streamlit Dashboard)
  3. **Event & Cultural Fest Management System** (Relational DBMS & SQL Platform)
  4. **Eco Charge Bag – Portable Solar Bag** (CleanTech Product Feasibility Concept)
- Category filter buttons (Full Stack, ML / Python, DBMS).

### 5. **CV / Resume Download Hub (Backend Powered)**
- Served securely through Express.js backend endpoints:
  - `GET /api/resume/pdf` — Streams standard PDF resume.
  - `GET /api/resume/docx` — Streams editable Microsoft Word (.docx) resume.
- Handled with correct `Content-Disposition: attachment` headers.

### 6. **Education & Experience Timeline**
- Animated vertical milestone timeline layout.
- Academic history (JKLU B.Tech CSE, Vardhman International School, Ryan International School).
- Leadership tenures (General Secretary Cultural, Transport Coordinator, CDC Co-Chair).

### 7. **Certifications & Achievements**
- Verified credentials grid:
  - Infosys Springboard (Database Management System Part 1 & 2)
  - Red Hat System Administration (RH124 - RHA Ver. 10)
  - HackJKLU v5.0 National Hackathon Core Lead
  - Sabrang'26 & Spardha'26 Operations & Discipline Lead

### 8. **Contact Form (Full-Stack MERN Integration)**
- Client-side validation for Name, Email, and Message.
- Real-time POST request dispatched to `/api/contact`.
- Data validated and stored in **MongoDB** via **Mongoose**.
- Confetti celebration feedback on successful submission.

### 9. **Dark Mode / Light Mode Toggle**
- Seamless theme toggle persisted in `localStorage`.
- Handled via Tailwind CSS `class` mode.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, React Router v6, Tailwind CSS, Framer Motion, Lucide Icons, Canvas Confetti, Vite |
| **Backend** | Node.js, Express.js, CORS, Dotenv |
| **Database** | MongoDB & Mongoose ODM |
| **Deployment** | Vercel (Frontend), Render (Backend), MongoDB Atlas (Database) |

---

## 📂 Project Directory Structure

```text
Full Stack Assignment/
├── .gitignore               # Strict exclusion of node_modules and .env files
├── package.json             # Root helper scripts
├── README.md                # Comprehensive documentation
│
├── server/                  # Node.js + Express REST API
│   ├── files/               # Resume files (PDF and DOCX)
│   ├── models/
│   │   └── Contact.js       # Mongoose Schema for contact form submissions
│   ├── routes/
│   │   ├── contactRoutes.js # POST & GET contact API routes
│   │   └── resumeRoutes.js  # Resume download routes (/pdf, /docx)
│   ├── .env.example         # Template for environment variables
│   ├── package.json
│   └── server.js            # Express server entry point
│
└── client/                  # React.js Single-Page Application (Vite)
    ├── src/
    │   ├── components/      # Modular UI Components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Skills.jsx
    │   │   ├── Projects.jsx
    │   │   ├── Timeline.jsx
    │   │   ├── Certifications.jsx
    │   │   ├── ResumeDownload.jsx
    │   │   ├── Contact.jsx
    │   │   └── Footer.jsx
    │   ├── context/
    │   │   └── ThemeContext.jsx # Light / Dark mode state provider
    │   ├── data/
    │   │   └── portfolioData.js # Centralized portfolio content
    │   ├── App.jsx          # Route configuration
    │   ├── main.jsx         # React DOM mount point
    │   └── index.css        # Tailwind & custom utilities
    ├── index.html
    ├── tailwind.config.js
    ├── vite.config.js
    ├── .env.example
    └── package.json
```

---

## ⚙️ Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or later installed
- **MongoDB**: Local MongoDB community edition running OR a free MongoDB Atlas connection URI

### 2. Clone the Repository
```bash
git clone https://github.com/TanikGupta/full-stack-mern-portfolio.git
cd full-stack-mern-portfolio
```

### 3. Backend Setup
```bash
cd server
npm install
```
Create a `.env` file inside `/server` (copy from `.env.example`):
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio_db
CLIENT_URL=http://localhost:5173
```
Start the backend server:
```bash
npm start
# Server runs on http://localhost:5000
```

### 4. Frontend Setup
Open a new terminal window:
```bash
cd client
npm install
```
Create a `.env` file inside `/client` (copy from `.env.example`):
```env
VITE_API_URL=http://localhost:5000
```
Start the Vite development server:
```bash
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 📡 API Endpoints Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Health check route verifying server and database status |
| `POST` | `/api/contact` | Submits contact message `{ name, email, message }` to MongoDB |
| `GET` | `/api/contact` | Retrieves submitted messages (for evaluator demo) |
| `GET` | `/api/resume/pdf` | Streams Tanik Gupta's resume in **PDF** format |
| `GET` | `/api/resume/docx` | Streams Tanik Gupta's resume in **Word (.docx)** format |

---

## 🚀 Deployment Guide

### A. Deploy Backend on Render
1. Push your repository to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/) and create a **New Web Service**.
3. Connect your GitHub repository.
4. Set:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
5. Under **Environment Variables**, add:
   - `MONGODB_URI`: Your MongoDB Atlas cluster connection string
   - `CLIENT_URL`: Your deployed frontend URL
   - `NODE_ENV`: `production`

### B. Deploy Frontend on Vercel
1. Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
2. Import the GitHub repository.
3. Set:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
4. Under **Environment Variables**, add:
   - `VITE_API_URL`: Your live Render backend URL (e.g. `https://your-backend.onrender.com`)
5. Click **Deploy**.

---

## 🛡️ Security & Git Hygiene
- All sensitive variables (`MONGODB_URI`, private API keys) are managed strictly using `.env` files.
- The `.gitignore` file strictly excludes all `.env` files and `node_modules/` to ensure zero credential exposure on GitHub.
