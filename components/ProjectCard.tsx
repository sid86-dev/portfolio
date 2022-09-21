import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export const ProjectCard = ({ children }: Props) => {
  return (
    <div className="col-md-6 my-3 px-lg-4">
      <div className="card border-0 mt-3 shadow rounded-0">
        <div className="card-header d-flex align-items-center border-0 rounded-0 rounded-top">
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <input
            type="text"
            className="border-0 form-control w-75 py-0 mx-lg-4 mx-2 text-muted text-center"
            value={"uniswap-weld.vercel.app"}
            disabled
          />
          <ArrowForwardIcon className="text-dark" />
        </div>
      </div>
      {children}
    </div>
  );
};
