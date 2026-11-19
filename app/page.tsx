import { Hero } from "@/components/sections/Hero";
import { Perspective } from "@/components/sections/Perspective";
import { Expertise } from "@/components/sections/Expertise";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Experience } from "@/components/sections/Experience";
import { Research } from "@/components/sections/Research";

export default function Home() {
  return (
    <div className="space-y-8 sm:space-y-12 md:space-y-20">
      <Hero />
      <Perspective />
      <Expertise />
      <ProjectsGallery />
      <Experience />
      <Research />
    </div>
  );
}
