export interface ExternalLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
}

export interface Profile {
  name: string;
  tagline: string;
  objective: string;
  image: string;
  resumeUrl: string;
  email: string;
  phone: string;
  location: string;
  links: ExternalLinks;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  board: string;
  duration: string;
  location: string;
  score: string;
  scoreLabel: string;
  type: string;
  current: boolean;
  color: string;
  dotColor: string;
}

export interface SkillGroup {
  title: string;
  color: string;
  bgColor: string;
  items: string[];
}

export interface InternshipDocument {
  label: string;
  url: string;
}

export interface InternshipItem {
  slug: string;
  company: string;
  role: string;
  duration: string;
  team?: string;
  work?: string;
  highlights: string[];
  tech: string[];
  learning?: string;
  summary?: string;
  images: string[];
  documents: InternshipDocument[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  github?: string;
  live?: string;
  problem?: string;
  solution?: string;
  tech: string[];
  role?: string;
  keyFeatures?: string[];
  systemDesign?: string[];
  impact?: string;
  insight?: string;
  context?: string;
  achievement?: string;
  extension?: string;
  accessibility?: string;
  summary?: string;
  dateRange?: string;
  featured?: boolean;
  patentApplied?: boolean;
  isConcept?: boolean;
  images: string[];
}

export interface MediaItem {
  type: 'image' | 'pdf';
  url: string;
  label?: string;
}

export interface CertificateItem {
  slug: string;
  title: string;
  issuedBy: string;
  date: string;
  description?: string;
  keyLearnings?: string[];
  relevance?: string;
  summary?: string;
  media: MediaItem[];
}

export interface HackathonItem {
  slug: string;
  event: string;
  level?: string;
  organizedBy?: string;
  date?: string;
  achievement?: string;
  project?: string;
  highlights?: string[];
  learning?: string;
  summary?: string;
  media: MediaItem[];
}

export interface PortfolioData {
  profile: Profile;
  education: EducationItem[];
  strongSubjects: string[];
  skills: SkillGroup[];
  internships: InternshipItem[];
  projects: ProjectItem[];
  certificates: CertificateItem[];
  hackathons: HackathonItem[];
}
