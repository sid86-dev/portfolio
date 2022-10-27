import React, { FC } from "react";
import { Project } from "../../types";
import ProjectCard from "./ProjectCard";

interface IProps {
  projects: Project[] | null;
}

export const ProjectSection: FC<IProps> = ({ projects }) => {
  return (
    <div className="container justify-content-center py-3">
      <h2 className="text-center">Projects</h2>
      <div className="container py-2">
        <div className="row justify-content-center">
          {projects && <ProjectCard data={projects} />}
        </div>
      </div>
    </div>
  );
};
