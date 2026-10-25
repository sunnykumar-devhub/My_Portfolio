// Single source of truth for the portfolio's content.
// Everything here matches the resume (public/Sunny_Kumar_Resume.pdf), the LinkedIn profile and the public GitHub repos;
// update them together so recruiters never see two different stories. Don't add metrics the resume doesn't state.

export const profile = {
  name: 'Sunny Kumar',
  role: 'Software Development Engineer I (Frontend)',
  shortRole: 'SDE-I (Frontend)',
  company: 'Codebucket Solutions',
  location: 'Patna, Bihar, India',
  email: 'sunnykumar91728@gmail.com',
  headline: 'I build reliable, intuitive web applications.',
  intro:
    'For over two years I’ve delivered frontend features for 4 production apps in MarTech, EdTech and GovTech, built with React, Next.js, TypeScript and Redux Toolkit.',
  about: [
    'I’m a frontend engineer based in Patna, Bihar. I joined Codebucket Solutions as an intern in September 2024 and was promoted to Software Development Engineer I in June 2025. Most of my work is on enterprise apps where several kinds of users share one product: brands and influencers, students and mentors, citizens and officials.',
    'In practice that means each role sees only what it needs, long forms guide people step by step with clear validation, and every API call has a proper loading and error state. I build with reusable components and predictable state in Redux Toolkit and RTK Query, so the next feature is easier to add than the last, and I keep layouts responsive across screen sizes.',
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
  { id: 'email', label: 'Email', handle: profile.email, href: `mailto:${profile.email}` },
  { id: 'linkedin', label: 'LinkedIn', handle: 'in/sunnykumar-devhub', href: 'https://www.linkedin.com/in/sunnykumar-devhub' },
  { id: 'github', label: 'GitHub', handle: 'sunnykumar-devhub', href: 'https://github.com/sunnykumar-devhub' },
  { id: 'x', label: 'X', handle: '@thesunnyk', href: 'https://x.com/thesunnyk' },
];

export const getSocialLink = (id: SocialId): SocialLink => {
  const link = socialLinks.find((l) => l.id === id);
  if (!link) throw new Error(`Unknown social link: ${id}`);
  return link;
};

// Shown under the hero; each figure is stated on the resume
export const highlights = [
  { value: '2+ years', label: 'building production React and Next.js apps' },
  { value: '4 apps', label: 'enterprise products shipped in MarTech, EdTech and GovTech' },
  { value: '100K+', label: 'application records with server-side pagination and filtering' },
  { value: '9 months', label: 'from intern to SDE-I at Codebucket' },
];

export type Role = {
  title: string;
  company: string;
  period: string;
  start: string; // ISO month, for the <time> element
  end?: string;
  location: string;
  type: string;
  points: string[];
};

export const experience: Role[] = [
  {
    title: 'Software Development Engineer I (Frontend)',
    company: 'Codebucket Solutions',
    period: 'Jun 2025 – Present',
    start: '2025-06',
    location: 'Patna, Bihar',
    type: 'Full-time',
    points: [
      'Own global state with Redux Toolkit and RTK Query across 4 enterprise apps: authentication, dashboard data, API caching and server state.',
      'Set shared component standards with Material UI, Tailwind CSS and SCSS Modules that improved consistency and cut duplicated code across projects.',
      'Integrate Razorpay, Cashfree and REST APIs with error handling, loading states and secure token management.',
      'Work in Agile sprints with backend engineers, QA and product to ship features and resolve production issues.',
      'Mentor interns on React practices and component architecture through code reviews and pair programming.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'Codebucket Solutions',
    period: 'Sep 2024 – May 2025',
    start: '2024-09',
    end: '2025-05',
    location: 'Patna, Bihar',
    type: 'Internship',
    points: [
      'Built responsive React components and integrated REST APIs with Axios.',
      'Implemented JWT authentication and role-based protected routes across multiple applications.',
      'Added Formik, Yup and Zod validation to multi-step application workflows.',
      'Debugged and shipped features alongside senior developers, then was promoted to SDE-I.',
    ],
  },
];

export type CaseStudy = {
  slug: string;
  title: string;
  kind: string;
  // The user roles the product serves, shown as a row of tabs
  roles: string[];
  problem: string;
  built: string[];
  // Only outcomes stated on the resume; omit rather than estimate
  outcome?: string;
  stack: string[];
};

// Company projects: codebases and internal screens are confidential, so these are written case studies
export const caseStudies: CaseStudy[] = [
  {
    slug: 'influency',
    title: 'Influency Dashboard',
    kind: 'MarTech SaaS',
    roles: ['Brand', 'Influencer', 'Admin'],
    problem:
      'Brands, influencers and platform admins needed one product for campaign management, creator discovery, content approval, payments and real-time communication.',
    built: [
      'Role-based dashboards: brands create campaigns, influencers track proposals, admins monitor platform operations.',
      'State layer in Redux Toolkit and RTK Query, with caching and automatic cache invalidation.',
      'Cashfree payments with error handling and payment status tracking.',
      'Socket.IO real-time chat between brands and influencers.',
    ],
    outcome:
      'Cached queries cut redundant network calls, and lazy loading and memoization kept dashboards responsive with large campaign datasets.',
    stack: ['React', 'Vite', 'Redux Toolkit', 'RTK Query', 'Material UI', 'SCSS Modules', 'Socket.IO', 'Cashfree'],
  },
  {
    slug: 'education-connect',
    title: 'Education Connect',
    kind: 'EdTech · Learning management system',
    roles: ['Student', 'Mentor', 'School admin', 'Platform admin'],
    problem:
      'Schools needed one learning platform for four kinds of users, with protected course content, subscriptions and institutional analytics.',
    built: [
      'Modular dashboards for 4 roles, each with its own navigation, permissions and analytics.',
      'A secure PDF viewer and video streaming interface for protected content, with progressive loading.',
      'OTP sign-in with automatic token renewal.',
      'Subscription management: plan selection, payment and usage tracking for institutions.',
    ],
    outcome: 'Users stay signed in without forced re-logins, and protected lessons load progressively in the secure viewer.',
    stack: ['React', 'Vite', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'Formik', 'Yup'],
  },
  {
    slug: 'bssb',
    title: 'Bihar Sanskrit Shiksha Board Portal',
    kind: 'GovTech · Next.js',
    roles: ['Board admin', 'Institute'],
    problem:
      'The board needed a web platform for institute registration, student enrollment, document verification, fee payments and board administration.',
    built: [
      'Multi-step registration for institutes and students in Formik, with conditional validation.',
      'Document upload and verification screens with file previews and pre-submission checks.',
      'Role-based access separating board administrator and institute permissions.',
      'Razorpay payments with invoice generation and transaction history.',
    ],
    outcome: 'Administrators can verify documents, track transactions and export reports to Excel from the same portal.',
    stack: ['Next.js', 'Redux Toolkit', 'RTK Query', 'Axios', 'Material UI', 'SCSS Modules', 'Formik', 'Razorpay'],
  },
  {
    slug: 'bhumi-rupantaran',
    title: 'Bhumi Rupantaran',
    kind: 'GovTech · Land-use conversion',
    roles: ['Citizen', 'Revenue officer'],
    problem: 'Land-use conversion applications from citizens were handled manually on paper by land revenue officials.',
    built: [
      'A multi-step conversion wizard with Zod validation across land, property and applicant sections.',
      'Separate interfaces: citizens track application status, officers manage approvals and generate reports.',
      'Shared status badges, search filters and data tables used by both interfaces.',
    ],
    outcome: 'Replaced the paper process, with server-side pagination and filtering across 100K+ application records.',
    stack: ['React', 'Vite', 'Redux Toolkit', 'Axios', 'Material UI', 'SCSS Modules', 'Zod'],
  },
];

export type SmallProject = {
  title: string;
  kind: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const moreWork: SmallProject[] = [
  {
    title: 'Abhiyan Basera Public Portal',
    kind: 'GovTech · Codebucket',
    description: 'Public-facing government portal where I was the sole frontend owner, from UI through API integration.',
    stack: ['React', 'REST APIs'],
    links: [],
  },
  {
    title: 'Sujan Singh Investment Advisory',
    kind: 'Website · Codebucket',
    description: 'Marketing website for a SEBI-registered investment adviser.',
    stack: ['Next.js'],
    links: [{ label: 'Live site', href: 'https://sujansingh.in' }],
  },
  {
    title: 'SSR Styles',
    kind: 'Personal · Full-stack',
    description:
      'Fashion e-commerce project in three repos: a React storefront with cart and auth, a React admin panel for products, and a Node.js API with JWT auth and image uploads.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    links: [
      { label: 'Storefront', href: 'https://github.com/sunnykumar-devhub/SSR_Frontend' },
      { label: 'Admin', href: 'https://github.com/sunnykumar-devhub/SSRAdmin' },
      { label: 'API', href: 'https://github.com/sunnykumar-devhub/SSRStyles' },
    ],
  },
  {
    title: 'Task Tracker',
    kind: 'Personal · Frontend',
    description: 'Role-based task tracker with Admin and Developer dashboards, a drag-and-drop task board and progress charts.',
    stack: ['React', 'Redux Toolkit', 'React DnD', 'Chart.js', 'JSON Server'],
    links: [{ label: 'Code', href: 'https://github.com/sunnykumar-devhub/TaskTracker' }],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['TypeScript', 'JavaScript (ES6+)', 'React', 'Next.js', 'React Router', 'HTML5 & CSS3', 'React Hook Form & Formik', 'Zod & Yup'],
  },
  {
    title: 'State & APIs',
    skills: ['Redux Toolkit', 'RTK Query', 'React Query', 'Context API', 'REST APIs & Axios', 'JWT, OTP & RBAC', 'Razorpay & Cashfree', 'Socket.IO'],
  },
  {
    title: 'Styling',
    skills: ['Material UI', 'Tailwind CSS', 'SCSS Modules', 'Responsive design', 'Reusable component systems'],
  },
  {
    title: 'Tooling & practice',
    skills: ['Git, GitHub & GitLab', 'Vite', 'Postman', 'Jira', 'Code splitting & lazy loading', 'Code review', 'Agile (Scrum)'],
  },
];

export const education = {
  degree: 'Bachelor of Computer Applications (BCA)',
  school: 'Presidency College, Bengaluru',
  university: 'Bengaluru City University',
  period: '2021 – 2024',
  detail: 'CGPA 8.2 / 10',
};

export const certifications = [
  { name: 'IoT Program Certificate', issuer: 'KPMG India', date: 'Mar 2024' },
  { name: 'Career Essentials in Generative AI', issuer: 'Microsoft & LinkedIn', date: 'Sep 2023' },
];
