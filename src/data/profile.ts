// Single source of truth for the portfolio's content.
// Everything here matches the resume (public/Sunny_Kumar_Resume.pdf) and the LinkedIn profile;
// update both together so recruiters never see two different stories.

export const profile = {
  name: 'Sunny Kumar',
  role: 'Software Development Engineer I (Frontend)',
  shortRole: 'SDE-I · Frontend',
  company: 'Codebucket Solutions',
  location: 'Patna, Bihar, India',
  email: 'sunnykumar91728@gmail.com',
  tagline: 'I build fast, role-based web apps with React, Next.js and TypeScript, across SaaS, EdTech and GovTech.',
  summary: [
    "I'm a frontend engineer at Codebucket Solutions, where I joined as an intern and was promoted to Software Development Engineer I. Over 2+ years I've delivered frontend features for 4 production enterprise applications in MarTech, EdTech and GovTech.",
    'My day-to-day is turning complex workflows into interfaces that feel simple: role-based dashboards, multi-step forms, payment flows, secure authentication and real-time features. I care about predictable state, reusable components and pages that stay fast with large datasets.',
  ],
};

export type SocialId = 'github' | 'linkedin' | 'x' | 'email';

export type SocialLink = {
  id: SocialId;
  label: string;
  handle: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { id: 'github', label: 'GitHub', handle: 'sunnykumar-devhub', href: 'https://github.com/sunnykumar-devhub' },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/sunnykumar-devhub', href: 'https://www.linkedin.com/in/sunnykumar-devhub' },
  { id: 'x', label: 'X', handle: '@sunnykumar_17', href: 'https://x.com/sunnykumar_17' },
  { id: 'email', label: 'Email', handle: profile.email, href: `mailto:${profile.email}` },
];

export const getSocialLink = (id: SocialId): SocialLink => {
  const link = socialLinks.find((l) => l.id === id);
  if (!link) throw new Error(`Unknown social link: ${id}`);
  return link;
};

export const stats = [
  { value: '2+', label: 'Years building production apps' },
  { value: '4', label: 'Enterprise apps shipped' },
  { value: '100K+', label: 'Records handled in one portal' },
  { value: 'Intern → SDE-I', label: 'Promoted at Codebucket' },
];

export const focusAreas = [
  {
    title: 'Role-based dashboards',
    text: 'Separate experiences for brands, admins, students or officers, with protected routes and permissions per role.',
  },
  {
    title: 'State & data layer',
    text: 'Redux Toolkit and RTK Query for caching, cache invalidation and server state across many modules.',
  },
  {
    title: 'Payments & auth',
    text: 'Razorpay and Cashfree integrations, JWT and OTP authentication with automatic token renewal.',
  },
  {
    title: 'Performance',
    text: 'Code splitting, lazy loading, memoization and server-side pagination so large datasets stay responsive.',
  },
];

export type Role = {
  title: string;
  company: string;
  period: string;
  location: string;
  type: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: 'Software Development Engineer I (Frontend)',
    company: 'Codebucket Solutions Private Limited',
    period: 'Jun 2025 – Present',
    location: 'Patna, Bihar',
    type: 'Full-time',
    points: [
      'Implemented global state management with Redux Toolkit and RTK Query across 4 enterprise applications: authentication, dashboard data, API caching and server state.',
      'Designed reusable UI components with Material UI, Tailwind CSS and SCSS Modules, setting component standards that reduced duplication across projects.',
      'Integrated Razorpay, Cashfree and REST APIs (Axios, RTK Query) with error handling, loading states and secure token management.',
      'Optimized performance with code splitting, lazy loading and memoization, improving dashboard responsiveness for large datasets.',
      'Mentored interns on React best practices and component architecture through code reviews and pair programming.',
    ],
  },
  {
    title: 'Frontend Developer (Internship)',
    company: 'Codebucket Solutions Private Limited',
    period: 'Sep 2024 – May 2025',
    location: 'Patna, Bihar',
    type: 'Internship',
    points: [
      'Developed responsive React.js components and integrated REST APIs using Axios.',
      'Built JWT authentication workflows and role-based protected routes across multiple applications.',
      'Implemented form validation with Formik, Yup and Zod for multi-step workflows.',
      'Worked with senior developers on debugging, features and code reviews; promoted to SDE-I.',
    ],
  },
];

export type ProjectDomain = 'martech' | 'edtech' | 'govtech' | 'web' | 'personal';

export type Project = {
  title: string;
  category: string;
  domain: ProjectDomain;
  description: string;
  highlights: string[];
  stack: string[];
  // Company projects have private codebases, so only personal projects get a code link
  code?: string;
  live?: string;
};

export const workProjects: Project[] = [
  {
    title: 'Influency Dashboard',
    category: 'MarTech SaaS',
    domain: 'martech',
    description:
      'Influencer marketing platform connecting Brands, Influencers and Admins for campaigns, creator discovery, content approval, payments and real-time communication.',
    highlights: [
      'Role-based dashboards for Brands, Influencers and Admins',
      'RTK Query caching with automated cache invalidation',
      'Cashfree payments and Socket.IO real-time chat',
    ],
    stack: ['React.js', 'Redux Toolkit', 'RTK Query', 'Material UI', 'Socket.IO', 'Cashfree'],
  },
  {
    title: 'Education Connect',
    category: 'EdTech · LMS',
    domain: 'edtech',
    description:
      'Learning management system serving Students, Mentors, School Admins and Platform Admins with protected content, subscriptions and analytics.',
    highlights: [
      'Modular dashboards for 4 distinct user roles',
      'Secure PDF viewer and video streaming for protected content',
      'OTP login with automatic token renewal',
    ],
    stack: ['React.js', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'Formik', 'Yup'],
  },
  {
    title: 'Bihar Sanskrit Shiksha Board Portal',
    category: 'GovTech · Next.js',
    domain: 'govtech',
    description:
      'Government education platform for institute registration, student enrollment, document verification, payments and board administration.',
    highlights: [
      'Multi-step registration with conditional validation',
      'Document upload and verification with previews',
      'Razorpay payments, invoices and Excel export',
    ],
    stack: ['Next.js', 'Redux Toolkit', 'RTK Query', 'Material UI', 'Formik', 'Razorpay'],
  },
  {
    title: 'Bhumi Rupantaran',
    category: 'GovTech · Land records',
    domain: 'govtech',
    description:
      'Government portal that digitizes land-use conversion applications for citizens and land revenue officials, replacing paper-based processes.',
    highlights: [
      'Multi-step conversion wizard with Zod validation',
      'Separate citizen and officer interfaces',
      'Server-side pagination and filtering over 100K+ records',
    ],
    stack: ['React.js', 'Redux Toolkit', 'Material UI', 'SCSS Modules', 'Zod'],
  },
];

export const moreWork: Project[] = [
  {
    title: 'Abhiyan Basera Public Portal',
    category: 'GovTech',
    domain: 'govtech',
    description: 'Public-facing government portal where I was the sole frontend owner, from UI through API integration.',
    highlights: [],
    stack: ['React.js', 'REST APIs'],
  },
  {
    title: 'Sujan Singh Investment Advisory',
    category: 'Website · Next.js',
    domain: 'web',
    description: 'Marketing website for an investment advisory firm, built with Next.js.',
    highlights: [],
    stack: ['Next.js'],
    live: 'https://sujansingh.in',
  },
];

export const personalProjects: Project[] = [
  {
    title: 'SSRStyles',
    category: 'Personal · Full-stack',
    domain: 'personal',
    description:
      'Full-stack e-commerce platform with JWT authentication, product listings, cart workflows, REST APIs and image uploads.',
    highlights: [],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    code: 'https://github.com/sunnykumar-devhub/SSRStyles',
  },
  {
    title: 'Task Tracker',
    category: 'Personal · Frontend',
    domain: 'personal',
    description:
      'Role-based task tracker with Admin and Developer dashboards, a drag-and-drop task board and progress charts.',
    highlights: [],
    stack: ['React.js', 'Redux Toolkit', 'React DnD', 'Chart.js', 'JSON Server'],
    code: 'https://github.com/sunnykumar-devhub/TaskTracker',
  },
];

export const skillGroups = [
  { title: 'Frontend', skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Vite', 'React Router'] },
  { title: 'State & Data', skills: ['Redux Toolkit', 'RTK Query', 'React Query', 'Context API', 'REST APIs', 'Axios'] },
  { title: 'Styling', skills: ['Material UI', 'Tailwind CSS', 'SCSS Modules', 'Flowbite React', 'Responsive Design'] },
  { title: 'Forms & Validation', skills: ['React Hook Form', 'Formik', 'Yup', 'Zod'] },
  { title: 'Auth, Payments & Real-time', skills: ['JWT', 'OTP Auth', 'RBAC', 'Razorpay', 'Cashfree', 'Socket.IO'] },
  { title: 'Tools & Practices', skills: ['Git', 'GitHub', 'GitLab', 'Jira', 'Postman', 'Agile (Scrum)', 'Code Splitting', 'Lazy Loading'] },
];

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Presidency College, Bengaluru · Bengaluru City University',
    period: '2021 – 2024',
    detail: 'CGPA 8.2 / 10',
  },
  {
    degree: 'Senior Secondary (12th)',
    school: 'DC College, Hajipur',
    period: '2019 – 2020',
    detail: '',
  },
];

export const certifications = [
  { name: 'IoT Program Certificate', issuer: 'KPMG India', date: 'Mar 2024' },
  { name: 'Introduction to HTML', issuer: 'Infosys Springboard', date: 'Jan 2024' },
  { name: 'Leading in the Age of Generative AI', issuer: 'Infosys Springboard', date: 'Jan 2024' },
  { name: 'Career Essentials in Generative AI', issuer: 'Microsoft & LinkedIn', date: 'Sep 2023' },
];

// Shown in the scrolling strip under the hero
export const marqueeTech = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'Redux Toolkit',
  'RTK Query',
  'React Query',
  'Material UI',
  'Tailwind CSS',
  'SCSS',
  'React Hook Form',
  'Formik',
  'Zod',
  'Socket.IO',
  'Razorpay',
  'Vite',
  'Git',
  'Jira',
];
