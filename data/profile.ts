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
    x: string;
    instagram: string;
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
  role: "Full-Stack Developer & Computer Science Student",
  positioning: "Full-Stack Developer & Computer Science Student",
  tagline: "Building responsive web applications, role-based business platforms, and applied computer vision systems.",
  bio: "Software engineer and B.Tech Computer Science & Business Systems student at Sister Nivedita University, Kolkata. Experienced in building responsive web applications with React, TypeScript, Node.js, and MongoDB, alongside deep learning computer vision pipelines.",
  location: "Kolkata, India",
  email: "hello@rudrapratapsingh.tech",
  availability: "Available for select software engineering & full-stack roles",
  socials: {
    github: "https://github.com/ruddrraa",
    linkedin: "https://linkedin.com/in/rudrraaa",
    email: "mailto:hello@rudrapratapsingh.tech",
    x: "https://x.com/RudraPrSing",
    instagram: "https://www.instagram.com/_rudrraa/",
  },
  education: {
    degree: "Bachelor of Technology",
    field: "Computer Science & Business Systems (CSBS)",
    institution: "Sister Nivedita University",
    location: "Kolkata, India",
    timeline: "2024 — 2028",
  },
};
