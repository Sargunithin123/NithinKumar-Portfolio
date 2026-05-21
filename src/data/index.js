// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV_LINKS = ['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Experience', 'Achievements', 'Contact'];

// ─── Hero Typing Roles ────────────────────────────────────────────────────────
export const ROLES = [
  'Full Stack Developer',
  'Java Programmer',
  'CSE Student 2026',
  'Problem Solver',
  'DSA Enthusiast',
];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS_DATA = [
  {
    cat: 'Programming Languages',
    emoji: '💻',
    color: '#00e5ff',
    items: [
      { n: 'Java',       p: 85 },
      { n: 'JavaScript', p: 80 },
      { n: 'React ',     p: 70 },
    ],
  },
  {
    cat: 'Frontend Development',
    emoji: '🎨',
    color: '#a855f7',
    items: [
      { n: 'HTML & CSS',    p: 90 },
      { n: 'React.js',      p: 70 },
      { n: 'Tailwind CSS',  p: 82 },
    ],
  },
  {
    cat: 'Backend Development',
    emoji: '⚙️',
    color: '#f97316',
    items: [
      { n: 'Node.js',    p: 72 },
      { n: 'Express.js', p: 68 },
    ],
  },
  {
    cat: 'Databases',
    emoji: '🗄️',
    color: '#00e5ff',
    items: [
      { n: 'MySQL',      p: 75 },
       
    ],
  },
  {
    cat: 'Tools & DevOps',
    emoji: '🛠️',
    color: '#a855f7',
    items: [
      { n: 'Git & GitHub', p: 85 },
      { n: 'VS Code',      p: 92 },
    ],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 1,
    emoji: '💊',
    title: 'Drug Inventory & Supply Chain Management System',
    desc: 'End-to-end pharmaceutical supply chain tracking system with real-time inventory management, analytics dashboard, supplier portal, and automated alerts for stock thresholds.',
    tech: ['JavaScript', 'React.js', 'TypeScript', 'SupaBase'],
    cat: 'Full Stack',
    accent: '#00e5ff',
    github: 'https://github.com/Sargunithin123/Drug-Inventory-and-Supply-chain-Management-system',
    demo: '#',
  },
  {
    id: 2,
    emoji: '🏥',
    title: 'Doctor Plus – AI Powered  Health Partner',
    desc: 'AI-powered healthcare assistant providing intelligent symptom analysis, appointment scheduling, personalized health recommendations, and real-time doctor consultations.',
    tech: ['React', 'Node.js', 'Express.js', 'Firebase'],
    cat: 'Full Stack',
    accent: '#a855f7',
    github: 'https://github.com/Sargunithin123/Doctor-Plus-An-ai-powered-Health-Partner.git',
    demo: '#',
  },
   
];

// ─── Education ────────────────────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'B.Tech – Computer Science & Engineering (CSIT) ',
    institution: 'Marri Laxman Reddy Institute Of Technology And Management, Hyderabad',
    year: '2022 – 2026',
    grade: 'CGPA: 7.7 / 10',
    desc: 'Specialization in software engineering, data structures & algorithms, full-stack web development.',
    emoji: '🎓',
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
export const CERTIFICATIONS = [
  { title: 'Java SE Programmer',     issuer: 'HackerRank',          year: '2025', color: '#f97316' },
  { title: 'Full Stack Development', issuer: 'Udemy',           year: '2025', color: '#00e5ff' },
  { title: 'Generative AI',      issuer: 'Google',   year: '2025', color: '#a855f7' },
  
];

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: 'Backend Developer Intern',
    company: 'CodexIntern, Remote',
    duration: 'July 2025 – Aug 2025',
    color: '#00e5ff',
    points: [
       'Built scalable backend applications using Node.js, Express.js, and MongoDB with secure user authentication and database integration',
      'Architected two backend projects with RESTful CRUD APIs, login systems, and role-based access control, boosting system reliability and data security',
      'Optimized API performance using JWT, reducing response times by 20% and improving overall application efficiency',
      'Gained practical experience in API testing, debugging, and deployment following industry-standard development practices.',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  
];

// ─── Achievements ─────────────────────────────────────────────────────────────
export const ACHIEVEMENTS = [
  { label: 'LeetCode Problems', value: '100+', emoji: '⚡', color: '#f97316' },
  { label: 'HackerRank Stars',  value: '4★',   emoji: '⭐', color: '#00e5ff' },
  { label: 'Hackathons',        value: '3+',   emoji: '🏆', color: '#a855f7' },
  { label: 'Projects Done',     value: '2+',  emoji: '✅', color: '#00e5ff' },
];

// ─── Social Links ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  github:   'https://github.com/Sargunithin123',
  linkedin: 'https://www.linkedin.com/in/sargu-nithin-kumar-21b37625a/',
  leetcode: 'https://leetcode.com/u/sargunithinkumar/',
};

// ─── Contact Info ─────────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  email:    'sargunithinkumar@gmail.com',
  phone:    '+91 9701903803',
  location: 'Hyderabad, Telangana, India',
};
