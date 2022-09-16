import React from "react";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};
