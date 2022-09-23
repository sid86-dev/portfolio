import React from "react";


type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const ProjectCard = ({ children }: Props) => {
  return (
    <div className="col-md-6 my-3 px-lg-4">
      {children}
    </div>
  );
};
