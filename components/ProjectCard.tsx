import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewSharpIcon from '@mui/icons-material/OpenInNewSharp';
import GitHubIcon from '@mui/icons-material/GitHub';

export const ProjectCard = () => {
  return (
    <div className="col-md-6 my-3 px-lg-4">
      <div className="card border-0 my-3 shadow">
        <div className="card-header d-flex align-items-center border-0">
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <input
            type="text"
            className="border-0 form-control w-75 py-0 mx-lg-4 mx-2 text-muted text-center"
            value={'uniswap-weld.vercel.app'}
          disabled/>
          <ArrowForwardIcon className="text-dark" />
        </div>
        <img src="/images/img1.png" className="card-img-top rounded-0 rounded-bottom" alt="..." />
      
      </div>
      <div className="card-body">
          <div className="d-flex align-items-center">
          <h5 className="card-title">uniswap-clone</h5>
              <OpenInNewSharpIcon fontSize="inherit" className="mx-2"/>
            <GitHubIcon className="mx-5"/>
          </div>
          <p className="card-text my-3 text-muted">
          Uniswap clone made using React.js and Next.js build on top of rinkby etherium test network.
          </p>
          
        </div>
    </div>
  );
};
