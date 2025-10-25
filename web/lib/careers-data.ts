export interface JobLocation {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  experience: 'entry' | 'mid' | 'senior' | 'lead';
  postedDate: string;
  applicationDeadline: string;
  salaryRange?: {
    min: number;
    max: number;
    currency: string;
  };
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  applicationProcess: string[];
}

export const jobLocations: JobLocation[] = [
  { id: 'all', name: 'All Locations', icon: '🌍', count: 18 },
  { id: 'san-francisco', name: 'San Francisco', icon: '🌉', count: 8 },
  { id: 'new-york', name: 'New York', icon: '🗽', count: 5 },
  { id: 'remote-us', name: 'Remote US', icon: '🏠', count: 3 },
  { id: 'london', name: 'London', icon: '🇬🇧', count: 2 },
  { id: 'berlin', name: 'Berlin', icon: '🇩🇪', count: 1 },
  { id: 'singapore', name: 'Singapore', icon: '🇸🇬', count: 1 },
];

export const jobPositions: JobPosition[] = [
  {
    id: 'senior-frontend-developer',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'san-francisco',
    type: 'full-time',
    experience: 'senior',
    postedDate: '2024-01-15',
    applicationDeadline: '2024-02-15',
    salaryRange: {
      min: 140000,
      max: 180000,
      currency: 'USD'
    },
    description: 'We are looking for a Senior Frontend Developer to join our growing engineering team. You will be responsible for building and maintaining our Next.js application, implementing new features, and ensuring high performance and responsiveness.',
    responsibilities: [
      'Develop new user-facing features using Next.js and React',
      'Build reusable components and front-end libraries for future use',
      'Translate designs and wireframes into high-quality code',
      'Optimize components for maximum performance across devices',
      'Collaborate with product team and designers',
      'Mentor junior developers and conduct code reviews'
    ],
    requirements: [
      '5+ years of experience in frontend development',
      'Strong proficiency in JavaScript, including DOM manipulation and JavaScript object model',
      'Thorough understanding of React.js and its core principles',
      'Experience with Next.js and server-side rendering',
      'Familiarity with modern front-end build pipelines and tools',
      'Experience with common front-end development tools'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work hours and remote work options',
      'Professional development budget',
      'Latest tech equipment',
      'Unlimited PTO'
    ],
    applicationProcess: [
      'Initial phone screen (30 minutes)',
      'Technical interview (60 minutes)',
      'Take-home assignment (3-4 hours)',
      'On-site interview (3 hours)',
      'Offer and onboarding'
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'new-york',
    type: 'full-time',
    experience: 'mid',
    postedDate: '2024-01-10',
    applicationDeadline: '2024-02-10',
    salaryRange: {
      min: 120000,
      max: 150000,
      currency: 'USD'
    },
    description: 'We are seeking a Product Manager to drive the development of our AI tools platform. You will work closely with engineering, design, and marketing teams to define product strategy and deliver exceptional user experiences.',
    responsibilities: [
      'Define product vision, strategy, and roadmap',
      'Gather and prioritize product and customer requirements',
      'Work closely with engineering teams to deliver products',
      'Define and analyze metrics that inform product success',
      'Develop product positioning and messaging',
      'Collaborate with marketing and sales teams'
    ],
    requirements: [
      '3+ years of product management experience',
      'Experience with SaaS products and AI/ML technologies',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication skills',
      'Experience working in agile development environments',
      'Technical background with understanding of software development'
    ],
    benefits: [
      'Competitive salary and equity',
      'Health, dental, and vision insurance',
      'Flexible work arrangements',
      'Learning and development stipend',
      'Wellness program',
      'Generous parental leave'
    ],
    applicationProcess: [
      'Initial phone screen (30 minutes)',
      'Product case study review',
      'On-site interviews (4 hours)',
      'Team collaboration session',
      'Offer and onboarding'
    ]
  },
  {
    id: 'ai-research-scientist',
    title: 'AI Research Scientist',
    department: 'Research',
    location: 'san-francisco',
    type: 'full-time',
    experience: 'senior',
    postedDate: '2024-01-12',
    applicationDeadline: '2024-02-12',
    salaryRange: {
      min: 160000,
      max: 200000,
      currency: 'USD'
    },
    description: 'Join our research team to push the boundaries of AI and machine learning. You will conduct cutting-edge research and help integrate the latest AI advancements into our platform.',
    responsibilities: [
      'Conduct research in machine learning and AI',
      'Develop novel algorithms and models',
      'Publish research findings in top conferences',
      'Collaborate with engineering teams on implementation',
      'Stay current with latest AI research developments',
      'Mentor junior researchers and interns'
    ],
    requirements: [
      'PhD in Computer Science, AI, or related field',
      'Strong publication record in AI/ML conferences',
      'Experience with deep learning frameworks',
      'Proficiency in Python and ML libraries',
      'Experience with large language models',
      'Strong mathematical background'
    ],
    benefits: [
      'Competitive salary and significant equity',
      'Research publication support',
      'Conference attendance budget',
      'State-of-the-art computing resources',
      'Collaboration with leading AI researchers',
      'Flexible research directions'
    ],
    applicationProcess: [
      'Initial technical screening',
      'Research presentation',
      'Technical deep-dive interviews',
      'Team collaboration sessions',
      'Offer and onboarding'
    ]
  },
  {
    id: 'ux-designer',
    title: 'UX Designer',
    department: 'Design',
    location: 'remote-us',
    type: 'full-time',
    experience: 'mid',
    postedDate: '2024-01-08',
    applicationDeadline: '2024-02-08',
    salaryRange: {
      min: 90000,
      max: 120000,
      currency: 'USD'
    },
    description: 'We are looking for a talented UX Designer to create amazing user experiences for our AI tools platform. You will be involved in the entire product development process from concept to launch.',
    responsibilities: [
      'Create user-centered designs for web and mobile',
      'Develop wireframes, prototypes, and high-fidelity mockups',
      'Conduct user research and usability testing',
      'Collaborate with product managers and developers',
      'Maintain and evolve our design system',
      'Advocate for user needs throughout product development'
    ],
    requirements: [
      '3+ years of UX design experience',
      'Strong portfolio demonstrating UX process',
      'Proficiency in design tools (Figma, Sketch, etc.)',
      'Experience with user research methodologies',
      'Understanding of front-end development principles',
      'Excellent communication and collaboration skills'
    ],
    benefits: [
      'Remote-first work environment',
      'Competitive salary and equity',
      'Health insurance benefits',
      'Home office setup budget',
      'Design conference attendance',
      'Flexible time off'
    ],
    applicationProcess: [
      'Portfolio review',
      'Design exercise',
      'Team interviews',
      'Collaboration session',
      'Offer and onboarding'
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'london',
    type: 'full-time',
    experience: 'mid',
    postedDate: '2024-01-05',
    applicationDeadline: '2024-02-05',
    salaryRange: {
      min: 80000,
      max: 100000,
      currency: 'GBP'
    },
    description: 'Join our infrastructure team to build and maintain our cloud infrastructure. You will ensure our platform is scalable, reliable, and secure.',
    responsibilities: [
      'Design and implement cloud infrastructure',
      'Automate deployment and monitoring processes',
      'Ensure system reliability and performance',
      'Implement security best practices',
      'Collaborate with development teams',
      'Manage CI/CD pipelines'
    ],
    requirements: [
      '3+ years of DevOps or infrastructure experience',
      'Experience with AWS, GCP, or Azure',
      'Proficiency with Docker and Kubernetes',
      'Experience with infrastructure as code',
      'Knowledge of monitoring and logging tools',
      'Strong scripting skills'
    ],
    benefits: [
      'Competitive salary package',
      'Private health insurance',
      'Pension scheme',
      'Flexible working hours',
      'Professional development',
      'Modern office in central London'
    ],
    applicationProcess: [
      'Technical screening',
      'Infrastructure design discussion',
      'Team interviews',
      'System architecture review',
      'Offer and onboarding'
    ]
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    department: 'Marketing',
    location: 'berlin',
    type: 'full-time',
    experience: 'mid',
    postedDate: '2024-01-03',
    applicationDeadline: '2024-02-03',
    description: 'We are looking for a Marketing Manager to develop and execute marketing strategies that drive user growth and engagement for our AI tools platform.',
    responsibilities: [
      'Develop and execute marketing campaigns',
      'Manage content marketing and SEO strategy',
      'Analyze marketing metrics and optimize performance',
      'Collaborate with product and sales teams',
      'Manage social media presence',
      'Plan and execute events and webinars'
    ],
    requirements: [
      '3+ years of marketing experience in tech',
      'Experience with SaaS marketing',
      'Strong analytical skills',
      'Excellent written and verbal communication',
      'Experience with marketing automation tools',
      'Understanding of AI/ML market landscape'
    ],
    benefits: [
      'Competitive salary and bonuses',
      'Health insurance',
      'Flexible work arrangements',
      'Professional development budget',
      'Modern office in Berlin',
      'Team events and activities'
    ],
    applicationProcess: [
      'Initial interview',
      'Marketing strategy discussion',
      'Team interviews',
      'Case study presentation',
      'Offer and onboarding'
    ]
  }
];