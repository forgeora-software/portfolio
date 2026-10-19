export const RESUME_URL = "/Resume.pdf";
export const RESUME_FILENAME = "Alex_Wallace_Resume.pdf";

export interface ServiceItemData {
  id: string;
  iconName: "lightbulb" | "layers" | "monitor" | string;
  projectsCount: string;
  title: string;
  description: string;
  features: string[];
}

export interface ServicesSectionData {
  badge: string;
  title: string;
  description: string;
  items: ServiceItemData[];
}

export interface WorkExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillItem {
  name: string;
  level: string;
}

export interface ExperienceSectionData {
  badge: string;
  title: string;
  description: string;
  timelineTitle: string;
  skillsTitle: string;
  toolsTitle: string;
  experiences: WorkExperienceItem[];
  skills: SkillItem[];
  tools: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: "UI & UX Design" | "Branding" | "Graphic Design" | "Web Design" | string;
  image: string;
  client: string;
  year: string;
  description: string;
  tags: string[];
}

export interface PortfolioSectionData {
  badge: string;
  title: string;
  categories: string[];
  projects: ProjectData[];
}

export const SERVICES_DATA: ServicesSectionData = {
  badge: "WHAT I WILL DO FOR YOU",
  title: "Services",
  description:
    "Delivering bespoke digital products, intuitive user interfaces, and memorable visual identities tailored to your strategic goals.",
  items: [
    {
      id: "uiux",
      iconName: "lightbulb",
      projectsCount: "148 PROJECTS",
      title: "UI & UX Design",
      description:
        "Create project plan, Data analysis, wireframes, Concept Testing, Style guide, Responsiveness, User Testing",
      features: [
        "User Research & Journey Mapping",
        "Wireframing & Interactive Prototyping",
        "Design Systems & Token Architecture",
        "Usability Testing & Conversion Optimization",
      ],
    },
    {
      id: "graphic",
      iconName: "layers",
      projectsCount: "38 PROJECTS",
      title: "Graphic Design",
      description:
        "Create project plan, Data analysis, wireframes, Concept Testing, Style guide, Responsiveness, User Testing",
      features: [
        "Brand Identity & Visual Guidelines",
        "Custom Vector Illustrations",
        "Marketing Collateral & Pitch Decks",
        "Packaging & Print Asset Production",
      ],
    },
    {
      id: "web",
      iconName: "monitor",
      projectsCount: "112 PROJECTS",
      title: "Web Design",
      description:
        "Create project plan, Data analysis, wireframes, Concept Testing, Style guide, Responsiveness, User Testing",
      features: [
        "Responsive Next.js & React Frontend",
        "Dynamic Micro-Animations & Interactivity",
        "Core Web Vitals & SEO Optimization",
        "Modern Glassmorphism & High-End Aesthetics",
      ],
    },
  ],
};

export const EXPERIENCE_DATA: ExperienceSectionData = {
  badge: "TRACK RECORD & EXPERTISE",
  title: "Work Experience",
  description:
    "Over 16 years of hands-on experience designing intuitive software, mobile experiences, and impactful brand systems.",
  timelineTitle: "Career Journey",
  skillsTitle: "Skills & Mastery",
  toolsTitle: "Favorite Tools & Technologies",
  experiences: [
    {
      role: "Lead UI/UX Designer & Design System Lead",
      company: "Apex Product Studio",
      period: "2021 - Present",
      description:
        "Spearheaded end-to-end design across 40+ SaaS applications, established cross-platform design token systems, and mentored junior designers.",
      achievements: [
        "Increased client conversion rates by 34% through redesigned checkout workflows",
        "Created an enterprise design system utilized across 12 product squads",
      ],
    },
    {
      role: "Senior Product Designer",
      company: "Hyperion Digital",
      period: "2018 - 2021",
      description:
        "Led research and visual prototyping for consumer mobile applications with over 2M active monthly users.",
      achievements: [
        "Redesigned the core mobile onboarding funnel, reducing drop-off by 22%",
        "Collaborated tightly with React and iOS teams to enforce pixel precision",
      ],
    },
    {
      role: "UI & Interaction Designer",
      company: "PixelForge Media",
      period: "2013 - 2018",
      description:
        "Delivered digital branding, corporate websites, marketing campaigns, and interactive web experiences for international clients.",
      achievements: [
        "Delivered over 120 client web design deliverables on budget and timeline",
        "Won 3 Awwwards Site of the Day honors for bespoke micro-interactions",
      ],
    },
  ],
  skills: [
    { name: "UI & Visual Design", level: "98%" },
    { name: "Design Systems & Tokens", level: "95%" },
    { name: "UX Research & Prototyping", level: "92%" },
    { name: "Figma & Interactive Components", level: "99%" },
    { name: "Frontend (Next.js / React / HTML / CSS)", level: "88%" },
    { name: "Brand Identity & Art Direction", level: "90%" },
  ],
  tools: [
    "Figma",
    "Framer",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Adobe XD",
    "Illustrator",
    "Photoshop",
    "After Effects",
    "Storybook",
    "Webflow",
  ],
};

export const PORTFOLIO_DATA: PortfolioSectionData = {
  badge: "RECENT WORKS",
  title: "Portfolio",
  categories: ["All", "UI & UX Design", "Branding", "Graphic Design", "Web Design"],
  projects: [
    {
      id: "food-app",
      title: "GO! Food Delivery App",
      subtitle: "Mobile UX Design & Customer Journey",
      category: "UI & UX Design",
      image: "/images/project_mobile.jpg",
      client: "QuickBite Inc.",
      year: "2024",
      description:
        "A fast, joyful food ordering experience designed with modular cards, vibrant yellow accents, streamlined checkout, and real-time courier tracking.",
      tags: ["Mobile App", "iOS & Android", "Figma", "Design System"],
    },
    {
      id: "ventura-web",
      title: "Ventura Growth Platform",
      subtitle: "B2B SaaS Landing & Product Architecture",
      category: "Web Design",
      image: "/images/project_web_ui.jpg",
      client: "Ventura Labs",
      year: "2024",
      description:
        "Clean, high-converting digital storefront and interactive software demo designed for modern enterprise teams seeking automated analytics.",
      tags: ["Landing Page", "Next.js", "Interaction Design", "Branding"],
    },
    {
      id: "aetherflow-saas",
      title: "AetherFlow Analytics",
      subtitle: "Dark Mode Futuristic Telemetry Dashboard",
      category: "UI & UX Design",
      image: "/images/project_dark_saas.jpg",
      client: "AetherCloud Corp",
      year: "2023",
      description:
        "Mission-critical real-time metrics telemetry dashboard engineered with glowing data visualizations, customizable widget grids, and dark UI aesthetics.",
      tags: ["Data Viz", "SaaS Dashboard", "Dark Mode", "Prototyping"],
    },
    {
      id: "aethelred-brand",
      title: "Aethelred Outerwear",
      subtitle: "Editorial Brand Identity & E-commerce System",
      category: "Branding",
      image: "/images/project_adventure.jpg",
      client: "Aethelred Heritage",
      year: "2023",
      description:
        "Sophisticated outdoor adventure lifestyle brand typography and photography web experience, featuring moody earth tones and modular storytelling grids.",
      tags: ["Art Direction", "Brand Identity", "Typography", "Lookbook"],
    },
  ],
};

export const USER_INFO = {
  name: "Alex Wallace",
  firstName: "Alex",
  lastName: "Wallace",
  initial: "A.",
  title: "UI & UX Designer",
  role: "UI & UX Designer",
  headlinePrefix: "HELLO, I'M A",
  headlineTitle: "UI & UX",
  headlineHighlight: "Designer.",
  email: "alex.wallace@gmail.com",
  location: "Manila, Philippines",
  locationFull: "Manila, Philippines (Available Globally)",
  availability: "Available for Q4 / Q1 Projects",
  heroBio:
    "Hi I'm Alex Wallace, a passionate UI/UX Designer based in the Philippines. Welcome to portfolio world.",
  aboutBio:
    "Hi I'm Alex Wallace. I have a strong passion for design. I specialize in UI/UX Design and my passion is all about building elegant and professional user interfaces and websites. I also do branding and identity design such as logo design, wireframe and business card, along with photo editing, image cropping and other graphic design services.",
  resumeUrl: RESUME_URL,
  resumeFileName: RESUME_FILENAME,
  stats: {
    experienceYears: "16+",
    projectsCompleted: "215+",
    happyClients: "97+",
  },
  socials: {
    dribbble: "https://dribbble.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  services: SERVICES_DATA,
  experience: EXPERIENCE_DATA,
  portfolio: PORTFOLIO_DATA,
  copyrightYear: "2026",
  copyrightText: "© 2026 Alex Wallace. All rights reserved.",
} as const;

// Convenient direct exports
export const USER_NAME = USER_INFO.name;
export const USER_EMAIL = USER_INFO.email;
export const USER_ROLE = USER_INFO.role;
export const USER_LOCATION = USER_INFO.location;
export const USER_SOCIALS = USER_INFO.socials;
export const USER_STATS = USER_INFO.stats;
export const SERVICES_INFO = SERVICES_DATA;
export const EXPERIENCE_INFO = EXPERIENCE_DATA;
export const PORTFOLIO_INFO = PORTFOLIO_DATA;
export const PROJECTS_LIST = PORTFOLIO_DATA.projects;
