export const PERSONAL_INFO = {
  name: "Md Aasif",
  role: "MERN Stack Developer",
  tagline: "Building Modern Full Stack Web Applications.",
  subheading: "I design and build high-performance, responsive, and secure full stack applications with beautiful user experiences. Specializing in the MongoDB, Express, React, and Node.js ecosystem, I turn ideas into clean, pixel-perfect production code.",
  email: "asif1798@gmail.com",
  github: "https://github.com/MdAasif06",
  linkedin: "https://www.linkedin.com/in/mdaasif06/",
  resumeUrl: "#", // will link to a placeholder or direct download
  location: "Patna Bihar, India (Open to Remote)",
  experienceYears: "1+",
};

export const ACHIEVEMENTS = [
  { id: "projects", count: 5, suffix: "+", label: "Projects Completed" },
  { id: "internships", count: 5, suffix: "", label: "Internships" },
  { id: "technologies", count: 18, suffix: "+", label: "Technologies Mastered" },
  { id: "years", count: 4, suffix: "+", label: "Years Learning & Building" },
];

export const ABOUT_HIGHLIGHTS = [
  {
    id: "experience",
    iconName: "Briefcase",
    title: "Hands-on Experience",
    description: "Built and shipped production-level full stack code for startups and personal projects."
  },
  {
    id: "internships",
    iconName: "Award",
    title: "Tech Internships",
    description: "Collaborated with cross-functional engineering teams to implement high-throughput REST APIs."
  },
  {
    id: "problem-solving",
    iconName: "Code2",
    title: "Analytical Problem Solver",
    description: "Fascinated by complex algorithms, database scaling, and writing dry, clean code."
  },
  {
    id: "fast-learner",
    iconName: "Zap",
    title: "Obsessive Fast Learner",
    description: "Always adapting to the latest tech standards (like React 19, Tailwind v4, and Next.js Server Components)."
  },
  {
    id: "teamwork",
    iconName: "Users",
    title: "Team-First Attitude",
    description: "Excellent communicator, adept at Git workflows, and thrived in Agile/Scrum environments."
  }
];

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React 19 / Next.js", level: 92, iconName: "Atom" },
      { name: "TypeScript", level: 88, iconName: "ShieldAlert" },
      { name: "Tailwind CSS v4", level: 95, iconName: "Layers" },
      { name: "Framer Motion", level: 85, iconName: "Sparkles" },
      { name: "HTML5 & CSS3", level: 96, iconName: "FileHtml" },
    ]
  },
  {
    id: "backend",
    title: "Backend & Database",
    skills: [
      { name: "Node.js / Express", level: 90, iconName: "Server" },
      { name: "MongoDB / Mongoose", level: 87, iconName: "Database" },
      { name: "RESTful APIs", level: 94, iconName: "Cpu" },
      { name: "PostgreSQL / MySQL", level: 80, iconName: "Table" },
      { name: "JWT Auth & OAuth", level: 90, iconName: "KeyRound" },
    ]
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Tools",
    skills: [
      { name: "Docker", level: 78, iconName: "Container" },
      { name: "Git / GitHub Actions", level: 88, iconName: "GitBranch" },
      { name: "AWS (S3 / EC2)", level: 75, iconName: "Cloud" },
      { name: "Vercel / Netlify / Render", level: 90, iconName: "UploadCloud" },
      { name: "Linux / Nginx", level: 82, iconName: "Terminal" },
    ]
  }
];

export const EXPERIENCE_TIMELINE = [
  {
    company: "Swecha,Hyderabad",
    role: "Development Intern",
    duration: "June 2023 - july 2023",
    achievements: [
      "Designed and developed a customer dashboard using React 19 and Express, improving user retention by 22%.",
      "Optimized MongoDB aggregations, reducing query times for report generation from 4s to 450ms.",
      "Implemented secure JWT authentication and role-based access control (RBAC) across 4 applications."
    ]
  },
  {
    company: "Technix India – Web Development & Social Media Intern",
    role: "Intern",
    duration: "Oct 2024 - Dec 2024",
    achievements: [
      "Led the transition from vanilla CSS to Tailwind CSS, boosting design system reuse and code cleanliness.",
      "Built interactive widgets using Framer Motion, increasing session duration by 15%.",
      "Collaborated with UI/UX designers to create accessible components satisfying WCAG AA guidelines."
    ]
  },
  {
    company: "Edunet Foundation – Frontend Intern",
    role: "Intern",
    duration: "july 2025 - sep 2025",
    achievements: [
      "Led the transition from vanilla CSS to Tailwind CSS, boosting design system reuse and code cleanliness.",
      "Built interactive widgets using Framer Motion, increasing session duration by 15%.",
      "Collaborated with UI/UX designers to create accessible components satisfying WCAG AA guidelines."
    ]
  }
];

export const FEATURED_PROJECTS = [
  {
    id: "imagify",
    title: "Imagify - AI SaaS Image Generator",
    description: "A full-featured AI SaaS platform allowing users to generate high-fidelity images via text prompts, edit metadata, download, and share publicly with credit checkouts.",
    tags: ["React 19", "Tailwind CSS v4", "Node.js", "Express", "MongoDB", "Cloudinary", "OpenAI API"],
    features: [
      "Credits system with Stripe integration checkout.",
      "AI text-to-image generator using OpenAI Dall-E 3 API.",
      "Social feed for sharing prompts, likes, and search filters.",
      "Admin panel for checking credit usage, transaction logs, and platform stats."
    ],
    github: "https://github.com/MdAasif06/ImageAI",
    live: "https://imageai-frontend.onrender.com",
    image: "imagify_mockup" // Name for image generator or assets
  },
  {
    id: "car-rental",
    title: "DriveFlow - Premium Car Rental Portal",
    description: "An elegant car reservation application highlighting catalog searches, filter specifications, reservation calendars, pricing models, and direct Stripe payments.",
    tags: ["Next.js", "React 19", "Tailwind CSS", "Express.js", "MongoDB", "Stripe API", "Google Maps API"],
    features: [
      "Dynamic catalog filters (fuel type, price, year, model, brand).",
      "Booking scheduler with custom calendar dates checks.",
      "Real-time Stripe gateway checkout verification.",
      "Optimized static rendering (ISR) for high SEO ranking."
    ],
    github: "https://github.com/MdAasif06/Rental-Car",
    live: "https://car-rental-zeta-tawny.vercel.app/",
    image: "car_rental_mockup"
  }
];

export const SERVICES = [
  {
    id: "Frontend-dev",
    iconName: "Code",
    title: "Frontend Development",
    description: "Developing pixel-perfect, lightning-fast client interfaces with Tailwind CSS and React."
  },
  {
    id: "Backend-api",
    iconName: "Cpu",
    title: "Backend APIs & Services",
    description: "Building scalable backend microservices, robust REST APIs, and socket gateways."
  },
  {
    id: "Responsive-UI",
    iconName: "Smartphone",
    title: "Responsive Web Layouts",
    description: "Perfect responsiveness across mobile, tablet, and ultra-wide screens following responsive-first guidelines."
  },
  {
    id: "Auth-Security",
    iconName: "Lock",
    title: "Auth & Security Systems",
    description: "Implementing zero-trust authentications, JSON Web Tokens (JWT), session cookies, and CORS protection."
  },
  {
    id: "Database-Design",
    iconName: "Database",
    title: "MongoDB Schema Design",
    description: "Structuring high-performance NoSQL models with efficient indexes and Mongoose middleware hooks."
  },
  {
    id: "Dloud-Deployment",
    iconName: "Cloud",
    title: "Docker & Cloud Deployments",
    description: "Containerizing MERN projects and automating CI/CD to AWS, Vercel, or Render."
  }
];

export const CERTIFICATIONS = [
  {
    title: "MongoDB Certified Developer Associate",
    issuer: "MongoDB Inc.",
    date: "Dec 2025",
    credentialId: "MDB-9840275",
    iconName: "Award"
  },
  {
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    date: "Aug 2025",
    credentialId: "META-FE-593",
    iconName: "FileCheck"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Oct 2024",
    credentialId: "AWS-CCP-10928",
    iconName: "CloudLightning"
  }
];

export const EDUCATION = [
  {
    institution: "Bhopal Institute of Technology",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    duration: "2023 - 2026",
    details: "Specialized in Backend Development using Node.js & Expres.js Architectures. Graduated with honors. Key coursework: Data Structures, Advanced Database Management, Web Engineering."
  },
  {
    institution: "Maulana Azad National Urdu University",
    degree: "Diploma in Computer Science & Engineering",
    duration: "2020 - 2023",
    details: "Specialized in Frontend Development using React,Next and Tailwind CSS ."
  },
  {
    institution: "SSC || 10",
    degree: "High School Phulwari Sharif",
    duration: "2019 - 2020",
    details: "Specialized Math & Science."
  }

];
