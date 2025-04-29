import { Skill } from '../types';

export const skills: Skill[] = [
  {
    name: 'HTML5',
    icon: 'html',
    category: 'frontend',
    level: 5,
  },
  {
    name: 'CSS3',
    icon: 'css',
    category: 'frontend',
    level: 5,
  },
  {
    name: 'JavaScript',
    icon: 'javascript',
    category: 'frontend',
    level: 5,
  },
  {
    name: 'TypeScript',
    icon: 'typescript',
    category: 'frontend',
    level: 4,
  },
  {
    name: 'React',
    icon: 'react',
    category: 'frontend',
    level: 5,
  },
  {
    name: 'Redux',
    icon: 'redux',
    category: 'libraries',
    level: 4,
  },
  {
    name: 'Next.js',
    icon: 'nextjs',
    category: 'frontend',
    level: 4,
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind',
    category: 'frontend',
    level: 5,
  },
  {
    name: 'SASS/SCSS',
    icon: 'sass',
    category: 'frontend',
    level: 4,
  },
  {
    name: 'GraphQL',
    icon: 'graphql',
    category: 'libraries',
    level: 3,
  },
  {
    name: 'Jest',
    icon: 'jest',
    category: 'tools',
    level: 4,
  },
  {
    name: 'Webpack',
    icon: 'webpack',
    category: 'tools',
    level: 3,
  },
  {
    name: 'Git',
    icon: 'git',
    category: 'tools',
    level: 4,
  },
  {
    name: 'Figma',
    icon: 'figma',
    category: 'tools',
    level: 3,
  },
  {
    name: 'Storybook',
    icon: 'storybook',
    category: 'tools',
    level: 3,
  },
  {
    name: 'Responsive Design',
    icon: 'responsive',
    category: 'other',
    level: 5,
  },
  {
    name: 'Accessibility',
    icon: 'accessibility',
    category: 'other',
    level: 4,
  },
  {
    name: 'API Integration',
    icon: 'api',
    category: 'other',
    level: 4,
  },
];

export const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'libraries', label: 'Libraries' },
  { id: 'tools', label: 'Tools' },
  { id: 'other', label: 'Other' },
];