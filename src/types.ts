export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
  impact: string[];
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  isIntern?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  icon: string;
}
