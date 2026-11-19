import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Expertise } from "@/components/sections/Expertise";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Experience } from "@/components/sections/Experience";
import { Research } from "@/components/sections/Research";

export default function Home() {
  return (
    <div className="space-y-4 md:space-y-8">
      <Hero />
      <About />
      <Expertise />
      <ProjectsGallery />
      <Experience />
      <Research />
    </div>
  );
}
