export const personalInfo = {
  name: "Tanik Gupta",
  role: "Full-Stack Web Developer",
  subtitles: [
    "Full-Stack Web Developer",
    "B.Tech Computer Science & Engineering Student",
    "MERN Stack Enthusiast",
    "Campus Leader & Operations Lead"
  ],
  bio: "Detail-oriented and driven B.Tech CSE student at JK Lakshmipat University with a solid foundation in MERN stack development, Python, DSA, and DBMS. Proven leadership and organizational capabilities demonstrated through core roles in multiple college committees and large-scale tech/cultural events. Seeking internship and entry-level opportunities to apply technical expertise and problem-solving skills in a high-impact environment.",
  location: "Jaipur, Rajasthan, India",
  email: "TanikGupta@jklu.edu.in",
  phone: "+91 9929396663",
  university: "JK Lakshmipat University, Jaipur",
  degree: "B.Tech Computer Science & Engineering",
  cgpa: "8.268",
  github: "https://github.com/TanikGupta",
  linkedin: "https://www.linkedin.com/in/tanik-gupta-643a53313/",
  status: "Student / Aspiring Full-Stack Engineer"
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: 85, icon: "Code2" },
    { name: "JavaScript (ES6+)", level: 88, icon: "FileCode" },
    { name: "HTML5 & CSS3", level: 92, icon: "Layout" },
    { name: "Tailwind CSS", level: 85, icon: "Palette" },
    { name: "Responsive UI Design", level: 90, icon: "Smartphone" }
  ],
  backend: [
    { name: "Node.js", level: 84, icon: "Server" },
    { name: "Express.js", level: 82, icon: "Cpu" },
    { name: "REST APIs", level: 88, icon: "Network" },
    { name: "Firebase Firestore", level: 78, icon: "Flame" },
    { name: "Python", level: 85, icon: "Terminal" }
  ],
  databaseAndTools: [
    { name: "MongoDB & Mongoose", level: 82, icon: "Database" },
    { name: "MySQL / DBMS", level: 86, icon: "HardDrive" },
    { name: "Git & GitHub", level: 88, icon: "GitBranch" },
    { name: "Linux / Virtual Machines", level: 80, icon: "Layers" },
    { name: "VS Code & Postman", level: 90, icon: "Wrench" }
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "SAHAYAK – Student Onboarding Portal",
    subtitle: "Internship Project | Practice School-I",
    category: "Full Stack",
    description:
      "A comprehensive full-stack student documentation portal built to streamline registration, document verification, and administrative workflow for newly admitted university students.",
    tags: ["Node.js", "Express", "JavaScript", "HTML5", "CSS3", "Firebase Firestore", "REST APIs"],
    github: "https://github.com/TanikGupta",
    live: "https://github.com/TanikGupta",
    featured: true,
    highlights: [
      "Streamlined verification workflow for over 500+ onboarding students",
      "Role-based authentication & document upload management",
      "Real-time status updates powered by Firestore and Node.js REST APIs"
    ]
  },
  {
    id: 2,
    title: "Bank Marketing Campaign Response Prediction",
    subtitle: "Machine Learning & Analytics Dashboard",
    category: "ML / Python",
    description:
      "Interactive data science dashboard and predictive modeling engine comparing classification metrics across Scikit-learn and XGBoost to evaluate client subscription probability.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Plotly", "Pandas"],
    github: "https://github.com/TanikGupta",
    live: "https://github.com/TanikGupta",
    featured: true,
    highlights: [
      "Extensive feature engineering and data preprocessing with Pandas",
      "Hyperparameter tuning for XGBoost model yielding high precision/recall",
      "Interactive Streamlit web dashboard with live Plotly visualization"
    ]
  },
  {
    id: 3,
    title: "Event & Cultural Fest Management System",
    subtitle: "DBMS & Web Management Platform",
    category: "DBMS / Full Stack",
    description:
      "A robust web-based management system and database architecture designed to handle registrations, participant verification, and multi-track event scheduling for large-scale college fests.",
    tags: ["MySQL", "DBMS", "Node.js", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/TanikGupta",
    live: "https://github.com/TanikGupta",
    featured: true,
    highlights: [
      "Optimized relational database schema and complex SQL queries",
      "Automated scheduling conflicts detection and slot allocations",
      "Real-time attendee check-ins and registration reporting"
    ]
  },
  {
    id: 4,
    title: "Eco Charge Bag – Portable Solar Bag",
    subtitle: "Hardware & Business Feasibility Concept",
    category: "Innovation",
    description:
      "Feasibility study and concept architecture for a smart portable backpack integrated with solar harvesting and high-efficiency battery backup for on-the-go electronic device charging.",
    tags: ["Product Design", "Feasibility Analysis", "CleanTech", "MS Excel"],
    github: "https://github.com/TanikGupta",
    live: "https://github.com/TanikGupta",
    featured: false,
    highlights: [
      "Solar efficiency calculations and power output curve modeling",
      "Complete market feasibility, customer persona, and costing analysis"
    ]
  }
];

export const timelineData = [
  {
    type: "education",
    title: "B.Tech in Computer Science & Engineering",
    institution: "JK Lakshmipat University, Jaipur",
    period: "2024 – 2028",
    badge: "CGPA: 8.268",
    description:
      "Pursuing core computer science courses including Data Structures & Algorithms, Database Management Systems, Computer Networks, and Full-Stack Web Development."
  },
  {
    type: "experience",
    title: "Full-Stack Web Developer Intern (Practice School-I)",
    institution: "Sahayak Portal Development Team",
    period: "July 2026",
    badge: "Internship",
    description:
      "Engineered the full-stack student documentation portal to automate student verification, document validation, and registration workflows."
  },
  {
    type: "leadership",
    title: "General Secretary – Cultural (Student Council)",
    institution: "JK Lakshmipat University",
    period: "2026 – 2027",
    badge: "Leadership Role",
    description:
      "Elected to direct university-wide cultural activities, budget allocations, and inter-collegiate event logistics."
  },
  {
    type: "leadership",
    title: "Transport Coordinator (Student Council)",
    institution: "JK Lakshmipat University",
    period: "2025 – 2026",
    badge: "Council Role",
    description:
      "Managed university transit operations, coordinating logistics for 1,000+ students and event delegates."
  },
  {
    type: "leadership",
    title: "Co-Chair – Community & Development Club (CDC)",
    institution: "JK Lakshmipat University",
    period: "2024 – 2025",
    badge: "Leadership Role",
    description:
      "Led community engagement initiatives, social drives, and student peer mentoring programs across campus."
  },
  {
    type: "education",
    title: "Senior Secondary (12th CBSE)",
    institution: "Vardhman International School, Jaipur",
    period: "Graduated 2024",
    badge: "80%",
    description: "Completed secondary education under CBSE with a focus on Physics, Chemistry, and Mathematics."
  },
  {
    type: "education",
    title: "Secondary School (10th CBSE)",
    institution: "Ryan International School, Jaipur",
    period: "Graduated 2022",
    badge: "92%",
    description: "Awarded top academic honors in 10th CBSE examinations."
  }
];

export const certificationsData = [
  {
    title: "Infosys Springboard – Database Management System",
    issuer: "Infosys Springboard",
    parts: "Part-1 & Part-2",
    date: "Certified",
    icon: "Database",
    link: "https://infyspringboard.onwingspan.com",
    skills: ["SQL", "Relational Database Design", "Transactions", "Indexing"]
  },
  {
    title: "Red Hat System Administration (RH124 - RHA) Ver. 10",
    issuer: "Red Hat Academy",
    parts: "Version 10",
    date: "Certified",
    icon: "Server",
    link: "https://www.redhat.com/en/services/training/rh124-red-hat-system-administration-i",
    skills: ["Linux CLI", "User Administration", "Process Management", "File Permissions"]
  },
  {
    title: "HackJKLU v5.0 – Annual National Hackathon",
    issuer: "JK Lakshmipat University",
    parts: "Core Team (Food & Accommodation Lead)",
    date: "2026",
    icon: "Award",
    link: "https://jklu.edu.in",
    skills: ["Hackathon Operations", "Large-scale Hospitality", "Problem Solving"]
  },
  {
    title: "Sabrang'26 & Spardha'26 College Fests",
    issuer: "JKLU Cultural & Sports Boards",
    parts: "Core Discipline & Logistics Lead",
    date: "2026",
    icon: "Users",
    link: "https://jklu.edu.in",
    skills: ["Event Operations", "Discipline Management", "Team Leadership"]
  }
];
