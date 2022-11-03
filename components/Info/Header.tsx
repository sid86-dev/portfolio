import React, { FC } from "react";
import { Project } from "../../types";

interface IProps {
    project: Project;
}

export const Header: FC<IProps> = ({project}) => {
  return (
    <div className="container text-center">
      <div className="col-12">
        <h1 className="fs-1">{project.title}</h1>
        <p>{project.description}</p>
      </div>
    </div>
  );
};
