import type React from "react";
import { ProjectCard } from "../cards/projectCard";
import { ExperienceCard } from "../cards/experienceCard";
import { experiences, projects } from "@/data";

const RightContent: React.FC = () => {
  return (
    <div className="">
      <section className="">
        <h1 className="underline">Projects</h1>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
      <section className="mt-4">
        <h1 className="underline">Experience</h1>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </section>
    </div>
  );
};

export default RightContent;
