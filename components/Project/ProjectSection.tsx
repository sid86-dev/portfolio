import React, { FC } from "react";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";

interface IProps {
  projects: Project[] | null;
}

export const ProjectSection: FC<IProps> = ({ projects }) => {
  return (
    <div className="container justify-content-center py-4">
      <h2 className="text-center">Projects</h2>
      <div className="container mt-5 py-2">
        <div className="row justify-content-center">
          {/* pre rendered projects */}
          {projects && <ProjectCard data={projects} />}
        </div>
      </div>
    </div>
  );
};
