
import { Founder, ProcessStep, Project, Service, Testimonial } from './types';
import yashwanthImage from './yashwanth.jpg';
import asvaanImage from './asvaan.jpg';

export const FOUNDERS: Founder[] = [
  {
    name: 'Yashwanth Devulapally',
    role: 'Founder & CEO',
    image: yashwanthImage, 
    linkedin: 'https://www.linkedin.com/in/yashwanth-devulapally/',
    bio: [
      "Designs product systems end-to-end, owning UI/UX, technical architecture, and scalability decisions.",
      "Defines long-term platform direction, ensuring products are structurally sound and built to compound at scale."
    ]
  },
  {
    name: 'Mohd Asvaan Zuhair',
    role: 'Cofounder CTO',
    image: asvaanImage, 
    linkedin: 'https://www.linkedin.com/in/asvaan-zuhair-29b390336/',
    bio: [
      "Drives shipping velocity across products, converting designs into production-ready systems.",
      "Leads engineering execution and DevOps operations, maintaining speed, reliability, and delivery discipline."
    ]
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Web Application Development',
    description: 'Scalable, high-performance web platforms engineered for heavy traffic and complex logic.',
  },
  {
    title: 'Mobile Application Development',
    description: 'Native and cross-platform solutions that prioritize performance and user experience.',
  },
  {
    title: 'System Architecture',
    description: 'Designing robust backend infrastructure to ensure reliability under pressure.',
  },
  {
    title: 'Long-term Maintenance',
    description: 'Sustainable codebases and iterative improvements for lasting software health.',
  },
];

export const PROCESS: ProcessStep[] = [
  {
    step: '01',
    title: 'Application',
    description: 'Submit your idea. We review alignment with our engineering capabilities.',
  },
  {
    step: '02',
    title: 'Evaluation',
    description: 'Technical feasibility study, architectural planning, and roadmap definition.',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Rigorous sprint-based build phase focused on clean code and core functionality.',
  },
  {
    step: '04',
    title: 'Launch',
    description: 'Deployment strategies, monitoring setup, and post-launch stability support.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'proj-01',
    title: 'CLAT Community',
    client: 'Legal EdTech Initiative',
    description: 'Comprehensive web platform for law aspirants providing resources and community tools.',
    longDescription: 'A high-traffic ecosystem designed for law aspirants. We engineered a real-time resource sharing hub and a community forum capable of handling concurrent users during peak exam cycles. The focus was on zero-latency interactions and structured data retrieval.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    category: 'EdTech',
    year: '2023',
    missionStatus: 'OPERATIONAL',
    url: 'https://www.clatcommunity.com/'
  },
  {
    id: 'proj-02',
    title: 'CLAT AI',
    client: 'EdTech AI Startup',
    description: 'AI-powered preparation engine offering personalized study paths and analytics.',
    longDescription: 'An adaptive learning engine that analyzes student performance to generate custom problem sets. We integrated predictive modeling to identify weak areas in real-time, providing a distinct competitive advantage to users.',
    techStack: ['Python', 'TensorFlow', 'Next.js'],
    category: 'AI / EdTech',
    year: '2023',
    missionStatus: 'SCALING',
    url: 'https://clatai.onrender.com/'
  },
  {
    id: 'proj-03',
    title: 'Bolt Abacus',
    client: 'Bolt Education',
    description: 'Modern educational platform digitizing traditional abacus learning methods.',
    longDescription: 'Digitizing a tactile learning method required precise interaction design. We built a real-time synchronization engine allowing teachers to monitor student calculations step-by-step in a virtual classroom environment.',
    techStack: ['Vue.js', 'Firebase', 'WebRTC'],
    category: 'EdTech',
    year: '2022',
    missionStatus: 'OPERATIONAL',
    url: 'https://www.boltabacus.com/'
  },
  {
    id: 'proj-04',
    title: 'Mehndi Sahiti',
    client: 'Luxury Beauty Brand',
    description: 'Seamless cross-platform application and web solution for bridal artistry services.',
    longDescription: 'A dual-platform ecosystem (Mobile App & Web) designed for premium beauty service management. We implemented a robust booking engine and high-fidelity media gallery to showcase intricate artistry with high performance.',
    techStack: ['Flutter', 'Node.js', 'AWS'],
    category: 'Lifestyle',
    year: '2024',
    missionStatus: 'ACTIVE',
    url: 'https://mehndisathi.com/'
  },
  {
    id: 'proj-05',
    title: 'Currexx',
    client: 'Currexx FinTech',
    description: 'Real-time currency exchange and financial tracking platform.',
    longDescription: 'A high-performance financial utility providing live currency conversions and historical data visualizations. We optimized the data pipeline to handle sub-second updates from multiple global financial APIs.',
    techStack: ['React', 'D3.js', 'REST API'],
    category: 'FinTech',
    year: '2023',
    missionStatus: 'OPERATIONAL',
    url: 'http://currexx.com/'
  },
  {
    id: 'proj-06',
    title: 'Convert A2Z',
    client: 'A2Z Utilities',
    description: 'All-in-one file conversion suite with high-speed cloud processing.',
    longDescription: 'A productivity suite designed for seamless file transformation across 100+ formats. We built a scalable worker-based architecture to manage heavy processing tasks without impacting front-end performance.',
    techStack: ['Next.js', 'Go', 'Docker'],
    category: 'Utility',
    year: '2023',
    missionStatus: 'OPERATIONAL',
    url: 'https://converta2z.com/'
  },
  {
    id: 'proj-07',
    title: 'Xperio & Public Sector',
    client: 'Government / Enterprise',
    description: 'Confidential high-security implementations for public sector infrastructure and immersive experiences.',
    longDescription: 'A specialized merger of secure public sector infrastructure and high-end interactive platforms. We handled data sovereignty, complex RBAC, and immersive experience architecture for large-scale deployments.',
    techStack: ['Java', 'Immersive Tech', 'Security Frameworks'],
    category: 'Government',
    year: '2023-24',
    missionStatus: 'CLASSIFIED'
  },
  {
    id: 'proj-08',
    title: 'Sanjeev Kaliwala',
    client: 'Personal Brand (Kron)',
    description: 'Professional portfolio and brand implementation with cinematic motion design.',
    longDescription: 'A high-concept digital portfolio showcasing professional identity. Focused on aesthetic precision, we utilized advanced layout transitions and shader-based effects to create a unique, brand-aligned experience.',
    techStack: ['Gatsby', 'Framer Motion', 'WebGL'],
    category: 'Brand',
    year: '2022',
    missionStatus: 'COMPLETED'
  },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, attribute: "Reliability", text: "Systems that simply do not fail. The uptime has been 99.99% since launch." },
  { id: 2, attribute: "Clarity", text: "No jargon. Just clear engineering roadmaps and precise execution." },
  { id: 3, attribute: "Speed", text: "Delivered the MVP two weeks ahead of schedule without technical debt." },
  { id: 4, attribute: "Architecture", text: "The backend design handled our 10x scale event without a single hiccup." },
  { id: 5, attribute: "Partnership", text: "They act like co-founders, not just contractors. Truly invested." },
];