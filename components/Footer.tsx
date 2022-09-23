import React from "react";

export const Footer = () => {
  return (
    <div className="container py-5 text-center justify-content-center">
      {" "}
      <p>
        Find an issue with this page?{" "}
        <a
          href="https://github.com/sid86-dev/portfolio"
          target="_blank"
          className="text-dark"
          rel="noreferrer"
        >
          Fix it on Github
        </a>
      </p>
      {"  "}
      <div className="d-flex justify-content-center">
        <hr className="divider w-25" />
      </div>
      <p>Copyright © 2022 sid86-dev</p>
      <p>Created with</p>
      <div className="d-flex justify-content-center">
        <hr className="divider w-25" />
      </div>
    </div>
  );
};
