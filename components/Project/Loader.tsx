import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export const Loader = () => {
  return (
    <div className="col-md-6 col-xl-5 my-3 px-lg-4">
      <div className="card border-0 mt-3 rounded-0">
        <div className="card-header d-flex align-items-center border-0 rounded-0 rounded-top">
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <span className="dot mx-1"></span>
          <input
            type="text"
            className="border-0 form-control w-75 py-0 mx-lg-4 mx-2 text-muted text-center"
            value=""
            disabled
          />
          <ArrowForwardIcon className="text-dark" />
        </div>
      </div>
      <div className="card-body">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWQvWzJha6lGk4qxCdRFc-9zOA2L_ZMLKcA&usqp=CAU"
          className="card-img-top rounded-0 rounded-bottom shadow mb-3"
          alt="..."
          height="500px"
          width="900px"
          priority
        />

        <p className="card-text placeholder-glow">
          <span className="placeholder col-3"></span>
          <span className="placeholder col-12"></span>
          <span className="placeholder col-12"></span>
        </p>
      </div>
    </div>
  );
};
