export interface Profile {
  name: string;
  handle: string;
  role: string;
  positioning: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  availability: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
  education: {
    degree: string;
    field: string;
    institution: string;
    location: string;
    timeline: string;
  };
}

export const profile: Profile = {
  name: "Rudra Pratap Singh",
  handle: "rudra.singh",
  role: "Full-Stack Developer | AI Product Engineer",
  positioning: "Full-Stack Developer | AI Product Engineer",
  tagline: "Building intelligent digital products, scalable web applications and meaningful user experiences.",
  bio: "Software engineer and AI product developer based in Kolkata, India. Pursuing a B.Tech in Computer Science & Business Systems at Sister Nivedita University. Focused on engineering end-to-end applications spanning deep learning computer vision pipelines, multi-tenant enterprise systems, and high-performance web platforms.",
  location: "Kolkata, India",
  email: "rudrraaa@proton.me",
  availability: "Available for select software engineering & AI product roles",
  socials: {
    github: "https://github.com/ruddrraa",
    linkedin: "https://linkedin.com/in/rudrraaa",
    email: "mailto:rudrraaa@proton.me",
  },
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science & Business Systems (CSBS)",
    institution: "Sister Nivedita University",
    location: "Kolkata, India",
    timeline: "2024 — 2028",
  },
};
