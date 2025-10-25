export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  skills: string[];
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'alex-johnson',
    name: 'Alex Johnson',
    role: 'Founder & CEO',
    bio: 'Former AI researcher at Google with 10+ years of experience in machine learning and product development. Passionate about making AI accessible to everyone.',
    image: '/team/team-4.jpg',
    social: {
      twitter: 'https://twitter.com/alexjohnson',
      linkedin: 'https://linkedin.com/in/alexjohnson',
    },
    skills: ['AI Research', 'Product Strategy', 'Machine Learning'],
  },
  {
    id: 'sarah-chen',
    name: 'Sarah Chen',
    role: 'Head of Product',
    bio: 'Product leader with 8 years of experience building developer tools and platforms. Previously at GitHub and Microsoft.',
    image: '/team/sarah.jpg',
    social: {
      twitter: 'https://twitter.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen',
    },
    skills: ['Product Management', 'UX Research', 'Agile Development'],
  },
  {
    id: 'mike-rodriguez',
    name: 'Mike Rodriguez',
    role: 'Lead Developer',
    bio: 'Full-stack developer specializing in AI integration and scalable systems. Open source contributor and tech community advocate.',
    image: '/team/michael.jpg',
    social: {
      github: 'https://github.com/mikerod',
      linkedin: 'https://linkedin.com/in/mikerodriguez',
    },
    skills: ['Next.js', 'Python', 'AI Integration', 'DevOps'],
  },
  {
    id: 'emily-watson',
    name: 'Emily Watson',
    role: 'AI Research Scientist',
    bio: 'PhD in Computer Science with focus on natural language processing. Published researcher and AI ethics advocate.',
    image: '/team/emily.jpg',
    social: {
      twitter: 'https://twitter.com/emilywatson',
      linkedin: 'https://linkedin.com/in/emilywatson',
    },
    skills: ['NLP', 'Research', 'AI Ethics', 'Data Science'],
  },
  {
    id: 'david-kim',
    name: 'David Kim',
    role: 'UX Designer',
    bio: 'Award-winning designer with expertise in AI-powered interfaces and user experience research.',
    image: '/team/david.jpg',
    social: {
      twitter: 'https://twitter.com/davidkim',
      linkedin: 'https://linkedin.com/in/davidkim',
    },
    skills: ['UI/UX Design', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    id: 'lisa-patel',
    name: 'Lisa Patel',
    role: 'Community Manager',
    bio: 'Community builder and AI educator. Passionate about helping people discover and leverage AI tools effectively.',
    image: '/team/LisaPatel.png',
    social: {
      twitter: 'https://twitter.com/lisapatel',
      linkedin: 'https://linkedin.com/in/lisapatel',
    },
    skills: ['Community Building', 'Content Creation', 'Education', 'Events'],
  },
];

export const milestones: CompanyMilestone[] = [
  {
    year: '2022',
    title: 'Company Founded',
    description: 'Started with a vision to democratize AI tool discovery for professionals and teams.',
    icon: '🚀',
  },
  {
    year: '2023',
    title: 'Platform Launch',
    description: 'Launched our first version with 500+ curated AI tools across 20+ categories.',
    icon: '🎯',
  },
  {
    year: '2024',
    title: 'Growth Phase',
    description: 'Reached 50,000+ users and expanded to 1,000+ tools with advanced filtering.',
    icon: '📈',
  },
  {
    year: '2025',
    title: 'Future Vision',
    description: 'Planning AI-powered recommendations and enterprise features.',
    icon: '🔮',
  },
];

export const values: Value[] = [
  {
    title: 'Transparency',
    description: 'We provide honest, unbiased reviews and clear pricing information for all tools.',
    icon: '🔍',
  },
  {
    title: 'Innovation',
    description: 'We continuously explore and add the latest AI tools to keep you ahead of the curve.',
    icon: '💡',
  },
  {
    title: 'Community',
    description: 'We believe in the power of community-driven insights and shared knowledge.',
    icon: '🤝',
  },
  {
    title: 'Accessibility',
    description: 'Making AI tools discoverable and understandable for everyone, regardless of technical background.',
    icon: '🌍',
  },
];

export const stats = [
  { number: '1,000+', label: 'AI Tools Curated' },
  { number: '50+', label: 'Categories' },
  { number: '100K+', label: 'Monthly Users' },
  { number: '95%', label: 'Satisfaction Rate' },
];