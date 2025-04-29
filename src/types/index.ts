export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'libraries' | 'tools' | 'other';
  level: number; // 1-5
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  codeUrl?: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}