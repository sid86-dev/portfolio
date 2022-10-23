import React, { useContext } from "react";
import { Context } from "../context/store";
import { AppStoreContext } from "../types";
import {
  NextDarkLogo,
  NextLightLogo,
  ReactLogo,
  TypescriptLogo,
} from "./Icons/StackIcons";

export const Footer = () => {
  const [state] = useContext<AppStoreContext>(Context);

  return (
    <div className={`container py-5 text-center justify-content-center`}>
      {" "}
      <p>
        Find an issue with this page?{" "}
        <a
          href="https://github.com/sid86-dev/portfolio"
          target="_blank"
          className="text-primary text-decoration-none"
          rel="noreferrer"
        >
          Fix it on Github
        </a>
      </p>
      {"  "}
      <div className="d-flex justify-content-center">
        <hr className="divider w-25" />
      </div>
      <p>
        Need help? Email{" "}
        <span className={state.isDark ? "text-white" : "text-dark"}>
          sid86harth@gmail.com
        </span>{" "}
      </p>
      <p>
        Created with {""}
        <span className="mx-1 ">
          {state.isDark ? <NextDarkLogo /> : <NextLightLogo />}
        </span>
        <span className="mx-1 ">
          <ReactLogo />
        </span>
        <span className="mx-1 ">
          <TypescriptLogo />
        </span>
      </p>
      <p>Copyright © 2022 sid86</p>
    </div>
  );
};
