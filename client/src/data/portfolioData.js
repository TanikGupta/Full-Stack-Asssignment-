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
    ],
    deepDive: {
      problem: "University admissions faced severe bottlenecks handling manual paper-based document submission and physical verification lines for incoming undergraduate batches.",
      solution: "Architected a unified digital onboarding platform where students upload identity proofs, certificates, and academic transcripts with live document verification status indicators.",
      architecture: [
        "Frontend: Responsive client built with semantic HTML5, modern CSS3, and dynamic JavaScript validation.",
        "Backend: Node.js & Express REST API router orchestrating file verification and status triggers.",
        "Database / Storage: Firebase Firestore for real-time document status synchronization."
      ],
      impact: "Reduced student registration queue times by over 70% during the university admission cycle."
    }
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
    ],
    deepDive: {
      problem: "Live sports auctions during college fests suffered from manual calculations, delayed purse updates, and bidding discrepancy disputes.",
      solution: "Engineered an IPL-style real-time bidding interface with automated purse balance deductions, maximum bid checks, and transparent bid history auditing.",
      architecture: [
        "Frontend: React.js with Tailwind CSS, offering instantaneous state reflections on player cards.",
        "Budget Engine: Client & server validation preventing bids exceeding franchise purse limits.",
        "Live Logs: Chronological bid ledger displaying timestamps, teams, and bid increments."
      ],
      impact: "Powering the annual Aarambh sports auction with zero budget calculation conflicts."
    }
  },
  {
    id: 3,
    title: "Design Project Awareness Website",
    subtitle: "Interactive Educational & Awareness Platform",
    category: "Frontend / Web",
    description:
      "Interactive responsive web portal built to present design thinking methodologies, creative project documentation, and user awareness through structured visual storytelling.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"],
    github: "https://github.com/TanikGupta/Design-Project-Awareness-Website",
    live: "https://tanikgupta.github.io/Design-Project-Awareness-Website/",
    featured: true,
    highlights: [
      "Deployed live on GitHub Pages with fully responsive mobile-first UI",
      "Interactive multimedia design project documentation modules",
      "Clean semantic architecture with accessible cross-device layouts"
    ],
    deepDive: {
      problem: "Traditional academic design presentations often rely on flat slides that fail to engage audiences or convey iterative user-centric design steps.",
      solution: "Built a visually captivating web narrative breaking down empathy maps, ideation phases, and prototype testing into interactive sections.",
      architecture: [
        "Markup & Styling: Semantic HTML5, modern flexbox/grid CSS with CSS custom properties.",
        "Interactivity: Vanilla JavaScript scroll-triggered highlights and dynamic modal previews.",
        "Deployment: Fully automated CI/CD deployment via GitHub Pages."
      ],
      impact: "Used as a benchmark reference project for design thinking documentation at JKLU."
    }
  },
  {
    id: 4,
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
    ],
    deepDive: {
      problem: "Banks waste substantial call-center resources on broad telemarketing campaigns with low conversion rates on term deposit subscriptions.",
      solution: "Trained and benchmarked multiple ML classification models to identify prospective customers with high propensity to subscribe.",
      architecture: [
        "Data Pipeline: Outlier removal, SMOTE class balancing, and one-hot categorical encoding via Pandas.",
        "Modeling: Evaluated Logistic Regression, Random Forest, and tuned XGBoost with ROC-AUC analysis.",
        "UI Layer: Streamlit web dashboard allowing bankers to input customer metrics and receive real-time prediction probabilities."
      ],
      impact: "Identified high-conversion segments, potentially reducing non-targeted telemarketing outreach by up to 45%."
    }
  },
  {
    id: 5,
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
    ],
    deepDive: {
      problem: "Managing 15+ simultaneous competitive tracks across Sabrang and Spardha led to scheduling conflicts and scattered participant data.",
      solution: "Created a normalized MySQL relational database schema with referential integrity to manage participants, teams, venues, and time slots.",
      architecture: [
        "Database: 3NF normalized tables with indexing on registration IDs and event codes.",
        "Backend: Node.js API endpoints executing stored procedures and parameterized SQL queries.",
        "Frontend: Responsive admin panel for quick check-ins and attendance generation."
      ],
      impact: "Seamlessly scheduled multi-venue collegiate events with zero double-booking incidents."
    }
  },
  {
    id: 6,
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
    ],
    deepDive: {
      problem: "College students and outdoor commuters regularly encounter drained electronic devices without immediate wall outlet access.",
      solution: "Designed an ergonomic backpack concept integrating lightweight monocrystalline solar panels with an intelligent power-distribution battery pack.",
      architecture: [
        "Power Modeling: Calculated solar wattage output under varying daylight irradiance conditions.",
        "Costing & Feasibility: Structured BOM (Bill of Materials) and unit economics modeling in MS Excel.",
        "Safety: Thermal dissipation precautions and over-charge circuit isolation design."
      ],
      impact: "Awarded top marks in entrepreneurship and engineering design feasibility evaluation."
    }
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
    title: "MathWorks Training Services – Image Processing Onramp",
    issuer: "MathWorks",
    parts: "100% Course Completion",
    date: "14 August 2026",
    icon: "Binary",
    link: "/certificates/image_processing_onramp.pdf",
    links: [
      { label: "View PDF", url: "/certificates/image_processing_onramp.pdf" }
    ],
    skills: ["MATLAB", "Image Processing", "Filtering & Segmentation", "Feature Extraction", "Color Plane Analysis"]
  },
  {
    title: "Infosys Springboard – Database Management System",
    issuer: "Infosys Springboard",
    parts: "Part-1 & Part-2",
    date: "14 November 2025",
    icon: "Database",
    link: "/certificates/infosys_dbms_part1.pdf",
    links: [
      { label: "Part 1 PDF", url: "/certificates/infosys_dbms_part1.pdf" },
      { label: "Part 2 PDF", url: "/certificates/infosys_dbms_part2.pdf" }
    ],
    skills: ["SQL", "Relational Database Design", "Transactions & ACID", "Indexing & Query Optimization"]
  },
  {
    title: "Red Hat System Administration I (RH124 - RHA) Ver. 10",
    issuer: "Red Hat Academy",
    parts: "40 Credit Hours",
    date: "17 April 2026",
    icon: "Server",
    link: "/certificates/redhat_system_administration.pdf",
    links: [
      { label: "View PDF", url: "/certificates/redhat_system_administration.pdf" },
      { label: "Credly Badge", url: "https://www.credly.com/badges/177c6dce-6449-4c33-bf74-c0795070eec9" }
    ],
    skills: ["Linux CLI", "User Administration", "Process Management", "File Permissions", "Storage Config"]
  }
];

export const courseworkData = [
  { code: "CS201", name: "Data Structures & Algorithms", focus: "Trees, Graphs, Sorting, Time Complexity (O(n))", status: "Completed" },
  { code: "CS202", name: "Database Management Systems", focus: "Normalization, SQL, ACID Properties, Relational Schema", status: "Completed" },
  { code: "CS204", name: "Computer Networks", focus: "TCP/IP, OSI Layers, Socket Programming, HTTP/REST Protocols", status: "Currently Enrolled" },
  { code: "CS205", name: "Operating Systems", focus: "Process Scheduling, Concurrency & Deadlocks, Memory Management, Linux Kernels", status: "Completed" },
  { code: "CS301", name: "Object-Oriented Programming", focus: "Encapsulation, Polymorphism, C++, Java Software Design", status: "Completed" },
  { code: "CS303", name: "Machine Learning Fundamentals", focus: "Supervised Learning, Scikit-learn, XGBoost, Model Benchmarking", status: "Completed" }
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
