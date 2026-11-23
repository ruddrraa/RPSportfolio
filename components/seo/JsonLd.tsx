import React from "react";
import { profile } from "@/data/profile";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://rudrapratapsingh.tech/#person",
        name: profile.name,
        givenName: "Rudra Pratap",
        familyName: "Singh",
        additionalName: "Rudra",
        url: "https://rudrapratapsingh.tech",
        image: "https://rudrapratapsingh.tech/profile/portfolioicon.png",
        jobTitle: "Full-Stack Developer & AI Product Engineer",
        description:
          "Full-Stack Developer and AI Product Engineer based in Kolkata, India. Building responsive web applications, role-based business platforms, and applied computer vision systems.",
        email: profile.socials.email,
        telephone: "+918240005142",
        gender: "Male",
        nationality: {
          "@type": "Country",
          name: "India",
        },
        homeLocation: {
          "@type": "Place",
          name: "Kolkata, West Bengal, India",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kolkata",
            addressRegion: "West Bengal",
            addressCountry: "IN",
          },
        },
        alumniOf: {
          "@type": "EducationalOrganization",
          name: "Sister Nivedita University",
          url: "https://snuniv.ac.in",
          location: {
            "@type": "Place",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kolkata",
              addressRegion: "West Bengal",
              addressCountry: "IN",
            },
          },
        },
        sameAs: [
          profile.socials.github,
          profile.socials.linkedin,
          profile.socials.x,
          profile.socials.instagram,
        ],
        knowsAbout: [
          "Full-Stack Web Development",
          "Artificial Intelligence",
          "Computer Vision",
          "Deep Learning",
          "RT-DETR Object Detection",
          "PyTorch",
          "React 19",
          "Next.js 15",
          "TypeScript",
          "Node.js",
          "PostgreSQL",
          "MongoDB Atlas",
          "Tailwind CSS v4",
          "Three.js",
          "GSAP Animation",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://rudrapratapsingh.tech/#website",
        url: "https://rudrapratapsingh.tech",
        name: "Rudra Pratap Singh Portfolio",
        headline: "Rudra Pratap Singh | Full-Stack Developer & AI Product Engineer",
        description:
          "Official portfolio of Rudra Pratap Singh, a Full-Stack Developer and AI Product Engineer from Kolkata, India. Explore software engineering projects, AI systems, computer vision research and professional experience.",
        inLanguage: "en-US",
        publisher: {
          "@id": "https://rudrapratapsingh.tech/#person",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": "https://rudrapratapsingh.tech/#profilepage",
        url: "https://rudrapratapsingh.tech",
        name: "Rudra Pratap Singh — Official Portfolio",
        description:
          "Explore the official portfolio of Rudra Pratap Singh: full-stack architecture, AI engineering systems, and academic computer vision research.",
        mainEntity: {
          "@id": "https://rudrapratapsingh.tech/#person",
        },
        primaryImageOfPage: "https://rudrapratapsingh.tech/profile/portfolioicon.png",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

