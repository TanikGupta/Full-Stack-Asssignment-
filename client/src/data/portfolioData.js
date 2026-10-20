export const personalInfo = {
  name: "Tanik Gupta",
  rollNo: "2024BTech234",
  role: "Full-Stack Web Developer",
  subtitles: [
    "Full-Stack Web Developer",
    "General Secretary – Cultural Affairs (Student Council)",
    "Developer of Sahayak & Aarambh Auction",
    "B.Tech Computer Science & Engineering",
    "Campus Operations & Event Head"
  ],
  bio: "Detail-oriented and driven B.Tech CSE student at JK Lakshmipat University. Full-stack developer with production web platforms including the Sahayak Documentation Portal and Aarambh Auction Platform. Serving as the General Secretary of Cultural Affairs on the Student Council with extensive experience directing large-scale university fests, national hackathons, and operational teams.",
  location: "Jaipur, Rajasthan, India",
  email: "TanikGupta@jklu.edu.in",
  phone: "+91 9929396663",
  university: "JK Lakshmipat University, Jaipur",
  degree: "B.Tech Computer Science & Engineering",
  cgpa: "8.268",
  github: "https://github.com/TanikGupta",
  linkedin: "https://www.linkedin.com/in/tanik-gupta-643a53313/",
  status: "Student / General Secretary & Full-Stack Developer"
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: 88, icon: "Code2" },
    { name: "JavaScript (ES6+)", level: 90, icon: "FileCode" },
    { name: "HTML5 & CSS3", level: 92, icon: "Layout" },
    { name: "Tailwind CSS", level: 86, icon: "Palette" },
    { name: "Responsive UI Design", level: 90, icon: "Smartphone" }
  ],
  backend: [
    { name: "Node.js", level: 86, icon: "Server" },
    { name: "Express.js", level: 84, icon: "Cpu" },
    { name: "REST APIs", level: 89, icon: "Network" },
    { name: "Firebase Firestore", level: 80, icon: "Flame" },
    { name: "Python", level: 85, icon: "Terminal" }
  ],
  databaseAndTools: [
    { name: "MongoDB & Mongoose", level: 84, icon: "Database" },
    { name: "MySQL / DBMS", level: 88, icon: "HardDrive" },
    { name: "Git & GitHub", level: 88, icon: "GitBranch" },
    { name: "Linux / Red Hat CLI", level: 82, icon: "Layers" },
    { name: "VS Code & Postman", level: 90, icon: "Wrench" }
  ],
  leadership: [
    { name: "Team Leadership", level: 95, icon: "Users" },
    { name: "Event Planning & Execution", level: 96, icon: "Award" },
    { name: "Public Speaking & Representation", level: 92, icon: "Smartphone" },
    { name: "Logistics & Operations (SPOC)", level: 94, icon: "Layers" }
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
    live: "https://sahayak.jklu.edu.in",
    featured: true,
    highlights: [
      "Streamlined verification workflow for over 500+ onboarding students",
      "Role-based authentication & document upload management",
      "Real-time status updates powered by Firestore and Node.js REST APIs"
    ]
  },
  {
    id: 2,
    title: "Aarambh Auction Website",
    subtitle: "Live Bidding & Player Auction Platform",
    category: "Full Stack",
    description:
      "Full-stack interactive auction platform built for college fest bidding, player drafting, and real-time team budget management with dynamic state updates and transparent bidding logs.",
    tags: ["React.js", "Node.js", "Express", "REST APIs", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/TanikGupta",
    live: "https://ipl-auction-website-mu.vercel.app/",
    featured: true,
    highlights: [
      "Real-time team purse and remaining budget calculation engine",
      "Interactive player showcase cards with live bidding status updates",
      "Admin controls for auctioneer approvals and team bidder management"
    ]
  },
  {
    id: 3,
    title: "Bank Marketing Campaign Response Prediction",
    subtitle: "Machine Learning & Analytics Dashboard",
    category: "ML / Python",
    description:
      "Interactive data science dashboard and predictive modeling engine comparing classification metrics across Scikit-learn and XGBoost to evaluate client subscription probability.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "Plotly", "Pandas"],
    github: "https://github.com/TanikGupta",
    live: null,
    featured: true,
    highlights: [
      "Extensive feature engineering and data preprocessing with Pandas",
      "Hyperparameter tuning for XGBoost model yielding high precision/recall",
      "Interactive Streamlit web dashboard with live Plotly visualization"
    ]
  },
  {
    id: 4,
    title: "Event & Cultural Fest Management System",
    subtitle: "DBMS & Web Management Platform",
    category: "DBMS / Full Stack",
    description:
      "A robust web-based management system and database architecture designed to handle registrations, participant verification, and multi-track event scheduling for large-scale college fests.",
    tags: ["MySQL", "DBMS", "Node.js", "HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/TanikGupta",
    live: null,
    featured: true,
    highlights: [
      "Optimized relational database schema and complex SQL queries",
      "Automated scheduling conflicts detection and slot allocations",
      "Real-time attendee check-ins and registration reporting"
    ]
  },
  {
    id: 5,
    title: "Eco Charge Bag – Portable Solar Bag",
    subtitle: "CleanTech & Business Feasibility Concept",
    category: "Innovation",
    description:
      "Feasibility study and concept architecture for a smart portable backpack integrated with solar harvesting and high-efficiency battery backup for on-the-go electronic device charging.",
    tags: ["Product Design", "Feasibility Analysis", "CleanTech", "MS Excel"],
    github: "https://github.com/TanikGupta",
    live: null,
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
      "Pursuing core computer science courses including Data Structures & Algorithms, DBMS, Computer Networks, and Full-Stack Web Engineering at JKLU."
  },
  {
    type: "leadership",
    title: "General Secretary – Cultural Affairs (Student Council)",
    institution: "JK Lakshmipat University",
    period: "2026 – 2027",
    badge: "Student Council",
    description:
      "General Secretary of Cultural Affairs on the Student Council, leading university-wide cultural festivals, festival celebrations, large-scale stage productions, inter-collegiate delegations, and budget allocations."
  },
  {
    type: "leadership",
    title: "Class Representative (CR) – BTech 3rd Year Sec B",
    institution: "JK Lakshmipat University",
    period: "2026 – Present",
    badge: "Academic Leadership",
    description:
      "Serving as the primary liaison between faculty, administration, and students, facilitating academic coordination and course feedback."
  },
  {
    type: "experience",
    title: "Intern – Academic Affairs",
    institution: "JK Lakshmipat University",
    period: "2026",
    badge: "Institutional Role",
    description:
      "Assisting university administrative leadership in academic scheduling, policy documentation, and student onboarding processes."
  },
  {
    type: "experience",
    title: "Full-Stack Web Developer Intern (Practice School-I)",
    institution: "Sahayak & Aarambh Portals Team",
    period: "July 2026",
    badge: "Software Engineering",
    description:
      "Engineered the full-stack Sahayak student documentation portal and the Aarambh live auction platform."
  },
  {
    type: "leadership",
    title: "Organizing Head (OH) – Aarambh'26 & Mentor – Parichay'26",
    institution: "JK Lakshmipat University",
    period: "2026",
    badge: "Flagship Event Lead",
    description:
      "Directed end-to-end event planning, budget allocations, stage operations, and peer mentorship for university orientation and freshers."
  },
  {
    type: "leadership",
    title: "Transport Coordinator (Student Council) & SPOC Route 4",
    institution: "JK Lakshmipat University",
    period: "2025 – 2026",
    badge: "Council Role",
    description:
      "Directed campus transit logistics and served as Single Point of Contact (SPOC) for Route 4, coordinating daily transit for hundreds of students."
  },
  {
    type: "leadership",
    title: "Co-Chair – Community & Development Club (CDC)",
    institution: "JK Lakshmipat University",
    period: "2024 – 2025",
    badge: "Student Council",
    description:
      "Headed community initiatives, blood donation drives, campus awareness, and student development workshops."
  },
  {
    type: "leadership",
    title: "Core Operations Lead – Flagship College Fests",
    institution: "Sabrang, Spardha, HackJKLU, DGD & Muqabla",
    period: "2024 – 2026",
    badge: "Operations Lead",
    description:
      "Served in Core / Coordinator / Volunteer roles across Sabrang (24, 25, 26), HackJKLU (v4.0, v5.0), Spardha (25, 26), Muqabla'25, and Design Guru Day (DGD'25)."
  },
  {
    type: "education",
    title: "Senior Secondary (12th CBSE)",
    institution: "Vardhman International School, Jaipur",
    period: "Graduated 2024",
    badge: "80%",
    description: "Completed senior secondary CBSE curriculum with a focus on Physics, Chemistry, and Mathematics."
  },
  {
    type: "education",
    title: "Secondary School (10th CBSE)",
    institution: "Ryan International School, Jaipur",
    period: "Graduated 2022",
    badge: "92%",
    description: "Graduated with top academic honors in 10th CBSE board examinations."
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
    title: "HackJKLU v5.0 & v4.0 – National Hackathons",
    issuer: "JK Lakshmipat University",
    parts: "Core Food & Accommodation Lead",
    date: "2025 – 2026",
    icon: "Award",
    link: "https://jklu.edu.in",
    skills: ["Hackathon Logistics", "Hospitality Management", "Crisis Resolution"]
  },
  {
    title: "Flagship Institutional Events Coordination",
    issuer: "JKLU University Administration",
    parts: "Convocation '24 & '25, Teachers Day '24",
    date: "2024 – 2025",
    icon: "Users",
    link: "https://jklu.edu.in",
    skills: ["Protocol Management", "Dignitary Hospitality", "Event Planning"]
  }
];

export const culturalData = [
  {
    title: "Vocal Performance (Song)",
    occasions: "26 Jan '25 (Republic Day) & 15 August '25 (Independence Day)",
    type: "Music"
  },
  {
    title: "Theatrical Drama",
    occasions: "Mentor's Day Institutional Celebration",
    type: "Theatre"
  },
  {
    title: "Dance Performance",
    occasions: "Aarambh'26 Orientation Fest",
    type: "Dance"
  }
];
