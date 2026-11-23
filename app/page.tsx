import type { Metadata } from "next";
import { Hero } from "../components/sections/Hero";
import { Perspective } from "../components/sections/Perspective";
import { Expertise } from "../components/sections/Expertise";
import { ProjectsGallery } from "../components/sections/ProjectsGallery";
import { Experience } from "../components/sections/Experience";
import { Research } from "../components/sections/Research";

export const metadata: Metadata = {
  title: "Rudra Pratap Singh | Full-Stack Developer & AI Product Engineer",
  alternates: {
    canonical: "https://rudrapratapsingh.tech",
  },
};

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <Perspective />
      <Expertise />
      <ProjectsGallery />
      <Experience />
      <Research />
    </div>
  );
}
