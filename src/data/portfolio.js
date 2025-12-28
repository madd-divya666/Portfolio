export const portfolioData = {
  personal: {
    name: "Divya Maddheshia",
    headline:
      "Full-Stack MERN Developer | Backend & API Development | AI Projects",
    email: "divyamaddheshia6@gmail.com",
    summary:
      "I am a Computer Science and Engineering graduate with experience in building full-stack applications using React.js, Node.js, Express.js, MongoDB, and PostgreSQL. During my internship at Gamux, I worked on backend APIs, database operations, and frontend integration. I enjoy working on backend systems, learning new technologies, and exploring AI and machine learning to build useful and user-friendly applications.",
  },

  socialLinks: {
    github: "https://github.com/madd-divya666",
    linkedin: "https://www.linkedin.com/in/divya-maddheshia",
    leetcode: "https://leetcode.com/u/Divya_madd63/",
    geeksforgeeks: "https://www.geeksforgeeks.org/profile/maddivsvs0",
  },
  about: {
    intro:
      "Computer Science and Engineering graduate who loves building real-world web applications and learning by doing.",

    story: [
      "I enjoy turning ideas into working products using modern web technologies.",
      "During my internship at Gamux, I worked on backend APIs, databases, and frontend integration, which helped me understand how real products are built.",
      "Problem-solving is something I truly enjoy, and I regularly practice Data Structures and Algorithms to improve my thinking.",
      "I also explore AI and machine learning to make applications smarter and more helpful.",
    ],

    highlights: [
      {
        icon: "code",
        title: "Full-Stack Development",
        text: "Building clean and scalable applications using the MERN stack.",
      },
      {
        icon: "database",
        title: "Backend & Databases",
        text: "Designing APIs and working with MongoDB and PostgreSQL.",
      },
      {
        icon: "brain",
        title: "Problem Solving",
        text: "Solved 800+ DSA problems combined across platforms.",
      },
      {
        icon: "rocket",
        title: "Always Learning",
        text: "Exploring AI, ML, and new tools to build better products.",
      },
    ],

    codingProfiles: {
      totalSolved: "800+",
      platforms: [
        {
          name: "LeetCode",
          icon: "leetcode",
          description: "DSA, algorithms, and coding patterns",
          linkKey: "leetcode",
        },
        {
          name: "GeeksforGeeks",
          icon: "gfg",
          description: "Core CS topics and problem-solving",
          linkKey: "geeksforgeeks",
        },
      ],
    },

    closing:
      "I’m looking for opportunities where I can grow as a software engineer, work on meaningful products, and learn from experienced teams.",
  },

  skills: {
    programmingLanguages: ["C++", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    frameworks: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    databases: ["MongoDB", "PostgreSQL"],
    machineLearning: ["NumPy", "Pandas", "Scikit-learn"],
    aiAndLLM: ["Google Gemini API", "LLM Integration", "Prompt Engineering"],
    tools: ["Git", "GitHub", "Postman", "VS Code", "Google Colab", "Power BI"],
    coreSubjects: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Computer Networks",
      "Machine Learning",
    ],
  },

  experience: [
    {
      role: "Software Engineer Intern",
      company: "Gamux",
      duration: "June 2025 – Nov 2025",
      location: "Remote",
      details: [
        "Developed and maintained RESTful backend APIs using Node.js and Express.js for core application features.",
        "Designed and optimized MongoDB schemas, implemented data validation, and handled efficient database queries.",
        "Integrated React.js frontend components with backend services to deliver seamless user experiences.",
        "Collaborated with cross-functional team members using GitHub for version control, code reviews, and issue tracking.",
        "Built responsive and reusable UI components using Tailwind CSS to improve usability and performance.",
        "Assisted in debugging, testing, and improving application performance across different modules.",
      ],
      techUsed: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "GitHub",
      ],
    },
  ],

  projects: [
    {
      title: "The Reading Room",
      category: "Full Stack",
      overview:
        "A production-ready MERN-based e-learning platform that enables structured learning through lectures, PDFs, and quizzes with secure payments.",
      features: [
        "Student & Admin dashboards",
        "Role-based access control (students & admins)",
        "JWT-based authentication and authorization",
        "Lecture videos, PDFs, and quiz portal",
        "Braintree payment integration",
        "Search, filters, wishlist, and user dashboards",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Braintree",
        "Bootstrap",
      ],
      github: "https://github.com/madd-divya666/Reading-Room",
      live: "https://reading-room-syiu.onrender.com",
    },

    {
      title: "Freelancing App",
      category: "Full Stack",
      overview:
        "A full-stack freelance marketplace platform that connects clients and freelancers for project collaboration and management.",
      features: [
        "Client, Freelancer, and Admin role-based workflows",
        "Project posting and application system",
        "Project management dashboard",
        "Real-time chat using Socket.IO",
        "JWT-based authentication and authorization",
        "Scalable RESTful APIs",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "HTML",
        "CSS",
      ],
      github: "https://github.com/madd-divya666/Freelancing-App",
      live: "https://freelancing-app-of4n.onrender.com",
    },

    {
      title: "Chatter",
      category: "Real-Time",
      overview:
        "A real-time chat application that enables instant messaging using Socket.IO with secure authentication.",
      features: [
        "Real-time messaging using Socket.IO",
        "JWT authentication",
        "Scalable backend APIs",
        "Modern responsive UI",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
      ],
      github: "https://github.com/madd-divya666/Chatter-App",
      live: "https://chatter-app-7gp9.onrender.com/",
    },
    {
      title: "Weather App",
      category: "Frontend",
      overview:
        "A responsive weather application built using HTML, CSS, and JavaScript that provides real-time weather information.",
      features: [
        "Real-time weather data using public APIs",
        "Search by city name",
        "Displays temperature, humidity, wind speed, and conditions",
        "Responsive UI for mobile and desktop",
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
    },

    {
      title: "DSA Instructor Chat",
      category: "AI",
      overview:
        "An AI-powered chatbot designed to help users learn Data Structures and Algorithms.",
      features: [
        "Step-by-step DSA explanations",
        "Prompt-controlled AI responses",
        "Interactive chat-based learning",
      ],
      techStack: ["JavaScript", "Node.js", "Google Gemini API"],
    },

    {
      title: "AI Code Generator",
      category: "AI",
      overview:
        "An AI-based application that generates responsive UI code with live preview.",
      features: [
        "AI-generated frontend code",
        "Live code preview",
        "Syntax highlighting",
        "Dark/Light mode support",
      ],
      techStack: ["React.js", "Tailwind CSS", "Google Gemini API"],
    },

    {
      title: "AI Website Builder",
      category: "AI",
      overview:
        "An AI-powered tool that automatically generates website folders and files.",
      features: [
        "Automated HTML/CSS/JS generation",
        "Dynamic folder & file creation",
        "Prompt-based website building",
      ],
      techStack: ["Node.js", "Google Gemini API", "Shell Automation"],
    },

    {
      title: "Diabetes Prediction System",
      category: "ML",
      overview: "A machine learning system that predicts diabetes using SVM.",
      features: [
        "Support Vector Machine model",
        "Health parameter analysis",
        "Accurate predictions",
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    },
    {
      title: "Bank Segmentation Analysis",
      category: "SQL & Analytics",
      overview:
        "SQL-based analysis to segment bank customers and uncover behavioral patterns.",
      features: [
        "200+ customers and 1,000+ transactions dataset",
        "Customer segmentation and dormant account analysis",
        "Marketing and reactivation insights",
        "Optimized analytical SQL queries",
      ],
      techStack: [
        "SQL",
        "PostgreSQL",
        "CTEs",
        "JOINs",
        "CASE WHEN",
        "GROUP BY",
        "Data Analysis",
      ],
    },

    {
      title: "Sales Analytics Dashboard",
      category: "Data Analytics",
      overview:
        "An interactive Power BI dashboard to analyze online sales performance.",
      features: [
        "Interactive dashboards with drill-down analysis",
        "Filters, slicers, and parameters",
        "Calculated measures and data modeling",
        "Multiple business visualizations",
      ],
      techStack: [
        "Power BI",
        "DAX",
        "Data Modeling",
        "Excel",
        "Data Visualization",
      ],
    },
  ],

  achievements: [
    "Solved 800+ DSA problems on LeetCode and GeeksforGeeks.",
    "Peak LeetCode rating: 1735 (Top 11.02% globally).",
    "TCS CodeVita Season 12 – Secured Global Rank 1809",
    "Chess Captain at BIET Jhansi.",
  ],
};
