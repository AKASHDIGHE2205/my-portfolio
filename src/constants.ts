import { Project, SkillCategory, Experience, Service, Certification } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'malpani-portals',
    title: 'Malpani Business Portals',
    description: 'Enterprise portals for courier tracking and property transaction management.',
    longDescription:
      'Developed scalable business portals with two core modules. The Courier (Post) module manages inward and outward entries, maintains master data, and generates filtered reports with PDF and Excel export. The Property Management module handles property sale and purchase transactions with detailed record keeping. Implemented role-based access control, JWT authentication, and secured APIs using bearer tokens.',

    image: '/Portals.png', // ✅ correct

    tech: ['React', 'Node.js', 'MySQL', 'Express', 'Tailwind CSS'],

    github: 'https://github.com/AKASHDIGHE2205/Malpani-Portals',

    impact: [
      'Digitized courier and property workflows',
      'Enabled advanced reporting with PDF and Excel export',
      'Improved data accuracy and operational efficiency',
      'Implemented secure RBAC and JWT-based authentication'
    ]
  },
  {
    id: 'sales-management-system',
    title: 'Sales Management System (WHam Energy – SAP Portal)',
    description: 'Centralized platform for campaign planning, execution, and analytics.',
    longDescription:
      'Built an enterprise-grade platform for managing student marketing campaigns across multiple universities. Features include activity planning workflows, approval systems, real-time dashboards with visual analytics, and Google Maps integration for location tracking. The system also includes knowledge modules such as training, library, and best practices, along with audit trails and role-based secure access.',

    image: '/EventTracker.png', // ✅ correct

    tech: ['React', 'Node.js', 'MySQL', 'Express', 'Google Maps API'],

    github: 'https://github.com/AKASHDIGHE2205/wham-project',

    impact: [
      'Enabled scalable multi-university campaign management',
      'Improved decision-making with real-time analytics dashboards',
      'Streamlined approval workflows and activity tracking',
      'Ensured transparency with audit trails and secure access control'
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'FileCode', level: 95 },
      { name: 'Tailwind CSS', icon: 'Palette', level: 95 },
      { name: 'JavaScript', icon: 'Code', level: 90 },
      { name: 'TypeScript', icon: 'FileType', level: 88 },
      { name: 'React.js', icon: 'Atom', level: 90 },
      { name: 'Next.js', icon: 'Rocket', level: 85 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'Server', level: 85 },
      { name: 'Express.js', icon: 'Cpu', level: 88 },
      { name: 'REST APIs', icon: 'Globe', level: 92 },
      { name: 'Auth & RBAC', icon: 'Lock', level: 90 }
    ]
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'Database', level: 85 },
      { name: 'MySQL', icon: 'Table', level: 90 },
      { name: 'PostgreSQL', icon: 'Layers', level: 82 }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', icon: 'Github', level: 90 },
      { name: 'Postman', icon: 'Send', level: 88 },
      { name: 'Swagger', icon: 'FileText', level: 85 },
      { name: 'Vercel', icon: 'Cloud', level: 85 }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    title: 'MERN Stack Development',
    description: 'Building full-stack web applications using MongoDB, Express, React, and Node.js.',
    icon: 'Layers'
  },
  {
    title: 'Full Stack Development',
    description: 'End-to-end application development with a focus on scalability and performance.',
    icon: 'Code'
  },
  {
    title: 'API Development',
    description: 'Designing and implementing secure, high-performance RESTful APIs.',
    icon: 'Globe'
  },
  {
    title: 'Database Optimization',
    description: 'Optimizing database queries and structures for maximum efficiency.',
    icon: 'Database'
  },
  {
    title: 'Performance Optimization',
    description: 'Improving application speed and responsiveness through advanced techniques.',
    icon: 'Zap'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Malpani Group',
    role: 'Software Developer',
    period: 'Feb 2024 – Present',
    description: [
      'Developed production-grade frontend applications using React.js and TypeScript with scalable, reusable component architecture',
      'Implemented Redux Toolkit for centralized state management across ERP and workflow systems',
      'Designed and integrated RESTful APIs using Node.js and Express.js for seamless full-stack communication',
      'Built secure authentication using JWT and Role-Based Access Control (RBAC)',
      'Optimized UI rendering and backend performance, improving load times and user experience',
      'Collaborated with cross-functional teams, managing features across the full software development lifecycle'
    ]
  },
  {
    company: 'Anvi Software Solution',
    role: 'Junior Software Developer (Intern)',
    period: 'Dec 2023 – Feb 2024',
    isIntern: true,
    description: [
      'Developed a live production website using Laravel, MySQL, and Tailwind CSS',
      'Implemented dynamic content modules with fully responsive and cross-browser compatible UI',
      'Worked on real-world deployment for OM Law College (omlawcollege.edu.in)'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Best Programmer Award',
    issuer: 'Malpani Group',
    icon: '🏆'
  },
  {
    title: 'SRS Recognition',
    issuer: 'Internal Recognition',
    icon: '🥈'
  },
  {
    title: 'React Course',
    issuer: 'Udemy',
    icon: '📜'
  }
];
