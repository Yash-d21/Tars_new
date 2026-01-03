
export interface Founder {
  name: string;
  role: string;
  image: string;
  bio: string[];
  linkedin?: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Project {
  id: string; 
  title: string;
  client: string; 
  description: string;
  longDescription: string; 
  techStack: string[];
  category: string;
  year: string; 
  missionStatus: string; 
  url?: string;
}

export interface Testimonial {
  id: number;
  text: string;
  attribute: string;
}