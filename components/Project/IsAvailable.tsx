import React, { ReactNode } from "react";
import OpenInNewSharpIcon from "@mui/icons-material/OpenInNewSharp";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Project } from "../../types";
import { ProjectCard } from "../ProjectCard";

interface IProps {
  data: Project[];
}

const IsAvailable: Function = ({ data }: IProps): ReactNode[] => {
  return data.map((item, index) => (
    <ProjectCard key={index}>
      <div className="card-body">
        <img
          src={item.image}
          className="card-img-top rounded-0 rounded-bottom shadow mb-3"
          alt="..."
        />

        <div className="d-flex align-items-center">
          <h5 className="card-title">{item.title}</h5>
          <OpenInNewSharpIcon fontSize="inherit" className="mx-2" />
          <GitHubIcon className="mx-5" />
        </div>

        <p className="card-text my-3 text-muted">{item.description}</p>
      </div>
    </ProjectCard>
  ));
};

export default IsAvailable;
